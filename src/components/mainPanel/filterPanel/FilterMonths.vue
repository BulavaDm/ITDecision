<template>
  <div class="flex flex-row">
    <button class="border-solid border-my-grey-1 rounded-8 w-44">
      <img :src="'arrow_left.svg'" alt="Arrow_Left" class="m-auto">
    </button>
    <div class="flex flex-row items-center border border-solid border-my-grey-1 rounded-8 w-94 p-14 mx-5">
      <img :src="'calendar_icon.svg'" alt="Calendar" class="mr-10">
      <span class="text-15 leading-18">Июль</span>
    </div>
    <button class="border-solid border-my-grey-1 rounded-8 w-44">
      <img :src="'arrow_right.svg'" alt="Arrow_Right" class="m-auto">
    </button>
  </div>
</template>

<script>
export default {

}
</script>