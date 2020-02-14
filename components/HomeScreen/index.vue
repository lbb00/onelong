<template lang="pug">
header.home-screen
  h1.home-screen__title onelong
  p 不管是伟大的还是渺小的，都是最喜欢的人生了。
  nav
    ul.home-screen__nav
      li.home-screen__nav__button 文章
      li.home-screen__nav__button GITHUB
  div.home-screen__about-me
    div.home-screen__about-me__wrap
      ul.home-screen__about-me__tags
        li 96·天蝎
        li 南开大学
        li 口袋故事@前端工程师
      ul.home-screen__about-me__tags
        li 前端码农
        li 赌狗
      img.home-screen__about-me__cover(src='../../assets/images/avatar.jpeg')
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
@import '../../assets/style/var.scss';
.home-screen {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 400px;
  margin: 0 -4vw;
  padding: 12px 0 12px;

  text-align: center;
  color: #fff;

  background-color: $main-color;
  background-size: repeat;

  &__title {
    margin-top: -40px;
    margin-bottom: 15px;

    font-size: 2.8rem;
  }
  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 3.2rem;
      margin: 0 1rem;
      padding: 0 1.5rem;

      border: 1px solid #fff;
      border-radius: 1.6rem;

      transition: all 0.3s ease-in-out;
      &:hover {
        color: $main-color;

        background: #fff;
        cursor: pointer;
      }
    }
  }
  &__about-me {
    position: absolute;
    top: 100%;
    left: 50%;

    width: 100%;
    height: 40vh;
    min-height: 260px;
    margin: -75px 0 0;

    transform: translateX(-50%);

    &__wrap {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      height: 100%;
      margin: 0 4vw;
      overflow: hidden;

      border-radius: 5px;
    }
    &__tags {
      display: flex;
      justify-content: center;

      overflow: hidden;

      li {
        display: flex;

        white-space: nowrap;
        & + li {
          &::before {
            content: '/';

            margin: 0 0.4em;
          }
        }
      }
    }
    &__cover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
}
</style>
