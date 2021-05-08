import Vue from 'vue'
import createRouter from './router/index'
import App from './App.vue'

Vue.config.productionTip = false

export default ()=>{
    const router = createRouter();
    const app = new Vue({
        router,
        render: h => h(App)
    })
    return {
        app,
        router,
    }
}