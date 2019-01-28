<template>
    <div class="container centered">
      <h1>Recherche</h1>
      <hr>

      <form class="filterform">
        <input type="search" placeholder="Tapez un nom ou un lieu ...">
        
        <label for="filter">Filtrer par:</label>
        <select name="filterBy" v-model="searchBy">
          <option value="album">Album</option>
          <option value="artiste">Artiste</option>
          <option value="musique">Musique</option>
          <option value="mostpopular">Les plus populaires</option>
          <option value="beststars">Les mieux notés</option>
        </select>
      </form>

      <div class="musiclist">
        <!-- Liste de tous les utilisateurs ici -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',

};
</script>

<style scoped lang="scss">
.musiclist {
  display: flex;
  flex-wrap: wrap;
}
.musiclist > * {
  box-sizing: border-box;
  width: calc(94% / 3);
  margin: 1%;
}

.filterform {
  margin: 2em 0;
}
</style>
