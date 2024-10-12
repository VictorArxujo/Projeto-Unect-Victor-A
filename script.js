document.addEventListener("DOMContentLoaded", function () {
  // Imagens que serão trocadas

  const images = [
    {
      src: "/Projeto/imagens/Brigadeiro1.png",
      title: "Brigadeiro de capuccino",
      description:
        "O brigadeiro de cappuccino é uma das guloseimas que enfeitam o balcão da doceria...",
    },
    {
      src: "/Projeto/imagens/chocake.png",
      title: "Bolo de chocolate",
      description:
        "O bolo de chocolate é uma das sobremesas mais pedidas da Cafeteira...",
    },
    {
      src: "/Projeto/imagens/Maskgroup.png",
      title: "Pão de Mel",
      description: "O pão de mel é um dos doces mais tradicionais que temos...",
    },
    {
      src: "/Projeto/imagens/sorvete.png.png",
      title: "Sorvete de Café",
      description:
        "O sorvete em versão de café pode ser aproveitado sozinho ou com um pedacinho de bolo no fim...",
    },
  ];

  // um contador e o tanto de imagens que serao exibidas por vez

  let currentIndex = 0;
  const totalItemsPerView = 3;

  // Referências aos elementos HTML

  const carouselImage1 = document.getElementById("carousel-image1");
  const carouselImage2 = document.getElementById("carousel-image2");
  const carouselImage3 = document.getElementById("carousel-image3");
  const carouselTitle1 = document.getElementById("carousel-title1");
  const carouselTitle2 = document.getElementById("carousel-title2");
  const carouselTitle3 = document.getElementById("carousel-title3");
  const carouselDescription1 = document.getElementById("carousel-description1");
  const carouselDescription2 = document.getElementById("carousel-description2");
  const carouselDescription3 = document.getElementById("carousel-description3");

  // Função para atualizar o conteúdo do carrossel

  function updateCarousel() {
    const index1 = currentIndex % images.length;
    const index2 = (currentIndex + 1) % images.length;
    const index3 = (currentIndex + 2) % images.length;

    // atualizar imagens

    carouselImage1.src = images[index1].src;
    carouselTitle1.textContent = images[index1].title;
    carouselDescription1.textContent = images[index1].description;

    carouselImage2.src = images[index2].src;
    carouselTitle2.textContent = images[index2].title;
    carouselDescription2.textContent = images[index2].description;

    carouselImage3.src = images[index3].src;
    carouselTitle3.textContent = images[index3].title;
    carouselDescription3.textContent = images[index3].description;
  }

  // Função para avançar no carrossel

  document.querySelector(".arrow-right").addEventListener("click", () => {
    currentIndex = (currentIndex + totalItemsPerView) % images.length;
    updateCarousel();
  });

  // Função para voltar no carrossel

  document.querySelector(".arrow-left").addEventListener("click", () => {
    currentIndex =
      (currentIndex - totalItemsPerView + images.length) % images.length;
    updateCarousel();
  });

  // Inicializar o carrossel com as primeiras imagens
  updateCarousel();

  // Menu-mobile

  const AbrirMenu = document.querySelector("#img-menu-mobile");
  const FecharMenu = document.querySelector("#imagem-fechar-menu");
  const menu = document.querySelector("#menu-mobile");
  const overlay = document.querySelector("#overlay");

  // Abrir o menu mobile ao clicar na imagem do menu
  AbrirMenu.addEventListener("click", function () {
    menu.style.display = "flex";
    overlay.style.display = "block";
  });

  // Fechar o menu mobile ao clicar no botão de fechar

  FecharMenu.addEventListener("click", function () {
    menu.style.display = "none";
    overlay.style.display = "none";
  });

  const BotaoHome = document.querySelector("#botao-home");
  const BotaoSobre = document.querySelector("#botao-sobre");
  const BotaoCafe = document.querySelector("#botao-cafeteria");
  const BotaoCont = document.querySelector("#botao-contato");

  BotaoHome.addEventListener("click", function () {
    menu.style.display = "none";
    overlay.style.display = "none";
  });
  BotaoCafe.addEventListener("click", function () {
    menu.style.display = "none";
    overlay.style.display = "none";
  });
  BotaoCont.addEventListener("click", function () {
    menu.style.display = "none";
    overlay.style.display = "none";
  });
  BotaoSobre.addEventListener("click", function () {
    menu.style.display = "none";
    overlay.style.display = "none";
  });
});
