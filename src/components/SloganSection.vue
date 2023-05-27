<template>
  <div class="w-full">
    <div class="py-10">
      <div class="font-black text-[120px] leading-[144px] text-white">
        {{ sloganOne }}
      </div>
      <div class="font-black text-[120px] leading-[144px] text-white">
        {{ sloganTwo }}
      </div>
      <div>
        <div
          v-if="sloganThree"
          class="font-black text-[120px] leading-[144px] text-white"
        >
          {{ sloganThree }}
        </div>
        <div
          v-if="sloganFour"
          class="font-black text-[120px] leading-[144px] text-white"
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
      <div>
        <img
          src="../assets/3.png"
          alt="anime-icon-1"
          class="w-[80px] h-[80px]"
        />
      </div>
      <div>
        <img
          src="../assets/3.png"
          alt="anime-icon-2"
          class="w-[80px] h-[80px]"
        />
      </div>
      <div>
        <img
          src="../assets/3.png"
          alt="anime-icon-3"
          class="w-[80px] h-[80px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sloganOne: string;
  sloganTwo: string;
  isForPrice: boolean;
  sloganThree?: string;
  sloganFour?: string;
}>();
</script>
