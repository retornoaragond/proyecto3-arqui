<script setup>
const route = useRoute()
const { data: album, refresh } =
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Albums/${route.params._slug}`)
refresh()
const sanitizeHtml = (html) => {
  if (process.client) { // Verifica si se está ejecutando en el cliente
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  } else {
    return html; // En el servidor, simplemente devuelve el HTML sin cambios
  }

};
</script>

<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="column image-column">
        <img class="album-image" :src="`https://cms-una.000webhostapp.com/storage/uploads${album.image.path}`"
          alt="Portada del álbum">
      </div>
      <div class="column info-column">
        <h4>{{ album.title }}</h4>
        Compositor: <NuxtLink :to="'/composers/' + album.composerId._id">{{ album.Composer }}</NuxtLink><br>
        <b>Año de lanzamiento:</b> {{ album.release_year }}; <br><b>Género:</b> {{ album.genres }}; <br> <b>Sello
          discográfico:</b> {{
            album.record_label }}<br>
        Número de pistas: {{ album.tracks }}<br><br>
        <b>Descripción</b><br>
        <div v-html="sanitizeHtml(album.description)"></div>
        <p>Película asociada: <NuxtLink :to="'/movies/' + album.movieId._id">{{ album.Movie }}</NuxtLink>
        </p>
        <button class="snipcart-add-item mt-4 bg-white border 
            border-gray-200 d hover:shadow-lg text-gray-700 
            font-semibold py-2 px-4 rounded shadow" :data-item-id="album.id" :data-item-price="album.price"
          :data-item-description="sanitizeHtml(album.description)"
          :data-item-image="`https://cms-una.000webhostapp.com/storage/uploads${album.image.path}`"
          :data-item-name="album.title">
          🛒 Comprame!
        </button>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<style scoped>
.project-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}

h4 {
  margin-top: 15px;
}

.row {
  display: flex;
}

.column {
  flex: 1;
  padding: 20px;
}

.image-column {
  max-width: 400px;
}

.album-image {
  max-width: 100%;
  height: auto;
  max-height: 400px;
}
</style>
