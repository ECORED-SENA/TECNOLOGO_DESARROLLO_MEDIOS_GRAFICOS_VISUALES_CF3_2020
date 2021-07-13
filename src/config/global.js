export default {
  global: {
    componenteFormativo: 'Comunicación visual',
    descripcionCurso:
      'La comunicación visual, como disciplina de las ciencias humanas y sociales, unida a las vertientes tecnológicas y sociales, es considerada la vía para llegar al público de una manera directa, su atención se centra en las imágenes antes que las palabras, de allí «una imagen vale más que mil palabras».<br><br>En un mundo donde la imagen domina nuestra manera de percibir la realidad que nos rodea, el aprendiz será partícipe de procesos de creación de imágenes al comprender su estructura, funcionamiento, y características, bajo los conceptos de estética e información, percepción y decodificación; demás reconocerá elementos intrínsecos y extrínsecos involucrados en la creación de contenidos visualmente atractivos, que facilitan procesos de comunicación efectivos, éticos y estéticos, pertinentes a las necesidades empresariales y sociales propias de la industria creativa y cultural.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Definición y principios de comunicación visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funciones de la comunicación visual',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Imagen y sociedad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'El mensaje visual y su descomposición',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Análisis y percepción de la imagen',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Semiótica, retórica y sintaxis de la imagen',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propiedad intelectual y derechos de autor ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Copyright y propiedad intelectual',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Derechos de autor',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición y fundamentos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Teoría aditiva y sustractiva',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Psicología y armonías de color',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bocetación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición y tipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas, la bitácora y recursos gráficos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (28 de enero de 1982). Ley Nº 23 de 1982. Sobre los derechos de autor.',
      link:
        'http://propiedadintelectual.unal.edu.co/fileadmin/recursos/innovacion/docs/normatividad_pi/ley23_1982.pdf',
    },
    {
      referencia:
        'Díaz, C. (2019). Lenguaje visual, principios y caso de estudio Aena.  Social media PYMES. ',
      link: 'http://www.socialmediapymes.com/lenguaje-visual/',
    },
    {
      referencia:
        'Dirección Nacional de Derechos de Autor. (s.f.). Preguntas frecuentes, en derechodeautor. ',
      link: 'http://derechodeautor.gov.co:8080/preguntas-frecuentes',
    },
    {
      referencia:
        'Dondis, D. (2017). La sintaxis de la imagen introducción al alfabeto visual.',
      link:
        'https://ggili.com.mx/media/catalog/product/9/7/9788425229299_inside.pdf',
    },
    {
      referencia:
        'Hurtado, M. (s.f.). Qué tipos de bocetos se utilizan en diseño gráfico. ',
      link:
        'https://foroalfa.org/articulos/que-tipos-de-bocetos-se-utilizan-en-diseno-grafico',
    },
    {
      referencia: 'Karam, T. (2006). Introducción a la semiótica de la imagen.',
      link:
        'https://incom.uab.cat/portalcom/wp-content/uploads/2020/01/23_esp.pdf ',
    },
    {
      referencia:
        'La comisión del acuerdo de Cartagena. (17 de diciembre de 1993). Decisión 351 de 1993. Régimen común sobre derechos de autor y derechos conexos.',
      link: 'http://derechodeautor.gov.co:8080/decision-andina',
    },
    {
      referencia:
        'Machuca, L. (2011). Actas de diseño Nº11.Universidad de Palermo.',
      link:
        'https://fido.palermo.edu/servicios_dyc/publicacionesdc/vista/detalle_articulo.php?id_libro=339&id_articulo=7596',
    },
    {
      referencia:
        'Munari, B. (1985). Diseño y comunicación visual. Editorial GG.',
    },
    {
      referencia:
        'Pozo, R. (2001). Glosario técnico de la industria gráfica. Presentación colección proyectos gráficos.',
      link: 'https://issuu.com/graficsants/docs/glosario_industria_gr__fica',
    },
    {
      referencia:
        'Rivera, F. (1985). Teoría del color módulo 2. Servicio Nacional de Aprendizaje – SENA. Cenigraf. ',
    },
    {
      referencia:
        'Salinas, R. (1994). La armonía en el color nuevas tendencias. ',
      link:
        'https://politecnicometro.edu.co/biblioteca/produccionydg/La%20Armon%C3%ADa%20en%20el%20Color%20-%20Nuevas%20Tendencias%20%28Rosario%20Salinas%29.pdf',
    },
    {
      referencia:
        'Santos, D. (2012). Fundamentos de la comunicación. Red tercer milenio. ',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/comunicacion/Fundamentos_de_comunicacion.pdf',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2017). Reporte sobre la información en materia de propiedad intelectual en Colombia.',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Proteccion_Competencia/Estudios_Economicos/Documentos_elaborados_Grupo_Estudios_Economicos/Reporte-informacion-en-materia-de-Propiedad-Intelectual-en-Colombia.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Boceto',
      significado:
        'bosquejo para el diseñador y/o cliente que muestra la disposición de los elementos de un diseño.',
    },
    {
      termino: 'Color primario',
      significado:
        'color base usado para componer otros colores. En impresión son el cyan, magenta y amarillo. ',
    },
    {
      termino: 'Color secundario',
      significado:
        'color obtenido por la mezcla de dos colores primarios. Si bien se les conoce como colorantes primarios, C, M, y Y son los colores secundarios de la luz. rojo + verde = amarillo.',
    },
    {
      termino: 'Línea ',
      significado:
        'sucesión de letras separadas por espacios que forman palabras. Trazo hecho con una regla recta y un tiralíneas.',
    },
    {
      termino: 'Magenta',
      significado:
        'el pigmento base utilizado en la selección de colores. También se llama rojo básico.',
    },
    {
      termino: 'Ojo ',
      significado:
        'el ojo del tipo es lo que se ve de la letra impresa. Es la altura y la anchura real de la letra, su perfil, el contraste de blanco y negro dentro y fuera de ella. Ojo, en el sistema de impresión tipográfica, es la parte que está en relieve y que deja huella en el papel (Pozo, 2001).',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diana Patricia Cufiño Parra',
        cargo: 'Instructora',
        centro:
          'Regional Distrito Capital. Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Jorge Enrique Villafradez Peña',
        cargo: 'Instructor',
        centro:
          'Regional Distrito Capital. Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y Evaluadora Instruccional ',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
