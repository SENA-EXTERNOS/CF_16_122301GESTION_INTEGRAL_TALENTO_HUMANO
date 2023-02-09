<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Novedades

    .bkg-t1      
      .row.justify-content-center.mb-3
        .col-lg-4.justify-content-center.animacion
          figure
            img(src='@/assets/curso/temas/tema1/t1-1.png', alt='Texto que describa la imagen')
        .col-lg-8.col-xs-6.mt-2
          .cajon.color-acento-contenido2.p-4
            p Es necesario iniciar abordando las novedades de nómina, estas son los reportes que detallan y especifican cualquier hecho de remuneración de los trabajadores. Este informe especifica la información de los pagos que se realizan a los empleados como las vacaciones, licencias, sindicatos, seguros, préstamos, entre otros.
          p.mt-5 Otras novedades a destacar son las emitidas por el #[strong Ministerio de Salud en el decreto 127 de 2022 del 29 de julio de 2022], que consta de la validez de las incapacidades de origen común y el reconocimiento y pago de las licencias de maternidad y paternidad. En este decreto se fijan plazos únicos para la revisión y liquidación de las solicitudes de reconocimiento de prestaciones económicas las cuales constan de quince días hábiles, y para el pago de estas al aportante se considera un plazo de cinco días hábiles; estableciendo el pago mediante transferencia electrónica.
        p.mt-5 A continuación, se describen las principales novedades de seguridad social descritas en la norma del Ministerio de Salud bajo el decreto 1427 de 2022:
   
      .row.justify-content-center.mt-5
        .col-lg-10
          .row
            .col-lg-9
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="Ámbito de aplicación")
                  .col-12.ps-5
                    p.mb-0 El Decreto debe ser implementado por las instituciones de promoción de la salud, los prestadores de servicios de salud, los empleadores cotizantes, los afiliados cotizantes, el administrador financiero del sistema general de seguridad social en el ámbito de la salud (ADRES) y el departamento de administración de pensiones y contribuciones parafiscales.
                .row(titulo="Licencia de maternidad")
                  .col-12.ps-5
                    p.mb-0 Para pagar las prestaciones económicas y reconocer el embarazo durante el parto, se requiere documento de afiliación, que consta la inscripción al régimen general del seguro social en salud como cotizante, cotizar durante los meses correspondientes al período de embarazo, certificado de licencia de maternidad. Esta última se reconoce con la condición de que se pague su monto total después del inicio de la licencia.
                .row(titulo="Licencia de paternidad")
                  .col-12.ps-5
                    p.mb-0 Debe tomarse dentro de los 30 días siguientes al nacimiento o custodia oficial del menor adoptado. Se debe presentar ante la entidad promotora de salud, el registro civil o el acta donde conste su entrega oficial, en un tiempo no mayor al mencionado anteriormente.

                    p.mb-0.mt-2 Para reconocer el permiso de paternidad y el pago, el cotizante debe registrar los aportes en los meses correspondientes al período de gestación de la madre, de lo contrario habrá lugar al reconocimiento de la licencia de paternidad siempre y cuando, a la fecha del parto, se haya pagado la totalidad de las cotizaciones adeudadas con los respectivos intereses de mora.
                    
                .row(titulo="Incapacidad de origen común")
                  .col-12.ps-5
                    p.mb-0 Para reconocer y pagar la incapacidad general de trabajo es necesario acreditar:
                    ul.lista-ul.mt-3
                      li 
                        i.fas.fa-angle-right.vineta-verde
                        | Pertenecer al Régimen General del seguro social de salud como cotizante; al menos 4 semanas inmediatamente anteriores a la incapacidad para el trabajo.
                      li 
                        i.fas.fa-angle-right.vineta-verde
                        | Cotizar al Régimen General de la Seguridad Social en el Servicio de Salud y presentar un certificado de incapacidad para el trabajo de origen general emitido por un médico de la EPS.

                .row(titulo="Otras disposiciones")
                  .col-12.ps-5
                    p.mb-0 El decreto establece que la incapacidad de más de 540 días será reconocida y revisada periódicamente.                                                        
            .col-lg-3(data-aos="fade-left")
                img(src='@/assets/curso/temas/tema1/t1-2.png', alt='Texto que describa la imagen')

      .row.justify-content-center.mt-5
        .col-lg-2
          img(src='@/assets/curso/temas/tema1/t1-3.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p Es importante tener en cuenta que cuando hay un cambio en los datos en el contrato laboral de una persona se pueden presentar novedades de nómina, lo cual conlleva a un cambio en los pagos que se generan por el concepto de nómina.
        p.mt-3 A continuación, se mencionan seis tipos de novedades a tener en cuenta:

      .row.justify-content-center
        PasosA.color-primario.mb-2(tipo="l")
          .row
            .col-lg-8.mt-2
              h3 Cambio de salario
              p Es el cambio en el monto que recibe un empleado, por su labor desempeñada, este no tiene en cuenta el valor del auxilio de transporte. Este cambio repercute en los cambios de grupo y cotización.
            .col-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-4.png', alt='').img-pasosV

          .row.justify-content-right
            .col-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-5.png', alt='').img-pasosV
            .col-lg-8.texto-alineado1.mt-2
              h3 Cambio tipo de trabajador
              p Cambio de la clasificación del trabajador en la cotización a la seguridad social.

          .row
            .col-lg-8.mt-2
              h3 Cambio de alto riesgo de pensión
              p Este cambio se da cuando se compara la actividad desempeñada por el trabajador con la clasificación de los riesgos del decreto 2090 del 2003 y se concluye si es necesario un cambio de riesgo en la labor realizada.
            .col-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-6.png', alt='').img-pasosV
          
          .row.justify-content-right
            .col-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-7.png', alt='').img-pasosV
            .col-lg-8.texto-alineado1.mt-2
              h3 Cambio de salario integral
              p Cambio que el empleado tiene en su compensación. Esto dependerá del aumento salarial del año respectivo.
          .row
            .col-lg-8.mt-2
              h3 Cambio de ciudad o departamento
              p Es el cambio que el trabajador puede tener en el momento que se traslade a otra ciudad o departamento.
            .col-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-8.png', alt='').img-pasosV
          .row.justify-content-right
            .col-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-9.png', alt='').img-pasosV
            .col-lg-8.texto-alineado1.mt-2
              h3 Cambio de dirección
              p Es el cambio de dirección de residencia del trabajador.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
