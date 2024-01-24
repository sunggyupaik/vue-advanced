<template>
    <div class="user-container">
      <div>
        <i class="fas fa-user-circle"></i>
      </div>
      <div class="user-description">
          <div>{{ userInfo.id }}</div>
          <div class="time">{{ userInfo.created }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
        userInfo() {
          return this.$store.state.user;
        }
    },
  }
  </script>
  
  <style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
  color: #828282;
}
</style>
