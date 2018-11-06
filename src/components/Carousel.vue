<template>
  <div class="carousel" >
    <carousel :pullDrag="true" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}">
      <div class="thumbnail" v-for="photo in photos">
        <img class="thumbnail__image" v-bind:src="require(`../assets/${photo.imgUrl}`)" :alt="`${photo.alt}`"/>
        <div class="thumbnail__description">{{ photo.description }}</div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import json from '../api/photos.json';

export default {
  components: { carousel },
  name: 'Carousel',
  data() {
    return {
      photos: json.photos,
    };
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  &__description {
    width: 50%;
    text-align: left;
  }
}
</style>
