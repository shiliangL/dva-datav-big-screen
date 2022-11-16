
<script>
export default {
  name: 'AppFooter',
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: '城市治理 ',
          key: 1,
          path: '/about',
          icon: require('@/assets/images/link/navigation2_ICON1_normal@2x.png'),
          activeIcon: require('@/assets/images/link/navigation2_ICON1_click@2x.png'),
          img: require('@/assets/images/link/btn_style1@2x.png'),
          activeImg: require('@/assets/images/link/btn_style1_choosed@2x.png')
        },
        {
          name: '城市概览',
          key: 2,
          path: '/datav',
          icon: require('@/assets/images/link/navigation2_ICON2_normal@2x.png'),
          activeIcon: require('@/assets/images/link/navigation2_ICON2_click@2x.png'),
          img: require('@/assets/images/link/btn_style2@2x.png'),
          activeImg: require('@/assets/images/link/btn_style2_choosed@2x.png')
        },
        {
          name: '交通总览',
          key: 3,
          path: '/three',
          icon: require('@/assets/images/link/navigation2_ICON3_normal@2x.png'),
          activeIcon: require('@/assets/images/link/navigation2_ICON3_click@2x.png'),
          img: require('@/assets/images/link/btn_style1@2x.png'),
          activeImg: require('@/assets/images/link/btn_style1_choosed@2x.png')
        }
      ]
    }
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    linkOnClick (item) {
      // this.$router.push(item.path)
      this.$DvaWinManager.openWin({
        type: 'left',
        styles: {
        },
        content: () => import('@/views/aside/smartCityLeftLv1.vue')
      })
      this.$DvaWinManager.openWin({
        type: 'right',
        styles: {
        },
        content: () => import('@/views/aside/smartCityLeftLv1.vue')
      })
    }
  },
  render (h) {
    return h('div', { class: 'footer' }, [
      h('div', { class: ['footer_link'], props: {}, attrs: {} }, [
        this.data.map(item => {
          return h('div', {
            class: 'link',
            on: {
              click: () => this.linkOnClick(item)
            }
          }, [
            h('div', { class: 'link-img' }, [
              this.currentPath === item.path
                ? h('transition', {
                  props: {
                    name: 'custom-classes-transition',
                    'enter-active-class': 'animate__animated animate__fadeIn',
                    'leave-active-class': 'animate__animated animate__fadeOut'
                  }
                }, [
                  h('img', { attrs: { src: item.activeImg } })
                ])
                : h('transition', {
                  props: {
                    name: 'custom-classes-transition',
                    'enter-active-class': 'animate__animated animate__fadeIn',
                    'leave-active-class': 'animate__animated animate__fadeOut'
                  }
                }, [
                  h('img', { attrs: { src: item.img } })
                ])
            ]),
            h('div', { class: 'link_name' }, [
              h('img', { attrs: { src: item.icon } }),
              h('span', item.name)
            ])
          ])
        })
      ])
    ])
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  @include Bottom(15);
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 9;
  @include wHeight(114);
  background: url('~@/assets/images/link/bottom_bg@2x.png') no-repeat;
  background-size: 100% 100%;

  .footer_link {
    position: absolute;
    left: 0;
    right: 0;
    @include Bottom(25.11);
    @include wHeight(35);

    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .link {
      @include Width(143);
      @include wHeight(35);
      @include Margin(0, 3.33, 0, 0);
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      @include FontSize(18);
      flex-direction: column;
      transition: all 0.5s;

      .link-img {
        width: 100%;
        position: absolute;
        transition: all 0.3s;
        height: 100%;
        display: flex;
        justify-content: center;

        img {
          width: 100%;
          @include wHeight(35);
          transition: all 0.3s;
          position: absolute;
        }
      }

      &.isactive {
        @include LetterSpacing(1);
        .link-img {
          width: 100%;
          position: absolute;
          transition: all 0.3s;
          height: 100%;
          display: flex;
          justify-content: center;
          img {
            width: 100%;
            @include wHeight(52);
            transition: all 0.3s;
            position: absolute;
            @include Bottom(-10);
          }
        }

        .link_name {
          //@include FontSize(18);
          @include LetterSpacing(1);
          // color: #ffdeab;
        }
      }

      .link_name {
        display: flex;
        @include Width(143);
        @include wHeight(35);
        text-align: center;
        @include FontSize(20);
        @include LetterSpacing(0.88);
        font-family: Oppo, serif;
        font-weight: 500;
        @include LineHeight(35);

        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
        color: #fff;

        opacity: 0.9;
        font-family: OPPOSans-R;
        font-weight: lighter;
        @include FontSize(13.33);
        color: #ffffff;
        text-shadow: 0 1.33px 2.67px #000101;

        img {
          @include Width(24);
          @include wHeight(24);
          @include MarginRight(5.5);
        }
      }

      .toplinks {
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        .toplink {
          @include Width(140);
          @include wHeight(40);
          @include Margin(0, 20, 0, 20);
          @include FontSize(18);
          color: #ffffff98;
          display: flex;
          font-family: Oppo;
          justify-content: center;
          align-items: center;
          background-size: 100% 100%;
          &.toplink_active {
            //background: url("~@/assets/images/基础/header/btn_当前选中@2x.png") no-repeat center/cover;
            background-size: 100% 100%;
            color: #ffdeab;
            .svg_left {
              // font-size: 3000px;
              //color: #ffffff;
              //transform: scale(5);
            }
          }
        }
      }
    }
  }
}
</style>
