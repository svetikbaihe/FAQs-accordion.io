import styles from './style.module.scss'

class Accordion {
  accordion = null;
  question = '';
  answer = '';

  constructor ({question, answer}) {
    this.question = question;
    this.answer = answer;

    this.buildAccordionWrapper();
  }

  get accordion() {
    return this.accordion;
  }

  buildAccordionWrapper = () => {
    const $accordionWrapper = document.createElement('div');

    $accordionWrapper.className = styles['accordion_wrapper'];

    $accordionWrapper.appendChild(this.buildQuestion());

    this.accordion = $accordionWrapper;
  }

  buildQuestion = () => {
    const $questionBtn = document.createElement('button');
    $questionBtn.className = styles['question'];

    const $spanText = document.createElement('span');
    $spanText.className = styles['question_text'];

    $spanText.innerText = `${this.question}`;

    const $buttonSvg = document.createElement('img');
    $buttonSvg.setAttribute('src', './src/assets/svg/icon-plus.svg');
    $buttonSvg.setAttribute('id', styles['buttonSvg']);

    $questionBtn.appendChild($spanText);
    $questionBtn.appendChild($buttonSvg);

    $questionBtn.addEventListener('click', () => {
      if (!this.accordion.children[1]) {
        this.accordion.appendChild(this.buildAnswerWrapper());
        $buttonSvg.setAttribute('src', './src/assets/svg/icon-minus.svg');
      } else {
        this.accordion.children[1].remove();
        $buttonSvg.setAttribute('src', './src/assets/svg/icon-plus.svg');
      }
    })

    return $questionBtn;
  }

  buildAnswerWrapper = () => {
    const $answerWrapper = document.createElement('div');

    $answerWrapper.className = styles['answer_wrapper'];

    const $answerText = document.createElement('p');
    $answerText.className = styles['answer_text'];
    $answerText.innerText = `${this.answer}`;

    $answerWrapper.appendChild($answerText);

    return $answerWrapper;
  }

}

export default Accordion;