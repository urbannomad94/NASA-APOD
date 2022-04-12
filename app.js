fetch(
  "https://api.nasa.gov/planetary/apod?api_key=FmrpeltdmiT4VQc2D9ewwcJpcAjd2kv3W5G2TWE6"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("img").src = data.hdurl;
    document.querySelector("h2").innerText = data.title;
    document.querySelector("p").innerText = data.explanation;
    document.querySelector("a").innerText = ` Source: ${data.url}`;
  });
