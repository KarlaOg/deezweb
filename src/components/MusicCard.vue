<template>
    <article class="music-card">
    <figure>
      <img :src="song.album.cover">
    </figure>
    <div>
      <h4>{{song.title_short}}</h4>
      <i>{{song.artist.name}}</i>
      <button type="submit" class="btn"  @click.prevent="addMusic"> <font-awesome-icon icon="heart"/></button>
      <br>
      <i>{{song.album.title}}</i>
      <figure>
        <audio controls :src="song.preview"></audio> 
      </figure>
    </div>
  </article>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "MusicCard",
  props: ["song"],
  data() {
    return{
      musics: [], 
     
    }
  },
  // methods:{
  //   addMusic(){
  //     const favourite = localStorage.getItem('favourite')
  //     if(!favourite){
  //       favourite = JSON.parse(localStorage.getItem('favourite'));
  //       console.log(favourite);  
  //     }
  //   }
  
  // }

};
</script>


<style lang ="scss" scoped>
.music-card {
  margin: 2rem;
  display: inline-flex;
  align-items: stretch;
  overflow: auto;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;
}

.music-card > figure {
  text-align: center;
  display: flex;
  align-items: center;
}

.music-card > div {
  margin: 0.25em;
  font-size: 0.8em;
  line-height: 1.6em;
}
figure {
  margin: 0;
}

.btn {
  background-color: rgb(255, 124, 129);
  color: white;
  border-radius: 5px;
  margin-left: 10px;
  border-color: rgb(255, 124, 129);
  padding: 5px;
  font-size: 12px;
}
.btn:hover {
  background-color: rgb(219, 109, 112);
  color: white;
  border-radius: 5px;
  margin-left: 10px;
  border-color: rgb(219, 109, 112);
  padding: 5px;
  font-size: 12px;
}
.heart {
  text-align: center;
  display: flex;
  align-items: flex-end;
}
h4 {
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
