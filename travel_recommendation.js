function showResults() {
    const input = document.getElementById('recommendationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const result = data.countries.find(item => item.toLowerCase() === input);
        console.log(result);

        /*if (country) {
          const cities = country.cities.join(', ');*/
          /*const citiesName = country.cities.name.join(', ');
          const citiesImg = country.cities.imageUrl.join(', ');
          const citiesDescription = country.cities.description.join(', ');*/

          //resultDiv.innerHTML += `<h2>${cities.name}</h2>`;
          /*resultDiv.innerHTML += `<h3>${citiesName}</h3>`
          resultDiv.innerHTML += `<img src="${citiesImg}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Description:</strong> ${citiesDescription}</p>`;*/
          //console.log(cities.name);
        /*} else {
          resultDiv.innerHTML = 'Not found.';
        }*/
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }

  btnSearch.addEventListener('click', showResults);