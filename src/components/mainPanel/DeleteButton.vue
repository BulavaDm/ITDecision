<template>
  <drag-gable :draggable="false">
    <button class="w-main-buttons h-main-buttons rounded-50p bg-my-white border border-my-grey-2 absolute top-700 left-700">
      <img :src="'main_trash_icon.svg'" alt="Add" class="m-auto">
    </button>
  </drag-gable>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    'drag-gable': Draggable
  },
}
</script>
