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
              <p>{{ item.text }}</p>
            </div>
          </div>
          <button v-on:click="remove(item.id)">삭제하기</button>
        </div>
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
      reviews: "",
    };
  },
  methods: {
    remove(id) {
      this.$store.dispatch("delete_review", id).then((_) => {
        this.$emit("update");
        alert("삭제되었습니다.");
      });
    },
  },
};
</script>

<style scoped>
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

.lb_accordeon .lb_item {
  display: block;
  margin-bottom: 0;
}
.lb_accordeon .lb_item__hl {
  position: relative;
  padding: 22px 0;
  padding-bottom: 0;
  transition: color 200ms;
  background: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
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
  line-height: 28px;
  padding-top: 10px;
}
.lb_accordeon .lb_item__hl button,
.lb_accordeon .lb_item .lb_item-copy-ct button {
  background: none;
  border: 0;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #000000;
  padding: 11px;
  text-decoration: underline;
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

@media (max-width: 980px) {
  .lb_accordeon .lb_item__hl {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding: 22px 0;
    padding-bottom: 0;
  }
  .img-wrap {
    width: 70px;
    height: 70px;
    min-width: 70px;
  }
  .list-item-wrap {
    width: 100%;
  }
  .list-item-wrap .text-wrap {
    padding-left: 0;
  }
  .list-item-wrap .item-title {
    width: unset;
    font-size: 16px;
    line-height: 20px;
  }
  .list-item-wrap .text-wrap p:last-child {
    font-size: 12px;
    line-height: 20px;
  }
  .img-input-form {
    padding-top: 15px;
  }
  .img-input-form label {
    width: 70px;
    height: 70px;
    min-width: 70px;
  }
  .lb_accordeon .lb_item .lb_item-copy-ct {
    padding: 15px 0;
  }
}
</style>