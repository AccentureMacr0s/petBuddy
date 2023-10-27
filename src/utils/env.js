import { Platform } from "react-native";

const liveHost = "https://us-central1-pets-18119.cloudfunctions.net";
//const localHost = "http://localhost:5001/mealstogoservers/us-central1";
const localHost = "http://127.0.0.1:5001/pets-18119/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;