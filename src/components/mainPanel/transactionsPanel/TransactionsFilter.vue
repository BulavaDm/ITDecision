<template>
  <div class="flex flex-row items-center justify-between h-31 mb-51">
    <div class="flex flex-row items-center h-100">
      <span class="text-15 leading-18 opacity-06">Группировать:</span>
      <div class="border border-solid border-my-grey-1 rounded-8 ml-8 mr-24">
        <select class="w-180 text-13 leading-16">
          <option selected>По дате</option>
        </select>
      </div>
      <span class="text-15 leading-18 opacity-06">Вид:</span>
      <button class="w-30 h-30 bg-my-grey-2 rounded-8 ml-8">
        <img :src="'list_icon.svg'" alt="List" class="m-auto">
      </button>
      <button class="w-30 h-30 border border-solid border-my-grey-1 rounded-8 ml-8">
        <img :src="'calendar_icon_2.svg'" alt="Calendar" class="m-auto">
      </button>
    </div>
    <div class="flex flex-row items-center text-13 leading-16 h-100">
      <button class="bg-my-grey rounded-8 h-100 m-auto px-14 mr-8">Все операции</button>
      <button class="border border-solid border-my-grey-1 h-100 m-auto px-14 rounded-8 mr-8">Будущие</button>
      <button class="border border-solid border-my-grey-1 h-100 m-auto px-14 rounded-8 mr-8">Прошедшие</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>