<template>
  <div class="cursor-pointer lg:hidden relative">
    <img :src="IconMenu" alt="icon-menu" @click="closeMenu" />
    <Menus
      v-if="state.show"
      class="absolute bg-blue-light-1 rounded-sm p-4 right-0 top-[24px] min-w-[100px] z-50"
    />
  </div>
</template>

<script setup>
  import { reactive } from "vue"
  import IconMenu from "../../assets/icons/icon-menu.svg"
  import Menus from "./Menus.vue"

  const emits = defineEmits(["toggle:sidebar"])

  const state = reactive({ show: false })

  function closeMenu() {
    emits("toggle:sidebar")
  }
</script>

<style lang="scss" scoped></style>
