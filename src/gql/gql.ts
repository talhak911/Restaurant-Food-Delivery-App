/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation signUp($data: UserCreateInput!) {\n    signUp(data: $data) {\n      name\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation signIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password)\n  }\n": types.SignInDocument,
    "\n  mutation verifyAccount($email: String!, $otp: String!) {\n    verifyAccount(email: $email, otp: $otp)\n  }\n": types.VerifyAccountDocument,
    "\n  mutation requestOtp($email: String!, $type: String!) {\n    requestOtp(email: $email, type: $type)\n  }\n": types.RequestOtpDocument,
    "\n  mutation resetPassword($email: String!, $otp: String!, $password: String!) {\n    resetPassword(otp: $otp, password: $password, email: $email)\n  }\n": types.ResetPasswordDocument,
    "\n  query getCurrentUser {\n    getCurrentUser {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        picture\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\nquery fetchFoods($category: String){\nfetchFoods(category:$category){\n  id\n  name\n  description\n  category\n  price\n  picture\n  restaurantId\n}\n}\n": types.FetchFoodsDocument,
    "\nmutation updateCart($quantity: Float!, $foodId: String!) {\n  updateCart(quantity:$quantity,foodId:$foodId)\n}\n": types.UpdateCartDocument,
    "\nquery fetchCart{\n  fetchCart{\n    food{\n      id\n      name\n      picture\n      price\n    }\n    quantity\n    totalPrice\n  }\n}\n": types.FetchCartDocument,
    "\nmutation removeFromCart($foodId:String!){\nremoveFromCart(foodId:$foodId)\n}\n": types.RemoveFromCartDocument,
    "\nmutation addCustomerAddress($name:String!,$address:String!){\n  addCustomerAddress(name:$name,address:$address){\n    id\n    name\n    address\n  }\n}\n": types.AddCustomerAddressDocument,
    "\nmutation placeOrder($deliveryAddress: String!) {\n  placeOrder(deliveryAddress:$deliveryAddress) {\n    totalPrice\n    foods\n  }\n}\n": types.PlaceOrderDocument,
    "\nquery fetchOrders($status: String) {\n    fetchOrders(status: $status) {\n        id\n        totalPrice\n        foods\n        status\n        deliveryPerson\n        deliveryTime\n        customerId\n        restaurantId\n        deliveryAddress\n        createdAt\n    }\n}\n": types.FetchOrdersDocument,
    "\nmutation updateCustomer($dateOfBirth:DateTimeISO,$phone:String,$name:String,$picture:String){\n  updateCustomer(dateOfBirth:$dateOfBirth,phone:$phone,name:$name,picture:$picture)\n}\n": types.UpdateCustomerDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signUp($data: UserCreateInput!) {\n    signUp(data: $data) {\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation signUp($data: UserCreateInput!) {\n    signUp(data: $data) {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password)\n  }\n"): (typeof documents)["\n  mutation signIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifyAccount($email: String!, $otp: String!) {\n    verifyAccount(email: $email, otp: $otp)\n  }\n"): (typeof documents)["\n  mutation verifyAccount($email: String!, $otp: String!) {\n    verifyAccount(email: $email, otp: $otp)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation requestOtp($email: String!, $type: String!) {\n    requestOtp(email: $email, type: $type)\n  }\n"): (typeof documents)["\n  mutation requestOtp($email: String!, $type: String!) {\n    requestOtp(email: $email, type: $type)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation resetPassword($email: String!, $otp: String!, $password: String!) {\n    resetPassword(otp: $otp, password: $password, email: $email)\n  }\n"): (typeof documents)["\n  mutation resetPassword($email: String!, $otp: String!, $password: String!) {\n    resetPassword(otp: $otp, password: $password, email: $email)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentUser {\n    getCurrentUser {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        picture\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentUser {\n    getCurrentUser {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        picture\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery fetchFoods($category: String){\nfetchFoods(category:$category){\n  id\n  name\n  description\n  category\n  price\n  picture\n  restaurantId\n}\n}\n"): (typeof documents)["\nquery fetchFoods($category: String){\nfetchFoods(category:$category){\n  id\n  name\n  description\n  category\n  price\n  picture\n  restaurantId\n}\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateCart($quantity: Float!, $foodId: String!) {\n  updateCart(quantity:$quantity,foodId:$foodId)\n}\n"): (typeof documents)["\nmutation updateCart($quantity: Float!, $foodId: String!) {\n  updateCart(quantity:$quantity,foodId:$foodId)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery fetchCart{\n  fetchCart{\n    food{\n      id\n      name\n      picture\n      price\n    }\n    quantity\n    totalPrice\n  }\n}\n"): (typeof documents)["\nquery fetchCart{\n  fetchCart{\n    food{\n      id\n      name\n      picture\n      price\n    }\n    quantity\n    totalPrice\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation removeFromCart($foodId:String!){\nremoveFromCart(foodId:$foodId)\n}\n"): (typeof documents)["\nmutation removeFromCart($foodId:String!){\nremoveFromCart(foodId:$foodId)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addCustomerAddress($name:String!,$address:String!){\n  addCustomerAddress(name:$name,address:$address){\n    id\n    name\n    address\n  }\n}\n"): (typeof documents)["\nmutation addCustomerAddress($name:String!,$address:String!){\n  addCustomerAddress(name:$name,address:$address){\n    id\n    name\n    address\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation placeOrder($deliveryAddress: String!) {\n  placeOrder(deliveryAddress:$deliveryAddress) {\n    totalPrice\n    foods\n  }\n}\n"): (typeof documents)["\nmutation placeOrder($deliveryAddress: String!) {\n  placeOrder(deliveryAddress:$deliveryAddress) {\n    totalPrice\n    foods\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery fetchOrders($status: String) {\n    fetchOrders(status: $status) {\n        id\n        totalPrice\n        foods\n        status\n        deliveryPerson\n        deliveryTime\n        customerId\n        restaurantId\n        deliveryAddress\n        createdAt\n    }\n}\n"): (typeof documents)["\nquery fetchOrders($status: String) {\n    fetchOrders(status: $status) {\n        id\n        totalPrice\n        foods\n        status\n        deliveryPerson\n        deliveryTime\n        customerId\n        restaurantId\n        deliveryAddress\n        createdAt\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateCustomer($dateOfBirth:DateTimeISO,$phone:String,$name:String,$picture:String){\n  updateCustomer(dateOfBirth:$dateOfBirth,phone:$phone,name:$name,picture:$picture)\n}\n"): (typeof documents)["\nmutation updateCustomer($dateOfBirth:DateTimeISO,$phone:String,$name:String,$picture:String){\n  updateCustomer(dateOfBirth:$dateOfBirth,phone:$phone,name:$name,picture:$picture)\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;