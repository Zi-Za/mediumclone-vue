<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <RouterLink 
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" />
          </RouterLink>
          <div class="info">
            <RouterLink 
              :to="{name: 'userProfile', params: {slug: article.author.username}}"
            >
              {{ article.author.username }}
            </RouterLink>
          <span class="date">
            {{ article.createdAt}}
          </span>
          </div>
          <span v-if="isAuthor">
            <RouterLink class="btn btn-outline-secondary btn-sm"
              :to="{name: 'editArticle', params: {slug: article.slug}}"
            >
              <i class="ion-edit"></i>
              Edit Article
            </RouterLink>
            <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
              <i class="ion-trash-a"></i>
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <mcv-loading v-if="isLoading" />
      <mcv-error-message v-if="error" :message="error"/>
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          <mcv-tag-list :tags="article.tagList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes as articleActionTypes } from '@/store/modules/article'
import { getterTypes as authGetterTypes } from '@/store/modules/auth'
import { mapState, mapGetters } from 'vuex'
import McvLoading from '@/components/Loading'
import McvErrorMessage from '@/components/ErrorMessage'
import McvTagList from '@/components/TagList'

export default {
  name: 'McvArticle',
  components: {
    McvLoading,
    McvErrorMessage,
    McvTagList
  },
  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      article: state => state.article.data
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false
      }
      return this.currentUser.username === this.article.author.username
    }
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug
    })
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch(articleActionTypes.deleteArticle, {
        slug: this.$route.params.slug
      })
      .then(() => {
        this.$router.push({name: 'globalFeed'})
      })
    }
  }
}
</script>