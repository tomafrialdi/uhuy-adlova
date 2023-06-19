<template>
  <nav class="px-6 py-4 lg:px-16 lg:py-6 bg-white w-full">
    <div
      class="absolute left-0 top-0 z-50 h-1/6 w-screen bg-white transition-opacity duration-300 lg:hidden"
      :class="{
        'opacity-0': !state.open,
      }"
    >
      <div
        class="relative top-[200px] transition-all transform translate-x-0 duration-500"
        :class="{
          'translate-x-16': state.open,
        }"
      >
        <Menus @close:menu="toggleSideBar" />
        <button
          class="text-primary-2 border-2 border-primary-2 rounded-lg font-manjari font-bold px-7 py-4"
        >
          Talk to Us
        </button>
      </div>
    </div>
    <div class="nav-content-wrapper flex justify-between items-center">
      <img
        :src="LogoTextAldova"
        alt="logo-text-aldova"
        class="w-[96px] h-[30px] lg:w-[160px] lg:h-[50px] z-50"
      />
      <div class="items-center gap-x-10 lg:flex hidden">
        <Menus class="flex gap-x-10" />
        <button
          class="text-primary-2 border-2 border-primary-2 rounded-lg font-manjari font-bold px-7 py-4"
        >
          Talk to Us
        </button>
      </div>
      <Navburger class="z-50" @toggle:sidebar="toggleSideBar" />
    </div>
  </nav>
</template>

<script setup>
  import { reactive } from "vue"
  import LogoTextAldova from "../../assets/images/logo-aldova-text.png"
  import Navburger from "../Navbar/Navburger.vue"
  import Menus from "../Navbar/Menus.vue"

  const state = reactive({
    open: false,
  })

  function toggleSideBar() {
    state.open = !state.open
  }
</script>

<style lang="scss" scoped></style>
