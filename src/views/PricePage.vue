<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else class="flex flex-col items-center h-full w-full bg-black">
      <div
        class="w-full flex flex-col items-center justify-center container-wrapper"
      >
        <Header />
        <Slogan
          slogan-one="用多少，"
          slogan-two="付多少。"
          :is-for-price="true"
        />
        <div class="w-full py-[160px]">
          <div
            class="text-white font-black mb-8 text-[20px] leading-[24px] md:text-[32px] md:leading-[38.4px] md:mb-20"
          >
            定價
          </div>
          <div class="w-full flex items-center justify-between flex-wrap">
            <div
              v-for="(plan, index) in plans"
              :key="index"
              class="w-full mb-5 border border-solid border-[#525252]/80 rounded-2xl py-5 hover:cursor-pointer hover:border-white md:w-[49%]"
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
                    NT$5
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
        <div
          class="w-full pb-[160px] flex flex-col items-start justify-between md:flex-row"
        >
          <div
            class="text-white mb-12 font-black text-[20px] leading-[24px] md:text-[32px] md:leading-[38.4px] md:mb-0"
          >
            使用規範
          </div>
          <div class="w-full md:w-[832px]">
            <div
              v-for="(rule, index) in userRules"
              :key="index"
              :class="`flex flex-col border-b border-solid border-[#525252]/80 ${
                index !== 0 ? 'pt-10' : ''
              }`"
            >
              <div
                class="text-white font-black text-[32px] leading-[38.4px] md:text-[48px] md:leading-[57.6px]"
              >
                {{ rule.name }}
              </div>
              <div
                v-for="detail in rule.details"
                :key="detail.id"
                class="mt-6 mb-10 text-white font-normal text-base md:text-[32px] md:leading-[38.4px]"
              >
                {{ detail.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards :cards="aiCards" />
      <div class="w-full container-wrapper pt-[160px]">
        <div
          class="w-full flex flex-col items-start justify-between border-b border-solid border-white pb-[160px] md:flex-row"
        >
          <div
            class="text-white font-black text-[20px] mb-8 leading-[24px] md:text-[32px] md:leading-[38.4px] md:mb-0"
          >
            常見問題
          </div>
          <div :class="`${isMobile ? 'w-full' : ''}`">
            <QARow
              v-for="(qa, index) in qaPairs"
              :key="qa.id"
              :question-and-answer="qa"
              :class="index !== 0 ? 'mt-[15px]' : ''"
            />
          </div>
        </div>
      </div>
      <Footer :is-mobile="isMobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";

import Footer from "@/components/FooterSection.vue";
import Header from "@/components/HeaderSection.vue";
import Cards from "@/components/CardSection.vue";
import Slogan from "@/components/SloganSection.vue";
import QARow from "@/components/QARow.vue";
import Loading from "@/components/LoadingComponent.vue";

import { useAiWorkStore } from "@/stores/aiWorkStore";
import { IQA } from "@/interface/IQA";
import { IAIWork } from "@/interface/IAIWork";

interface IDetails {
  name: string;
  details: {
    id: number;
    description: string;
  }[];
}

const aiWorkStore = useAiWorkStore();
const aiCards = computed((): IAIWork[] => aiWorkStore.aiDetails);
const isLoading = computed((): boolean => aiWorkStore.isLoading);
const windowWidth = ref(window.innerWidth);
const isMobile = ref(false);

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

const qaPairs = ref<IQA[]>([
  {
    id: "first",
    question: "如何選擇適合的AI模型？",
    answer:
      "選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以透過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價和反饋，來選擇最適合的模型。",
  },
  {
    id: "second",
    question: "租用模型的費用是如何計算的？",
    answer:
      "租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動計算出對應的租用費用。",
  },
  {
    id: "third",
    question: "如何進行付款？",
    answer:
      "付款方式可以透過網站上提供的線上支付平台進行。具體而言，您可以選擇使用信用卡、銀行轉帳、電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付，完成支付後，系統會自動向您提供相應的服務。",
  },
  {
    id: "forth",
    question: "租用模型的期限是多久？",
    answer:
      "租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。",
  },
  {
    id: "fifth",
    question: "如果在使用過程中遇到問題，應該怎麼處理？",
    answer:
      "如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以透過網站上的幫助中心或社群論壇尋找相關解決方案和回答。",
  },
]);

const onResize = () => {
  windowWidth.value = window.innerWidth;
};

watch(
  () => windowWidth.value,
  (val) => {
    if (val < 768) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  },
  { immediate: true }
);

onMounted(async () => {
  aiWorkStore.fetchAiDetails();
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>
