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
            <caption
              :class="[
                'text-uppercase hidden-sm-and-down noselect',
                this.isAnimating ? 'disabled' : '',
              ]"
              @click="toggleMenu()"
            >
              {{
                this.menuText
              }}
            </caption>
            <Hamburger
              :isOpened="isOpened"
              @click.native="toggleMenu()"
              :class="[this.isAnimating ? 'disabled' : '']"
            />
            <Menu
              :isOpened="isOpened"
              :isAnimating="isAnimating"
              @animating="animatingFunc"
            />
          </v-layout>
        </transition>
      </v-toolbar-items>
    </v-toolbar>
    <!--<router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>-->
  </nav>
</template>

<script>
import Menu from "@/components/Header/Menu.vue";
import Hamburger from "@/components/Header/Hamburger.vue";
export default {
  name: "Header",
  components: {
    Menu,
    Hamburger,
  },
  data() {
    return {
      isAnimating: false,
      isLoaded: false,
      isOpened: false,
      menuText: "Menu",
    };
  },
  mounted() {
    this.isLoaded = true;
  },
  methods: {
    toggleMenu() {
      this.isOpened = !this.isOpened;
      this.isOpened ? (this.menuText = "Zavrieť") : (this.menuText = "Menu");
      document.body.classList.toggle("stop-scrolling");
    },
    animatingFunc(value) {
      this.isAnimating = value;
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
      outline: none;
      z-index: 10;
      cursor: pointer;
      font-size: 1rem;
      margin-right: 3rem;
    }
    img {
      outline: none;
      cursor: pointer;
      z-index: 10;
      max-width: 3rem;
    }
  }
}
</style>
