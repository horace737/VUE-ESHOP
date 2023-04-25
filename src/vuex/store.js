import {createStore} from 'vuex'
import axios from "axios";

export default createStore (
    {state: {
        products: [],
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        order_is_sent: false
        },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products) => {
            state.products = products
        },
        SET_CART:(state, product) =>{
            if (state.cart.length){
                let isProductExists = false;
                state.cart.map(function (item){
                    if (item.article === product.article){
                        isProductExists = true;
                        product.is_in_cart = 1
                    }
                })
                if(!isProductExists){
                    if(!product.quantity){
                        product.quantity = 1
                    }
                    state.cart.push(product)
                }
            }else {
                state.cart.push(product)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart));

        },
        REMOVE_FROM_CART:(state, index)=>{
            state.cart.splice(index,1)

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        INCREMENT:(state, index)=>{
            state.cart[index].quantity++
            state.cart[index].total_by_item = state.cart[index].price * state.cart[index].quantity

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        DECREMENT:(state, index)=>{
            if(state.cart[index].quantity>1){
                state.cart[index].quantity--
                state.cart[index].total_by_item = state.cart[index].price * state.cart[index].quantity

                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        MAKE_ORDER:(state)=>{
            state.cart = []
            state.order_is_sent = true
        },
        SENT_FALSE:(state)=>{
            state.order_is_sent = false
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            let url = 'http://localhost:3000/products/'
            return axios(url, {
                method: "GET"
            })
                .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
               // console.log(products.data)
            })
        },
        ADD_TO_CART({ commit } ,product){
            commit('SET_CART', product)
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit('INCREMENT', index)

        },
        DECREMENT_CART_ITEM({commit}, index){
            commit('DECREMENT', index)
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index)
        },
        MAKE_ORDER({commit}){
            commit('MAKE_ORDER')
        },
        SENT_FALSE({commit}){
            commit('SENT_FALSE')
        }
     },
    getters:{
        PRODUCTS(state){
            return state.products
        },
        CART(state){
            return state.cart
        },
        ORDER_IS_SENT(state){
            return state.order_is_sent
        }
    },
})




