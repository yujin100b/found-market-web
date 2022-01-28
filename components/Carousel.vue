<template>
  <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div
        v-if="show"
        :key="current"
        class="slide"
        :style="slides[current].styleObject"
      >
        <div class="slide-text-wrap">
          <h1>{{ slides[current].title }}</h1>
          <p>{{ slides[current].subtitle }}</p>
        </div>
      </div>
    </transition-group>
    <div class="btn btn-prev pc" aria-label="Previous slide" @click="slide(-1)">
      <svg
        width="18"
        height="32"
        viewBox="0 0 18 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2129 28.6396L3.19208 16.6188C2.80155 16.2283 2.80155 15.5951 3.19208 15.2046L15.2129 3.1838"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="btn btn-next pc" aria-label="Next slide" @click="slide(1)">
      <svg
        width="18"
        height="32"
        viewBox="0 0 18 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.78711 3.36035L14.8079 15.3812C15.1984 15.7717 15.1984 16.4049 14.8079 16.7954L2.78711 28.8162"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="btn mobile">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="slidebtn(index-1)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        {
          style_obejct: {
            backgroundImage: "url(/slide1.jpg)",
          },
          title: "메이드 인 제주 진피녹차 출시",
          subtitle: "한모금으로 제주 여행하기",
        },
        {
          style_obejct: {
            backgroundImage: "url(/slide2.jpg)",
          },
          title: "메이드 인 제주 진피녹차 출시",
          subtitle: "한모금으로 제주 여행하기",
        },
        {
          style_obejct: {
            backgroundImage: "url(/slide3.jpg)",
          },
          title: "메이드 인 제주 진피녹차 출시",
          subtitle: "한모금으로 제주 여행하기",
        },
      ],
    };
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      let len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
    slidebtn(index) {
      let dir = this.current <= index ? -1 : 1 
      this.slide(dir)
    },
    getSlide() {
      this.$store.dispatch("get_slide").then((res) => {
        if (res.data.length) {
          this.slides = res.data.map((el) => {
            return {
              ...el,
              styleObject: {
                backgroundImage: `url(${el.background})`,
              },
            };
          });
        }
      });
    },
  },
  created() {
    this.getSlide();
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

#slider {
  width: 100%;
  height: 450px;
  position: relative;
}

.slide {
  width: 100%;
  height: 450px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px solid #000;
}
.slide .slide-text-wrap {
  width: 980px;
  margin: 0 auto;
}
.slide-text-wrap h1 {
  font-family: IM_Hyemin-Bold;
  font-size: 60px;
  line-height: 70px;
  width: 484px;
  word-break: keep-all;
}
.slide-text-wrap p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  width: 484px;
  margin-top: 32px;
}

.btn {
  z-index: 10;
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

@media (max-width: 980px) {
  #slider {
    width: 375px;
    height: 375px;
  }
  .slide .slide-text-wrap {
    width:100%;
    padding: 29px;
  }
  .slide {
    width: 100%;
    height: 375px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top:40px;
  }
  
  .btn {
    z-index: 10;
    cursor: pointer;
    color: #fff;
    background: none;
    position: absolute;
    width: 44px;
    height: 10px;
    top: calc(100% - 30px);
    left: calc(50% - 22px);
    transition: transform 0.3s ease-in-out;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
   .btn span{
      background: #000;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
   }
  .slide-text-wrap h1 {
    width: 100%;
    font-size: 32px;
    line-height: 49px;
  }
  .slide-text-wrap p {
    width: 100%;
    font-size: 14px;
    line-height: 19px;
  }
}
</style>