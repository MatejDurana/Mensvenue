<template>
  <v-app>
    <!-- <div class="main_background"></div> -->
    <!-- <particles-bg
      type="custom"
      :canvas="canvas_options"
      :config="config"
      :bg="true"
    /> -->
    <particles-bg
      type="cobweb"
      color="#2B2B2B"
      num="300"
      :canvas="canvas_options"
      :bg="true"
    />
    <LoadingScreen :isLoading="isLoading"></LoadingScreen>
    <v-main v-if="!isLoading" class="content">
      <Header></Header>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import Header from "@/components/Header.vue";
import { ParticlesBg } from "particles-bg-vue";
export default {
  components: {
    LoadingScreen,
    Header,
    ParticlesBg,
  },
  data() {
    return {
      isLoading: true,
      canvas_options: {
        backgroundColor: "#151515",
        "z-index": "0",
        position: "fixed",
      },
      config: {
        num: [4, 7],
        rps: 0.2,
        radius: [3, 5],
        life: [15, 30],
        v: [9, 10],
        tha: [-30, 30],
        alpha: [0.1, 1],
        scale: [3, 5],
        position: "all",
        cross: "bound",
        random: 5,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
<style lang="scss">
.main_background {
  background: url("~@/assets/svg/main_background.svg");
  position: fixed;
  height: 100vh;
  width: 100%;
}
.content {
  position: absolute;
  width: 100%;
}
</style>