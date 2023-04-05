<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-3
      .col-lg-4.justify-content-center(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/int-i1.png', alt='Texto que describa la imagen')
      .col-lg-8.col-xs-6.mt-2
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán los conceptos básicos del análisis de la normativa en nómina y seguridad social. Para conocer este componente es importante que el aprendiz tenga claridad en el concepto de normatividad, quién la emite, cuáles son los responsables de la obligación, y para qué es importante este concepto en la organización.
        .cajon.color-acento-contenido1.p-4
          p Se ahondará en los conceptos fundamentales para la nómina, entendidos como: novedades, sistemas de información, prestaciones sociales, pagos laborales, seguridad social integral, normativa en nómina, seguridad social y documentación soporte; con el objetivo de contribuir, cuando se encuentre ejerciendo su aprendizaje en el ámbito laboral, a que la organización tenga una buena rentabilidad y que las operaciones realizadas funcionen dentro del marco de la normativa emitida.
      p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ePwq6PIQaXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
