<template>
  <div>
    <div class="content-wrapper">
      <div class="title">MOS</div>
      <div class="link-wrapper">
        <router-link to="/segment"> <img src="../assets/instance_segmentation.jpg" class="main_image" /></router-link>
        <router-link to="/recommend"><img src="../assets/instagram_recommendation.png" class="main_image" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  background: no-repeat center fixed;
  background-size: cover;
  background-color: black;
}

.content-wrapper {
  /* background-size: cover; */
  background-color: black;
  min-height: 1000px;
  min-width: 100%;
  align-content: center;
  text-align: center;
  align-items: center;
}
.link-wrapper {
  width: 100%;
  align-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-size: 120px;
  align-content: center;
  padding: 20px;
}

.main_image {
  width: 460px;
  height: 690px;
  margin-left: 40px;
}

.main_image:hover {
  border: 5px solid #ff5a00;
}
</style>
