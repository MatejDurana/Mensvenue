<template>
  <div id="header_div">
    <div id="nav">  
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
      <div class="socials">
          <a href="http://">FB</a>
          <a href="http://">IG</a>
      </div>
      <div class="logo">
      </div>
      <div class="menu" v-if="$vuetify.breakpoint.smAndUp">
          MENU=
      </div>
    </div>
    <div id="header_loading">
      <img class="img" src="../assets/svg/Logo.svg" alt="Logo" />
    </div>
</div>
  
</template>
<script>

export default {
};
</script>
<style scoped lang="scss">
$header-height: 1.7rem;
#header_div{
  position: relative;
}
#nav{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 4.5rem;
    padding-top: 4rem;
    height: $header-height;
    align-items: center;
    .socials{
        position: relative;
        flex-grow: 1;
        display: flex;
        animation-name: socials_animation;
        animation-duration: 0.9s;
        a:first-child{
            margin-right: 3rem;   
        }
    }
    .logo{
        flex-grow: 3;
        position: relative;
        height: auto;
    }
    .menu{
      position: relative;
      flex-grow: 1;
      float: right;
      text-align: right;
      animation-name: menu_animation;
      animation-duration: 0.9s;
    }
}

#header_loading {
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100%;
  .img {
    position: absolute;
    top: 5%;
    height: $header-height;
    animation-name: logo_animation;
    animation-duration: 0.9s;
    transform: translate(-50%);
  }
}
@keyframes logo_animation {
  0% {
    top: 50%;
    height: 5rem;
  }
  100% {
    top: 5%;
    height: $header-height;
  }
}
@keyframes socials_animation {
  0% {
   left: -20rem;
  }
  100% {
   left: unset;
  }
}
@keyframes menu_animation {
  0% {
    right: -20rem;
  }
  100% {
    right: unset;
  }
}

</style>
