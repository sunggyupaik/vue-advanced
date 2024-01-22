<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(response => {
    //     this.ask = response.data;
    //     console.log(this.ask);
    //   })
    //   .catch(error => console.log(error));
  }
}
</script>

<style>

</style>