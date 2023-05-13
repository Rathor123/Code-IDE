var html, css, js, filename;
const change = () => {
  html = document.querySelector(".htmltext").value;
  css = document.querySelector(".csstext").value;
  js = document.querySelector(".jstext").value;
  let iframe = document.querySelector("#iframe");
  setTimeout(() => {
    iframe.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    iframe.contentWindow.eval(js);
  }, 3000);
};
let icon = document.getElementsByTagName("i");

for (i = 0; i < icon.length; i++) {
  let heading = document.getElementsByTagName("nav")[i];
  let p = document.getElementsByTagName("textarea")[i];
  icon[i].addEventListener("click", (e) => {
    e.target.classList.toggle("fa-angle-up");
    e.target.classList.toggle("fa-angle-down");
    p.classList.toggle("dd");
    heading.classList.toggle("cc");
  });
}

const headicon = document.querySelector(".headicon");
filename = document.querySelector(".filename");
const pen = () => {
  filename.focus();
  headicon.style.visibility = "hidden";
  filename.readOnly = false;
  filename.disabled = false;
  filename.style.borderBottom = "3px solid black";
};
filename.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    filename.style.border = "none";
    headicon.style.visibility = "visible";
    filename.readOnly = true;
  }
});

let htmlval = document.querySelector(".htmltext");
htmlval.addEventListener("click", () => {
  if (htmlval != "") {
    localStorage.setItem(filename.value, htmlval.value);
  }
});
// localStorage.setItem(filename.value, html);
