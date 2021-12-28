<template>
  <v-app>
    <ParticlesJS />
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
import ParticlesJS from "@/components/ParticlesJS.vue";

export default {
  components: {
    LoadingScreen,
    Header,
    ParticlesJS,
  },
  data() {
    return {
      isLoading: true,
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