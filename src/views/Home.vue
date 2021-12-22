<template>
  <div class="home">
    <div class="rand">

      <div id="demo">
        <v-btn v-on:click="show = !show">
          Toggle
        </v-btn>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
      return {
        show: true
      };  
  },
};
</script>
<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}


.rand{
  margin: auto;
  width: 80%;
  height: 150vh;
  background-color: rgba($color: #FFFFFF, $alpha: .1);
  opacity: 1;
  padding: 5rem;
}
</style>