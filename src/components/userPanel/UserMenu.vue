<template>
 <!--//TODO: height-->
  <div class="h-390">
    <button v-for="action in actionsList" :key="action.title" class="h-44 w-100 bg-my-grey rounded-8 mb-10">
      <div class="flex flex-row justify-start items-center px-16">
        <img :src="action.icon" alt="Icon" class="mr-5">
        <span>{{ action.title }}</span>
      </div>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    actionsList: {
      type: Array,
    }
  }
}
</script>
