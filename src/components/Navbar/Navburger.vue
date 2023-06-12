<template>
  <div class="cursor-pointer lg:hidden relative">
    <img :src="IconMenu" alt="icon-menu" @click="state.show = !state.show" />
    <Menus
      v-if="state.show"
      class="absolute bg-blue-light-1 rounded-sm p-4 right-0 top-[24px] min-w-[100px] z-50"
      @close:menu="closeMenu"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue"
import IconMenu from "../../assets/icons/icon-menu.svg"
import Menus from "./Menus.vue"

const state = reactive({ show: false })

function closeMenu() {
  state.show = false
}
</script>

<style lang="scss" scoped></style>
