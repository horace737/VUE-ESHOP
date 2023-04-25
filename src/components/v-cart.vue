<template>
  <div class="v-cart">
    <div class = "v-cart__links">
      <router-link :to="{name: 'catalog', }">
        <div class="v-cart__link_to_catalog">К каталогу</div>
      </router-link>
      <router-link :to="{name: 'order'}">
        <div class="v-cart__link_order">Заказ</div>
      </router-link>
    </div>

    <h1>Корзина</h1>
    <p v-if="!CART.length">Корзина пуста</p>
    <v-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :index="index"
    />

    <!--      :cart_item_data="item"-->
    <!--      @deleteFromCart="DELETE_FROM_CART(index)"-->
    <!--      @increment="INCREMENT_CART_ITEM(index)"-->
    <!--      @decrement="DECREMENT_CART_ITEM(index)"-->
    <div class="v-cart__total">
      <p class="total__name">Итого: </p>
      <p>{{ cartTotalCost }} Р</p>
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import { mapGetters} from 'vuex'

export default {
  name: "v-cart",
  components:{
    vCartItem
  },
  props:{
    cart_data:{
      type: Array,
      default(){
        return []
      }

    }
  },
  data(){
    return {}
  },
  computed:{
    ...mapGetters([
        'CART'
    ])
  ,cartTotalCost(){
      let result = []
      if (this.CART.length){
        for (let item of this.CART){
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function(sum, el){
          return sum + el
        })
      }
      else {result = [0]
            result =result.reduce(function(sum, el){
            return sum + el
            })
      }
      return result
    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped >
.v-cart{
  margin-bottom: 100px;
&__links{
  display: flex;
}

&__list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
 }
&__link_to_catalog{
   position: absolute;
   top: 10px;
   right: 10px;
   padding: 16px;
   border: solid 1px;
 }
&__link_order{
  position: absolute;
  top: 70px;
  right: 10px;
  padding: 16px;
  border: solid 1px;

}
&__total{
    position: fixed;
    bottom: 0;
    right: 0;
    left:0;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    background: teal;
    font-size: 20px;

  }
  .total__name{
    margin-right: 16px;
  }
}
</style>