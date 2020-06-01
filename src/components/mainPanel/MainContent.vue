<template>
  <div>
    <filter-panel></filter-panel>
    <transactions-panel></transactions-panel>
    <add-button></add-button>
    <delete-button></delete-button>
  </div>
</template>

<script>
import FilterPanel from './filterPanel/FilterPanel.vue'
import TransactionsPanel from './transactionsPanel/TransactionsPanel.vue'
import AddButton from './AddButton.vue'
import DeleteButton from './DeleteButton.vue'

export default {
  components: {
    'filter-panel': FilterPanel,
    'transactions-panel': TransactionsPanel,
    'add-button': AddButton,
    'delete-button': DeleteButton
  }
}
</script>
