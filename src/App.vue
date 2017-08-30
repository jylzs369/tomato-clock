<template>
  <section id="app" :class="">
    <header-bar></header-bar>
    <main>
      <router-view></router-view>
      <tag-filter></tag-filter>
    </main>
    <menu-bar></menu-bar>
  </section>  
</template>

<script>
import HeaderBar from '@/components/header'
import MenuBar from '@/components/menu'
import TagFilter from '@/components/tagFilter'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HeaderBar,
    MenuBar,
    TagFilter
  },
  methods: {
  }
}
</script>

<style>
@import './assets/styles/app.css';
</style>
