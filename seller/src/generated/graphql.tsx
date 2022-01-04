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

export type AddressDto = {
  __typename?: 'AddressDTO';
  city: Scalars['String'];
  postCode: Scalars['String'];
  province?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  suburb: Scalars['String'];
};

export type AddressInput = {
  city: Scalars['String'];
  postCode: Scalars['String'];
  province?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  suburb: Scalars['String'];
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
  registerSeller: RegisterSellerPayload;
  registerUser: RegisterUserPayload;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterSellerArgs = {
  input: RegisterSellerInput;
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
  seller: SellerDto;
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
  productById: ProductDto;
  products: ProductPaginatedRespone;
  users: Array<UserDto>;
};


export type QueryProductByIdArgs = {
  id: Scalars['Float'];
};


export type QueryProductsArgs = {
  after?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  q?: Maybe<Scalars['String']>;
};

export type RegisterSellerInput = {
  address: AddressInput;
  description: Scalars['String'];
  email: Scalars['String'];
  mobileNumber: Scalars['String'];
  name: Scalars['String'];
  user: RegisterUserInput;
};

export type RegisterSellerPayload = {
  __typename?: 'RegisterSellerPayload';
  sellerId: Scalars['Float'];
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

export type SellerDto = {
  __typename?: 'SellerDTO';
  address: AddressDto;
  bannerImage: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  mobileNumber: Scalars['String'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type UserDto = {
  __typename?: 'UserDTO';
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  mobileNumber?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  profileImageUri?: Maybe<Scalars['String']>;
  seller?: Maybe<SellerDto>;
  surname?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', token: string, user: { __typename?: 'UserDTO', name: string, profileImageUri?: Maybe<string>, seller?: Maybe<{ __typename?: 'SellerDTO', id: number, name: string, description: string, email: string, mobileNumber: string, bannerImage: string, status: string, address: { __typename?: 'AddressDTO', street: string, suburb: string, city: string, postCode: string, province?: Maybe<string> } }> } } };

export type RegisterSellerMutationVariables = Exact<{
  input: RegisterSellerInput;
}>;


export type RegisterSellerMutation = { __typename?: 'Mutation', registerSeller: { __typename?: 'RegisterSellerPayload', sellerId: number } };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    user {
      name
      profileImageUri
      seller {
        id
        name
        description
        email
        mobileNumber
        bannerImage
        status
        address {
          street
          suburb
          city
          postCode
          province
        }
      }
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
export const RegisterSellerDocument = gql`
    mutation RegisterSeller($input: RegisterSellerInput!) {
  registerSeller(input: $input) {
    sellerId
  }
}
    `;
export type RegisterSellerMutationFn = Apollo.MutationFunction<RegisterSellerMutation, RegisterSellerMutationVariables>;

/**
 * __useRegisterSellerMutation__
 *
 * To run a mutation, you first call `useRegisterSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSellerMutation, { data, loading, error }] = useRegisterSellerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterSellerMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSellerMutation, RegisterSellerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterSellerMutation, RegisterSellerMutationVariables>(RegisterSellerDocument, options);
      }
export type RegisterSellerMutationHookResult = ReturnType<typeof useRegisterSellerMutation>;
export type RegisterSellerMutationResult = Apollo.MutationResult<RegisterSellerMutation>;
export type RegisterSellerMutationOptions = Apollo.BaseMutationOptions<RegisterSellerMutation, RegisterSellerMutationVariables>;