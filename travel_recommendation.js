function showResults() {
    const input = document.getElementById('recommendationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    const countriesKeywords = ["countries", "country"];
    const templesKeywords = ["temple", "temples"];
    const beachesKeywords = ["beach", "beaches"];
    let countriesFlag = 0, templesFlag = 0, beachesFlag = 0;
    let inputResult = '';
    resultDiv.innerHTML = '';

    if(countriesKeywords.find(item => item === input.toLowerCase())) {
        countriesFlag = 1;
    } else if(templesKeywords.find(item => item === input.toLowerCase())) {
        templesFlag = 1;
    } else if(beachesKeywords.find(item => item === input.toLowerCase())) {
        beachesFlag = 1;
    } else {
        resultDiv.innerHTML = 'Please use an appropiate keyword.';
        return;
    }
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if(countriesFlag) {
            inputResult = data.countries;
        } else if(templesFlag) {
            inputResult = data.temples;
        } else {
            inputResult = data.beaches;
        }
        inputResult.forEach(element => {
            resultDiv.innerHTML += `<h1>${element.name}</h1>`;
            let citiesArr = element.cities;
            citiesArr.forEach(city => {
                resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh" style="width: 20%">`;
                resultDiv.innerHTML += `<p><strong>${city.name}</strong></p>`;
                resultDiv.innerHTML += `<p>${city.description}</p>`;
            });
        });
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }

  btnSearch.addEventListener('click', showResults);