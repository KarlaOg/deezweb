<template>
  <div class="imgContainer"> 
   <img src="../assets/loader.svg" alt="loader">
   <h3> Working on it ...</h3>
  </div>
   
</template>

<script>
export default {
  name: 'Favorite',
}

</script>

<style scoped>
.imgContainer{
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column;

  
}
h3{
  font-size: 15px;
  font-weight: 100; 
}
</style>
