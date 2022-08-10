const inputCheck = document.querySelector("#validation-input");
const inputLength = Number(inputCheck.dataset.length);
console.log(inputLength);

function classChange(fisrtClass, secondClass){
  inputCheck.classList.add(fisrtClass) ||
      inputCheck.classList.replace(secondClass, fisrtClass);
}

const validateInput = (event) => {
  if (event.target.value.length !== inputLength) {
    classChange("invalid", "valid");
  } else
    classChange("valid", "invalid");
};

inputCheck.addEventListener("blur", validateInput);