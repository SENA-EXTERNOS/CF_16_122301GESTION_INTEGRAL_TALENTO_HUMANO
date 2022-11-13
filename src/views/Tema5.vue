<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normativa nómina y seguridad social

    .bkg-t5
      .row.justify-content-center.mt-3
        .col-lg-10
          .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
            .blq1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/t5-1.png')})`}").animacion
            .bloque-texto-g__texto.p-4
              p La #[strong nómina] son los pagos llamados sueldos, salarios o remuneración a los empleados de una organización. Se pueden realizar quincenal o mensualmente, incluyendo las bonificaciones y las deducciones. La nómina, en contabilidad, es el pago que se hace a los trabajadores por el desempeño de sus funciones en un tiempo determinado
              br
              br
              p La #[strong seguridad social] es el derecho que tiene el trabajador en cuanto a salud, pensión, riesgos labores y caja de compensación. Está establecido por los regímenes generales (ver Tablas 1 y 2):

      .row.justify-content-around.align-items-center.mt-5
        .col-lg-8(data-aos="zoom-in-down")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Paralelo entre accidentes e incidentes partiendo de unas situaciones particulares
          
          .tabla-a.color-primario.mt-5
            table
              thead.text-center
                tr
                  th.color-tabla-transparente 
                  th.color-tabla Empleador/a
                  th.color-tabla Trabajador/a
                  th.color-tabla Total
              tbody
                tr
                  td Pensiones
                  td.text-center 12%
                  td.text-center 4%
                  td.text-center 16%
                tr
                  td Salud
                  td.text-center 8,5%
                  td.text-center 4%
                  td.text-center 12,5%
                tr
                  td Riesgos laborales-Nivel I
                  td.text-center 0,5%
                  td.text-center 
                  td.text-center 0,5%
                tr
                  td Cajas de Compensación
                  td.text-center 4%
                  td.text-center 
                  td.text-center 4%
                tr
                  td #[strong Total]
                  td.text-center 25%
                  td.text-center 8%
                  td.text-center 33%

      .row.justify-content-around.align-items-center.mt-5
        .col-lg-5(data-aos="zoom-in-up")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2.
            span Clases de riesgos laborales
          
          .tabla-a.color-primario.mt-5
            table
              thead.text-center
                tr
                  th.color-tabla Clase de Riesgo
                  th.color-tabla Tarifa
              tbody
                tr
                  td.text-center I
                  td.text-center 0,522%
                tr
                  td.text-center II
                  td.text-center 1,044%
                tr
                  td.text-center III
                  td.text-center 2,436%
                tr
                  td.text-center IV
                  td.text-center 4,350%
                tr
                  td.text-center V
                  td.text-center 6,960%                                                                        

      .row.justify-content-center.mb-3.mt-5
        .col-lg-8.col-xs-6.mt-2
          p En las organizaciones, para ejecutar el proceso de elaboración de la nómina, es primordial contar con un #[em software] que genere la liquidación de los pagos tanto a los empleados como los porcentajes a seguridad social y aportes parafiscales. Además, es importante aclarar que la Dirección de Impuestos y Aduanas Nacionales (DIAN), notifica unos plazos para la implementación de la nómina electrónica y las empresas además de efectuar los pagos, deben enviar los soportes electrónicos cada mes a esta entidad. Es indispensable que todas las personas y empresas que requieran deducir sus costos de nómina del impuesto sobre la renta y complementarios cumplan con los compromisos de emitir la nómina electrónica.
        .col-lg-4.justify-content-center
          figure
            img(src='@/assets/curso/temas/tema5/t5-2.png', alt='Texto que describa la imagen')

      .row.justify-content-center.mt-5
        .bgp-degradado.p-1(data-aos="fade-right").mb-5
          h4(data-aos="fade-down").mb-0 Leyes, decretos, resoluciones

        .col-lg-2(data-aos="flip-left").mb-3
          img(src='@/assets/curso/temas/tema5/t5-3.png', alt='Texto que describa la imagen')
        .col-lg-10
          p Los decretos son actos administrativos y están dentro de lo que compete a los líderes de los poderes ejecutivos. Generalmente los mandatarios usan un decreto para hacer nombramientos y regulaciones de leyes. Según el artículo 150 de la Constitución Política de Colombia “es el congreso al que le corresponde hacer las leyes, en un marco democrático y social. Existen tres poderes públicos: el ejecutivo, judicial y legislativo; este último pertenece al Congreso de la República”.

      .row.justify-content-center.mt-3
        .col-lg-10
          .cajon.color-acento-contenido1.p-4
            p En Colombia existen tres tipos de leyes reguladas por la Constitución, que son las estatutarias, orgánicas y ordinarias. Se pueden considerar las leyes estatutarias como las más importantes, ya que son los derechos primordiales para la convivencia, entre ellas se encuentran el derecho a la salud, al #[em habeas corpus], al #[em habeas data], entre otros. Además, estas leyes se debaten durante más tiempo y deben ser revisadas por la Corte Constitucional, debido a su complejidad y efecto en el entorno, antes de ser sancionadas, a diferencia de las leyes ordinarias y orgánicas que no poseen dicho trámite.

    .row.justify-content-center.mt-5
      p Es importante conocer los conceptos pertinentes a la normatividad encontrada en las leyes, artículos o decretos expedidos por la ley; además, es de aclarar que las organizaciones están regidas por el Código Sustantivo del Trabajo y tiene como fin lograr la justicia en las relaciones que surgen entre empleadores y trabajadores.
      p Ahora, es necesario dar un pequeño vistazo a dos leyes específicas:
    
    .row.justify-content-center.mt-5
      .col-lg-11
        .row
          .col-lg-4
              img(src='@/assets/curso/temas/tema5/t5-4.png', alt='Texto que describa la imagen')         
          .col-lg-8.mt-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ley 789 de 2012")
                .col-12.ps-5
                  p.mb-0 En la Ley 789 de 2012 se encuentran los procesos establecidos en el código sustantivo de trabajo; dictando normas para el empleo y la ampliación de la protección social.
              .row(titulo="Ley 100 de 1993")
                .col-12.ps-5
                  p.mb-0 Ley 100 de 1993 establece la regulación al sistema de seguridad social en Colombia; cumpliendo de esta manera con los requisitos correspondientes al pago de aportes correspondientes a salud, pensión y ARL, de esta manera evitar generar sanciones con la Unidad de Gestión Previsional y Parafiscal.
   

</template>

<script>
export default {
  name: 'Tema5',
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
