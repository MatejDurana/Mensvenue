<template>
  <v-app>
    <div class="main_background"></div>
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
export default {
  components: {
    LoadingScreen,
    Header,
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