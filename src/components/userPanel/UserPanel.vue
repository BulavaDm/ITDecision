<template>
<div class="bg-my-grey-3 w-312">
  <div class="h-662 py-26 px-36">
    <div class="flex flex-row justify-between items-center mb-15">
      <span class="text-22 leading-27">Все деньги</span>
      <img :src="'logo.svg'" alt="Logo">
    </div>
    <user-balance></user-balance>
    <user-menu 
      :actionsList="getterUserActions">
    </user-menu>
  </div>
  <user-card 
    :avatar="getterUserCard.avatar"
    :fullName="getterUserCard.fullName"
    :company="getterUserCard.company">
  </user-card>
</div>
</template>

<script>
import UserCard from './UserCard.vue'
import UserMenu from './UserMenu.vue'
import UserBalance from './UserBalance.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    'user-card': UserCard,
    'user-menu': UserMenu,
    'user-balance': UserBalance
  },
  computed: {
    ...mapGetters(['getterUserCard', 'getterUserActions'])
  }
}
</script>
