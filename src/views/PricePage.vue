<template>
  <div>
    <div class="flex flex-col items-center h-full w-full bg-black">
      <div class="w-full max-w-[1920px] px-[312px]">
        <Header />
        <Slogan
          slogan-one="用多少，"
          slogan-two="付多少。"
          :is-for-price="true"
        />
        <div class="w-full py-[160px]">
          <div class="section-title text-white mb-20">定價</div>
          <div class="w-full flex items-center justify-between flex-wrap">
            <div
              v-for="(plan, index) in plans"
              :key="index"
              class="w-[49%] mb-5 border border-solid border-[#525252]/80 rounded-2xl py-5"
            >
              <div
                class="w-full min-h-[234px] border-b border-solid border-[#525252]/80 px-8"
              >
                <div class="section-title text-white mb-3">
                  {{ plan.name }}
                </div>
                <div class="flex items-center justify-start">
                  <ul>
                    <li
                      v-for="detail in plan.details"
                      :key="detail.id"
                      class="text-white"
                    >
                      ・{{ detail.description }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pt-5 px-8 flex items-center justify-between">
                <div class="flex items-center justify-content">
                  <div class="font-black text-white text-[20px] leading-[24px]">
                    NT%5
                  </div>
                  <div
                    class="font-normal text-[#919191]/60 text-[20px] leading-[24px]"
                  >
                    ／1k tokens
                  </div>
                </div>
                <div class="flex items-center justify-content">
                  <div class="mr-[14.67px] font-bold text-base text-white">
                    開始使用
                  </div>
                  <div class="w-[10px] h-[10px]">
                    <img src="../assets/RightUp.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full pb-[160px] flex items-start justify-between">
          <div class="section-title text-white">使用規範</div>
          <div>
            <div
              v-for="(rule, index) in userRules"
              :key="index"
              :class="`flex flex-col border-b border-solid border-[#525252]/80 ${
                index !== 0 ? 'pt-10' : ''
              }`"
            >
              <div class="text-white font-black text-[48px] leading-[57.6px]">
                {{ rule.name }}
              </div>
              <div
                v-for="detail in rule.details"
                :key="detail.id"
                class="mt-6 mb-10 text-white font-normal text-[32px] leading-[38.4px]"
              >
                {{ detail.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <div class="w-full max-w-[1920px] px-[312px] pt-[160px]">
        <div class="border-b border-solid border-white pb-[160px]">
          <div class="section-title text-white">常見問題</div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Footer from "@/components/FooterSection.vue";
import Header from "@/components/HeaderSection.vue";
import Cards from "@/components/CardSection.vue";
import Slogan from "@/components/SloganSection.vue";

interface IDetails {
  name: string;
  details: {
    id: number;
    description: string;
  }[];
}

const plans = ref<IDetails[]>([
  {
    name: "琪琪",
    details: [
      {
        id: 0,
        description: "初級",
      },
      {
        id: 1,
        description: "速度最快",
      },
    ],
  },
  {
    name: "昊昊",
    details: [
      {
        id: 2,
        description: "中級",
      },
    ],
  },
  {
    name: "卡卡",
    details: [
      {
        id: 3,
        description: "高級",
      },
    ],
  },
  {
    name: "杰杰",
    details: [
      {
        id: 4,
        description: "最高級",
      },
      {
        id: 5,
        description: "資訊最完善",
      },
    ],
  },
]);

const userRules = ref<IDetails[]>([
  {
    name: "守法",
    details: [
      {
        id: 6,
        description: "請遵守相關的法規和政策，不得進行任何違法違規的活動。",
      },
    ],
  },
  {
    name: "資訊安全",
    details: [
      {
        id: 7,
        description: "請務必保護好自己的帳號和密碼，不得將其透露給他人。",
      },
    ],
  },
  {
    name: "守密",
    details: [
      {
        id: 8,
        description: "需對使用過程中產生的數據負責，不得擅自泄露數據。",
      },
    ],
  },
]);
</script>
