<template>
<main>
<div class="body">
  <div class="hl">
      <h1 class="title"> Instagram Recommendation </h1>
      <h5 class="subtitle"> 서로 다른 4개의 스타일을 가지고 있는 인스타그램 피드 예시들을 클릭하면서 새롭게 정렬되는 쇼핑몰 아이템들을 확인해보세요. </h5>
  </div>
  <div class="main-container">
    <div class="section-1"> <!-- 왼쪽 인플루언서 영역 -->
      <div class="subsection"> <!-- 윗줄 -->
        <div><img class="influencer_img" src="../assets/jenny.png" @click="showResults()"
></div>
        <div><img class="influencer_img" src="../assets/joy.png" @click="showResults()"
></div>
      </div>
      <div class="subsection"> <!-- 아랫줄 -->
        <div><img class="influencer_img" src="../assets/mino.png" @click="showResults()"
></div>
        <div><img class="influencer_img" src="../assets/seojun.png" @click="showResults()"
></div>
      </div>
    </div>

    <div class="section-2">
      <h1> recommendation results</h1>
    </div> <!-- 오른쪽 결과 영역 -->
  </div>
</div>
</main>

</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  methods: {
    showResults() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

main {
  background-color: #f5eede;
  min-height: 1700px;
  /* height: 100% */
}
.body {
  background-color: #f5eede;
  height: 100%;
  text-align: center;
  padding: 10px;
}

.button_influencer {
  background-image: url( "../assets/jenny.png");
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
}

.title {
  color: #ff5a00;
  border-bottom: 2px solid #ff5a00;
  border-spacing: 25px;
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
.section-1{
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
}

.section-2{ 
  display: flex; 
  flex-direction: row; 
  width: 60%;
}

.subsection {
  display: flex;
  flex: row;
}


</style>
