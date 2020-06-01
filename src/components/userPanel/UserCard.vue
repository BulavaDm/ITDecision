<template>
  <div class="flex flex-row justify-between items-center h-86 bg-my-grey rounded-8 pl-26 pr-26">
    <div class="flex items-center">
      <img :src="avatar" alt="Avatar">
      <div class="flex flex-col ml-15 text-15 leading-18">
        <span>{{ fullName }}</span>
        <span class="mt-my-4 opacity-07">{{ company }}</span>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <button>
        <img :src="'settings_icon.svg'" alt="Settings" class="mb-10">
      </button>
      <button>
        <img :src="'help_icon.svg'" alt="Help">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    },
    fullName: {
      type: String
    },
    company: {
      type: String
    }
  }
}
</script>
