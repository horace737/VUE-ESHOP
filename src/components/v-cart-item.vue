<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item.image) " alt="img">
<!--    <div calss="cart_item__data_info">-->
     <div class="item_name">
       {{cart_item.name}}
       <p class="article">Артикул: {{cart_item.article}}</p>
     </div>
    <div class="item_price">
      Цена
      <p class="price">{{cart_item.price}}</p>
    </div>


<!--    </div>-->
    <div class="cart_item_data__quantity">
      <p class="quant">Кол-во:</p>
      <span class="q_span">
        <span class="quantity__btn" @click="DECREMENT_CART_ITEM(index)">-</span>
        {{ cart_item.quantity }}
         <span class="quantity__btn" @click="INCREMENT_CART_ITEM(index)">+</span>
      </span>
    </div>
    <div class="cart_item_data__quantity">
      <p class="quant">Всего за товар:</p>
      <span>
        {{ getTotal }}
      </span>
    </div>
    <button class="btn_delete" @click="DELETE_FROM_CART(index)">Удалить</button>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-cart-item",
  // props: ['cart', 'index']
  props:{
    // cart_item_data:{
    //   type: Object,
    //   default(){
    //     return {}
    //   }
    // },
    index: {
      type: Number
    }
  },

  data(){
    return{
      cart_item: {}
    }
  },
  computed:{
    ...mapGetters(['CART']),
    getTotal()
    {
      return this.cart_item.price * this.cart_item.quantity;
    }

  },
  methods:{

    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),


  },
  created()
  {
    // console.log(this.CART[0])
    this.cart_item = this.CART[this.$props.index];

    // this.cart_item = this.$props.cart_item_data;
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin: 16px;
  &__image{
    max-width: 50px;

  }

.quantity__btn{
    cursor: pointer;
    margin-top: 0;

  }


.item_name {
  width: 200px;
}
.article{
  margin-top: 0;
}
.price{
  margin-top: 0;

}
  .quant{
    margin-top: 0;
  }
  .q_span{
    margin-top: 0;
  }
}

</style>