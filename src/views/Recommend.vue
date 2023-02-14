<template>
  <div class="contents-wrapper">
    <div>
      <button class="back"><router-link to="main">back</router-link></button>
    </div>
    <div class="hl">
      <div class="border-top"></div>
      <div class="header">
        <h1 class="title">Instagram Recommendation</h1>
      </div>
      <div class="border-bottom"></div>
      <h5 class="subtitle">
        서로 다른 4개의 스타일을 가지고 있는 인스타그램 피드 예시들을 클릭하면서 새롭게 정렬되는 쇼핑몰 아이템들을 확인해보세요.
      </h5>
      <div class="border-bottom"></div>
    </div>
    <div class="main-container">
      <div class="section-1">
        <!-- 왼쪽 인플루언서 영역 -->
        <div class="subsection">
          <!-- 윗줄 -->
          <div v-for="(value, index) in item_list" :key="index">
            <img class="influencer_img" @click="showResults(index)" :src="value.insta" />
          </div>
        </div>
      </div>

      <div class="section-2">
        <div class="item-wrapper">
          <div class="item_img_wrapper" v-for="(value, index) in item_list[num].item" :key="index">
            <img class="item_img" :src="value" />
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
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/aimons_301609432_6.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/AVANDRESS_301586848_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/beyondcloset_301449969_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/BINOVULAR_301663641_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ARCHAIC_301444389_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/aimons_301690736_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ANGELO BIANCO_301484266_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/a.riff_301566545_1.jpg",
          ],
        },
        {
          influencer: "joy",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/joy.png",
          item: [
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/BAU by Bride And You_301646233_4.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ahwe_301687216_5.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/BAU by Bride And You_301711074_4.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/aimons_301609344_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/AMOUR_301660284_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ASURA_301351022_4.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/Aile de _300983264_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/Amethelabel_300985159_4.jpg",
          ],
        },
        {
          influencer: "mino",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/mino.png",
          item: [
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ADER ERROR_301403840_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/AMONG_301416007_3.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/APIECEOFCAKE_301493909_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ADER ERROR_301404507_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ADER ERROR_301403757_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/BEGIN 2.0.2_301511954_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/APIECEOFCAKE_301447900_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ANDTHEOTHER_301061946_2.jpg",
          ],
        },
        {
          influencer: "seojun",
          insta: "https://astlyi.s3.ap-northeast-2.amazonaws.com/influencer/seojun.png",
          item: [
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ANGELOBIANCO HOMME_301628580_3.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ANGELOBIANCO HOMME_301628579_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/Another day of sun_301074107_1.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/AVANDRESS_301541051_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/BEMUSE MANSION_301626914_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/akro_300783306_5.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/AUBOUR_300924579_3.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ATHPLATFORM_301456110_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/AVA MOLLI_300856103_4.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/BAU by Bride And You_301277089_4.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/ANEDIT_301135263_2.jpg",
            "https://astlyi.s3.ap-northeast-2.amazonaws.com/wconcept/bibyseob_301207911_1.jpg",
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
  /* height: 100vh; */
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

.influencer_img:hover {
  opacity: 0.4;
}
.hl {
  margin-top: 0;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f5eede;
  height: 100%;
  text-align: center;
  padding: 10px;
}
.header {
  display: flex;
}

.border-top {
  border-top: 2px solid#ff5a00;
}

.border-bottom {
  border-bottom: 2px solid#ff5a00;
}
.title {
  color: #ff5a00;
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
  /* border: solid; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.item_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid; */
  width: 25%;
}

.item_img {
  border-radius: 10px;
  width: 225px;
  height: 300px;
}

.back {
  background-color: #f5eede;
  border: none;
  text-decoration: none;
  text-align: right;
}

a {
  text-decoration: none;
  color: black;
  font-size: 15px;
  text-align: right;
}
</style>
