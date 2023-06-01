<template>
  <div
    class="w-full bg-white rounded-[20px] pb-[160px] flex justify-center md:rounded-[160px]"
  >
    <div class="flex flex-col items-center justify-center container-wrapper">
      <div
        class="font-black text-black section-title mt-[80px] mb-[80px] px-[40px] md:px-0 md:text-[80px] md:leading-[96px] md:mt-[160px]"
      >
        這些超酷的應用，都來自 AI工具王
      </div>
      <div
        class="flex w-full items-center bg-[#f2f2f2] rounded-2xl px-10 py-5 mb-6"
      >
        <div>
          <img
            src="../assets/Search.png"
            alt="search-icon"
            class="w-[18px] h-[18px]"
          />
        </div>
        <input
          id="search-input"
          type="text"
          placeholder="輸入關鍵字搜尋"
          class="ml-4 text-base text-[#919191] w-full bg-transparent focus:outline-none"
        />
        <label for="search-input" />
      </div>
      <div class="flex w-full items-center justify-between flex-wrap">
        <div>
          <button
            class="flex items-center px-10 py-5 border border-solid border-[#f2f2f2] rounded-2xl text-base text-black bg-white font-normal"
          >
            篩選<img
              src="../assets/Filter.png"
              alt="filter-icon"
              class="w-[11px] h-[11px] ml-4"
            />
          </button>
        </div>
        <div class="flex items-center justify-center">
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 0 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            全部
          </div>
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 1 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            聊天
          </div>
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 2 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            影像辨識
          </div>
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 3 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            翻譯
          </div>
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 4 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            行銷
          </div>
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 5 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            客服
          </div>
          <div
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === 6 ? 'bg-[#f2f2f2] text-[#020202]' : 'text-[#919191]'
            }`"
          >
            生產力
          </div>
        </div>
        <div>
          <button
            class="flex items-center px-10 py-5 border border-solid border-[#f2f2f2] rounded-2xl text-base text-black bg-white font-normal"
          >
            由新到舊<img
              src="../assets/Fold.png"
              alt="fold-icon"
              class="w-[8px] h-[5px] ml-4"
            />
          </button>
        </div>
      </div>
      <div class="w-full mt-10">
        <ul class="flex items-center justify-between flex-wrap">
          <li
            v-for="card in cards"
            :key="card.id"
            class="w-full rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6 md:w-[32%]"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  :src="card.imageUrl"
                  :alt="card.title"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  {{ card.title }}
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  {{ card.description }}
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div class="font-bold">AI 模型</div>
                <div>{{ card.discordId }}</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#{{ card.type }}</div>
                <div>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share-icon"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full flex items-center mt-4">
        <ul class="w-full flex items-center justify-end">
          <li
            class="flex items-center justify-center w-[48px] h-[48px] rounded-2xl bg-black text-white mr-1 hover:cursor-pointer"
          >
            1
          </li>
          <li
            class="flex items-center justify-center w-[48px] h-[48px] rounded-2xl text-black mr-1 hover:cursor-pointer"
          >
            2
          </li>
          <li
            class="flex items-center justify-center w-[48px] h-[48px] rounded-2xl text-black mr-1 hover:cursor-pointer"
          >
            3
          </li>
          <li
            class="flex items-center justify-center w-[48px] h-[48px] rounded-2xl text-black mr-1 hover:cursor-pointer"
          >
            4
          </li>
          <li
            class="flex items-center justify-center w-[48px] h-[48px] rounded-2xl text-black mr-6 hover:cursor-pointer"
          >
            5
          </li>
        </ul>
        <div class="w-[5px] h-[8px] hover:cursor-pointer">
          <img src="../assets/RightArrow.png" alt="more-page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IAIWork } from "@/interface/IAIWork";
defineProps<{
  cards: IAIWork[];
}>();

const category = ref(0);
</script>

<style scoped>
.img-container {
  width: 100%;
  max-height: 286px;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  -webkit-transition: all 0.8s ease;
  -moz-transition: all 0.8s ease;
  transition: all 0.8s ease;
}

.img-container img:hover {
  transform: scale(1.5, 1.5);
}
</style>
