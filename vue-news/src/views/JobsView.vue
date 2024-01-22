<template>
  <div>
    <div>
    <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a><br>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
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