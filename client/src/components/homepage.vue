<template>
  <div class="container">
    <titleSg class="slide" />
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <b-image
            v-bind:src="image"
            v-bind:alt="message"
            ratio="5by4"
          ></b-image>
        </figure>
      </div>
      <div class="card-content">
        <div class="content has-text-centered">
          <!-- Button -->
          <b-button type="is-primary" @click="getEntry()" expanded
            >Shuffle</b-button
          >
          <hr />
          {{ message }}
          <hr />
          <time datetime="2016-1-1">{{ date }}</time>
        </div>
      </div>
    </div>
    <!-- When adding new images to db set posting to true and form will show up -->
    <div v-if="posting"><post style="margin-top: 25px" /></div>
    <div v-else></div>
  </div>
</template>

<script>
import post from "./post.vue";
import titleSg from "./title.vue";
import { getImageById } from "../services/images.js";
export default {
  data() {
    return {
      image: "https://i.lensdump.com/i/r7mv5o.jpg?open=true",
      message: "Welcome to Sagie's fan club!",
      date: new Date().toLocaleString(),
      posting: false,
    };
  },
  components: {
    titleSg,
    post,
  },
  methods: {
    async getEntry() {
      // gets a entry from the database
      const response = await getImageById();
      // sets the data
      //console.log(response);
      this.image = response[0].image;
      this.message = response[0].message;
      this.date = response[0].date;
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