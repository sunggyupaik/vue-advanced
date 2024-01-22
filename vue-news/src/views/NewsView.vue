<template>
  <div>
    <p v-for="news in this.$store.state.news" :key="news.id">
      <a :href="news.url">{{ news.title }}</a><br>
      <small>{{ news.time_ago }} by 
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //   .then(response => {
    //     this.users = response.data;
    //     console.log(this.users);
    //   })
    //   .catch(error => console.log(error));
  }
}
</script>

<style>

</style>