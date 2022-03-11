<template>
<div></div>
</template>

<script>
export default {
  mounted() {
    var _naver_id_login = new naver_id_login(
      "JN32mHN_ITZtyK7hQ_cW",
      `${window.location.origin}/login_callback`
    );
    // 접근 토큰 값 출력
    alert(_naver_id_login.oauthParams.access_token);
    this.$store.commit('localStorage/set_token', { data: { access: _naver_id_login.oauthParams.access_token} })
    // 네이버 사용자 프로필 조회
    _naver_id_login.get_naver_userprofile();
    alert(_naver_id_login.getProfileData('email'))
    this.$router.push("/")
  },
};
</script>