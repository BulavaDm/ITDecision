<template>
<div class="mt-10">
  <div class="flex flex-row justify-between items-center">
    <div class="flex flex-row items-center">
      <span class="mr-8 text-22 leading-27">{{ date }}</span>
      <button>
        <img :src="'arrow_down.svg'" alt="Arrow_Down" class="m-auto">
      </button>
    </div>
    <div class="flex flex-row items-center">
      <span class="mr-8 text-13 leading-16">Добавить</span>
      <button class="w-28 h-28 rounded-50p bg-my-grey">
        <img :src="'plus_icon.svg'" alt="Plus" class="m-auto">
      </button>
    </div>
  </div>
  <hr class="border-solid border-my-grey-1 mt-13">
  
  <drag-gable :list="carts" :animation="200" :options="{group:{ name:'carts',  pull:'clone', put:false }}">
    <div v-for="cart in carts" :key="cart.id">
      <transactions-dayCart
        :payer="cart.payer"
        :billDescription="cart.billDescription"
        :payee="cart.payee"
        :serviceDescription="cart.serviceDescription"
        :fullDescription="cart.fullDescription"
        :paymentStatus="cart.paymentStatus"
        :amount="cart.amount"
        :amountStatus="cart.amountStatus">
      </transactions-dayCart>
    </div>
  </drag-gable>
 
  <drag-gable :list="carts" :options="{group:'carts'}" :draggable="false" class="mb-10">
    <hr class="border-solid border-my-grey-1 w-100">
    <div class="relative w-100">
      <div class="flex flex-row justify-center items-center w-240 h-28 bg-my-grey-1 absolute inset-12 left-350">
        <span class="mr-8 text-13 leading-16">Копировать</span>
        <div class="flex justify-center items-center w-28 h-28 rounded-50p bg-my-grey">
          <img :src="'copy_icon.svg'" alt="Copy">
        </div>
      </div>
    </div>
  </drag-gable>
</div>
</template>

<script>
import TransactionsDayCart from './TransactionsDayCart.vue'
import Draggable from 'vuedraggable'

export default {
  components: {
    'transactions-dayCart': TransactionsDayCart,
    'drag-gable': Draggable
  },
  props: {
    date: {
      type: String,
    },
    carts: {
      type: Array,
    }
  }
}
</script>
