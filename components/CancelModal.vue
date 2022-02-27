<template>
  <div class="modal" :class="isActive ? 'is-active' : ''">
    <div class="modal-background" @click="$emit('modal_close')"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h1>취소/환불 요청</h1>
        <p>{{ order_num }}</p>
      </div>
      <select v-model="cancel_type">
        <option disabled value="">문의 유형을 선택해주세요.</option>
        <option value="0">취소 문의</option>
        <option value="1">반품 문의</option>
        <option value="2">교환 문의</option>
        <option value="3">환불 문의</option>
      </select>
      <input v-model="title" placeholder="취소 요청 제목을 작성해주세요" />
      <textarea
        v-model="reason"
        placeholder="취소 요청 사유를 작성해주세요"
        rows="10"
      />
      <div class="button-wrap">
        <button @click="post_cancel">요청 보내기</button>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  props: {
    isActive: { default: false },
    order_num: { type: String },
    order_id: { type: Number }
  },
  data() {
    return {
      cancel_type: "",
      title: "",
      reason: "",
    };
  },
  computed: {
    payload() {
      return {
        cancel_type: this.cancel_type,
        title: this.title,
        reason: this.reason,
        order: this.order_id,
        user: this.$store.getters["localStorage/getUserId"]
      };
    },
  },
  methods: {
    post_cancel() {
      this.$store.dispatch("post_cancel", this.payload).then((_) => {
        alert("취소 요청이 완료되었습니다. ")
        this.$emit("modal_close");
      });
    },
  },
};
</script>

<style scoped>
.modal-content {
  background: #fff;
  padding: 72px 53px;
}
.modal-content .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
}
.modal-content h1 {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
}
.modal-content p {
  font-family: Noto Sans;
  font-style: normal;
  font-size: 18px;
  color: #000000;
}
.modal-content input,
.modal-content select,
.modal-content textarea {
  display: block;
  width: 100%;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 16px;
}
.modal-content select,
.modal-content input {
  height: 40px;
  margin-bottom: 5px;
}
.modal-content .button-wrap {
  padding-top: 39px;
  display: flex;
  justify-content: center;
}
.modal-content button {
  background: #ffd228;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  padding: 12px 23px;
}
</style>