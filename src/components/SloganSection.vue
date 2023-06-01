<template>
  <div class="w-full">
    <div class="py-10">
      <div
        class="font-black text-[48px] leading-[120%] text-white md:text-[120px] md:leading-[144px]"
      >
        {{ sloganOne }}
      </div>
      <div
        class="font-black text-[48px] leading-[120%] text-white md:text-[120px] md:leading-[144px]"
      >
        {{ sloganTwo }}
      </div>
      <div>
        <div
          v-if="sloganThree"
          class="font-black text-[48px] leading-[120%] text-white md:text-[120px] md:leading-[144px]"
        >
          {{ sloganThree }}
        </div>
        <div
          v-if="sloganFour"
          class="font-black text-[48px] leading-[120%] text-white md:text-[120px] md:leading-[144px]"
        >
          {{ sloganFour }}
        </div>
        <div class="flex justify-end">
          <div
            v-if="isForPrice"
            class="flex items-center mt-20 mb-[98px] max-w-[636px] font-black text-[48px] leading-[57.6px] text-white"
          >
            我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        v-if="!isForPrice"
        class="border border-solid border-white bg-black text-[20px] leading-[24px] text-white font-black px-10 py-5 rounded-2xl"
      >
        開始使用
      </button>
    </div>
    <div
      :class="`flex w-full ${
        isForPrice ? 'justify-start' : 'justify-end'
      } pt-[100px]`"
    >
      <div class="w-[117px] h-[117px] overflow-hidden md:w-[80px] md:h-[80px]">
        <img
          src="../assets/3.png"
          alt="anime-icon-1"
          :class="`${isThirdSlide ? 'animate-slideUp' : ''}`"
        />
      </div>
      <div class="w-[117px] h-[117px] overflow-hidden md:w-[80px] md:h-[80px]">
        <img
          src="../assets/3.png"
          alt="anime-icon-2"
          :class="`${isSecondSlide ? 'animate-slideUp' : ''}`"
        />
      </div>
      <div class="w-[117px] h-[117px] overflow-hidden md:w-[80px] md:h-[80px]">
        <img src="../assets/3.png" alt="anime-icon-3" class="animate-slideUp" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

defineProps<{
  sloganOne: string;
  sloganTwo: string;
  isForPrice: boolean;
  sloganThree?: string;
  sloganFour?: string;
}>();

const isSecondSlide = ref(false);
const isThirdSlide = ref(false);
const timerOne = ref<ReturnType<typeof setTimeout> | null>(null);
const timerTwo = ref<ReturnType<typeof setTimeout> | null>(null);

onMounted(() => {
  if (timerOne.value) {
    clearTimeout(timerOne.value);
  } else {
    timerOne.value = setTimeout(() => {
      isSecondSlide.value = true;
    }, 250);
  }

  if (timerTwo.value) {
    clearTimeout(timerTwo.value);
  } else {
    timerTwo.value = setTimeout(() => {
      isThirdSlide.value = true;
    }, 500);
  }
});

onUnmounted(() => {
  clearTimeout(timerOne.value as ReturnType<typeof setTimeout>);
  clearTimeout(timerTwo.value as ReturnType<typeof setTimeout>);
});
</script>
