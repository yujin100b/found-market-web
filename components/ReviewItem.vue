<template>
  <div class="lb_accordeon" id="lb_accordeon">
    <ul class="lb_accordeon__item">
      <li
        v-for="(item, index) in content"
        :key="index"
        class="lb_item"
        v-bind:class="{ 'lb_ext-active': currentIdx === index }"
      >
        <div class="lb_item__hl">
          <div class="list-item-wrap">
            <div class="img-wrap">
              <img :src="item.product.thumbnail" />
            </div>
            <div class="text-wrap">
              <p class="item-title" v-html="item.product.title"></p>
              <p>고객님의 소중한 리뷰를 작성해주세요.</p>
            </div>
          </div>
          <button v-on:click="faqTrigger(index)">리뷰쓰기</button>
        </div>
        <transition
          mode="out-in"
          name="faq-fade"
          v-on:before-enter="beforeEnterFaq"
          v-on:enter="enterFaq"
        >
          <div class="lb_item__copy" v-show="currentIdx === index">
            <div class="lb_item-copy-ct">
              <div class="img-input-form">
                <label>
                  <span>+</span>
                  <input multiple type="file" @change="onFileChange" />
                </label>
                <div class="img-w-btn-wrap" v-if="images">
                  <div class="img-w-btn" v-for="(image, index) in images" :key="index">
                    <div class="img-wrap">
                      <img :src="image" />
                    </div>
                    <button @click="removeImage(index)">x</button>
                  </div>
                </div>
              </div>
              <div class="text-input-form">
                <textarea v-model="reviews" placeholder="최소 15자 이상 작성해주세요.">
                </textarea>
                <button @click="save(item.id)">저장</button>
              </div>
            </div>
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
      images: [],
      reviews : '',
    };
  },
  methods: {
    faqTrigger: function (newFaq) {
      this.images = []
      this.reviews = ''
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
      // _t.style.maxHeight = _t.myHeight + "px";
      _t.style.maxHeight = 290 + "px";
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files);
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function (event) {
          const imageUrl = event.target.result;
          vm.images.push(imageUrl);
        };
        reader.readAsDataURL(files[index]);
      }
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    save(id){
      const payload = {
        id: id,
        text: this.reviews
      }
      this.$store.dispatch("put_review", payload).then(
        _ => {
          alert("저장되었습니다.")
          this.$emit("update")
        })
    }
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
.img-w-btn-wrap{
  display: flex;
}
.img-wrap {
  position: relative;
  min-width: 100px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  margin-right: 15px;
}
.img-wrap img {
  display: block;
  height: 100%;
  width: 150%;
  max-width: unset;
}
.img-w-btn{
  position: relative;
}

.img-w-btn button{
  position: absolute;
  top: -5px;
  right: 5px;
  width: 19px;
  height: 19px;
  border: 0;
  border-radius: 10px;
  background: black;
  color: #fff;
  padding: 0 !important;
  padding-bottom: 3px !important;
}

.lb_accordeon .lb_item {
  display: block;
  margin-bottom: 0;
}
.lb_accordeon .lb_item__hl {
  position: relative;
  padding: 30px 0;
  transition: color 200ms;
  background: #fff;
  border-bottom: 1px solid #000;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.list-item-wrap .text-wrap {
  padding-left: 20px;
}
.list-item-wrap .item-title {
  font-family: IM_Hyemin-Bold;
  width: 304px;
  font-style: normal;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  color: #000000;
  margin-bottom: 5px;
}
.list-item-wrap .text-wrap p:last-child {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  /* identical to box height, or 183% */
}
.lb_accordeon .lb_item__hl button,
.lb_accordeon .lb_item .lb_item-copy-ct button{
  background: #ffd228;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #000000;
  padding: 6px 11px;
}
.lb_accordeon .lb_item__copy {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #000;
}
.lb_accordeon .lb_item .lb_item-copy-ct {
  padding: 30px 0;
  padding-bottom: 15px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  letter-spacing: -0.015em;
  color: #000000;
}

.img-input-form {
      width: 100%;
    display: flex;
    overflow: scroll;
    padding-top:5px;
}

.img-input-form label {
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
}
.img-input-form label span{
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 33px;
}
.img-input-form input{
  display: none;
}
.lb_accordeon .lb_item .lb_item-copy-ct .img-w-btn button{
  font-size: 12px;
  line-height: 1;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  padding-bottom: 3px !important;
}
.text-input-form{
  padding-top: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.text-input-form textarea{
  width: 80%;
  height: 7em;
  border: none;
  resize: none;
  padding: 10px
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
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000;
}
#lb_accordeon h2 span.id {
  font-weight: bold;
  padding-right: 29px;
}
#lb_accordeon ul,
#lb_accordeon li {
  padding: 0;
  margin: 0;
}
@media (max-width: 980px) {
  .lb_accordeon .lb_item__hl{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .img-wrap{
    width: 70px;
    height: 70px;
    min-width: 70px;
  }
  .list-item-wrap{
    width: 100%;
  }
  .list-item-wrap .text-wrap{
    padding-left: 0;
  }
  .list-item-wrap .item-title {
    width: unset;
    font-size: 16px;
    line-height: 20px;
  }
  .list-item-wrap .text-wrap p:last-child{
    font-size: 12px;
  }
  .img-input-form {
        padding-top: 15px;
  }
  .img-input-form label {
    width: 70px;
    height: 70px;
    min-width: 70px;
}
.lb_accordeon .lb_item__hl{
      padding-bottom: 15px;
}
.lb_accordeon .lb_item .lb_item-copy-ct {
    padding: 15px 0;
}

.lb_accordeon .lb_item__hl button{
      margin-top: 36px;
}
}
</style>