import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token: Scalars['String'];
  user: UserDto;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginPayload;
  registerUser: RegisterUserPayload;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type ProductDto = {
  __typename?: 'ProductDTO';
  description: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  sellerId: Scalars['Float'];
  status: Scalars['String'];
};

export type ProductPaginatedRespone = {
  __typename?: 'ProductPaginatedRespone';
  data: Array<ProductDto>;
  total: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserDto>;
  products: ProductPaginatedRespone;
  users: Array<UserDto>;
};


export type QueryProductsArgs = {
  after?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  q?: Maybe<Scalars['String']>;
};

export type RegisterUserInput = {
  email: Scalars['String'];
  mobileNumber: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profileImageUri?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  user: UserDto;
};

export type UserDto = {
  __typename?: 'UserDTO';
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  mobileNumber?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  profileImageUri?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type Header_UserInformationFragment = { __typename?: 'UserDTO', name: string, profileImageUri?: Maybe<string> };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', token: string, user: { __typename?: 'UserDTO', name: string, profileImageUri?: Maybe<string> } } };

export type RegisterUserMutationMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutationMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserPayload', user: { __typename?: 'UserDTO', id: number, name: string, surname?: Maybe<string>, email?: Maybe<string>, mobileNumber?: Maybe<string>, profileImageUri?: Maybe<string> } } };

export type ProduQueryQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type ProduQueryQuery = { __typename?: 'Query', products: { __typename?: 'ProductPaginatedRespone', total: number, data: Array<{ __typename?: 'ProductDTO', id: number, name: string, description: string, price: number, status: string, image: string, sellerId: number }> } };

export const Header_UserInformationFragmentDoc = gql`
    fragment Header_userInformation on UserDTO {
  name
  profileImageUri
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    user {
      name
      profileImageUri
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterUserMutationDocument = gql`
    mutation RegisterUserMutation($input: RegisterUserInput!) {
  registerUser(input: $input) {
    user {
      id
      name
      surname
      email
      mobileNumber
      ...Header_userInformation
    }
  }
}
    ${Header_UserInformationFragmentDoc}`;
export type RegisterUserMutationMutationFn = Apollo.MutationFunction<RegisterUserMutationMutation, RegisterUserMutationMutationVariables>;

/**
 * __useRegisterUserMutationMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutationMutation, { data, loading, error }] = useRegisterUserMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutationMutation, RegisterUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutationMutation, RegisterUserMutationMutationVariables>(RegisterUserMutationDocument, options);
      }
export type RegisterUserMutationMutationHookResult = ReturnType<typeof useRegisterUserMutationMutation>;
export type RegisterUserMutationMutationResult = Apollo.MutationResult<RegisterUserMutationMutation>;
export type RegisterUserMutationMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutationMutation, RegisterUserMutationMutationVariables>;
export const ProduQueryDocument = gql`
    query ProduQuery($search: String!) {
  products(q: $search, first: 20) {
    total
    data {
      id
      name
      description
      price
      status
      image
      sellerId
    }
  }
}
    `;

/**
 * __useProduQueryQuery__
 *
 * To run a query within a React component, call `useProduQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProduQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProduQueryQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useProduQueryQuery(baseOptions: Apollo.QueryHookOptions<ProduQueryQuery, ProduQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProduQueryQuery, ProduQueryQueryVariables>(ProduQueryDocument, options);
      }
export function useProduQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProduQueryQuery, ProduQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProduQueryQuery, ProduQueryQueryVariables>(ProduQueryDocument, options);
        }
export type ProduQueryQueryHookResult = ReturnType<typeof useProduQueryQuery>;
export type ProduQueryLazyQueryHookResult = ReturnType<typeof useProduQueryLazyQuery>;
export type ProduQueryQueryResult = Apollo.QueryResult<ProduQueryQuery, ProduQueryQueryVariables>;