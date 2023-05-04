
function getAge() {
  const today = new Date();
  const birthDate = new Date('2003/09/04');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function formeiNaTrybe() {
  let element1 = ''
  let element2 = ''
  element1 = `Olá! Meu nome é Lucas Gomes e sou natural de Divinópolis-MG. Atualmente, estou com ${getAge()} anos de idade e tenho me dedicado bastante ao estudo de tecnologia. Sempre fui apaixonado pela área e essa paixão me motivou a ingressar na Trybe, uma escola de tecnologia que oferece um curso de Desenvolvimento Web Full Stack.`
  const today = new Date();
  const dataFormacao = new Date('2023/05/20');
  let age = today.getFullYear() - dataFormacao.getFullYear();
  const mes = today.getMonth() - dataFormacao.getMonth();

  if (mes < 0 || (mes === 0 && today.getDate() < dataFormacao.getDate())) {
    age--;
  }

  if (age === -1)
    element2 = `Na Trybe, estou aprendendo uma variedade de linguagens de programação, como JavaScript, HTML, CSS e diversas outras. Além disso, estou estudando sobre bancos de dados e ferramentas importantes para o desenvolvimento de aplicações web completas e eficientes. Confesso que o aprendizado tem sido intenso, mas muito gratificante.`;

    element2 = `Na Trybe, aprendendi uma variedade de linguagens de programação, como JavaScript, HTML, CSS e diversas outras. Além disso, estou estudei sobre bancos de dados e ferramentas importantes para o desenvolvimento de aplicações web completas e eficientes.`;
    return [element1, element2]
}

// function mostrarLista({ target }) {
//   let teste = target.innerText;
//   if (target.parentNode.children[2].classList[1] === 'naoaparece') {
//     target.parentNode.children[2].classList = `${teste} aparece`;
//     target.parentNode.children[1].children[0].attributes[1].value =
//       'M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z';
//   } else {
//     target.parentNode.children[2].classList = `${teste} naoaparece`;
//     target.parentNode.children[1].children[0].attributes[1].value =
//       'M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z';
//   }
// }

// function precherProjetos(id) {
//   const titulo = document.createElement('h3');
//   if (id === 1) {
//     titulo.innerText = 'PixelArt';
//   }
//   if (id === 2) {
//     titulo.innerText = 'TrybeTunes';
//   }
//   if (id === 3) {
//     titulo.innerText = 'TFC';
//   }
// }

export { formeiNaTrybe }