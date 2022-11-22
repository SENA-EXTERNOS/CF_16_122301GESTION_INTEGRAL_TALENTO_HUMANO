<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de información 

    .bkg-t2
      .row.justify-content-center(data-aos="flip-right")
        .col-lg-11
          .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
            .blq1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-1.png')})`}")
            .bloque-texto-g__texto.p-4
              p Para continuar, es necesario conocer acerca de los sistemas de información, los cuales son conjuntos de datos que se relacionan entre sí con el objetivo de administrar la información de forma fácil, rápida y segura; sirviendo de apoyo en los procesos que la empresa realiza. Están compuestos por una serie de recursos que están en interacción con el propósito de procesar información estadística, organizar archivos u obtener información personal. Dichos recursos pueden ser:

      .row.justify-content-center.mt-5
        .col-lg-9
          .cajon.color-acento-contenido1.p-4
            ul.lista-ul.ps-5
              li 
                i.fas.fa-angle-right.vineta-morada
                | Datos: información masiva que se necesita organizar.
              li 
                i.fas.fa-angle-right.vineta-morada
                | Actividades: información para procesar o pasos que se requieren para realizar una tarea o función.
              li 
                i.fas.fa-angle-right.vineta-morada
                | Recursos humanos: información del personal.
              li 
                i.fas.fa-angle-right.vineta-morada
                | Recursos informáticos: información que está basada en la tecnología.

      .row.justify-content-center.mt-5
        p Es importante distinguir entre un sistema de información y un sistema informático, ya que ambos tienen funciones diferentes, y no necesariamente los sistemas de información pasan por la informática.
        p.mt-3 El principal objetivo de un sistema de información es la gestión y administración de los datos que contiene la empresa. Una de las funciones principales es tener un fácil acceso a la información y que esta tenga seguridad; están compuestos por las siguientes fases: entrada, procesamiento, almacenamiento y salida de datos.
        p.mt-3 A continuación, se hace énfasis en las fases de un sistema de información:

      .row.justify-content-center.mt-5
        .col-lg-10
          .row
            .col-lg-4
              img(src='@/assets/curso/temas/tema2/t2-2.png', alt='Texto que describa la imagen')         
            .col-lg-8  
              LineaTiempoD.color-secundario
                .row(numero="1" titulo="Entrada")
                  p El funcionamiento de un sistema de información está basado en la entrada de la información, esta puede ser de manera automática o manual. Los datos en esta forma de funcionamiento son por códigos de barra, teclado, cajas registradoras, sistemas de voz, escáner, entre otros.
                .row(numero="2" titulo="Procesamiento")
                  p Cuando la información es registrada tiene una serie de acciones que se deben configurar con el fin de transformarla en datos y ser usada para la toma de decisiones, investigación y análisis; con el fin de tener una visión general del contenido resultante.
                .row(numero="3" titulo="Almacenamiento")
                  p Es el registro de la información en el sistema con el fin de acceder a ella cuando se requiera. Estos datos se guardan en discos duros tanto internos como externos o en CDs, cabe aclarar que este último medio de almacenamiento ya no está siendo incluido en los ordenadores actuales. 
                .row(numero="4" titulo="La salida de datos")
                  p Tiene como objetivo que el usuario pueda acceder a la información con el fin de utilizarla, para las funciones que requiera, por medio de impresoras, USB, sistemas de voz, entre otras.

      .row.justify-content-center.mt-5
        .col-lg-2
          img(src='@/assets/curso/temas/tema2/t2-3.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p Entre los sistemas de información dignos de mención se encuentran los de #[strong información de procesamiento de transacciones, información ejecutiva, información de gestión, soporte de decisiones, gestión de conocimiento, gestión de documentos, gestión de contenido, automatización de oficinas, planificación de recursos comerciales, información para expertos, toma de decisiones grupal e información en #[em marketing] y comunicación]. Los anteriores tipos se utilizan de acuerdo a la necesidad que tenga la organización como en el sector financiero, tecnológico, talento humano, área de materiales, departamentos administrativos, comunicaciones, área documental, planificación de recursos empresariales, toma de decisiones, información de expertos, entre otros.
        p.mt-3 A continuación, se explican los doce sistemas de información:

      .row.justify-content-center.mb-5
        .col-lg-10
          .row
            .col-lg-6.position-relative
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-4.png", alt="alt")
                  .col
                    h5 Sistemas de procesamiento de transacciones
                    p Es conocido como procesamiento electrónico de datos. Se utilizan en el entorno empresarial donde se recopilan datos y se genera información relacionada con ingresos, egresos, gastos, entre otros.
                .hr--line             
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-5.png", alt="alt")
                  .col
                    h5 Sistemas de información ejecutiva
                    p El objetivo de este tipo de sistema es apoyar la planeación estratégica de la empresa. Contribuye a que la información interna y externa de la compañía sea ágil y rápida.
                .hr--line                 
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-6.png", alt="alt")
                  .col
                    h5 Sistemas de información gerencial
                    p Este tipo de sistema de información apoya a la toma de decisiones realizando un análisis de datos en las áreas de talento humano, #[em marketing], logística, financiera, entre otras.
                .hr--line 
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-7.png", alt="alt")
                  .col
                    h5 Sistemas de soporte de decisiones
                    p Este tipo de sistema contribuye a que los directivos de las compañías puedan tomar decisiones para dar solución a problemas específicos donde se maneja el procesamiento de datos de la organización.
                .hr--line           
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-8.png", alt="alt")
                  .col
                    h5 Sistema de gestión del conocimiento
                    p Este sistema se utiliza para tener una comunicación veraz y clara entre los integrantes de la empresa. Aquí se recopila la producción, conservación y divulgación de la información.
                .hr--line                  
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-9.png", alt="alt")
                  .col
                    h5 Sistema de gestión documental
                    p En este sistema se organiza la información en carpetas y por categorías logrando que la búsqueda sea muy sencilla. En este método se guarda una alta cantidad de documentación y su fin es brindar facilidad y seguridad.
                .hr2--line
            .col-lg-6.position-relative
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-10.png", alt="alt")
                  .col.mb-3
                    h5 Sistema de gestión de contenidos
                    p.mb-4 En este tipo de sistema se maneja en la elaboración, organización y difusión de la información, y se implementa en sitios donde se maneja el diseño web.
                .hr--line            
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-11.png", alt="alt")
                  .col
                    h5 Sistema de automatización de oficinas
                    p Entre las actividades diarias ejecutadas de manera diaria en las oficinas están el comunicarse con los clientes internos y externos o utilizar documentación de un departamento a otro.
                .hr--line                  
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-12.png", alt="alt")
                  .col
                    h6.mb-3 Sistema de planificación de recursos empresariales
                    p.mb-3 Su finalidad es acceder a los datos en los distintos departamentos de la empresa para mejorar los procesos y funciones innecesarias; así tener un mejor aprovechamiento del tiempo en las actividades.
                .hr--line 
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-13.png", alt="alt")
                  .col.mb-4
                    h5 Sistema administrativo
                    p.mb-3 Se basa en proporcionar información relevante para la empresa, ya que con esta se puede tomar decisiones y llevar a cabo la planificación de acciones. 
                .hr--line            
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-14.png", alt="alt")
                  .col.mb-4
                    h5 Sistema para la toma de decisiones en grupo
                    p Su finalidad es compartir la información con el objetivo de que cada área de la empresa pueda realizar sus actividades de manera colaborativa.
                .hr--line                
              .py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema2/t2-15.png", alt="alt")
                  .col
                    h5 Sistema de información para expertos
                    p Pretende compartir datos con expertos para que puedan valorar la información entregada y de esta forma contribuir con el análisis, valoración y generación de correctos lineamientos dentro de cada área.


</template>

<script>
export default {
  name: 'Tema2',
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
