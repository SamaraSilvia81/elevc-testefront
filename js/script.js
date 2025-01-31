$(document).ready(function() {
    // Inicializando o carrossel de Banner com fadein/fadeout
    $('#carouselBanner').carousel({
      interval: 4000, // 4 segundos
      ride: 'carousel',
    });
  
    // Carregar dados dos últimos ganhadores (exemplo)
    const ganhadores = [
      { nome: "Ganhador 1", imagem: "img/ganhadores/ganhador1.jpg" },
      { nome: "Ganhador 2", imagem: "img/ganhadores/ganhador2.jpg" },
      { nome: "Ganhador 3", imagem: "img/ganhadores/ganhador3.jpg" },
      { nome: "Ganhador 4", imagem: "img/ganhadores/ganhador4.jpg" },
      { nome: "Ganhador 5", imagem: "img/ganhadores/ganhador5.jpg" },
      { nome: "Ganhador 6", imagem: "img/ganhadores/ganhador6.jpg" },
      { nome: "Ganhador 7", imagem: "img/ganhadores/ganhador7.jpg" },
      { nome: "Ganhador 8", imagem: "img/ganhadores/ganhador8.jpg" },
      { nome: "Ganhador 9", imagem: "img/ganhadores/ganhador9.jpg" }
    ];
  
    // Preencher o carrossel de ganhadores
    const carrosselGanhadores = $('#carrosselGanhadores .carousel-inner');
    ganhadores.slice(0, 9).forEach((ganhador, index) => {
      const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
      const itemHTML = `
        <div class="${itemClass}">
          <img class="d-block w-100" src="${ganhador.imagem}" alt="${ganhador.nome}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${ganhador.nome}</h5>
          </div>
        </div>
      `;
      carrosselGanhadores.append(itemHTML);
    });
  });
  