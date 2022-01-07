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
  description: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  seller: SellerDto;
  sellerId: Scalars['Float'];
  status: Scalars['String'];
};

export type ProductImageInput = {
  url: Scalars['String'];
};

export type ProductPaginatedRespone = {
  __typename?: 'ProductPaginatedRespone';
  data: Array<ProductDto>;
  total: Scalars['Float'];
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

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'CreateProductPayload', product: { __typename?: 'ProductDTO', id: number } } };

export type GenerateUploadMutationVariables = Exact<{
  input: GenerateUploadInput;
}>;


export type GenerateUploadMutation = { __typename?: 'Mutation', generateUpload: { __typename?: 'GenerateUploadPayload', putUri: string, getUri: string, key: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', token: string, user: { __typename?: 'UserDTO', name: string, profileImageUri?: Maybe<string>, seller?: Maybe<{ __typename?: 'SellerDTO', id: number, name: string, description: string, email: string, mobileNumber: string, bannerImage?: Maybe<string>, status: string, address: { __typename?: 'AddressDTO', street: string, suburb: string, city: string, postCode: string, province?: Maybe<string> } }> } } };

export type RegisterSellerMutationVariables = Exact<{
  input: RegisterSellerInput;
}>;


export type RegisterSellerMutation = { __typename?: 'Mutation', registerSeller: { __typename?: 'RegisterSellerPayload', sellerId: number } };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', productById: { __typename?: 'ProductDTO', name: string, description: string, price: number, status: string, image: string, seller: { __typename?: 'SellerDTO', id: number, name: string, email: string, mobileNumber: string, bannerImage?: Maybe<string>, status: string, address: { __typename?: 'AddressDTO', street: string, suburb: string, city: string, postCode: string, province?: Maybe<string> } } } };

export type ProductsQueryVariables = Exact<{
  search: Scalars['String'];
  sellerId: Scalars['Float'];
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductPaginatedRespone', total: number, data: Array<{ __typename?: 'ProductDTO', id: number, name: string, description: string, price: number, status: string, image: string, sellerId: number }> } };


export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    product {
      id
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GenerateUploadDocument = gql`
    mutation GenerateUpload($input: GenerateUploadInput!) {
  generateUpload(input: $input) {
    putUri
    getUri
    key
  }
}
    `;
export type GenerateUploadMutationFn = Apollo.MutationFunction<GenerateUploadMutation, GenerateUploadMutationVariables>;

/**
 * __useGenerateUploadMutation__
 *
 * To run a mutation, you first call `useGenerateUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateUploadMutation, { data, loading, error }] = useGenerateUploadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateUploadMutation(baseOptions?: Apollo.MutationHookOptions<GenerateUploadMutation, GenerateUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateUploadMutation, GenerateUploadMutationVariables>(GenerateUploadDocument, options);
      }
export type GenerateUploadMutationHookResult = ReturnType<typeof useGenerateUploadMutation>;
export type GenerateUploadMutationResult = Apollo.MutationResult<GenerateUploadMutation>;
export type GenerateUploadMutationOptions = Apollo.BaseMutationOptions<GenerateUploadMutation, GenerateUploadMutationVariables>;
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
export const ProductByIdDocument = gql`
    query ProductById($id: Float!) {
  productById(id: $id) {
    name
    description
    price
    status
    image
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
    query Products($search: String!, $sellerId: Float!) {
  products(q: $search, first: 20, sellerId: $sellerId) {
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
 *      sellerId: // value for 'sellerId'
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