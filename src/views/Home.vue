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
  margin: auto;
  width: 80%;
  height: 150vh;
  border: 1px solid #fff;
  opacity: 1;
  padding: 5rem;
  margin-top: 5rem;
}
</style>