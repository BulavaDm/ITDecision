<template>
  <div class="flex flex-row relative">
    <div class="flex flex-row items-center justify-center w-120 h-100 bg-my-grey-1 border border-solid border-my-grey rounded-8 absolute">
      <img :src="'vector.svg'" alt="Vector">
      <select class="text-15 leading-18">
        <option selected>Фильтр</option>
      </select>
    </div>
    <div class="w-384 flex flex-row justify-start items-center pl-130 bg-my-grey rounded-8">
      <div v-for="user in usersList" :key="user.id">
        <div class="relative ml-5">
          <img :src="user.avatar" alt="Avatar">
          <img v-if="user.favorite" :src="'favorite.svg'" alt="Favorite" class="absolute inset-2">
          <div v-if="user.showAbbr" class="text-my-white text-14 leading-17 absolute top-6 left-5">{{ user.abbr }}</div>
        </div>
      </div>
      <button class="w-30 h-30 rounded-50p ml-5 bg-my-grey-1">
        <img :src="'plus_icon.svg'" alt="Plus" class="m-auto">
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    usersList: {
      type: Array
    }  
  }
}
</script>
