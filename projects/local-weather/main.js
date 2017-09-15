/* globals $ */
$(document).ready(function () {
  $.ajaxSetup({
    timeout: 1000
  })

  getLocation(getWeather)

  $('.toggleUnit').click(toggleUnit)

  $('#collapseGroup').on('shown.bs.collapse', function () {
    $('.new-location').focus()
  })

  $('.search').click(function () {
    var location = $('.new-location').val()
    getWeather(location)
    $('#collapseGroup').collapse('hide')
    $('.new-location').val('')
  })

  $('.new-location').keypress(function (e) {
    if (e.which === 13) { // 13 is keyCode for enter
      $('.search').click()
    }
  })
})

var getLocation = function (callback) {
  $.ajax({
    url: 'https://geoip.nekudo.com/api/?callback=?',
    dataType: 'jsonp',
    success: function (data) {
      if (!data.city || !data.country.code) {
        return getWeather('London, UK')
      }
      return callback(data.city + ', ' + data.country.code)
    },
    timeout: 1000,
    error: function (jqXHR, status, errorThrown) {
      return getWeather('London, UK')
    }
  })
}

var getWeather = function (location) {
  if (!location) return getWeather('London, UK')

  $.getJSON('https://api.openweathermap.org/data/2.5/weather?callback=?', {
    q: location,
    units: 'metric',
    APPID: '8525059d8fe9de298f4a8eb9724ef801'
  }, function (data) {
    if (data.cod !== 200) return getWeather('London, UK')

    $('.location').html(location)
    $('.temp').data('val', data.main.temp)
    setTemp()
    $('.tempDesc').html(
      '<img src="https://openweathermap.org/img/w/' +
      data.weather[0].icon + '.png" /> ' + data.weather[0].description
    )
  })
}

var setTemp = function () {
  var degree = $('.temp').data('val')
  var unit = $('.toggleUnit').data('unit')

  if (unit === 'celsius') {
    $('.toggleUnit').html('°C')
  } else if (unit === 'fahrenheit') {
    degree = (1.8 * degree + 32).toFixed(2)
    $('.toggleUnit').html('°F')
  }

  $('.temp').html(degree)
}

var toggleUnit = function () {
  var unit = $('.toggleUnit').data('unit')
  $('.toggleUnit').data('unit', (unit === 'celsius') ? 'fahrenheit' : 'celsius')
  setTemp()
}
