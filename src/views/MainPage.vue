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
            <div class="flex justify-between">
              <div class="w-[30%] section-title text-white">我們的服務</div>
              <div class="w-[65%]">
                <div class="font-black text-5xl text-white">
                  我們相信透過 AI 技術，<br />包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
                </div>
              </div>
            </div>
            <div class="flex mt-20 justify-between">
              <div
                class="py-20 px-10 w-[32%] border border-solid border-[#525252]/80 rounded-2xl"
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
                class="py-20 px-10 w-[32%] border border-solid border-[#525252]/80 rounded-2xl"
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
                class="py-20 px-10 w-[32%] border border-solid border-[#525252]/80 rounded-2xl"
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
              <div>
                <img
                  src="../assets/Logo1.png"
                  alt="logo-section-one"
                  class="h-[40px]"
                />
              </div>
              <div class="pt-5 pb-[160px]">
                <img
                  src="../assets/Logo2.png"
                  alt="logo-section-two"
                  class="h-[40px]"
                />
              </div>
            </div>
            <div class="flex justify-between">
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
                <p
                  class="w-full min-h-[215px] my-5 font-normal text-base text-white grow"
                >
                  非常喜歡 AI工具王 提供的 AI
                  模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王
                  提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！
                </p>
                <div class="flex">
                  <div class="w-[48px] h-[48px] rounded-full">
                    <img src="../assets/missChen.png" alt="ms-chen-avatar" />
                  </div>
                  <div class="ml-4 text-white">
                    <div>陳小姐</div>
                    <div>ABC科技有限公司</div>
                  </div>
                </div>
              </div>
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
                <p
                  class="w-full min-h-[215px] my-5 font-normal text-base text-white grow"
                >
                  作為一家醫療器材公司，我們非常關注人工智能技術的應用，而
                  AI工具王 提供的 AI
                  模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王
                  的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝
                  AI工具王 團隊的辛勤工作！
                </p>
                <div class="flex">
                  <div class="w-[48px] h-[48px] rounded-full">
                    <img src="../assets/missLiu.png" alt="ms-liu-avatar" />
                  </div>
                  <div class="ml-4 text-white">
                    <div>劉小姐</div>
                    <div>XYZ 醫療器材有限公司</div>
                  </div>
                </div>
              </div>
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
                <p
                  class="w-full min-h-[215px] my-5 font-normal text-base text-white grow"
                >
                  我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而
                  AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用
                  AI工具王
                  的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝
                  AI工具王 團隊的支持！
                </p>
                <div class="flex">
                  <div class="w-[48px] h-[48px] rounded-full">
                    <img src="../assets/mrHuang.png" alt="mr-huang-avatar" />
                  </div>
                  <div class="ml-4 text-white">
                    <div>黃先生</div>
                    <div>EFG銀行</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <div class="w-full container-wrapper pt-[158px]">
        <div
          class="w-full flex flex-col items-center justify-center border-b border-solid border-white pb-[158px]"
        >
          <div class="font-black text-[48px] leading-[57.6px] text-white mb-10">
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
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/FooterSection.vue";
import Header from "@/components/HeaderSection.vue";
import Cards from "@/components/CardSection.vue";
import Slogan from "@/components/SloganSection.vue";
</script>
