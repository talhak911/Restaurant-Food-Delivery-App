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

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateCustomer = {
  __typename?: 'AggregateCustomer';
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
};

export type AggregateFood = {
  __typename?: 'AggregateFood';
  _avg?: Maybe<FoodAvgAggregate>;
  _count?: Maybe<FoodCountAggregate>;
  _max?: Maybe<FoodMaxAggregate>;
  _min?: Maybe<FoodMinAggregate>;
  _sum?: Maybe<FoodSumAggregate>;
};

export type AggregateOrder = {
  __typename?: 'AggregateOrder';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
};

export type AggregateOrderItemCart = {
  __typename?: 'AggregateOrderItemCart';
  _avg?: Maybe<OrderItemCartAvgAggregate>;
  _count?: Maybe<OrderItemCartCountAggregate>;
  _max?: Maybe<OrderItemCartMaxAggregate>;
  _min?: Maybe<OrderItemCartMinAggregate>;
  _sum?: Maybe<OrderItemCartSumAggregate>;
};

export type AggregateRestaurant = {
  __typename?: 'AggregateRestaurant';
  _count?: Maybe<RestaurantCountAggregate>;
  _max?: Maybe<RestaurantMaxAggregate>;
  _min?: Maybe<RestaurantMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type CreateManyAndReturnCustomer = {
  __typename?: 'CreateManyAndReturnCustomer';
  address?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CreateManyAndReturnFood = {
  __typename?: 'CreateManyAndReturnFood';
  category: FoodCategory;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  restaurant: Restaurant;
  restaurantId: Scalars['String']['output'];
};

export type CreateManyAndReturnOrder = {
  __typename?: 'CreateManyAndReturnOrder';
  createdAt: Scalars['DateTimeISO']['output'];
  customer: Customer;
  customerId: Scalars['String']['output'];
  deliveryAddress: Scalars['String']['output'];
  deliveryPerson?: Maybe<Scalars['String']['output']>;
  deliveryTime?: Maybe<Scalars['DateTimeISO']['output']>;
  foods: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  restaurant: Restaurant;
  restaurantId: Scalars['String']['output'];
  status: OrderStatus;
  totalPrice: Scalars['Float']['output'];
};

export type CreateManyAndReturnOrderItemCart = {
  __typename?: 'CreateManyAndReturnOrderItemCart';
  customer: Customer;
  customerId: Scalars['String']['output'];
  food: Food;
  foodId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type CreateManyAndReturnRestaurant = {
  __typename?: 'CreateManyAndReturnRestaurant';
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CreateManyAndReturnUser = {
  __typename?: 'CreateManyAndReturnUser';
  dateOfBirth: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  resetPassOtp?: Maybe<Scalars['String']['output']>;
  resetPassOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
  role: Role;
  verification: Scalars['Boolean']['output'];
  verificationOtp?: Maybe<Scalars['String']['output']>;
  verificationOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type Customer = {
  __typename?: 'Customer';
  _count?: Maybe<CustomerCount>;
  address: Array<Scalars['String']['output']>;
  cart: Array<OrderItemCart>;
  id: Scalars['String']['output'];
  orders: Array<Order>;
  picture?: Maybe<Scalars['String']['output']>;
  user: User;
};


export type CustomerCartArgs = {
  cursor?: InputMaybe<OrderItemCartWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemCartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type CustomerOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type CustomerCount = {
  __typename?: 'CustomerCount';
  cart: Scalars['Int']['output'];
  orders: Scalars['Int']['output'];
};


export type CustomerCountCartArgs = {
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type CustomerCountOrdersArgs = {
  where?: InputMaybe<OrderWhereInput>;
};

export type CustomerCountAggregate = {
  __typename?: 'CustomerCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  picture: Scalars['Int']['output'];
};

export type CustomerCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type CustomerCreateInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  cart?: InputMaybe<OrderItemCartCreateNestedManyWithoutCustomerInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateManyInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  id: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
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

export type CustomerCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CustomerCreateWithoutUserInput>;
};

export type CustomerCreateOrConnectWithoutCartInput = {
  create: CustomerCreateWithoutCartInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutOrdersInput = {
  create: CustomerCreateWithoutOrdersInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutUserInput = {
  create: CustomerCreateWithoutUserInput;
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

export type CustomerCreateWithoutUserInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  cart?: InputMaybe<OrderItemCartCreateNestedManyWithoutCustomerInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerCreateaddressInput = {
  set: Array<Scalars['String']['input']>;
};

export type CustomerGroupBy = {
  __typename?: 'CustomerGroupBy';
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  address?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
};

export type CustomerMaxAggregate = {
  __typename?: 'CustomerMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
};

export type CustomerMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type CustomerMinAggregate = {
  __typename?: 'CustomerMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
};

export type CustomerMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type CustomerNullableRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerOrderByWithAggregationInput = {
  _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrderInput>;
};

export type CustomerOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  cart?: InputMaybe<OrderItemCartOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  picture?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  Address = 'address',
  Id = 'id',
  Picture = 'picture'
}

export type CustomerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CustomerUpdateInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  cart?: InputMaybe<OrderItemCartUpdateManyWithoutCustomerNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateManyMutationInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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

export type CustomerUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CustomerCreateWithoutUserInput>;
  delete?: InputMaybe<CustomerWhereInput>;
  disconnect?: InputMaybe<CustomerWhereInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutUserInput>;
};

export type CustomerUpdateToOneWithWhereWithoutCartInput = {
  data: CustomerUpdateWithoutCartInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
  data: CustomerUpdateWithoutOrdersInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutUserInput = {
  data: CustomerUpdateWithoutUserInput;
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

export type CustomerUpdateWithoutUserInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  cart?: InputMaybe<OrderItemCartUpdateManyWithoutCustomerNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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

export type CustomerUpsertWithoutUserInput = {
  create: CustomerCreateWithoutUserInput;
  update: CustomerUpdateWithoutUserInput;
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

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
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

export type EnumFoodCategoryWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFoodCategoryFilter>;
  _min?: InputMaybe<NestedEnumFoodCategoryFilter>;
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryWithAggregatesFilter>;
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

export type EnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
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

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
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

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Food = {
  __typename?: 'Food';
  _count?: Maybe<FoodCount>;
  carts: Array<OrderItemCart>;
  category: FoodCategory;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  restaurant: Restaurant;
  restaurantId: Scalars['String']['output'];
};


export type FoodCartsArgs = {
  cursor?: InputMaybe<OrderItemCartWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemCartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};

export type FoodAvgAggregate = {
  __typename?: 'FoodAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type FoodAvgOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
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

export type FoodCountAggregate = {
  __typename?: 'FoodCountAggregate';
  _all: Scalars['Int']['output'];
  category: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  picture: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  restaurantId: Scalars['Int']['output'];
};

export type FoodCountOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodCreateInput = {
  carts?: InputMaybe<OrderItemCartCreateNestedManyWithoutFoodInput>;
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  restaurant: RestaurantCreateNestedOneWithoutMenuInput;
};

export type FoodCreateManyInput = {
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  restaurantId: Scalars['String']['input'];
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

export type FoodGroupBy = {
  __typename?: 'FoodGroupBy';
  _avg?: Maybe<FoodAvgAggregate>;
  _count?: Maybe<FoodCountAggregate>;
  _max?: Maybe<FoodMaxAggregate>;
  _min?: Maybe<FoodMinAggregate>;
  _sum?: Maybe<FoodSumAggregate>;
  category: FoodCategory;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  restaurantId: Scalars['String']['output'];
};

export type FoodListRelationFilter = {
  every?: InputMaybe<FoodWhereInput>;
  none?: InputMaybe<FoodWhereInput>;
  some?: InputMaybe<FoodWhereInput>;
};

export type FoodMaxAggregate = {
  __typename?: 'FoodMaxAggregate';
  category?: Maybe<FoodCategory>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  restaurantId?: Maybe<Scalars['String']['output']>;
};

export type FoodMaxOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodMinAggregate = {
  __typename?: 'FoodMinAggregate';
  category?: Maybe<FoodCategory>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  restaurantId?: Maybe<Scalars['String']['output']>;
};

export type FoodMinOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithAggregationInput = {
  _avg?: InputMaybe<FoodAvgOrderByAggregateInput>;
  _count?: InputMaybe<FoodCountOrderByAggregateInput>;
  _max?: InputMaybe<FoodMaxOrderByAggregateInput>;
  _min?: InputMaybe<FoodMinOrderByAggregateInput>;
  _sum?: InputMaybe<FoodSumOrderByAggregateInput>;
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithRelationInput = {
  carts?: InputMaybe<OrderItemCartOrderByRelationAggregateInput>;
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantOrderByWithRelationInput>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodRelationFilter = {
  is?: InputMaybe<FoodWhereInput>;
  isNot?: InputMaybe<FoodWhereInput>;
};

export enum FoodScalarFieldEnum {
  Category = 'category',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  Price = 'price',
  RestaurantId = 'restaurantId'
}

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

export type FoodScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  category?: InputMaybe<EnumFoodCategoryWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringNullableWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  restaurantId?: InputMaybe<StringWithAggregatesFilter>;
};

export type FoodSumAggregate = {
  __typename?: 'FoodSumAggregate';
  price?: Maybe<Scalars['Float']['output']>;
};

export type FoodSumOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type FoodUpdateInput = {
  carts?: InputMaybe<OrderItemCartUpdateManyWithoutFoodNestedInput>;
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutMenuNestedInput>;
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

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
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

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
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
  assignDeliveryPerson: Order;
  cancelOrder: Scalars['String']['output'];
  changePassword: Scalars['Boolean']['output'];
  createManyAndReturnCustomer: Array<CreateManyAndReturnCustomer>;
  createManyAndReturnFood: Array<CreateManyAndReturnFood>;
  createManyAndReturnOrder: Array<CreateManyAndReturnOrder>;
  createManyAndReturnOrderItemCart: Array<CreateManyAndReturnOrderItemCart>;
  createManyAndReturnRestaurant: Array<CreateManyAndReturnRestaurant>;
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyCustomer: AffectedRowsOutput;
  createManyFood: AffectedRowsOutput;
  createManyOrder: AffectedRowsOutput;
  createManyOrderItemCart: AffectedRowsOutput;
  createManyRestaurant: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneCustomer: Customer;
  createOneFood: Food;
  createOneOrder: Order;
  createOneOrderItemCart: OrderItemCart;
  createOneRestaurant: Restaurant;
  createOneUser: User;
  deleteManyCustomer: AffectedRowsOutput;
  deleteManyFood: AffectedRowsOutput;
  deleteManyOrder: AffectedRowsOutput;
  deleteManyOrderItemCart: AffectedRowsOutput;
  deleteManyRestaurant: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneCustomer?: Maybe<Customer>;
  deleteOneFood?: Maybe<Food>;
  deleteOneOrder?: Maybe<Order>;
  deleteOneOrderItemCart?: Maybe<OrderItemCart>;
  deleteOneRestaurant?: Maybe<Restaurant>;
  deleteOneUser?: Maybe<User>;
  placeOrder: Order;
  removeFoodItem: Scalars['String']['output'];
  removeFromCart: Scalars['Boolean']['output'];
  requestOtp: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  signIn: Scalars['String']['output'];
  signUp: User;
  updateCart: Scalars['Boolean']['output'];
  updateCustomer: Scalars['Boolean']['output'];
  updateDeliveryStatus: Order;
  updateFoodItem: Scalars['String']['output'];
  updateManyCustomer: AffectedRowsOutput;
  updateManyFood: AffectedRowsOutput;
  updateManyOrder: AffectedRowsOutput;
  updateManyOrderItemCart: AffectedRowsOutput;
  updateManyRestaurant: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneCustomer?: Maybe<Customer>;
  updateOneFood?: Maybe<Food>;
  updateOneOrder?: Maybe<Order>;
  updateOneOrderItemCart?: Maybe<OrderItemCart>;
  updateOneRestaurant?: Maybe<Restaurant>;
  updateOneUser?: Maybe<User>;
  updateRestaurant: Scalars['String']['output'];
  upsertOneCustomer: Customer;
  upsertOneFood: Food;
  upsertOneOrder: Order;
  upsertOneOrderItemCart: OrderItemCart;
  upsertOneRestaurant: Restaurant;
  upsertOneUser: User;
  verifyAccount: Scalars['Boolean']['output'];
};


export type MutationAddCustomerAddressArgs = {
  address: Scalars['String']['input'];
};


export type MutationAddFoodItemArgs = {
  data: FoodCreateWithoutRestaurantInput;
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


export type MutationCreateManyAndReturnCustomerArgs = {
  data: Array<CustomerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnFoodArgs = {
  data: Array<FoodCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnOrderArgs = {
  data: Array<OrderCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnOrderItemCartArgs = {
  data: Array<OrderItemCartCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnRestaurantArgs = {
  data: Array<RestaurantCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCustomerArgs = {
  data: Array<CustomerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFoodArgs = {
  data: Array<FoodCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOrderArgs = {
  data: Array<OrderCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOrderItemCartArgs = {
  data: Array<OrderItemCartCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRestaurantArgs = {
  data: Array<RestaurantCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneCustomerArgs = {
  data: CustomerCreateInput;
};


export type MutationCreateOneFoodArgs = {
  data: FoodCreateInput;
};


export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOneOrderItemCartArgs = {
  data: OrderItemCartCreateInput;
};


export type MutationCreateOneRestaurantArgs = {
  data: RestaurantCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};


export type MutationDeleteManyFoodArgs = {
  where?: InputMaybe<FoodWhereInput>;
};


export type MutationDeleteManyOrderArgs = {
  where?: InputMaybe<OrderWhereInput>;
};


export type MutationDeleteManyOrderItemCartArgs = {
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type MutationDeleteManyRestaurantArgs = {
  where?: InputMaybe<RestaurantWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type MutationDeleteOneFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type MutationDeleteOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOneOrderItemCartArgs = {
  where: OrderItemCartWhereUniqueInput;
};


export type MutationDeleteOneRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
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


export type MutationUpdateCartArgs = {
  foodId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};


export type MutationUpdateCustomerArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
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


export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
};


export type MutationUpdateManyFoodArgs = {
  data: FoodUpdateManyMutationInput;
  where?: InputMaybe<FoodWhereInput>;
};


export type MutationUpdateManyOrderArgs = {
  data: OrderUpdateManyMutationInput;
  where?: InputMaybe<OrderWhereInput>;
};


export type MutationUpdateManyOrderItemCartArgs = {
  data: OrderItemCartUpdateManyMutationInput;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type MutationUpdateManyRestaurantArgs = {
  data: RestaurantUpdateManyMutationInput;
  where?: InputMaybe<RestaurantWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpdateOneFoodArgs = {
  data: FoodUpdateInput;
  where: FoodWhereUniqueInput;
};


export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOneOrderItemCartArgs = {
  data: OrderItemCartUpdateInput;
  where: OrderItemCartWhereUniqueInput;
};


export type MutationUpdateOneRestaurantArgs = {
  data: RestaurantUpdateInput;
  where: RestaurantWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateRestaurantArgs = {
  data: RestaurantUpdateInput;
};


export type MutationUpsertOneCustomerArgs = {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpsertOneFoodArgs = {
  create: FoodCreateInput;
  update: FoodUpdateInput;
  where: FoodWhereUniqueInput;
};


export type MutationUpsertOneOrderArgs = {
  create: OrderCreateInput;
  update: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOneOrderItemCartArgs = {
  create: OrderItemCartCreateInput;
  update: OrderItemCartUpdateInput;
  where: OrderItemCartWhereUniqueInput;
};


export type MutationUpsertOneRestaurantArgs = {
  create: RestaurantCreateInput;
  update: RestaurantUpdateInput;
  where: RestaurantWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
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

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumFoodCategoryFilter = {
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type NestedEnumFoodCategoryWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFoodCategoryFilter>;
  _min?: InputMaybe<NestedEnumFoodCategoryFilter>;
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
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

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
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

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
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

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTimeISO']['output'];
  customer: Customer;
  customerId: Scalars['String']['output'];
  deliveryAddress: Scalars['String']['output'];
  deliveryPerson?: Maybe<Scalars['String']['output']>;
  deliveryTime?: Maybe<Scalars['DateTimeISO']['output']>;
  foods: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  restaurant: Restaurant;
  restaurantId: Scalars['String']['output'];
  status: OrderStatus;
  totalPrice: Scalars['Float']['output'];
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  customerId: Scalars['Int']['output'];
  deliveryAddress: Scalars['Int']['output'];
  deliveryPerson: Scalars['Int']['output'];
  deliveryTime: Scalars['Int']['output'];
  foods: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  restaurantId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
};

export type OrderCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  foods?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
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

export type OrderCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customerId: Scalars['String']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  restaurantId: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
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

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
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

export type OrderItemCart = {
  __typename?: 'OrderItemCart';
  customer: Customer;
  customerId: Scalars['String']['output'];
  food: Food;
  foodId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type OrderItemCartAvgAggregate = {
  __typename?: 'OrderItemCartAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderItemCartAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartCountAggregate = {
  __typename?: 'OrderItemCartCountAggregate';
  _all: Scalars['Int']['output'];
  customerId: Scalars['Int']['output'];
  foodId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
};

export type OrderItemCartCountOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartCreateInput = {
  customer: CustomerCreateNestedOneWithoutCartInput;
  food: FoodCreateNestedOneWithoutCartsInput;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
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

export type OrderItemCartCreateManyInput = {
  customerId: Scalars['String']['input'];
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
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

export type OrderItemCartGroupBy = {
  __typename?: 'OrderItemCartGroupBy';
  _avg?: Maybe<OrderItemCartAvgAggregate>;
  _count?: Maybe<OrderItemCartCountAggregate>;
  _max?: Maybe<OrderItemCartMaxAggregate>;
  _min?: Maybe<OrderItemCartMinAggregate>;
  _sum?: Maybe<OrderItemCartSumAggregate>;
  customerId: Scalars['String']['output'];
  foodId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type OrderItemCartListRelationFilter = {
  every?: InputMaybe<OrderItemCartWhereInput>;
  none?: InputMaybe<OrderItemCartWhereInput>;
  some?: InputMaybe<OrderItemCartWhereInput>;
};

export type OrderItemCartMaxAggregate = {
  __typename?: 'OrderItemCartMaxAggregate';
  customerId?: Maybe<Scalars['String']['output']>;
  foodId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderItemCartMaxOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartMinAggregate = {
  __typename?: 'OrderItemCartMinAggregate';
  customerId?: Maybe<Scalars['String']['output']>;
  foodId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderItemCartMinOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderItemCartOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderItemCartAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderItemCartCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderItemCartMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderItemCartMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderItemCartSumOrderByAggregateInput>;
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartOrderByWithRelationInput = {
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  food?: InputMaybe<FoodOrderByWithRelationInput>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export enum OrderItemCartScalarFieldEnum {
  CustomerId = 'customerId',
  FoodId = 'foodId',
  Id = 'id',
  Quantity = 'quantity',
  TotalPrice = 'totalPrice'
}

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

export type OrderItemCartScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderItemCartScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderItemCartScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderItemCartScalarWhereWithAggregatesInput>>;
  customerId?: InputMaybe<StringWithAggregatesFilter>;
  foodId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  totalPrice?: InputMaybe<FloatWithAggregatesFilter>;
};

export type OrderItemCartSumAggregate = {
  __typename?: 'OrderItemCartSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderItemCartSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartUpdateInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCartNestedInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutCartsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
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

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  deliveryAddress?: Maybe<Scalars['String']['output']>;
  deliveryPerson?: Maybe<Scalars['String']['output']>;
  deliveryTime?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  restaurantId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  deliveryAddress?: Maybe<Scalars['String']['output']>;
  deliveryPerson?: Maybe<Scalars['String']['output']>;
  deliveryTime?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  restaurantId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrderInput>;
  deliveryTime?: InputMaybe<SortOrderInput>;
  foods?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrderInput>;
  deliveryTime?: InputMaybe<SortOrderInput>;
  foods?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantOrderByWithRelationInput>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export enum OrderScalarFieldEnum {
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  DeliveryAddress = 'deliveryAddress',
  DeliveryPerson = 'deliveryPerson',
  DeliveryTime = 'deliveryTime',
  Foods = 'foods',
  Id = 'id',
  RestaurantId = 'restaurantId',
  Status = 'status',
  TotalPrice = 'totalPrice'
}

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

export type OrderScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  customerId?: InputMaybe<StringWithAggregatesFilter>;
  deliveryAddress?: InputMaybe<StringWithAggregatesFilter>;
  deliveryPerson?: InputMaybe<StringNullableWithAggregatesFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  foods?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  restaurantId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumOrderStatusWithAggregatesFilter>;
  totalPrice?: InputMaybe<FloatWithAggregatesFilter>;
};

export enum OrderStatus {
  Active = 'ACTIVE',
  Assigned = 'ASSIGNED',
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  Pending = 'PENDING'
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutOrdersNestedInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutOrdersNestedInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

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
  aggregateCustomer: AggregateCustomer;
  aggregateFood: AggregateFood;
  aggregateOrder: AggregateOrder;
  aggregateOrderItemCart: AggregateOrderItemCart;
  aggregateRestaurant: AggregateRestaurant;
  aggregateUser: AggregateUser;
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
  fetchCart: Array<OrderItemCart>;
  fetchFood: Food;
  fetchFoods: Array<Food>;
  fetchOrders: Array<Order>;
  findFirstCustomer?: Maybe<Customer>;
  findFirstCustomerOrThrow?: Maybe<Customer>;
  findFirstFood?: Maybe<Food>;
  findFirstFoodOrThrow?: Maybe<Food>;
  findFirstOrder?: Maybe<Order>;
  findFirstOrderItemCart?: Maybe<OrderItemCart>;
  findFirstOrderItemCartOrThrow?: Maybe<OrderItemCart>;
  findFirstOrderOrThrow?: Maybe<Order>;
  findFirstRestaurant?: Maybe<Restaurant>;
  findFirstRestaurantOrThrow?: Maybe<Restaurant>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  food?: Maybe<Food>;
  foods: Array<Food>;
  getCurrentUser?: Maybe<User>;
  getCustomer?: Maybe<Customer>;
  getFood?: Maybe<Food>;
  getOrder?: Maybe<Order>;
  getOrderItemCart?: Maybe<OrderItemCart>;
  getRestaurant?: Maybe<Restaurant>;
  getUser?: Maybe<User>;
  groupByCustomer: Array<CustomerGroupBy>;
  groupByFood: Array<FoodGroupBy>;
  groupByOrder: Array<OrderGroupBy>;
  groupByOrderItemCart: Array<OrderItemCartGroupBy>;
  groupByRestaurant: Array<RestaurantGroupBy>;
  groupByUser: Array<UserGroupBy>;
  order?: Maybe<Order>;
  orderItemCart?: Maybe<OrderItemCart>;
  orderItemCarts: Array<OrderItemCart>;
  orders: Array<Order>;
  restaurant?: Maybe<Restaurant>;
  restaurants: Array<Restaurant>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryAggregateFoodArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryAggregateOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryAggregateOrderItemCartArgs = {
  cursor?: InputMaybe<OrderItemCartWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type QueryAggregateRestaurantArgs = {
  cursor?: InputMaybe<RestaurantWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RestaurantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestaurantWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
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


export type QueryFindFirstCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryFindFirstCustomerOrThrowArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryFindFirstFoodArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryFindFirstFoodOrThrowArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryFindFirstOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryFindFirstOrderItemCartArgs = {
  cursor?: InputMaybe<OrderItemCartWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemCartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type QueryFindFirstOrderItemCartOrThrowArgs = {
  cursor?: InputMaybe<OrderItemCartWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemCartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type QueryFindFirstOrderOrThrowArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryFindFirstRestaurantArgs = {
  cursor?: InputMaybe<RestaurantWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestaurantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestaurantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestaurantWhereInput>;
};


export type QueryFindFirstRestaurantOrThrowArgs = {
  cursor?: InputMaybe<RestaurantWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestaurantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestaurantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestaurantWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type QueryFoodsArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryGetCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryGetFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type QueryGetOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryGetOrderItemCartArgs = {
  where: OrderItemCartWhereUniqueInput;
};


export type QueryGetRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByCustomerArgs = {
  by: Array<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryGroupByFoodArgs = {
  by: Array<FoodScalarFieldEnum>;
  having?: InputMaybe<FoodScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FoodOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryGroupByOrderArgs = {
  by: Array<OrderScalarFieldEnum>;
  having?: InputMaybe<OrderScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryGroupByOrderItemCartArgs = {
  by: Array<OrderItemCartScalarFieldEnum>;
  having?: InputMaybe<OrderItemCartScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type QueryGroupByRestaurantArgs = {
  by: Array<RestaurantScalarFieldEnum>;
  having?: InputMaybe<RestaurantScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RestaurantOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestaurantWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemCartArgs = {
  where: OrderItemCartWhereUniqueInput;
};


export type QueryOrderItemCartsArgs = {
  cursor?: InputMaybe<OrderItemCartWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemCartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemCartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemCartWhereInput>;
};


export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};


export type QueryRestaurantsArgs = {
  cursor?: InputMaybe<RestaurantWhereUniqueInput>;
  distinct?: InputMaybe<Array<RestaurantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RestaurantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestaurantWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Restaurant = {
  __typename?: 'Restaurant';
  _count?: Maybe<RestaurantCount>;
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  menu: Array<Food>;
  name?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['String']['output']>;
  orders: Array<Order>;
  user: User;
};


export type RestaurantMenuArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type RestaurantOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type RestaurantCount = {
  __typename?: 'RestaurantCount';
  menu: Scalars['Int']['output'];
  orders: Scalars['Int']['output'];
};


export type RestaurantCountMenuArgs = {
  where?: InputMaybe<FoodWhereInput>;
};


export type RestaurantCountOrdersArgs = {
  where?: InputMaybe<OrderWhereInput>;
};

export type RestaurantCountAggregate = {
  __typename?: 'RestaurantCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  operatingHours: Scalars['Int']['output'];
};

export type RestaurantCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operatingHours?: InputMaybe<SortOrder>;
};

export type RestaurantCreateInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  menu?: InputMaybe<FoodCreateNestedManyWithoutRestaurantInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutRestaurantInput>;
  user: UserCreateNestedOneWithoutRestaurantInput;
};

export type RestaurantCreateManyInput = {
  id: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
};

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

export type RestaurantCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RestaurantCreateWithoutUserInput>;
};

export type RestaurantCreateOrConnectWithoutMenuInput = {
  create: RestaurantCreateWithoutMenuInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateOrConnectWithoutOrdersInput = {
  create: RestaurantCreateWithoutOrdersInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateOrConnectWithoutUserInput = {
  create: RestaurantCreateWithoutUserInput;
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

export type RestaurantCreateWithoutUserInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  menu?: InputMaybe<FoodCreateNestedManyWithoutRestaurantInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantGroupBy = {
  __typename?: 'RestaurantGroupBy';
  _count?: Maybe<RestaurantCountAggregate>;
  _max?: Maybe<RestaurantMaxAggregate>;
  _min?: Maybe<RestaurantMinAggregate>;
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['String']['output']>;
};

export type RestaurantMaxAggregate = {
  __typename?: 'RestaurantMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['String']['output']>;
};

export type RestaurantMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operatingHours?: InputMaybe<SortOrder>;
};

export type RestaurantMinAggregate = {
  __typename?: 'RestaurantMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operatingHours?: Maybe<Scalars['String']['output']>;
};

export type RestaurantMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operatingHours?: InputMaybe<SortOrder>;
};

export type RestaurantNullableRelationFilter = {
  is?: InputMaybe<RestaurantWhereInput>;
  isNot?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantOrderByWithAggregationInput = {
  _count?: InputMaybe<RestaurantCountOrderByAggregateInput>;
  _max?: InputMaybe<RestaurantMaxOrderByAggregateInput>;
  _min?: InputMaybe<RestaurantMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  operatingHours?: InputMaybe<SortOrderInput>;
};

export type RestaurantOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrderInput>;
  menu?: InputMaybe<FoodOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrderInput>;
  operatingHours?: InputMaybe<SortOrderInput>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type RestaurantRelationFilter = {
  is?: InputMaybe<RestaurantWhereInput>;
  isNot?: InputMaybe<RestaurantWhereInput>;
};

export enum RestaurantScalarFieldEnum {
  Id = 'id',
  Location = 'location',
  Name = 'name',
  OperatingHours = 'operatingHours'
}

export type RestaurantScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  operatingHours?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type RestaurantUpdateInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpdateManyMutationInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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

export type RestaurantUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RestaurantCreateWithoutUserInput>;
  delete?: InputMaybe<RestaurantWhereInput>;
  disconnect?: InputMaybe<RestaurantWhereInput>;
  update?: InputMaybe<RestaurantUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<RestaurantUpsertWithoutUserInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutMenuInput = {
  data: RestaurantUpdateWithoutMenuInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
  data: RestaurantUpdateWithoutOrdersInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutUserInput = {
  data: RestaurantUpdateWithoutUserInput;
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

export type RestaurantUpdateWithoutUserInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
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

export type RestaurantUpsertWithoutUserInput = {
  create: RestaurantCreateWithoutUserInput;
  update: RestaurantUpdateWithoutUserInput;
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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

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

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  customer?: Maybe<Customer>;
  dateOfBirth: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  restaurant?: Maybe<Restaurant>;
  role: Role;
  verification: Scalars['Boolean']['output'];
};


export type UserCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};


export type UserRestaurantArgs = {
  where?: InputMaybe<RestaurantWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  dateOfBirth: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  resetPassOtp: Scalars['Int']['output'];
  resetPassOtpExpiry: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  verification: Scalars['Int']['output'];
  verificationOtp: Scalars['Int']['output'];
  verificationOtpExpiry: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  customer?: InputMaybe<CustomerCreateNestedOneWithoutUserInput>;
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  restaurant?: InputMaybe<RestaurantCreateNestedOneWithoutUserInput>;
  role: Role;
};

export type UserCreateManyInput = {
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
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
  phone: Scalars['String']['input'];
  restaurant?: InputMaybe<RestaurantCreateNestedOneWithoutUserInput>;
  role: Role;
};

export type UserCreateWithoutRestaurantInput = {
  customer?: InputMaybe<CustomerCreateNestedOneWithoutUserInput>;
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role: Role;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  dateOfBirth: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  resetPassOtp?: Maybe<Scalars['String']['output']>;
  resetPassOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
  role: Role;
  verification: Scalars['Boolean']['output'];
  verificationOtp?: Maybe<Scalars['String']['output']>;
  verificationOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  dateOfBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  resetPassOtp?: Maybe<Scalars['String']['output']>;
  resetPassOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
  role?: Maybe<Role>;
  verification?: Maybe<Scalars['Boolean']['output']>;
  verificationOtp?: Maybe<Scalars['String']['output']>;
  verificationOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  dateOfBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  resetPassOtp?: Maybe<Scalars['String']['output']>;
  resetPassOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
  role?: Maybe<Role>;
  verification?: Maybe<Scalars['Boolean']['output']>;
  verificationOtp?: Maybe<Scalars['String']['output']>;
  verificationOtpExpiry?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type UserMinOrderByAggregateInput = {
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  DateOfBirth = 'dateOfBirth',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Phone = 'phone',
  ResetPassOtp = 'resetPassOtp',
  ResetPassOtpExpiry = 'resetPassOtpExpiry',
  Role = 'role',
  Verification = 'verification',
  VerificationOtp = 'verificationOtp',
  VerificationOtpExpiry = 'verificationOtpExpiry'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  dateOfBirth?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
};

export type UserUpdateInput = {
  customer?: InputMaybe<CustomerUpdateOneWithoutUserNestedInput>;
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
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
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRestaurantInput = {
  customer?: InputMaybe<CustomerUpdateOneWithoutUserNestedInput>;
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  customer?: InputMaybe<CustomerNullableRelationFilter>;
  dateOfBirth?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  restaurant?: InputMaybe<RestaurantNullableRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  customer?: InputMaybe<CustomerNullableRelationFilter>;
  dateOfBirth?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  restaurant?: InputMaybe<RestaurantNullableRelationFilter>;
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

export type RequestOtpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type RequestOtpMutation = { __typename?: 'Mutation', requestOtp: boolean };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', dateOfBirth: any, name: string, id: string, email: string, phone: string, role: Role, verification: boolean, customer?: { __typename?: 'Customer', address: Array<string>, picture?: string | null, cart: Array<{ __typename?: 'OrderItemCart', id: number, foodId: string, totalPrice: number, food: { __typename?: 'Food', name: string, price: number, id: string } }> } | null } | null };

export type FetchFoodsQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchFoodsQuery = { __typename?: 'Query', fetchFoods: Array<{ __typename?: 'Food', id: string, name: string, description: string, category: FoodCategory, price: number, picture?: string | null, restaurantId: string }> };

export type UpdateCartMutationVariables = Exact<{
  quantity: Scalars['Float']['input'];
  foodId: Scalars['String']['input'];
}>;


export type UpdateCartMutation = { __typename?: 'Mutation', updateCart: boolean };

export type FetchCartQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCartQuery = { __typename?: 'Query', fetchCart: Array<{ __typename?: 'OrderItemCart', quantity: number, totalPrice: number, food: { __typename?: 'Food', id: string, name: string, picture?: string | null, price: number } }> };


export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const RequestOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}]}}]} as unknown as DocumentNode<RequestOtpMutation, RequestOtpMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"verification"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"foodId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"food"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const FetchFoodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchFoods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchFoods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"restaurantId"}}]}}]}}]} as unknown as DocumentNode<FetchFoodsQuery, FetchFoodsQueryVariables>;
export const UpdateCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"foodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"Argument","name":{"kind":"Name","value":"foodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"foodId"}}}]}]}}]} as unknown as DocumentNode<UpdateCartMutation, UpdateCartMutationVariables>;
export const FetchCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"food"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}}]}}]}}]} as unknown as DocumentNode<FetchCartQuery, FetchCartQueryVariables>;