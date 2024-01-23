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

<!-- <template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <div class="points">
          {{ 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} 
            by 
            <!-- <router-link :to="`/user/${job.user}`" class="link-text">{{ job.domain }}</router-link> -->
            <a :href="`${job.url}`">
              {{ job.url }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template> -->