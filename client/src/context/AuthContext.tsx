import { createContext, useCallback, useEffect, useMemo, useRef, useState, useContext } from "react";
import useLocalStorage from 'react-use/lib/useLocalStorage'
import jwtDecode from 'jwt-decode';
import { Role } from "../types";
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { Toast } from '../modules/Toast/Toast';
import { useLoginMutation } from "../generated/graphql";

interface Props {
    children: JSX.Element
}

export function AuthContextProvider({ children }: Props) {
    const loggingOut = useRef(false);
    const authTokenLoaded = useRef<boolean>(false);

    const [localAuth, setLocalAuth] = useLocalStorage<AuthContextType>('auth', {
        authenticated: false,
    });

    const [auth, setAuth] = useState<AuthContextType | undefined>(() => {
        console.log(localAuth);
        
        authTokenLoaded.current = true;
        return localAuth;
    });

    const [login, { loading }] = useLoginMutation();

    const handleLogin = useCallback(
        async function (username: string, password: string) {
            loggingOut.current = false;

            try {
                const result = await login({
                    variables: {
                        input: {
                            email: username,
                            password: password
                        }
                    }
                })
                
                if (result && result.data) {
                    const token = result.data.login.token;

                    const decoded = jwtDecode(token) as {
                        email: string;
                        roles: RoleProps[],
                        exp: number
                    };

                    const newAuth: AuthContextType = {
                        authenticated: true,
                        token,
                        roles: decoded.roles
                            ? parseRoles(decoded.roles)
                            : [Role.UNKNOWN],
                        expiration: decoded.exp,
                        user: { 
                            name: result.data.login.user.name,
                            profileImageUri: result.data.login.user.profileImageUri || ''
                        }
                    };

                    setAuth(newAuth);
                    setLocalAuth(newAuth);

                    return result;
                } else {
                    Toast(
                        'error',
                        'Something went wrong! Please ensure that your username and password are correct'
                    );
                }
            } catch (e) {
                Toast(
                    'error',
                    'Something went wrong! Please ensure that your username and password are correct'
                );
            }
        },
        [setLocalAuth]
    );

    const handleLogout = useCallback(() => {
        if (auth?.authenticated) {
            setAuth({ authenticated: false });
            setLocalAuth({ authenticated: false });
        }
    }, [auth?.authenticated, setLocalAuth]);

    useEffect(() => {
        if (loggingOut.current) {
            handleLogout();
            loggingOut.current = false;
        }
    }, [loggingOut, handleLogout]);

    useEffect(() => {
        let innerAuth: AuthContextType | undefined = { authenticated: false };

        if (localAuth !== null) {
            if(localAuth?.authenticated && localAuth?.expiration * 1000 < Date.now()) {
                handleLogout();
                loggingOut.current = false;
            }
            
            innerAuth = localAuth;

            setAuth(innerAuth);
        }

    }, [localAuth, auth]);

    const hasRole = useCallback(
        (role: Role) => {
            if (!auth?.authenticated) {
                return false;
            }
            if (
                auth.roles?.indexOf(Role.ADMIN) !== -1 ||
                auth.roles?.indexOf(role) !== -1
            ) {
                return true;
            }

            return false;
        },
        [auth]
    );

    const value = useMemo(
        () => ({ auth, handleLogin, handleLogout, hasRole }),
        [auth, handleLogin, handleLogout, hasRole]
    );

    // Prevent double render before auth token loaded
    if (!authTokenLoaded.current) {
        return null;
    }

    //@ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

interface RoleProps {
    name: string;
    description: string;
}

interface UserProps {
    name: string;
    profileImageUri: string;
}

function parseRoles(roles: RoleProps[]) {
    return roles.map((role) => {
        switch (role.name) {
            case Role.ADMIN:
                return Role.ADMIN;
            case Role.SELLER:
                return Role.SELLER;
            default:
                return Role.UNKNOWN;
        }
    });
}


export const AuthContext = createContext<AuthContextStateType>({
    auth: { authenticated: false },
    handleLogin: async () => new Promise(() => { }),
    handleLogout: () => { },
    hasRole: () => true,
});

export type AuthContextType =
    | {
        token: string;
        authenticated: true;
        roles?: Role[];
        expiration: number;
        user: UserProps
    }
    | {
        authenticated: false;
    };

export interface AuthContextStateType {
    auth: AuthContextType;
    handleLogin: (username: string, password: string) => Promise<Response>;
    handleLogout: () => void;
    hasRole(role: Role): boolean;
}
export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);