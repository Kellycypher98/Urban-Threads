function filterDresses() {
  const sections = Array.from(document.getElementsByName("section"))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const dresses = document.querySelectorAll(".dress");
  dresses.forEach((dress) => {
    if (sections.length === 0 || sections.includes(dress.dataset.section)) {
      dress.style.display = "block";
    } else {
      dress.style.display = "none";
    }
  });
}

filterDresses();
