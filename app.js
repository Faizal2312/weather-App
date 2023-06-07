const btn = document.querySelector(".btn");
let query;
btn.addEventListener("click", () => {
  const tex = document.querySelector(".searchInfo");
  const cityName = document.querySelector(".cityName");
  const img = document.querySelector(".icon");
  const conditio = document.querySelector(".conditio");
  const celcius = document.querySelector(".celcius");
  const humidity = document.querySelector(".humidity");
  query = tex.value;

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a7a754c64bmsh3333f72355d146cp15fcafjsn2a77e185bf84",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(json.current.condition.text);
      cityName.innerHTML = json.location.name;
      img.style.display = "flex";
      img.src = json.current.condition.icon;
      conditio.innerHTML = json.current.condition.text;
      celcius.innerHTML = `<h3 class="celcius">Temp (C) : ${json.current.temp_c}</h3>`;
      humidity.innerHTML = `Humidity : ${json.current.humidity}`;
    })
    .catch((err) => console.log(err));
});

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
