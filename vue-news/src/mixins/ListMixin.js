import bus from '../utils/bus.js';

export default {
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_LIST', this.$route.name)
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // }
  mounted() {
    bus.$emit('end:spinner');
  }
}