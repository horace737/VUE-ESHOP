<template>
  <div class="v-order">
    <h1>Заказ</h1>
    <form @submit.prevent="makeOrder" v-if="CART.length" class="v-order__form">
      <div class="form-row">
        <p></p><input type="text" id="lastname" placeholder="Фамилия" required>
        <p></p><input type="text" id="name" placeholder="Имя" required>
        <p></p><input type="text" id="middlename" placeholder="Отчество" required>
      </div>
      <div class="form-row">
        <p></p><input type="text" id="phone" placeholder="Телефон" required>
      </div>
      <div class="form-row">
        <label for="message">Адрес</label><textarea rows="5" id="address" required></textarea>
      </div>
      <div class="form-row">
        <input type="submit" value="Отправить">
      </div>
    </form>
    <div v-if="ORDER_IS_SENT" class="v-order__form">Заказ отправлен на обработку</div>

    <v-cart />
  </div>
</template>

<script>
import vCart from "@/components/v-cart";
import {mapGetters, mapActions} from "vuex";


export default {
  name: "v-order",
  components: {
    vCart
  },
  computed: {
    ...mapGetters([
      'CART',
      'ORDER_IS_SENT'

    ]),

  },
  methods:{
    ...mapActions([
      'MAKE_ORDER',
      'SENT_FALSE'
    ]),
    makeOrder(){
      this.MAKE_ORDER();
      setTimeout(() => {
        this.SENT_FALSE();
        localStorage.clear();
        this.$router.push('/')
      }, 2000);

    },
  }
}

</script>

<style lang="scss" scoped>
.v-order{
    &__form{
      max-width: 350px;
      margin: 15px auto 0;
      padding: 20px;
      background: #fffdee;
      border: 10px solid transparent;
      font-family: 'Calibri';
      color: #605756;
      border: solid 1px
 }
}
.form-row {
  margin-bottom: 3px;
  margin-right: 15px
}
.form-row input[type="text"], .form-row input[type="email"], .form-row textarea {
  width: 100%;
  padding: 0 5px;
  line-height: 25px;
  border-width: 0;
  outline: none;
  background: thistle;
  background-size: 8px 35px;
  font-family: 'Calibri';
}
.form-row textarea {
  margin-top:3px;
  background-attachment: local;
  background-repeat: repeat;
  resize: none;
}
.form-row input[type="submit"] {
  padding: 20px 20px;
  margin-top: 10px;
  background: hotpink;
  border-width: 0;
  cursor: pointer;
  outline: none;
  font-family: 'Calibri';
  font-size: 13px;
  letter-spacing: 1px;
  color: #fffdee;
  text-transform: uppercase;
  transition: 1s cubic-bezier(.165, .84, .44, 1);
}
.form-row input[type=submit]:hover {
  background: #C42061;
}
</style>