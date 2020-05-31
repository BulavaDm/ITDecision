<template>
  <div class="flex flex-row w-page h-page fixed">
    <div class="flex w-main-panel pl-36 py-26">
      <!--<main-content></main-content>-->
    </div>
    <div class="flex w-user-panel py-26 pr-35 pl-13">
      <user-panel></user-panel>
    </div>
  </div>
</template>

<script>
import store from './store/store.js'
import UserPanel from './components/userPanel/UserPanel.vue'
//import MainContent from './components/mainPanel/MainContent.vue'

export default {
  components: {
    //'main-content': MainContent,
    'user-panel': UserPanel,
  },
  data() {
    return {}
  },
  store,
  methods: {
  }
}
</script>

<style>
  
  /*TODO: Do with tailwind.css*/
  .treeCSS, 
  .treeCSS ul,
  .treeCSS li {
    margin: 0;
    padding: 0;
    line-height: 1;
    list-style: none;
  }
  .treeCSS ul {
    margin: 0 0 0 .5em; /* вести линию вниз где-то с полбуквы родителя */
  }
  .treeCSS > li:not(:only-child),
  .treeCSS li li {
    position: relative;
    padding: .2em 0 0 1.2em; 
  }
  .treeCSS li:not(:last-child) {
    border-left: 1px solid #ccc; 
  }
  .treeCSS li li:before,
  .treeCSS > li:not(:only-child):before { /* горизонтальная линия */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.1em; /* не более отступа до текста (1.2em) */
    height: .7em; /* начинается приблизительно с половины высоты буквы (.5em + .2em) */
    border-bottom: 1px solid #ccc;
  }
  .treeCSS li:last-child:before { 
    width: calc(1.1em - 1px); 
    border-left: 1px solid #ccc;
  }
</style>