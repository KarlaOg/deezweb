<template>
  <nav class="navbar">
    <div class="container">
        <router-link to="#">DeezWeb</router-link>
        
        <router-link to="/"> <font-awesome-icon icon="home" /> Accueil</router-link>
         
        <router-link to="/search"> <font-awesome-icon icon="search" /> Rechercher un titre</router-link>
        
        <router-link to="/favorites">  <font-awesome-icon icon="heartbeat" /> Mes Favoris</router-link>
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
  background-color: #373737;
  overflow: hidden;
  margin-bottom: 3em;
  padding: 5px;
}
.navbar > .container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}
.navbar a:link,
.navbar a:visited {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.75em 1em;
}
.navbar a:hover {
  background-color: #474646;
}
svg:not(:root).svg-inline--fa {
  color: white;
}
</style>