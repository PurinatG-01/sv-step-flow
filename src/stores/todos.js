import { writable } from "svelte/store";
import { generateFakeUserDatas } from '../util/generateFakeUserDatas' 

export default writable(generateFakeUserDatas(10));