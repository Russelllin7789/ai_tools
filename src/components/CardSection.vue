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
            v-for="type in aiTypes"
            :class="`rounded-2xl px-4 py-2 font-bold text-base leading-[150%] mr-2 cursor-pointer ${
              category === type
                ? 'bg-[#f2f2f2] text-[#020202]'
                : 'text-[#919191]'
            }`"
            :key="type"
            @click="handleCategoryClicked(type)"
          >
            {{ type }}
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
      <div v-if="cards.length >= 1" class="w-full mt-10">
        <ul class="flex items-center justify-between flex-wrap">
          <li
            v-for="card in cards"
            :key="card.id"
            class="w-full rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6 md:max-w-[49%] md:min-w-[32%]"
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
                <div class="font-bold">{{ card.model }}</div>
                <div>{{ card.discordId }}</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#{{ card.type }}</div>
                <div>
                  <a :href="card.link" target="_blank">
                    <img
                      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                      alt="share-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        v-if="pageObj.total_pages !== -1 && cards.length >= 1"
        class="w-full flex items-center mt-4"
      >
        <ul class="w-full flex items-center justify-end">
          <li
            v-for="n in pageObj.total_pages"
            :key="n"
            :class="`flex items-center justify-center w-[48px] h-[48px] rounded-2xl bg-black text-white ${
              n === 1 ? 'mr-6' : 'mr-1'
            } hover:cursor-pointer`"
          >
            {{ n }}
          </li>
        </ul>
        <div
          v-if="pageObj.has_next"
          class="w-[5px] h-[8px] hover:cursor-pointer mr-4"
        >
          <img src="../assets/RightArrow.png" alt="more-page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { EnumAIType } from "@/enum/EnumAIType";
import { IAIWork, IPage } from "@/interface/IAIWork";
import { useAiWorkStore } from "@/stores/aiWorkStore";

defineProps<{
  cards: IAIWork[];
}>();

const emit = defineEmits<{
  (e: "typeChosen", type: string): void;
}>();

const aiWorkStore = useAiWorkStore();
const category = ref("全部");
const aiTypes = ref<string[]>([
  EnumAIType.ALL,
  EnumAIType.CUSTOMER_SERVICE,
  EnumAIType.LIFE_APPLICATION,
  EnumAIType.MARKETING_COPYWRITING,
  EnumAIType.PROGRAMMING_KNOWLEDGE,
  EnumAIType.QA,
  EnumAIType.TRANSLATION_ASSISTANT,
]);
const pageObj = computed((): IPage => aiWorkStore.page);

const handleCategoryClicked = (type: string) => {
  emit("typeChosen", type);
  category.value = type;
};
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
