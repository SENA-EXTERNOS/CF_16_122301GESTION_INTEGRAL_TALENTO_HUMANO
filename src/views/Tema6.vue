<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad social integral

    .row.justify-content-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
          .blq1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6-1.png')})`}")
          .bloque-texto-g__texto.p-4.animacion
            p El Sistema de Seguridad Social Integral (SSSI), tiene por objeto garantizar los derechos irrenunciables de la persona y la comunidad para tener una calidad de vida acorde con la dignidad humana, mediante la protección de las contingencias que la afecten. El Sistema comprende las obligaciones del Estado, la sociedad, las organizaciones y los recursos destinados a garantizar la cobertura de las prestaciones de carácter económico, de salud, servicios complementarios u otras que se incorporen normativamente en el futuro.

    .row.justify-content-center.mt-5
      .bgp-degradado.p-1(data-aos="fade-right").mb-5
        h4(data-aos="fade-down").mb-0 Definición
      .col-lg-2(data-aos="flip-left").mb-3
        img(src='@/assets/curso/temas/tema6/t6-2.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p Según la ley 100 de 1993 establece que el Sistema de Seguridad Social Integral “es el conjunto de instituciones, normas y procedimientos, de que disponen la persona y la comunidad para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica, de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad”.

    .row.justify-content-center.mt-5
      .bgp-degradado.p-1(data-aos="fade-right").mb-5
        h4(data-aos="fade-down").mb-0 Caracteristicas
      
      p El Sistema General de Riesgos Profesionales establecido en el decreto 1295, este forma parte del SSSI y es el conjunto de entidades públicas y privadas, normas y procedimientos, destinados a prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan. A continuación, encontrará las principales características de este sistema:

    .row.justify-content-center.mt-5
      .col-lg-7
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema6/t6-3.png', alt='Texto que describa la imagen')

          .tarjeta.estilo-cajon.p-3(x="58%" y="4%" numero="+")
            p Es dirigido, orientado, controlado y vigilado por el Estado.
            p Los órganos de gobierno del Sistema General de Riesgos Laborales son los responsables de la afiliación al sistema y de su administración.
          
          .tarjeta.estilo-cajon.p-3(x="21%" y="12%" numero="+")
            p Todos los empresarios deben cumplir con el Sistema General de Riesgos Laborales.
            p La afiliación para empleados dependientes es obligatoria para todos los empleadores.

          .tarjeta.estilo-cajon.p-3(x="8%" y="40%" numero="+")
            p El empleador que no inscriba a sus trabajadores en el Sistema General de Riesgos Profesionales, además de las sanciones legales, será responsable de las prestaciones que se otorgan en este decreto.
            p El empleador es libre e independiente en la elección de las autoridades que administran el sistema.

          .tarjeta.estilo-cajon.p-3(x="11%" y="79%" numero="+")
            p Los empleados relacionados tienen derecho al reconocimiento y pago de las prestaciones previstas en esta orden.
            p Las cotizaciones al sistema general de riesgos laborales son responsabilidad de los empresarios.

          .tarjeta.estilo-cajon.p-3(x="42%" y="97%" numero="+")
            p La relación laboral implica la obligación de pagar las contribuciones previstas en este reglamento.

          .tarjeta.estilo-cajon.p-3(x="76%" y="88%" numero="+")
            p Los empleadores y trabajadores que pertenezcan a la Caja de Seguro Social para los riesgos de ATEP, o cualquier otra pensión, seguro social o caja están sujetos sin interrupción al Sistema General de Riesgos Laborales establecido por este decreto a partir de la fecha de entrada en vigencia. 

          .tarjeta.estilo-cajon.p-3(x="98%" y="55%" numero="+")
            p La cobertura del sistema comienza el día calendario posterior al registro. 

    .row.justify-content-center.mt-5
      .col-lg-9.mt-3
        .cajon.color-acento-contenido1.p-4
          p Es fundamental recordar que los empresarios sólo pueden contratar seguros de responsabilidad profesional para todos sus trabajadores con una única entidad gestora de riesgos, y sin perjuicio de las facultades que estas entidades gestoras tienen para contratar con otras entidades en caso de ser necesario.

    .row.justify-content-center.mt-5
      .bgp-degradado.p-1(data-aos="fade-right").mb-5
        h4(data-aos="fade-down").mb-0 Sistemas y operadores de pago
      .col-lg-2(data-aos="flip-left").mb-3
        img(src='@/assets/curso/temas/tema6/t6-4.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p Los operadores PILA en Colombia son conocidos como operadores de información y se encargan de facilitar los pagos de seguridad social y aportes parafiscales. Están dirigidos a empresas, trabajadores, independientes, entidades oficiales y pensionados para que puedan registrar los aportes al sistema de seguridad social integral sin costo alguno y en un solo pago.

    .row.justify-content-center.mt-3
      .col-lg-11
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
          .blq2.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/t6-5.png')})`}")
          .tema6.bloque-texto-g__texto.p-3
            p De acuerdo con el Ministerio de Salud y Protección Social, los sistemas operadores de pago autorizados son los siguientes:
            br
            .col-lg-10
              .row.justify-content-center
                .col-lg-2
                .col-lg-5
                  ul.lista-ul.ps-3
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | SOI
                    br
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | Mi planilla
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | Aportes en línea
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | Asopagos
                .col-lg-5
                  ul.lista-ul.ps-3
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | Fedecajas
                    br
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | Simple
                    li.mb-0
                      i.fas.fa-angle-right.vineta-morada
                      | Arus (Enlace operativo).
                                        


</template>

<script>
export default {
  name: 'Tema6',
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
