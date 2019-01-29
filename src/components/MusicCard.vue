<template>
    <article class="music-card">
    <figure>
      <!--<img src="https://randomuser.me//portraits/women/64.jpg" alt="Marion West">-->
      <img :src="song.album.cover">
    </figure>
    <div>
   <h4>{{song.album.title}}</h4>

    <i>{{song.title}}</i>
    <i>{{song.artist.name}}</i>
    <figure>
      <audio controls :src="song.preview"></audio>
    </figure>
 
    </div>
  </article>
</template>

<script>
export default {
    name : "MusicCard",
    props:["song"], 

}
</script>


<style lang ="scss" scoped>
.music-card {
  display: inline-flex;
  align-items: stretch;
  box-shadow: 0 0 15px #c0c0c0;
  border-radius: 2px;
  background-color: #fafafa;
  overflow: auto;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;
}

.music-card > figure {
  margin: 0.25em;
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

</style>
