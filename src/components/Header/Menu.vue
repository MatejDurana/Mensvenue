<template>
  <v-navigation-drawer
    app
    v-model="isOpened"
    class="drawer"
    absolute
    temporary
    color="#202020"
    width="100%"
  >
    <p>test</p>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Menu",
  props: {
    isOpened: Boolean,
  },
};
</script>
<style lang="scss" scoped>
</style>