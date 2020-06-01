<template>
<div class="flex justify-center items-center h-920">
  <div class="flex flex-row w-page fixed bg-my-grey-1">
    <div class="flex w-main-panel pl-36 py-26">
      <main-content></main-content>
    </div>
    <div class="flex w-user-panel py-26 pr-35 pl-13">
      <user-panel></user-panel>
    </div>
  </div>
</div>
</template>

<script>
import store from './store/store.js'
import UserPanel from './components/userPanel/UserPanel.vue'
import MainContent from './components/mainPanel/MainContent.vue'

export default {
  components: {
    'main-content': MainContent,
    'user-panel': UserPanel,
  },
  store
}
</script>
