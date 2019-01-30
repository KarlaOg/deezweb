<template>
  <div class="hello">
    <h1>Bienvenue sur Deezweb</h1>
    <p>L'application qui permet facilement d'écouter de la musique</p>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  name: "Home",
  component: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.hello{
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  margin-left: 12rem;
  height: 20rem;
  width: 75%;
  background-color:#e5e7e7;
  border-radius: 5px;
}
.hello > * {
  padding-left: 1rem; 
}
.hello > h1 {
  font-size: 55px;
  font-weight: 100; 
}
</style>
