<template>
  <div class="container">
    <titleslider class="slide" />
    <div class="card">
      <div class="card-image">
        <figure class="image"></figure>
        <b-image v-bind:src="image" alt="A random image" ratio="5by4"></b-image>
      </div>
      <div class="card-content">
        <div class="content has-text-centered">
          <!-- Button -->
          <b-button type="is-primary" @click="getImage()" expanded
            >Shuffle</b-button
          >
          <hr />
          {{ message }}
          <hr />
          <time datetime="2016-1-1">{{ date }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleslider from "./titleslider.vue";
export default {
  data() {
    return {
      image: null,
      message: "info about image",
      date: "date of image",
    };
  },
  components: {
    titleslider,
  },
  methods: {
    getImage() {
      this.image = `https://picsum.photos/200/300?random=${Math.random()}`;
    },
  },
};
</script>

<style>
.card {
  margin: 0 auto;
  width: 60%;
}
.card-image {
  max-width: 100%;
}
</style>