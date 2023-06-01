<template>
  <div
    class="flex w-full py-5 border-b border-solid border-white justify-between relative"
  >
    <div class="flex items-center">
      <div>
        <img src="../assets/Union.png" class="w-[40px] h-[40px]" alt="icon" />
      </div>
      <div>
        <img
          src="../assets/AI工具王.png"
          class="h-[40px] ml-[14px]"
          alt="ai-tool"
        />
      </div>
    </div>
    <ul class="hidden md:flex md:items-center">
      <li>
        <router-link class="font-bold text-base text-white" to="/"
          >首頁</router-link
        >
      </li>
      <li>
        <router-link class="font-bold text-base ml-5 text-white" to="/price"
          >定價</router-link
        >
      </li>
    </ul>
    <div class="flex items-center justify-center md:hidden">
      <img
        v-if="!isMenuOpen"
        src="../assets/Hamburger.png"
        alt="menu-icon"
        class="w-[18px] h-[12px] hover:cursor-pointer"
        @click="isMenuOpen = true"
      />
      <img
        v-else
        src="../assets/Cross.png"
        alt="menu-icon"
        class="w-[14px] h-[14px] hover:cursor-pointer"
        @click="isMenuOpen = false"
      />
    </div>
    <div
      v-if="isMenuOpen"
      class="absolute top-[81px] left-0 h-[60vh] w-full bg-black z-10 md:hidden"
    >
      <div
        class="flex flex-col items-center justify-center h-full w-full border-b border-solid border-white"
      >
        <router-link
          class="block font-black text-white text-[80px] leading-[96px] mb-2 cursor-pointer"
          to="/"
          >首頁
        </router-link>
        <router-link
          class="block font-black text-white text-[80px] leading-[96px] cursor-pointer"
          to="/price"
          >定價
        </router-link>
      </div>
      <div class="w-full h-[30vh] z-10 bg-black">
        <SocialSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SocialSection from "./SocialSection.vue";

const isMenuOpen = ref(false);
</script>
