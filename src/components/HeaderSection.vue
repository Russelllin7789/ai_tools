<template>
  <div
    class="flex w-full py-5 border-b border-solid border-white justify-between"
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
    <ul class="flex items-center">
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
  </div>
</template>

<script setup lang="ts"></script>
