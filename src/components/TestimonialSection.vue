<template>
  <div class="flex flex-col p-10 w-[32%] rounded-2xl bg-[#1E1E1E]">
    <div class="flex">
      <div class="w-3.5 h-3.5 p-[1px]">
        <img src="../assets/Star.png" alt="star-icon" />
      </div>
      <div class="w-3.5 h-3.5 p-[1px]">
        <img src="../assets/Star.png" alt="star-icon" />
      </div>
      <div class="w-3.5 h-3.5 p-[1px]">
        <img src="../assets/Star.png" alt="star-icon" />
      </div>
      <div class="w-3.5 h-3.5 p-[1px]">
        <img src="../assets/Star.png" alt="star-icon" />
      </div>
      <div class="w-3.5 h-3.5 p-[1px]">
        <img src="../assets/Star.png" alt="star-icon" />
      </div>
    </div>
    <p class="w-full min-h-[215px] my-5 font-normal text-base text-white grow">
      {{ testimonial.comment }}
    </p>
    <div class="flex">
      <div class="w-[48px] h-[48px] rounded-full">
        <img :src="testimonial.avatarUrl" alt="ms-chen-avatar" />
      </div>
      <div class="ml-4 text-white">
        <div>{{ testimonial.name }}</div>
        <div>{{ testimonial.company }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITestimonial } from "@/interface/ITestimonial";
defineProps<{ testimonial: ITestimonial }>();
</script>
