<template>
  <div class="lb_accordeon" id="lb_accordeon">
    <ul class="lb_accordeon__item">
      <li
        v-for="(item, index) in content"
        :key="index"
        class="lb_item"
        v-on:click="faqTrigger(index)"
        v-bind:class="{ 'lb_ext-active': currentIdx === index }"
      >
        <div class="lb_item__hl">
          <h2>
            <span>
            <span class="id" v-html="item.id"></span>
            <span v-html="item.title"></span>
            </span>
            <span v-html="item.create_at"></span>
          </h2>
        </div>
        <transition
          mode="out-in"
          name="faq-fade"
          v-on:before-enter="beforeEnterFaq"
          v-on:enter="enterFaq"
        >
          <div class="lb_item__copy" v-show="currentIdx === index">
            <div class="lb_item-copy-ct" v-html="item.details"></div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data: function () {
    return {
      currentIdx: -10,
    };
  },
  methods: {
    faqTrigger: function (newFaq) {
      if (newFaq === this.currentIdx) {
        this.currentIdx = -10;
      } else {
        this.currentIdx = newFaq;
      }
    },
    beforeEnterFaq: function (_t) {
      _t.style.display = "block";
      _t.style.maxHeight = null;
      _t.myHeight = _t.offsetHeight;
      _t.style.maxHeight = 0;
      _t.style.display = null;
    },
    enterFaq: function (_t) {
      _t.style.maxHeight = _t.myHeight + "px";
    },
  },
};
</script>

<style scoped>
@-webkit-keyframes accordeonAni {
  0% {
    max-height: 0;
  }
}
@keyframes accordeonAni {
  0% {
    max-height: 0;
  }
}
.lb_accordeon .lb_item {
  display: block;
  margin-bottom: 0;
}
.lb_accordeon .lb_item__hl {
  position: relative;
  padding: 15px;
  cursor: pointer;
  transition: color 200ms;
  background: #fff;
  border-bottom: 1px solid #000;

}
.lb_accordeon .lb_item__hl:hover {
  background: rgba(255, 210, 40, 0.1);
}
.lb_accordeon .lb_item__copy {
  background: rgba(255, 210, 40, 0.1);
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #000;
}
.lb_accordeon .lb_item .lb_item-copy-ct {
  padding: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
    /* or 167% */

  letter-spacing: -0.015em;
  color: #000000;
}

.faq-fade-enter {
  max-height: 0;
  display: block;
}
.faq-fade-enter-active {
  -webkit-animation: accordeonAni 400ms ease-out;
  animation: accordeonAni 400ms ease-out;
  overflow: hidden;
}
.faq-fade-leave {
  display: block;
}
.faq-fade-leave-to {
  display: block;
}
.faq-fade-leave-active {
  -webkit-animation: accordeonAni 400ms ease-out;
  animation: accordeonAni 400ms ease-out;
  animation-direction: reverse;
  overflow: hidden;
}
#lb_accordeon h2 {
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-family: Noto Sans;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000;
}
#lb_accordeon h2 span.id{
  font-weight: bold;
  padding-right: 29px;
}
#lb_accordeon ul,
#lb_accordeon li {
  padding: 0;
  margin: 0;
}
</style>