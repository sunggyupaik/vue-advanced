<template>
  <div>
    <section>
      <div>
        <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>
          <div class="user-description">
            <!-- 라우터 링크 item user 넣기 -->
            <router-link :to="`/user/${fetchedItem.user}`">
              {{ fetchedItem.user }}
            </router-link>
            <div class="time">
            <!-- item time_ago 넣기 -->
            {{ fetchedItem.time_ago }}
          </div>
          </div>
        </div>
      </div>
      <h2>
          <!-- item 제목 넣기 -->
          {{ fetchedItem.title }}
      </h2>
    </section>
    <section>
      <!-- item 내용 넣기 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
  <!-- <div>
    <p>{{ this.$store.state.item.title }}</p>
    <div>
      {{ this.$store.state.item.content }}
    </div>
  </div> -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedItem'
    ]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>