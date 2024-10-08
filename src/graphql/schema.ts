import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation signUp($data: UserCreateInput!) {
    signUp(data: $data) {
      name
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const VERIFY_ACCOUNT = gql`
  mutation verifyAccount($email: String!, $otp: String!) {
    verifyAccount(email: $email, otp: $otp)
  }
`;

export const REQUEST_OTP = gql`
  mutation requestOtp($email: String!, $type: String!) {
    requestOtp(email: $email, type: $type)
  }
`;
export const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!, $otp: String!, $password: String!) {
    resetPassword(otp: $otp, password: $password, email: $email)
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser {
      dateOfBirth
      name
      id
      email
      phone
      role
      verification
      customer {
        address
        picture
        cart {
          id
          foodId
          totalPrice
          food {
            name
            price
            id
          }
        }
      }
    }
  }
`;
 
export const FETCH_FOODS =gql`
query fetchFoods($category: String){
fetchFoods(category:$category){
  id
  name
  description
  category
  price
  picture
  restaurantId
}
}
`
export const UPDATE_CART =gql`
mutation updateCart($quantity: Float!, $foodId: String!) {
  updateCart(quantity:$quantity,foodId:$foodId)
}
`

export const FETCH_CART=gql`
query fetchCart{
  fetchCart{
    food{
      id
      name
      picture
      price
    }
    quantity
    totalPrice
  }
}
`