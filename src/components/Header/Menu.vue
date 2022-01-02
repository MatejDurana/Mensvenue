<template>
  <transition
    name="drawerT"
    v-on:before-enter="beforeEnter"
    v-on:before-leave="beforeLeave"
    v-on:after-enter="afterEnter"
    v-on:after-leave="afterLeave"
  >
    <div v-if="isOpened" class="drawer">
      <v-row class="ma-0">
        <v-col class="left pa-0">
          <transition-group
            v-if="afterIsOpened"
            appear
            name="leftT"
            class="obal"
            tag="div"
          >
            <v-row
              align="center"
              v-for="link in this.links"
              :key="link.id"
              :style="{ '--i': link.id }"
            >
              <span class="linkId">0{{ link.id }}</span>
              <span class="text-uppercase linkText">{{ link.text }}</span>
            </v-row>
          </transition-group>
        </v-col>

        <transition name="horizontalT">
          <div class="horizontalSpacer" v-if="afterIsOpened"></div>
        </transition>

        <v-col class="right pa-0">
          <v-layout column align-center>
            <transition name="rightT">
              <v-btn
                v-if="afterIsOpened"
                dark
                depressed
                class="text-uppercase rezerveBtn transparent"
                height="4.5rem"
                width="16.75rem"
                >Rezervovať</v-btn
              >
            </transition>
            <transition name="rightT2">
              <div class="pa-0" v-if="afterIsOpened">
                <div class="text-uppercase otvHod">Otváracie hodiny</div>
                <v-row
                  class="mt-0 mx-auto pa-0 daysDiv"
                  justify-space-between
                  v-for="day in this.openClock"
                  :key="day.id"
                >
                  <v-col class="pa-0">{{ day.id }}</v-col>
                  <v-col class="pa-0">{{ day.text }}</v-col>
                </v-row>
              </div>
            </transition>
          </v-layout>
        </v-col>
      </v-row>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Menu",
  props: {
    isOpened: Boolean,
  },
  data() {
    return {
      afterIsOpened: false,
      isAnimating: false,
      links: [
        { id: "1", text: "Domov" },
        { id: "2", text: "O nás" },
        { id: "3", text: "Služby" },
        { id: "4", text: "Feedback" },
        { id: "5", text: "Kontakt" },
      ],
      openClock: [
        { id: "Pondelok", text: "8:00 - 17:00" },
        { id: "Utorok", text: "8:00 - 17:00" },
        { id: "Streda", text: "8:00 - 17:00" },
        { id: "Štvrtok", text: "8:00 - 17:00" },
        { id: "Piatok", text: "8:00 - 17:00" },
        { id: "Sobota", text: "Zatvorené" },
        { id: "Nedeľa", text: "Zatvorené" },
      ],
    };
  },
  methods: {
    beforeEnter() {
      this.isAnimating = true;
      this.$emit("animating", this.isAnimating);
    },
    beforeLeave() {
      this.isAnimating = true;
      this.$emit("animating", this.isAnimating);
    },
    afterEnter() {
      this.afterIsOpened = !this.afterIsOpened;
      this.isAnimating = false;
      this.$emit("animating", this.isAnimating);
    },
    afterLeave() {
      this.afterIsOpened = !this.afterIsOpened;
      this.isAnimating = false;
      this.$emit("animating", this.isAnimating);
    },
  },
};
</script>
<style lang="scss" scoped>
//ANIMACIE
//cele menu
.drawerT-enter {
  transform: translateY(-100vh);
}
.drawerT-leave-to {
  transform: translateY(-100vh);
}
.drawerT-enter-active,
.drawerT-leave-active {
  transition: all 0.3s linear;
}
//left
.leftT-enter {
  transform: translateX(-3rem);
  opacity: 0;
}
.leftT-enter-active {
  transition: all 0.2s linear;
  transition-delay: calc(0.2s * 0.5 * var(--i));
}
//stred
.horizontalT-enter {
  top: -100%;
}
.horizontalT-enter-to {
  top: 0;
}
.horizontalT-leave-to {
  top: -100%;
}
.horizontalT-enter-active,
.horizontalT-leave-active {
  transition: all 0.7s ease-in-out;
}
//right
.rightT-enter,
.rightT2-enter {
  transform: translateX(3rem);
  opacity: 0;
}
.rightT-enter-active,
.rightT2-enter-active {
  transition: all 0.4s linear;
}
.rightT2-enter-active {
  transition-delay: 0.3s;
}
//ANIMACIE
.drawer {
  position: fixed;
  left: -4.5rem !important;
  top: -4rem !important;
  max-width: unset !important;
  width: calc(100% + 9rem) !important;
  background-color: #202020;
  height: 100vh;
}
.horizontalSpacer {
  background-color: #7c7c7c;
  width: 1px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.left {
  .obal {
    margin-left: 11.25rem;
    margin-top: 11.25rem;
    & > div {
      margin-bottom: 3.75rem;
      margin-top: 0;
    }
  }
  .linkId {
    font-size: 0.875rem;
    font-family: Raleway;
    margin-right: 2rem;
  }
  .linkText {
    font-size: 3.75rem;
    font-family: Gruppo;
    line-height: 3.75rem;
    letter-spacing: 0.375rem;
  }
}
.right {
  margin-top: 15.81rem;
  .rezerveBtn {
    border: 3px #fff solid !important;
    border-radius: 0;
    font-family: Raleway;
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: 0.125rem;
    margin-bottom: 4.25rem;
  }
  .otvHod {
    font-size: 1.375rem;
    letter-spacing: 0.2rem;
    margin-bottom: 2.375rem;
  }
  .daysDiv {
    width: 263px;
    line-height: 1.2rem;
    margin-bottom: 1.44rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-family: Raleway;
    & > div:nth-child(2) {
      text-align: right;
      font-weight: 600;
    }
  }
}
</style>