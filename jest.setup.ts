let mockCounter = 0;
jest.mock("expo-crypto", () => ({ randomUUID: () => `uuid-${++mockCounter}` }));
