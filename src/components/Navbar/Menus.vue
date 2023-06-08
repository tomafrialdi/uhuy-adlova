<template>
  <ul>
    <li
      v-for="menu in menus"
      :key="menu.label"
      class="font-manjari cursor-pointer"
      @click="handleClick(menu)"
    >
      {{ menu.label }}
    </li>
  </ul>
</template>

<script setup>
import { reactive } from "vue"

const menus = reactive([
  {
    label: "Home",
    to: "home",
  },
  {
    label: "Service",
    to: "service",
  },
  {
    label: "About",
    to: "about",
  },
])

function handleClick(menu) {
  console.log(`${menu.label} clicked`)
}
</script>

<style lang="scss" scoped></style>
