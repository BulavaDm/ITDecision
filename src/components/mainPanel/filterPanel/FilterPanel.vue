<template>
  <div class="flex flex-row h-44">
    <filter-months></filter-months>
    <filter-search></filter-search>
    <filter-users
      :usersList="getterUsersList">
    </filter-users>
  </div>
</template>

<script>
import FilterMonths from './FilterMonths.vue'
import FilterSearch from './FilterSearch.vue'
import FilterUsers from './FilterUsers.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    'filter-months': FilterMonths,
    'filter-search': FilterSearch,
    'filter-users': FilterUsers
  },
  computed: {
    ...mapGetters(['getterUsersList'])
  }
}
</script>
