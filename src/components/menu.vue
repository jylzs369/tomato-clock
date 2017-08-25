<template>
  <footer class="menu flex border-top">
    <router-link tag="a" :to="{ name: 'Task' }" class="tomato-icon icon-list"></router-link>
    <router-link tag="a" :to="{ name: 'Clock' }" class="tomato-icon icon-clock"></router-link>
    <span>
      <router-link tag="button" class="break tomato-icon primary" :class="'icon-start'" :to="{ name: 'Progress' }"></router-link>
    </span>
    <router-link tag="a" :to="{ name: 'Statistics' }" class="tomato-icon icon-bar"></router-link>
    <router-link tag="a" to="" class="tomato-icon icon-user"></router-link>
  </footer>
</template>
