<template>
  <div id="loading">
    <img class="img" src="../assets/svg/Logo.svg" alt="Loading..." />
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
#loading {
  position: absolute;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100%;
}
.img {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  height: 5rem;
}
</style>
