/* globals $ */
var apiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|extracts&generator=search&formatversion=1&pilimit=50&exsentences=1&exlimit=20&exintro=1&explaintext=1&gsrnamespace=0&gsrlimit=10&callback=?&gsrsearch='
var wikiUrl = 'https://en.wikipedia.org/?curid='

$(document).ready(function () {
  $('.search').click(function () {
    $('.results').empty()
    var query = $('.query').val()
    $.ajax({
      method: 'GET',
      url: apiUrl + query,
      dataType: 'jsonp',
      success: function (data) {
        try {
          var result = data.query.pages
          var arr = Object.keys(result).map(function (key) { return result[key] })
          arr.sort(function (a, b) { return a.index - b.index })
          arr.forEach(function (obj) { createResult(obj) })
          document.activeElement.blur()
        } catch (e) {
          console.error(e)
        }
      }
    })
  })

  $('.query').keypress(function (e) {
    if (e.which === 13) { // 13 is keyCode for enter
      $('.search').click()
    }
  })

  $('.random').click(function () {
    window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank')
  })
})

function createResult (obj) {
  var result = '<div class="well"><a target="_blank" href="' +
      wikiUrl + obj.pageid + '"><h2>' + obj.title + '</h2><p>' +
      obj.extract + '</p></a></div>'
  $('.results').append(result)
}
