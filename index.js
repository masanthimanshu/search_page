const form = document.getElementById("input_form");
const query = document.getElementById("search_query");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = query.value;
  query.value = "";

  window.open(`https://www.google.com/search?q=${text}`);
});
