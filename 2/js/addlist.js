function addList() {
  var contents = document.querySelector(".text-basic");
  if (!contents.value) {
    alert("내용을 입력해주세요.");
    contents.focus();
    return false;
  }
  var tr = document.createElement("tr");
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "btn-chk");
  var td01 = document.createElement("td");
  td01.appendChild(input);
  tr.appendChild(td01);
  var td02 = document.createElement("td");
  td02.innerHTML = contents.value;
  tr.appendChild(td02);
  document.getElementById("listBody").appendChild(tr);
  contents.value = "";
  contents.focus();
}
