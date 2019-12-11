/**
 * @author Allen Elguira
 * @license GNUOpenSourceLicense
 * @version v0.9.0-Pre-released-beta
 *
 * This project entitled: "Vehicle Pass Security System"
 * is the proposed system to help maximize the security
 * of students and employees inside of Lyceum-Northwestern University
 *
 * The study is licensed with GNU Open Source means that the project
 * is can be use by other people who wants to use this code
 */
import { registerRootComponent } from "expo";
import Axios from "axios";
import App from "./App";
import { getIpAddressAsync } from "expo-network";
const isProd = !__DEV__;

// async function bootstrap() {
Axios.defaults.baseURL = isProd
  ? `http://${getIpAddressAsync().then(ip => ip)}:8000`
  : "http://192.168.100.5:8000";
Axios.defaults.withCredentials = true;
// }
// bootstrap();

registerRootComponent(App);
