import {
  handleSentiment
} from './apiHandler'
import {
  checkForName
} from './nameChecker'


function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  checkForName(formText)

  console.log("::: Form Submitted :::");
  document.getElementById("results").innerHTML = "loading...";

  return handleSentiment(formText).then(res => {
    document.getElementById("results").innerHTML = JSON.stringify(res, null, 2);
  })
}

export {
  handleSubmit,
};