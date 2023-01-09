import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Tries retrieving data from network and, if request is fullfilled, store the
 * response data in cache. If the request fails, returns cached data, if
 * available.
 * @param key cache key 
 * @param request pending network request
 * @returns items from request, if it suceeded; otherwise from cache
 */
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

/**
 * Stores data in cache, identified by the passed key
 * @param key unique string to identify dataset
 * @param value dataset to be stores
 * @returns a promise resolved when the storing is complete
 */
function setInCache(key: string, value: any) {
  const jsonValue = JSON.stringify(value);
  return AsyncStorage.setItem(key, jsonValue);
}

/**
 * Retrieves data from cache stored under the passed key.
 * @param key unique string identifying the desired dataset
 * @returns a promise of stored data; rejected if said data is not found
 */
function getFromCache<T>(key: string): Promise<T> {
  return AsyncStorage.getItem(key).then((json) =>
    json != null
      ? Promise.resolve(JSON.parse(json))
      : Promise.reject(`Key "${key}" not in cache`)
  );
}
