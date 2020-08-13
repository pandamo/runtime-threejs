//console.log('main.js');
import { createApp } from "./src/runtime-threejs/index.js";
import App from "./src/App";
import {getRootContainer} from './initThree.js'


createApp(App).mount(getRootContainer());
