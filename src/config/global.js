export default {
  global: {
    componenteFormativo:
      'Análisis de la normativa de la nómina y seguridad social',
    descripcionCurso:
      'En las organizaciones es fundamental conocer y analizar el concepto de nómina y los aspectos que la componen; esta se entiende como el registro donde se desglosa el salario de los empleados en bonificaciones y deducciones al realizar una labor dentro de la compañía. Su realización en las organizaciones está regulada a partir de la documentación, porcentajes, fórmulas y pagos establecidos según la norma.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/barra1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/barra2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/barra3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/barra4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/barra5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/barra6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Novedades',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de información ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Prestaciones sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pagos laborales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normativa nómina y seguridad social',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguridad social integral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Documentos soporte',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas de información',
      referencia:
        'Comunidad empresas (s. f). <em>¿Qué es y cuáles son los principales tipos de sistemas de información? Ce.</em>',
      tipo: 'Página web',
      link:
        'https://ce.entel.cl/pymes/articulos/principales-tipos-de-sistemas-de-informacion/',
    },
    {
      tema: 'Seguridad social integral',
      referencia:
        'Ministerio de Trabajo. (2021). <em>Normas fundamentales sistemas de seguridad social integral</em>. ',
      tipo: 'Página web',
      link:
        'https://www.mintrabajo.gov.co/normatividad/leyes-y-decretos-ley/normas-fundamentales-sistema-de-seguridad-social-integral',
    },
    {
      tema: 'Seguridad social integral',
      referencia: 'Suin juriscol. (1993). <em>Ley 100 de 1993</em>.',
      tipo: 'Página web',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1635955',
    },
    {
      tema: 'Seguridad social integral',
      referencia: 'Suin juriscol (1994). <em>Decreto 1295 de 1994</em>.',
      tipo: 'Página web',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1261244',
    },
    {
      tema: 'Planilla Integrada de Liquidación de Aportes',
      referencia:
        'Ministerio de salud y protección social. (s. f). <em>Contacto operadores PILA.</em>',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Paginas/contacto-operadores-pila.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Documentos',
      significado:
        'es la constancia escrita, ya sea de forma física o virtual, que plasma las características de un hecho o circunstancia.',
    },
    {
      termino: 'Nomina',
      significado:
        'documento en el que consta el sueldo que una persona recibe regularmente de una empresa y todas las operaciones relacionadas con este.',
    },
    {
      termino: 'Normativa',
      significado:
        'norma o conjunto de normas por las que se regula o se rige determinada materia o actividad.',
    },
    {
      termino: 'Novedades',
      significado:
        'reportes donde se detallan y especifican cualquier irregularidad del sueldo del empleado.',
    },
    {
      termino: 'Pagos',
      significado:
        'es toda aquella acción que realizamos para extinguir o cancelar una obligación.',
    },
    {
      termino: 'Parafiscales',
      significado:
        'aportes patronales obligatorios a las cajas de compensación familiar, ICBF y SENA.',
    },
    {
      termino: 'Prestaciones sociales',
      significado:
        'beneficios legales y salarios adicionales, estipulados en el contrato, que el empleador debe proporcionar a su trabajador.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'conjunto coordinado de instituciones públicas y privadas, reglas y procedimientos generales consiste en disposiciones generales.',
    },
    {
      termino: 'Sistemas de información',
      significado:
        'conjunto de componentes que interactúan entre sí con un fin común de administrar datos o información.',
    },
    {
      termino: 'Soporte',
      significado:
        'es algo, ya sea físico o simbólico, que sirve como sustento o evidencia de algo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de hacienda y crédito público. <em>(s.f). La Unidad de Pensiones y Parafiscales.</em>',
      link: 'https://www.ugpp.gov.co/',
    },
    {
      referencia:
        'Ministerio de salud y protección social. (s.f). <em>Afiliación en salud.</em>',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Paginas/afiliacion-en-salud.aspx',
    },
    {
      referencia:
        'Portafolio (2022). <em>Plazo para implementar la nómina electrónica.</em>',
      link:
        'https://www.portafolio.co/mas-contenido/nuevo-plazo-de-nomina-electronica-para-pequenas-empresas-562592',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
