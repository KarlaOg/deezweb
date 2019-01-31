<template>
    <div class="container">
      <div class="info">
     <h1>Recherche</h1>
      <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant:</p>
   
      </div>
     
       <div class="lines"></div>
      <form class="filterform" @submit.prevent="callMusic">
          <label for="search">Titre:</label>
        <input type="text" placeholder="Eminem" v-model="allSearch.searchMusic">
        
        <label for="filter">Filtrer par:</label>
        <select name="filterBy" v-model="allSearch.searchBy">
          <option value="ALBUM">Album</option>
          <option value="ARTIST">Artiste</option>
          <option value="TRACK" selected >Musique</option>
          <option value="RANKING">Les plus populaires</option>
          <option value="RATING">Les mieux notés</option>
        </select>
       
        <button type="submit" class="btn">Go</button>
      </form>
     <div class="lines"></div>
<br>
      <div class="musiclist">
        <!-- Liste de tous les utilisateurs ici -->
        <MusicCard v-for="song in results" :song="song" :key="song.id"/>
      </div>
    </div>
</template>

<script>
import MusicService from "@/services/MusicService.js";
import MusicCard from "./MusicCard.vue";

export default {
  name: "Search",
  data() {
    return {
      allSearch:{ 
        searchMusic: "",
        searchBy: "",
      }, 
      results: null,
      song: null
    };

  },
  components: {
    MusicCard
  },
  methods: {
    callMusic: function() {
      MusicService.search(this.allSearch).then(
        results => (this.results = results)
      );
    }
  }
};
</script>

<style scoped lang="scss">
.musiclist {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}
.musiclist > * {
  box-sizing: border-box;
  border-style: solid; 
  border-width: 1px; 
  border-color: #e5e7e7;
  
}

.filterform {
  margin: 2em 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
input {
  width: 25%;
  padding: 10px;
  border-radius:5px; 
  margin-left: 1rem;
  margin-right: 2rem; 
  box-sizing: border-box;
}
select{
  width: 15%;
  height: 2rem;
  border-radius:5px; 
  margin-left: 1rem;
  margin-right: 2rem; 
  box-sizing: border-box;
}
.btn{
  background-color: #2E7DF6; 
  color: white; 
  border-radius: 5px; 
  margin-left: 10px; 
  border-color: #2E7DF6; 
  padding: 7px; 
  font-size: 16px; 
}

.lines{
  height: 1px;
  background-color:  #ebebe4; 
  width: 75%; 
  margin-left:12rem; 
}
.info{
   margin-left:12rem; 
}
</style>
