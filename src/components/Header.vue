<template>
  <nav>
    <v-toolbar flat class="transparent myToolbar" height="inherit">
      <v-toolbar-items>
        <transition name="socialsT">
          <v-layout
            row
            v-if="this.isLoaded"
            class="socials hidden-xs-only align-center"
          >
            <v-flex>
              <a href="http://" class="text-decoration-none"
                ><caption>
                  FB
                </caption>
              </a>
            </v-flex>

            <v-flex>
              <a href="http://" class="text-decoration-none">
                <caption>
                  IG
                </caption>
              </a>
            </v-flex>
          </v-layout>
        </transition>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <transition name="menuT">
          <v-layout
            row
            v-if="this.isLoaded"
            class="menu hidden-xs-only align-center"
          >
            <caption class="text-uppercase hidden-sm-and-down">
              Menu
            </caption>
            <img src="../assets/svg/Hamburger.svg" @click="toggleMenu()" />
          </v-layout>
        </transition>
      </v-toolbar-items>
    </v-toolbar>
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
    <Menu :isOpened="isOpened" />
  </nav>
</template>

<script>
import Menu from "@/components/Header/Menu.vue";
export default {
  name: "Header",
  components: {
    Menu,
  },
  data() {
    return {
      isLoaded: false,
      isOpened: false,
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  methods: {
    toggleMenu() {
      this.isOpened = !this.isOpened;
    },
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
nav {
  background-color: transparent;
  height: $header-height;
  .myToolbar {
    margin: 0 4.5rem;
    margin-top: 4rem;
  }
  .socials {
    a:first-child {
      margin-right: 3rem;
    }
    caption {
      font-size: 1.25rem;
    }
  }
  .menu {
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
