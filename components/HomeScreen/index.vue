<template lang="pug">
section.home-screen
  div.home-screen__content
    h1 onelong
    p 不管是伟大的还是渺小的，都是最喜欢的人生了。
    ul.home-screen__tags
      li 96·天蝎
      li 南开大学
      li 口袋故事@前端工程师
    ul
      li 前端码农
      li 赌狗
  img.home-screen__cover(src='../../assets/images/avatar.jpeg')
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
.home-screen {
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  width: 100%;
  overflow: hidden;

  text-align: center;
  color: #fff;

  background: #000;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;

    box-sizing: border-box;
    padding: 0 20px;

    transform: translate(-50%, -50%);
  }

  &__tags {
    display: flex;
    justify-content: center;

    overflow: hidden;

    font-size: 13px;

    li {
      display: flex;

      white-space: nowrap;
      & + li {
        &::before {
          content: '/';

          margin: 0 0.2em;
        }
      }
    }
  }
  &__cover {
    width: 100%;
    height: 300px;

    object-fit: cover;
  }
}
@media screen and(min-width: 1200px) {
  .home-screen {
    &__cover {
      height: 500px;
    }
  }
}
</style>
