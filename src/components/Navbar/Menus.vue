<template>
  <ul>
    <li
      v-for="(menu, index) in menus"
      :key="menu.label"
      class="font-manjari cursor-pointer"
      :class="{
        'text-primary-1': index == currentSection,
      }"
      @click="handleClick(menu.to)"
    >
      {{ menu.label }}
      <!-- {{ currentSection }} -->
    </li>
  </ul>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue"

const emit = defineEmits(["close:menu"])

const menus = reactive([
  {
    label: "Home",
    to: ".home",
  },
  {
    label: "Service",
    to: ".service",
  },
  {
    label: "About",
    to: ".about",
  },
])

const currentSection = ref()

function handleClick(to) {
  document.querySelector(to).scrollIntoView({
    behavior: "smooth",
  })
  emit("close:menu")
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute("id")
        }
      })
    },
    {
      rootMargin: "0px 0px -80% 0px",
    }
  )

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style lang="scss" scoped></style>
