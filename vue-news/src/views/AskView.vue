<template>
  <div>
    <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
      .then(response => {
        this.ask = response.data;
        console.log(this.ask);
      })
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>