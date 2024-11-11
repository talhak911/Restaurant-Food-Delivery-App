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
    "\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken)\n  }\n": types.RefreshTokenDocument,
    "\n  mutation signIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          id\n          wantsOrderNotifications\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.SignInDocument,
    "\n  mutation verifyAccount($email: String!, $otp: String!) {\n    verifyAccount(email: $email, otp: $otp)\n  }\n": types.VerifyAccountDocument,
    "\n  mutation requestOtp($email: String!, $type: String!) {\n    requestOtp(email: $email, type: $type)\n  }\n": types.RequestOtpDocument,
    "\n  mutation resetPassword($email: String!, $otp: String!, $password: String!) {\n    resetPassword(otp: $otp, password: $password, email: $email)\n  }\n": types.ResetPasswordDocument,
    "\n  query getCurrentUser {\n    getCurrentUser {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        wantsOrderNotifications\n        picture\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  query fetchFoods(\n    $category: String\n    $limit: Int\n    $offset: Int\n    $name: String\n  ) {\n    fetchFoods(\n      category: $category\n      limit: $limit\n      offset: $offset\n      name: $name\n    ) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n": types.FetchFoodsDocument,
    "\n  query getBestSeller($limit: Int) {\n    getBestSellers(limit: $limit) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n": types.GetBestSellerDocument,
    "\n  query getSuggestion($limit: Int) {\n    getSuggestion(limit: $limit) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n": types.GetSuggestionDocument,
    "\n  mutation addReview($reviews: [ReviewsParam!]!, $orderId: Float!) {\n    addReview(reviews: $reviews, orderId: $orderId)\n  }\n": types.AddReviewDocument,
    "\n  mutation updateCart($quantity: Float!, $foodId: String!) {\n    updateCart(quantity: $quantity, foodId: $foodId)\n  }\n": types.UpdateCartDocument,
    "\n  query fetchCart {\n    fetchCart {\n      food {\n        id\n        name\n        picture\n        price\n      }\n      quantity\n      totalPrice\n    }\n  }\n": types.FetchCartDocument,
    "\n  mutation removeFromCart($foodId: String!) {\n    removeFromCart(foodId: $foodId)\n  }\n": types.RemoveFromCartDocument,
    "\n  mutation addCustomerAddress($name: String!, $address: String!) {\n    addCustomerAddress(name: $name, address: $address) {\n      id\n      name\n      address\n    }\n  }\n": types.AddCustomerAddressDocument,
    "\n  mutation placeOrder($deliveryAddress: String!) {\n    placeOrder(deliveryAddress: $deliveryAddress) {\n      totalPrice\n      foods\n    }\n  }\n": types.PlaceOrderDocument,
    "\n  query fetchOrders($status: String) {\n    fetchOrders(status: $status) {\n      id\n      totalPrice\n      foods\n      status\n      deliveryPerson\n      deliveryTime\n      customerId\n      restaurantId\n      deliveryAddress\n      createdAt\n      isReviewed\n    }\n  }\n": types.FetchOrdersDocument,
    "\n  mutation updateCustomer(\n    $dateOfBirth: DateTimeISO\n    $phone: String\n    $name: String\n    $picture: String\n  ) {\n    updateCustomer(\n      dateOfBirth: $dateOfBirth\n      phone: $phone\n      name: $name\n      picture: $picture\n    ) {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        picture\n        wantsOrderNotifications\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n": types.UpdateCustomerDocument,
    "\n  mutation changePassword($password: String!, $newPassword: String!) {\n    changePassword(password: $password, newPassword: $newPassword)\n  }\n": types.ChangePasswordDocument,
    "\n  mutation cancelOrder($orderId: Float!) {\n    cancelOrder(orderId: $orderId)\n  }\n": types.CancelOrderDocument,
    "\n  mutation updateOrderNotifications($status: Boolean!) {\n    updateOrderNotifications(status: $status)\n  }\n": types.UpdateOrderNotificationsDocument,
    "\n  query findUser($email: String!) {\n    findUser(email: $email)\n  }\n": types.FindUserDocument,
    "\n  mutation oAuthSignIn($token: String!) {\n    oAuthSignIn(token: $token){\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          wantsOrderNotifications\n          id\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.OAuthSignInDocument,
    "\n  mutation oAuthSignUp($token: String!,$data:OAuthSignUpInputs!) {\n    oAuthSignUp(token: $token,data:$data){\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          id\n          wantsOrderNotifications\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.OAuthSignUpDocument,
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
export function gql(source: "\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken)\n  }\n"): (typeof documents)["\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          id\n          wantsOrderNotifications\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation signIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          id\n          wantsOrderNotifications\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
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
export function gql(source: "\n  query getCurrentUser {\n    getCurrentUser {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        wantsOrderNotifications\n        picture\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentUser {\n    getCurrentUser {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        wantsOrderNotifications\n        picture\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchFoods(\n    $category: String\n    $limit: Int\n    $offset: Int\n    $name: String\n  ) {\n    fetchFoods(\n      category: $category\n      limit: $limit\n      offset: $offset\n      name: $name\n    ) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n"): (typeof documents)["\n  query fetchFoods(\n    $category: String\n    $limit: Int\n    $offset: Int\n    $name: String\n  ) {\n    fetchFoods(\n      category: $category\n      limit: $limit\n      offset: $offset\n      name: $name\n    ) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBestSeller($limit: Int) {\n    getBestSellers(limit: $limit) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n"): (typeof documents)["\n  query getBestSeller($limit: Int) {\n    getBestSellers(limit: $limit) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getSuggestion($limit: Int) {\n    getSuggestion(limit: $limit) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n"): (typeof documents)["\n  query getSuggestion($limit: Int) {\n    getSuggestion(limit: $limit) {\n      id\n      name\n      description\n      category\n      price\n      picture\n      restaurantId\n      averageRating\n      totalRatingsCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addReview($reviews: [ReviewsParam!]!, $orderId: Float!) {\n    addReview(reviews: $reviews, orderId: $orderId)\n  }\n"): (typeof documents)["\n  mutation addReview($reviews: [ReviewsParam!]!, $orderId: Float!) {\n    addReview(reviews: $reviews, orderId: $orderId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateCart($quantity: Float!, $foodId: String!) {\n    updateCart(quantity: $quantity, foodId: $foodId)\n  }\n"): (typeof documents)["\n  mutation updateCart($quantity: Float!, $foodId: String!) {\n    updateCart(quantity: $quantity, foodId: $foodId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchCart {\n    fetchCart {\n      food {\n        id\n        name\n        picture\n        price\n      }\n      quantity\n      totalPrice\n    }\n  }\n"): (typeof documents)["\n  query fetchCart {\n    fetchCart {\n      food {\n        id\n        name\n        picture\n        price\n      }\n      quantity\n      totalPrice\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation removeFromCart($foodId: String!) {\n    removeFromCart(foodId: $foodId)\n  }\n"): (typeof documents)["\n  mutation removeFromCart($foodId: String!) {\n    removeFromCart(foodId: $foodId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addCustomerAddress($name: String!, $address: String!) {\n    addCustomerAddress(name: $name, address: $address) {\n      id\n      name\n      address\n    }\n  }\n"): (typeof documents)["\n  mutation addCustomerAddress($name: String!, $address: String!) {\n    addCustomerAddress(name: $name, address: $address) {\n      id\n      name\n      address\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation placeOrder($deliveryAddress: String!) {\n    placeOrder(deliveryAddress: $deliveryAddress) {\n      totalPrice\n      foods\n    }\n  }\n"): (typeof documents)["\n  mutation placeOrder($deliveryAddress: String!) {\n    placeOrder(deliveryAddress: $deliveryAddress) {\n      totalPrice\n      foods\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchOrders($status: String) {\n    fetchOrders(status: $status) {\n      id\n      totalPrice\n      foods\n      status\n      deliveryPerson\n      deliveryTime\n      customerId\n      restaurantId\n      deliveryAddress\n      createdAt\n      isReviewed\n    }\n  }\n"): (typeof documents)["\n  query fetchOrders($status: String) {\n    fetchOrders(status: $status) {\n      id\n      totalPrice\n      foods\n      status\n      deliveryPerson\n      deliveryTime\n      customerId\n      restaurantId\n      deliveryAddress\n      createdAt\n      isReviewed\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateCustomer(\n    $dateOfBirth: DateTimeISO\n    $phone: String\n    $name: String\n    $picture: String\n  ) {\n    updateCustomer(\n      dateOfBirth: $dateOfBirth\n      phone: $phone\n      name: $name\n      picture: $picture\n    ) {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        picture\n        wantsOrderNotifications\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateCustomer(\n    $dateOfBirth: DateTimeISO\n    $phone: String\n    $name: String\n    $picture: String\n  ) {\n    updateCustomer(\n      dateOfBirth: $dateOfBirth\n      phone: $phone\n      name: $name\n      picture: $picture\n    ) {\n      dateOfBirth\n      name\n      id\n      email\n      phone\n      role\n      verification\n      customer {\n        address\n        picture\n        wantsOrderNotifications\n        cart {\n          id\n          foodId\n          totalPrice\n          food {\n            name\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation changePassword($password: String!, $newPassword: String!) {\n    changePassword(password: $password, newPassword: $newPassword)\n  }\n"): (typeof documents)["\n  mutation changePassword($password: String!, $newPassword: String!) {\n    changePassword(password: $password, newPassword: $newPassword)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation cancelOrder($orderId: Float!) {\n    cancelOrder(orderId: $orderId)\n  }\n"): (typeof documents)["\n  mutation cancelOrder($orderId: Float!) {\n    cancelOrder(orderId: $orderId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateOrderNotifications($status: Boolean!) {\n    updateOrderNotifications(status: $status)\n  }\n"): (typeof documents)["\n  mutation updateOrderNotifications($status: Boolean!) {\n    updateOrderNotifications(status: $status)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findUser($email: String!) {\n    findUser(email: $email)\n  }\n"): (typeof documents)["\n  query findUser($email: String!) {\n    findUser(email: $email)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation oAuthSignIn($token: String!) {\n    oAuthSignIn(token: $token){\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          wantsOrderNotifications\n          id\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation oAuthSignIn($token: String!) {\n    oAuthSignIn(token: $token){\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          wantsOrderNotifications\n          id\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation oAuthSignUp($token: String!,$data:OAuthSignUpInputs!) {\n    oAuthSignUp(token: $token,data:$data){\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          id\n          wantsOrderNotifications\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation oAuthSignUp($token: String!,$data:OAuthSignUpInputs!) {\n    oAuthSignUp(token: $token,data:$data){\n      user {\n        id\n        email\n        phone\n        dateOfBirth\n        name\n        role\n        verification\n        customer {\n          address\n          picture\n          id\n          wantsOrderNotifications\n          cart {\n            id\n            foodId\n            totalPrice\n            food {\n              name\n              price\n              id\n            }\n          }\n        }\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;