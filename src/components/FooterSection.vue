<template>
  <div class="w-full container-wrapper py-20">
    <div class="w-full flex items-start justify-between">
      <div>
        <RouterLink
          to="/"
          class="mb-2 font-black text-[80px] leading-[96px] text-white"
          >首頁</RouterLink
        >
      </div>
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
    </div>
    <div>
      <RouterLink
        to="/price"
        class="font-black text-[80px] leading-[96px] text-white"
        >定價</RouterLink
      >
    </div>
  </div>
  <div class="w-full container-wrapper pb-8 mt-20">
    <div
      class="flex items-center justify-between border-t border-solid border-white pt-8"
    >
      <div class="flex items-center">
        <div class="font-bold text-base text-white mr-[100px]">
          AI工具王 © 2023
        </div>
        <div class="flex items-center flex-wrap">
          <div
            class="font-bold text-base text-white mr-5 mb-2 hover:cursor-pointer"
          >
            Facebook
          </div>
          <div
            class="font-bold text-base text-white mr-5 mb-2 hover:cursor-pointer"
          >
            Twitter
          </div>
          <div class="font-bold text-base text-white hover:cursor-pointer">
            Instagram
          </div>
        </div>
      </div>
      <div
        class="flex items-center hover:cursor-pointer"
        @click="handleScrollToTop"
      >
        <div class="mr-4 font-bold text-base text-white">Back to top</div>
        <div class="w-[11px] h-[11px]">
          <img src="../assets/UpArrow.png" alt="back-to-top" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleScrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
</script>
