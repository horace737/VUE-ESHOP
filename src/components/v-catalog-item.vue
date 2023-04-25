<template>
  <div class = 'v-catalog-item'>
    <img class="v-catalog-item__image" :src="require('../assets/images/' + product_data.image) " alt="img">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} Р</p>
    <button class="v-catalog-item__btn btn" @click="ADD_TO_CART(product_data)">В корзину</button>
    <p v-if="product_data.is_in_cart ==1">Товар уже в корзине</p>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "v-catalog-item",
  props: ['index']
  ,
  data(){
    return {
      product_data: {}
    }
  },
  methods:{
    ...mapActions([
        'ADD_TO_CART'
    ]),

  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ])
  },
  created(){
    this.product_data = this.PRODUCTS[this.$props.index];
  },
  mounted() {

    if(!this.product_data.quantity){
      // eslint-disable-next-line vue/no-mutating-props
      this.product_data.quantity = 1
    }



    if(!this.product_data.is_in_cart){
      // eslint-disable-next-line vue/no-mutating-props
      this.product_data.is_in_cart = 0
    }


  }

}
</script>

<style lang="css">
.v-catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin: 16px;

}
.v-catalog-item__image{
  width: 200px;
  height: 250px;

}

</style>