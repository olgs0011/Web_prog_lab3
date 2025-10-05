import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initBlog from "./../components/initBlog.js";
import initJenshina from "./../components/initJenshina.js";
import initBanner from "./../components/initBanner.js";
import initShagInFuture from "./../components/initShagInFuture.js";
import initRightsReserved from "./../components/initRightsReserved.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section jenshina"></section>
    <section class="section banner"></section>
    <section class="section blog"></section>
    <section class="section shag_in_future"></section>
    <section class="section rights_reserved"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела с женщиной 
  const jenshinaNode = rootNode.querySelector(".jenshina");
  initJenshina(jenshinaNode);

  // инициализация раздела с кнопкой получения раннего доступа в градиентном прямоугольнике
  const bannerNode = rootNode.querySelector(".banner");
  initBanner(bannerNode);

  // инициализация раздела blog
  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  // инициализация футера
  const shagInFutureNode = rootNode.querySelector(".shag_in_future");
  initShagInFuture(shagInFutureNode);

  // инициализация раздела все права защищены
  const rightsReservedNode = rootNode.querySelector(".rights_reserved");
  initRightsReserved(rightsReservedNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
