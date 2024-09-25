/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type CustomerCreateNestedOneWithoutCartInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCartInput>;
  create?: InputMaybe<CustomerCreateWithoutCartInput>;
};

export type CustomerCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<CustomerCreateWithoutOrdersInput>;
};

export type CustomerCreateOrConnectWithoutCartInput = {
  create: CustomerCreateWithoutCartInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutOrdersInput = {
  create: CustomerCreateWithoutOrdersInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutCartInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateWithoutOrdersInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  cart?: InputMaybe<OrderItemCartCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateaddressInput = {
  set: Array<Scalars['String']['input']>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateOneRequiredWithoutCartNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCartInput>;
  create?: InputMaybe<CustomerCreateWithoutCartInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutCartInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutCartInput>;
};

export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<CustomerCreateWithoutOrdersInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutOrdersInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutOrdersInput>;
};

export type CustomerUpdateToOneWithWhereWithoutCartInput = {
  data: CustomerUpdateWithoutCartInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
  data: CustomerUpdateWithoutOrdersInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateWithoutCartInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateWithoutOrdersInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  cart?: InputMaybe<OrderItemCartUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateaddressInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CustomerUpsertWithoutCartInput = {
  create: CustomerCreateWithoutCartInput;
  update: CustomerUpdateWithoutCartInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpsertWithoutOrdersInput = {
  create: CustomerCreateWithoutOrdersInput;
  update: CustomerUpdateWithoutOrdersInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<StringNullableListFilter>;
  cart?: InputMaybe<OrderItemCartListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type CustomerWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<StringNullableListFilter>;
  cart?: InputMaybe<OrderItemCartListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderListRelationFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumFoodCategoryFieldUpdateOperationsInput = {
  set?: InputMaybe<FoodCategory>;
};

export type EnumFoodCategoryFilter = {
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<OrderStatus>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Food = {
  __typename?: 'Food';
  _count?: Maybe<FoodCount>;
  category: FoodCategory;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  restaurantId: Scalars['String']['output'];
};

export enum FoodCategory {
  Dessert = 'DESSERT',
  Drinks = 'DRINKS',
  Meal = 'MEAL',
  Snacks = 'SNACKS',
  Vegan = 'VEGAN'
}

export type FoodCount = {
  __typename?: 'FoodCount';
  carts: Scalars['Int']['output'];
};


export type FoodCountCartsArgs = {
  where?: InputMaybe<OrderItemCartWhereInput>;
};

export type FoodCreateManyRestaurantInput = {
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type FoodCreateManyRestaurantInputEnvelope = {
  data: Array<FoodCreateManyRestaurantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCreateNestedManyWithoutRestaurantInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<FoodCreateManyRestaurantInputEnvelope>;
};

export type FoodCreateNestedOneWithoutCartsInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutCartsInput>;
  create?: InputMaybe<FoodCreateWithoutCartsInput>;
};

export type FoodCreateOrConnectWithoutCartsInput = {
  create: FoodCreateWithoutCartsInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutRestaurantInput = {
  create: FoodCreateWithoutRestaurantInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateWithoutCartsInput = {
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  restaurant: RestaurantCreateNestedOneWithoutMenuInput;
};

export type FoodCreateWithoutRestaurantInput = {
  carts?: InputMaybe<OrderItemCartCreateNestedManyWithoutFoodInput>;
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type FoodListRelationFilter = {
  every?: InputMaybe<FoodWhereInput>;
  none?: InputMaybe<FoodWhereInput>;
  some?: InputMaybe<FoodWhereInput>;
};

export type FoodRelationFilter = {
  is?: InputMaybe<FoodWhereInput>;
  isNot?: InputMaybe<FoodWhereInput>;
};

export type FoodScalarWhereInput = {
  AND?: InputMaybe<Array<FoodScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereInput>>;
  category?: InputMaybe<EnumFoodCategoryFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  restaurantId?: InputMaybe<StringFilter>;
};

export type FoodUpdateManyMutationInput = {
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type FoodUpdateManyWithWhereWithoutRestaurantInput = {
  data: FoodUpdateManyMutationInput;
  where: FoodScalarWhereInput;
};

export type FoodUpdateManyWithoutRestaurantNestedInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<FoodCreateManyRestaurantInputEnvelope>;
  delete?: InputMaybe<Array<FoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: InputMaybe<Array<FoodUpdateManyWithWhereWithoutRestaurantInput>>;
  upsert?: InputMaybe<Array<FoodUpsertWithWhereUniqueWithoutRestaurantInput>>;
};

export type FoodUpdateOneRequiredWithoutCartsNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutCartsInput>;
  create?: InputMaybe<FoodCreateWithoutCartsInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutCartsInput>;
  upsert?: InputMaybe<FoodUpsertWithoutCartsInput>;
};

export type FoodUpdateToOneWithWhereWithoutCartsInput = {
  data: FoodUpdateWithoutCartsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateWithWhereUniqueWithoutRestaurantInput = {
  data: FoodUpdateWithoutRestaurantInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpdateWithoutCartsInput = {
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutMenuNestedInput>;
};

export type FoodUpdateWithoutRestaurantInput = {
  carts?: InputMaybe<OrderItemCartUpdateManyWithoutFoodNestedInput>;
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type FoodUpsertWithWhereUniqueWithoutRestaurantInput = {
  create: FoodCreateWithoutRestaurantInput;
  update: FoodUpdateWithoutRestaurantInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpsertWithoutCartsInput = {
  create: FoodCreateWithoutCartsInput;
  update: FoodUpdateWithoutCartsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodWhereInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  carts?: InputMaybe<OrderItemCartListRelationFilter>;
  category?: InputMaybe<EnumFoodCategoryFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
};

export type FoodWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  carts?: InputMaybe<OrderItemCartListRelationFilter>;
  category?: InputMaybe<EnumFoodCategoryFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomerAddress: Scalars['Boolean']['output'];
  addFoodItem: Scalars['Boolean']['output'];
  addToCart: Scalars['Boolean']['output'];
  assignDeliveryPerson: Order;
  cancelOrder: Scalars['String']['output'];
  changePassword: Scalars['Boolean']['output'];
  placeOrder: Order;
  removeFoodItem: Scalars['String']['output'];
  removeFromCart: Scalars['Boolean']['output'];
  requestOtp: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  signIn: Scalars['String']['output'];
  signUp: User;
  updateCustomer: Scalars['Boolean']['output'];
  updateDeliveryStatus: Order;
  updateFoodItem: Scalars['String']['output'];
  updateRestaurant: Scalars['String']['output'];
  verifyAccount: Scalars['Boolean']['output'];
};


export type MutationAddCustomerAddressArgs = {
  address: Scalars['String']['input'];
};


export type MutationAddFoodItemArgs = {
  data: FoodCreateWithoutRestaurantInput;
};


export type MutationAddToCartArgs = {
  foodId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};


export type MutationAssignDeliveryPersonArgs = {
  deliveryPerson: Scalars['String']['input'];
  orderId: Scalars['Float']['input'];
};


export type MutationCancelOrderArgs = {
  orderId: Scalars['Float']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPlaceOrderArgs = {
  deliveryAddress: Scalars['String']['input'];
};


export type MutationRemoveFoodItemArgs = {
  foodId: Scalars['String']['input'];
};


export type MutationRemoveFromCartArgs = {
  foodId: Scalars['String']['input'];
};


export type MutationRequestOtpArgs = {
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  data: UserCreateInput;
};


export type MutationUpdateCustomerArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateDeliveryStatusArgs = {
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  orderId: Scalars['Float']['input'];
  status: Scalars['String']['input'];
};


export type MutationUpdateFoodItemArgs = {
  data: FoodUpdateWithoutCartsInput;
  foodId: Scalars['String']['input'];
};


export type MutationUpdateRestaurantArgs = {
  data: RestaurantUpdateInput;
};


export type MutationVerifyAccountArgs = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumFoodCategoryFilter = {
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTimeISO']['output'];
  customerId: Scalars['String']['output'];
  deliveryAddress: Scalars['String']['output'];
  deliveryPerson?: Maybe<Scalars['String']['output']>;
  deliveryTime?: Maybe<Scalars['DateTimeISO']['output']>;
  foods: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  restaurantId: Scalars['String']['output'];
  status: OrderStatus;
  totalPrice: Scalars['Float']['output'];
};

export type OrderCreateManyCustomerInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  restaurantId: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateManyCustomerInputEnvelope = {
  data: Array<OrderCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateManyRestaurantInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customerId: Scalars['String']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateManyRestaurantInputEnvelope = {
  data: Array<OrderCreateManyRestaurantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderCreateManyCustomerInputEnvelope>;
};

export type OrderCreateNestedManyWithoutRestaurantInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<OrderCreateManyRestaurantInputEnvelope>;
};

export type OrderCreateOrConnectWithoutCustomerInput = {
  create: OrderCreateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutRestaurantInput = {
  create: OrderCreateWithoutRestaurantInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutCustomerInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateWithoutRestaurantInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCart = {
  __typename?: 'OrderItemCart';
  customerId: Scalars['String']['output'];
  foodId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type OrderItemCartCreateManyCustomerInput = {
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateManyCustomerInputEnvelope = {
  data: Array<OrderItemCartCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCartCreateManyFoodInput = {
  customerId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateManyFoodInputEnvelope = {
  data: Array<OrderItemCartCreateManyFoodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCartCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyCustomerInputEnvelope>;
};

export type OrderItemCartCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutFoodInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyFoodInputEnvelope>;
};

export type OrderItemCartCreateOrConnectWithoutCustomerInput = {
  create: OrderItemCartCreateWithoutCustomerInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartCreateOrConnectWithoutFoodInput = {
  create: OrderItemCartCreateWithoutFoodInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartCreateWithoutCustomerInput = {
  food: FoodCreateNestedOneWithoutCartsInput;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateWithoutFoodInput = {
  customer: CustomerCreateNestedOneWithoutCartInput;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartListRelationFilter = {
  every?: InputMaybe<OrderItemCartWhereInput>;
  none?: InputMaybe<OrderItemCartWhereInput>;
  some?: InputMaybe<OrderItemCartWhereInput>;
};

export type OrderItemCartScalarWhereInput = {
  AND?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  customerId?: InputMaybe<StringFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderItemCartUpdateManyMutationInput = {
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpdateManyWithWhereWithoutCustomerInput = {
  data: OrderItemCartUpdateManyMutationInput;
  where: OrderItemCartScalarWhereInput;
};

export type OrderItemCartUpdateManyWithWhereWithoutFoodInput = {
  data: OrderItemCartUpdateManyMutationInput;
  where: OrderItemCartScalarWhereInput;
};

export type OrderItemCartUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemCartUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<OrderItemCartUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<OrderItemCartUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type OrderItemCartUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutFoodInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyFoodInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemCartUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<OrderItemCartUpdateManyWithWhereWithoutFoodInput>>;
  upsert?: InputMaybe<Array<OrderItemCartUpsertWithWhereUniqueWithoutFoodInput>>;
};

export type OrderItemCartUpdateWithWhereUniqueWithoutCustomerInput = {
  data: OrderItemCartUpdateWithoutCustomerInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartUpdateWithWhereUniqueWithoutFoodInput = {
  data: OrderItemCartUpdateWithoutFoodInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartUpdateWithoutCustomerInput = {
  food?: InputMaybe<FoodUpdateOneRequiredWithoutCartsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpdateWithoutFoodInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCartNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpsertWithWhereUniqueWithoutCustomerInput = {
  create: OrderItemCartCreateWithoutCustomerInput;
  update: OrderItemCartUpdateWithoutCustomerInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartUpsertWithWhereUniqueWithoutFoodInput = {
  create: OrderItemCartCreateWithoutFoodInput;
  update: OrderItemCartUpdateWithoutFoodInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartWhereInput = {
  AND?: InputMaybe<Array<OrderItemCartWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemCartWhereInput>>;
  OR?: InputMaybe<Array<OrderItemCartWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderItemCartWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderItemCartWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemCartWhereInput>>;
  OR?: InputMaybe<Array<OrderItemCartWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderScalarWhereInput = {
  AND?: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<StringFilter>;
  deliveryAddress?: InputMaybe<StringFilter>;
  deliveryPerson?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  foods?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  restaurantId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export enum OrderStatus {
  Active = 'ACTIVE',
  Assigned = 'ASSIGNED',
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  Pending = 'PENDING'
}

export type OrderUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutCustomerInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type OrderUpdateManyWithoutRestaurantNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<OrderCreateManyRestaurantInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutRestaurantInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutRestaurantInput>>;
};

export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
  data: OrderUpdateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
  data: OrderUpdateWithoutRestaurantInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutCustomerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutOrdersNestedInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutRestaurantInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutOrdersNestedInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
  create: OrderCreateWithoutCustomerInput;
  update: OrderUpdateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
  create: OrderCreateWithoutRestaurantInput;
  update: OrderUpdateWithoutRestaurantInput;
  where: OrderWhereUniqueInput;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  deliveryAddress?: InputMaybe<StringFilter>;
  deliveryPerson?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  foods?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  deliveryAddress?: InputMaybe<StringFilter>;
  deliveryPerson?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  foods?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type Query = {
  __typename?: 'Query';
  fetchCart: Array<OrderItemCart>;
  fetchFood: Food;
  fetchFoods: Array<Food>;
  fetchOrders: Array<Order>;
  getCurrentUser?: Maybe<User>;
};


export type QueryFetchFoodArgs = {
  foodId: Scalars['String']['input'];
};


export type QueryFetchFoodsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchOrdersArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RestaurantCreateNestedOneWithoutMenuInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutMenuInput>;
  create?: InputMaybe<RestaurantCreateWithoutMenuInput>;
};

export type RestaurantCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<RestaurantCreateWithoutOrdersInput>;
};

export type RestaurantCreateOrConnectWithoutMenuInput = {
  create: RestaurantCreateWithoutMenuInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateOrConnectWithoutOrdersInput = {
  create: RestaurantCreateWithoutOrdersInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateWithoutMenuInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutRestaurantInput>;
  user: UserCreateNestedOneWithoutRestaurantInput;
};

export type RestaurantCreateWithoutOrdersInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  menu?: InputMaybe<FoodCreateNestedManyWithoutRestaurantInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutRestaurantInput;
};

export type RestaurantRelationFilter = {
  is?: InputMaybe<RestaurantWhereInput>;
  isNot?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpdateOneRequiredWithoutMenuNestedInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutMenuInput>;
  create?: InputMaybe<RestaurantCreateWithoutMenuInput>;
  update?: InputMaybe<RestaurantUpdateToOneWithWhereWithoutMenuInput>;
  upsert?: InputMaybe<RestaurantUpsertWithoutMenuInput>;
};

export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<RestaurantCreateWithoutOrdersInput>;
  update?: InputMaybe<RestaurantUpdateToOneWithWhereWithoutOrdersInput>;
  upsert?: InputMaybe<RestaurantUpsertWithoutOrdersInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutMenuInput = {
  data: RestaurantUpdateWithoutMenuInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
  data: RestaurantUpdateWithoutOrdersInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateWithoutMenuInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpdateWithoutOrdersInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpsertWithoutMenuInput = {
  create: RestaurantCreateWithoutMenuInput;
  update: RestaurantUpdateWithoutMenuInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpsertWithoutOrdersInput = {
  create: RestaurantCreateWithoutOrdersInput;
  update: RestaurantUpdateWithoutOrdersInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantWhereInput = {
  AND?: InputMaybe<Array<RestaurantWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantWhereInput>>;
  OR?: InputMaybe<Array<RestaurantWhereInput>>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringNullableFilter>;
  menu?: InputMaybe<FoodListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  operatingHours?: InputMaybe<StringNullableFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type RestaurantWhereUniqueInput = {
  AND?: InputMaybe<Array<RestaurantWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantWhereInput>>;
  OR?: InputMaybe<Array<RestaurantWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<StringNullableFilter>;
  menu?: InputMaybe<FoodListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  operatingHours?: InputMaybe<StringNullableFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export enum Role {
  Customer = 'CUSTOMER',
  Restaurant = 'RESTAURANT'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  dateOfBirth: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['Int']['output'];
  resetPassOtp?: Maybe<Scalars['String']['output']>;
  resetPassOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
  role: Role;
  verification: Scalars['Boolean']['output'];
  verificationOtp?: Maybe<Scalars['String']['output']>;
  verificationOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserCreateInput = {
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['Int']['input'];
  role: Role;
};

export type UserCreateNestedOneWithoutCustomerInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<UserCreateWithoutCustomerInput>;
};

export type UserCreateNestedOneWithoutRestaurantInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRestaurantInput>;
  create?: InputMaybe<UserCreateWithoutRestaurantInput>;
};

export type UserCreateOrConnectWithoutCustomerInput = {
  create: UserCreateWithoutCustomerInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRestaurantInput = {
  create: UserCreateWithoutRestaurantInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCustomerInput = {
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['Int']['input'];
  role: Role;
};

export type UserCreateWithoutRestaurantInput = {
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['Int']['input'];
  role: Role;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<UserCreateWithoutCustomerInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCustomerInput>;
  upsert?: InputMaybe<UserUpsertWithoutCustomerInput>;
};

export type UserUpdateOneRequiredWithoutRestaurantNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRestaurantInput>;
  create?: InputMaybe<UserCreateWithoutRestaurantInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutRestaurantInput>;
  upsert?: InputMaybe<UserUpsertWithoutRestaurantInput>;
};

export type UserUpdateToOneWithWhereWithoutCustomerInput = {
  data: UserUpdateWithoutCustomerInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutRestaurantInput = {
  data: UserUpdateWithoutRestaurantInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutCustomerInput = {
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<IntFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRestaurantInput = {
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<IntFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCustomerInput = {
  create: UserCreateWithoutCustomerInput;
  update: UserUpdateWithoutCustomerInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutRestaurantInput = {
  create: UserCreateWithoutRestaurantInput;
  update: UserUpdateWithoutRestaurantInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  dateOfBirth?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumRoleFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  dateOfBirth?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumRoleFilter>;
};

export type SignUpMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', name: string } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: string };

export type VerifyAccountMutationVariables = Exact<{
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', verifyAccount: boolean };


export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;