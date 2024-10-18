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
export const REMOVE_ITEM_FROM_CART=gql`
mutation removeFromCart($foodId:String!){
removeFromCart(foodId:$foodId)
}
`

export const ADD_CUSTOMER_ADDRESS=gql`
mutation addCustomerAddress($name:String!,$address:String!){
  addCustomerAddress(name:$name,address:$address){
    id
    name
    address
  }
}
`
export const PLACE_ORDER = gql`
mutation placeOrder($deliveryAddress: String!) {
  placeOrder(deliveryAddress:$deliveryAddress) {
    totalPrice
    foods
  }
}
`

export const FETCH_ORDERS = gql`
query fetchOrders($status: String) {
    fetchOrders(status: $status) {
        id
        totalPrice
        foods
        status
        deliveryPerson
        deliveryTime
        customerId
        restaurantId
        deliveryAddress
        createdAt
    }
}
`
export const UPDATE_CUSTOMER=gql`
mutation updateCustomer($dateOfBirth:DateTimeISO,$phone:String,$name:String,$picture:String){
  updateCustomer(dateOfBirth:$dateOfBirth,phone:$phone,name:$name,picture:$picture)
}
`
export const CHANGE_PASSWORD=gql`
mutation changePassword($password:String!,$newPassword:String!){
  changePassword(password:$password,newPassword:$newPassword)
}
`