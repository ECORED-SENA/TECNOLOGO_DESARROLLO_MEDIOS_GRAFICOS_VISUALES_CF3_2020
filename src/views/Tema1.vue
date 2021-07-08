<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //Muestras
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Definición y principios de comunicación visual
    p.mb-5 Podemos encontrar varias definiciones de la comunicación visual, estas son más relevantes: 
    .row.mb-5 
      .col-lg-6 
        .recuadro-adorno.p-4.mb-5
          p Se define como el arte de transmitir ideas o información con imágenes, símbolos o signos, pero también va más allá y ofrece nuevas experiencias. 
        .recuadro-adorno2.p-4
          p Para Munari (1985) la comunicación visual es todo lo que ven nuestros ojos, una flor, una nube, una bandera, un dibujo etc. Toda imagen que tiene un valor según su contexto. Dado que se le está otorgando valor comunicativo a lo que puede percibirse con la vista, se debe aclarar que algunos mensajes serían casuales y otros intencionales; la comunicación visual casual, es la que no tiene intención alguna, esta es temporal y puede ser percibida o interpretada libremente por el receptor, dándole un significado científico o estético; por su parte la comunicación visual intencional es recibida en pleno significado con una intención del emisor, si bien la intencionalidad no libra al receptor de realizar interpretaciones. 
      .col-lg-6 
        figure.mb-5
          img(src="@/assets/curso/img2.svg", alt="Texto que describa la imagen")
    p.mb-5 Los mensajes intencionales pueden ser vistos desde dos aspectos: 
    .row.mb-5
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla.h-100
            .p-4
              p 
                b La información estética: 
                |líneas armónicas, relaciones volumétricas, construcciones tridimensionales, entre otras.
      .col-lg-1
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla.h-100
            .p-4
              p 
                b La información práctica: 
                |dibujo técnico, una fotografía, las noticias, una señal.
    p.mb-5 La comunicación visual pretende conseguir una respuesta, al igual que ocurre con la comunicación verbal o escrita. Y como ocurre con el lenguaje, también la comunicación visual se subdivide, en el lenguaje basado en la imagen y en los textos, llamado lenguaje bimedia (icónico y tipográficos), donde el lenguaje gráfico da lugar a ramificaciones técnicas como el lenguaje del color, signos funcionales, entre otros.
      br
      br
      | De acuerdo con los principios y funciones de la comunicación visual, en el proceso comunicativo se reconocen:
    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img5.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario.border-none.w-100
            .p-4
              h2.mt-4.text-center Emisor 
              p.text-center Persona u objeto que crea el mensaje, lo codifica en un sistema de símbolos que comparte, debe ser claro para ser entendido. 
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color--azul.border-none.w-100
            .p-4
              h2.mt-4.text-center Mensaje
              p.text-center Conjunto de signos, símbolos o señales como objeto de una comunicación.
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img7.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario.border-none.w-100
            .p-4
              h2.mt-4.text-center Canal
              p.text-center Medio empleado por el emisor, con el mínimo de errores para que el mensaje sea efectivo y objetivo.
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.border-none.w-100
            .p-4
              h2.mt-4.text-center Receptor
              p.text-center Quien recibe el mensaje, debe conocer los signos con el objetivo de comunicar el mensaje. Es activo cuando decodifica, y reproduce, también reelabora el mensaje y le puede añadir su experiencia, opiniones y cultura (Santos, 2012).
    p.mb-5 La comunicación visual, comprende todos los medios expresivos de las artes visuales y permiten a los artistas la creación de las formas en sus composiciones mediante la utilización de diferentes técnicas, materiales, e implementos, sobre una variedad de soportes, que le permitirán manifestar sus ideas, emociones, sentimientos, experiencias, etc., y con ello provocar una reacción en el receptor del mensaje visual.
      br
      br
      |Por su parte, las obras artísticas se conectan con un tipo específico de lenguaje, el lenguaje visual son las artes visuales y permiten a los artistas la creación de las formas en sus composiciones mediante materiales, implementos y técnicas identificando propiedades y cualidades expresivas de las imágenes visuales. Cada elemento creador no es solo una forma, sino que se configuran una serie de relaciones que se crean entre todos los elementos visuales que la componen y las interrelaciones de estos elementos, como la figura con respecto al plano o al espacio o fondo.
    .row.justify-content-center.mb-5
      .col-lg-3.display-md-none
      .col-lg-6
          img(src='@/assets/curso/img9.jpg' alt='AvatarTop')
      .col-lg-3.align-self-end
        p.text-sm-center.text-lg-start Título de la obra: Summer
            br
            |Creador: Giuseppe Arcimboldo
            br
            |Fecha de creación: 1563
            br
            |Fuente: Google Arts & Culturez
    #t_1_1.titulo-segundo
      h2 1.1 Funciones de la comunicación visual
    p.mb-5 Se corresponden con las funciones generales de la comunicación, pero relacionadas directamente con los elementos que permiten la comunicación visual.
    .row.mb-5.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img10.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función expresiva o emotiva: 
          | uso de imágenes para transmitir emociones.
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img11.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función conativa, apelativa o exhortativa: 
          | función relacionada con la persuasión, cuyo objetivo es convencer, ejemplo la publicidad.
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img12.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función referencial o informativa:  
          | son imágenes cuyo objetivo es informar. Ejemplo la prensa, así como también en señales de tráfico. 
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img13.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función poética o estética: 
          | búsqueda de la belleza con sentido artístico y estético. 
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img14.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función fática: 
          | tiene como objetivo llamar la atención, connota algo. Ejemplo mensajes publicitarios.
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img15.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función metalingüística: 
          | función referente al código, para otorgarle un significado. El receptor descifra los códigos empleados para comprender la significación de la imagen.
      .col-lg-1.col-md-2.col-sm-3.col-xs-4.mb-3
          img(src='@/assets/curso/img16.svg' alt='AvatarTop')
      .col-lg-11.col-md-10.col-sm-9.col-xs-8.mb-3
        p
          b Función descriptiva: 
          | función de informar detallada y objetiva sobre lo representado. Ejemplo dibujos científicos, mapas, entre otros.
    #t_1_2.titulo-segundo
      h2 1.2. Imagen y sociedad
    p.mb-5 Tanto las artes visuales como la comunicación visual son consideradas fundamentales para el desarrollo de la capacidad del individuo de percibir e interpretar críticamente las formas y las imágenes del entorno del individuo. Todos los objetos, espacios y comunicaciones visuales van más allá de la utilidad comercial o de uso (Machuca, 2011).
    .row.mb-5 
      .col-lg-6
        figure.mb-5
          img.mb-2(src="@/assets/curso/img17.svg", alt="Texto que describa la imagen")
          figcaption Fuente: propia
      .col-lg-6
        p La utilización de la imagen en diferentes culturas implica una serie de intereses comunes definidos en los elementos gráficos y su significado, estos valores dependen del código y su contexto, de allí la importancia de conocer la realidad en que está inmersa una imagen, comprender las normas y signos utilizados donde el proceso de significación depende también de la asociación de ideas establecidas en una comunidad, esta se forja por los convencionalismos, condicionados por las circunstancias y lugares en que se producen.
    p.mb-5 Un claro ejemplo es el significado e interpretación dada a los colores de la bandera de Colombia.  
    .row.justify-content-center.mb-5 
      .col-lg-10
        .cuadro-hover.color--amarillo.px-5.py-5.d-flex.align-items-center.justify-content-center(@mouseover="mostrarIndicador=false")
          .indicador--hover(v-if="mostrarIndicador")
          .cuadro-hover__textos.text-center.mb-0
            h3 Amarillo
            p.mb-0
              b Representa la riqueza del suelo colombiano, así como el sol, fuente de luz, y la soberanía, la armonía y la justicia. 
        .cuadro-hover.color--azul2.px-5.d-flex.align-items-center.justify-content-center
          .cuadro-hover__textos.text-center.text-white
            h3 Azul
            p.mb-0
              b Representa el cielo que cubre la Patria, los ríos y los dos océanos que bañan el territorio colombiano.
        .cuadro-hover.color--rojo.px-5.d-flex.align-items-center.justify-content-center
          .cuadro-hover__textos.text-center.text-white
            h3 Rojo 
            p.mb-0
              b Representa la sangre vertida por los patriotas en los campos de batalla para conseguir la libertad, la que significa amor, poder, fuerza y progreso.
    #t_1_3.titulo-segundo
      h2 1.3 El mensaje visual y su descomposición
    p.mb-5 El mensaje visual se descompone en soporte visual que, a su vez, debe tener módulo, textura, estructura, movimiento y forma; y la otra parte es la información, la cual lleva consigo el mensaje.
    figure.mb-5
      img.mb-2(src="@/assets/curso/img18.svg", alt="Texto que describa la imagen")
    p.mb-5 Para Munari (1985), los mensajes visuales actúan sobre los sentidos, ya sean sonoros, térmicos, dinámicos entre otros. De allí que el emisor emite mensajes y el receptor los recibe, pero el receptor está inmerso en un ambiente con interferencias, las cuales pueden alterar o anular dicho mensaje.
    .row.mb-5 
      .col-lg-6 
        figure.mb-5
          img.mb-2(src="@/assets/curso/img19.svg", alt="Texto que describa la imagen")
      .col-lg-6 
        p Estos filtros son: 
        p 
          b Sensorial:  
          |son las características físicas que el receptor tiene y que le permitirán recibir el mensaje. Cómo problemas de visión, impedimento físico, entre otros.
        p 
          b Operativo: 
          | son las características constitucionales del receptor, es decir como la edad, el género, el contexto de desarrollo, las diferentes situaciones que enfrenta.
        p 
          b Filtro cultural:  
          | permite el paso de aquello que el receptor reconoce, están relacionados con la religión, filosofía, valores y creencias. Pues cada individuo tiene diferentes sistemas de creencias que determinarán si el mensaje llega a impactan positiva o negativamente.
    p.mb-5 Como sabemos el mensaje se compone de: módulo, estructura, movimiento, forma y textura. De la cual se componen todos los elementos que se encuentran en nuestro alrededor, tal como lo muestra la siguiente imagen: 
      br
      br
      |Identificación de los elementos que comunican en un elemento.
    .row.mb-5.justify-content-center
      .col-lg-8 
        figure.mb-5
          img.mb-2(src="@/assets/curso/img20.svg", alt="Texto que describa la imagen")
    p.mb-5 Según Dondis (2017) en el proceso de comunicación nos expresamos y recibimos 
      b mensajes visuales en 3 niveles:
    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img22.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img21.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario.border-none.w-100
            .p-4
              h2.text-center Representacionalmente 
              p.text-center Lo que se ve y se reconoce del entorno y la experiencia.
      
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img24.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img21.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.border-none.w-100
            .p-4
              h2.text-center Abstractamente  
              p.text-center Cualidad cenestésica de un hecho visual reducido a sus componentes visuales y elementales del mensaje.
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img23.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img21.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario.border-none.w-100
            .p-4
              h2.text-center Simbólicamente 
              p.text-center El universo de sistemas de símbolos codificados creados por el hombre arbitrariamente, a los que se les asigna significado.
    SlyderB.mb-5(:datos="datosSlyder1")
    .row.mb-5
      .col-lg-5
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img30.svg' alt='AvatarTop')
          .tarjeta.tarjeta--naranja.d-flex
            .p-4.my-auto
              h3 Línea punto y formas:
              p da origen a múltiples elementos.
      .col-lg-1
      .col-lg-5
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img31.svg' alt='AvatarTop')
          .tarjeta.tarjeta--naranja.d-flex
            .p-4.my-auto
              h3 El color:
              p el valor del color en el lenguaje social representa y se asocia con muchos significados, establecidos por convenciones culturales y sociales, que determinan la asignación de colores.
    .row.mb-5
      .col-lg-5
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img32.svg' alt='AvatarTop')
          .tarjeta.tarjeta--naranja.d-flex
            .p-4.my-auto
              h3 Tipografía: 
              p aportan a la construcción del mensaje de manera escrita junto con la identidad. 


      .col-lg-1
      .col-lg-5
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--naranja.d-flex
            .p-4.my-auto
              h3 Espacio:
              p su manejo en equilibrio o alteración facilitan la comunicación, que junto con la tipografía y la imagen pueden comprimir o aumentar el aire en la composición. 
    #t_1_4.titulo-segundo
      h2 1.4 Análisis y percepción de la imagen
    .row.mb-5
      .col-lg-6
        p Los ojos realizan su función fotorreceptora y el cerebro está continuamente interpretando información, de allí que es necesario que el mensaje visual intencional destaque frente a todos los demás mensajes. De esta manera, la percepción se define como el ejercicio de asimilar el entorno a través de los sentidos, recurriendo a la experiencia para dar significado a lo observado. Pero algunas veces esta percepción es un engaño, hacemos referencia a las imágenes que son creadas con ilusiones ópticas, las cuales son interpretaciones del cerebro generadas por ciertos efectos en la percepción, en la cual las imágenes son percibidas como errores o interpretación contraria a la misma lógica. Estas distorsiones suelen ser en el color, la perspectiva, formas, o mezclas entre estas; lo que permite explotar recursos gráficos convirtiéndose en medios de construcción de ideas, conceptos e imágenes novedosas y desafiantes para el lector. 
          br
          br
          |Observe como la imagen parece tener movimiento por sí sola.
      .col-lg-6
        figure.mb-5
          img.mb-2(src="@/assets/curso/img34.jpg", alt="Texto que describa la imagen")
    .row.mb-5
      .col-lg-6
        p La semiótica de la imagen es el estudio del signo icónico y los procesos de significación o dación de sentido (dar sentido a algo) a partir de una imagen. El estudio de las imágenes y las comunicaciones visuales es muy amplio y va más allá de lo pictórico o visual; como lo son el análisis de color, forma, iconos y composición, entre otros, ciertamente las imágenes hacen y deben ser parte de la cultura; de ahí la importancia de reflexionar cómo se construyen en los procesos de comunicación visual.
          br
          br
          |En la semiótica visual, se puede identificar tres áreas:  
        ol.lista-ol--cuadro.lista-ol
          li 
            .lista-ol--cuadro__vineta.mb-3
              span a
            | La semiótica de la imagen estática (imágenes icónicas, indíciales, simbólicas, estéticas).
 
          li 
            .lista-ol--cuadro__vineta.mb-3
              span b
            |  La semiótica de la imagen dinámica (lenguaje braille, la mímica, la radio).
  
          li 
            .lista-ol--cuadro__vineta.mb-3
              span c
            | Una semiótica visual, relacionado con el espacio (arquitectura, arte).
      .col-lg-6
        figure.mb-5
          img.mb-2(src="@/assets/curso/img35.jpg", alt="Texto que describa la imagen")
    p.mb-5 La articulación de los códigos visuales pasa por tres componentes o niveles:
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mb-2(src="@/assets/curso/img36.svg", alt="Texto que describa la imagen")
    figure.mb-5
      img.mb-2(src="@/assets/curso/img37.jpg", alt="Texto que describa la imagen")
    p.mb-5 Para Karam (2006) la retórica de la imagen se refiere a la efectividad y a la naturaleza persuasiva del lenguaje. Estos pueden darse en la publicidad, la prensa o cualquier otro medio donde el lector atribuya valores de verdad y confianza. 
      br
      br
      |En ella se diferencian tipos de análisis, las figuras o tropos o usos figurados, casi imaginativos o comparativos del lenguaje. Las figuras retóricas son los tipos de modificaciones hechas al lenguaje para proporcionar variedad, fuerza y belleza para transmitir el mensaje con contundencia. Entre sus funciones están el reforzar un mensaje, transmitir emociones, destacar un tema, generar una reflexión, causar asombro, etc.
    .titulo-sexto.color-acento-contenido
      h5 Figura retórica
    SlyderB.mb-5(:datos="datosSlyder2")












</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
    datosSlyder1: [
      {
        titulo: 'La representación: ',
        texto:
          'experiencia visual compartida por todos los individuos de una misma cultura, obtenida en diversos niveles de experiencia.',
        imagen: require('@/assets/curso/img25.jpg'),
      },
      {
        titulo: 'El efecto realista:',
        texto:
          'dado por la experiencia desde el punto de vista de otra persona, como un boceto, una fotografía. El mensaje puede modificarse de manera subjetiva. ',
        imagen: require('@/assets/curso/img26.jpg'),
      },
      {
        titulo: 'La realidad: ',
        texto:
          'expresada por pintores o artistas junto con la inspiración y los métodos',
        imagen: require('@/assets/curso/img27.jpg'),
      },
      {
        titulo: 'La fotografía:',
        texto:
          'medio de representación de la realidad visual mediante la técnica, es el registro visual que se pretende representar lo más fiel posible a la realidad.',
        imagen: require('@/assets/curso/img28.jpg'),
      },
      {
        titulo: 'Simbolismo:',
        texto:
          'la abstracción de símbolos con la intención de transmitir un mensaje efectivo con cierta cantidad de información.',
        imagen: require('@/assets/curso/img29.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Alusión',
        texto:
          'Referencia corta e informal de una persona, evento, lugar o situación reconocida, sin mencionarla directamente.<br><br><b><i>En esta imagen hace alusión a la muerte.</i></b>',
        imagen: require('@/assets/curso/img38.jpg'),
      },
      {
        titulo: 'Antítesis',
        texto:
          'Oposición o contraste de palabras o ideas, contrarias o complementarias.<br><br><b><i>"Un pequeño paso para el hombre, un gran paso para la humanidad". <br>Neil Armstrong.</i></b>',
        imagen: require('@/assets/curso/img39.jpg'),
      },
      {
        titulo: 'Clímax',
        texto:
          'Dar orden a las palabras, fragmentos u oraciones de forma ascendente de acuerdo con su nivel de importancia. <br> <br>Añade dramatismo al discurso ya que suele explotar la sensación o emoción positiva o negativa alcanzado su punto máximo.',
        imagen: require('@/assets/curso/img40.jpg'),
      },
      {
        titulo: 'Epifonema',
        texto:
          'Afirmación contundente al final de la exposición de una idea, en forma de exclamación, que sirve de resumen, siendo breve y preciso.<br><br><b><i> "Porque ese cielo azul que todos vemos, pues ni es cielo, ni es azul”. <br> Hermanos Argensola.</i></b>',
        imagen: require('@/assets/curso/img41.jpg'),
      },
      {
        titulo: 'Epíteto',
        texto:
          'Expresa cualidades al sustantivo que todos pueden distinguir, o evidenciar; limitándose a describirlo o a definirlo, resaltando algunas de sus características.<br><br><b><i>Tomate rojo.</i></b>',
        imagen: require('@/assets/curso/img42.jpg'),
      },
      {
        titulo: 'Eufemismo',
        texto:
          'Sustitución de una imagen o palabra que expresa algo desagradable u ofensivo, para ser cambiada por una menos negativa.<br><br> En las imágenes se suelen realizar efectos para no ser tan evidente la expresión.',
        imagen: require('@/assets/curso/img43.jpg'),
      },
      {
        titulo: 'Disfemismo',
        texto:
          'Sustitución de una palabra o imagen con expresión neutral o positiva por una de connotaciones negativas.<br><br>Los elementos pueden ser cambiados o no ser tan evidentes.',
        imagen: require('@/assets/curso/img44.jpg'),
      },
      {
        titulo: 'Hipérbole',
        texto:
          'Exageración de un término o una idea utilizada para transmitir una actitud.<br><br> Denota cantidad, tamaño, entre otras; que generalmente distorsiona la realidad.<br><br><b><i>Me estoy muriendo de hambre.</i></b>',
        imagen: require('@/assets/curso/img45.jpg'),
      },
      {
        titulo: 'Ironía ',
        texto:
          'Afirmación de un hecho aparente con el propósito de expresar la intención opuesta. ',
        imagen: require('@/assets/curso/img46.jpg'),
      },
      {
        titulo: 'Oxímoron',
        texto:
          'Presentar dos términos o expresiones contrarias o incoherentes juntas.<br><br><b><i>Los muertos vivientes.</i></b>',
        imagen: require('@/assets/curso/img47.jpg'),
      },
      {
        titulo: 'Paradoja',
        texto:
          'Unión de dos ideas opuestas y contradictorias, que parecen no tener sentido, pero que implícitamente incluyen una idea válida.<br><br><b><i>El tiempo es relativo.</i></b>',
        imagen: require('@/assets/curso/img48.jpg'),
      },
      {
        titulo: 'Perífrasis',
        texto:
          'Referirse a un concepto o idea sin hacer referencia a este directamente utilizando otras palabras para describirlo e inferir aquello que se pretende comunicar.<br><br><b><i>El supremo creador del cielo y de la tierra, para decir: Dios.</i></b>',
        imagen: require('@/assets/curso/img49.jpg'),
      },
      {
        titulo: 'Personificación',
        texto:
          'Atribuir a objetos inanimados o animales cualidades humanas, acciones o elementos de personalidad.<br><br><b><i>Personajes, superhéroes.</i></b>',
        imagen: require('@/assets/curso/img50.jpg'),
      },
      {
        titulo: 'Reticencia',
        texto:
          'Presentar una información incompleta, con el objetivo de insinuar algo.',
        imagen: require('@/assets/curso/img51.jpg'),
      },
      {
        titulo: 'Metáfora',
        texto:
          'Comparación implícita de dos términos a partir de la semejanza de sus significados estableciendo una relación.<br><br><b><i>El sueño eterno. (La muerte).</i></b>',
        imagen: require('@/assets/curso/img52.jpg'),
      },
      {
        titulo: 'Alegoría',
        texto:
          'Metáfora extendida o sucesión de metáforas para expresar una idea. La alegoría pertenece al grupo de figuras de los tropos.<br><br><b><i>¿Por qué este inquieto abrasador deseo?</i></b>',
        imagen: require('@/assets/curso/img53.jpg'),
      },
      {
        titulo: 'Antonomasia',
        texto:
          'Expresión reconocida comúnmente que hace referencia a un nombre propio.<br><br><b><i>Ciudad de la Luz, para nombrar a París.</i></b>',
        imagen: require('@/assets/curso/img54.jpg'),
      },
      {
        titulo: 'Metonimia',
        texto:
          'Reemplazar el nombre de un elemento por otro con el que se relaciona, o existe una relación de dependencia, causa – efecto.',
        imagen: require('@/assets/curso/img55.jpg'),
      },
      {
        titulo: 'Símil',
        texto:
          'Comparación explícita a partir del uso de un elemento no literal, sino con semejanza de sus características con las de otro que no tiene una relación aparente. ',
        imagen: require('@/assets/curso/img56.jpg'),
      },
      {
        titulo: 'Sinécdoque',
        texto:
          'Utilizar todo para representar una parte o viceversa.<br><br><b><i>Tersa como fresa.</i></b>',
        imagen: require('@/assets/curso/img57.jpg'),
      },
      {
        titulo: 'Concatenación',
        texto:
          'Repetición de palabras en cadena, que guardan una relación entre si, para crear una secuencia o conjunto.',
        imagen: require('@/assets/curso/img58.jpg'),
      },
      {
        titulo: 'Asíndeton ',
        texto:
          'Omisión de conjunciones, se eliminan las relaciones para hacerlas más cortas y fácil de leer.',
        imagen: require('@/assets/curso/img59.jpg'),
      },
      {
        titulo: 'Hipérbaton ',
        texto:
          'Alteración del orden lógico de la oración.<br><br><b><i>Pura leche.</i></b>',
        imagen: require('@/assets/curso/img60.jpg'),
      },
    ],
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

<style lang="sass" scoped></style>
