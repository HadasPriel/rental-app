
import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.scss';

import OpenLayersMap from "vue3-openlayers"
import "vue3-openlayers/styles.css"

const app = createApp(App);

app.use(OpenLayersMap /* options */);

app.mount("#app");
