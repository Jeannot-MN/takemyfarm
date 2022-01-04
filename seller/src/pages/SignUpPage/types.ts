export interface GeneralDetails {
    name: string;
    description: string;
    email: string;
    mobileNumber: string;
    address: {
        street: string;
        suburb: string;
        city: string;
        postCode: string;
        province?: string;
    }
}

export interface UserDetails{
    name: string;
    surname: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
}

export interface SellerSignUpData{
    generalDetails: GeneralDetails;
    user: UserDetails
}