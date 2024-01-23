<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  }
}
</script>

<style>
</style>


  <!-- <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <router-link v-bind:to="`item/${item.id}`">
            {{ item.title }}
          </router-link>
          <div>
            <small class="link-text">
              {{ item.time_ago }} 
              by 
              <router-link :to="`/item/${item.id}`" class="link-text">{{ item.user }}</router-link>
            </small>
          </div>
        </div>
      </li>
    </ul>
  </div> -->