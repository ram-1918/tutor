import { createApp } from 'vue'

import App from './App.vue'
import router from './router.js'
import store from './store/index.js'


import BaseButton from './components/BaseButton.vue'
import VueNativeSock from 'vue-native-websocket'


const app = createApp(App);

app.component('base-button', BaseButton);
app.component('vue-nativesock', VueNativeSock);


app.use(router);
app.use(store);

app.mount('#app')