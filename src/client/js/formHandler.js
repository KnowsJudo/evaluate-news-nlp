import {
  handleSentiment
} from './apiHandler'
import {
  checkForName
} from './nameChecker'
import {
  getValidationError
} from './validation';


function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  checkForName(formText)

  const error = getValidationError(formText)

  if (error) {
    document.getElementById("results").innerHTML = error;
    return
  }

  console.log("::: Form Submitted :::");
  document.getElementById("results").innerHTML = "loading...";

  return handleSentiment(formText).then(res => {
    document.getElementById("results").innerHTML = JSON.stringify(res, null, 2);
  })
}

export {
  handleSubmit,
};