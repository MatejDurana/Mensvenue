<template>
  <div id="nav">
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
    <div class="socials">
        <a href="http://">FB</a>
        <a href="http://">IG</a>
    </div>
    <div class="logo">
        <img class="img" src="../assets/svg/Logo.svg" alt="Loading..." />
    </div>
    <div class="menu" v-if="$vuetify.breakpoint.smAndUp">
        MENU=
    </div>
  </div>
</template>
<script>

export default {};
</script>
<style scoped lang="scss">
#nav{
    display: flex;
    justify-content: space-between;
    margin: 0 4.5rem;
    margin-top: 4rem;
    height: 1.7rem;
    align-items: center;
    .socials{
        display: flex;
        a:first-child{
            margin-right: 3rem;   
        }
    }
    .logo{
        height: 100%;
        .img{
            transition: all 10s ease logo_animation;
            height: 100%;
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
@keyframes logo_animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
