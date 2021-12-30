<template>
  <v-navigation-drawer
    app
    v-model="isOpened"
    class="drawer"
    absolute
    right
    temporary
    color="#202020"
    width="100%"
  >
    <v-layout row class="ma-0">
      <v-flex>
        <div v-for="link in this.links" :key="link.id">
          <span>{{ link.id }}</span>
          <span class="text-uppercase">{{ link.text }}</span>
        </div>
      </v-flex>

      <v-flex>
        <v-layout column>
          <v-btn class="text-uppercase">Rezervovať</v-btn>
          <span class="text-uppercase"> Otváracie hodiny </span>
          <v-layout
            class="ma-0"
            row
            justify-space-between
            v-for="day in this.openClock"
            :key="day.id"
          >
            <v-flex>{{ day.id }}</v-flex>
            <v-flex>{{ day.text }}</v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Menu",
  props: {
    isOpened: Boolean,
  },
  data() {
    return {
      links: [
        { id: "01", text: "Domov" },
        { id: "02", text: "O nás" },
        { id: "03", text: "Služby" },
        { id: "04", text: "Feedback" },
        { id: "05", text: "Kontakt" },
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
};
</script>
<style lang="scss" scoped>
.drawer {
  left: -4.5rem !important;
  top: -4rem !important;
  max-width: unset !important;
  width: calc(100% + 9rem) !important;
}
</style>