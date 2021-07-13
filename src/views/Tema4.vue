<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Bocetación
    .row.mb-5
      .col-lg-6 
        p Pese a todo lo antes mencionado, el ejercicio creativo no está sujeto a prerrequisitos y salvo que exista una solicitud muy específica en la documentación inicial de un proyecto, no se preconcibe la figura literaria o el discurso detrás de una obra con anterioridad a su creación. Los recursos existen y al conocerlos y entenderlos podemos acercarlos a nuestro estilo y crear algo que comunique y cuya intención eventualmente sea objeto de análisis. Pero finalmente para crear hay que hacer y practicar. La bocetación es un ejercicio creativo clave e impostergable, de los primeros y más importantes pasos previos del diseño.
      .col-lg-6 
        figure.mb-5 
          img(src='@/assets/curso/img112.jpg', alt='Texto que describa la imagen')
    #t_4_1.titulo-segundo
      h2 4.1 Definición y tipos
    p.mb-5 El boceto es una práctica gráfica para bosquejar ideas y plasmarlas visualmente como parte del proceso creativo. Es una ilustración rápida y sin detalles ni acabados. El boceto es una herramienta práctica empleada en muchos medios creativos incluyendo obviamente, el diseño, pero también en la arquitectura, diseño industrial y de modas, animación y naturalmente, arte e ilustración.
      br
      br
      |Algunas características que el boceto tiene y con las que debe cumplir para que su labor sea exitosa incluyen.
    .row.mb-5
      .col-lg-6.mb-3 
        .tarjeta--botones2.d-flex.h-100
          img(src='@/assets/curso/img113.svg', alt='Texto que describa la imagen' style='height:118px')
          .tarjeta__textos.p-2
            p.mb-0 Estar acompañados de apuntes o anotaciones, las ideas tienden a desvanecerse, así que, a pesar de la simpleza del dibujo, es importante tomar nota de los detalles.
      .col-lg-6.mb-3 
        .tarjeta--botones2.d-flex
          img(src='@/assets/curso/img113.svg', alt='Texto que describa la imagen' style='height:118px')
          .tarjeta__textos.p-2
            p Se debe elaborar rápidamente, si la elaboración del boceto lleva varias horas o días, el concepto de boceto no está claro. Es un ejercicio de algunos minutos y se debe realizar relajadamente.
      .col-lg-6.mb-3 
        .tarjeta--botones2.d-flex.h-100
          img(src='@/assets/curso/img113.svg', alt='Texto que describa la imagen' style='height:118px')
          .tarjeta__textos.p-2
            p.mb-0 Debe ser representativo, eso quiere decir que no es necesario desgastarse en detalles. Se recomienda el uso de formas simples.
      .col-lg-6.mb-3 
        .tarjeta--botones2.d-flex
          img(src='@/assets/curso/img113.svg', alt='Texto que describa la imagen' style='height:118px')
          .tarjeta__textos.p-2
            p El boceto nunca se trabaja a tamaño final, siempre debe ser una representación a escala del proyecto a realizar.
    p.mb-5 En cuanto a los tipos, estos pueden ser:   
    SlyderD.mb-5(:datos="datosSlyder")
    p.mb-5 Finalmente, existen algunos niveles en el desarrollo de los bocetos, para una misma idea, un boceto burdo, el semi-completo y el dummy (Hurtado, s.f.).
    #t_4_2.titulo-segundo
      h2 4.2 Técnicas, la bitácora y recursos gráficos
    p.mb-5 Los principios que rigen la creación de bocetos son los mismos que rigen el dibujo, con la ventaja de que no es indispensable prestar tanta atención al detalle.
    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/img119.svg' alt='AvatarTop' style='height: 180px')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario.w-100
            .p-4.mt-5
              h2.text-center Líneas y trazos 
              p.text-center Pueden ser rectas o curvas, continuas o discontinuas y de diferente calibre o grosor según la herramienta empleada o la presión ejercida.
      
      .col-md-3.col-lg.mb-5.mb-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/img120.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario.w-100
            .p-4.mt-5
              h2.text-center Construcción espacial 
              p.text-center El uso de líneas horizontales, verticales y diagonales da lugar a la construcción de formas y la relación de dichas formas da como resultado la generación de relaciones espaciales.
      .col-md-3.col-lg.mb-5.mb-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/img121.svg' alt='AvatarTop ' style='height: 180px')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones.w-100
            .p-4.mt-5
              h2.text-center Planos, luz y contorno  
              p.text-center La bocetación permite, mediante el uso de sombras, simular el efecto de la luz sobre las superficies de las formas dibujadas. La práctica permite influir en la percepción y transmitir la sensación de contorno volumétrico.
    .row.mb-5
      .col-lg-5
        figure.mb-5 
          img(src='@/assets/curso/img122.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        h3 La bitácora
        p Tanto en los procesos de formación como el más experto profesional, lleva o debería llevar una bitácora o libro de apuntes dedicado a la elaboración de bocetos. Estos apuntes y dibujos rápidos son la diferencia entre un proyecto con bases firmes y la improvisación.
    .row.mb-5
      .col-lg-5
        figure.mb-5 
          img(src='@/assets/curso/img123.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        h3 Recursos gráficos
        p Lo mejor de la bocetación es que es un recurso creativo de bajo costo. Cualquier superficie es válida para rayar, si bien es más recomendable una libreta o cuaderno que permita la conservación y protección del material. Es más importante y valiosa la capacidad de observación, un entorno tranquilo y consumir material gráfico. La creatividad necesita nutrirse para poder crecer y sobresalir.
















</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Dibujo espontáneo',
        texto:
          'Se raya aleatoriamente sin tener nada específico en mente, luego se <b>“busca”</b> entre las líneas la posible figura a trabajar.',
        imagen: require('@/assets/curso/img114.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Boceto-mini',
        texto:
          'Ya se ha dicho que un boceto debe estar a escala, sin embargo, en este tipo de boceto se hace más pequeño para disminuir los detalles.',
        imagen: require('@/assets/curso/img115.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Boceto quemado',
        texto:
          'Se rellena la forma para evaluar la contraforma, esto permite evaluar la legibilidad y el uso del espacio.',
        imagen: require('@/assets/curso/img116.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Boceto de contorno',
        texto:
          'El nombre lo explica, sólo se dibujan los contornos con mínimos detalles, es ideal para la construcción de escenas grandes.',
        imagen: require('@/assets/curso/img117.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Experimentación de mancha',
        texto:
          'Similar al dibujo espontáneo, pero se utilizan áreas de tinta o alguna aguada y de allí se extraen las ideas.',
        imagen: require('@/assets/curso/img118.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
