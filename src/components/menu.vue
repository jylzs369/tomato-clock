<template>
  <div class="menu flex">
    <router-link tag="a" :to="{ name: 'Task' }" class="tomato-icon icon-list"></router-link>
    <router-link tag="a" :to="{ name: 'Clock' }" class="tomato-icon icon-clock"></router-link>
    <router-link tag="button" :to="{ name: 'Progress' }">进行</router-link>
    <router-link tag="a" :to="{ name: 'Statistics' }" class="tomato-icon icon-bar"></router-link>
    <router-link tag="a" to="" class="tomato-icon icon-user"></router-link>
  </div>
</template>
