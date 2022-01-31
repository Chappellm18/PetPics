<template>
  <div class="post-image">
    <div class="card">
      <div class="card-background"></div>
      <div class="card-content">
        <form @submit.prevent="submit()">
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="image"
                placeholder="Image input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="message"
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createImage } from "../services/images.js";
export default {
  data() {
    return {
      image: null,
      message: null,
    };
  },
  methods: {
    submit() {
      // submit the form
      createImage(this.image, this.message);
      // send the data to the server
      // and then clear the form
      this.image = null;
      this.message = null;
    },
  },
};
</script>

<style scoped>
</style>