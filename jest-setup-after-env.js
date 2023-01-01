import '@testing-library/jest-native/extend-expect';

// From https://reactnavigation.org/docs/testing/#mocking-native-modules
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
