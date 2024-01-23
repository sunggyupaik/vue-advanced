<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])

    //#2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    //#1
    // ask () {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items : center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>