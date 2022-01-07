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

export type CreateProductInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  images: Array<ProductImageInput>;
  name: Scalars['String'];
  price: Scalars['Float'];
  sellerId: Scalars['Float'];
  videos: Array<ProductVideoInput>;
};

export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  product: ProductDto;
};

export type GenerateUploadInput = {
  uploadType: Scalars['String'];
};

export type GenerateUploadPayload = {
  __typename?: 'GenerateUploadPayload';
  getUri: Scalars['String'];
  key: Scalars['String'];
  putUri: Scalars['String'];
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
  createProduct: CreateProductPayload;
  generateUpload: GenerateUploadPayload;
  login: LoginPayload;
  registerSeller: RegisterSellerPayload;
  registerUser: RegisterUserPayload;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationGenerateUploadArgs = {
  input: GenerateUploadInput;
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
  category?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['Float'];
  image?: Maybe<Scalars['String']>;
  images: Array<ProductImageDto>;
  name: Scalars['String'];
  price: Scalars['Float'];
  seller: SellerDto;
  sellerId: Scalars['Float'];
  status: Scalars['String'];
  videos: Array<ProductVideoDto>;
};

export type ProductImageDto = {
  __typename?: 'ProductImageDTO';
  url: Scalars['String'];
};

export type ProductImageInput = {
  url: Scalars['String'];
};

export type ProductPaginatedRespone = {
  __typename?: 'ProductPaginatedRespone';
  data: Array<ProductDto>;
  total: Scalars['Float'];
};

export type ProductVideoDto = {
  __typename?: 'ProductVideoDTO';
  url: Scalars['String'];
};

export type ProductVideoInput = {
  url: Scalars['String'];
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
  sellerId?: Maybe<Scalars['Float']>;
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
  bannerImage?: Maybe<Scalars['String']>;
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

export type Header_UserInformationFragment = { __typename?: 'UserDTO', name: string, profileImageUri?: Maybe<string> };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', token: string, user: { __typename?: 'UserDTO', name: string, profileImageUri?: Maybe<string> } } };

export type RegisterUserMutationMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutationMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserPayload', user: { __typename?: 'UserDTO', id: number, name: string, surname?: Maybe<string>, email?: Maybe<string>, mobileNumber?: Maybe<string>, profileImageUri?: Maybe<string> } } };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', productById: { __typename?: 'ProductDTO', name: string, description: string, price: number, status: string, image?: Maybe<string>, images: Array<{ __typename?: 'ProductImageDTO', url: string }>, seller: { __typename?: 'SellerDTO', id: number, name: string, email: string, mobileNumber: string, bannerImage?: Maybe<string>, status: string, address: { __typename?: 'AddressDTO', street: string, suburb: string, city: string, postCode: string, province?: Maybe<string> } } } };

export type ProductsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductPaginatedRespone', total: number, data: Array<{ __typename?: 'ProductDTO', id: number, name: string, description: string, price: number, status: string, image?: Maybe<string>, sellerId: number, images: Array<{ __typename?: 'ProductImageDTO', url: string }> }> } };

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
export const ProductByIdDocument = gql`
    query ProductById($id: Float!) {
  productById(id: $id) {
    name
    description
    price
    status
    image
    images {
      url
    }
    seller {
      id
      name
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
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductsDocument = gql`
    query Products($search: String!) {
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
      images {
        url
      }
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;