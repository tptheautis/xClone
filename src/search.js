const availableProfileKeywords = [
  'Odin',
  'Github',
  'Stack Overflow',
];

const resultsBox = document.querySelector(".result-box");
const searchInputBox = document.getElementById("input-box");

function display(result) {
  const content = result.map((list) => {
      return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

searchInputBox.onkeyup = () => {
  let result = [];
  const input = searchInputBox.value;
  if (input.length) {
    result = availableProfileKeywords.filter(keyword) => return keyword.toLowerCase().includes(input.toLowerCase());
    }
  }
  display(result);

  if (!result.length) {
    resultsBox.innerHTML = '';
  }

function selectInput(list) {
  searchInputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}
