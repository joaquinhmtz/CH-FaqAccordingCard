let $element = undefined;
let $elementChild = undefined;
const $questions = document.querySelectorAll('.faq-question');
const $answers = document.querySelectorAll('.faq-answer');

let pimpAnswer = (idQuestion, idAnswer) => {
  $element = document.getElementById(idQuestion);
  $elementChild = document.getElementById(idAnswer);

  if ($element.classList.contains('faq-question-transition')) {
    $element.classList.remove('faq-question-transition');
    $element.classList.remove('faq-question-color');
    $elementChild.classList.remove('faq-answer-show');
    //$elementChild.style.display = 'none';
  } else {
    $element.classList.add('faq-question-transition');
    $element.classList.add('faq-question-color');
    $elementChild.classList.add('faq-answer-show');
    //$elementChild.style.display = 'block';
    deleteClasses(idQuestion, idAnswer);
  }
}

let deleteClasses = (idQuestion, idAnswer) => {
  $questions.forEach( item => {
    if (item.id != idQuestion) {
      item.classList.remove('faq-question-transition');
      item.classList.remove('faq-question-color');
    }
  });

  $answers.forEach( item => {
    if (item.id != idAnswer) {
      //item.style.display = 'none';
      item.classList.remove('faq-answer-show');
    }
  });
}
