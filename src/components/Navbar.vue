<template>
  <nav class="navbar">
    <div class="container">
        <router-link to="/">Accueil</router-link>
        <router-link to="/search">Recherche</router-link>
        <router-link to="/favorite">Favoris</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: #6D6D6D;
  overflow: hidden;
  margin-bottom: 3em;
}
.navbar > .container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.navbar a:link,
.navbar a:visited {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.75em 1em;
  transition: all 150ms;
  transform: scale(1);
}
.navbar a:hover {
  background-color: #373737;
  transform: scale(1.05);
}


</style>