var reverse = require('ascii-art-reverse')

    // makes a visible HTML console
    require('console-log').show(true)

    var coolbear =
    " ('-^-/') \n" +
    " `o__o' ]  \n" +
    "    (_Y_) _/  \n" +
    "  _..`--'-.`, \n" +
    " (__)_,--(__) \n" +
    "     7:   ; 1 \n" +
    "   _/,`-.-' : \n" +
    " (_,)-~~(_,) \n"

    setInterval(function() { console.log(coolbear) }, 1000)

    setTimeout(function() {
    setInterval(function() { console.log(reverse(coolbear)) }, 1000)
    }, 500)
