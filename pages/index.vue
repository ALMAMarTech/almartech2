<template>
  <div v-if="prismicData.data" class="container"  :style="{ backgroundImage: 'url(' + prismicData.data.background_image.url + ')' }">
    <div class="contenedor-texto">
      <div class="texto">
        <prismic-rich-text :field="prismicData.data.title_text" />
        <prismic-rich-text style="font-size: 20px;" :field="prismicData.data.text_test" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prismicData: {}
    };
  },
  mounted() {
    this.$prismic.api.getByUID('index', 'index').then(response => {
      console.log('Respuesta de Prismic:', response);
      this.prismicData = response;
    }).catch(error => {
      console.error('Error al obtener datos de Prismic', error);
    });
  }
};
</script>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  /* background: #000 url('../media/mundo-empresarial.jpg'); */
  background-size: cover;
  background-attachment: fixed;
  height: 100vh; 
  overflow: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.contenedor-texto {
  width: 800px;
}

.texto {
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  text-align: center;
  padding: 20px 60px;
  color: white; 
  text-align: justify;
}
</style>
