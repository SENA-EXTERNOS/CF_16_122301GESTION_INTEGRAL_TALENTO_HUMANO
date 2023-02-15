<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Documentos soporte

    .row.justify-content-center.mt-3
      .col-lg-11
        .bloque-texto-g.color-primario.p-1.p-sm-4.p-md-5
          .blq3.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema7/t7-1.png')})`}")
          .bloque-texto-g__texto.p-4
            p Este documento tiene la finalidad de acreditar la demanda de un bien o servicio, se debe generar por el comprador cuando hace transacciones con un proveedor que no está obligado a expedir factura de venta o documento equivalente. Este se debe expedir por medio de un escrito que contenga numeración autorizada por la Dian; en el caso de que la empresa o la prestadora del servicio no estén obligados a emitir facturación. 

    .row.justify-content-center.mt-5
      p Dicho documento debe cumplir con los siguientes requisitos:
      .col-lg-9.mt-3
        .cajon.color-acento-contenido1.p-4
            .row.justify-content-center
              .col-lg-6
                ul.lista-ul.ps-5
                  li 
                    i.fas.fa-angle-right.vineta-morada
                    | Denominarse como documento soporte.
                  li 
                    i.fas.fa-angle-right.vineta-morada
                    | Fecha de operación.
                  li 
                    i.fas.fa-angle-right.vineta-morada
                    | Nombre, apellido o razón social y NIT de la empresa que presta el servicio, al igual que los datos del comprador o el demandante del servicio.
              .col-lg-6
                ul.lista-ul.ps-5
                  li 
                    i.fas.fa-angle-right.vineta-morada
                    | Contener una numeración consecutiva.
                  li 
                    i.fas.fa-angle-right.vineta-morada
                    | Especificar los bienes o productos adquiridos.
                  li 
                    i.fas.fa-angle-right.vineta-morada
                    | Describir el valor de la operación realizada.  

      p.mt-5 Es importante tener en cuenta que si el proveedor, es decir la empresa, no está obligada a emitir documento soporte, la DIAN ajustó  el sistema informativo de numeración para que los que no emitan facturas puedan tener unos rangos de numeración de los documentos soporte.

    .row.justify-content-center.mt-5
      .bgp-degradado.p-1(data-aos="fade-right").mb-5
        h4(data-aos="fade-down").mb-0 Definición y características
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema7/t7-2.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p Los documentos soporte son los que se generan durante el vínculo contractual o la relación laboral identificando los pagos que se realizan a los trabajadores o a las entidades en las cuales se encuentra afiliados y por lo tanto se deben conservar.
      
      p Entre las características que deben tener los documentos soporte, están:

    .row.justify-content-center.align-items-center.mb-5.mt-5.animacion
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/tema7/img1.svg", alt="alt")

    .row.justify-content-center.mt-5
      .bgp-degradado.p-1(data-aos="fade-right").mb-3
        h4(data-aos="fade-down").mb-0 Clasificación, vigencia, conservación de los soportes
      //.col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema7/t7-4.svg', alt='Texto que describa la imagen')
      //.col-lg-10
        p Los documentos soporte son los que se generan durante el vínculo contractual o la relación laboral identificando los pagos que se realizan a los trabajadores o a las entidades en las cuales se encuentra afiliados y por lo tanto se deben conservar.

      p Como documentos soporte se pueden mencionar los siguientes:

    .col-lg-10
      .row.justify-content-center
        .col-lg-6
          ul.lista-ul.ps-5
            li 
              i.fas.fa-angle-right.vineta-morada
              | Comprobantes de nómina según se establezca el periodo de pago en el contrato.
            li 
              i.fas.fa-angle-right.vineta-morada
              | Aportes a la administradora de cesantías.
            li 
              i.fas.fa-angle-right.vineta-morada
              | Aportes voluntarios a pensión.
            li 
              i.fas.fa-angle-right.vineta-morada
              | Pagos de seguridad social (salud, pensión, caja de compensación, ARL, entre otros).         
        .col-lg-6
          ul.lista-ul.ps-5
            li 
              i.fas.fa-angle-right.vineta-morada
              | Pagos de cesantías realizados directos al trabajador.
            li 
              i.fas.fa-angle-right.vineta-morada
              | Copia de consignación o transferencias realizadas al trabajador.
            li 
              i.fas.fa-angle-right.vineta-morada
              | Certificados tributarios entregados al trabajador (declaración de ingresos y retenciones, entre otros).
            li 
              i.fas.fa-angle-right.vineta-morada
              | Relación de descuentos.
            li 
              i.fas.fa-angle-right.vineta-morada
              | Horas extras.
    .row.justify-content-center.mt-5
      p El Decreto 1072 de 2015, en su artículo 2.2.4.6.13, establece que los registros y documentos que soportan el SG-SST deben ser conservados durante 20 años a partir de que cese la relación laboral del trabajador con la empresa.

    .row.justify-content-center.mt-2
      p El siguiente artículo tiene como fin establecer la conservación de los documentos:
      p #[strong Artículo 2.2.4.6.13. Conservación de los documentos.] #[em El empleador debe conservar los registros y documentos que soportan el SG-SST de manera controlada, garantizando que sean legibles, fácilmente identificables y accesibles, protegidos contra daño, deterioro o pérdida…Los siguientes documentos y registros, deben ser conservados por un periodo mínimo de veinte (20) años, contados a partir del momento en que cese la relación laboral del trabajador con la empresa.]
      .col-lg-9.mt-3
        .cajon.color-acento-contenido1.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema7',
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
