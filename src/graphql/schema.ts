import {gql} from '@apollo/client'

export const SIGN_UP = gql`
  mutation signUp($data: UserCreateInput!) {
    signUp(data: $data) {
      name
    }
  }
`;


export const SIGN_IN = gql`
  mutation signIn($email: String!,$password:String!) {
    signIn(email: $email,password:$password)
  }
`;
export const VERIFY_ACCOUNT = gql`
  mutation verifyAccount($email: String!,$otp:String!) {
    verifyAccount(email: $email,otp:$otp)
  }
`;

