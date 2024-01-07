const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");

const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let input = document.getElementById("inpputWord").value;
  fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
          <div class="word">
          <h3>${input}</h3>
          <button onclick="playSound()">
            <i class="fa-solid fa-volume-low"></i>
          </button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
        </div>
        <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    }).catch(
        result.innerHTML = `<h3>Could not find any.</h3>`
    )
});

function playSound() {
    sound.play();
}