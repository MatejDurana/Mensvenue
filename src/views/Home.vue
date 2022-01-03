<template>
  <div class="home">
    <Uvod />
  </div>
</template>

<script>
import Uvod from "@/components/Home/Uvod.vue";
export default {
  name: "Home",
  components: {
    Uvod,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped lang="scss">
.home {
  height: 200vh;
}
</style>