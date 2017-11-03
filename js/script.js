var url = 'http://api.icndb.com/jokes/random',
	paragraph = document.getElementById('joke'),
	button = document.getElementById('get-joke');

button.addEventListener('click', function() {

	getJoke();
});



function getJoke() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {  // The load event is fired when a resource and its dependent resources have finished loading.


		/* odpowiedz serwera przychodzi do atrybutu 'response' obiektu XMLHttpREquest w formacie JSON,
		 konwertujemy ją na obiekt JS wywolujac metode parse na natywnym javaskryptowym obiekcie JSON. 
		 Powstały obiekt zapisujemy w zmiennej response */
		var response = JSON.parse(xhr.response);  


		/* zmienna/obiekt response ma dwa klucze - type i value(patrz w dev tools browsera).
		Z kolei value jest rowniez obiektem o kilku atrybutach (categories, id, joke).
		Nas interesuje atrybut joke którego wartość chcemy wyswietlic w paragrafie */
		paragraph.innerHTML = response.value.joke; 
	});

	xhr.send();
}

getJoke();