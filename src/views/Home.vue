<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
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
  //background-color: rgba($color: #ffffff, $alpha: 0.1);
  border: 1px solid #fff;
  opacity: 1;
  padding: 5rem;
  margin-top: 5rem;
}
</style>