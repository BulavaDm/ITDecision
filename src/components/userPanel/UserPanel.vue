<template>
<!--TODO: div--> 
<div class="bg-my-grey-3">
  <!--<div class="h-885 py-26 px-36">
    <div class="flex flex-row justify-between items-center mb-15">
      <span>Все деньги</span>
      <img src="./src/assets/images/logo.svg" alt="Logo">
    </div>
    <div class="h-176 w-100 bg-my-grey mb-26 px-18 py-11 rounded-8">
      <ul class="treeCSS mb-10">
        <li>738 801 ₴
          <ul>
            <li>546 568 ₴</li>
            <li>8 797 $(237 233 ₴)</li>
          </ul>
        </li>
      </ul>
     
      <hr class="mb-10">
      <div class="flex flex-row justify-between items-center mb-5">
        <span>monobank</span>
        <span>312 471 ₴</span>
      </div>
      <div class="flex flex-row justify-between items-center mb-5">
        <span>monobank,$</span>
        <span>8 797$</span>
      </div>
      <div class="flex flex-row justify-between items-center mb-5">
        <span>Касса</span>
        <span>234 097₴</span>
      </div>
    </div>
    <user-menu 
      :actionsList="getterUserActions">
    </user-menu>
  </div>-->
  

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
import { mapGetters } from 'vuex';

export default {
  components: {
    'user-card': UserCard,
    'user-menu': UserMenu
  },
  computed: {
    ...mapGetters(['getterUserCard', 'getterUserActions'])
  }
}
</script>
