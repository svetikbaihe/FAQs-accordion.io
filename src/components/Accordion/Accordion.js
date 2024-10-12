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
    $buttonSvg.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='31' fill='none' viewBox='0 0 30 31'%3E%3Cpath fill='%23AD28EB' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'/%3E%3C/svg%3E");
    $buttonSvg.setAttribute('id', styles['buttonSvg']);

    $questionBtn.appendChild($spanText);
    $questionBtn.appendChild($buttonSvg);

    $questionBtn.addEventListener('click', () => {
      if (!this.accordion.children[1]) {
        this.accordion.appendChild(this.buildAnswerWrapper());
        $buttonSvg.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='31' fill='none' viewBox='0 0 30 31'%3E%3Cpath fill='%23301534' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z'/%3E%3C/svg%3E");
      } else {
        this.accordion.children[1].remove();
        $buttonSvg.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='31' fill='none' viewBox='0 0 30 31'%3E%3Cpath fill='%23AD28EB' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'/%3E%3C/svg%3E");
      }
    })

    return $questionBtn;
  }

  buildAnswerWrapper = () => {
    const $answerText = document.createElement('p');

    $answerText.className = styles['answer_text'];

    $answerText.setAttribute('tabindex', '')

    $answerText.innerText = `${this.answer}`;

    return $answerText;
  }

}

export default Accordion;