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
        <div class="w-full">Hello!!!</div>
      </div>
      <Cards />
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
