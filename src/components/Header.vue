<template>
  <div id="header_div">
    <div id="nav">
      <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
      <transition name="socialsT">
        <div
          v-if="this.isLoaded"
          class="socials hidden-xs-only"
        >
          <a href="http://" class="text-decoration-none"
            ><caption>
              FB
            </caption></a
          >
          <a href="http://" class="text-decoration-none"
            ><caption>
              IG
            </caption></a
          >
        </div>
      </transition>

      <div class="logo"></div>

      <transition name="menuT">
        <div
          v-if="this.isLoaded"
          class="menu d-flex align-content-center"
          style="transition-delay: .5s"
        >
          <caption class="text-uppercase hidden-sm-and-down">
            Menu
          </caption>
          <img src="../assets/svg/Hamburger.svg" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.isLoaded = true;
  },
};
</script>

<style scoped lang="scss">
.menuT-enter {
  transform: translateX(40rem);
}
.socialsT-enter {
  transform: translateX(-40rem);
}
.menuT-enter-active,
.socialsT-enter-active {
  transition: transform 1s ease-in-out;
}

$header-height: 1.7rem;
#header_div {
  position: relative;
}
#nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 4.5rem;
  margin-top: 4rem;
  height: $header-height;
  align-items: center;
  .socials {
    position: relative;
    display: flex;
    a:first-child {
      margin-right: 3rem;
    }
    caption {
      font-size: 1.25rem;
    }
  }
  .logo {
    position: relative;
  }
  .menu {
    position: relative;
    caption {
      font-size: 1rem;
      margin-right: 3rem;
    }
    img {
      max-width: 3rem;
    }
  }
}
</style>
