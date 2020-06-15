const weatherQuiz = {};

// array of cities for the Quiz
weatherQuiz.locales = [
    {
        city: 'Addis Ababa',
        country: 'Ethiopia'
    },
    {
        city: 'Agra',
        country: 'India'
    },
    {
        city: 'Amsterdam',
        country: 'The Netherlands'
    },
    {
        city: 'Anchorage',
        country: 'Alaska'
    },
    {
        city: 'Angkor Wat',
        country: 'Cambodia'
    },
    {
        city: 'Athens',
        country: 'Greece'
    },
    {
        city: 'Atlantic City',
        country: 'New Jersey'
    },
    {
        city: 'Auckland',
        country: 'New Zealand'
    },
    {
        city: 'Bali',
        country: 'Indonesia'
    },
    {
        city: 'Bangkok',
        country: 'Thailand'
    },
    {
        city: 'Barcelona',
        country: 'Spain'
    },
    {
        city: 'Bay Lake',
        country: 'Florida'
    },
    {
        city: 'Beijing',
        country: 'China'
    },
    {
        city: 'Berlin',
        country: 'Germany'
    },
    {
        city: 'Hamilton',
        country: 'Burmuda'
    },
    {
        city: 'Bethlehem',
        country: 'Pennsylvania'
    },
    {
        city: 'Bogota',
        country: 'Columbia'
    },
    {
        city: 'Papeete',
        country: 'Bora Bora'
    },
    {
        city: 'Brussels',
        country: 'Belgium'
    },
    {
        city: 'Budapest',
        country: 'Hungary'
    },
    {
        city: 'Buenos Aires',
        country: 'Argentina'
    },
    {
        city: 'Cairo',
        country: 'Egypt'
    },
    {
        city: 'Calgary',
        country: 'Canada'
    },
    {
        city: 'Cancun',
        country: 'Mexico'
    },
    {
        city: 'Cape Town',
        country: 'South Africa'
    },
    {
        city: 'Caracas',
        country: 'Venezuela'
    },
    {
        city: 'Casablanca',
        country: 'Morocco'
    },
    {
        city: 'Chicago',
        country: 'Illinois'
    },
    {
        city: 'Colombo',
        country: 'Sri Lanka'
    },
    {
        city: 'Columbus',
        country: 'Ohio'
    },
    {
        city: 'Copenhagen',
        country: 'Denmark'
    },
    {
        city: 'Dallas',
        country: 'Texas'
    },
    {
        city: 'New Delhi',
        country: 'India'
    },
    {
        city: 'Dubai',
        country: 'United Arab Emirates'
    },
    {
        city: 'Dublin',
        country: 'Ireland'
    },
    {
        city: 'Edinburgh',
        country: 'Scotland'
    },
    {
        city: 'Florence',
        country: 'Italy'
    },
    {
        city: 'Frankfurt',
        country: 'Germany'
    },
    {
        city: 'Geneva',
        country: 'Switzerland'
    },
    {
        city: 'Hong Kong',
        country: 'Hong Kong'
    },
    {
        city: 'Honolulu',
        country: 'Hawaii'
    },
    {
        city: 'Indianapolis',
        country: 'Indiana'
    },
    {
        city: 'Istanbul',
        country: 'Turkey'
    },
    {
        city: 'Jakarta',
        country: 'Indonesia'
    },
    {
        city: 'Jerusalem',
        country: 'Israel'
    },
    {
        city: 'Kathmandu',
        country: 'Nepal'
    },
    {
        city: 'Kuala Lumpur',
        country: 'Malaysia'
    },
    {
        city: 'Las Vegas',
        country: 'Nevada'
    },
    {
        city: 'Lima',
        country: 'Peru'
    },
    {
        city: 'Lisbon',
        country: 'Portugal'
    },
    {
        city: 'London',
        country: 'England'
    },
    {
        city: 'Los Angeles',
        country: 'California'
    },
    {
        city: 'Madrid',
        country: 'Spain'
    },
    {
        city: 'Male',
        country: 'Maldives'
    },
    {
        city: 'Marrakech',
        country: 'Morocco'
    },
    {
        city: 'Marseille',
        country: 'France'
    },
    {
        city: 'Mexico City',
        country: 'Mexico'
    },
    {
        city: 'Miami',
        country: 'Florida'
    },
    {
        city: 'Montego Bay',
        country: 'Jamaica'
    },
    {
        city: 'Montreal',
        country: 'Canada'
    },
    {
        city: 'Moscow',
        country: 'Russia'
    },
    {
        city: 'Munich',
        country: 'Germany'
    },
    {
        city: 'Muscat',
        country: 'Oman'
    },
    {
        city: 'Myrtle Beach',
        country: 'South Carolina'
    },
    {
        city: 'Nairobi',
        country: 'Kenya'
    },
    {
        city: 'Nassau',
        country: 'The Bahamas'
    },
    {
        city: 'New York City',
        country: 'United States'
    },
    {
        city: 'Oslo',
        country: 'Norway'
    },
    {
        city: 'Papua',
        country: 'New Guinea'
    },
    {
        city: 'Paris',
        country: 'France'
    },
    {
        city: 'Perth',
        country: 'Australia'
    },
    {
        city: 'Phoenix',
        country: 'Arizona'
    },
    {
        city: 'Phuket',
        country: 'Thailand'
    },
    {
        city: 'Point Pleasant',
        country: 'New Jersey'
    },
    {
        city: 'Prague',
        country: 'Czech Republic'
    },
    {
        city: 'Queenstown',
        country: 'New Zealand'
    },
    {
        city: 'Reykjavik',
        country: 'Iceland'
    },
    {
        city: 'Rio De Janeiro',
        country: 'Brazil'
    },
    {
        city: 'Rome',
        country: 'Italy'
    },
    {
        city: 'Salt Lake City',
        country: 'Utah'
    },
    {
        city: 'San Francisco',
        country: 'California'
    },
    {
        city: 'Santiago',
        country: 'Chile'
    },
    {
        city: 'Santorini',
        country: 'Greece'
    },
    {
        city: 'Seoul',
        country: 'South Korea'
    },
    {
        city: 'Shanghai',
        country: 'China'
    },
    {
        city: 'Singapore',
        country: 'Singapore'
    },
    {
        city: 'Stockholm',
        country: 'Sweden'
    },
    {
        city: 'Suva',
        country: 'Fiji'
    },
    {
        city: 'Sydney',
        country: 'Australia'
    },
    {
        city: 'Taipei',
        country: 'Taiwan'
    },
    {
        city: 'Tallinn',
        country: 'Estonia'
    },
    {
        city: 'Lhasa',
        country: 'Tibet'
    },
    {
        city: 'Tokyo',
        country: 'Japan'
    },
    {
        city: 'Toronto',
        country: 'Canada'
    },
    {
        city: 'Tunis',
        country: 'Tunisia'
    },
    {
        city: 'Ulan Bator',
        country: 'Mongolia'
    },
    {
        city: 'Vancouver',
        country: 'British Columbia'
    },
    {
        city: 'Vienna',
        country: 'Austria'
    },
    {
        city: 'Washington',
        country: 'D.C.'
    }
]

// setting variables to default values for global use
weatherQuiz.apiURL = 'https://api.weatherbit.io/v2.0/current';
weatherQuiz.apikey = '36f8097c5ac04b17a654731fdcfa0848';

weatherQuiz.cityOne = '';
weatherQuiz.cityTwo = '';


weatherQuiz.valueOne = 0;
weatherQuiz.valueTwo = 0;

weatherQuiz.currentQuestion = '';

// Create question to be asked and holds multiple values to be used to update DOM later
class Question {
    constructor(Phrase, API, units) {
        this.questionPhrase = Phrase
        this.API = API
        this.units = units
    }
}
weatherQuiz.questions = [
    new Question('Which is Warmer?', 'temp', '°C'),
    new Question('Which is Windier?', 'wind_spd', 'km/h'),
    new Question('Which is More Humid?', 'rh', '%'),
    new Question('Which is Cloudier?', 'clouds', '%'),
]

// chooses one of the questions randomly and displays it to user
weatherQuiz.askQuestion = function () {
    x = Math.floor(Math.random() * weatherQuiz.questions.length);
    weatherQuiz.currentQuestion = weatherQuiz.questions[x];
    $('.currentQuestion').text(weatherQuiz.currentQuestion.questionPhrase)
}

// gets 2 random cities from array
weatherQuiz.getCity = function () {
    weatherQuiz.randOne = Math.floor(Math.random() * weatherQuiz.locales.length);
    weatherQuiz.randTwo = Math.floor(Math.random() * weatherQuiz.locales.length);

    weatherQuiz.cityOne = weatherQuiz.locales[weatherQuiz.randOne].city;
    weatherQuiz.cityTwo = weatherQuiz.locales[weatherQuiz.randTwo].city;

    $('.cityOne').html(weatherQuiz.cityOne);
    $('.cityTwo').html(weatherQuiz.cityTwo);
}

// pulls weather data from weather API
weatherQuiz.getWeather = function () {
        $.ajax({
            url: weatherQuiz.apiURL,
            method: 'GET',
            dataType: 'json',
            data: {
                key: weatherQuiz.apikey,
                city: weatherQuiz.cityOne,
                format: 'json'
            }
        }).then(function (res) {
            weatherQuiz.valueOne = res.data[0][weatherQuiz.currentQuestion.API]
        });

        $.ajax({
            url: weatherQuiz.apiURL,
            method: 'GET',
            dataType: 'json',
            data: {
                key: weatherQuiz.apikey,
                city: weatherQuiz.cityTwo,
                format: 'json'
            }
        }).then(function (res) {
            weatherQuiz.valueTwo = res.data[0][weatherQuiz.currentQuestion.API]
        });
}

// pulls image using city as a search term via Unsplash API and displays it
weatherQuiz.getCityImages = function () {
    $.ajax({
        url: 'https://api.unsplash.com/search/photos/',
        method: 'GET',
        dataType: 'json',
        data: {
            client_id: 'wPc_7irjVjTU9ez7gjehFg6qAyrOd2HEkx_YY397uts',
            query: weatherQuiz.cityOne,
            per_page: 1
        }
    }).then(function (res) {
        $('.inputOptionOne').css('background-image', `url(${res.results[0].urls.small})`)
    });

    $.ajax({
        url: 'https://api.unsplash.com/search/photos/',
        method: 'GET',
        dataType: 'json',
        data: {
            client_id: 'wPc_7irjVjTU9ez7gjehFg6qAyrOd2HEkx_YY397uts',
            query: weatherQuiz.cityTwo,
            per_page: 1
        }
    }).then(function (res) {
        $('.inputOptionTwo').css('background-image', `url(${res.results[0].urls.small})`)
    });
}

// clear all classes and styling pushed to DOM to prepare for next question
weatherQuiz.refresh = function () {
    $('h4').empty().removeClass('correct').removeClass('incorrect');
    $('h3').empty()
    $('div').removeClass('correctImage').removeClass('incorrectImage')
};

//Makes pressing enter or space while focusing on the buttons perform the same action as clicking (for accessability reasons)
document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            item.click();
        }
    })
})

// populates next question, alerts user if no city is selected
$('.nextQuestion').on('click', function() {
    if ($('h4').hasClass('correct') || $('h4').hasClass('incorrect')) {
        weatherQuiz.init()
    }
    else {
        alert('Please select a city!')
    }
})

// checking users choice with answer
$('.inputOptionOne').on('click', function() {
    // checking if option 1 is correct answer, and using hasClass to prevent multiple activations per question
    if (weatherQuiz.valueOne > weatherQuiz.valueTwo && !$('h4').hasClass('incorrect')) {
        $('h4').addClass('correct').text('Correct!')
        $('.inputOptionOne').addClass('correctImage')
        $('.inputOptionTwo').addClass('incorrectImage')
    } else if (weatherQuiz.valueOne < weatherQuiz.valueTwo && !$('h4').hasClass('correct')) {
        $('h4').addClass('incorrect').text('Incorrect!')
        $('.inputOptionOne').addClass('incorrectImage')
        $('.inputOptionTwo').addClass('correctImage')
    }
    else if (weatherQuiz.valueOne == weatherQuiz.valueTwo && !$('h4').hasClass('correct') && !$('h4').hasClass('incorrect')){
        $('h4').addClass('correct').text('They are exactly equal!')
        $('.inputOptionOne').addClass('correctImage')
        $('.inputOptionTwo').addClass('correctImage')
    }
    $('.answerOne').html(`${weatherQuiz.valueOne} ${weatherQuiz.currentQuestion.units}`)
    $('.answerTwo').html(`${weatherQuiz.valueTwo} ${weatherQuiz.currentQuestion.units}`)
})
$('.inputOptionTwo').on('click', function () {
    // checking if option 2 is correct answer, and using hasClass to prevent multiple activations per question
    if (weatherQuiz.valueOne < weatherQuiz.valueTwo && !$('h4').hasClass('incorrect')) {
        $('h4').addClass('correct').text('Correct!')
        $('.inputOptionTwo').addClass('correctImage')
        $('.inputOptionOne').addClass('incorrectImage')
    } else if (weatherQuiz.valueOne > weatherQuiz.valueTwo && !$('h4').hasClass('correct')) {
        $('h4').addClass('incorrect').text('Incorrect!')
        $('.inputOptionTwo').addClass('incorrectImage')
        $('.inputOptionOne').addClass('correctImage')
    }
    else if (weatherQuiz.valueOne == weatherQuiz.valueTwo && !$('h4').hasClass('correct') && !$('h4').hasClass('incorrect')) {
        $('h4').addClass('correct').text('They are exactly equal!')
        $('.inputOptionOne').addClass('correctImage')
        $('.inputOptionTwo').addClass('correctImage')
    }
    $('.answerOne').html(`${weatherQuiz.valueOne} ${weatherQuiz.currentQuestion.units}`)
    $('.answerTwo').html(`${weatherQuiz.valueTwo} ${weatherQuiz.currentQuestion.units}`)
})

// init function to run on page load or new question
weatherQuiz.init = () => {
    weatherQuiz.refresh();

    weatherQuiz.getCity();
    weatherQuiz.getCityImages();

    weatherQuiz.askQuestion();
    weatherQuiz.getWeather();
}

// Document ready
$(function () {
    weatherQuiz.init()
})