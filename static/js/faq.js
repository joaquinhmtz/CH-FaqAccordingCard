const $questionsData = [{
    question : 'How many team members can I invite?',
    answer : 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },{
    question : 'What is the maximun file upload size?',
    answer : 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },{
    question : 'How do I reset my password?',
    answer : 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },{
    question : 'Can I cancel my subscription?',
    answer : 'Yes! Send us a message and we’ll process your request no questions asked.'
  },{
    question : 'Do you provide additional support?',
    answer : 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
}];
const $sectionFaq = document.getElementById('faqId');
let $divElementFaq = undefined;
let $divElementFaqQuestion = undefined;
let $divElementFaqAnswer = undefined;

let pimpQuestions = () => {
  for (var i = 0; i < $questionsData.length; i++) {
    //Faq-Item-Div
    $divElementFaq = document.createElement('div');
    $divElementFaq.setAttribute('id', 'faq'+(i+1));
    $divElementFaq.setAttribute('class', 'faq-item');
    $sectionFaq.appendChild($divElementFaq);
    //Faq-Item-Question
    let $idFaqQuestion = 'faq-question'+(i+1);
    $divElementFaqQuestion = document.createElement('div');
    $divElementFaqQuestion.setAttribute('id', $idFaqQuestion);
    $divElementFaqQuestion.setAttribute('class', 'faq-question');
    let $functionParams = "pimpAnswer('" + $idFaqQuestion + "')";
    $divElementFaqQuestion.setAttribute('onclick', $functionParams);
    $divElementFaq.appendChild($divElementFaqQuestion);
    let $contentQuestion = document.createTextNode($questionsData[i].question);
    $divElementFaqQuestion.appendChild($contentQuestion);
    //Faq-Item-Answer
    $divElementFaqAnswer = document.createElement('div');
    $divElementFaqAnswer.setAttribute('id', 'faq-answer'+(i+1));
    $divElementFaqAnswer.setAttribute('class', 'faq-answer');
    $divElementFaq.appendChild($divElementFaqAnswer);
    let $spanAnswer = document.createElement('span');
    let $contentAnswer = document.createTextNode($questionsData[i].answer);
    $spanAnswer.appendChild($contentAnswer);
    $divElementFaqAnswer.appendChild($spanAnswer);
  }
}

document.body.onload = pimpQuestions;
