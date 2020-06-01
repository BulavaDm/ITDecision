<template>
  <div>
    <transactions-chart></transactions-chart>
    <transactions-content></transactions-content>
  </div>
</template>

<script>
import TransactionsChart from './TransactionsChart.vue'
import TransactionsContent from './TransactionsContent.vue'

export default {
  components: {
    'transactions-chart': TransactionsChart,
    'transactions-content': TransactionsContent
  }
}
</script>
