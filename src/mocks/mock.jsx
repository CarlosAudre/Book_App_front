import img1 from "../assets/images/teste1.jpg"
import img2 from "../assets/images/teste2.jpg"
import img3 from "../assets/images/teste3.jpg"
import img4 from "../assets/images/teste4.jpg"
import img5 from "../assets/images/teste5.jpg"
import img6 from "../assets/images/teste6.jpg"

const mockBooks = [
  {
    id: "1",
    title: "O Nome do Vento",
    author: "Patrick Rothfuss",
    shortInfo: "Prepare-se para mergulhar na jornada de Kvothe, um jovem prodígio em busca de conhecimento e poder. Mistério, magia e música se unem em uma história inesquecível.",
    pagesNumber: 656,
    rating: 4.7,
    imageUrl: img1,
    description:
      "A história acompanha Kvothe, um jovem talentoso e determinado que busca desvendar os segredos da magia e do mundo que o cerca. Contada em tom de memórias, a narrativa mistura aventura, tragédia, romance e música, em um universo ricamente construído.",
    editors: "Patrick Rothfuss (autor), Betsy Wollheim (editora)",
    language: "Português (Brasil)",
    brochure:
      "Capa comum, 656 páginas • ISBN: 978-85-359-1594-9"
  },
  {
    id: "2",
    title: "O Novo Agora",
    author: "Marcelo Rubens Paiva",
    shortInfo: "Um novo agora conta a história de um agora que não é depois.",
    pagesNumber: 250,
    rating: 4.2,
    imageUrl: img2,
    description:
      "Marcelo Rubens Paiva conduz uma reflexão sensível sobre o tempo, a memória e as mudanças na vida moderna. Em uma narrativa marcada por introspecção e ironia, o autor examina o presente e o passado de forma poética e provocadora.",
    editors: "Marcelo Rubens Paiva (autor), Companhia das Letras",
    language: "Português (Brasil)",
    brochure:
      "Brochura, 250 páginas • ISBN: 978-85-359-2501-6"
  },
  {
    id: "3",
    title: "Gótico Mexicano",
    author: "Silvia Moreno-Garcia",
    shortInfo: "Mistura de terror gótico e romance no México dos anos 50, com mistérios sombrios e atmosferas carregadas.",
    pagesNumber: 320,
    rating: 4.3,
    imageUrl: img3,
    description:
      "Na década de 1950, Noemí Taboada é chamada ao interior do México para investigar um misterioso castelo e os segredos sombrios que cercam sua prima recém-casada. Uma história envolvente de horror, decadência e resistência feminina.",
    editors: "Silvia Moreno-Garcia (autora), Del Rey Books",
    language: "Português (Brasil)",
    brochure:
      "Capa comum, 320 páginas • ISBN: 978-85-9507-061-0"
  },
  {
    id: "4",
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    shortInfo: "A narrativa de Brás Cubas após a morte, com críticas sociais e humor irônico, um marco da literatura brasileira.",
    pagesNumber: 200,
    rating: 4.6,
    imageUrl: img4,
    description:
      "Escrito do além-túmulo, Brás Cubas relata suas memórias com humor ácido e uma visão crítica da sociedade brasileira do século XIX. Considerado um divisor de águas na literatura, combina ironia, filosofia e inovação narrativa.",
    editors: "Machado de Assis (autor), Editora Globo",
    language: "Português (Brasil)",
    brochure:
      "Capa dura, 200 páginas • ISBN: 978-85-250-6117-4"
  },
  {
    id: "5",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    shortInfo: "O início da saga mágica de Harry Potter, descobrindo Hogwarts, amizades, aventuras e o confronto com o mal.",
    pagesNumber: 309,
    rating: 4.8,
    imageUrl: img5,
    description:
      "A história se passa quando Harry Potter, um garoto órfão que vive com os tios, descobre que é um bruxo e recebe um convite para estudar em Hogwarts, a Escola de Magia e Bruxaria. Lá, ele faz amigos, conhece o fascinante mundo da magia e se depara com o mistério da lendária Pedra Filosofal.",
    editors: "J.K. Rowling (autora), Christopher Reath, Aliena Gestabon, Steve Korg",
    language: "Português (Brasil)",
    brochure:
      "Papel texturizado, totalmente colorido, 223 páginas • ISBN: 978-85-325-1234-7"
  },
  {
    id: "6",
    title: "Vidas Secas",
    author: "Graciliano Ramos",
    shortInfo: "Retrato da vida árida e dura do sertão nordestino, mostrando a luta pela sobrevivência de uma família pobre.",
    pagesNumber: 160,
    rating: 4.5,
    imageUrl: img6,
    description:
      "Em meio à seca do sertão nordestino, uma família luta por sobrevivência e dignidade. Graciliano Ramos retrata com realismo e força poética as dores e a resistência do povo brasileiro diante da miséria e da opressão.",
    editors: "Graciliano Ramos (autor), Editora Record",
    language: "Português (Brasil)",
    brochure:
      "Capa comum, 160 páginas • ISBN: 978-85-0101-234-0"
  },
];

export default mockBooks;
