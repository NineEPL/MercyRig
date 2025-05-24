
  const artists = [
    { name: "Jim Root", file: "./pros/jim-root.html" },
    { name: "Ichika Nito", file: "./pros/ichika-nito.html" },
    { name: "Matthew Bellamy", file: "./pros/matthew-bellamy.html" },
    { name: "Synyster Gates", file: "./pros/synyster-gates.html" },
    { name: "Tim Henson", file: "./pros/tim-henson.html" },
  ];

const input = document.getElementById("artistInput");
  const list = document.getElementById("autocompleteList");
  const form = document.getElementById("artistSearchForm");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    list.innerHTML = "";

    if (query === "") return;

    const matches = artists.filter(artist =>
      artist.name.toLowerCase().includes(query)
    );

    matches.forEach(artist => {
      const item = document.createElement("li");
      item.className = "list-group-item list-group-item-action";
      item.textContent = artist.name;
      item.onclick = () => {
        window.location.href = artist.file;
      };
      list.appendChild(item);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = input.value.toLowerCase();
    const match = artists.find(artist => artist.name.toLowerCase() === query);
    if (match) {
      window.location.href = match.file;
    } else {
      alert("Artist not found.");
    }
  });

  document.addEventListener("click", function (e) {
    if (!form.contains(e.target)) {
      list.innerHTML = "";
    }
  });