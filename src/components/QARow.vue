<template>
  <div
    :class="`w-[40vw] border border-solid border-[#525252]/80 py-5 px-10 flex items-start justify-start hover:border-white rounded-2xl hover:cursor-pointer ${
      !isFold ? 'border-white' : ''
    }`"
    @click="isFold = !isFold"
  >
    <div v-if="isFold" class="w-[14px] h-[14px] pt-1">
      <img src="../assets/Plus.png" alt="plus-icon" />
    </div>
    <div v-else class="min-w-[14px] w-[14px] h-[2px] pt-2.5">
      <img src="../assets/Minus.png" alt="minus-icon" class="w-full" />
    </div>
    <div class="ml-[25px]">
      <p class="w-full font-black text-white text-[20px] leading-[24px]">
        {{ questionAndAnswer.question }}
      </p>
      <p v-if="!isFold" class="mt-5 w-full font-normal text-white text-base">
        {{ questionAndAnswer.answer }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IQA } from "@/interface/IQA";

defineProps<{
  questionAndAnswer: IQA;
}>();

const isFold = ref(true);
</script>
