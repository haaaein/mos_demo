<template>
  <div class="contents-wrapper">
    <div class="hl">
      <h1 class="title">Instagram Recommendation</h1>
      <h5 class="subtitle">
        서로 다른 4개의 스타일을 가지고 있는 인스타그램 피드 예시들을 클릭하면서 새롭게 정렬되는
        쇼핑몰 아이템들을 확인해보세요.
      </h5>
    </div>
    <div class="main-container">
      <div class="section-1">
        <!-- 왼쪽 인플루언서 영역 -->
        {{ num }}
        <div class="subsection">
          <!-- 윗줄 -->
          <div v-for="(value, index) in item_list" :key="index">
            <button @click="showResults(index)">
              <img class="influencer_img" :src="value.insta" />
            </button>
          </div>
        </div>
      </div>

      <div class="section-2">
        <div class="item-wrapper">
          <div class="item_img_wrapper" v-for="(value, index) in item_list[num].item" :key="index">
            <img class="imem_img" :src="value" />
          </div>
        </div>
      </div>
      <!-- 오른쪽 결과 영역 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
  data() {
    return {
      num: 0,
      item_list: [
        {
          influencer: "jenny",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/jenny.png",
          item: [
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0001.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0002.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0003.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0004.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0005.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0006.jpg",
          ],
        },
        {
          influencer: "joy",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/joy.png",
          item: [
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0007.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0008.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0009.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0010.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0011.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0012.jpg",
          ],
        },
        {
          influencer: "mino",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/mino.png",
          item: [
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0013.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0014.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0015.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0016.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0017.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0018.jpg",
          ],
        },
        {
          influencer: "seojun",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/seojun.png",
          item: [
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0019.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0020.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0021.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0022.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0023.jpg",
            "https://mos-test-products.s3.ap-northeast-2.amazonaws.com/images/P0024.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    showResults(idx) {
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

.button_influencer {
  /* background-image: url("../assets/jenny.png"); */
  border: none;
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.influencer_img {
  margin: 0px 10px 15px;
  width: 250px;
  height: 330px;
  border-radius: 15px;
}
.hl {
  margin-top: 0;
  border-top: 2px solid #ff5a00;
  border-bottom: 2px solid#ff5a00;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f5eede;
  height: 100%;
  text-align: center;
  padding: 10px;
}

.title {
  color: #ff5a00;
  border-bottom: 2px solid #ff5a00;
  /* border-spacing: 25px; */
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 50px;
}
.subtitle {
  color: #ff5a00;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 15px;
  /* width:; */
}
.main-container {
  display: flex;
  flex-direction: row;
}
.section-1 {
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
}

.section-2 {
  display: flex;
  flex-direction: row;
  width: 60%;
}

.subsection {
  display: flex;
  /* flex: row; */
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.item-wrapper {
  width: 100%;
  padding: 20px;
  border: solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.item_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  width: 25%;
}

.imem_img {
  width: 225px;
  height: 300px;
}
</style>
