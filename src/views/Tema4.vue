<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Pagos laborales

    .row.justify-content-center.mb-3
      .col-lg-4.justify-content-center(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema4/t4-1.png', alt='Texto que describa la imagen')
      .col-lg-8.col-xs-6.mt-2.animacion
        p Las compañías, además de las prestaciones sociales, deben estar al tanto de los valores representados en dinero que reciben todos los empleados por parte de la organización a la que le realizan ciertas funciones y cumplen con las responsabilidades contractuales, denominados pagos laborales. La empresa contratante está obligada a pagar a sus empleados ciertas disposiciones de la ley, las cuales contienen varias disposiciones especiales. Es importante aclarar que un empleador es una persona física o jurídica que crea puestos de trabajo para los empleados bajo su supervisión y gestión y, por lo general, los vincula a un contrato de trabajo.
        .cajon.color-acento-contenido1.p-4
          p Lo anterior evita la creación de una relación laboral en la que las partes, es decir, el empleador y el trabajador, se comprometen a cumplir varios requisitos. Respecto del primero, está esencialmente obligado a pagar al trabajador una remuneración mensual por la prestación de los servicios además de los demás pagos que señale la ley. Los patrones que no cumplan con sus obligaciones están sujetos a severas sanciones por parte de los órganos judiciales y administrativos que garantizan los derechos de los trabajadores.
        p.mt-3 Entre las que se deben tener en cuenta están las herramientas necesarias para hacer el trabajo, pago de seguros sociales,  prestaciones sociales y la asistencia de transporte. Además de lo anterior, el empleador debe realizar los pagos convenidos mediante convenciones colectivas o acuerdos con los trabajadores.
      p.mt-3 En el siguiente video encontrará los costos laborales más importantes que se deben pagar al trabajador.

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

    .row.justify-content-center.mt-4
      .bgp-degradado.p-1(data-aos="fade-right").mb-4
        h4(data-aos="fade-down").mb-0 Aprendices SENA

      .col-lg-2(data-aos="flip-left").mb-3
        img(src='@/assets/curso/temas/tema4/t4-2.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p Los aprendices SENA también están regidos por las normas laborales nacionales, por esto, las empresas deben informar el número de empleados para calcular el número de aprendices. Este aviso debe darse dentro de los primeros diez días de enero y julio, o marzo y septiembre. El viático pagado en la etapa de implementación corresponde a 75.1 L del SMLMV. Ley 789 de 2002 establece que, si la tasa de desempleo es igual o superior al 10 %, el viático se paga 75 L de SMLMV; sin embargo, el pago de aportes al régimen de Seguridad Social se calculará sobre la base de un (1) SMLMV.

      .row.justify-content-center.mt-3
        .col-lg-10
          .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
            .blq1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-3.png')})`}")
            .bloque-texto-g__texto.p-4
              p Es de aclarar que la Unidad de Gestión Previsional y Parafiscal (UGPP), es la institución pública que controla el correcto pago de los impuestos y cotizaciones a la seguridad social, teniendo en cuenta la base de pago sobre la cual las empresas deben realizar los aportes correspondientes.

</template>

<script>
export default {
  name: 'Tema4',
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
