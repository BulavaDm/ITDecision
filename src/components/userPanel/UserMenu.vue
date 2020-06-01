<template>
  <div class="h-380">
    <button v-for="action in actionsList" :key="action.title" class="h-44 w-100 bg-my-grey rounded-8 mb-10">
      <div class="flex flex-row justify-start items-center px-16">
        <img :src="action.icon" alt="Icon" class="mr-5">
        <span class="text-18 leading-22">{{ action.title }}</span>
      </div>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    actionsList: {
      type: Array
    }
  }
}
</script>
