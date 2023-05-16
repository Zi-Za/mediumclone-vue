<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <RouterLink 
            :to="{path: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" />
          </RouterLink>
          <div class="info">
            <RouterLink 
              :to="{path: 'userProfile', params: {slug: article.author.username}}"
            >
              {{ article.author.username }}
            </RouterLink>
          <span class="date">
            {{ article.createdAt}}
          </span>
          </div>
          <span>
            <RouterLink class="btn btn-outline-secondary btn-sm"
              :to="{path: 'editArticle', params: {slug: article.slug}}"
            >
              <i class="ion-edit"></i>
              Edit Article
            </RouterLink>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i>
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from '@/store/modules/article'
import { mapState } from 'vuex'

export default {
  name: 'McvArticle',
  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      article: state => state.article.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug
    })
  }
}
</script>