import {FindUserDocument} from '../gql/graphql';
import {client} from '../providers/apolloProvider/ApolloProvider';
import {sign} from 'react-native-pure-jwt';

import {JWT_SECRET} from '@env';
export const toPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1));
};

export const formatDate = (dateString: string | Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(dateString));
};

export const userExist = async (email: string) => {
  const response = await client.query({
    query: FindUserDocument,
    variables: {email},
  });
  console.log('THE user eixst response ', response.data.findUser);
  return response.data.findUser;
};

export const generateOAuthToken = async ({
  email,
  provider,
}: {
  email: string;
  provider: string;
}) => {
  console.log('token signining ');
  const token = await sign({email, provider}, JWT_SECRET, {alg: 'HS256'});
  console.log('token signining end');

  return token;
};
