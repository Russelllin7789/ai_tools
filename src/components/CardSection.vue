<template>
  <div class="w-full bg-white rounded-[160px] pb-[160px] flex justify-center">
    <div class="flex flex-col items-center justify-center container-wrapper">
      <div
        class="font-black text-black text-[80px] leading-[96px] mt-[160px] mb-[80px]"
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
            class="w-[32%] rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true"
                  alt="chatbot-builder"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  Chatbot Builder
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div class="font-bold">AI 模型</div>
                <div>卡卡</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#聊天</div>
                <div>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share-icon"
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="w-[32%] rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true"
                  alt="image-recognition-platform"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  Image Recognition Platform
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  專業的圖像識別平台，識別圖像、分類、標記等。
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div class="font-bold">AI 模型</div>
                <div>杰杰</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#影像辨識</div>
                <div>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share-icon"
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="w-[32%] rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true"
                  alt="language-translation-API"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  Language Translation API
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div class="font-bold">AI 模型</div>
                <div>琪琪</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#翻譯</div>
                <div>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share-icon"
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="w-[32%] rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true"
                  alt="sentiment-analysis-API"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  Sentiment Analysis API
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div class="font-bold">AI 模型</div>
                <div>昊昊</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#行銷</div>
                <div>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share-icon"
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="w-[32%] rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true"
                  alt="fraud-detection-platform"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  Fraud Detection Platform
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  預防詐騙活動，適用於銀行、金融、電商等。
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div>AI 模型</div>
                <div>卡卡</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#客服</div>
                <div>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                    alt="share-icon"
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="w-[32%] rounded-2xl border border-solid border-[#f2f2f2] overflow-hidden mb-6"
          >
            <div class="flex flex-col h-[560px]">
              <div class="h-[280px] img-container">
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true"
                  alt="voice-assistant-SDK"
                  class="object-cover h-full"
                />
              </div>
              <div
                class="py-5 px-8 grow border-b border-solid border-[#f2f2f2] max-h-[145px] overflow-y-auto"
              >
                <div class="font-black text-xl mb-3 leading-[120%] text-black">
                  Voice Assistant SDK
                </div>
                <div class="font-normal text-sm leading-[150%] text-[#525252]">
                  通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。
                </div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 border-b border-solid border-[#f2f2f2] text-base text-black"
              >
                <div>AI 模型</div>
                <div>杰杰</div>
              </div>
              <div
                class="flex items-center justify-between py-5 px-8 font-normal text-base text-black"
              >
                <div>#生產力</div>
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
