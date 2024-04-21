import $app from "../../assets/utils/app";
import styles from './style.module.scss';

class Container {
  accordions = [];

  constructor({accordions}) {
    this.accordions = accordions;

    this.render();
  }

  buildContainerWrapper = () => {
    const $containerWrapper = document.createElement('div');

    $containerWrapper.className = styles['container_wrapper'];

    $containerWrapper.appendChild(this.buildContainer())
    
    return $containerWrapper;
  }

  buildContainer = () => {
    const $container = document.createElement('div');

    $container.className = styles['container'];

    $container.appendChild(this.buildTitleWrapper());
    $container.appendChild(this.buildAccordionsWrapper());

    
    return $container;
  }

  buildTitleWrapper = () => {
    const $titleWrapper = document.createElement('div');
    $titleWrapper.className = styles['title_wrapper'];

    const $starSvg = document.createElement('img');
    $starSvg.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='41' fill='none' viewBox='0 0 40 41'%3E%3Cpath fill='%23AD28EB' d='M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z'/%3E%3C/svg%3E%0A");
    $starSvg.setAttribute('id', styles['starSvg']);

    const $title = document.createElement('h1');
    $title.className = styles['title'];
    $title.innerText = 'FAQs';

    $titleWrapper.appendChild($starSvg);
    $titleWrapper.appendChild($title);

    return $titleWrapper;
  }
  
  buildAccordionsWrapper = () => {
    const $accordionsWrapper = document.createElement('div');

    $accordionsWrapper.className = styles['accordions_wrapper'];

    this.accordions.forEach(accordion => {
      $accordionsWrapper.appendChild(accordion);
    })

    return $accordionsWrapper;
  }

  render = () => {
    $app.appendChild(this.buildContainerWrapper());
  }
}

export default Container;