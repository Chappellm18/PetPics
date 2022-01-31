<template>
  <homepage class="homepage" />
</template>

<script>
import homepage from "./components/homepage.vue";

export default {
  name: "App",
  components: {
    homepage,
  },
};
</script>

<style>
body,
html {
  height: 100%;
  width: 100%;
  background: linear-gradient(#eebfbf, #babef0);
}
.homepage {
  margin-top: 100px;
  overflow: hidden;
}
</style>
