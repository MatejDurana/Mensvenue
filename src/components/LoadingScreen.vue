<template>
  <div id="loading">
      <img src="../assets/svg/Logo.svg"
      :class="[isLoading ? '' : 'active', 'img']"
      alt="Loading..." />
  </div>
</template>
<script>
export default {
  props: {
    isLoading: Boolean,
  }
};
</script>
<style scoped lang="scss">
#loading {
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  text-align: center;
}
.img {
  position: absolute;
  top: 4rem;
  transform: translate(-50%);
  height: 1.7rem;
  &:not(.active){
    top: 50%;
    height: 5rem;
  }
  &.active{
  animation-name: logo_animation;
  animation-duration: 1s;
  transform: translate(-50%);
  }
}
@keyframes logo_animation {
  0% {
    top: 50%;
    height: 5rem;
  }
  100% {
    top: 4rem;
    height: 1.7rem;
  }
} 
</style>
