/* globals $, twttr */
var parseQuote = function (obj) { // eslint-disable-line no-unused-vars
  $('.quote').html(obj.quoteText)
  $('.author').html(obj.quoteAuthor || '-')
  $('#tweet-btn').empty()

  twttr.widgets.createShareButton(
    'http://halilsener.com/random-quote-machine/',
    document.getElementById('tweet-btn'),
    {
      text: obj.quoteText + ' - ' + obj.quoteAuthor || '-',
      hashtags: 'randomQuote',
      via: 'hi_sener',
      size: 'large',
      count: 'none'
    }
  )
}

var ajaxRequest = function () {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/',
    jsonp: 'callback',
    dataType: 'jsonp',
    data: { method: 'getQuote', format: 'jsonp', lang: 'en', jsonp: 'parseQuote' }
  })
}

$(document).ready(ajaxRequest)
$('.new-quote').click(ajaxRequest)
