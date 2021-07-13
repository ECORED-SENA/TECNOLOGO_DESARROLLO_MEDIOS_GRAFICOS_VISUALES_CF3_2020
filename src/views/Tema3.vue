om<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Teoría del color
    figure.mb-5
      img(src='@/assets/curso/img74.jpg', alt='Texto que describa la imagen')
    p.mb-5 El color es un atributo físico de la materia y un atributo que interpreta el cerebro de la información percibida por la vista que constituye una contradicción del sistema sensorial ya que en realidad el ojo percibe las ondas electromagnéticas que los objetos no absorben. La luz incide sobre un objeto y las frecuencias de onda comunes son absorbidas por éste mientras que las demás se reflejan. Sin embargo, dado que el marco de referencia de nuestro conocimiento es la percepción, no conviene profundizar demasiado en el fenómeno filosófico de la composición de la materia.
    #t_3_1.titulo-segundo
      h2 3.1 Definición y fundamentos
    p.mb-5 La teoría (o teorías) del color es un esfuerzo continuado por guiar y comprender la relación entre los colores y la manera de ordenarlos para su uso (mezcla) en el arte, el diseño y la ciencia. La aplicación de la teoría del color debe llevar a la elaboración de piezas estéticamente funcionales y armoniosas en su percepción. Basta tener presente, a nivel conceptual que la vista percibe la luz y que la luz blanca es la sumatoria de todas las frecuencias de onda del espectro visible, lo que significa que la luz transporta el color y la materia descompone, por decirlo de alguna manera, la luz y esa información es la que nuestros ojos y cerebro decodifica.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color--naranja-claro.p-4(titulo="Tabla de Kirchner ").p-4
        .row
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/img75.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 La tabla de Kirchner (1671) 
            p Presenta un modelo bidimensional con una línea que grada del blanco al negro pasando por el amarillo, el rojo y el azul. Unos arcos semicirculares dan paso a las combinaciones de color.
      .tarjeta.color--naranja-claro.p-4(titulo="Esfera de colores de Runge ").p-4
        .row
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/img76.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 La esfera de colores de Runge (1810)
            p Es un modelo tridimensional en el cual ubicamos el blanco y negro en los polos, los colores claros están en la capa externa del hemisferio superior y en el inferior, los oscuros. El ecuador contiene los “colores puros”. Una revisión de este modelo se vio en 1961 en el libro: Arte de los colores de Johannes Itten. 
      .tarjeta.color--naranja-claro.p-4(titulo="Cubos de color de Charpentier").p-4
        .row
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/img77.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Los cubos de color de Charpentier (1885) y Hickethier (1940)
            p Que mostraban variaciones en la distribución de los colores, el primero distribuía los colores claros en el exterior y los oscuros al interior, mientras el segundo sugería el negro y los colores secundarios en los vértices superiores, y los colores primarios junto al blanco en los inferiores.
      .tarjeta.color--naranja-claro.p-4(titulo="Cuerpo de color de Ostwald").p-4
        .row
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/img78.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 El cuerpo de color de Ostwald (1915) 
            p Que encierra los colores dentro de un doble cono en una distribución similar a la esfera de Runge, buscaba solucionar las diferencias en tonos de los diferentes grupos de color.
      .tarjeta.color--naranja-claro.p-4(titulo="Modelo de Munsell").p-4
        .row
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/img79.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 El modelo de Munsell (1905) y el modelo matemático de la Comisión Internacional de Iluminación (usualmente conocida como CIE por las iniciales de su designación en francés 
            p Commission Internationale de l’Éclairage) (1931): son los espacios de color más estudiados en la actualidad; sin embargo, los modelos de estudio del color y la forma de aplicar el color en la industria son dos temas ligeramente diferentes.
    #t_3_2.titulo-segundo
      h2 3.2 Teoría aditiva y sustractiva
    p.mb-5 La representación del color, por fuera del ámbito artístico, para su reproducción en medios gráficos visuales se enmarca en las teorías aditiva y sustractiva. Cada modo tiene características específicas y un ámbito de uso ideal, hace un tiempo equivocarse en el modo de color suponía una pérdida millonaria, hoy es más una mala práctica que debe corregirse por profesionalismo.
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Modo RGB
            th Modo CMYK
            
        tbody
          tr
            td.p-5 
              td__imagen.mb-5
                figure
                  img(src='@/assets/curso/img80.jpg', alt='Texto que describa la imagen')
              td__texto.p-5
                p Se denominan colores luz, dentro de la teoría aditiva, la combinación de los colores primarios rojo (red), verde (green) y azul (blue) da como resultado la luz blanca. Esto resulta fácilmente demostrable con un cuarto oscuro, tres linternas y filtros de colores. Sobre una pared blanca las linternas iluminan separadamente según el color del filtro, pero al enfocar un punto común, el color resultante tiende a blanco.
                  br
                  br
                  |La aplicación por excelencia del modo RGB son las publicaciones digitales, multimedia y sitios web.
                  br
                  br
                  |Un dato curioso, al mezclar las luces en parejas, se obtienen los valores: amarillo, cyan y magenta, propios del modo CMYK (el negro es la ausencia de luz). 
              td__contenedor.d-flex.align-items-end
                  img(src='@/assets/curso/img81.svg', alt='Texto que describa la imagen' style='width: 149px')
                  p 
                    b RGB: 
                    |sigla en inglés de Red, Green, Blue, en español rojo, verde y azul. 
            td.p-5 
              td__imagen.mb-5
                figure
                  img(src='@/assets/curso/img82.jpg', alt='Texto que describa la imagen')
              td__texto.p-5
                p El modelo de cuatricromía o de colores pigmento. Un ejemplo evocativo puede remitirnos al juego con plastilina cuando éramos niños. Al mezclar masas de todos los colores se obtenía algo poco atractivo que variaba del café al púrpura. En el modo CMYK los pigmentos cyan, magenta, amarillo y negro se unen para conformar otros colores y la combinación de los tres primeros tiene como resultado un negro de baja pureza.
                  br
                  br
                  |Dos datos curiosos sobre el modo CMYK, el color magenta no existe como tal, se crea al mezclar las frecuencias de onda de ambos extremos del espectro visible; si se mezclan las parejas de color, se obtienen los valores tonales del modelo aditivo (Rivera, 1985). 
              td__contenedor.d-flex.align-items-end
                  img(src='@/assets/curso/img83.svg', alt='Texto que describa la imagen' style='width: 149px')
                  p 
                    b CMYK: 
                    | siglas de Cyan, Magenta, Yellow Y Key, español cián, magenta, amarillo y negro. 
    #t_3_3.titulo-segundo
      h2 3.3 Psicología y armonías de color
    //- TABS DE COLORES 
    .row.mb-5  
      .col-lg-1
        .recuadro-vertical.color--rosa.p-1.justify-content-center.align-items-center
          h2.my-auto Rosa 
      .col-lg-11
        TabsC.color--rosa__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img84.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Delicadeza, feminidad, amabilidad.

                  li 
                    i.fas.fa-angle-right
                    | Frivolidad, inocencia y alegría juvenil.

                  li 
                    i.fas.fa-angle-right
                    | Sensuales y voluptuosas.

                  li 
                    i.fas.fa-angle-right
                    | Pueden ser empalagosos e irritantes.
 
                  li 
                    i.fas.fa-angle-right
                    | Divertido y excitante, llamativo, sensacional, excesivamente intenso y loco.
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--rojo.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Rojo 
      .col-lg-11
        TabsC.color--rojo__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img85.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Amor, alegría, pasión y fuerza.

                  li 
                    i.fas.fa-angle-right
                    | Fuego y calor.

                  li 
                    i.fas.fa-angle-right
                    | Corazón, la carne y la emoción, también fuerza.
                  li 
                    i.fas.fa-angle-right
                    | Sangre, coraje, lujuria, rabia, pasión y crimen.
                  li 
                    i.fas.fa-angle-right
                    | El color de la aristocracia, la nobleza y rango.
                  li 
                    i.fas.fa-angle-right
                    | Actividad, impulso, acción.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img86.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Movimiento y la vitalidad.
                  li 
                    i.fas.fa-angle-right
                    | Caliente, dinámico, animado, estimulante y brillante.
                  li 
                    i.fas.fa-angle-right
                    | Calorífico y penetrante, provocativo y excitante.
                  li 
                    i.fas.fa-angle-right
                    | Radiante no puede ser opacado por otro.
                  li 
                    i.fas.fa-angle-right
                    | Vital.
                  li 
                    i.fas.fa-angle-right
                    | Capta la atención ejerce impacto.
                  li 
                    i.fas.fa-angle-right
                    | Es un color emotivo.
                  li 
                    i.fas.fa-angle-right
                    | Utilizado en señales de peligro, riesgo, advertencia y temor.
                  li 
                    i.fas.fa-angle-right
                    | Símbolo de la revolución.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img87.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Disputa, desconfianza, feminidad, amabilidad. 
                  li 
                    i.fas.fa-angle-right
                    | Crueldad y rabia.

                  li 
                    i.fas.fa-angle-right
                    | Pasión, crimen, lujuria.

                  li 
                    i.fas.fa-angle-right
                    | En gran cantidad puede 
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--naranja.p-1.justify-content-center.align-items-center
          h2.my-auto Naranja 
      .col-lg-11
        TabsC.color--naranja__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img88.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | La incandescencia y el calor.
                  li 
                    i.fas.fa-angle-right
                    | El fuego y las llamas.
                  li 
                    i.fas.fa-angle-right
                    | La puerta del sol.
                  li 
                    i.fas.fa-angle-right
                    | Los colores del otoño y la cosecha.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img89.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Ardiente, estimulante brillante.
                  li 
                    i.fas.fa-angle-right
                    | Emotivo. 
                  li 
                    i.fas.fa-angle-right
                    | Ostentoso.
                  li 
                    i.fas.fa-angle-right
                    | Animado expansivo, rico, extrovertido.
                  li 
                    i.fas.fa-angle-right
                    | Exótico. 
                  li 
                    i.fas.fa-angle-right
                    | Color provocativo, erótico, excitante.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img90.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Bullanguero y vulgar.
                  li 
                    i.fas.fa-angle-right
                    | Sobreestimulante, atrevido, puede crear una impresión agresiva.
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--amarillo.p-1.justify-content-center.align-items-center
          h2.my-auto Amarillo 
      .col-lg-11
        TabsC.color--amarillo__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img91.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | La luz.
                  li 
                    i.fas.fa-angle-right
                    p.mb-0
                      b El sol:   
                      |dador de vida.
                  li 
                    i.fas.fa-angle-right
                    p.mb-0
                      b El oro:  
                      |patrón de la riqueza.
                  li 
                    i.fas.fa-angle-right
                    p.mb-0
                      b La vida: 
                      |la acción.
                  li 
                    i.fas.fa-angle-right
                    p.mb-0
                      b El poder:   
                      | la verdad.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img92.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |  Simboliza la inteligencia e intelectualidad.
                  li 
                    i.fas.fa-angle-right
                    | Ciencia, conocimiento, compresión.
                  li 
                    i.fas.fa-angle-right
                    | Fuerza, potencia, arrogancia.
                  li 
                    i.fas.fa-angle-right
                    | Voluntad, estimulo y buen humor.
                  li 
                    i.fas.fa-angle-right
                    | Alegría: es un color muy claro y alegre.
                  li 
                    i.fas.fa-angle-right
                    | Espiritual y dinámico.
                  li 
                    i.fas.fa-angle-right
                    | Estimulante para vista y los nervios.
                  li 
                    i.fas.fa-angle-right
                    | Felicidad, alegría, niñez.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img93.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Hostilidad y traición.
                  li 
                    i.fas.fa-angle-right
                    | Cobardía.
                  li 
                    i.fas.fa-angle-right
                    | Sensacionalismo.
                  li 
                    i.fas.fa-angle-right
                    | Señal de enfermedad y cuarentena.
                  li 
                    i.fas.fa-angle-right
                    | Señal de peligro (riesgo, advertencia).
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--dorado.p-1.justify-content-center.align-items-center
          h2.my-auto Dorado
      .col-lg-11
        TabsC.color--dorado__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img94.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Luz divina.
                  li 
                    i.fas.fa-angle-right
                    | Símbolo de la salvación.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img95.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Riqueza y opulencia, dinero.
                  li 
                    i.fas.fa-angle-right
                    | Valor de los objetos.
                  li 
                    i.fas.fa-angle-right
                    | Gran cantidad de calidad y sofisticación.
                  li 
                    i.fas.fa-angle-right
                    | Elegancia.
                  li 
                    i.fas.fa-angle-right
                    | Ideal para productos de perfiles selectos.
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--marron.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Marrón
      .col-lg-11
        TabsC.color--marron__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img96.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | El propio de la tierra.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img97.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Madurez.
                  li 
                    i.fas.fa-angle-right
                    | Calidez y alegría.
                  li 
                    i.fas.fa-angle-right
                    | Color neutral cálido.
                  li 
                    i.fas.fa-angle-right
                    | Tierra, nobleza. 
                  li 
                    i.fas.fa-angle-right
                    | Confort y seguridad.
                  li 
                    i.fas.fa-angle-right
                    | Evoca sensaciones gustativas (café chocolate).
                  li 
                    i.fas.fa-angle-right
                    | Simboliza los aspectos naturales, orgánicos y de los productos.
                  li 
                    i.fas.fa-angle-right
                    | Tradición y nostalgia.
                  li 
                    i.fas.fa-angle-right
                    | Productos antiguos.
                  li 
                    i.fas.fa-angle-right
                    | Color masculino. 
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--verde.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Verde
      .col-lg-11
        TabsC.color--verde__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img98.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Naturaleza y el verdor.
                  li 
                    i.fas.fa-angle-right
                    | Vida, renacimiento de la primavera, naturaleza.
                  li 
                    i.fas.fa-angle-right
                    | Simboliza la esperanza, la fe y la regeneración.

          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img99.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Primavera, juventud, naturaleza, sugiere aire libre y frescor.
                  li 
                    i.fas.fa-angle-right
                    | Libera el espíritu y equilibrar las sensaciones.
                  li 
                    i.fas.fa-angle-right
                    | Tranquilidad y esperanza.
                  li 
                    i.fas.fa-angle-right
                    | Sedante, hipnótico y reposante.
                  li 
                    i.fas.fa-angle-right
                    | Calma, quietud, frescura y paciencia.
                  li 
                    i.fas.fa-angle-right
                    | Estabilidad, seguridad: esto deriva de su facilidad de percepción.
                  li 
                    i.fas.fa-angle-right
                    | Lozanía de la juventud.
                  li 
                    i.fas.fa-angle-right
                    | Camuflaje (uniforme de los soldados).
                  li 
                    i.fas.fa-angle-right
                    | Fertilidad, realidad, razón y la lógica.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img100.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Es el color de la vida, y de la decadencia (el moho la podredumbre y la corrosión).
                  li 
                    i.fas.fa-angle-right
                    | Tiene características imaginarias (monstruos de la ciencia ficción)
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--azul2.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Azul
      .col-lg-11
        TabsC.color--azul2__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img101.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Océano, cielos, e infinito.
                  li 
                    i.fas.fa-angle-right
                    | Espiritualidad, inmortalidad fidelidad.
                  li 
                    i.fas.fa-angle-right
                    | Fe y sabiduría.
                  li 
                    i.fas.fa-angle-right
                    | Lasitud, descanso, recogimiento, juicio y seguridad.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img102.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Sombrío, tiende a la oscuridad.
                  li 
                    i.fas.fa-angle-right
                    | Carácter noble.
                  li 
                    i.fas.fa-angle-right
                    | Color frío, preciso, ordenado.
                  li 
                    i.fas.fa-angle-right
                    | Melancolía y soledad.
                  li 
                    i.fas.fa-angle-right
                    | Saludable.
                  li 
                    i.fas.fa-angle-right
                    | Calmante.
                  li 
                    i.fas.fa-angle-right
                    | Emociones profundas.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img103.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Las connotaciones negativas son en realidad extensiones de sus aspectos positivos:
                  li 
                    i.fas.fa-angle-right
                    | Frialdad e insensibilidad.
                  li 
                    i.fas.fa-angle-right
                    | Soledad, aislamiento.
                  li 
                    i.fas.fa-angle-right
                    | Tranquilidad, inercia, depresión y tristeza.
                  li 
                    i.fas.fa-angle-right
                    | Desesperación, fanatismo e intolerancia.
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--violeta.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Violeta
      .col-lg-11
        TabsC.color--violeta__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img104.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Realeza, dignidad, suntuosidad.
                  li 
                    i.fas.fa-angle-right
                    | Alto rango de reyes y cardenales de la iglesia.
                  li 
                    i.fas.fa-angle-right
                    | Se asocia con la pompa e inspira respeto.
                  li 
                    i.fas.fa-angle-right
                    | Es el color de la dignidad, el duelo y la penitencia.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img105.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Profundidad, misticismo, misterio, melancolía.
                  li 
                    i.fas.fa-angle-right
                    | Connota realeza y dignidad.
                  li 
                    i.fas.fa-angle-right
                    | Fresco y sedante.
                  li 
                    i.fas.fa-angle-right
                    | Intimidad, sentimientos profundos.
                  li 
                    i.fas.fa-angle-right
                    | Experiencia.
                  li 
                    i.fas.fa-angle-right
                    | Piedad, tristeza y melancolía.
                  li 
                    i.fas.fa-angle-right
                    | Elegancia.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img106.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Puede lucir opresivo, aterrador.
                  li 
                    i.fas.fa-angle-right
                    | Misterio, superstición.
                  li 
                    i.fas.fa-angle-right
                    | Difícil de mezclar. 
                  li 
                    i.fas.fa-angle-right
                    | Produce y se relaciona con la tristeza y la aflicción.
                  li 
                    i.fas.fa-angle-right
                    | Muerte y dolor.
                  li 
                    i.fas.fa-angle-right
                    | Tiene connotación de la homosexualidad o afeminado.
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--negro.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Negro
      .col-lg-11
        TabsC.color--negro__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img107.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | La oscuridad, la noche, la muerte.
                  li 
                    i.fas.fa-angle-right
                    | Las tinieblas y el misterio.
                  li 
                    i.fas.fa-angle-right
                    | Lo oscuro, lo desconocido, la oscuridad absoluta.
                  li 
                    i.fas.fa-angle-right
                    | Muerte y el duelo.
          .py-3.py-md-4(titulo="Connotaciones positivas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img108.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Sofisticado y elegante.
                  li 
                    i.fas.fa-angle-right
                    | Rechazo a las sociedades y sus valores.
                  li 
                    i.fas.fa-angle-right
                    | Responsabilidad y el decoro.
          .py-3.py-md-4(titulo="Connotaciones Negativas")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img109.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Misterio.
                  li 
                    i.fas.fa-angle-right
                    | Inspira tristeza, reposo, pena.
                  li 
                    i.fas.fa-angle-right
                    | Combina el misterio con el poder que puede servir para el bien y el mal.
    .row.mb-5 
      .col-lg-1
        .recuadro-vertical.color--gris.p-1.justify-content-center.align-items-center
          h2.my-auto.text-white Gris
      .col-lg-11
        TabsC.color--gris__tab.mb-5
          .py-3.py-md-4(titulo="Significado")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/img110.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Resignación.

                  li 
                    i.fas.fa-angle-right
                    | Mecánico y metálico de las grandes urbes; hormigón, cemento, maquinaria pesada, industria.

                  li 
                    i.fas.fa-angle-right
                    | Guerra: aeroplanos, barcos, cañones.
                  li 
                    i.fas.fa-angle-right
                    | Inteligencia (materia gris).
                  li 
                    i.fas.fa-angle-right
                    | Confusión (ni blanco, ni negro: gris).
                  li 
                    i.fas.fa-angle-right
                    | Gran armonizador, color neutralizador.
    h4 Armonías de color        
    p.mb-5 La armonía en el color está dividida por secciones para evidenciar los aspectos de color y sus combinaciones que explican de manera visual el efecto que tienen los colores en todos los aspectos de la vida de las personas. Cada variación tonal refleja aspectos, cualidades que fueron identificados en los colores y las combinaciones, las cuales se usan para describir sus cualidades y propiedades, cómo combinarlos y contrastarlos. Al armonizar es posible que el conjunto o combinación armónica se asocie más a un concepto antiguo que a la belleza dinámica y moderna; para ello es útil el uso del círculo cromático (Salinas, 1994). 
    h5 Tipo de armonías:
    figure.mb-5 
      img(src='@/assets/curso/img111.svg', alt='Texto que describa la imagen')















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

<style lang="sass" scoped></style>
