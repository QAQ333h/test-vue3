<template>
  <div class="bg-[#F4F4F4] pb-[24vw]">
    <!-- 头部+轮播图 -->
    <div
      class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2"
    >
      <!-- 头部 -->
      <div
        class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center"
      >
        <Icon icon="ic:round-menu" style="color: #3a455b" />
        <div class="relative">
          <van-search
            v-model="searchValue"
            placeholder="Love Is Gone (Acoustic)"
          />
          <Icon icon="mdi:line-scan" style="color: #8189a1" />
        </div>
        <Icon icon="icon-park-twotone:voice" style="color: #3a455b" />
      </div>
      <!-- 轮播图 -->
      <div
        class="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto"
      >
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="item in homepageData?.[0]?.extInfo?.banners"
            :key="item.bannerId"
          >
            <van-image
              width="100vw"
              height="140px"
              fit="cover"
              :src="item.pic"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { getHomePageData, getDragonball } from "../service";
import BetterScroll from "../components/BetterScroll.vue";
export default {
  // 组件注册
  components: { BetterScroll },
  setup() {
    const homepageData = ref({}); // 首页数据
    const homepageDragonball = ref([]); // 首页菜单图标
    const searchValue = ref(""); // 搜索
    (async () => {
      // 如何集中捕获请求错误？
      try {
        homepageData.value = (await getHomePageData()).data.data.blocks;
        homepageDragonball.value = (await getDragonball()).data.data;
      } catch (error) {
        console.log(error);
      }
    })();
    return { homepageData, searchValue };
  },
};
</script>
