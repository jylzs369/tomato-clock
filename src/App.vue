<template>
  <section id="app" :class="">
    <header-bar></header-bar>
    <router-view></router-view>
    <menu-bar></menu-bar>
  </section>  
</template>

<script>
import HeaderBar from '@/components/header'
import MenuBar from '@/components/menu'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HeaderBar,
    MenuBar
  },
  methods: {
  }
}
</script>

<style>
@import './assets/styles/app.css';
</style>
