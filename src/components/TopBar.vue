<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{path: 'home'}">
        MediumClone
      </RouterLink>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <RouterLink
            class="nav-link" 
            :to="{path: 'home'}" 
            exact
            active-class="active"
          >
            Home
          </RouterLink>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :to="{path: 'createArticle'}" 
              active-class="active"
            >
              <i class="ion-compose"></i> &nbsp; New Article
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :to="{path: 'settings'}" 
              active-class="active"
            >
              <i class="ion-gear-a"></i> &nbsp; Settings
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :to="{path: 'userProfile', params: {slug: currentUser.username}}"
            >
              <img class="user-pic" :src="currentUser.image" />
              &nbsp;
              {{ currentUser.username }}
            </RouterLink>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :to="{path: 'login'}"
              active-class="active"
            >
              Sign in
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink 
              class="nav-link" 
              :to="{path: 'register'}" 
              active-class="active"
            >
              Sign up
            </RouterLink>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { getterTypes } from '@/store/modules/auth'

export default {
  name: 'McvTopBar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous
    })
  }
}
</script>

