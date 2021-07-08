<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La comunicación parte de la base del ejercicio comunicativo influenciado por el contexto, la sociedad y la tecnología, donde se transmiten ideas e información en una variedad de formas y elementos. De allí que la comunicación visual, contempla la organización, jerarquización de ideas mediante textos e imágenes que contienen el mensaje, estos tienen el poder de informar o persuadir a una persona o audiencia. 
      br
      br
      | Al terminar esta unidad usted estará en capacidad de diseñar elementos de comunicación visual aplicando procedimientos, herramientas, técnicas, principios y elementos para la producción e investigación de mensajes visuales cautivadores y permanentes, entendido el objeto de diseño como el elemento que comunica, pues estamos acostumbrados a interpretar no sólo sonidos y símbolos escritos (hablar, leer y escribir), sino también los signos no verbales, las señas, todo lo que podemos percibir a través de los sentidos; resultando de vital importancia el conocer los elementos, relaciones y el poder de las imágenes, palabras, sonidos y demás elementos que permitan recibir y comunicar ideas o emociones.
      br
      br
      |Elementos que intervienen en la comunicación: 
    .row.justify-content-center
      .col-lg-8
        figure.mb-5
          img(src="@/assets/curso/img1.svg", alt="Texto que describa la imagen")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
