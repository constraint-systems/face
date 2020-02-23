(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/bottomstrip.js":
/*!***********************************!*\
  !*** ./components/bottomstrip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/grant/s/cs/faceoff/components/bottomstrip.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

var base_col = 12;
var bcw = 8;
var bch = 16;

function layoutText(items, c, cw, ch) {
  var cols = Math.floor(c.width / cw);
  var layout = [];
  var x = 0;
  var y = 0;

  function layoutContent(content) {
    var next = x + content.length;

    if (next > cols) {
      x = 0;
      y += 1;
    }

    layout.push([content, x, y]);
    x = x + content.length;
  }

  function layoutButton(button) {
    var key_label = button.key_label,
        label = button.label,
        key = button.key;
    var full_length = key_label.length + 0 + label.length;
    var next = x + full_length;

    if (next > cols) {
      x = 0;
      y += 1;
    }

    layout.push([key_label, x + 0.5, y, true, key, x, y, x + key_label.length + 1, y + 1]);
    x = x + key_label.length + 1;
    layout.push([label, x, y, false, key, x, y, x + label.length + 1, y + 1]);
    x = x + label.length + 1;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.type === 'button') {
        layoutButton(item);
      } else {
        layoutContent(item.content);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return layout;
}

function textWriter(base, cx, cw, ch) {
  return function writeText(text, x, y, invert) {
    cx.globalCompositeOperation = 'source-over';
    cx.fillStyle = '#efefef';
    cx.fillRect(x * cw, y * ch, text.length * cw, y * ch + ch);
    cx.globalCompositeOperation = 'darken';

    for (var i = x; i < x + text.length; i++) {
      var item = text[i - x];
      var key = item.charCodeAt(0) - 32;
      if (key === -22) key = 1;
      var sprite_x = key % base_col;
      var sprite_y = Math.floor(key / base_col);
      if (invert) cx.filter = 'invert(1)';
      cx.drawImage(base, sprite_x * cw, sprite_y * ch, cw, ch, i * cw, y * ch, cw, ch);
      cx.filter = 'invert(0)';
    }
  };
}

var no_highlights = [{
  type: 'button',
  key: 'ctrl+h',
  key_label: 'ctrl+h',
  label: 'columns-1'
}, {
  type: 'button',
  key: 'ctrl+l',
  key_label: 'ctrl+l',
  label: 'columns+1'
}, {
  type: 'button',
  key: 'ctrl+1',
  key_label: 'ctrl+1',
  label: 'size/2'
}, {
  type: 'button',
  key: 'ctrl+s',
  key_label: 'ctrl+s',
  label: 'save text as image'
}, {
  type: 'button',
  key: 'ctrl+v',
  key_label: 'ctrl+v',
  label: 'view source'
}];
var with_highlights = [{
  type: 'button',
  key: 'ctrl+m',
  key_label: 'ctrl+m',
  label: 'highlights off'
}, {
  type: 'button',
  key: 'ctrl+1',
  key_label: 'ctrl+1',
  label: 'size/2'
}, {
  type: 'button',
  key: 'ctrl+d',
  key_label: 'ctrl+d',
  label: 'save font'
}, {
  type: 'button',
  key: 'ctrl+f',
  key_label: 'ctrl+f',
  label: 'load font'
}, {
  type: 'button',
  key: 'ctrl+g',
  key_label: 'ctrl+g',
  label: 'font gallery'
}, {
  type: 'button',
  key: 'ctrl+v',
  key_label: 'ctrl+v',
  label: 'view source'
}];

var Topstrip = function Topstrip(_ref) {
  var cw = _ref.cw,
      ch = _ref.ch,
      base = _ref.base,
      ui_loaded = _ref.ui_loaded,
      mode = _ref.mode,
      highlight = _ref.highlight,
      scale = _ref.scale,
      keyTrigger = _ref.keyTrigger;
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(no_highlights),
      active = _useState[0],
      setActive = _useState[1];

  var layout_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var c = cref.current;
    c.width = window.innerWidth;
    var layout = layoutText(active, c, cw, ch);
    c.height = layout[layout.length - 1][2] * ch + ch;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (mode === 'font' || mode === 'char') {
      var new_active = with_highlights.slice();

      if (!highlight) {
        new_active[0].label = 'highlights on';
      } else {
        new_active[0].label = 'highlights off';
      }

      if (scale == 1) {
        new_active[1].key_label = 'ctrl+2';
        new_active[1].label = 'size*2';
        new_active[1].key = 'ctrl+2';
      } else {
        new_active[1].key_label = 'ctrl+1';
        new_active[1].label = 'size/2';
        new_active[1].key = 'ctrl+1';
      }

      setActive(new_active);
    } else {
      var _new_active = no_highlights.slice();

      if (scale == 1) {
        _new_active[2].key_label = 'ctrl+2';
        _new_active[2].label = 'size*2';
        _new_active[2].key = 'ctrl+2';
      } else {
        _new_active[2].key_label = 'ctrl+1';
        _new_active[2].label = 'size/2';
        _new_active[2].key = 'ctrl+1';
      }

      setActive(_new_active);
    }
  }, [mode, highlight, scale]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (ui_loaded) {
      var c = cref.current;
      var layout = layoutText(active, c, cw, ch);
      c.height = layout[layout.length - 1][2] * ch + ch;
      var cx = c.getContext('2d');
      var cols = Math.floor(c.width / cw); // cx.fillStyle = '#ddd'
      // cx.fillRect(0, 0, c.width, c.height)

      var writeText = textWriter(base, cx, cw, ch);
      layout_ref.current = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(layout), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var _item = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 4),
              text = _item[0],
              x = _item[1],
              y = _item[2],
              clickable = _item[3];

          layout_ref.current.push(item);
          cx.fillStyle = '#222';

          if (clickable) {
            cx.fillRect(x * cw - cw / 2, y * ch, text.length * cw + cw, ch);
          }

          writeText.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, [ui_loaded, active]);

  function checkClick(e) {
    var groups = layout_ref.current;
    var filter = groups.filter(function (o) {
      return o[5] * bcw <= e.clientX && o[6] * bch <= e.clientY - e.target.offsetTop && o[7] * bcw >= e.clientX && o[8] * bch >= e.clientY - e.target.offsetTop;
    });

    if (filter.length > 0) {
      keyTrigger(filter[0][4]);
    }
  }

  return __jsx("canvas", {
    onClick: checkClick,
    ref: cref,
    style: {
      position: 'fixed',
      left: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Topstrip);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");

function layoutText(cols, text_string) {
  var array = [];
  var x = 0;
  var y = 0;
  var lines = text_string.split('\n');
  var line_words = lines.map(function (l, i) {
    var unbroke_words = l.split(' ');
    var words = [];

    for (var _i = 0; _i < unbroke_words.length; _i++) {
      var word = unbroke_words[_i];

      if (word.length < cols) {
        words.push(word);
      } else {
        var broken = word.match(/.{1,cols}/g);
        words.push.apply(words, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(broken));
      }
    }

    return words.map(function (w) {
      return w.split('');
    });
  });
  var i = 0;

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
    }

    if (l !== line_words.length - 1) {
      array.push(['\n', x, y, i]);
      x = 0;
      y++;
      i++;
    }
  }

  return array;
}
var base = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAEACAYAAADlQ3kHAAALDUlEQVR4nO2bS44jtxIA+/6X9lsYY+Cph8o/mWRGANpI+SsWQ2J7yj//AAzm5/QAACdBABgNAsBo2gnw8/Pzz8/Peizpc/h/WK/vtFsZBMiF9fpOu5VBgFyy1ktb57b7025SBMgFAb5TPql1QbIEWMVlz7OKj17HZx3vxopuyFN9d4EAwXlW8QiAAP82uEyA1caTNqL2/SwxtCDAdxBg8TkCxPIR4E+DQwsR3ajW97sK4CWrzykBtfkIkPQ+AtTUQQBjn+ojjHWOaB1vfpTdAlTdFwRAABcIkESXG2ddMEmY6DzWOXZz6ggkiR+t9+tzdSUnCIAACHCRAKs874asOvpUr+spAT7ztOtuPQL/94pcnOVCdoEAOSBAErsEsF64ta72/dXnUn9vvSpOCSBdZ/YXEAIo62rfX32OAL746wXYRfSoYM3Xvh+N0/bNZrcAWetvjUMAZz4C5NZ5VoDTN8z7k+k9QlUJ4D3CRfH2O3WEsuYjwCIeAXRzZedl10GA4gXUxlkFkuJPr2tV3m4QwFnXGocAPek/IbQg64ugG/dMCkdBAIAHQQAYDQLAaBAARoMAMBoEgNEgAIwGAWA0CACjQQAYzTgBrP+kv+thulVf6xzRfO91aB8jj15Hdn8EEOIQQHcdCHAJ2oW05q3isx8ii85XdR1RwbLraOsjgPJzBECAq8m6gdY6twpgvY7qI1YWCOD83FsHAXQgQBHZG9t7hMiieqN5BesuwPK6yjo2AQFs+QjwGNlHi90CRMXT5md9Lr2q8iUQwBmHALbPxwtQdQHeObzx3qNAND6a561bfcSJ9o/OgQDGeASomed5AboQPTJk162KtyJtwGNHkSIBxPuprnQZCGCrjwCPUH3kqNrQVRsrq8+tRyAESM5DgBjXCJD1k+fF2r/LDfLm3S5AtD8CBPsjAAJ44sVK0wTw9l/lrV7ePO1GtOZpryt6/dX51rkRIKn/Kg8BEACgLQgAoxH/CAZ4GQSA0bDDYTQIAKNBABgNAsBoEABGgwAwGgSA0SAAjOaXAN0eZgIbWeufnR+du2r/IcBjIIBTAGsD7fveuK5UzR+tm7X+VZ9H60brr+IQwAgCIMAWAaJHp+yj1y5xo9frjdO+jwAIUAoCfAcBlGQJ4J1XemX1teLd6NL8p/ePe5/sHgABEKClAJ+FojcuWuc0XebMmkOqIwngfd+a7903CJBMlzkRYJMAu36au2ysFV3nc99g5331CuDdyMePQAjwL13nQwDfXGK9rAHUDZtusE+6zLlrvbscgarzf+VlDaBu2GRjSXSZEwFy83/lZQ2gbmjsE/3pPzWv9Qjg7ZuF9Wijzbf22Z2PAMo61n4I4OuzO3+bANa83Rt4V53dfbzrXtUHAYzxCLC33lgBPgOiP91ZGzjK6Q11a13rPsjawFX7b9k3WkCbfwoEQACTAK9wWjy4g2d3CAKABnYIjAYBYDQIAKNBABgNAsBoEABGgwAwGgSA0SAAjAYBYDS/HoeueghJ+zBV9KGoaJ72OqProO2jrZP1MJqXXf2z7z8CfORprzO6Dto+CGCLCwsQbezllRsQjffWueX+ab8AvfnW/giQlJ8V761zy/27VoCsAax1s/OnCVB1Xat87wZHAAQI1UEABDgqUNVc2jq/buzmObMEkOZBgMP5CPA9f7wA0kuqG833ou3fXQBvv+wvkNU8CCDURQBfHQRoIoCXqnztBo5ef1a8t85rAkh1vfMjAAK46lvzEcDIrvzXBfD27br+CJCcjwC++ln5CGCsm53fVQDrBtd+XnVd2X2014cAwXwEiM0Zzb9WgOjn1sGy86sWMCu+ev273D8EOJSPAD3uX3sBVi9tYe3LewHeOaQ+2RvVu57R9ffG7bp/p9f/V7w30doYARBA09+br72OX/FiR4CHQQAYDQLAaBAARoMAMBoEgNEgAIwGAWA0CACjQQAYDQLA04iPxhycDaActQDRh7i0dbx5XfpbH7Jb9dG+r61z+mG0rPmz9oF2LgQw9keAxwXwFrw9PxrfZQNV96+avyoPAZxxVXURwBdf1QcBkuJPb6CsOavX17vxvfkI4IyrqosACNDiJ1jLLgGin78uQFUeAjj7VcV13aBjBJBe0QGlBfb2X9WJcqsAq3XYtY7evlKd7HwEcM5bFYcA3+tk55uPQN5GUpz1fetc1TcAAWzzVuVZ6yCAMn9XHALE8qx12guQNZ+3zm4BVnHa9ZHWN0swLVXrnVUPAZLiEcBWLys+Wq9MAOtPcNXRwBtXVRcBYnHZ/REgKR4BbPWy6kfrpgvgvQHRhXpNgN39b5nfCgI446rqdu1/y/xWtgnwWWf18g6qjfP2j851uv8rAmhfWf0RINivS38E8PXP/80RiG4IAAuSQAgAT9NOAIBOIACMBgFgNAgAo0GAD/jjfBbc6Q8QYBZt7/Tp/1yKCDNoe4cRAHaQdoer/+n/dRFuEW73nNVfhAjgnOfWPlGeFSC7QfVDU92IPszV9bo+ee0LAQGSQIBL+1Q1vOWG7gYBzvZZPgyHAHtAgLN9lgJkN77lhu5GK4D3PypYj17afGn+rP7aPlnzI8BmEEDHMQGiA2Tlv4okgHaDad/Pypfmy+rvFci9bt6CEgjwdxAAAUZzagN762b3z47TxiNAExDgEgG8g0Tzbsf7U/6KANGjjHUebTwCbAIBECCUdyunjxBdBMgiuu+0wiFAEgjwqADegRDAFnd6A57un1XPvE/LCiOAKe70BjzdP6temQDWBgjw98+lDeT+Y654A2vn9/b3xklzinN7G2TFvQICIIAr7jWkhdduIO0N1PaP5kvzZ/XX9vHG/7oedYdgoykgwOMCSIW9F1zVP+uGQG8QAAFGc1wAgA5Yv/AQAJ4CAQAMIACMBgFgNAgAo0EAGA0CwGj+E6DqH4ay6mr/CT4L/sFsBggg1EOAt0GAYF+4GwQI9oW7KRdgFwgAHhDgUF3owVKA6OPDWX9EautUHZGsj9mu5hUfykpaf+/j39X9V31OXz8CKPtb50SASwXI3khRAbR1tAub3dfb3yqIt481v6q/9gtg9/UjQLCvtz8C7O2/ijP/EXyLALv6SnFWAbL7kC/UyxogK95bBwHIRwDFT2h2XykOAXLztfXV81gHQABbHALk5mvrjxVgd18pDgFy861IQiBAsK8UhwC5+VbGCpDVHwF65Uf5te7WARAgpz8C+PKjjBMgOsc0Aaq+aMSjyKEvKgQI9pXiEEBX/xkBPi909bKStcGr5j8tgHZ+bV3vfZPyqgSQ+i/7WgdAAATQzHedAKepXhj4zq517nY/20yCAGdBgCZEj0rgAwGagABnQACAgSAAjAYBYDQIAKNBAPhKtz9as3n3yiAFBICrqX4EJbvfbvpPCCEQ4DvLCW+5APg72Q+XnZ6jCgR4FATQgQCPggA6EOBREEBHmgDR/6FjV/4qvsv82peWUxu4+8b/AwJs7o8Avfj1v0R6F77LBvK+f3p+LQiQCwIU9/fGZeUjwHeePwJVv6/93BoXzcvagKcE2gUCJM2HALVzVNFGAOnz7DxtveyNXb2RszdcF5GqQAChHgIggK4QAhwVJTu/2xxVIIBQDwF6zFEFAiT11+Z7r8PLqQ3cfeP/AQGS+mvzEaAX2wTwHimyNp70ftURRtunasMgwHcQQDm/Nw4BeiNOGN240Y3mFXHVt+qIY51Pmlt6Vc+ZVae7CAjgnMsLAvSi72SPsmtDIICOvpM9CgL0ou9klxI9ulTP483f1W83/Se8DAS4S4D/ARoSaDQA+aKFAAAAAElFTkSuQmCC';
var base2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAEACAYAAADlQ3kHAAALF0lEQVR4nO2bSZIjNxIA6/+f1hxkko1YDcYOBBDuZryQsSUSTqLUqZ+/AAbzc3oAgJMgAIwGAWA07QT4+fn56+dnPZb0OfwX1us77VYGAXJhvb7TbmUQIJes9dLWue3+tJsUAXJBgO+UT2pdkCwBVnHZ86zio9fxWce7saIb8lTfXSBAcJ5VPAIgwN8NLhNgtfGkjah9P0sMLQjwHQRYfI4AsXwE+KfBoYWIblTr+10F8JLV55SA2nwESHofAWrqIICxT/URxjpHtI43P8puAaruCwIggAsESKLLjbMumCRMdB7rHLs5dQSSxI/W+/W5upITBEAABLhIgFWed0NWHX2q1/WUAJ952nW3HoH/fUUuznIhu0CAHBAgiV0CWC/cWlf7/upzqb+3XhWnBJCuM/sLCAGUdbXvrz5HAF/89QLsInpUsOZr34/Gaftms1uArPW3xiGAMx8Bcus8K8DpG+b9yfQeoaoE8B7honj7nTpCWfMRYBGPALq5svOy6yBA8QJq46wCSfGn17UqbzcI4KxrjUOAnvSfEFqQ9UXQjXsmhaMgAMCDIACMBgFgNAgAo0EAGA0CwGgQAEaDADAaBIDRIACMZpwA1n/S3/Uw3aqvdY5ovvc6tI+RR68juz8CCHEIoLsOBLgE7UJa81bx2Q+RReeruo6oYNl1tPURQPk5AiDA1WTdQGudWwWwXkf1ESsLBHB+7q2DADoQoIjsje09QmRRvdG8gnUXYHldZR2bgAC2fAR4jOyjxW4BouJp87M+l15V+RII4IxDANvn4wWougDvHN5471EgGh/N89atPuJE+0fnQABjPALUzPO8AF2IHhmy61bFW5E24LGjSJEA4v1UV7oMBLDVR4BHqD5yVG3oqo2V1efWIxACJOchQIxrBMj6yfNi7d/lBnnzbhcg2h8Bgv0RAAE88WKlaQJ4+6/yVi9vnnYjWvO01xW9/up869wIkNR/lYcACADQFgSA0Yh/BAO8DALAaNjhMBoEgNEgAIwGAWA0CACjQQAYDQLAaBAARvNLgG4PM4GNrPXPzo/OXbX/EOAxEMApgLWB9n1vXFeq5o/WzVr/qs+jdaP1V3EIYAQBEGCLANGjU/bRa5e40ev1xmnfRwAEKAUBvoMASrIE8M4rvbL6WvFudGn+0/vHvU92D4AACNBSgM9C0RsXrXOaLnNmzSHVkQTwvm/N9+4bBEimy5wIsEmAXT/NXTbWiq7zuW+w8756BfBu5ONHIAT4m67zIYBvLrFe1gDqhk032Cdd5ty13l2OQNX5v/KyBlA3bLKxJLrMiQC5+b/ysgZQNzT2if70n5rXegTw9s3CerTR5lv77M5HAGUdaz8E8PXZnb9NAGve7g28q87uPt51r+qDAMZ4BNhbb6wAnwHRn+6sDRzl9Ia6ta51H2Rt4Kr9t+wbLaDNPwUCIIBJgFc4LR7cwbM7BAFAAzsERoMAMBoEgNEgAIwGAWA0CACjQQAYDQLAaBAARoMAMJpfj0NXPYSkfZgq+lBUNE97ndF10PbR1sl6GM3Lrv7Z9x8BPvK01xldB20fBLDFhQWINvbyyg2Ixnvr3HL/tF+A3nxrfwRIys+K99a55f5dK0DWANa62fnTBKi6rlW+d4MjAAKE6iAAAhwVqGoubZ1fN3bznFkCSPMgwOF8BPieP14A6SXVjeZ70fbvLoC3X/YXyGoeBBDqIoCvDgI0EcBLVb52A0evPyveW+c1AaS63vkRAAFc9a35CGBkV/7rAnj7dl1/BEjORwBf/ax8BDDWzc7vKoB1g2s/r7qu7D7a60OAYD4CxOaM5l8rQPRz62DZ+VULmBVfvf5d7h8CHMpHgB73r70Aq5e2sPblvQDvHFKf7I3qXc/o+nvjdt2/0+v/K96baG2MAAig6e/N117Hr3ixI8DDIACMBgFgNAgAo0EAGA0CwGgQAEaDADAaBIDRIACMBgHgacRHYw7OBlCOWoDoQ1zaOt68Lv2tD9mt+mjf19Y5/TBa1vxZ+0A7FwIY+yPA4wJ4C96eH43vsoGq+1fNX5WHAM64qroI4Iuv6oMASfGnN1DWnNXr69343nwEcMZV1UUABGjxE6xllwDRz18XoCoPAZz9quK6btAxAkiv6IDSAnv7r+pEuVWA1TrsWkdvX6lOdj4COOetikOA73Wy881HIG8jKc76vnWu6huAALZ5q/KsdRBAmb8rDgFiedY67QXIms9bZ7cAqzjt+kjrmyWYlqr1zqqHAEnxCGCrlxUfrVcmgPUnuOpo4I2rqosAsbjs/giQFI8AtnpZ9aN10wXw3oDoQr0mwO7+t8xvBQGccVV1u/a/ZX4r2wT4rLN6eQfVxnn7R+c63f8VAbSvrP4IEOzXpT8C+Prn/+YIRDcEgAVJIASAp2knAEAnEABGgwAwGgSA0SDAB/xxPgvu9AcIMIu2d/r0fy5FhBm0vcMIADtIu8PV//T/ugi3CLd7zuovQgRwznNrnyjPCpDdoPqhqW78GPlDfsvr+uS1LwQESAIBLu1T1fCWG7obBDjb57MuAmwGAc72WQqQ3fiWG5rF/59uhJdKgFW+Yo6vL2/+as7s/to+WfMjQBIIkNNf2ydr/mWH6AYeKIBpg63e126wqv5SXnV/r0DudfMWlEAAWxwCIMAITm1gb93s/tlx2ngEaAICXCKAd5Bo3u14f8pfESB6lLHOo41HgE0gAAKE8m7l9BGiiwBZRPedVjgESAIBHhXAOxAC2OJOb8DT/bPqmfdpWWEEMMWd3oCn+2fVKxPA2gAB/vy5tIHcf8wVb2Dt/N7+3jhpTnFub4OsuFdAAARwxb2GtPDaDaS9gdr+0Xxp/qz+2j7e+F/Xo+4QbDQFBHhcAKmw94Kr+mfdEOgNAiDAaI4LANAB6xceAsBTIACAAQSA0SAAjAYBYDQIAKNBABjNvwJU/cNQVl3tP8FnwT+YzQABhHoI8DYIEOwLd4MAwb5wN+UC7AIBwAMCHKoLPVgKEH18OOuPSG2dqiOS9THb1bziQ1lJ6+99/Lu6/6rP6etHAGV/65wIcKkA2RspKoC2jnZhs/t6+1sF8fax5lf1134B7L5+BAj29fZHgL39V3HmP4JvEWBXXynOKkB2H/KFelkDZMV76yAA+Qig+AnN7ivFIUBuvra+eh7rAAhgi0OA3Hxt/bEC7O4rxSFAbr4VSQgECPaV4hAgN9/KWAGy+iNAr/wov9bdOgAC5PRHAF9+lHECROeYJkDVF414FDn0RYUAwb5SHALo6j8jwOeFrl5WsjZ41fynBdDOr63rvW9SXpUAUv9lX+sACIAAmvmuE+A01QsD39m1zt3uZ5tJEOAsCNCE6FEJfCBAExDgDAgAMBAEgNEgAIwGAWA0CABf6fZHazbvXhmkgABwNdWPoGT3203/CSEEAnxnOeEtFwB/JvvhstNzVIEAj4IAOhDgURBABwI8CgLoSBMg+j907MpfxXeZX/vScmoDd9/4/4AAm/sjQC9+/S+R3oXvsoG875+eXwsC5IIAxf29cVn5CPCd549A1e9rP7fGRfOyNuApgXaBAEnzIUDtHFW0EUD6PDtPWy97Y1dv5OwN10WkKhBAqIcACKArhABHRcnO7zZHFQgg1EOAHnNUgQBJ/bX53uvwcmoDd9/4/4AASf21+QjQi20CeI8UWRtPer/qCKPtU7VhEOA7CKCc3xuHAL0RJ4xu3OhG84q46lt1xLHOJ80tvarnzKrTXQQEcM7lBQF60XeyR9m1IRBAR9/JHgUBetF3skuJHl2q5/Hm7+q3m/4TXgYC3CXA/wDDf/yR5sRFvwAAAABJRU5ErkJggg==';

/***/ }),

/***/ "./components/titlebutton.js":
/*!***********************************!*\
  !*** ./components/titlebutton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/grant/s/cs/faceoff/components/titlebutton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

var base_col = 12;
var cw = 8;
var ch = 16;

function layoutText(items, c, cw, ch) {
  var cols = Math.floor(c.width / cw);
  var layout = [];
  var x = 0;
  var y = 0;

  function layoutContent(content) {
    var next = x + content.length;

    if (next > cols) {
      x = 0;
      y += 1;
    }

    layout.push([content, x, y]);
    x = x + content.length;
  }

  function layoutButton(button) {
    var key_label = button.key_label,
        label = button.label,
        key = button.key;
    var full_length = key_label.length + 0 + label.length;
    var next = x + full_length;

    if (next > cols) {
      x = 0;
      y += 1;
    }

    layout.push([key_label, x + 0.5, y, true, key, x, y, x + key_label.length + 1, y + 1]);
    x = x + key_label.length + 1;
    layout.push([label, x, y, false, key, x, y, x + label.length + 1, y + 1]);
    x = x + label.length + 1;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.type === 'button') {
        layoutButton(item);
      } else {
        layoutContent(item.content);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return layout;
}

function textWriter(base, cx, cw, ch) {
  return function writeText(text, x, y, invert) {
    cx.globalCompositeOperation = 'source-over';
    cx.fillStyle = '#efefef';
    cx.fillRect(x * cw, 0, text.length * cw, ch);
    cx.globalCompositeOperation = 'darken';

    for (var i = x; i < x + text.length; i++) {
      var item = text[i - x];
      var key = item.charCodeAt(0) - 32;
      if (key === -22) key = 1;
      var sprite_x = key % base_col;
      var sprite_y = Math.floor(key / base_col);
      if (invert) cx.filter = 'invert(1)';
      cx.drawImage(base, sprite_x * cw, sprite_y * ch, cw, ch, i * cw, y * ch, cw, ch);
      cx.filter = 'invert(0)';
    }
  };
}

var Titlebutton = function Titlebutton(_ref) {
  var base = _ref.base,
      content = _ref.content,
      ui_loaded = _ref.ui_loaded,
      keyTrigger = _ref.keyTrigger,
      max_width = _ref.max_width;
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var layout_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (ui_loaded) {
      var c = cref.current;
      c.width = max_width;
      var layout = layoutText(content, c, cw, ch);
      c.height = layout[layout.length - 1][2] * ch + ch;
      var cx = c.getContext('2d');
      var cols = Math.floor(c.width / cw);
      var writeText = textWriter(base, cx, cw, ch);
      layout_ref.current = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(layout), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var _item = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 4),
              text = _item[0],
              x = _item[1],
              y = _item[2],
              clickable = _item[3];

          layout_ref.current.push(item);
          cx.fillStyle = '#222';

          if (clickable) {
            cx.fillRect(x * cw - cw / 2, y * ch, text.length * cw + cw, ch);
          }

          writeText.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, [ui_loaded]);
  return __jsx("canvas", {
    ref: cref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Titlebutton);

/***/ }),

/***/ "./components/topstrip.js":
/*!********************************!*\
  !*** ./components/topstrip.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/grant/s/cs/faceoff/components/topstrip.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

var base_col = 12;
var bcw = 8;
var bch = 16;

function layoutText(items, c, cw, ch) {
  var cols = Math.floor(c.width / cw);
  var layout = [];
  var x = 0;
  var y = 0;

  function layoutContent(content) {
    var next = x + content.length;

    if (next > cols) {
      x = 0;
      y += 1;
    }

    layout.push([content, x, y]);
    x = x + content.length;
  }

  function layoutButton(button) {
    var key_label = button.key_label,
        label = button.label,
        key = button.key;
    var full_length = key_label.length + 0 + label.length;
    var next = x + full_length;

    if (next > cols) {
      x = 0;
      y += 1;
    }

    layout.push([key_label, x + 0.5, y, true, key, x, y, x + key_label.length + 1, y + 1]);
    x = x + key_label.length + 1;
    layout.push([label, x, y, false, key, x, y, x + label.length + 1, y + 1]);
    x = x + label.length + 1;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.type === 'button') {
        layoutButton(item);
      } else {
        layoutContent(item.content);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return layout;
}

function textWriter(base, cx, cw, ch) {
  return function writeText(text, x, y, invert) {
    cx.globalCompositeOperation = 'source-over';
    cx.fillStyle = '#efefef';
    cx.fillRect(x * cw, 0, text.length * cw, ch);
    cx.globalCompositeOperation = 'darken';

    for (var i = x; i < x + text.length; i++) {
      var item = text[i - x];
      var key = item.charCodeAt(0) - 32;
      if (key === -22) key = 1;
      var sprite_x = key % base_col;
      var sprite_y = Math.floor(key / base_col);
      if (invert) cx.filter = 'invert(1)';
      cx.drawImage(base, sprite_x * cw, sprite_y * ch, cw, ch, i * cw, y * ch, cw, ch);
      cx.filter = 'invert(0)';
    }
  };
}

var char_active = [{
  type: 'text',
  content: 'char mode:'
}, {
  type: 'button',
  key: 'h',
  key_label: 'h',
  label: 'left'
}, {
  type: 'button',
  key: 'j',
  key_label: 'j',
  label: 'down'
}, {
  type: 'button',
  key: 'k',
  key_label: 'k',
  label: 'up'
}, {
  type: 'button',
  key: 'l',
  key_label: 'l',
  label: 'right'
}, {
  type: 'button',
  key: 'd',
  key_label: 'd',
  label: 'draw'
}, {
  type: 'button',
  key: 'e',
  key_label: 'e',
  label: 'erase'
}, {
  type: 'button',
  key: 'Escape',
  key_label: 'esc',
  label: 'font mode'
}];
var text_active = [{
  type: 'text',
  content: 'text mode:'
}, {
  type: 'button',
  key: 'Escape',
  key_label: 'esc',
  label: 'font mode'
}];
var font_active = [{
  type: 'text',
  content: 'font mode:'
}, {
  type: 'button',
  key: 'h',
  key_label: 'h',
  label: 'left'
}, {
  type: 'button',
  key: 'j',
  key_label: 'j',
  label: 'down'
}, {
  type: 'button',
  key: 'k',
  key_label: 'k',
  label: 'up'
}, {
  type: 'button',
  key: 'l',
  key_label: 'l',
  label: 'right'
}, {
  type: 'button',
  key: 'Enter',
  key_label: 'enter',
  label: 'edit char'
}, {
  type: 'button',
  key: 't',
  key_label: 't',
  label: 'text mode'
}];
var actives = {
  font: font_active,
  text: text_active,
  "char": char_active
};

var Topstrip = function Topstrip(_ref) {
  var cw = _ref.cw,
      ch = _ref.ch,
      base = _ref.base,
      ui_loaded = _ref.ui_loaded,
      mode = _ref.mode,
      keyTrigger = _ref.keyTrigger;
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(font_active),
      active = _useState[0],
      setActive = _useState[1];

  var layout_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var c = cref.current;
    c.width = window.innerWidth;
    var layout = layoutText(active, c, cw, ch);
    c.height = layout[layout.length - 1][2] * ch + ch;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setActive(actives[mode]);
  }, [mode]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (ui_loaded) {
      var c = cref.current;
      var layout = layoutText(active, c, cw, ch);
      c.height = layout[layout.length - 1][2] * ch + ch;
      var cx = c.getContext('2d');
      var cols = Math.floor(c.width / cw); // cx.fillStyle = '#ddd'
      // cx.fillRect(0, 0, c.width, c.height)

      var writeText = textWriter(base, cx, cw, ch);
      layout_ref.current = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(layout), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var _item = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 4),
              text = _item[0],
              x = _item[1],
              y = _item[2],
              clickable = _item[3];

          layout_ref.current.push(item);
          cx.fillStyle = '#222';

          if (clickable) {
            cx.fillRect(x * cw - cw / 2, y * ch, text.length * cw + cw, ch);
          }

          writeText.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(item));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, [ui_loaded, active]);

  function checkClick(e) {
    var groups = layout_ref.current;
    var filter = groups.filter(function (o) {
      return o[5] * bcw <= e.clientX && o[6] * bch <= e.clientY && o[7] * bcw >= e.clientX && o[8] * bch >= e.clientY;
    });

    if (filter.length > 0) {
      keyTrigger(filter[0][4]);
    }
  }

  return __jsx("canvas", {
    onClick: checkClick,
    ref: cref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Topstrip);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fs%2Fcs%2Ffaceoff%2Fpages%2Findex.js!./":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fs%2Fcs%2Ffaceoff%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _Set();
  var tags = new _Set();
  var metaTypes = new _Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");

var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new _Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (
    /*#__PURE__*/
    function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/constants */ "./components/constants.js");
/* harmony import */ var _components_topstrip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/topstrip */ "./components/topstrip.js");
/* harmony import */ var _components_bottomstrip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/bottomstrip */ "./components/bottomstrip.js");
/* harmony import */ var _components_titlebutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/titlebutton */ "./components/titlebutton.js");



var _jsxFileName = "/home/grant/s/cs/faceoff/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var bcw = 8;
var bch = 16;
var hotkey_labels = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

function getLast(text, index) {
  var _char = text[index];

  if (_char === undefined) {
    var last_char = text[index - 1]; // if at start

    if (last_char === undefined) {
      _char = [null, 0, 0];
    } else {
      _char = last_char.slice();

      if (_char[0] === '\n') {
        _char[1] = 0;
        _char[2] += 1;
      } else {
        _char[1] += 1;
      }
    }
  }

  return _char;
}

function tReducer(state, action) {
  function mc(newtext, mark) {
    return mark.map(function (v) {
      return Math.min(Math.max(0, v), newtext.length);
    });
  }

  switch (action.type) {
    case 'insert':
      {
        var newkey = action.payload;
        var text_string = state.text.map(function (o) {
          return o[0];
        }).join('');
        var firsti = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.marker));
        var lasti = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.marker));
        var new_string = text_string.slice(0, Math.max(0, firsti)) + newkey + text_string.slice(lasti);
        var text_layout = Object(_components_constants__WEBPACK_IMPORTED_MODULE_6__["layoutText"])(action.col_num, new_string);
        var new_marker = [firsti + newkey.length, firsti + newkey.length];
        return {
          text: text_layout,
          marker: mc(text_layout, new_marker)
        };
      }

    case 'backspace':
      {
        var _text_string = state.text.map(function (o) {
          return o[0];
        }).join('');

        var _new_string, _new_marker;

        if (state.marker[0] === state.marker[1]) {
          _new_string = _text_string.slice(0, Math.max(0, state.marker[0] - 1)) + _text_string.slice(state.marker[0]);
          _new_marker = [state.marker[0] - 1, state.marker[0] - 1];
        } else {
          var _firsti = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.marker));

          var _lasti = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.marker));

          _new_string = _text_string.slice(0, Math.max(0, _firsti)) + _text_string.slice(_lasti);
          _new_marker = [_firsti, _firsti];
        }

        var _text_layout = Object(_components_constants__WEBPACK_IMPORTED_MODULE_6__["layoutText"])(action.col_num, _new_string);

        return {
          text: _text_layout,
          marker: mc(_text_layout, _new_marker)
        };
      }

    case 'highlight':
      {
        var _new_marker2 = state.marker;

        if (action.payload[0] != 0) {
          _new_marker2 = [state.marker[0], state.marker[1] + action.payload[0]];
        }

        if (action.payload[1] != 0) {
          var _firsti2 = state.marker[1];
          var pos = getLast(state.text, _firsti2);

          if (action.payload[1] < 0) {
            if (pos[2] > 0) {
              var row_up = state.text.filter(function (o) {
                return o[2] === pos[2] - 1;
              });
              var cc = row_up[pos[1]];
              if (cc === undefined) cc = row_up[row_up.length - 1];
              _new_marker2 = [state.marker[0], cc[3]];
            }
          } else if (action.payload[1] > 0) {
            if (pos[2] < state.text[state.text.length - 1][2]) {
              var row_down = state.text.filter(function (o) {
                return o[2] === pos[2] + 1;
              });
              var _cc = row_down[pos[1]];

              if (_cc === undefined) {
                _cc = row_down[row_down.length - 1];

                if (_cc[3] === state.text.length - 1) {
                  _cc[3] += 1;
                }
              }

              _new_marker2 = [state.marker[0], _cc[3]];
            }
          }
        }

        return {
          text: state.text,
          marker: mc(state.text, _new_marker2)
        };
      }

    case 'set_marker':
      {
        return {
          text: state.text,
          marker: mc(state.text, action.payload)
        };
      }

    case 'set_end_marker':
      {
        return {
          text: state.text,
          marker: mc(state.text, [state.marker[0], action.payload])
        };
      }

    case 'layout':
      {
        var _text_layout2 = Object(_components_constants__WEBPACK_IMPORTED_MODULE_6__["layoutText"])(action.col_num, state.text.map(function (o) {
          return o[0];
        }).join(''));

        return {
          text: _text_layout2,
          marker: mc(_text_layout2, state.marker)
        };
      }

    case 'move_marker':
      {
        var _new_marker3 = state.marker;

        if (action.payload[0] != 0) {
          _new_marker3 = [state.marker[0] + action.payload[0], state.marker[0] + action.payload[0]];
        }

        if (action.payload[1] != 0) {
          var _firsti3 = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.marker));

          var _pos = getLast(state.text, _firsti3);

          if (action.payload[1] < 0) {
            if (_pos[2] > 0) {
              var _row_up = state.text.filter(function (o) {
                return o[2] === _pos[2] - 1;
              });

              var _cc2 = _row_up[_pos[1]];
              if (_cc2 === undefined) _cc2 = _row_up[_row_up.length - 1];
              _new_marker3 = [_cc2[3], _cc2[3]];
            }
          } else if (action.payload[1] > 0) {
            if (_pos[2] < state.text[state.text.length - 1][2]) {
              var _row_down = state.text.filter(function (o) {
                return o[2] === _pos[2] + 1;
              });

              var _cc3 = _row_down[_pos[1]];

              if (_cc3 === undefined) {
                _cc3 = _row_down[_row_down.length - 1];

                if (_cc3[3] === state.text.length - 1) {
                  _cc3[3] += 1;
                }
              }

              _new_marker3 = [_cc3[3], _cc3[3]];
            }
          }
        }

        return {
          text: state.text,
          marker: mc(state.text, _new_marker3)
        };
      }

      defaut: throw new Error();

  }
}

var short_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago\u2014never mind how long precisely\u2014having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.";
short_text = "You see people, and you're disconnected from them, they mean nothing to you, but other times you can invest everything in someone you don't even know, silently believe in them, it might be on the underground or in a shop or something. You hope people are doing that with you as well. Some people, even when they're quite young, and they're in difficulty, maybe taking a battering in their life, but they still handle themselves with grace. I hope most people can be like that, hold it together, I wanted this album to be for people in that situation.";
short_text = "Face lets you edit both the text and the font it is rendered in. In text mode you can type and edit text normally. Press escape to enter font mode, where you can select a character to edit. Any changes to a character are visible immediately.\n\nAdditional controls are shown at the bottom. You can change the text area and save it as an image in text mode. In font mode, you can save the font, load a font (fonts are just a sprite sheet image), or choose a font from the font gallery.\n\nThe base font used is a subset of GNU Unifont.";
var initialt = {
  text: Object(_components_constants__WEBPACK_IMPORTED_MODULE_6__["layoutText"])(50, short_text),
  marker: [short_text.length, short_text.length]
};
var acel_num = 95;
var acols = 12;
var arows = Math.ceil(acel_num / acols);
var magnify = 8;

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('text'),
      mode = _useState[0],
      setMode = _useState[1];

  var mref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var tref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var aref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var amref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var cmref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      canvas_loaded = _useState2[0],
      setCanvasLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      ui_loaded = _useState3[0],
      setUILoaded = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(2),
      scale = _useState4[0],
      setScale = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(8 * 2),
      cw = _useState5[0],
      setCw = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(16 * 2),
      ch = _useState6[0],
      setCh = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(50),
      col_num = _useState7[0],
      setColNum = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(14),
      row_num = _useState8[0],
      setRowNum = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      amark = _useState9[0],
      setAmark = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([0, 0]),
      cmark = _useState10[0],
      setCmark = _useState10[1];

  var base_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var ui_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var flref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var clref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var tlref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      textClicked = _useState11[0],
      setTextClicked = _useState11[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(tReducer, initialt),
      tstate = _useReducer[0],
      tdispatch = _useReducer[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      refresh = _useState12[0],
      setRefresh = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      highlight = _useState13[0],
      setHighlight = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(_components_constants__WEBPACK_IMPORTED_MODULE_6__["base2"]),
      loaded = _useState14[0],
      setLoaded = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      gallery_data = _useState15[0],
      setGalleryData = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show_gallery = _useState16[0],
      setShowGallery = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetch('/library.json').then(function (data) {
      return data.json();
    }).then(function (json) {
      setGalleryData(json);
    });
  }, []);

  function loadImage(src) {
    var base = base_ref.current;
    var basex = base.getContext('2d');
    var base_img = document.createElement('img');

    base_img.onload = function () {
      basex.clearRect(0, 0, base.width, base.height);
      basex.fillStyle = 'white';
      basex.fillRect(0, 0, base.width, base.height);
      basex.drawImage(base_img, 0, 0, base.width, base.height);
      drawAlphabet();
      drawText();
      drawChar();
    };

    base_img.src = src;
    setLoaded(src);
  }

  function setSizes() {
    // text
    var t = tref.current;
    t.width = cw * (col_num + 2);
    t.height = ch * (row_num + 1); // text marker

    var m = mref.current;
    m.width = cw * (col_num + 3);
    m.height = ch * (row_num + 1); // alphabet

    var a = aref.current;
    a.width = cw * acols;
    a.height = ch * arows; // alphabet marker

    var am = amref.current;
    am.width = cw * acols;
    am.height = ch * arows; // character

    var c = cref.current;
    c.width = cw * magnify;
    c.height = ch * magnify; // character marker

    var cm = cmref.current;
    cm.width = c.width;
    cm.height = c.height;
  } // init


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (cw === 8 && ch === 16 && scale === 1 || cw === 16 && ch === 32 && scale === 2) {
      setSizes();
      var $base = document.createElement('canvas');
      $base.width = acols * (cw / scale);
      $base.height = arows * (ch / scale);
      var $basex = $base.getContext('2d');
      $basex.imageSmoothingEnabled = false;
      var base_img = document.createElement('img');

      base_img.onload = function () {
        $basex.fillStyle = 'white';
        $basex.fillRect(0, 0, $base.width, $base.height);
        $basex.drawImage(base_img, 0, 0, $base.width, $base.height);
        base_ref.current = $base;
        setCanvasLoaded(true);
      };

      base_img.src = loaded;
      var ui_img = document.createElement('img');

      ui_img.onload = function () {
        var $ui = document.createElement('canvas');
        $ui.width = acols * cw / scale;
        $ui.height = arows * ch / scale;
        var $uix = $ui.getContext('2d');
        $uix.imageSmoothingEnabled = false;
        $uix.drawImage(ui_img, 0, 0, $ui.width, $ui.height);
        ui_ref.current = $ui;
        setUILoaded(true);
      };

      ui_img.src = _components_constants__WEBPACK_IMPORTED_MODULE_6__["base2"];
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (canvas_loaded) {
      setSizes();
      drawMarker();
      drawText();
      drawAlphabet();
      drawAlphabetMarker();
      drawChar();
    }
  }, [cw, ch, scale, canvas_loaded]); // init after canvas loaded

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (canvas_loaded) {
      drawMarker();
      drawText();
      drawAlphabet();
      drawAlphabetMarker();
      drawChar();
    }
  }, [canvas_loaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (canvas_loaded) {
      drawMarker();
      drawAlphabetMarker();
    }
  }, [mode, tstate.text, tstate.marker, amark, col_num, highlight]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (canvas_loaded) {
      drawChar();
    }
  }, [mode, amark, cmark]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (canvas_loaded) {
      drawText();
    }
  }, [tstate.text, col_num]);

  function drawAlphabetMarker() {
    var am = amref.current;
    var amx = am.getContext('2d');
    amx.clearRect(0, 0, am.width, am.height); // amx.fillStyle = 'black'
    // amx.fillRect(0, 0, am.width, am.height)

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)];
    }

    var _getXY = getXY(amark),
        _getXY2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY, 2),
        x = _getXY2[0],
        y = _getXY2[1];

    amx.fillStyle = '#fff';
    amx.lineWidth = scale;
    var fl = flref.current;
    fl.width = 'font:-'.length * bcw;
    var flx = fl.getContext('2d');
    var fl_content = 'font ';
    flx.globalCompositeOperation = 'source-over';
    flx.fillStyle = '#efefef';
    flx.fillRect(0, 0, fl.width, fl.height);
    flx.globalCompositeOperation = 'darken';

    for (var i = 0; i < fl_content.length; i++) {
      var key = fl_content.charCodeAt(i) - 32;
      if (key === -22) key = 94;

      var _getXY3 = getXY(key),
          _getXY4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY3, 2),
          sprite_x = _getXY4[0],
          sprite_y = _getXY4[1];

      flx.drawImage(ui_ref.current, sprite_x * (cw / scale), sprite_y * (ch / scale), cw / scale, ch / scale, i * (cw / scale), 0 * (ch / scale), cw / scale, ch / scale);
    }

    if (mode === 'font') {
      var _getXY5 = function _getXY5(i) {
        return [i % acols, Math.floor(i / acols)];
      };

      amx.fillRect(x * cw, y * ch, cw, ch);

      var _key = ':'.charCodeAt(0) - 32;

      var _getXY6 = _getXY5(_key),
          _getXY7 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY6, 2),
          _sprite_x = _getXY7[0],
          _sprite_y = _getXY7[1];

      flx.drawImage(ui_ref.current, _sprite_x * bcw, _sprite_y * bch, bcw, bch, (fl_content.length - 1) * bcw, 0 * bch, bcw, bch);
      flx.drawImage(ui_ref.current, x * bcw, y * bch, bcw, bch, fl_content.length * bcw, 0 * bch, bcw, bch);
    }
  }

  function drawAlphabet() {
    var a = aref.current;
    var ax = a.getContext('2d');
    ax.imageSmoothingEnabled = false;
    ax.clearRect(0, 0, a.width, a.height);
    ax.drawImage(base_ref.current, 0, 0, a.width, a.height);
  }

  function drawChar() {
    var cm = cmref.current;
    var cmx = cm.getContext('2d');
    cmx.clearRect(0, 0, cm.width, cm.height);

    if (mode === 'char') {
      cmx.fillStyle = 'magenta';
      cmx.fillRect(cmark[0] * magnify, cmark[1] * magnify, magnify * scale, magnify * scale);
    }

    var c = cref.current;
    var cx = c.getContext('2d');
    cx.fillStyle = 'white';
    cx.fillRect(0, 0, c.width, c.height);
    cx.imageSmoothingEnabled = false;

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)];
    }

    var _getXY8 = getXY(amark),
        _getXY9 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY8, 2),
        sprite_x = _getXY9[0],
        sprite_y = _getXY9[1];

    cx.drawImage(base_ref.current, sprite_x * bcw, sprite_y * bch, bcw, bch, 0, 0, cw * magnify, ch * magnify);

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)];
    }

    var cl = clref.current;
    cl.width = 'char:t'.length * bcw;
    var clx = cl.getContext('2d');
    var cl_content = 'char ';
    clx.globalCompositeOperation = 'source-over';
    clx.fillStyle = '#efefef';
    clx.fillRect(0, 0, cl.width, cl.height);
    clx.globalCompositeOperation = 'darken';

    for (var i = 0; i < cl_content.length; i++) {
      var key = cl_content.charCodeAt(i) - 32;
      if (key === -22) key = 94;

      var _getXY10 = getXY(key),
          _getXY11 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY10, 2),
          _sprite_x2 = _getXY11[0],
          _sprite_y2 = _getXY11[1];

      clx.drawImage(ui_ref.current, _sprite_x2 * (cw / scale), _sprite_y2 * (ch / scale), cw / scale, ch / scale, i * (cw / scale), 0 * (ch / scale), cw / scale, ch / scale);
    }

    if (mode === 'char') {
      var _getXY12 = function _getXY12(i) {
        return [i % acols, Math.floor(i / acols)];
      };

      cx.strokeStyle = '#ddd';

      for (var r = 0; r < ch; r += scale) {
        for (var _c = 0; _c < cw; _c += scale) {
          cx.strokeRect(_c * magnify, r * magnify, magnify * scale, magnify * scale);
        }
      }

      var _key2 = ':'.charCodeAt(0) - 32;

      var _getXY13 = _getXY12(_key2),
          _getXY14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY13, 2),
          a_x = _getXY14[0],
          a_y = _getXY14[1];

      clx.drawImage(ui_ref.current, a_x * bcw, a_y * bch, bcw, bch, (cl_content.length - 1) * bcw, 0 * bch, bcw, bch);
      clx.drawImage(ui_ref.current, sprite_x * bcw, sprite_y * bch, bcw, bch, cl_content.length * bcw, 0 * bch, bcw, bch);
    }
  }

  function drawMarker() {
    var m = mref.current;
    var mx = m.getContext('2d');

    var _char2 = getLast(tstate.text, Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker).concat([tstate.text.length - 1])));

    m.width = cw * (col_num + 3);
    m.height = _char2[2] * ch + ch + ch;
    mx.clearRect(0, 0, m.width, m.height);

    if (mode != 'text' && highlight) {
      for (var i = 0; i < tstate.text.length; i++) {
        var _char3 = tstate.text[i];
        var akey = void 0;

        if (amark === 94) {
          akey = String.fromCharCode(32 - 22);
        } else {
          akey = String.fromCharCode(amark + 32);
        }

        if (_char3[0] === akey) {
          mx.fillStyle = '#222';
          mx.fillRect(_char3[1] * cw + cw + cw / 2, _char3[2] * ch + ch / 2, cw, ch);
        }
      }
    }

    if (mode === 'text') {
      var getXy = function getXy(mark) {
        var _char4 = getLast(tstate.text, mark);

        var x = _char4[1];
        var y = _char4[2];
        return [x, y];
      };

      if (tstate.marker[0] === tstate.marker[1]) {
        // cursor
        var _getXy = getXy(tstate.marker[0]),
            _getXy2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXy, 2),
            x = _getXy2[0],
            y = _getXy2[1];

        mx.fillStyle = 'green';
        mx.fillRect(x * cw + cw + cw / 2 - scale, y * ch + ch / 2, scale * 2, ch);
      } else {
        // highlight
        var firsti = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker));
        var lasti = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker));

        var _getXy3 = getXy(firsti),
            _getXy4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXy3, 2),
            x0 = _getXy4[0],
            y0 = _getXy4[1];

        var _getXy5 = getXy(lasti),
            _getXy6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXy5, 2),
            x1 = _getXy6[0],
            y1 = _getXy6[1];

        mx.fillStyle = 'green'; // same row

        if (y0 === y1) {
          mx.fillRect(x0 * cw + cw + cw / 2, y0 * ch + ch / 2, (x1 - x0) * cw, ch);
        } else {
          // first_row
          var frow = tstate.text.filter(function (o) {
            return o[2] === y0;
          });
          var last_frow = frow[frow.length - 1];
          mx.fillRect(x0 * cw + cw + cw / 2, y0 * ch + ch / 2, (last_frow[1] - x0 + 1) * cw, ch);

          if (y1 - y0 > 1) {
            var _loop = function _loop(_i) {
              var row = tstate.text.filter(function (o) {
                return o[2] === _i;
              });
              mx.fillRect(0 * cw + cw + cw / 2, _i * ch + ch / 2, (row[row.length - 1][1] + 1) * cw, ch);
            };

            for (var _i = y0 + 1; _i < y1; _i++) {
              _loop(_i);
            }
          } // last_row


          var lrow = tstate.text.filter(function (o) {
            return o[2] === y1;
          });
          var last_lrow = lrow[lrow.length - 1];
          mx.fillRect(0 * cw + cw + cw / 2, y1 * ch + ch / 2, x1 * cw, ch);
        }
      }
    }
  }

  function drawText() {
    var t = tref.current;
    var tx = t.getContext('2d');
    var text = tstate.text;

    var _char5 = getLast(tstate.text, Math.max(Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker)), tstate.text.length));

    t.width = cw * (col_num + 2);
    t.height = _char5[2] * ch + ch + ch; // text label

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)];
    }

    var tl = tlref.current;
    var tlx = tl.getContext('2d');
    tlx.clearRect(0, 0, tl.width, tl.height);
    tlx.globalCompositeOperation = 'source-over';
    tlx.fillStyle = '#efefef';
    tlx.fillRect(0, 0, tl.width, tl.height);
    tlx.globalCompositeOperation = 'darken';
    var tl_content = 'text:' + col_num + 'x' + (_char5[2] + 1);

    for (var i = 0; i < tl_content.length; i++) {
      var key = tl_content.charCodeAt(i) - 32;
      if (key === -22) key = 94;

      var _getXY15 = getXY(key),
          _getXY16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getXY15, 2),
          sprite_x = _getXY16[0],
          sprite_y = _getXY16[1];

      tlx.drawImage(ui_ref.current, sprite_x * (cw / scale), sprite_y * (ch / scale), cw / scale, ch / scale, i * (cw / scale), 0 * (ch / scale), cw / scale, ch / scale);
    }

    tx.fillStyle = 'white';
    tx.fillRect(0, 0, t.width, t.height);
    tx.imageSmoothingEnabled = false;

    for (var _i2 = 0; _i2 < text.length; _i2++) {
      var item = text[_i2];
      var x = item[1];
      var y = item[2];

      var _key3 = item[0].charCodeAt(0) - 32;

      if (_key3 === -22) _key3 = 94;

      var _sprite_x3 = _key3 % acols;

      var _sprite_y3 = Math.floor(_key3 / acols);

      tx.drawImage(base_ref.current, _sprite_x3 * bcw, _sprite_y3 * bch, bcw, bch, x * cw + cw, y * ch + ch / 2, cw, ch);
    }
  }

  function keyTrigger(keystring) {
    var shift = false;
    var ctrl = false;
    var meta = false;

    if (keystring.indexOf('ctrl') > -1) {
      ctrl = true;
      keystring = keystring.split('+')[1];
    }

    km_ref.current[keystring] = true;
    keyAction(keystring, {
      shiftKey: shift,
      ctrlKey: ctrl,
      meta: meta,
      preventDefault: function preventDefault() {}
    });
    setTimeout(function () {
      km_ref.current[keystring] = false;
    }, 0);
  }

  function keyAction(key, event) {
    var km = km_ref.current;
    var shift = event.shiftKey;
    var ctrl = event.ctrlKey;
    var meta = event.metaKey; // show gallery overrides everything else

    if (show_gallery) {
      if (key === 'Escape') {
        setShowGallery(function (prev) {
          return !prev;
        });
      } else {
        for (var i = 0; i < hotkey_labels.length; i++) {
          var check_key = hotkey_labels[i];

          if (key === check_key) {
            var src = gallery_data[hotkey_labels.indexOf(key)];
            setShowGallery(false);
            loadImage('/font-library/' + src);
          }
        }
      }

      return;
    } // size change can be done in any mode


    if (ctrl && key == 1) {
      setScale(1);
      setCw(8);
      setCh(16);
      event.preventDefault();
    } else if (ctrl && key == 2) {
      setScale(2);
      setCw(16);
      setCh(32);
      event.preventDefault();
    } else if (ctrl && key == 'v') {
      location.href = 'https://github.com/constraint-systems/face';
      event.preventDefault();
    }

    if (mode === 'text') {
      if (ctrl && key === 'a') {
        tdispatch({
          type: 'set_marker',
          payload: [0, tstate.text.length]
        });
      } else if (ctrl && key === 'h') {
        var new_col = col_num - 1;
        setColNum(new_col);
        tdispatch({
          type: 'layout',
          col_num: new_col
        });
        event.preventDefault();
      } else if (ctrl && key === 'l') {
        var _new_col = col_num + 1;

        setColNum(_new_col);
        tdispatch({
          type: 'layout',
          col_num: _new_col
        });
        event.preventDefault();
      } else if (ctrl && key === 's') {
        var link = document.createElement('a');
        var t = tref.current;
        var temp = document.createElement('canvas');
        temp.width = t.width;
        temp.height = t.height;
        var tempx = temp.getContext('2d');
        tempx.fillStyle = 'white';
        tempx.fillRect(0, 0, t.width, t.height);
        tempx.drawImage(t, 0, 0);
        temp.toBlob(function (blob) {
          link.setAttribute('download', 'face-text-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');
          link.setAttribute('href', URL.createObjectURL(blob));
          link.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          }));
        });
        event.preventDefault();
      }
    } else {
      if (ctrl && key == 'm') {
        setHighlight(function (prev) {
          return !prev;
        });
        event.preventDefault();
      } else if (ctrl && key === 'g') {
        setShowGallery(function (prev) {
          return !prev;
        });
        event.preventDefault();
      } else if (ctrl && key === 'd') {
        // font download
        var _link = document.createElement('a'); // always save font at 2x


        var a = aref.current;

        var _temp = document.createElement('canvas');

        _temp.width = bcw * acols * 2;
        _temp.height = bch * arows * 2;

        var _tempx = _temp.getContext('2d');

        _tempx.imageSmoothingEnabled = false;

        _tempx.drawImage(a, 0, 0, _temp.width, _temp.height);

        _temp.toBlob(function (blob) {
          _link.setAttribute('download', 'face-font-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');

          _link.setAttribute('href', URL.createObjectURL(blob));

          _link.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          }));
        });
      } else if (ctrl && key === 'f') {
        var handleChange = function handleChange(e) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              if (item.type.indexOf('image') < 0) {
                continue;
              }

              var _src = URL.createObjectURL(item);

              loadImage(_src);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.removeEventListener('change', handleChange);
        };

        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
        input.addEventListener('change', handleChange);
        event.preventDefault();
      }
    } // shift = true


    if (!ctrl && !meta) {
      if (mode === 'text') {
        if (key === 'Escape') {
          setMode('font');
        } else if (key === 'Backspace') {
          tdispatch({
            type: 'backspace',
            col_num: col_num
          });
        } else if (key === 'ArrowLeft') {
          if (shift) {
            tdispatch({
              type: 'highlight',
              payload: [-1, 0]
            });
          } else {
            tdispatch({
              type: 'move_marker',
              payload: [-1, 0]
            });
          }
        } else if (key === 'ArrowRight') {
          if (shift) {
            tdispatch({
              type: 'highlight',
              payload: [+1, 0]
            });
          } else {
            tdispatch({
              type: 'move_marker',
              payload: [+1, 0]
            });
          }
        } else if (key === 'ArrowUp') {
          if (shift) {
            tdispatch({
              type: 'highlight',
              payload: [0, -1]
            });
          } else {
            tdispatch({
              type: 'move_marker',
              payload: [0, -1]
            });
          }
        } else if (key === 'ArrowDown') {
          if (shift) {
            tdispatch({
              type: 'highlight',
              payload: [0, +1]
            });
          } else {
            tdispatch({
              type: 'move_marker',
              payload: [0, +1]
            });
          }
        } else {
          if (key.length === 1) {
            tdispatch({
              type: 'insert',
              col_num: col_num,
              payload: key
            });
            if (key === ' ') event.preventDefault();
          } else if (key === 'Enter') {
            tdispatch({
              type: 'insert',
              col_num: col_num,
              payload: '\n'
            });
          }
        }
      } else if (mode === 'font') {
        if (key === 'Enter') {
          setMode('char');
        } else if (key === 't') {
          setMode('text');
        }

        if (km['l']) {
          var new_amark = amark + 1;
          if (new_amark > acel_num - 1) new_amark = acel_num - 1;
          setAmark(new_amark);
        }

        if (km['h']) {
          var _new_amark = amark - 1;

          if (_new_amark < 0) _new_amark = 0;
          setAmark(_new_amark);
        }

        if (km['j'] || km['k']) {
          var layout = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(acel_num)).map(function (n, i) {
            return [i, i % acols, Math.floor(i / acols)];
          });

          var cell = layout[amark];

          if (km['k']) {
            var next = cell[2] - 1;

            if (next >= 0) {
              var up_row = layout.filter(function (c) {
                return c[2] === next;
              });
              var _new_amark2 = up_row[cell[1]];
              if (_new_amark2 === undefined) up_row[up_row.length - 1];
              setAmark(_new_amark2[0]);
            }
          }

          if (km['j']) {
            var _next = cell[2] + 1;

            if (_next <= layout[layout.length - 1][2]) {
              var dn_row = layout.filter(function (c) {
                return c[2] === _next;
              });
              var _new_amark3 = dn_row[cell[1]];
              if (_new_amark3 === undefined) _new_amark3 = dn_row[dn_row.length - 1];
              setAmark(_new_amark3[0]);
            }
          }
        }
      } else if (mode === 'char') {
        if (key === 'Escape') {
          setMode('font');
        }

        var movement = [0, 0];

        if (km.j) {
          movement[1] += 1 * scale;
        }

        if (km.k) {
          movement[1] -= 1 * scale;
        }

        if (km.h) {
          movement[0] -= 1 * scale;
        }

        if (km.l) {
          movement[0] += 1 * scale;
        }

        var moved = [cmark[0] + movement[0], cmark[1] + movement[1]];
        if (moved[0] < 0) moved[0] = 0;
        if (moved[0] > cw - scale) moved[0] = cw - scale;
        if (moved[1] < 0) moved[1] = 0;
        if (moved[1] > ch - scale) moved[1] = ch - scale;
        setCmark(moved); // might want to move this into draw marker - there can be a delay

        if (km.d) {
          editChar('black', moved);
        } else if (km.e) {
          editChar('white', moved);
        }
      }
    }
  }

  function editChar(fill, moved) {
    var b = base_ref.current;
    var bx = b.getContext('2d');
    var key = amark;
    var sprite_x = key % acols;
    var sprite_y = Math.floor(key / acols);

    if (fill === 'white') {
      bx.fillStyle = 'white';
      bx.fillRect(sprite_x * bcw + moved[0] / scale, sprite_y * bch + moved[1] / scale, 1, 1);
    } else {
      bx.fillStyle = 'black';
      bx.fillRect(sprite_x * bcw + moved[0] / scale, sprite_y * bch + moved[1] / scale, 1, 1);
    }

    drawAlphabet();
    drawChar();
    drawText();
  }

  function textDown(e) {
    setMode('text');
    var rect = e.target.getBoundingClientRect();
    var rawx = e.clientX - rect.left - cw;
    var rawy = e.clientY - rect.top;
    var rowtarg = Math.floor(rawy / ch);
    var coltarg = Math.round(rawx / cw);
    var index;
    var in_row = tstate.text.filter(function (e) {
      return e[2] === rowtarg;
    });

    if (in_row.length === 0) {
      index = tstate.text.length;
    } else {
      var _char6 = in_row[coltarg];

      if (_char6 === undefined) {
        _char6 = in_row[in_row.length - 1];
      }

      index = _char6[3];
    }

    tdispatch({
      type: 'set_marker',
      payload: [index, index]
    });
    setTextClicked(true);
  }

  function textMove(e) {
    if (textClicked) {
      var rect = e.target.getBoundingClientRect();
      var rawx = e.clientX - rect.left - cw;
      var rawy = e.clientY - rect.top;
      var rowtarg = Math.floor(rawy / ch);
      var coltarg = Math.round(rawx / cw);
      var index;
      var in_row = tstate.text.filter(function (e) {
        return e[2] === rowtarg;
      });

      if (in_row.length === 0) {
        index = tstate.text.length;
      } else {
        var _char7 = in_row[coltarg];

        if (_char7 === undefined) {
          _char7 = in_row[in_row.length - 1];
        }

        index = _char7[3];
      }

      tdispatch({
        type: 'set_end_marker',
        payload: index
      });
    }
  }

  function textUp(e) {
    var rect = e.target.getBoundingClientRect();
    var rawx = e.clientX - rect.left - cw;
    var rawy = e.clientY - rect.top;
    var rowtarg = Math.floor(rawy / ch);
    var coltarg = Math.round(rawx / cw);
    var index;
    var in_row = tstate.text.filter(function (e) {
      return e[2] === rowtarg;
    });

    if (in_row.length === 0) {
      index = tstate.text.length;
    } else {
      var _char8 = in_row[coltarg];

      if (_char8 === undefined) {
        _char8 = in_row[in_row.length - 1];
      }

      index = _char8[3];
    }

    tdispatch({
      type: 'set_end_marker',
      payload: index
    });
    setTextClicked(false);
  }

  function copyHandler(e) {
    var string = tstate.text.map(function (o) {
      return o[0];
    }).join('');
    var firsti = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker));
    var lasti = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker));
    var select = string.substr(firsti, lasti);
    e.clipboardData.setData('text/plain', select);
    event.preventDefault();
  }

  function cutHandler(e) {
    var string = tstate.text.map(function (o) {
      return o[0];
    }).join('');
    var firsti = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker));
    var lasti = Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tstate.marker));
    var select = string.substr(firsti, lasti);
    e.clipboardData.setData('text/plain', select);
    tdispatch({
      type: 'insert',
      col_num: col_num,
      payload: ''
    });
    event.preventDefault();
  }

  function pasteHandler(e) {
    var paste = (event.clipboardData || window.clipboardData).getData('text');
    tdispatch({
      type: 'insert',
      col_num: col_num,
      payload: paste
    });
    event.preventDefault();
  }

  function downHandler(e) {
    km_ref.current[e.key] = true;
    keyAction(e.key, e);
  }

  function upHandler(e) {
    km_ref.current[e.key] = false;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('copy', copyHandler);
    window.addEventListener('cut', cutHandler);
    window.addEventListener('paste', pasteHandler);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('copy', copyHandler);
      window.removeEventListener('cut', cutHandler);
      window.removeEventListener('paste', pasteHandler);
    };
  }, [mode, col_num, tstate, amark, cmark, show_gallery]);
  var scw = cw / scale;
  var sch = ch / scale;
  var title = 'Face';
  var description = 'Face lets you edit both the text and the font it is rendered in.';
  return __jsx("div", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174
    },
    __self: this
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176
    },
    __self: this
  }, "Face"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,shrink-to-fit=no",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://face.constraint.systems/face.png",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://face.constraint.systems",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192
    },
    __self: this
  })), __jsx(_components_topstrip__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cw: scw,
    ch: sch,
    scale: scale,
    base: ui_ref.current,
    ui_loaded: ui_loaded,
    mode: mode,
    keyTrigger: keyTrigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      marginTop: sch / 2,
      marginBottom: sch / 2
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative',
      marginRight: cw
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208
    },
    __self: this
  }, __jsx("canvas", {
    width: 'font'.length * scw,
    height: sch,
    ref: flref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214
    },
    __self: this
  }), __jsx("div", {
    onMouseDown: function onMouseDown() {
      setMode('font');
    },
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215
    },
    __self: this
  }, __jsx("canvas", {
    ref: aref,
    style: {
      position: 'relative',
      outline: mode === 'font' ? 'solid 1px black' : 'none'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1221
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      position: 'absolute',
      mixBlendMode: 'difference',
      left: 0,
      top: 0
    },
    ref: amref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228
    },
    __self: this
  }))), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1239
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240
    },
    __self: this
  }, __jsx("canvas", {
    width: 'char'.length * scw,
    height: ch / scale,
    ref: clref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1247
    },
    __self: this
  }, __jsx("canvas", {
    ref: cref,
    style: {
      position: 'relative',
      outline: mode === 'char' ? 'solid 1px black' : 'none'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1248
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: cmref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1255
    },
    __self: this
  })))), __jsx("div", {
    style: {
      position: 'relative',
      marginBottom: sch * 2
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1267
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }, __jsx("canvas", {
    width: 'text 100x100'.length * cw / scale,
    height: sch,
    ref: tlref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      position: 'relative',
      outline: mode === 'text' ? 'solid 1px black' : 'none'
    },
    ref: tref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281
    },
    __self: this
  }), __jsx("canvas", {
    style: {
      mixBlendMode: 'difference',
      position: 'absolute',
      left: -cw / 2,
      top: 0
    },
    onMouseDown: textDown,
    onMouseUp: textUp,
    onMouseMove: textMove,
    ref: mref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1288
    },
    __self: this
  }))), __jsx(_components_bottomstrip__WEBPACK_IMPORTED_MODULE_8__["default"], {
    cw: bcw,
    ch: bch,
    base: ui_ref.current,
    scale: scale,
    ui_loaded: ui_loaded,
    highlight: highlight,
    mode: mode,
    keyTrigger: keyTrigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303
    },
    __self: this
  }), show_gallery ? __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      background: 'rgba(220,220,220,0.8)'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1315
    },
    __self: this
  }, __jsx("div", {
    style: {
      background: '#efefef',
      outline: 'solid 1px black',
      overflow: 'hidden'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1326
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: bch
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1333
    },
    __self: this
  }, __jsx(_components_titlebutton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    base: ui_ref.current,
    ui_loaded: ui_loaded,
    keyTrigger: keyTrigger,
    max_width: window.innerWidth,
    content: [{
      type: 'text',
      content: 'font gallery:'
    }, {
      type: 'button',
      key: 'Escape',
      key_label: 'Esc',
      label: 'exit'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1334
    },
    __self: this
  })), gallery_data.map(function (f, i) {
    return __jsx("div", {
      style: {
        "float": 'left',
        marginRight: bcw * 2,
        marginBottom: bch
      },
      className: "jsx-3625601830",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1354
      },
      __self: this
    }, __jsx("img", {
      src: '/font-library/' + f,
      className: "jsx-3625601830",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1361
      },
      __self: this
    }), __jsx(_components_titlebutton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      base: ui_ref.current,
      ui_loaded: ui_loaded,
      keyTrigger: keyTrigger,
      max_width: acols * cw,
      content: [{
        type: 'button',
        key: hotkey_labels[i],
        key_label: hotkey_labels[i],
        label: f
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1362
      },
      __self: this
    }));
  }))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3625601830",
    __self: this
  }, "html{background:#efefef;line-height:0;}body{padding:0;margin:0;}img{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvZmFjZW9mZi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxMkN5QixBQUc4QixBQUlULEFBSUksVUFITCxJQUlYLEtBUmdCLEFBS2hCLGNBSkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9mYWNlb2ZmL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG4gIGNyZWF0ZVJlZixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGJhc2UsIGJhc2UyLCBsYXlvdXRUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnXG5pbXBvcnQgVG9wc3RyaXAgZnJvbSAnLi4vY29tcG9uZW50cy90b3BzdHJpcCdcbmltcG9ydCBCb3R0b21zdHJpcCBmcm9tICcuLi9jb21wb25lbnRzL2JvdHRvbXN0cmlwJ1xuaW1wb3J0IFRpdGxlYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVidXR0b24nXG5cbmxldCBiY3cgPSA4XG5sZXQgYmNoID0gMTZcblxubGV0IGhvdGtleV9sYWJlbHMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jy5zcGxpdCgnJylcblxuZnVuY3Rpb24gZ2V0TGFzdCh0ZXh0LCBpbmRleCkge1xuICBsZXQgY2hhciA9IHRleHRbaW5kZXhdXG4gIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgbGFzdF9jaGFyID0gdGV4dFtpbmRleCAtIDFdXG4gICAgLy8gaWYgYXQgc3RhcnRcbiAgICBpZiAobGFzdF9jaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXIgPSBbbnVsbCwgMCwgMF1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhciA9IGxhc3RfY2hhci5zbGljZSgpXG4gICAgICBpZiAoY2hhclswXSA9PT0gJ1xcbicpIHtcbiAgICAgICAgY2hhclsxXSA9IDBcbiAgICAgICAgY2hhclsyXSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyWzFdICs9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYXJcbn1cblxuZnVuY3Rpb24gdFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBmdW5jdGlvbiBtYyhuZXd0ZXh0LCBtYXJrKSB7XG4gICAgcmV0dXJuIG1hcmsubWFwKHYgPT4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdiksIG5ld3RleHQubGVuZ3RoKSlcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0Jzoge1xuICAgICAgbGV0IG5ld2tleSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IG5ld19zdHJpbmcgPVxuICAgICAgICB0ZXh0X3N0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCBmaXJzdGkpKSArXG4gICAgICAgIG5ld2tleSArXG4gICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKGxhc3RpKVxuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChhY3Rpb24uY29sX251bSwgbmV3X3N0cmluZylcbiAgICAgIGxldCBuZXdfbWFya2VyID0gW2ZpcnN0aSArIG5ld2tleS5sZW5ndGgsIGZpcnN0aSArIG5ld2tleS5sZW5ndGhdXG4gICAgICByZXR1cm4geyB0ZXh0OiB0ZXh0X2xheW91dCwgbWFya2VyOiBtYyh0ZXh0X2xheW91dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdiYWNrc3BhY2UnOiB7XG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgbmV3X3N0cmluZywgbmV3X21hcmtlclxuICAgICAgaWYgKHN0YXRlLm1hcmtlclswXSA9PT0gc3RhdGUubWFya2VyWzFdKSB7XG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHN0YXRlLm1hcmtlclswXSAtIDEpKSArXG4gICAgICAgICAgdGV4dF9zdHJpbmcuc2xpY2Uoc3RhdGUubWFya2VyWzBdKVxuICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSAtIDEsIHN0YXRlLm1hcmtlclswXSAtIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0aSkpICsgdGV4dF9zdHJpbmcuc2xpY2UobGFzdGkpXG4gICAgICAgIG5ld19tYXJrZXIgPSBbZmlyc3RpLCBmaXJzdGldXG4gICAgICB9XG4gICAgICBsZXQgdGV4dF9sYXlvdXQgPSBsYXlvdXRUZXh0KGFjdGlvbi5jb2xfbnVtLCBuZXdfc3RyaW5nKVxuICAgICAgcmV0dXJuIHsgdGV4dDogdGV4dF9sYXlvdXQsIG1hcmtlcjogbWModGV4dF9sYXlvdXQsIG5ld19tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnaGlnaGxpZ2h0Jzoge1xuICAgICAgbGV0IG5ld19tYXJrZXIgPSBzdGF0ZS5tYXJrZXJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSAhPSAwKSB7XG4gICAgICAgIG5ld19tYXJrZXIgPSBbc3RhdGUubWFya2VyWzBdLCBzdGF0ZS5tYXJrZXJbMV0gKyBhY3Rpb24ucGF5bG9hZFswXV1cbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSAhPSAwKSB7XG4gICAgICAgIGxldCBmaXJzdGkgPSBzdGF0ZS5tYXJrZXJbMV1cbiAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gPCAwKSB7XG4gICAgICAgICAgaWYgKHBvc1syXSA+IDApIHtcbiAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfdXBbcG9zWzFdXVxuICAgICAgICAgICAgaWYgKGNjID09PSB1bmRlZmluZWQpIGNjID0gcm93X3VwW3Jvd191cC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgbmV3X21hcmtlciA9IFtzdGF0ZS5tYXJrZXJbMF0sIGNjWzNdXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICBpZiAocG9zWzJdIDwgc3RhdGUudGV4dFtzdGF0ZS50ZXh0Lmxlbmd0aCAtIDFdWzJdKSB7XG4gICAgICAgICAgICBsZXQgcm93X2Rvd24gPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSArIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICBpZiAoY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjYyA9IHJvd19kb3duW3Jvd19kb3duLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY2NbM10gKz0gMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSwgY2NbM11dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IHRleHQ6IHN0YXRlLnRleHQsIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfbWFya2VyJzoge1xuICAgICAgcmV0dXJuIHsgdGV4dDogc3RhdGUudGV4dCwgbWFya2VyOiBtYyhzdGF0ZS50ZXh0LCBhY3Rpb24ucGF5bG9hZCkgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfZW5kX21hcmtlcic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHN0YXRlLnRleHQsXG4gICAgICAgIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgW3N0YXRlLm1hcmtlclswXSwgYWN0aW9uLnBheWxvYWRdKSxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnbGF5b3V0Jzoge1xuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChcbiAgICAgICAgYWN0aW9uLmNvbF9udW0sXG4gICAgICAgIHN0YXRlLnRleHQubWFwKG8gPT4gb1swXSkuam9pbignJylcbiAgICAgIClcbiAgICAgIHJldHVybiB7IHRleHQ6IHRleHRfbGF5b3V0LCBtYXJrZXI6IG1jKHRleHRfbGF5b3V0LCBzdGF0ZS5tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnbW92ZV9tYXJrZXInOlxuICAgICAge1xuICAgICAgICBsZXQgbmV3X21hcmtlciA9IHN0YXRlLm1hcmtlclxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMF0gIT0gMCkge1xuICAgICAgICAgIG5ld19tYXJrZXIgPSBbXG4gICAgICAgICAgICBzdGF0ZS5tYXJrZXJbMF0gKyBhY3Rpb24ucGF5bG9hZFswXSxcbiAgICAgICAgICAgIHN0YXRlLm1hcmtlclswXSArIGFjdGlvbi5wYXlsb2FkWzBdLFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gIT0gMCkge1xuICAgICAgICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA8IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPiAwKSB7XG4gICAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICAgIGxldCBjYyA9IHJvd191cFtwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSBjYyA9IHJvd191cFtyb3dfdXAubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgbmV3X21hcmtlciA9IFtjY1szXSwgY2NbM11dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPCBzdGF0ZS50ZXh0W3N0YXRlLnRleHQubGVuZ3RoIC0gMV1bMl0pIHtcbiAgICAgICAgICAgICAgbGV0IHJvd19kb3duID0gc3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSBwb3NbMl0gKyAxKVxuICAgICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2MgPSByb3dfZG93bltyb3dfZG93bi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICBjY1szXSArPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19tYXJrZXIgPSBbY2NbM10sIGNjWzNdXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0ZXh0OiBzdGF0ZS50ZXh0LCBtYXJrZXI6IG1jKHN0YXRlLnRleHQsIG5ld19tYXJrZXIpIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1dDogdGhyb3cgbmV3IEVycm9yKClcbiAgfVxufVxuXG5sZXQgc2hvcnRfdGV4dCA9IGBDSEFQVEVSIDEuIExvb21pbmdzLlxuXG5DYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdv4oCUbmV2ZXIgbWluZCBob3cgbG9uZyBwcmVjaXNlbHnigJRoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC5gXG5cbnNob3J0X3RleHQgPSBgWW91IHNlZSBwZW9wbGUsIGFuZCB5b3UncmUgZGlzY29ubmVjdGVkIGZyb20gdGhlbSwgdGhleSBtZWFuIG5vdGhpbmcgdG8geW91LCBidXQgb3RoZXIgdGltZXMgeW91IGNhbiBpbnZlc3QgZXZlcnl0aGluZyBpbiBzb21lb25lIHlvdSBkb24ndCBldmVuIGtub3csIHNpbGVudGx5IGJlbGlldmUgaW4gdGhlbSwgaXQgbWlnaHQgYmUgb24gdGhlIHVuZGVyZ3JvdW5kIG9yIGluIGEgc2hvcCBvciBzb21ldGhpbmcuIFlvdSBob3BlIHBlb3BsZSBhcmUgZG9pbmcgdGhhdCB3aXRoIHlvdSBhcyB3ZWxsLiBTb21lIHBlb3BsZSwgZXZlbiB3aGVuIHRoZXkncmUgcXVpdGUgeW91bmcsIGFuZCB0aGV5J3JlIGluIGRpZmZpY3VsdHksIG1heWJlIHRha2luZyBhIGJhdHRlcmluZyBpbiB0aGVpciBsaWZlLCBidXQgdGhleSBzdGlsbCBoYW5kbGUgdGhlbXNlbHZlcyB3aXRoIGdyYWNlLiBJIGhvcGUgbW9zdCBwZW9wbGUgY2FuIGJlIGxpa2UgdGhhdCwgaG9sZCBpdCB0b2dldGhlciwgSSB3YW50ZWQgdGhpcyBhbGJ1bSB0byBiZSBmb3IgcGVvcGxlIGluIHRoYXQgc2l0dWF0aW9uLmBcblxuc2hvcnRfdGV4dCA9IGBGYWNlIGxldHMgeW91IGVkaXQgYm90aCB0aGUgdGV4dCBhbmQgdGhlIGZvbnQgaXQgaXMgcmVuZGVyZWQgaW4uIEluIHRleHQgbW9kZSB5b3UgY2FuIHR5cGUgYW5kIGVkaXQgdGV4dCBub3JtYWxseS4gUHJlc3MgZXNjYXBlIHRvIGVudGVyIGZvbnQgbW9kZSwgd2hlcmUgeW91IGNhbiBzZWxlY3QgYSBjaGFyYWN0ZXIgdG8gZWRpdC4gQW55IGNoYW5nZXMgdG8gYSBjaGFyYWN0ZXIgYXJlIHZpc2libGUgaW1tZWRpYXRlbHkuXG5cbkFkZGl0aW9uYWwgY29udHJvbHMgYXJlIHNob3duIGF0IHRoZSBib3R0b20uIFlvdSBjYW4gY2hhbmdlIHRoZSB0ZXh0IGFyZWEgYW5kIHNhdmUgaXQgYXMgYW4gaW1hZ2UgaW4gdGV4dCBtb2RlLiBJbiBmb250IG1vZGUsIHlvdSBjYW4gc2F2ZSB0aGUgZm9udCwgbG9hZCBhIGZvbnQgKGZvbnRzIGFyZSBqdXN0IGEgc3ByaXRlIHNoZWV0IGltYWdlKSwgb3IgY2hvb3NlIGEgZm9udCBmcm9tIHRoZSBmb250IGdhbGxlcnkuXG5cblRoZSBiYXNlIGZvbnQgdXNlZCBpcyBhIHN1YnNldCBvZiBHTlUgVW5pZm9udC5gXG5cbmxldCBpbml0aWFsdCA9IHtcbiAgdGV4dDogbGF5b3V0VGV4dCg1MCwgc2hvcnRfdGV4dCksXG4gIG1hcmtlcjogW3Nob3J0X3RleHQubGVuZ3RoLCBzaG9ydF90ZXh0Lmxlbmd0aF0sXG59XG5cbmxldCBhY2VsX251bSA9IDk1XG5sZXQgYWNvbHMgPSAxMlxubGV0IGFyb3dzID0gTWF0aC5jZWlsKGFjZWxfbnVtIC8gYWNvbHMpXG5cbmxldCBtYWduaWZ5ID0gOFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ3RleHQnKVxuXG4gIGxldCBtcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0cmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGFyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGFtcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNtcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IFtjYW52YXNfbG9hZGVkLCBzZXRDYW52YXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBbdWlfbG9hZGVkLCBzZXRVSUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBsZXQgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgyKVxuICBsZXQgW2N3LCBzZXRDd10gPSB1c2VTdGF0ZSg4ICogMilcbiAgbGV0IFtjaCwgc2V0Q2hdID0gdXNlU3RhdGUoMTYgKiAyKVxuICBsZXQgW2NvbF9udW0sIHNldENvbE51bV0gPSB1c2VTdGF0ZSg1MClcbiAgbGV0IFtyb3dfbnVtLCBzZXRSb3dOdW1dID0gdXNlU3RhdGUoMTQpXG5cbiAgbGV0IFthbWFyaywgc2V0QW1hcmtdID0gdXNlU3RhdGUoMClcblxuICBsZXQgW2NtYXJrLCBzZXRDbWFya10gPSB1c2VTdGF0ZShbMCwgMF0pXG5cbiAgbGV0IGJhc2VfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB1aV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcblxuICBsZXQgZmxyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNscmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0bHJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBbdGV4dENsaWNrZWQsIHNldFRleHRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGxldCBbdHN0YXRlLCB0ZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0UmVkdWNlciwgaW5pdGlhbHQpXG5cbiAgbGV0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKDApXG5cbiAgbGV0IFtoaWdobGlnaHQsIHNldEhpZ2hsaWdodF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGxldCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoYmFzZTIpXG5cbiAgbGV0IFtnYWxsZXJ5X2RhdGEsIHNldEdhbGxlcnlEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbc2hvd19nYWxsZXJ5LCBzZXRTaG93R2FsbGVyeV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvbGlicmFyeS5qc29uJylcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgc2V0R2FsbGVyeURhdGEoanNvbilcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYmFzZSA9IGJhc2VfcmVmLmN1cnJlbnRcbiAgICBsZXQgYmFzZXggPSBiYXNlLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgYmFzZV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGJhc2VfaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGJhc2V4LmNsZWFyUmVjdCgwLCAwLCBiYXNlLndpZHRoLCBiYXNlLmhlaWdodClcbiAgICAgIGJhc2V4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIGJhc2V4LmZpbGxSZWN0KDAsIDAsIGJhc2Uud2lkdGgsIGJhc2UuaGVpZ2h0KVxuICAgICAgYmFzZXguZHJhd0ltYWdlKGJhc2VfaW1nLCAwLCAwLCBiYXNlLndpZHRoLCBiYXNlLmhlaWdodClcbiAgICAgIGRyYXdBbHBoYWJldCgpXG4gICAgICBkcmF3VGV4dCgpXG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICAgIGJhc2VfaW1nLnNyYyA9IHNyY1xuICAgIHNldExvYWRlZChzcmMpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRTaXplcygpIHtcbiAgICAvLyB0ZXh0XG4gICAgbGV0IHQgPSB0cmVmLmN1cnJlbnRcbiAgICB0LndpZHRoID0gY3cgKiAoY29sX251bSArIDIpXG4gICAgdC5oZWlnaHQgPSBjaCAqIChyb3dfbnVtICsgMSlcblxuICAgIC8vIHRleHQgbWFya2VyXG4gICAgbGV0IG0gPSBtcmVmLmN1cnJlbnRcbiAgICBtLndpZHRoID0gY3cgKiAoY29sX251bSArIDMpXG4gICAgbS5oZWlnaHQgPSBjaCAqIChyb3dfbnVtICsgMSlcblxuICAgIC8vIGFscGhhYmV0XG4gICAgbGV0IGEgPSBhcmVmLmN1cnJlbnRcbiAgICBhLndpZHRoID0gY3cgKiBhY29sc1xuICAgIGEuaGVpZ2h0ID0gY2ggKiBhcm93c1xuXG4gICAgLy8gYWxwaGFiZXQgbWFya2VyXG4gICAgbGV0IGFtID0gYW1yZWYuY3VycmVudFxuICAgIGFtLndpZHRoID0gY3cgKiBhY29sc1xuICAgIGFtLmhlaWdodCA9IGNoICogYXJvd3NcblxuICAgIC8vIGNoYXJhY3RlclxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgYy53aWR0aCA9IGN3ICogbWFnbmlmeVxuICAgIGMuaGVpZ2h0ID0gY2ggKiBtYWduaWZ5XG5cbiAgICAvLyBjaGFyYWN0ZXIgbWFya2VyXG4gICAgbGV0IGNtID0gY21yZWYuY3VycmVudFxuICAgIGNtLndpZHRoID0gYy53aWR0aFxuICAgIGNtLmhlaWdodCA9IGMuaGVpZ2h0XG4gIH1cblxuICAvLyBpbml0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKGN3ID09PSA4ICYmIGNoID09PSAxNiAmJiBzY2FsZSA9PT0gMSkgfHxcbiAgICAgIChjdyA9PT0gMTYgJiYgY2ggPT09IDMyICYmIHNjYWxlID09PSAyKVxuICAgICkge1xuICAgICAgc2V0U2l6ZXMoKVxuXG4gICAgICBsZXQgJGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgJGJhc2Uud2lkdGggPSBhY29scyAqIChjdyAvIHNjYWxlKVxuICAgICAgJGJhc2UuaGVpZ2h0ID0gYXJvd3MgKiAoY2ggLyBzY2FsZSlcbiAgICAgIGxldCAkYmFzZXggPSAkYmFzZS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAkYmFzZXguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgIGxldCBiYXNlX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICBiYXNlX2ltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICRiYXNleC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgICRiYXNleC5maWxsUmVjdCgwLCAwLCAkYmFzZS53aWR0aCwgJGJhc2UuaGVpZ2h0KVxuICAgICAgICAkYmFzZXguZHJhd0ltYWdlKGJhc2VfaW1nLCAwLCAwLCAkYmFzZS53aWR0aCwgJGJhc2UuaGVpZ2h0KVxuICAgICAgICBiYXNlX3JlZi5jdXJyZW50ID0gJGJhc2VcblxuICAgICAgICBzZXRDYW52YXNMb2FkZWQodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGJhc2VfaW1nLnNyYyA9IGxvYWRlZFxuXG4gICAgICBsZXQgdWlfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgIHVpX2ltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCAkdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICAkdWkud2lkdGggPSAoYWNvbHMgKiBjdykgLyBzY2FsZVxuICAgICAgICAkdWkuaGVpZ2h0ID0gKGFyb3dzICogY2gpIC8gc2NhbGVcbiAgICAgICAgbGV0ICR1aXggPSAkdWkuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAkdWl4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgICR1aXguZHJhd0ltYWdlKHVpX2ltZywgMCwgMCwgJHVpLndpZHRoLCAkdWkuaGVpZ2h0KVxuICAgICAgICB1aV9yZWYuY3VycmVudCA9ICR1aVxuXG4gICAgICAgIHNldFVJTG9hZGVkKHRydWUpXG4gICAgICB9XG4gICAgICB1aV9pbWcuc3JjID0gYmFzZTJcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhbnZhc19sb2FkZWQpIHtcbiAgICAgIHNldFNpemVzKClcbiAgICAgIGRyYXdNYXJrZXIoKVxuICAgICAgZHJhd1RleHQoKVxuICAgICAgZHJhd0FscGhhYmV0KClcbiAgICAgIGRyYXdBbHBoYWJldE1hcmtlcigpXG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICB9LCBbY3csIGNoLCBzY2FsZSwgY2FudmFzX2xvYWRlZF0pXG5cbiAgLy8gaW5pdCBhZnRlciBjYW52YXMgbG9hZGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhbnZhc19sb2FkZWQpIHtcbiAgICAgIGRyYXdNYXJrZXIoKVxuICAgICAgZHJhd1RleHQoKVxuICAgICAgZHJhd0FscGhhYmV0KClcbiAgICAgIGRyYXdBbHBoYWJldE1hcmtlcigpXG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICB9LCBbY2FudmFzX2xvYWRlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FudmFzX2xvYWRlZCkge1xuICAgICAgZHJhd01hcmtlcigpXG4gICAgICBkcmF3QWxwaGFiZXRNYXJrZXIoKVxuICAgIH1cbiAgfSwgW21vZGUsIHRzdGF0ZS50ZXh0LCB0c3RhdGUubWFya2VyLCBhbWFyaywgY29sX251bSwgaGlnaGxpZ2h0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICB9LCBbbW9kZSwgYW1hcmssIGNtYXJrXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBkcmF3VGV4dCgpXG4gICAgfVxuICB9LCBbdHN0YXRlLnRleHQsIGNvbF9udW1dKVxuXG4gIGZ1bmN0aW9uIGRyYXdBbHBoYWJldE1hcmtlcigpIHtcbiAgICBsZXQgYW0gPSBhbXJlZi5jdXJyZW50XG4gICAgbGV0IGFteCA9IGFtLmdldENvbnRleHQoJzJkJylcblxuICAgIGFteC5jbGVhclJlY3QoMCwgMCwgYW0ud2lkdGgsIGFtLmhlaWdodClcblxuICAgIC8vIGFteC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgLy8gYW14LmZpbGxSZWN0KDAsIDAsIGFtLndpZHRoLCBhbS5oZWlnaHQpXG5cbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgW3gsIHldID0gZ2V0WFkoYW1hcmspXG4gICAgYW14LmZpbGxTdHlsZSA9ICcjZmZmJ1xuICAgIGFteC5saW5lV2lkdGggPSBzY2FsZVxuXG4gICAgbGV0IGZsID0gZmxyZWYuY3VycmVudFxuICAgIGZsLndpZHRoID0gJ2ZvbnQ6LScubGVuZ3RoICogYmN3XG4gICAgbGV0IGZseCA9IGZsLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgZmxfY29udGVudCA9ICdmb250ICdcbiAgICBmbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICAgIGZseC5maWxsU3R5bGUgPSAnI2VmZWZlZidcbiAgICBmbHguZmlsbFJlY3QoMCwgMCwgZmwud2lkdGgsIGZsLmhlaWdodClcbiAgICBmbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlbidcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsX2NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBmbF9jb250ZW50LmNoYXJDb2RlQXQoaSkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IFtzcHJpdGVfeCwgc3ByaXRlX3ldID0gZ2V0WFkoa2V5KVxuICAgICAgZmx4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogKGN3IC8gc2NhbGUpLFxuICAgICAgICBzcHJpdGVfeSAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZSxcbiAgICAgICAgaSAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgMCAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAnZm9udCcpIHtcbiAgICAgIGFteC5maWxsUmVjdCh4ICogY3csIHkgKiBjaCwgY3csIGNoKVxuICAgICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgICAgfVxuICAgICAgbGV0IGtleSA9ICc6Jy5jaGFyQ29kZUF0KDApIC0gMzJcbiAgICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGtleSlcbiAgICAgIGZseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICAoZmxfY29udGVudC5sZW5ndGggLSAxKSAqIGJjdyxcbiAgICAgICAgMCAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2hcbiAgICAgIClcbiAgICAgIGZseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICB4ICogYmN3LFxuICAgICAgICB5ICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaCxcbiAgICAgICAgZmxfY29udGVudC5sZW5ndGggKiBiY3csXG4gICAgICAgIDAgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0FscGhhYmV0KCkge1xuICAgIGxldCBhID0gYXJlZi5jdXJyZW50XG4gICAgbGV0IGF4ID0gYS5nZXRDb250ZXh0KCcyZCcpXG4gICAgYXguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcblxuICAgIGF4LmNsZWFyUmVjdCgwLCAwLCBhLndpZHRoLCBhLmhlaWdodClcbiAgICBheC5kcmF3SW1hZ2UoYmFzZV9yZWYuY3VycmVudCwgMCwgMCwgYS53aWR0aCwgYS5oZWlnaHQpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Q2hhcigpIHtcbiAgICBsZXQgY20gPSBjbXJlZi5jdXJyZW50XG4gICAgbGV0IGNteCA9IGNtLmdldENvbnRleHQoJzJkJylcblxuICAgIGNteC5jbGVhclJlY3QoMCwgMCwgY20ud2lkdGgsIGNtLmhlaWdodClcbiAgICBpZiAobW9kZSA9PT0gJ2NoYXInKSB7XG4gICAgICBjbXguZmlsbFN0eWxlID0gJ21hZ2VudGEnXG4gICAgICBjbXguZmlsbFJlY3QoXG4gICAgICAgIGNtYXJrWzBdICogbWFnbmlmeSxcbiAgICAgICAgY21hcmtbMV0gKiBtYWduaWZ5LFxuICAgICAgICBtYWduaWZ5ICogc2NhbGUsXG4gICAgICAgIG1hZ25pZnkgKiBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjeC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgY3guZmlsbFJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG4gICAgY3guaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcblxuICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgIHJldHVybiBbaSAlIGFjb2xzLCBNYXRoLmZsb29yKGkgLyBhY29scyldXG4gICAgfVxuICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGFtYXJrKVxuICAgIGN4LmRyYXdJbWFnZShcbiAgICAgIGJhc2VfcmVmLmN1cnJlbnQsXG4gICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgIHNwcml0ZV95ICogYmNoLFxuICAgICAgYmN3LFxuICAgICAgYmNoLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjdyAqIG1hZ25pZnksXG4gICAgICBjaCAqIG1hZ25pZnlcbiAgICApXG5cbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgY2wgPSBjbHJlZi5jdXJyZW50XG4gICAgY2wud2lkdGggPSAnY2hhcjp0Jy5sZW5ndGggKiBiY3dcbiAgICBsZXQgY2x4ID0gY2wuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBjbF9jb250ZW50ID0gJ2NoYXIgJ1xuICAgIGNseC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gICAgY2x4LmZpbGxTdHlsZSA9ICcjZWZlZmVmJ1xuICAgIGNseC5maWxsUmVjdCgwLCAwLCBjbC53aWR0aCwgY2wuaGVpZ2h0KVxuICAgIGNseC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGFya2VuJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xfY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGNsX2NvbnRlbnQuY2hhckNvZGVBdChpKSAtIDMyXG4gICAgICBpZiAoa2V5ID09PSAtMjIpIGtleSA9IDk0XG4gICAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShrZXkpXG4gICAgICBjbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIHNwcml0ZV95ICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlLFxuICAgICAgICBpICogKGN3IC8gc2NhbGUpLFxuICAgICAgICAwICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09ICdjaGFyJykge1xuICAgICAgY3guc3Ryb2tlU3R5bGUgPSAnI2RkZCdcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgY2g7IHIgKz0gc2NhbGUpIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjdzsgYyArPSBzY2FsZSkge1xuICAgICAgICAgIGN4LnN0cm9rZVJlY3QoXG4gICAgICAgICAgICBjICogbWFnbmlmeSxcbiAgICAgICAgICAgIHIgKiBtYWduaWZ5LFxuICAgICAgICAgICAgbWFnbmlmeSAqIHNjYWxlLFxuICAgICAgICAgICAgbWFnbmlmeSAqIHNjYWxlXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICAgIH1cbiAgICAgIGxldCBrZXkgPSAnOicuY2hhckNvZGVBdCgwKSAtIDMyXG4gICAgICBsZXQgW2FfeCwgYV95XSA9IGdldFhZKGtleSlcbiAgICAgIGNseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBhX3ggKiBiY3csXG4gICAgICAgIGFfeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIChjbF9jb250ZW50Lmxlbmd0aCAtIDEpICogYmN3LFxuICAgICAgICAwICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaFxuICAgICAgKVxuICAgICAgY2x4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogYmN3LFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIGNsX2NvbnRlbnQubGVuZ3RoICogYmN3LFxuICAgICAgICAwICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdNYXJrZXIoKSB7XG4gICAgbGV0IG0gPSBtcmVmLmN1cnJlbnRcblxuICAgIGxldCBteCA9IG0uZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgbGV0IGNoYXIgPSBnZXRMYXN0KFxuICAgICAgdHN0YXRlLnRleHQsXG4gICAgICBNYXRoLm1heCguLi50c3RhdGUubWFya2VyLCB0c3RhdGUudGV4dC5sZW5ndGggLSAxKVxuICAgIClcblxuICAgIG0ud2lkdGggPSBjdyAqIChjb2xfbnVtICsgMylcbiAgICBtLmhlaWdodCA9IGNoYXJbMl0gKiBjaCArIGNoICsgY2hcbiAgICBteC5jbGVhclJlY3QoMCwgMCwgbS53aWR0aCwgbS5oZWlnaHQpXG5cbiAgICBpZiAobW9kZSAhPSAndGV4dCcgJiYgaGlnaGxpZ2h0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRzdGF0ZS50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGFyID0gdHN0YXRlLnRleHRbaV1cbiAgICAgICAgbGV0IGFrZXlcbiAgICAgICAgaWYgKGFtYXJrID09PSA5NCkge1xuICAgICAgICAgIGFrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMyIC0gMjIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYW1hcmsgKyAzMilcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhclswXSA9PT0gYWtleSkge1xuICAgICAgICAgIG14LmZpbGxTdHlsZSA9ICcjMjIyJ1xuICAgICAgICAgIG14LmZpbGxSZWN0KGNoYXJbMV0gKiBjdyArIGN3ICsgY3cgLyAyLCBjaGFyWzJdICogY2ggKyBjaCAvIDIsIGN3LCBjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAndGV4dCcpIHtcbiAgICAgIGZ1bmN0aW9uIGdldFh5KG1hcmspIHtcbiAgICAgICAgbGV0IGNoYXIgPSBnZXRMYXN0KHRzdGF0ZS50ZXh0LCBtYXJrKVxuICAgICAgICBsZXQgeCA9IGNoYXJbMV1cbiAgICAgICAgbGV0IHkgPSBjaGFyWzJdXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICAgIH1cblxuICAgICAgaWYgKHRzdGF0ZS5tYXJrZXJbMF0gPT09IHRzdGF0ZS5tYXJrZXJbMV0pIHtcbiAgICAgICAgLy8gY3Vyc29yXG4gICAgICAgIGxldCBbeCwgeV0gPSBnZXRYeSh0c3RhdGUubWFya2VyWzBdKVxuICAgICAgICBteC5maWxsU3R5bGUgPSAnZ3JlZW4nXG4gICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgIHggKiBjdyArIGN3ICsgY3cgLyAyIC0gc2NhbGUsXG4gICAgICAgICAgeSAqIGNoICsgY2ggLyAyLFxuICAgICAgICAgIHNjYWxlICogMixcbiAgICAgICAgICBjaFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoaWdobGlnaHRcbiAgICAgICAgbGV0IGZpcnN0aSA9IE1hdGgubWluKC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgICAgIGxldCBsYXN0aSA9IE1hdGgubWF4KC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgICAgIGxldCBbeDAsIHkwXSA9IGdldFh5KGZpcnN0aSlcbiAgICAgICAgbGV0IFt4MSwgeTFdID0gZ2V0WHkobGFzdGkpXG4gICAgICAgIG14LmZpbGxTdHlsZSA9ICdncmVlbidcbiAgICAgICAgLy8gc2FtZSByb3dcbiAgICAgICAgaWYgKHkwID09PSB5MSkge1xuICAgICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgICAgeDAgKiBjdyArIGN3ICsgY3cgLyAyLFxuICAgICAgICAgICAgeTAgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICAgICh4MSAtIHgwKSAqIGN3LFxuICAgICAgICAgICAgY2hcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZmlyc3Rfcm93XG4gICAgICAgICAgbGV0IGZyb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSB5MClcbiAgICAgICAgICBsZXQgbGFzdF9mcm93ID0gZnJvd1tmcm93Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgbXguZmlsbFJlY3QoXG4gICAgICAgICAgICB4MCAqIGN3ICsgY3cgKyBjdyAvIDIsXG4gICAgICAgICAgICB5MCAqIGNoICsgY2ggLyAyLFxuICAgICAgICAgICAgKGxhc3RfZnJvd1sxXSAtIHgwICsgMSkgKiBjdyxcbiAgICAgICAgICAgIGNoXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKHkxIC0geTAgPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0geTAgKyAxOyBpIDwgeTE7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKG8gPT4gb1syXSA9PT0gaSlcbiAgICAgICAgICAgICAgbXguZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgMCAqIGN3ICsgY3cgKyBjdyAvIDIsXG4gICAgICAgICAgICAgICAgaSAqIGNoICsgY2ggLyAyLFxuICAgICAgICAgICAgICAgIChyb3dbcm93Lmxlbmd0aCAtIDFdWzFdICsgMSkgKiBjdyxcbiAgICAgICAgICAgICAgICBjaFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbGFzdF9yb3dcbiAgICAgICAgICBsZXQgbHJvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHkxKVxuICAgICAgICAgIGxldCBsYXN0X2xyb3cgPSBscm93W2xyb3cubGVuZ3RoIC0gMV1cbiAgICAgICAgICBteC5maWxsUmVjdCgwICogY3cgKyBjdyArIGN3IC8gMiwgeTEgKiBjaCArIGNoIC8gMiwgeDEgKiBjdywgY2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3VGV4dCgpIHtcbiAgICBsZXQgdCA9IHRyZWYuY3VycmVudFxuICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCB0ZXh0ID0gdHN0YXRlLnRleHRcblxuICAgIGxldCBjaGFyID0gZ2V0TGFzdChcbiAgICAgIHRzdGF0ZS50ZXh0LFxuICAgICAgTWF0aC5tYXgoTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlciksIHRzdGF0ZS50ZXh0Lmxlbmd0aClcbiAgICApXG4gICAgdC53aWR0aCA9IGN3ICogKGNvbF9udW0gKyAyKVxuICAgIHQuaGVpZ2h0ID0gY2hhclsyXSAqIGNoICsgY2ggKyBjaFxuXG4gICAgLy8gdGV4dCBsYWJlbFxuICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgIHJldHVybiBbaSAlIGFjb2xzLCBNYXRoLmZsb29yKGkgLyBhY29scyldXG4gICAgfVxuICAgIGxldCB0bCA9IHRscmVmLmN1cnJlbnRcbiAgICBsZXQgdGx4ID0gdGwuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRseC5jbGVhclJlY3QoMCwgMCwgdGwud2lkdGgsIHRsLmhlaWdodClcbiAgICB0bHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICAgIHRseC5maWxsU3R5bGUgPSAnI2VmZWZlZidcbiAgICB0bHguZmlsbFJlY3QoMCwgMCwgdGwud2lkdGgsIHRsLmhlaWdodClcbiAgICB0bHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlbidcbiAgICBsZXQgdGxfY29udGVudCA9ICd0ZXh0OicgKyBjb2xfbnVtICsgJ3gnICsgKGNoYXJbMl0gKyAxKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGxfY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHRsX2NvbnRlbnQuY2hhckNvZGVBdChpKSAtIDMyXG4gICAgICBpZiAoa2V5ID09PSAtMjIpIGtleSA9IDk0XG4gICAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShrZXkpXG4gICAgICB0bHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIHNwcml0ZV95ICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlLFxuICAgICAgICBpICogKGN3IC8gc2NhbGUpLFxuICAgICAgICAwICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlXG4gICAgICApXG4gICAgfVxuXG4gICAgdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIHR4LmZpbGxSZWN0KDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KVxuICAgIHR4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGV4dFtpXVxuICAgICAgbGV0IHggPSBpdGVtWzFdXG4gICAgICBsZXQgeSA9IGl0ZW1bMl1cbiAgICAgIGxldCBrZXkgPSBpdGVtWzBdLmNoYXJDb2RlQXQoMCkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IHNwcml0ZV94ID0ga2V5ICUgYWNvbHNcbiAgICAgIGxldCBzcHJpdGVfeSA9IE1hdGguZmxvb3Ioa2V5IC8gYWNvbHMpXG4gICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGJhc2VfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogYmN3LFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIHggKiBjdyArIGN3LFxuICAgICAgICB5ICogY2ggKyBjaCAvIDIsXG4gICAgICAgIGN3LFxuICAgICAgICBjaFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleVRyaWdnZXIoa2V5c3RyaW5nKSB7XG4gICAgbGV0IHNoaWZ0ID0gZmFsc2VcbiAgICBsZXQgY3RybCA9IGZhbHNlXG4gICAgbGV0IG1ldGEgPSBmYWxzZVxuXG4gICAgaWYgKGtleXN0cmluZy5pbmRleE9mKCdjdHJsJykgPiAtMSkge1xuICAgICAgY3RybCA9IHRydWVcbiAgICAgIGtleXN0cmluZyA9IGtleXN0cmluZy5zcGxpdCgnKycpWzFdXG4gICAgfVxuXG4gICAga21fcmVmLmN1cnJlbnRba2V5c3RyaW5nXSA9IHRydWVcbiAgICBrZXlBY3Rpb24oa2V5c3RyaW5nLCB7XG4gICAgICBzaGlmdEtleTogc2hpZnQsXG4gICAgICBjdHJsS2V5OiBjdHJsLFxuICAgICAgbWV0YTogbWV0YSxcbiAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHt9LFxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBrbV9yZWYuY3VycmVudFtrZXlzdHJpbmddID0gZmFsc2VcbiAgICB9LCAwKVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZXZlbnQpIHtcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuXG4gICAgbGV0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXlcbiAgICBsZXQgY3RybCA9IGV2ZW50LmN0cmxLZXlcbiAgICBsZXQgbWV0YSA9IGV2ZW50Lm1ldGFLZXlcblxuICAgIC8vIHNob3cgZ2FsbGVyeSBvdmVycmlkZXMgZXZlcnl0aGluZyBlbHNlXG4gICAgaWYgKHNob3dfZ2FsbGVyeSkge1xuICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgc2V0U2hvd0dhbGxlcnkocHJldiA9PiAhcHJldilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG90a2V5X2xhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjaGVja19rZXkgPSBob3RrZXlfbGFiZWxzW2ldXG4gICAgICAgICAgaWYgKGtleSA9PT0gY2hlY2tfa2V5KSB7XG4gICAgICAgICAgICBsZXQgc3JjID0gZ2FsbGVyeV9kYXRhW2hvdGtleV9sYWJlbHMuaW5kZXhPZihrZXkpXVxuICAgICAgICAgICAgc2V0U2hvd0dhbGxlcnkoZmFsc2UpXG4gICAgICAgICAgICBsb2FkSW1hZ2UoJy9mb250LWxpYnJhcnkvJyArIHNyYylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHNpemUgY2hhbmdlIGNhbiBiZSBkb25lIGluIGFueSBtb2RlXG4gICAgaWYgKGN0cmwgJiYga2V5ID09IDEpIHtcbiAgICAgIHNldFNjYWxlKDEpXG4gICAgICBzZXRDdyg4KVxuICAgICAgc2V0Q2goMTYpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PSAyKSB7XG4gICAgICBzZXRTY2FsZSgyKVxuICAgICAgc2V0Q3coMTYpXG4gICAgICBzZXRDaCgzMilcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09ICd2Jykge1xuICAgICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vY29uc3RyYWludC1zeXN0ZW1zL2ZhY2UnXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKGN0cmwgJiYga2V5ID09PSAnYScpIHtcbiAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ3NldF9tYXJrZXInLCBwYXlsb2FkOiBbMCwgdHN0YXRlLnRleHQubGVuZ3RoXSB9KVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ2gnKSB7XG4gICAgICAgIGxldCBuZXdfY29sID0gY29sX251bSAtIDFcbiAgICAgICAgc2V0Q29sTnVtKG5ld19jb2wpXG4gICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdsYXlvdXQnLCBjb2xfbnVtOiBuZXdfY29sIH0pXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdsJykge1xuICAgICAgICBsZXQgbmV3X2NvbCA9IGNvbF9udW0gKyAxXG4gICAgICAgIHNldENvbE51bShuZXdfY29sKVxuICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbGF5b3V0JywgY29sX251bTogbmV3X2NvbCB9KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAncycpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgICBsZXQgdCA9IHRyZWYuY3VycmVudFxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHRlbXAud2lkdGggPSB0LndpZHRoXG4gICAgICAgIHRlbXAuaGVpZ2h0ID0gdC5oZWlnaHRcblxuICAgICAgICBsZXQgdGVtcHggPSB0ZW1wLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGVtcHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgICAgICB0ZW1weC5maWxsUmVjdCgwLCAwLCB0LndpZHRoLCB0LmhlaWdodClcbiAgICAgICAgdGVtcHguZHJhd0ltYWdlKHQsIDAsIDApXG5cbiAgICAgICAgdGVtcC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAgICdmYWNlLXRleHQtJyArXG4gICAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAgICcucG5nJ1xuICAgICAgICAgIClcblxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdHJsICYmIGtleSA9PSAnbScpIHtcbiAgICAgICAgc2V0SGlnaGxpZ2h0KHByZXYgPT4gIXByZXYpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdnJykge1xuICAgICAgICBzZXRTaG93R2FsbGVyeShwcmV2ID0+ICFwcmV2KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnZCcpIHtcbiAgICAgICAgLy8gZm9udCBkb3dubG9hZFxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICAgIC8vIGFsd2F5cyBzYXZlIGZvbnQgYXQgMnhcblxuICAgICAgICBsZXQgYSA9IGFyZWYuY3VycmVudFxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHRlbXAud2lkdGggPSBiY3cgKiBhY29scyAqIDJcbiAgICAgICAgdGVtcC5oZWlnaHQgPSBiY2ggKiBhcm93cyAqIDJcblxuICAgICAgICBsZXQgdGVtcHggPSB0ZW1wLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGVtcHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgICAgdGVtcHguZHJhd0ltYWdlKGEsIDAsIDAsIHRlbXAud2lkdGgsIHRlbXAuaGVpZ2h0KVxuXG4gICAgICAgIHRlbXAudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgICAnZmFjZS1mb250LScgK1xuICAgICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgICAnLnBuZydcbiAgICAgICAgICApXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnZicpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcbiAgICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNoaWZ0ID0gdHJ1ZVxuICAgIGlmICghY3RybCAmJiAhbWV0YSkge1xuICAgICAgaWYgKG1vZGUgPT09ICd0ZXh0Jykge1xuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIHNldE1vZGUoJ2ZvbnQnKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnYmFja3NwYWNlJywgY29sX251bTogY29sX251bSB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbLTEsIDBdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFstMSwgMF0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbKzEsIDBdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFsrMSwgMF0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbMCwgLTFdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFswLCAtMV0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2hpZ2hsaWdodCcsIHBheWxvYWQ6IFswLCArMV0gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ21vdmVfbWFya2VyJywgcGF5bG9hZDogWzAsICsxXSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2luc2VydCcsIGNvbF9udW06IGNvbF9udW0sIHBheWxvYWQ6IGtleSB9KVxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJyAnKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdpbnNlcnQnLCBjb2xfbnVtOiBjb2xfbnVtLCBwYXlsb2FkOiAnXFxuJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnZm9udCcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgIHNldE1vZGUoJ2NoYXInKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3QnKSB7XG4gICAgICAgICAgc2V0TW9kZSgndGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttWydsJ10pIHtcbiAgICAgICAgICBsZXQgbmV3X2FtYXJrID0gYW1hcmsgKyAxXG4gICAgICAgICAgaWYgKG5ld19hbWFyayA+IGFjZWxfbnVtIC0gMSkgbmV3X2FtYXJrID0gYWNlbF9udW0gLSAxXG4gICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrKVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbVsnaCddKSB7XG4gICAgICAgICAgbGV0IG5ld19hbWFyayA9IGFtYXJrIC0gMVxuICAgICAgICAgIGlmIChuZXdfYW1hcmsgPCAwKSBuZXdfYW1hcmsgPSAwXG4gICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrKVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbVsnaiddIHx8IGttWydrJ10pIHtcbiAgICAgICAgICBsZXQgbGF5b3V0ID0gWy4uLkFycmF5KGFjZWxfbnVtKV0ubWFwKChuLCBpKSA9PiBbXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaSAlIGFjb2xzLFxuICAgICAgICAgICAgTWF0aC5mbG9vcihpIC8gYWNvbHMpLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgbGV0IGNlbGwgPSBsYXlvdXRbYW1hcmtdXG4gICAgICAgICAgaWYgKGttWydrJ10pIHtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gY2VsbFsyXSAtIDFcbiAgICAgICAgICAgIGlmIChuZXh0ID49IDApIHtcbiAgICAgICAgICAgICAgbGV0IHVwX3JvdyA9IGxheW91dC5maWx0ZXIoYyA9PiBjWzJdID09PSBuZXh0KVxuICAgICAgICAgICAgICBsZXQgbmV3X2FtYXJrID0gdXBfcm93W2NlbGxbMV1dXG4gICAgICAgICAgICAgIGlmIChuZXdfYW1hcmsgPT09IHVuZGVmaW5lZCkgdXBfcm93W3VwX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICBzZXRBbWFyayhuZXdfYW1hcmtbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrbVsnaiddKSB7XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGNlbGxbMl0gKyAxXG4gICAgICAgICAgICBpZiAobmV4dCA8PSBsYXlvdXRbbGF5b3V0Lmxlbmd0aCAtIDFdWzJdKSB7XG4gICAgICAgICAgICAgIGxldCBkbl9yb3cgPSBsYXlvdXQuZmlsdGVyKGMgPT4gY1syXSA9PT0gbmV4dClcbiAgICAgICAgICAgICAgbGV0IG5ld19hbWFyayA9IGRuX3Jvd1tjZWxsWzFdXVxuICAgICAgICAgICAgICBpZiAobmV3X2FtYXJrID09PSB1bmRlZmluZWQpIG5ld19hbWFyayA9IGRuX3Jvd1tkbl9yb3cubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2hhcicpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBzZXRNb2RlKCdmb250JylcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW92ZW1lbnQgPSBbMCwgMF1cbiAgICAgICAgaWYgKGttLmopIHtcbiAgICAgICAgICBtb3ZlbWVudFsxXSArPSAxICogc2NhbGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa20uaykge1xuICAgICAgICAgIG1vdmVtZW50WzFdIC09IDEgKiBzY2FsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbS5oKSB7XG4gICAgICAgICAgbW92ZW1lbnRbMF0gLT0gMSAqIHNjYWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttLmwpIHtcbiAgICAgICAgICBtb3ZlbWVudFswXSArPSAxICogc2NhbGVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb3ZlZCA9IFtjbWFya1swXSArIG1vdmVtZW50WzBdLCBjbWFya1sxXSArIG1vdmVtZW50WzFdXVxuICAgICAgICBpZiAobW92ZWRbMF0gPCAwKSBtb3ZlZFswXSA9IDBcbiAgICAgICAgaWYgKG1vdmVkWzBdID4gY3cgLSBzY2FsZSkgbW92ZWRbMF0gPSBjdyAtIHNjYWxlXG4gICAgICAgIGlmIChtb3ZlZFsxXSA8IDApIG1vdmVkWzFdID0gMFxuICAgICAgICBpZiAobW92ZWRbMV0gPiBjaCAtIHNjYWxlKSBtb3ZlZFsxXSA9IGNoIC0gc2NhbGVcbiAgICAgICAgc2V0Q21hcmsobW92ZWQpXG5cbiAgICAgICAgLy8gbWlnaHQgd2FudCB0byBtb3ZlIHRoaXMgaW50byBkcmF3IG1hcmtlciAtIHRoZXJlIGNhbiBiZSBhIGRlbGF5XG4gICAgICAgIGlmIChrbS5kKSB7XG4gICAgICAgICAgZWRpdENoYXIoJ2JsYWNrJywgbW92ZWQpXG4gICAgICAgIH0gZWxzZSBpZiAoa20uZSkge1xuICAgICAgICAgIGVkaXRDaGFyKCd3aGl0ZScsIG1vdmVkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdENoYXIoZmlsbCwgbW92ZWQpIHtcbiAgICBsZXQgYiA9IGJhc2VfcmVmLmN1cnJlbnRcbiAgICBsZXQgYnggPSBiLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQga2V5ID0gYW1hcmtcbiAgICBsZXQgc3ByaXRlX3ggPSBrZXkgJSBhY29sc1xuICAgIGxldCBzcHJpdGVfeSA9IE1hdGguZmxvb3Ioa2V5IC8gYWNvbHMpXG4gICAgaWYgKGZpbGwgPT09ICd3aGl0ZScpIHtcbiAgICAgIGJ4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIGJ4LmZpbGxSZWN0KFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyArIG1vdmVkWzBdIC8gc2NhbGUsXG4gICAgICAgIHNwcml0ZV95ICogYmNoICsgbW92ZWRbMV0gLyBzY2FsZSxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBieC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgICBieC5maWxsUmVjdChcbiAgICAgICAgc3ByaXRlX3ggKiBiY3cgKyBtb3ZlZFswXSAvIHNjYWxlLFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCArIG1vdmVkWzFdIC8gc2NhbGUsXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9XG5cbiAgICBkcmF3QWxwaGFiZXQoKVxuICAgIGRyYXdDaGFyKClcbiAgICBkcmF3VGV4dCgpXG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0RG93bihlKSB7XG4gICAgc2V0TW9kZSgndGV4dCcpXG5cbiAgICBsZXQgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgbGV0IHJhd3ggPSBlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjd1xuICAgIGxldCByYXd5ID0gZS5jbGllbnRZIC0gcmVjdC50b3BcbiAgICBsZXQgcm93dGFyZyA9IE1hdGguZmxvb3IocmF3eSAvIGNoKVxuICAgIGxldCBjb2x0YXJnID0gTWF0aC5yb3VuZChyYXd4IC8gY3cpXG4gICAgbGV0IGluZGV4XG4gICAgbGV0IGluX3JvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihlID0+IGVbMl0gPT09IHJvd3RhcmcpXG4gICAgaWYgKGluX3Jvdy5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZGV4ID0gdHN0YXRlLnRleHQubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjaGFyID0gaW5fcm93W2NvbHRhcmddXG4gICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNoYXIgPSBpbl9yb3dbaW5fcm93Lmxlbmd0aCAtIDFdXG4gICAgICB9XG4gICAgICBpbmRleCA9IGNoYXJbM11cbiAgICB9XG4gICAgdGRpc3BhdGNoKHsgdHlwZTogJ3NldF9tYXJrZXInLCBwYXlsb2FkOiBbaW5kZXgsIGluZGV4XSB9KVxuICAgIHNldFRleHRDbGlja2VkKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0TW92ZShlKSB7XG4gICAgaWYgKHRleHRDbGlja2VkKSB7XG4gICAgICBsZXQgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBsZXQgcmF3eCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIGN3XG4gICAgICBsZXQgcmF3eSA9IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgICBsZXQgcm93dGFyZyA9IE1hdGguZmxvb3IocmF3eSAvIGNoKVxuICAgICAgbGV0IGNvbHRhcmcgPSBNYXRoLnJvdW5kKHJhd3ggLyBjdylcbiAgICAgIGxldCBpbmRleFxuICAgICAgbGV0IGluX3JvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihlID0+IGVbMl0gPT09IHJvd3RhcmcpXG4gICAgICBpZiAoaW5fcm93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmRleCA9IHRzdGF0ZS50ZXh0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoYXIgPSBpbl9yb3dbY29sdGFyZ11cbiAgICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNoYXIgPSBpbl9yb3dbaW5fcm93Lmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSBjaGFyWzNdXG4gICAgICB9XG4gICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnc2V0X2VuZF9tYXJrZXInLCBwYXlsb2FkOiBpbmRleCB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHRVcChlKSB7XG4gICAgbGV0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGxldCByYXd4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY3dcbiAgICBsZXQgcmF3eSA9IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgbGV0IHJvd3RhcmcgPSBNYXRoLmZsb29yKHJhd3kgLyBjaClcbiAgICBsZXQgY29sdGFyZyA9IE1hdGgucm91bmQocmF3eCAvIGN3KVxuICAgIGxldCBpbmRleFxuICAgIGxldCBpbl9yb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIoZSA9PiBlWzJdID09PSByb3d0YXJnKVxuICAgIGlmIChpbl9yb3cubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmRleCA9IHRzdGF0ZS50ZXh0Lmxlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2hhciA9IGluX3Jvd1tjb2x0YXJnXVxuICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGFyID0gaW5fcm93W2luX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgfVxuICAgICAgaW5kZXggPSBjaGFyWzNdXG4gICAgfVxuICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdzZXRfZW5kX21hcmtlcicsIHBheWxvYWQ6IGluZGV4IH0pXG4gICAgc2V0VGV4dENsaWNrZWQoZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBjb3B5SGFuZGxlcihlKSB7XG4gICAgbGV0IHN0cmluZyA9IHRzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgbGV0IGZpcnN0aSA9IE1hdGgubWluKC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlcilcbiAgICBsZXQgc2VsZWN0ID0gc3RyaW5nLnN1YnN0cihmaXJzdGksIGxhc3RpKVxuICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0L3BsYWluJywgc2VsZWN0KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGN1dEhhbmRsZXIoZSkge1xuICAgIGxldCBzdHJpbmcgPSB0c3RhdGUudGV4dC5tYXAobyA9PiBvWzBdKS5qb2luKCcnKVxuICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi50c3RhdGUubWFya2VyKVxuICAgIGxldCBsYXN0aSA9IE1hdGgubWF4KC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgbGV0IHNlbGVjdCA9IHN0cmluZy5zdWJzdHIoZmlyc3RpLCBsYXN0aSlcbiAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHNlbGVjdClcbiAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaW5zZXJ0JywgY29sX251bTogY29sX251bSwgcGF5bG9hZDogJycgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBmdW5jdGlvbiBwYXN0ZUhhbmRsZXIoZSkge1xuICAgIGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0JylcbiAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaW5zZXJ0JywgY29sX251bTogY29sX251bSwgcGF5bG9hZDogcGFzdGUgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb3B5JywgY29weUhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2N1dCcsIGN1dEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgcGFzdGVIYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvcHknLCBjb3B5SGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjdXQnLCBjdXRIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgcGFzdGVIYW5kbGVyKVxuICAgIH1cbiAgfSwgW21vZGUsIGNvbF9udW0sIHRzdGF0ZSwgYW1hcmssIGNtYXJrLCBzaG93X2dhbGxlcnldKVxuXG4gIGxldCBzY3cgPSBjdyAvIHNjYWxlXG4gIGxldCBzY2ggPSBjaCAvIHNjYWxlXG5cbiAgbGV0IHRpdGxlID0gJ0ZhY2UnXG4gIGxldCBkZXNjcmlwdGlvbiA9XG4gICAgJ0ZhY2UgbGV0cyB5b3UgZWRpdCBib3RoIHRoZSB0ZXh0IGFuZCB0aGUgZm9udCBpdCBpcyByZW5kZXJlZCBpbi4nXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5GYWNlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vZmFjZS5jb25zdHJhaW50LnN5c3RlbXMvZmFjZS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2ZhY2UuY29uc3RyYWludC5zeXN0ZW1zXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRvcHN0cmlwXG4gICAgICAgIGN3PXtzY3d9XG4gICAgICAgIGNoPXtzY2h9XG4gICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgIHVpX2xvYWRlZD17dWlfbG9hZGVkfVxuICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICBrZXlUcmlnZ2VyPXtrZXlUcmlnZ2VyfVxuICAgICAgLz5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogc2NoIC8gMiwgbWFyZ2luQm90dG9tOiBzY2ggLyAyIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogY3csXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXMgd2lkdGg9eydmb250Jy5sZW5ndGggKiBzY3d9IGhlaWdodD17c2NofSByZWY9e2ZscmVmfSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGUoJ2ZvbnQnKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2FyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbW9kZSA9PT0gJ2ZvbnQnID8gJ3NvbGlkIDFweCBibGFjaycgOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2FtcmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgd2lkdGg9eydjaGFyJy5sZW5ndGggKiBzY3d9XG4gICAgICAgICAgICAgIGhlaWdodD17Y2ggLyBzY2FsZX1cbiAgICAgICAgICAgICAgcmVmPXtjbHJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgcmVmPXtjcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG1vZGUgPT09ICdjaGFyJyA/ICdzb2xpZCAxcHggYmxhY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtjbXJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IHNjaCAqIDIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgd2lkdGg9eygndGV4dCAxMDB4MTAwJy5sZW5ndGggKiBjdykgLyBzY2FsZX1cbiAgICAgICAgICAgIGhlaWdodD17c2NofVxuICAgICAgICAgICAgcmVmPXt0bHJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogbW9kZSA9PT0gJ3RleHQnID8gJ3NvbGlkIDFweCBibGFjaycgOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXt0cmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnZGlmZmVyZW5jZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAtY3cgLyAyLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RleHREb3dufVxuICAgICAgICAgICAgb25Nb3VzZVVwPXt0ZXh0VXB9XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGV4dE1vdmV9XG4gICAgICAgICAgICByZWY9e21yZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJvdHRvbXN0cmlwXG4gICAgICAgIGN3PXtiY3d9XG4gICAgICAgIGNoPXtiY2h9XG4gICAgICAgIGJhc2U9e3VpX3JlZi5jdXJyZW50fVxuICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgIHVpX2xvYWRlZD17dWlfbG9hZGVkfVxuICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAga2V5VHJpZ2dlcj17a2V5VHJpZ2dlcn1cbiAgICAgIC8+XG5cbiAgICAgIHtzaG93X2dhbGxlcnkgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjIwLDIyMCwyMjAsMC44KScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZWZlZmVmJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGJjaCB9fT5cbiAgICAgICAgICAgICAgPFRpdGxlYnV0dG9uXG4gICAgICAgICAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgdWlfbG9hZGVkPXt1aV9sb2FkZWR9XG4gICAgICAgICAgICAgICAga2V5VHJpZ2dlcj17a2V5VHJpZ2dlcn1cbiAgICAgICAgICAgICAgICBtYXhfd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRofVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnZm9udCBnYWxsZXJ5OicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnRXNjYXBlJyxcbiAgICAgICAgICAgICAgICAgICAga2V5X2xhYmVsOiAnRXNjJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdleGl0JyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2dhbGxlcnlfZGF0YS5tYXAoKGYsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGJjdyAqIDIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGJjaCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycvZm9udC1saWJyYXJ5LycgKyBmfSAvPlxuICAgICAgICAgICAgICAgIDxUaXRsZWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgICB1aV9sb2FkZWQ9e3VpX2xvYWRlZH1cbiAgICAgICAgICAgICAgICAgIGtleVRyaWdnZXI9e2tleVRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgICBtYXhfd2lkdGg9e2Fjb2xzICogY3d9XG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGhvdGtleV9sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAga2V5X2xhYmVsOiBob3RrZXlfbGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/faceoff/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fs%2Fcs%2Ffaceoff%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fs%2Fcs%2Ffaceoff%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fgrant%2Fs%2Fcs%2Ffaceoff%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map