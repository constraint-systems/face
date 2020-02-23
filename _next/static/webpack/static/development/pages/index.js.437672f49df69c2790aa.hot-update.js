webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/*! exports provided: layoutText, base, base2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutText", function() { return layoutText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base2", function() { return base2; });
function layoutText(cols, text_string) {
  console.log('layout');
  var array = [];
  var x = 0;
  var y = 0;
  var lines = text_string.split('\n');
  console.log(lines);
  var line_words = lines.map(function (l, i) {
    var unbroke_words = l.split(' ');
    var words = [];

    for (var _i = 0; _i < unbroke_words.length; _i++) {
      var word = unbroke_words[_i];

      if (word.length < cols) {
        words.push(word);
      } else {
        console.log(word);
        var re = new RegExp(re, 'g'); // let broken = word.match(/.{1,cols}/g)

        var broken = word.match('/.{0,5}/g');
        console.log(broken); // words.push(...broken)
      }
    }

    return words.map(function (w) {
      return w.split('');
    });
  });
  var i = 0;
  console.log(line_words);

  for (var l = 0; l < line_words.length; l++) {
    var line = line_words[l];

    for (var w = 0; w < line.length; w++) {
      var word = line[w];

      if (x + word.length > cols) {
        x = 0;
        y++;
      }

      for (var c = 0; c < word.length; c++) {
        array.push([word[c], x, y, i]);
        x++;
        i++;
      }

      if (w !== line.length - 1) {
        array.push([' ', x, y, i]);
        x++;
        i++;
      }
    } // line break


    if (l !== line_words.length - 1) {
      array.push(['\n', x, y, i]);
      x = 0;
      y++;
      i++;
    }
  }

  return array;
}
var base = 'data:image/png;base64,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';
var base2 = 'data:image/png;base64,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';

/***/ })

})
//# sourceMappingURL=index.js.437672f49df69c2790aa.hot-update.js.map