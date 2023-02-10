<template>
  <header>
    <div class="hl">
      <h1 class="title"> Instagram Recommendation </h1>
    </div>
  </header>
  <div class="contents-wrapper">
    <div class="section-1">section1</div>
    <div class="section-2">section2</div>

  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  font-size: 40px;
  width: 100;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.title {
  color: #ff5a00;
  font-weight: bold;
}

.hl {
  margin-top: 0;
  border-top: 3px double #ff5a00;
  border-bottom: 3px double #ff5a00;
  width: 100%;
  position: absolute;
}

.contents-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  
}
.section-1{
  display: flex;
  flex-direction: row;
  width: 40%;
}
.section-2{ 
  display: flex; 
  flex-direction: row; 
  width: 60%;
}


</style>
