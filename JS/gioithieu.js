function openTab(tabId) {
  document.getElementById("home").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById(tabId).style.display = "block";
}
