import AsyncStorage from "@react-native-async-storage/async-storage";

export async function networkFirst<T>(
  key: string,
  request: Promise<T>
): Promise<T> {
  try {
    const response = await request;
    setInCache(key, response);
    return response;
  } catch (e) {
    console.error(e);
    return getFromCache<T>(key);
  }
}

function setInCache(key: string, value: any) {
  const jsonValue = JSON.stringify(value);
  return AsyncStorage.setItem(key, jsonValue);
}

function getFromCache<T>(key: string): Promise<T> {
  return AsyncStorage.getItem(key).then((json) =>
    json != null
      ? Promise.resolve(JSON.parse(json))
      : Promise.reject(`Key "${key}" not in cache`)
  );
}
