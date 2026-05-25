//array
let carouselArr = [];

class Carousel {
  constructor(img, text, link) {
    this.img = img;
    this.text = text;
    this.link = link;
  }

  static Start(arr) {
    if (arr && arr.length > 0) {
      Carousel._sequence = 0;
      Carousel._size = arr.length;

      Carousel.Show();

      //troca automática
      Carousel._interval = setInterval(() => {
        Carousel.Next();
      }, 7000);

      //botão próximo
      document.getElementById("next").onclick = () => {
        Carousel.Next();
      };

      //botão anterior
      document.getElementById("prev").onclick = () => {
        Carousel.Prev();
      };
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Show() {
    let image = document.getElementById("carousel-image");
    let title = document.getElementById("carousel-title");

    let item = carouselArr[Carousel._sequence];

    //imagem
    image.src = `img/${item.img}`;

    //texto
    title.innerHTML = `
      <a href="${item.link}">
        <p>${item.text}</p>
      </a>
    `;
  }

  static Next() {
    Carousel._sequence++;

    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }

    Carousel.Show();
  }

  static Prev() {
    Carousel._sequence--;

    if (Carousel._sequence < 0) {
      Carousel._sequence = Carousel._size - 1;
    }

    Carousel.Show();
  }
}
