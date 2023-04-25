import {createRouter, createWebHistory} from 'vue-router';
import vCatalog from './components/v-catalog'
import vCart from './components/v-cart'
import vOrder from './components/v-order'


export default createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'catalog', component:vCatalog, props: true },
        {path: '/cart', name: 'cart', component:vCart, props: true},
        {path: '/order', name: 'order', component:vOrder, props: true}
    ]
})