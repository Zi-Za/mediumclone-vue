<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" v-if="isLoggedIn">
        <RouterLink
            :to="{name: 'yourFeed'}" 
            class="nav-link"
            :class="{active: routeName === 'yourFeed'}"
        >
          Your feed
        </RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink
            :to="{name: 'globalFeed'}" 
            class="nav-link"
            :class="{active: routeName === 'globalFeed'}"
        >
          Global feed
        </RouterLink>
      </li>

      <li class="nav-item" v-if="tagName">
        <RouterLink
            :to="{name: 'tag'}" 
            class="nav-link"
            :class="{active: routeName === 'tag'}"
        >
          <i class="ion-pound"></i>
          {{ tagName }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { getterTypes } from '@/store/modules/auth';
import { mapGetters } from 'vuex'

export default {
  name: 'McvFeedToggler',
  props: {
    tagName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn
    }),
    routeName() {
      return this.$route.name
    }
  }
}
</script>