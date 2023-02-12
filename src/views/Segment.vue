<template>
  <div class="contents-wrapper">
    <div class="hl">
      <div class="header">
        <h1 class="title">Image Segmentation</h1>
        <div>
          <button class="back"><router-link to="main">back</router-link></button>
        </div>
      </div>
      <div class="border-bottom"></div>
      <h5 class="subtitle">사진들을 클릭해서 MOS의 자동 태깅 기술을 체험해보세요.</h5>
      <div class="border-bottom"></div>
    </div>
    <div class="main-container">
      <div class="section-1">
        <!-- 왼쪽 인플루언서 영역 -->
        <div class="ex-image-wrapper" v-for="(value, index) in img_url" :key="index">
          <img class="ex-image" @click="setImage(index)" :src="value.image" alt="" />
        </div>
      </div>

      <div class="section-2">
        <img class="seg-image" :src="img_url[num].segment" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      num: 0,
      img_url: [
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0001.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0001.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0002.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0002.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0003.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0003.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0004.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0004.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0005.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0005.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0006.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0006.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0007.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0007.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0008.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0008.jpg",
        },
        {
          image: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0009.jpg",
          segment: "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0009.jpg",
        },
      ],
    };
  },
  methods: {
    setImage(idx) {
      console.log(idx);
      this.num = idx;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-wrapper {
  background-color: #f5eede;
  min-height: 1000px;
  width: 100%;
}

.header {
  display: flex;
}

.hl {
  margin-top: 0;
  border-top: 2px solid #ff5a00;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f5eede;
  height: 100%;
  text-align: center;
  padding: 10px;
}
.border-bottom {
  border-bottom: 2px solid#ff5a00;
}
.title {
  color: #ff5a00;
  /* border-bottom: 2px solid #ff5a00; */
  /* border-spacing: 25px; */
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 50px;
}
.subtitle {
  color: #ff5a00;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  /* width:; */
}
.main-container {
  /* border: solid; */
  display: flex;
  height: 100%;
  align-items: center;
}
.section-1 {
  /* border: solid; */
  border-radius: 10px;
  width: 40%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-left: 50px;
}

.ex-image-wrapper {
  width: 30%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-bottom: 6px;
  padding-left: 3px;
  padding-right: 3px;
}

.ex-image {
  border-radius: 10px;
  width: 150px;
  height: 200px;
}

.section-2 {
  /* border: solid; */
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
}
.seg-image {
  width: 600px;
  height: 800px;
}

.back {
  background-color: #f5eede;
  border: none;
  text-decoration: none;
}
</style>
