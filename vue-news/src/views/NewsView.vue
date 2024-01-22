<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.id">{{ user.title }}</div>
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