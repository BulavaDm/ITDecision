<template>
  <div>
    <transactions-filter></transactions-filter>
    <div v-for="transactionDay in getterTransactionsData" :key="transactionDay.id">
      <transactions-dayList
        :date="transactionDay.date"  
        :carts="transactionDay.carts">
      </transactions-dayList>
    </div>
  </div>
</template>

<script>
import TransactionsFilter from './TransactionsFilter.vue'
import TransactionsDayList from './TransactionsDayList.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    'transactions-filter': TransactionsFilter,
    'transactions-dayList': TransactionsDayList,
  },
  computed: {
    ...mapGetters(['getterTransactionsData'])
  }
}
</script>