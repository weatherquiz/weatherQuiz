// generic template with names of cities plugged in
const locales = [
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

const weatherQuiz = {};
// api info
weatherQuiz.apiURL = 'https://api.weatherbit.io/v2.0/current';
weatherQuiz.apikey = '651ad6758ca042e2ba4e3da504485e1d';

// variables
weatherQuiz.rand = 0;

weatherQuiz.cityOne = '';
weatherQuiz.cityTwo = '';

weatherQuiz.valueOne = 0;
weatherQuiz.valueTwo = 0;

// functions
weatherQuiz.getRandomCity = (whichCity) => {
    weatherQuiz.rand = Math.floor(Math.random() * locales.length);
    weatherQuiz.whichCity = locales[weatherQuiz.rand].city;
    $('.whichCity').html(weatherQuiz.whichCity);
}

weatherQuiz.ajaxTemperatureData = (city, value) => {
    $.ajax({
        url: weatherQuiz.apiURL,
        method: 'GET',
        dataType: 'json',
        data: {
            key: weatherQuiz.apikey,
            city: city,
            format: 'json'
        }
    }).then(function (res) {
        value = (res.data[0].temp);
    });
}

weatherQuiz.ajaxImage = (city, input) => {
    $.ajax({
        url: 'https://api.unsplash.com/search/photos/',
        method: 'GET',
        dataType: 'json',
        data: {
            client_id: 'wPc_7irjVjTU9ez7gjehFg6qAyrOd2HEkx_YY397uts',
            query: city,
            per_page: 1
        }
    }).then(function (res) {
        $(input).css('background-image', `url(${res.results[0].urls.small})`)
    });
}

weatherQuiz.answerChecker = (imageClicked, imageOther) => {
    // using hasClass to prevent multiple activations per question
    if (imageClicked > imageOther && !$('h4').hasClass('incorrect')) {
        // respond with correct or incorrect styling and display current temperatures for both locations
        $('h4').addClass('correct').text('Correct!')
        $('.inputOptionOne').addClass('correctImage')
        $('.inputOptionTwo').addClass('incorrectImage')
    } else if (imageClicked < imageOther && !$('h4').hasClass('correct')){
        $('h4').addClass('incorrect').text('Incorrect!')
        $('.inputOptionOne').addClass('incorrectImage')
        $('.inputOptionTwo').addClass('correctImage')
    }
    $('.answerOne').html(weatherQuiz.valueOne)
    $('.answerTwo').html(weatherQuiz.valueTwo)
}

// app run

// randomize  locations from array of popular cities
weatherQuiz.getCity = function () {
    weatherQuiz.getRandomCity(weatherQuiz.cityOne);
    weatherQuiz.getRandomCity(weatherQuiz.cityTwo);
}

// pull live temperature data for both randomized cities from weather API
weatherQuiz.getWeather = function () {
    weatherQuiz.ajaxTemperatureData(weatherQuiz.cityOne, weatherQuiz.valueOne);
    weatherQuiz.ajaxTemperatureData(weatherQuiz.cityTwo, weatherQuiz.valueTwo);
}

// pull an image from unsplash using city name as search query
weatherQuiz.getCityImages = function () {
    weatherQuiz.ajaxImage(weatherQuiz.cityOne, '.inputOptionOne');
    weatherQuiz.ajaxImage(weatherQuiz.cityTwo, '.inputOptionTwo');
}

// compare temperatures to determine answer
$('.inputOptionOne').on('click', function() {
    // checking if option 1 is correct answer
    weatherQuiz.answerChecker(weatherQuiz.valueOne, weatherQuiz.valueTwo);
})
$('.inputOptionTwo').on('click', function() {
        // checking if option 2 is correct answer
        weatherQuiz.answerChecker(weatherQuiz.valueTwo, weatherQuiz.valueOne);
})

// clear all items 
weatherQuiz.refresh = function () {
    $('h4').empty().removeClass('correct').removeClass('incorrect');
    $('h3').empty()
    $('div').removeClass('correctImage').removeClass('incorrectImage')
};

// populate next question
$('.nextQuestion').on('click', function() {
    if ($('h4').hasClass('correct') || $('h4').hasClass('incorrect')) {
        weatherQuiz.refresh();
        weatherQuiz.getCity()
        weatherQuiz.getWeather(),
        weatherQuiz.getCityImages()
    }
})

// quizStartcity.init = () => {
//     getCity();
//     getCityImages();
//     getWeather();
// }

$(function () {
    // populate first question
    weatherQuiz.getCity();
    weatherQuiz.getCityImages();
    weatherQuiz.getWeather();
})
