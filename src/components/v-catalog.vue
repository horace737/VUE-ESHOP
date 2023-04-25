<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart'}">
      <div class="v-catalog__link_to_cart">Корзина: {{ CART.length }}</div>
    </router-link>

   <h1>Каталог товаров</h1>
    <div class="v-catalog__list">
    <v-catalog-item
      v-for="(product, index) in PRODUCTS"
      :key="product.article"
      :index = "index"

    />
    </div>
  </div>
</template>


<script>


import VCatalogItem from "@/components/v-catalog-item";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    VCatalogItem

  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)

    }
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API()


  }
}
</script>

<style lang="scss" scoped>
.v-catalog{
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid 1px;
  }
}

</style>