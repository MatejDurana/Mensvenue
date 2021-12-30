<template>
  <v-app>
    <ParticlesJS />
    <LoadingScreen :isLoading="isLoading"></LoadingScreen>
    <v-main v-if="!isLoading" class="content">
      <Header></Header>
      <router-view />

      <!-- <lottie :options="defaultOptions" :height="65" :width="65" /> -->
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
      <div>
        <p>Speed: x{{ animationSpeed }}</p>
        <input
          type="range"
          value="1"
          min="0"
          max="3"
          step="0.5"
          v-on:change="onSpeedChange"
          v-model="animationSpeed"
        />
      </div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="pause">pause</button>
      <button v-on:click="play">play</button>
    </v-main>
  </v-app>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import Header from "@/components/Header.vue";
import ParticlesJS from "@/components/ParticlesJS.vue";
import Lottie from "vue-lottie";
import animationData from "@/assets/394-scroll-down-6-auto-edited.json";

export default {
  components: {
    LoadingScreen,
    Header,
    ParticlesJS,
    Lottie,
  },
  data() {
    return {
      isLoading: true,
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
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