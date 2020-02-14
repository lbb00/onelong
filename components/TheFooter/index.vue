<template lang="pug">
footer.the-footer(ref='footer')
  div.the-footer__wrap(ref='wrap')
    div.the-footer__content(ref='content')
      div.copyright by: onelong
      //- ul.contact
      //-   li
      //-     div 微信公众号
      //-   li
      //-     div 邮箱
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    const height = this.$refs.content.clientHeight + 'px'
    this.$refs.footer.style.height = height
    this.$refs.wrap.style.height = height
  }
}
</script>

<style lang="scss">
@import '~/assets/style/var.scss';
.the-footer {
  &__wrap {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0;
    overflow: hidden;
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    padding: 20px 30px;

    text-align: center;
    color: #fff;

    background: $main-black;
  }
  .copyright {
    margin-right: 20px;
  }
  .contact {
    display: flex;
    li {
      margin: 0 20px;
    }
  }
}
</style>
