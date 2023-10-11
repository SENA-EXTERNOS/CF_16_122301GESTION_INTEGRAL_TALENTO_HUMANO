<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prestaciones sociales

    .bkg-t3
      .row.justify-content-center.mb-3(data-aos="flip-up")
        .col-lg-8.col-xs-6.mt-2
          p Seguido de los sistemas de información, es importante ahondar en el concepto de las prestaciones sociales, entendidas como la exclusividad que tienen las personas que están vinculadas a una empresa mediante un contrato de trabajo; es de aclarar que los empleados que están vinculados mediante la modalidad de contrato de servicios no pueden gozar de este beneficio. Estos rubros no están dentro del salario; por tanto, no forman parte de la base de cálculo de las contribuciones a la seguridad social, parafiscales y prestaciones sociales. Los beneficios sociales también incluyen pagos para cubrir los riesgos a los que un empleado puede estar expuesto en el desempeño de su trabajo como riesgos laborales, atención médica y pagos de pensiones.
        .col-lg-4.justify-content-center
          figure
            img(src='@/assets/curso/temas/tema3/t3-1.png', alt='Texto que describa la imagen')

      .row.justify-content-center.mt-5
        .col-lg-10
          .cajon.color-acento-contenido2.p-4
            p De acuerdo con el #[strong Código Sustantivo del Trabajo, el artículo 306], dispone que toda empresa debe pagar a cada empleado un salario mensual, del cual quince días se deben pagar por tardar el último día del mes de junio y los quince días restantes en los primeros 20 días del mes de diciembre. Además, el artículo 29 indica que todo empleador debe pagar un auxilio de cesantías, que corresponde a un mes de salario por cada año de servicios y proporcionalmente por fracción de año y el decreto 1072 del 2015 en el artículo 2.2.1.3.13. determina la consignación de cesantías y pago intereses de cesantías. Por último el artículo 186 habla de las vacaciones anuales remuneradas, y es de aclarar que el numeral uno indica que “los trabajadores que hubieren prestado sus servicios durante un año tienen derecho a quince (15) días hábiles consecutivos de vacaciones remuneradas”.
      
        p.mt-5 A continuación, conocerá más acerca de las prestaciones sociales:
        
      .row.justify-content-center.mt-5(data-aos="zoom-in")
        TabsC.color-acento-contenido
          .py-4.py-md-4(titulo="Definición")
            .row.p-4
              .col-md-8.mb-4.mb-md-0
                p Las prestaciones sociales son los beneficios que tienen los empleados, considerados pagos adicionales al salario que reciben en ciertas épocas del año por el desempeño que realizan en su puesto de trabajo. Se remunera de forma obligatoria por la empresa a los empleados y su principal objetivo es que el funcionario logre cubrir sus necesidades, además es una forma de reconocer el desempeño dentro de la organización.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema3/t3-2.png', alt='Texto que describa la imagen')

          .py-3.py-md-4(titulo="Beneficios o ventajas")
            .row.p-4
              .col-md-8.mb-4.mb-md-0
                p Como ventajas o beneficios en el pago de las prestaciones sociales se pueden destacar: el aumento de la productividad, porque el empleado se siente motivado en el desempeño de sus labores; mejoramiento de la imagen de la compañía, ya que genera confianza para futuro personal; además favorece la calidad de vida a los empleados.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema3/t3-3.png', alt='Texto que describa la imagen')     

          .py-3.py-md-4(titulo="Composición")
            .row.p-4
              .col-md-8.mb-4.mb-md-0
                p En las prestaciones sociales se encuentran la prima de servicios, cesantías, intereses a las cesantías y vacaciones.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema3/t3-4.png', alt='Texto que describa la imagen')        

      .row.justify-content-center.mt-5
        .bgp-degradado.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Bases, fórmulas y periodos de las prestaciones sociales       

      .row.justify-content-center.mt-5
        .col-lg-2(data-aos="flip-left").mb-3
          img(src='@/assets/curso/temas/tema3/t3-9.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p Desde el área de recursos humanos se debe tener claro la base, fórmula y periodos de pago de las prestaciones sociales que la empresa debe pagar de forma obligatoria a sus empleados. A continuación, se definen los porcentajes para cada prestación social según la ley:

        p.mt-5 El Código Sustantivo del Trabajo regula los porcentajes para cada prestación social. Para el año 2022 son los siguientes:

    .row.justify-content-center.mt-4
      TabsA.color-acento-contenido
        .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Prima de servicios")
          .row.p-4
            .col-xl-6
              p El bono de servicio está regulado por el artículo 306, este es pagado por el empleador al trabajador por participación en la producción de la utilidad de la organización y equivale a quince (15) días de salario por cada semestre, con un porcentaje del 8,33 %.
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right.vineta-verde
                  | Fórmula:<br>
                  | Prima = (salario base * días hábiles) / 360 dónde salario base = Salario de apoyo publicitario (si aplica) + promedio de horas extras.<br>
                  |- Promedio de horas extras = (valor por semestre / (días hábiles - días libres)) * 30
                     
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema3/t3-5.png', alt='Texto que describa la imagen')


        .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf4d1" titulo="Cesantías")
          .row.p-4
            .col-xl-6
              p Está regulado por el artículo 249, su objeto principal es otorgar al trabajador prestaciones por desempleo y corresponde al 8,33 %.
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right.vineta-verde
                  | Fórmula:<br>
                  | Cesantías = (salario base * días hábiles) /360 donde salario base = salario auxiliar de promoción (si está empleado) + promedio de horas extras.<br>
                  | - Promedio de horas extras = (valor por semestre / (días hábiles)) * 30).
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema3/t3-6.png', alt='Texto que describa la imagen')

        
        .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf4d1" titulo="Intereses a las cesantías")
          .row.p-4
            .col-xl-6
              p Regulado de conformidad con el artículo 1 de la Ley 52 de 1975, constituye el reconocimiento económico del empleador por el mantenimiento anual de un valor igual a la indemnización por despido. Es igual a 12% de la cuantía total anual del despido o en relación con la jornada laboral, y en caso de despido se da a más tardar 31 horas. 
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right.vineta-verde
                  | Fórmula: ((ingresos * 12 %) *(días hábiles/360)).
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema3/t3-7.png', alt='Texto que describa la imagen')


        .tarjeta.color-acento-contenido--borde.colorTab.p-3(style="background-color:#fdf4d1" titulo="Vacaciones")
          .row.p-4
            .col-xl-6
              p Están reguladas en el artículo 186, corresponden al tiempo de descanso retribuido que el empleador debe dar al trabajador. Equivale a quince (15) días de licencia pagada por cada año de trabajo o tiempo prorrateado a la proporción del trabajo realizado. Según el artículo 189 de la ley correspondiente, unas vacaciones de 50 euros se pueden pagar en efectivo. Su porcentaje corresponde al 4.17 % y su fórmula es: (días hábiles * 15) /360.
              p Dentro de las prestaciones sociales se tienen los aportes parafiscales, que son los aportes que las empresas hacen a entidades gubernamentales para el beneficio de la sociedad. Las entidades son SENA, ICBF y las cajas de compensación, su porcentaje es el siguiente:
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right.vineta-verde
                  | SENA: 2 %
                li 
                  i.fas.fa-angle-right.vineta-verde
                  | ICBF: 3 %
                li 
                  i.fas.fa-angle-right.vineta-verde
                  | Cajas de compensación: 4 %                                  
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema3/t3-8.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema3',
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
