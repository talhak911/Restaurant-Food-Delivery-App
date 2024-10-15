import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';

export const uploadImage = async (uri: string | null) => {
  try {
    if (!uri) {
      return;
    }
    let filePath = uri;

    const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`profilePic/${filename}`);
    await storageRef.putFile(filePath, {
      cacheControl: 'no-store',
    });
    const downloadURL = await storageRef.getDownloadURL();

    return downloadURL;
  } catch (error: any) {
    Toast.show({type: 'error', text1: `${error.message}`});
  }
};
