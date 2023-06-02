<template>
  <div>
    <div class="flex flex-col items-center h-full w-full bg-black">
      <div class="w-full container-wrapper">
        <Header />
        <div class="w-full">
          <Slogan
            slogan-one="透過"
            slogan-two="AI工具王的"
            slogan-three="強大模型"
            slogan-four="讓您的業務更聰明"
            :is-for-price="false"
          />
          <div class="w-full py-[160px]">
            <div class="flex flex-col md:flex-row md:justify-between">
              <div
                class="w-full text-[20px] leading-[24px] mb-6 md:mb-0 md:w-[30%] md:text-[32px] md:leading-[38.4px] text-white"
              >
                我們的服務
              </div>
              <div class="w-full md:w-[65%]">
                <div class="font-black section-title md:text-5xl text-white">
                  我們相信透過 AI 技術，<br />包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
                </div>
              </div>
            </div>
            <div
              class="flex mt-12 flex-col md:flex-row md:justify-between md:mt-20"
            >
              <div
                class="py-20 px-10 mb-3 w-full border border-solid border-[#525252]/80 rounded-2xl md:w-[32%] md:mb-0"
              >
                <div class="w-[80px] h-[80px] px-5">
                  <img src="../assets/Vector.png" alt="rapid" />
                </div>
                <div class="section-title my-5 text-white">快速</div>
                <div class="text-base text-[#f2f2f2]">
                  我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。
                </div>
              </div>
              <div
                class="py-20 px-10 mb-3 w-full border border-solid border-[#525252]/80 rounded-2xl md:w-[32%] md:mb-0"
              >
                <div class="w-[80px] h-[80px] px-1">
                  <img src="../assets/Vector_1.png" alt="agile" />
                </div>
                <div class="section-title my-5 text-white">靈活</div>
                <div class="text-base text-[#f2f2f2]">
                  我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。
                </div>
              </div>
              <div
                class="py-20 px-10 w-full border border-solid border-[#525252]/80 rounded-2xl md:w-[32%]"
              >
                <div class="w-[80px] h-[80px] px-1">
                  <img src="../assets/Vector_2.png" alt="extendable" />
                </div>
                <div class="section-title my-5 text-white">擴充</div>
                <div class="text-base text-[#f2f2f2]">
                  我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。
                </div>
              </div>
            </div>
          </div>
          <div class="pb-[160px]">
            <div class="section-title text-white">來自合作夥伴</div>
            <div class="mt-20">
              <div class="w-full overflow-hidden">
                <img
                  src="../assets/Logo1.png"
                  alt="logo-section-one"
                  class="h-[40px] w-full object-cover"
                />
              </div>
              <div class="pt-5 pb-[160px] w-full overflow-hidden relative">
                <img
                  src="../assets/Logo2.png"
                  alt="logo-section-two"
                  class="h-[40px] w-full object-cover"
                />
              </div>
            </div>
            <div v-if="!isMobile" class="flex">
              <div class="flex justify-between">
                <Testimonial
                  v-for="testimonial in testimonials"
                  :key="testimonial.name"
                  :testimonial="testimonial"
                />
              </div>
            </div>
            <div v-else>
              <Swiper
                class="flex"
                navigation
                :modules="modules"
                :slides-per-view="1"
                :space-between="20"
                :pagination="{ clickable: true }"
              >
                <SwiperSlide
                  v-for="testimonial in testimonials"
                  :key="testimonial.name"
                  class="pb-10"
                >
                  <Testimonial :testimonial="testimonial" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Cards :cards="aiCards" />
      <div class="w-full container-wrapper pt-[158px]">
        <div
          class="w-full flex flex-col items-center justify-center border-b border-solid border-white pb-[158px]"
        >
          <div
            class="font-black px-[75px] text-[32px] leading-[38.4px] text-white mb-10 md:text-[48px] md:leading-[57.6px] md:px-0"
          >
            現在就來建立屬於你的服務吧
          </div>
          <button
            class="flex items-center justify-center bg-black border border-solid border-white rounded-2xl py-5 px-10"
          >
            <div class="text-white font-black text-[20px] leading-[24px] mr-4">
              開始使用
            </div>
            <div class="w-[15px] h-[15px]">
              <img src="../assets/RightUp.png" alt="start-to-use-icon" />
            </div>
          </button>
        </div>
      </div>
      <Footer :is-mobile="isMobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "@/components/FooterSection.vue";
import Header from "@/components/HeaderSection.vue";
import Cards from "@/components/CardSection.vue";
import Slogan from "@/components/SloganSection.vue";
import Testimonial from "@/components/TestimonialSection.vue";

import { useAiWorkStore } from "@/stores/aiWorkStore";
import { IAIWork } from "@/interface/IAIWork";
import { ITestimonial } from "@/interface/ITestimonial";

const aiWorkStore = useAiWorkStore();
const windowWidth = ref(window.innerWidth);
const isMobile = ref(false);
const aiCards = computed((): IAIWork[] => aiWorkStore.aiDetails);
const testimonials: ITestimonial[] = [
  {
    stars: 5,
    comment:
      "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王提供的 AI 模型能夠幫助節省大量時間和成本，實在是太棒了！",
    avatarUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar3.png?raw=true",
    name: "陳小姐",
    company: "ABC 科技有限公司",
  },
  {
    stars: 5,
    comment:
      "作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！",
    avatarUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar1.png?raw=true",
    name: "劉小姐",
    company: "XYZ 醫療器材有限公司",
  },
  {
    stars: 5,
    comment:
      "我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！",
    avatarUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar2.png?raw=true",
    name: "黃先生",
    company: "EFG 銀行",
  },
];

const modules = [Pagination, Navigation];

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
