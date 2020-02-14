<template lang="pug">
article.home-post-card
  nuxt-link(:to='getPostLink()')
    img.home-post-card__cover(src='' alt='')
    div.home-post-card__content
      div
        span.home-post-card__tags tags
        h3.home-post-card__title {{post.name}}
      p.home-post-card__excerpt Self-esteem is like a castle that sits atop six strong pillars and serves as a foundation for your life. Without high self-esteem, you'll have trouble in every aspect of your life.
      div
        span.home-post-card__reading-time 1 min
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    getPostLink() {
      return `post/${this.post.path}`
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/var.scss';
.home-post-card {
  flex: 1 1 300px;

  min-height: 300px;
  margin: 0 20px 40px;
  overflow: hidden;

  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07);

  transition: all 0.5s ease;
  &:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07);
    transform: translate3D(0, -1px, 0) scale(1.02);

    transition: all 0.4s ease;
  }
  > a {
    display: block;

    height: 100%;

    color: #333;
  }
  &__cover {
    position: relative;

    display: block;

    width: 100%;
    height: 200px;
    overflow: hidden;

    background: $main-grey no-repeat 50%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  &__content {
    position: relative;

    display: block;
    flex-grow: 1;

    padding: 25px;

    color: #15171a;
  }
  &__tags {
    display: block;

    margin-bottom: 4px;

    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.15em;
    color: $main-tag;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  &__title {
    margin: 0 0 0.5em;

    font-size: 2rem;
  }
  &__excerpt {
    margin: 0 0 1.5em;
  }
  &__reading-time {
    flex-shrink: 0;

    margin-left: 20px;

    font-weight: 500;
    font-size: 1.2rem;
    line-height: 33px;
    color: #738a94;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}
</style>
