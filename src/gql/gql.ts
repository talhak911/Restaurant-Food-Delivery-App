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
    "\n  mutation signIn($email: String!,$password:String!) {\n    signIn(email: $email,password:$password)\n  }\n": types.SignInDocument,
    "\n  mutation verifyAccount($email: String!,$otp:String!) {\n    verifyAccount(email: $email,otp:$otp)\n  }\n": types.VerifyAccountDocument,
    "\nmutation requestOtp($email: String!  $type: String!) {\n  requestOtp(email: $email, type: $type)\n}\n\n": types.RequestOtpDocument,
    "\nmutation resetPassword($email: String!, $otp: String! $password: String!) {\n  resetPassword(otp: $otp, password: $password, email: $email)\n}\n": types.ResetPasswordDocument,
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
export function gql(source: "\n  mutation signIn($email: String!,$password:String!) {\n    signIn(email: $email,password:$password)\n  }\n"): (typeof documents)["\n  mutation signIn($email: String!,$password:String!) {\n    signIn(email: $email,password:$password)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifyAccount($email: String!,$otp:String!) {\n    verifyAccount(email: $email,otp:$otp)\n  }\n"): (typeof documents)["\n  mutation verifyAccount($email: String!,$otp:String!) {\n    verifyAccount(email: $email,otp:$otp)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation requestOtp($email: String!  $type: String!) {\n  requestOtp(email: $email, type: $type)\n}\n\n"): (typeof documents)["\nmutation requestOtp($email: String!  $type: String!) {\n  requestOtp(email: $email, type: $type)\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation resetPassword($email: String!, $otp: String! $password: String!) {\n  resetPassword(otp: $otp, password: $password, email: $email)\n}\n"): (typeof documents)["\nmutation resetPassword($email: String!, $otp: String! $password: String!) {\n  resetPassword(otp: $otp, password: $password, email: $email)\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;