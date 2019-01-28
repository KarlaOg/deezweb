<template>
    <div class="container centered">
      <h1>Recherche</h1>
      <hr>

      <form class="filterform" @submit="callMusic">
        <input type="search" placeholder="Tapez un nom ou un lieu ..." v-model="searchMusic">
        
        <label for="filter">Filtrer par:</label>
        <select name="filterBy" v-model="searchBy">
          <option value="album">Album</option>
          <option value="artiste">Artiste</option>
          <option value="musique">Musique</option>
          <option value="mostpopular">Les plus populaires</option>
          <option value="beststars">Les mieux notés</option>
        </select>
       
        <button type="submit">GO</button>
      </form>
      

      <div class="musiclist">
        <!-- Liste de tous les utilisateurs ici -->
      </div>
    </div>
</template>

<script>
import MusicService from "@/services/MusicService.js";

export default {
  name: "Search",
  data() {
    return {
      searchMusic: "",
      searchBy: ""
    };
  },
  methods: {
    callMusic(){
      MusicService.search(this.searchMusic)
      .then(results=> console.log(results))
    }
    /*callMusic: function() {
      MusicService.search(this.searchMusic)
      .then(results => console.log(results))
    }*/ 
  }
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
