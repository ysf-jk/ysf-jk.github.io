const checkbox = document.querySelector("#agreement");
const download = document.querySelector("#downloadLink");
download.style.visibility = "hidden";

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    download.style.visibility = "visible";
  } else {
    download.style.visibility = "hidden";
  }
});
