<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      p Se abordarán los conceptos básicos del análisis de la normativa en nómina y seguridad social.
      p.mt-3 Dando a conocer lo relacionado con los sistemas de información y tipos de sistemas, prestaciones sociales, pagos laborales que se realizan en la empresa, concepto de nómina y la seguridad social. 
      p.mt-3 En el siguiente mapa conceptual podemos encontrar los elementos claves que conforman el componente formativo:

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5.animacion2
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
