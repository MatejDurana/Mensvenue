<template>
  <div id="header_div">
    <div id="nav">  
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
    <transition name="socialsT">
      <div v-if="this.isLoaded" class="socials">
            <a href="http://">FB</a>
            <a href="http://">IG</a>
       </div>
    </transition>
      
      <div class="logo">
      </div>
      <div class="menu hidden-xs-only">
          MENU=
      </div>
    </div>
</div>
  
</template>
<script>
export default {
  name: "Header",
  props:{
    isLoaded: Boolean
  },
  data() {
    return {
      jano : true
    }
  },
  created() {
    console.log(this.isLoaded);
  },
};
</script>

<style scoped lang="scss">

.socialsT-enter-active {
  animation: bounce-in 5s;
}
.socialsT-leave-active {
  animation: bounce-in 5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

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
    }
}
</style>
