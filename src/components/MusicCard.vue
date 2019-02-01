<template>
    <article class="music-card">

    <figure>
      <img :src="song.album.cover">
    </figure>
    <div>

    <h4>{{song.title}}</h4>
    <i>{{song.artist.name}}</i>
    <i>{{song.album.title}}</i>
    <figure>
      <audio controls :src="song.preview"></audio> 
    </figure>
    <button type="submit" class="btn"> <font-awesome-icon icon="heart"/> Favoris </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "MusicCard",
  props: ["song"]
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

.btn{
  background-color: rgb(255, 124, 129);
  color: white;
  border-radius: 5px; 
  margin-left: 10px; 
  border-color:  rgb(255, 124, 129); 
  padding: 7px; 
  font-size: 16px; 
}
.btn:hover{
  background-color: rgb(219, 109, 112);
  color: white;
  border-radius: 5px; 
  margin-left: 10px; 
  border-color: rgb(219, 109, 112); 
  padding: 7px; 
  font-size: 16px; 
}
</style>
