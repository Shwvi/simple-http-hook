// src/main.js
import { version } from "../package.json";
export type MyString = string;
export default function (name: MyString) {
  console.log(name + " version " + version);
}
