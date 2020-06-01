<template>
  <div class="flex flex-row items-center h-69">
    <div class="mr-16">
      <img v-if="amountStatus" :src="'operation_1.svg'" alt="Operation_Plus">
      <img v-else :src="'operation_2.svg'" alt="Operation_Minus">
    </div>
    <div class="flex flex-col mr-18 w-250">
      <span class="text-14 leading-17">{{ payer }}</span>
      <div class="flex flex-row">
        <span class="text-12 leading-15 mr-5">Со счёта:</span>
        <span class="text-12 leading-15 opacity-06">{{ billDescription }}</span>
      </div>
    </div>
    <div class="flex flex-col mr-18 w-180">
      <span class="text-14 leading-17">{{ payee }}</span>
      <span class="text-12 leading-15 opacity-06">{{ serviceDescription }}</span>
    </div>
    <div class="flex mr-18 w-250 text-14 leading-17">
      <span>{{ fullDescription }}</span>
    </div>
    <div class="flex flex-row justify-between w-250">
      <div class="rounded-8 bg-my-green w-82 h-28 text-center">
        <span class="text-my-green-2 text-12 leading-15">{{ paymentStatus }}</span>
      </div>
      <span v-if="amountStatus" class="text-my-green text-16 leading-20">{{ amount }}</span>
      <span v-else class="text-my-red text-16 leading-20">{{ amount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payer: {
      type: String
    },
    billDescription: {
      type: String
    },
    payee: {
      type: String
    },
    serviceDescription: {
      type: String
    },
    fullDescription: {
      type: String
    },
    paymentStatus: {
      type: String
    },
    amount: {
      type: String
    },
    amountStatus: {
      type: Boolean
    }
  }
}
</script>

