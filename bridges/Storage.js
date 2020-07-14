// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const Storage = {
  async get(key) {
    const store = await AsyncStorage.getItem(key);
    if (store === undefined || store === null) return undefined;
    try {
      return JSON.parse(store);
    } catch (error) {
      return store;
    }
  },

  async set(key, value) {
    value // eslint-disable-line
      ? await AsyncStorage.setItem(key, JSON.stringify(value))
      : await AsyncStorage.removeItem(key);

    return value;
  },
};
