<template>
  <section id="app" :class="">
    <header-bar></header-bar>
    <main>
      <router-view></router-view>
    </main>
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
