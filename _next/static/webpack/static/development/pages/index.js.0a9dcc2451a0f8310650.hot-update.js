webpackHotUpdate("static/development/pages/index.js",{

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
console.log('first');
var initialt = {
  text: Object(_components_constants__WEBPACK_IMPORTED_MODULE_6__["layoutText"])(10, short_text),
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(10),
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
      lineNumber: 1174
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175
    },
    __self: this
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177
    },
    __self: this
  }, "Face"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,shrink-to-fit=no",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://face.constraint.systems/face.png",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://face.constraint.systems",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193
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
      lineNumber: 1196
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
      lineNumber: 1206
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
      lineNumber: 1209
    },
    __self: this
  }, __jsx("canvas", {
    width: 'font'.length * scw,
    height: sch,
    ref: flref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215
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
      lineNumber: 1216
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
      lineNumber: 1222
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
      lineNumber: 1229
    },
    __self: this
  }))), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241
    },
    __self: this
  }, __jsx("canvas", {
    width: 'char'.length * scw,
    height: ch / scale,
    ref: clref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1248
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
      lineNumber: 1249
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
      lineNumber: 1256
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
      lineNumber: 1268
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274
    },
    __self: this
  }, __jsx("canvas", {
    width: 'text 100x100'.length * cw / scale,
    height: sch,
    ref: tlref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281
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
      lineNumber: 1282
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
      lineNumber: 1289
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
      lineNumber: 1304
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
      lineNumber: 1316
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
      lineNumber: 1327
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: bch
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1334
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
      lineNumber: 1335
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
        lineNumber: 1355
      },
      __self: this
    }, __jsx("img", {
      src: '/font-library/' + f,
      className: "jsx-3625601830",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1362
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
        lineNumber: 1363
      },
      __self: this
    }));
  }))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3625601830",
    __self: this
  }, "html{background:#efefef;line-height:0;}body{padding:0;margin:0;}img{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvZmFjZW9mZi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzMkN5QixBQUc4QixBQUlULEFBSUksVUFITCxJQUlYLEtBUmdCLEFBS2hCLGNBSkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9mYWNlb2ZmL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG4gIGNyZWF0ZVJlZixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGJhc2UsIGJhc2UyLCBsYXlvdXRUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnXG5pbXBvcnQgVG9wc3RyaXAgZnJvbSAnLi4vY29tcG9uZW50cy90b3BzdHJpcCdcbmltcG9ydCBCb3R0b21zdHJpcCBmcm9tICcuLi9jb21wb25lbnRzL2JvdHRvbXN0cmlwJ1xuaW1wb3J0IFRpdGxlYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVidXR0b24nXG5cbmxldCBiY3cgPSA4XG5sZXQgYmNoID0gMTZcblxubGV0IGhvdGtleV9sYWJlbHMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jy5zcGxpdCgnJylcblxuZnVuY3Rpb24gZ2V0TGFzdCh0ZXh0LCBpbmRleCkge1xuICBsZXQgY2hhciA9IHRleHRbaW5kZXhdXG4gIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgbGFzdF9jaGFyID0gdGV4dFtpbmRleCAtIDFdXG4gICAgLy8gaWYgYXQgc3RhcnRcbiAgICBpZiAobGFzdF9jaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXIgPSBbbnVsbCwgMCwgMF1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhciA9IGxhc3RfY2hhci5zbGljZSgpXG4gICAgICBpZiAoY2hhclswXSA9PT0gJ1xcbicpIHtcbiAgICAgICAgY2hhclsxXSA9IDBcbiAgICAgICAgY2hhclsyXSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyWzFdICs9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYXJcbn1cblxuZnVuY3Rpb24gdFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBmdW5jdGlvbiBtYyhuZXd0ZXh0LCBtYXJrKSB7XG4gICAgcmV0dXJuIG1hcmsubWFwKHYgPT4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdiksIG5ld3RleHQubGVuZ3RoKSlcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0Jzoge1xuICAgICAgbGV0IG5ld2tleSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IG5ld19zdHJpbmcgPVxuICAgICAgICB0ZXh0X3N0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCBmaXJzdGkpKSArXG4gICAgICAgIG5ld2tleSArXG4gICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKGxhc3RpKVxuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChhY3Rpb24uY29sX251bSwgbmV3X3N0cmluZylcbiAgICAgIGxldCBuZXdfbWFya2VyID0gW2ZpcnN0aSArIG5ld2tleS5sZW5ndGgsIGZpcnN0aSArIG5ld2tleS5sZW5ndGhdXG4gICAgICByZXR1cm4geyB0ZXh0OiB0ZXh0X2xheW91dCwgbWFya2VyOiBtYyh0ZXh0X2xheW91dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdiYWNrc3BhY2UnOiB7XG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgbmV3X3N0cmluZywgbmV3X21hcmtlclxuICAgICAgaWYgKHN0YXRlLm1hcmtlclswXSA9PT0gc3RhdGUubWFya2VyWzFdKSB7XG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHN0YXRlLm1hcmtlclswXSAtIDEpKSArXG4gICAgICAgICAgdGV4dF9zdHJpbmcuc2xpY2Uoc3RhdGUubWFya2VyWzBdKVxuICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSAtIDEsIHN0YXRlLm1hcmtlclswXSAtIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0aSkpICsgdGV4dF9zdHJpbmcuc2xpY2UobGFzdGkpXG4gICAgICAgIG5ld19tYXJrZXIgPSBbZmlyc3RpLCBmaXJzdGldXG4gICAgICB9XG4gICAgICBsZXQgdGV4dF9sYXlvdXQgPSBsYXlvdXRUZXh0KGFjdGlvbi5jb2xfbnVtLCBuZXdfc3RyaW5nKVxuICAgICAgcmV0dXJuIHsgdGV4dDogdGV4dF9sYXlvdXQsIG1hcmtlcjogbWModGV4dF9sYXlvdXQsIG5ld19tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnaGlnaGxpZ2h0Jzoge1xuICAgICAgbGV0IG5ld19tYXJrZXIgPSBzdGF0ZS5tYXJrZXJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSAhPSAwKSB7XG4gICAgICAgIG5ld19tYXJrZXIgPSBbc3RhdGUubWFya2VyWzBdLCBzdGF0ZS5tYXJrZXJbMV0gKyBhY3Rpb24ucGF5bG9hZFswXV1cbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSAhPSAwKSB7XG4gICAgICAgIGxldCBmaXJzdGkgPSBzdGF0ZS5tYXJrZXJbMV1cbiAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gPCAwKSB7XG4gICAgICAgICAgaWYgKHBvc1syXSA+IDApIHtcbiAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfdXBbcG9zWzFdXVxuICAgICAgICAgICAgaWYgKGNjID09PSB1bmRlZmluZWQpIGNjID0gcm93X3VwW3Jvd191cC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgbmV3X21hcmtlciA9IFtzdGF0ZS5tYXJrZXJbMF0sIGNjWzNdXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICBpZiAocG9zWzJdIDwgc3RhdGUudGV4dFtzdGF0ZS50ZXh0Lmxlbmd0aCAtIDFdWzJdKSB7XG4gICAgICAgICAgICBsZXQgcm93X2Rvd24gPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSArIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICBpZiAoY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjYyA9IHJvd19kb3duW3Jvd19kb3duLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY2NbM10gKz0gMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSwgY2NbM11dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IHRleHQ6IHN0YXRlLnRleHQsIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfbWFya2VyJzoge1xuICAgICAgcmV0dXJuIHsgdGV4dDogc3RhdGUudGV4dCwgbWFya2VyOiBtYyhzdGF0ZS50ZXh0LCBhY3Rpb24ucGF5bG9hZCkgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfZW5kX21hcmtlcic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHN0YXRlLnRleHQsXG4gICAgICAgIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgW3N0YXRlLm1hcmtlclswXSwgYWN0aW9uLnBheWxvYWRdKSxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnbGF5b3V0Jzoge1xuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChcbiAgICAgICAgYWN0aW9uLmNvbF9udW0sXG4gICAgICAgIHN0YXRlLnRleHQubWFwKG8gPT4gb1swXSkuam9pbignJylcbiAgICAgIClcbiAgICAgIHJldHVybiB7IHRleHQ6IHRleHRfbGF5b3V0LCBtYXJrZXI6IG1jKHRleHRfbGF5b3V0LCBzdGF0ZS5tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnbW92ZV9tYXJrZXInOlxuICAgICAge1xuICAgICAgICBsZXQgbmV3X21hcmtlciA9IHN0YXRlLm1hcmtlclxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMF0gIT0gMCkge1xuICAgICAgICAgIG5ld19tYXJrZXIgPSBbXG4gICAgICAgICAgICBzdGF0ZS5tYXJrZXJbMF0gKyBhY3Rpb24ucGF5bG9hZFswXSxcbiAgICAgICAgICAgIHN0YXRlLm1hcmtlclswXSArIGFjdGlvbi5wYXlsb2FkWzBdLFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gIT0gMCkge1xuICAgICAgICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA8IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPiAwKSB7XG4gICAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICAgIGxldCBjYyA9IHJvd191cFtwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSBjYyA9IHJvd191cFtyb3dfdXAubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgbmV3X21hcmtlciA9IFtjY1szXSwgY2NbM11dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPCBzdGF0ZS50ZXh0W3N0YXRlLnRleHQubGVuZ3RoIC0gMV1bMl0pIHtcbiAgICAgICAgICAgICAgbGV0IHJvd19kb3duID0gc3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSBwb3NbMl0gKyAxKVxuICAgICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2MgPSByb3dfZG93bltyb3dfZG93bi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICBjY1szXSArPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19tYXJrZXIgPSBbY2NbM10sIGNjWzNdXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0ZXh0OiBzdGF0ZS50ZXh0LCBtYXJrZXI6IG1jKHN0YXRlLnRleHQsIG5ld19tYXJrZXIpIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1dDogdGhyb3cgbmV3IEVycm9yKClcbiAgfVxufVxuXG5sZXQgc2hvcnRfdGV4dCA9IGBDSEFQVEVSIDEuIExvb21pbmdzLlxuXG5DYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdv4oCUbmV2ZXIgbWluZCBob3cgbG9uZyBwcmVjaXNlbHnigJRoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC5gXG5cbnNob3J0X3RleHQgPSBgWW91IHNlZSBwZW9wbGUsIGFuZCB5b3UncmUgZGlzY29ubmVjdGVkIGZyb20gdGhlbSwgdGhleSBtZWFuIG5vdGhpbmcgdG8geW91LCBidXQgb3RoZXIgdGltZXMgeW91IGNhbiBpbnZlc3QgZXZlcnl0aGluZyBpbiBzb21lb25lIHlvdSBkb24ndCBldmVuIGtub3csIHNpbGVudGx5IGJlbGlldmUgaW4gdGhlbSwgaXQgbWlnaHQgYmUgb24gdGhlIHVuZGVyZ3JvdW5kIG9yIGluIGEgc2hvcCBvciBzb21ldGhpbmcuIFlvdSBob3BlIHBlb3BsZSBhcmUgZG9pbmcgdGhhdCB3aXRoIHlvdSBhcyB3ZWxsLiBTb21lIHBlb3BsZSwgZXZlbiB3aGVuIHRoZXkncmUgcXVpdGUgeW91bmcsIGFuZCB0aGV5J3JlIGluIGRpZmZpY3VsdHksIG1heWJlIHRha2luZyBhIGJhdHRlcmluZyBpbiB0aGVpciBsaWZlLCBidXQgdGhleSBzdGlsbCBoYW5kbGUgdGhlbXNlbHZlcyB3aXRoIGdyYWNlLiBJIGhvcGUgbW9zdCBwZW9wbGUgY2FuIGJlIGxpa2UgdGhhdCwgaG9sZCBpdCB0b2dldGhlciwgSSB3YW50ZWQgdGhpcyBhbGJ1bSB0byBiZSBmb3IgcGVvcGxlIGluIHRoYXQgc2l0dWF0aW9uLmBcblxuc2hvcnRfdGV4dCA9IGBGYWNlIGxldHMgeW91IGVkaXQgYm90aCB0aGUgdGV4dCBhbmQgdGhlIGZvbnQgaXQgaXMgcmVuZGVyZWQgaW4uIEluIHRleHQgbW9kZSB5b3UgY2FuIHR5cGUgYW5kIGVkaXQgdGV4dCBub3JtYWxseS4gUHJlc3MgZXNjYXBlIHRvIGVudGVyIGZvbnQgbW9kZSwgd2hlcmUgeW91IGNhbiBzZWxlY3QgYSBjaGFyYWN0ZXIgdG8gZWRpdC4gQW55IGNoYW5nZXMgdG8gYSBjaGFyYWN0ZXIgYXJlIHZpc2libGUgaW1tZWRpYXRlbHkuXG5cbkFkZGl0aW9uYWwgY29udHJvbHMgYXJlIHNob3duIGF0IHRoZSBib3R0b20uIFlvdSBjYW4gY2hhbmdlIHRoZSB0ZXh0IGFyZWEgYW5kIHNhdmUgaXQgYXMgYW4gaW1hZ2UgaW4gdGV4dCBtb2RlLiBJbiBmb250IG1vZGUsIHlvdSBjYW4gc2F2ZSB0aGUgZm9udCwgbG9hZCBhIGZvbnQgKGZvbnRzIGFyZSBqdXN0IGEgc3ByaXRlIHNoZWV0IGltYWdlKSwgb3IgY2hvb3NlIGEgZm9udCBmcm9tIHRoZSBmb250IGdhbGxlcnkuXG5cblRoZSBiYXNlIGZvbnQgdXNlZCBpcyBhIHN1YnNldCBvZiBHTlUgVW5pZm9udC5gXG5cbmNvbnNvbGUubG9nKCdmaXJzdCcpXG5sZXQgaW5pdGlhbHQgPSB7XG4gIHRleHQ6IGxheW91dFRleHQoMTAsIHNob3J0X3RleHQpLFxuICBtYXJrZXI6IFtzaG9ydF90ZXh0Lmxlbmd0aCwgc2hvcnRfdGV4dC5sZW5ndGhdLFxufVxuXG5sZXQgYWNlbF9udW0gPSA5NVxubGV0IGFjb2xzID0gMTJcbmxldCBhcm93cyA9IE1hdGguY2VpbChhY2VsX251bSAvIGFjb2xzKVxuXG5sZXQgbWFnbmlmeSA9IDhcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCd0ZXh0JylcblxuICBsZXQgbXJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBhcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBhbXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBbY2FudmFzX2xvYWRlZCwgc2V0Q2FudmFzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3VpX2xvYWRlZCwgc2V0VUlMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgbGV0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGUoMilcbiAgbGV0IFtjdywgc2V0Q3ddID0gdXNlU3RhdGUoOCAqIDIpXG4gIGxldCBbY2gsIHNldENoXSA9IHVzZVN0YXRlKDE2ICogMilcbiAgbGV0IFtjb2xfbnVtLCBzZXRDb2xOdW1dID0gdXNlU3RhdGUoMTApXG4gIGxldCBbcm93X251bSwgc2V0Um93TnVtXSA9IHVzZVN0YXRlKDE0KVxuXG4gIGxldCBbYW1hcmssIHNldEFtYXJrXSA9IHVzZVN0YXRlKDApXG5cbiAgbGV0IFtjbWFyaywgc2V0Q21hcmtdID0gdXNlU3RhdGUoWzAsIDBdKVxuXG4gIGxldCBiYXNlX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdWlfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG5cbiAgbGV0IGZscmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdGxyZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgW3RleHRDbGlja2VkLCBzZXRUZXh0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBsZXQgW3RzdGF0ZSwgdGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodFJlZHVjZXIsIGluaXRpYWx0KVxuXG4gIGxldCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZSgwKVxuXG4gIGxldCBbaGlnaGxpZ2h0LCBzZXRIaWdobGlnaHRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBsZXQgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGJhc2UyKVxuXG4gIGxldCBbZ2FsbGVyeV9kYXRhLCBzZXRHYWxsZXJ5RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW3Nob3dfZ2FsbGVyeSwgc2V0U2hvd0dhbGxlcnldID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL2xpYnJhcnkuanNvbicpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHNldEdhbGxlcnlEYXRhKGpzb24pXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGJhc2UgPSBiYXNlX3JlZi5jdXJyZW50XG4gICAgbGV0IGJhc2V4ID0gYmFzZS5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGJhc2VfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBiYXNlX2ltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBiYXNleC5jbGVhclJlY3QoMCwgMCwgYmFzZS53aWR0aCwgYmFzZS5oZWlnaHQpXG4gICAgICBiYXNleC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICBiYXNleC5maWxsUmVjdCgwLCAwLCBiYXNlLndpZHRoLCBiYXNlLmhlaWdodClcbiAgICAgIGJhc2V4LmRyYXdJbWFnZShiYXNlX2ltZywgMCwgMCwgYmFzZS53aWR0aCwgYmFzZS5oZWlnaHQpXG4gICAgICBkcmF3QWxwaGFiZXQoKVxuICAgICAgZHJhd1RleHQoKVxuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgICBiYXNlX2ltZy5zcmMgPSBzcmNcbiAgICBzZXRMb2FkZWQoc3JjKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZXMoKSB7XG4gICAgLy8gdGV4dFxuICAgIGxldCB0ID0gdHJlZi5jdXJyZW50XG4gICAgdC53aWR0aCA9IGN3ICogKGNvbF9udW0gKyAyKVxuICAgIHQuaGVpZ2h0ID0gY2ggKiAocm93X251bSArIDEpXG5cbiAgICAvLyB0ZXh0IG1hcmtlclxuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG4gICAgbS53aWR0aCA9IGN3ICogKGNvbF9udW0gKyAzKVxuICAgIG0uaGVpZ2h0ID0gY2ggKiAocm93X251bSArIDEpXG5cbiAgICAvLyBhbHBoYWJldFxuICAgIGxldCBhID0gYXJlZi5jdXJyZW50XG4gICAgYS53aWR0aCA9IGN3ICogYWNvbHNcbiAgICBhLmhlaWdodCA9IGNoICogYXJvd3NcblxuICAgIC8vIGFscGhhYmV0IG1hcmtlclxuICAgIGxldCBhbSA9IGFtcmVmLmN1cnJlbnRcbiAgICBhbS53aWR0aCA9IGN3ICogYWNvbHNcbiAgICBhbS5oZWlnaHQgPSBjaCAqIGFyb3dzXG5cbiAgICAvLyBjaGFyYWN0ZXJcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGMud2lkdGggPSBjdyAqIG1hZ25pZnlcbiAgICBjLmhlaWdodCA9IGNoICogbWFnbmlmeVxuXG4gICAgLy8gY2hhcmFjdGVyIG1hcmtlclxuICAgIGxldCBjbSA9IGNtcmVmLmN1cnJlbnRcbiAgICBjbS53aWR0aCA9IGMud2lkdGhcbiAgICBjbS5oZWlnaHQgPSBjLmhlaWdodFxuICB9XG5cbiAgLy8gaW5pdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIChjdyA9PT0gOCAmJiBjaCA9PT0gMTYgJiYgc2NhbGUgPT09IDEpIHx8XG4gICAgICAoY3cgPT09IDE2ICYmIGNoID09PSAzMiAmJiBzY2FsZSA9PT0gMilcbiAgICApIHtcbiAgICAgIHNldFNpemVzKClcblxuICAgICAgbGV0ICRiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICRiYXNlLndpZHRoID0gYWNvbHMgKiAoY3cgLyBzY2FsZSlcbiAgICAgICRiYXNlLmhlaWdodCA9IGFyb3dzICogKGNoIC8gc2NhbGUpXG4gICAgICBsZXQgJGJhc2V4ID0gJGJhc2UuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgJGJhc2V4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICBsZXQgYmFzZV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgYmFzZV9pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAkYmFzZXguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgICAgICAkYmFzZXguZmlsbFJlY3QoMCwgMCwgJGJhc2Uud2lkdGgsICRiYXNlLmhlaWdodClcbiAgICAgICAgJGJhc2V4LmRyYXdJbWFnZShiYXNlX2ltZywgMCwgMCwgJGJhc2Uud2lkdGgsICRiYXNlLmhlaWdodClcbiAgICAgICAgYmFzZV9yZWYuY3VycmVudCA9ICRiYXNlXG5cbiAgICAgICAgc2V0Q2FudmFzTG9hZGVkKHRydWUpXG4gICAgICB9XG4gICAgICBiYXNlX2ltZy5zcmMgPSBsb2FkZWRcblxuICAgICAgbGV0IHVpX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICB1aV9pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgJHVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgJHVpLndpZHRoID0gKGFjb2xzICogY3cpIC8gc2NhbGVcbiAgICAgICAgJHVpLmhlaWdodCA9IChhcm93cyAqIGNoKSAvIHNjYWxlXG4gICAgICAgIGxldCAkdWl4ID0gJHVpLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgJHVpeC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgICAkdWl4LmRyYXdJbWFnZSh1aV9pbWcsIDAsIDAsICR1aS53aWR0aCwgJHVpLmhlaWdodClcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQgPSAkdWlcblxuICAgICAgICBzZXRVSUxvYWRlZCh0cnVlKVxuICAgICAgfVxuICAgICAgdWlfaW1nLnNyYyA9IGJhc2UyXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBzZXRTaXplcygpXG4gICAgICBkcmF3TWFya2VyKClcbiAgICAgIGRyYXdUZXh0KClcbiAgICAgIGRyYXdBbHBoYWJldCgpXG4gICAgICBkcmF3QWxwaGFiZXRNYXJrZXIoKVxuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgfSwgW2N3LCBjaCwgc2NhbGUsIGNhbnZhc19sb2FkZWRdKVxuXG4gIC8vIGluaXQgYWZ0ZXIgY2FudmFzIGxvYWRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBkcmF3TWFya2VyKClcbiAgICAgIGRyYXdUZXh0KClcbiAgICAgIGRyYXdBbHBoYWJldCgpXG4gICAgICBkcmF3QWxwaGFiZXRNYXJrZXIoKVxuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgfSwgW2NhbnZhc19sb2FkZWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhbnZhc19sb2FkZWQpIHtcbiAgICAgIGRyYXdNYXJrZXIoKVxuICAgICAgZHJhd0FscGhhYmV0TWFya2VyKClcbiAgICB9XG4gIH0sIFttb2RlLCB0c3RhdGUudGV4dCwgdHN0YXRlLm1hcmtlciwgYW1hcmssIGNvbF9udW0sIGhpZ2hsaWdodF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FudmFzX2xvYWRlZCkge1xuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgfSwgW21vZGUsIGFtYXJrLCBjbWFya10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FudmFzX2xvYWRlZCkge1xuICAgICAgZHJhd1RleHQoKVxuICAgIH1cbiAgfSwgW3RzdGF0ZS50ZXh0LCBjb2xfbnVtXSlcblxuICBmdW5jdGlvbiBkcmF3QWxwaGFiZXRNYXJrZXIoKSB7XG4gICAgbGV0IGFtID0gYW1yZWYuY3VycmVudFxuICAgIGxldCBhbXggPSBhbS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBhbXguY2xlYXJSZWN0KDAsIDAsIGFtLndpZHRoLCBhbS5oZWlnaHQpXG5cbiAgICAvLyBhbXguZmlsbFN0eWxlID0gJ2JsYWNrJ1xuICAgIC8vIGFteC5maWxsUmVjdCgwLCAwLCBhbS53aWR0aCwgYW0uaGVpZ2h0KVxuXG4gICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICB9XG4gICAgbGV0IFt4LCB5XSA9IGdldFhZKGFtYXJrKVxuICAgIGFteC5maWxsU3R5bGUgPSAnI2ZmZidcbiAgICBhbXgubGluZVdpZHRoID0gc2NhbGVcblxuICAgIGxldCBmbCA9IGZscmVmLmN1cnJlbnRcbiAgICBmbC53aWR0aCA9ICdmb250Oi0nLmxlbmd0aCAqIGJjd1xuICAgIGxldCBmbHggPSBmbC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGZsX2NvbnRlbnQgPSAnZm9udCAnXG4gICAgZmx4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3ZlcidcbiAgICBmbHguZmlsbFN0eWxlID0gJyNlZmVmZWYnXG4gICAgZmx4LmZpbGxSZWN0KDAsIDAsIGZsLndpZHRoLCBmbC5oZWlnaHQpXG4gICAgZmx4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkYXJrZW4nXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbF9jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gZmxfY29udGVudC5jaGFyQ29kZUF0KGkpIC0gMzJcbiAgICAgIGlmIChrZXkgPT09IC0yMikga2V5ID0gOTRcbiAgICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGtleSlcbiAgICAgIGZseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgc3ByaXRlX3kgKiAoY2ggLyBzY2FsZSksXG4gICAgICAgIGN3IC8gc2NhbGUsXG4gICAgICAgIGNoIC8gc2NhbGUsXG4gICAgICAgIGkgKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIDAgKiAoY2ggLyBzY2FsZSksXG4gICAgICAgIGN3IC8gc2NhbGUsXG4gICAgICAgIGNoIC8gc2NhbGVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ2ZvbnQnKSB7XG4gICAgICBhbXguZmlsbFJlY3QoeCAqIGN3LCB5ICogY2gsIGN3LCBjaClcbiAgICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICAgIH1cbiAgICAgIGxldCBrZXkgPSAnOicuY2hhckNvZGVBdCgwKSAtIDMyXG4gICAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShrZXkpXG4gICAgICBmbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiBiY3csXG4gICAgICAgIHNwcml0ZV95ICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaCxcbiAgICAgICAgKGZsX2NvbnRlbnQubGVuZ3RoIC0gMSkgKiBiY3csXG4gICAgICAgIDAgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoXG4gICAgICApXG4gICAgICBmbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgeCAqIGJjdyxcbiAgICAgICAgeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIGZsX2NvbnRlbnQubGVuZ3RoICogYmN3LFxuICAgICAgICAwICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdBbHBoYWJldCgpIHtcbiAgICBsZXQgYSA9IGFyZWYuY3VycmVudFxuICAgIGxldCBheCA9IGEuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGF4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICBheC5jbGVhclJlY3QoMCwgMCwgYS53aWR0aCwgYS5oZWlnaHQpXG4gICAgYXguZHJhd0ltYWdlKGJhc2VfcmVmLmN1cnJlbnQsIDAsIDAsIGEud2lkdGgsIGEuaGVpZ2h0KVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0NoYXIoKSB7XG4gICAgbGV0IGNtID0gY21yZWYuY3VycmVudFxuICAgIGxldCBjbXggPSBjbS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjbXguY2xlYXJSZWN0KDAsIDAsIGNtLndpZHRoLCBjbS5oZWlnaHQpXG4gICAgaWYgKG1vZGUgPT09ICdjaGFyJykge1xuICAgICAgY214LmZpbGxTdHlsZSA9ICdtYWdlbnRhJ1xuICAgICAgY214LmZpbGxSZWN0KFxuICAgICAgICBjbWFya1swXSAqIG1hZ25pZnksXG4gICAgICAgIGNtYXJrWzFdICogbWFnbmlmeSxcbiAgICAgICAgbWFnbmlmeSAqIHNjYWxlLFxuICAgICAgICBtYWduaWZ5ICogc2NhbGVcbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY3guZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGN4LmZpbGxSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgIGN4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShhbWFyaylcbiAgICBjeC5kcmF3SW1hZ2UoXG4gICAgICBiYXNlX3JlZi5jdXJyZW50LFxuICAgICAgc3ByaXRlX3ggKiBiY3csXG4gICAgICBzcHJpdGVfeSAqIGJjaCxcbiAgICAgIGJjdyxcbiAgICAgIGJjaCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY3cgKiBtYWduaWZ5LFxuICAgICAgY2ggKiBtYWduaWZ5XG4gICAgKVxuXG4gICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICB9XG4gICAgbGV0IGNsID0gY2xyZWYuY3VycmVudFxuICAgIGNsLndpZHRoID0gJ2NoYXI6dCcubGVuZ3RoICogYmN3XG4gICAgbGV0IGNseCA9IGNsLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgY2xfY29udGVudCA9ICdjaGFyICdcbiAgICBjbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICAgIGNseC5maWxsU3R5bGUgPSAnI2VmZWZlZidcbiAgICBjbHguZmlsbFJlY3QoMCwgMCwgY2wud2lkdGgsIGNsLmhlaWdodClcbiAgICBjbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlbidcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsX2NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBjbF9jb250ZW50LmNoYXJDb2RlQXQoaSkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IFtzcHJpdGVfeCwgc3ByaXRlX3ldID0gZ2V0WFkoa2V5KVxuICAgICAgY2x4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogKGN3IC8gc2NhbGUpLFxuICAgICAgICBzcHJpdGVfeSAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZSxcbiAgICAgICAgaSAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgMCAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAnY2hhcicpIHtcbiAgICAgIGN4LnN0cm9rZVN0eWxlID0gJyNkZGQnXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IGNoOyByICs9IHNjYWxlKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY3c7IGMgKz0gc2NhbGUpIHtcbiAgICAgICAgICBjeC5zdHJva2VSZWN0KFxuICAgICAgICAgICAgYyAqIG1hZ25pZnksXG4gICAgICAgICAgICByICogbWFnbmlmeSxcbiAgICAgICAgICAgIG1hZ25pZnkgKiBzY2FsZSxcbiAgICAgICAgICAgIG1hZ25pZnkgKiBzY2FsZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICAgIHJldHVybiBbaSAlIGFjb2xzLCBNYXRoLmZsb29yKGkgLyBhY29scyldXG4gICAgICB9XG4gICAgICBsZXQga2V5ID0gJzonLmNoYXJDb2RlQXQoMCkgLSAzMlxuICAgICAgbGV0IFthX3gsIGFfeV0gPSBnZXRYWShrZXkpXG4gICAgICBjbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgYV94ICogYmN3LFxuICAgICAgICBhX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICAoY2xfY29udGVudC5sZW5ndGggLSAxKSAqIGJjdyxcbiAgICAgICAgMCAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2hcbiAgICAgIClcbiAgICAgIGNseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICBjbF9jb250ZW50Lmxlbmd0aCAqIGJjdyxcbiAgICAgICAgMCAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2hcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3TWFya2VyKCkge1xuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG5cbiAgICBsZXQgbXggPSBtLmdldENvbnRleHQoJzJkJylcblxuICAgIGxldCBjaGFyID0gZ2V0TGFzdChcbiAgICAgIHRzdGF0ZS50ZXh0LFxuICAgICAgTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlciwgdHN0YXRlLnRleHQubGVuZ3RoIC0gMSlcbiAgICApXG5cbiAgICBtLndpZHRoID0gY3cgKiAoY29sX251bSArIDMpXG4gICAgbS5oZWlnaHQgPSBjaGFyWzJdICogY2ggKyBjaCArIGNoXG4gICAgbXguY2xlYXJSZWN0KDAsIDAsIG0ud2lkdGgsIG0uaGVpZ2h0KVxuXG4gICAgaWYgKG1vZGUgIT0gJ3RleHQnICYmIGhpZ2hsaWdodCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0c3RhdGUudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hhciA9IHRzdGF0ZS50ZXh0W2ldXG4gICAgICAgIGxldCBha2V5XG4gICAgICAgIGlmIChhbWFyayA9PT0gOTQpIHtcbiAgICAgICAgICBha2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMiAtIDIyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFtYXJrICsgMzIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJbMF0gPT09IGFrZXkpIHtcbiAgICAgICAgICBteC5maWxsU3R5bGUgPSAnIzIyMidcbiAgICAgICAgICBteC5maWxsUmVjdChjaGFyWzFdICogY3cgKyBjdyArIGN3IC8gMiwgY2hhclsyXSAqIGNoICsgY2ggLyAyLCBjdywgY2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ3RleHQnKSB7XG4gICAgICBmdW5jdGlvbiBnZXRYeShtYXJrKSB7XG4gICAgICAgIGxldCBjaGFyID0gZ2V0TGFzdCh0c3RhdGUudGV4dCwgbWFyaylcbiAgICAgICAgbGV0IHggPSBjaGFyWzFdXG4gICAgICAgIGxldCB5ID0gY2hhclsyXVxuICAgICAgICByZXR1cm4gW3gsIHldXG4gICAgICB9XG5cbiAgICAgIGlmICh0c3RhdGUubWFya2VyWzBdID09PSB0c3RhdGUubWFya2VyWzFdKSB7XG4gICAgICAgIC8vIGN1cnNvclxuICAgICAgICBsZXQgW3gsIHldID0gZ2V0WHkodHN0YXRlLm1hcmtlclswXSlcbiAgICAgICAgbXguZmlsbFN0eWxlID0gJ2dyZWVuJ1xuICAgICAgICBteC5maWxsUmVjdChcbiAgICAgICAgICB4ICogY3cgKyBjdyArIGN3IC8gMiAtIHNjYWxlLFxuICAgICAgICAgIHkgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICBzY2FsZSAqIDIsXG4gICAgICAgICAgY2hcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaGlnaGxpZ2h0XG4gICAgICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi50c3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi50c3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgW3gwLCB5MF0gPSBnZXRYeShmaXJzdGkpXG4gICAgICAgIGxldCBbeDEsIHkxXSA9IGdldFh5KGxhc3RpKVxuICAgICAgICBteC5maWxsU3R5bGUgPSAnZ3JlZW4nXG4gICAgICAgIC8vIHNhbWUgcm93XG4gICAgICAgIGlmICh5MCA9PT0geTEpIHtcbiAgICAgICAgICBteC5maWxsUmVjdChcbiAgICAgICAgICAgIHgwICogY3cgKyBjdyArIGN3IC8gMixcbiAgICAgICAgICAgIHkwICogY2ggKyBjaCAvIDIsXG4gICAgICAgICAgICAoeDEgLSB4MCkgKiBjdyxcbiAgICAgICAgICAgIGNoXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZpcnN0X3Jvd1xuICAgICAgICAgIGxldCBmcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKG8gPT4gb1syXSA9PT0geTApXG4gICAgICAgICAgbGV0IGxhc3RfZnJvdyA9IGZyb3dbZnJvdy5sZW5ndGggLSAxXVxuICAgICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgICAgeDAgKiBjdyArIGN3ICsgY3cgLyAyLFxuICAgICAgICAgICAgeTAgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICAgIChsYXN0X2Zyb3dbMV0gLSB4MCArIDEpICogY3csXG4gICAgICAgICAgICBjaFxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmICh5MSAtIHkwID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHkwICsgMTsgaSA8IHkxOyBpKyspIHtcbiAgICAgICAgICAgICAgbGV0IHJvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IGkpXG4gICAgICAgICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIDAgKiBjdyArIGN3ICsgY3cgLyAyLFxuICAgICAgICAgICAgICAgIGkgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICAgICAgICAocm93W3Jvdy5sZW5ndGggLSAxXVsxXSArIDEpICogY3csXG4gICAgICAgICAgICAgICAgY2hcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxhc3Rfcm93XG4gICAgICAgICAgbGV0IGxyb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSB5MSlcbiAgICAgICAgICBsZXQgbGFzdF9scm93ID0gbHJvd1tscm93Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgbXguZmlsbFJlY3QoMCAqIGN3ICsgY3cgKyBjdyAvIDIsIHkxICogY2ggKyBjaCAvIDIsIHgxICogY3csIGNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RleHQoKSB7XG4gICAgbGV0IHQgPSB0cmVmLmN1cnJlbnRcbiAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgdGV4dCA9IHRzdGF0ZS50ZXh0XG5cbiAgICBsZXQgY2hhciA9IGdldExhc3QoXG4gICAgICB0c3RhdGUudGV4dCxcbiAgICAgIE1hdGgubWF4KE1hdGgubWF4KC4uLnRzdGF0ZS5tYXJrZXIpLCB0c3RhdGUudGV4dC5sZW5ndGgpXG4gICAgKVxuICAgIHQud2lkdGggPSBjdyAqIChjb2xfbnVtICsgMilcbiAgICB0LmhlaWdodCA9IGNoYXJbMl0gKiBjaCArIGNoICsgY2hcblxuICAgIC8vIHRleHQgbGFiZWxcbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgdGwgPSB0bHJlZi5jdXJyZW50XG4gICAgbGV0IHRseCA9IHRsLmdldENvbnRleHQoJzJkJylcbiAgICB0bHguY2xlYXJSZWN0KDAsIDAsIHRsLndpZHRoLCB0bC5oZWlnaHQpXG4gICAgdGx4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3ZlcidcbiAgICB0bHguZmlsbFN0eWxlID0gJyNlZmVmZWYnXG4gICAgdGx4LmZpbGxSZWN0KDAsIDAsIHRsLndpZHRoLCB0bC5oZWlnaHQpXG4gICAgdGx4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkYXJrZW4nXG4gICAgbGV0IHRsX2NvbnRlbnQgPSAndGV4dDonICsgY29sX251bSArICd4JyArIChjaGFyWzJdICsgMSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRsX2NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSB0bF9jb250ZW50LmNoYXJDb2RlQXQoaSkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IFtzcHJpdGVfeCwgc3ByaXRlX3ldID0gZ2V0WFkoa2V5KVxuICAgICAgdGx4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogKGN3IC8gc2NhbGUpLFxuICAgICAgICBzcHJpdGVfeSAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZSxcbiAgICAgICAgaSAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgMCAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIHR4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICB0eC5maWxsUmVjdCgwLCAwLCB0LndpZHRoLCB0LmhlaWdodClcbiAgICB0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRleHRbaV1cbiAgICAgIGxldCB4ID0gaXRlbVsxXVxuICAgICAgbGV0IHkgPSBpdGVtWzJdXG4gICAgICBsZXQga2V5ID0gaXRlbVswXS5jaGFyQ29kZUF0KDApIC0gMzJcbiAgICAgIGlmIChrZXkgPT09IC0yMikga2V5ID0gOTRcbiAgICAgIGxldCBzcHJpdGVfeCA9IGtleSAlIGFjb2xzXG4gICAgICBsZXQgc3ByaXRlX3kgPSBNYXRoLmZsb29yKGtleSAvIGFjb2xzKVxuICAgICAgdHguZHJhd0ltYWdlKFxuICAgICAgICBiYXNlX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICB4ICogY3cgKyBjdyxcbiAgICAgICAgeSAqIGNoICsgY2ggLyAyLFxuICAgICAgICBjdyxcbiAgICAgICAgY2hcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlUcmlnZ2VyKGtleXN0cmluZykge1xuICAgIGxldCBzaGlmdCA9IGZhbHNlXG4gICAgbGV0IGN0cmwgPSBmYWxzZVxuICAgIGxldCBtZXRhID0gZmFsc2VcblxuICAgIGlmIChrZXlzdHJpbmcuaW5kZXhPZignY3RybCcpID4gLTEpIHtcbiAgICAgIGN0cmwgPSB0cnVlXG4gICAgICBrZXlzdHJpbmcgPSBrZXlzdHJpbmcuc3BsaXQoJysnKVsxXVxuICAgIH1cblxuICAgIGttX3JlZi5jdXJyZW50W2tleXN0cmluZ10gPSB0cnVlXG4gICAga2V5QWN0aW9uKGtleXN0cmluZywge1xuICAgICAgc2hpZnRLZXk6IHNoaWZ0LFxuICAgICAgY3RybEtleTogY3RybCxcbiAgICAgIG1ldGE6IG1ldGEsXG4gICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7fSxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAga21fcmVmLmN1cnJlbnRba2V5c3RyaW5nXSA9IGZhbHNlXG4gICAgfSwgMClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcblxuICAgIGxldCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5XG4gICAgbGV0IGN0cmwgPSBldmVudC5jdHJsS2V5XG4gICAgbGV0IG1ldGEgPSBldmVudC5tZXRhS2V5XG5cbiAgICAvLyBzaG93IGdhbGxlcnkgb3ZlcnJpZGVzIGV2ZXJ5dGhpbmcgZWxzZVxuICAgIGlmIChzaG93X2dhbGxlcnkpIHtcbiAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHNldFNob3dHYWxsZXJ5KHByZXYgPT4gIXByZXYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdGtleV9sYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgY2hlY2tfa2V5ID0gaG90a2V5X2xhYmVsc1tpXVxuICAgICAgICAgIGlmIChrZXkgPT09IGNoZWNrX2tleSkge1xuICAgICAgICAgICAgbGV0IHNyYyA9IGdhbGxlcnlfZGF0YVtob3RrZXlfbGFiZWxzLmluZGV4T2Yoa2V5KV1cbiAgICAgICAgICAgIHNldFNob3dHYWxsZXJ5KGZhbHNlKVxuICAgICAgICAgICAgbG9hZEltYWdlKCcvZm9udC1saWJyYXJ5LycgKyBzcmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBzaXplIGNoYW5nZSBjYW4gYmUgZG9uZSBpbiBhbnkgbW9kZVxuICAgIGlmIChjdHJsICYmIGtleSA9PSAxKSB7XG4gICAgICBzZXRTY2FsZSgxKVxuICAgICAgc2V0Q3coOClcbiAgICAgIHNldENoKDE2KVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT0gMikge1xuICAgICAgc2V0U2NhbGUoMilcbiAgICAgIHNldEN3KDE2KVxuICAgICAgc2V0Q2goMzIpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PSAndicpIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnN0cmFpbnQtc3lzdGVtcy9mYWNlJ1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAndGV4dCcpIHtcbiAgICAgIGlmIChjdHJsICYmIGtleSA9PT0gJ2EnKSB7XG4gICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdzZXRfbWFya2VyJywgcGF5bG9hZDogWzAsIHRzdGF0ZS50ZXh0Lmxlbmd0aF0gfSlcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdoJykge1xuICAgICAgICBsZXQgbmV3X2NvbCA9IGNvbF9udW0gLSAxXG4gICAgICAgIHNldENvbE51bShuZXdfY29sKVxuICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbGF5b3V0JywgY29sX251bTogbmV3X2NvbCB9KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnbCcpIHtcbiAgICAgICAgbGV0IG5ld19jb2wgPSBjb2xfbnVtICsgMVxuICAgICAgICBzZXRDb2xOdW0obmV3X2NvbClcbiAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2xheW91dCcsIGNvbF9udW06IG5ld19jb2wgfSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ3MnKSB7XG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgICAgbGV0IHQgPSB0cmVmLmN1cnJlbnRcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0ZW1wLndpZHRoID0gdC53aWR0aFxuICAgICAgICB0ZW1wLmhlaWdodCA9IHQuaGVpZ2h0XG5cbiAgICAgICAgbGV0IHRlbXB4ID0gdGVtcC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRlbXB4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgICAgdGVtcHguZmlsbFJlY3QoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpXG4gICAgICAgIHRlbXB4LmRyYXdJbWFnZSh0LCAwLCAwKVxuXG4gICAgICAgIHRlbXAudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgICAnZmFjZS10ZXh0LScgK1xuICAgICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgICAnLnBuZydcbiAgICAgICAgICApXG5cbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3RybCAmJiBrZXkgPT0gJ20nKSB7XG4gICAgICAgIHNldEhpZ2hsaWdodChwcmV2ID0+ICFwcmV2KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnZycpIHtcbiAgICAgICAgc2V0U2hvd0dhbGxlcnkocHJldiA9PiAhcHJldilcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ2QnKSB7XG4gICAgICAgIC8vIGZvbnQgZG93bmxvYWRcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgICAvLyBhbHdheXMgc2F2ZSBmb250IGF0IDJ4XG5cbiAgICAgICAgbGV0IGEgPSBhcmVmLmN1cnJlbnRcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0ZW1wLndpZHRoID0gYmN3ICogYWNvbHMgKiAyXG4gICAgICAgIHRlbXAuaGVpZ2h0ID0gYmNoICogYXJvd3MgKiAyXG5cbiAgICAgICAgbGV0IHRlbXB4ID0gdGVtcC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRlbXB4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRlbXB4LmRyYXdJbWFnZShhLCAwLCAwLCB0ZW1wLndpZHRoLCB0ZW1wLmhlaWdodClcblxuICAgICAgICB0ZW1wLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgICAgJ2ZhY2UtZm9udC0nICtcbiAgICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICAgJ1onICtcbiAgICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgICAgKVxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ2YnKSB7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pXG4gICAgICAgICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzaGlmdCA9IHRydWVcbiAgICBpZiAoIWN0cmwgJiYgIW1ldGEpIHtcbiAgICAgIGlmIChtb2RlID09PSAndGV4dCcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBzZXRNb2RlKCdmb250JylcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2JhY2tzcGFjZScsIGNvbF9udW06IGNvbF9udW0gfSlcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaGlnaGxpZ2h0JywgcGF5bG9hZDogWy0xLCAwXSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbW92ZV9tYXJrZXInLCBwYXlsb2FkOiBbLTEsIDBdIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaGlnaGxpZ2h0JywgcGF5bG9hZDogWysxLCAwXSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbW92ZV9tYXJrZXInLCBwYXlsb2FkOiBbKzEsIDBdIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaGlnaGxpZ2h0JywgcGF5bG9hZDogWzAsIC0xXSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbW92ZV9tYXJrZXInLCBwYXlsb2FkOiBbMCwgLTFdIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbMCwgKzFdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFswLCArMV0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdpbnNlcnQnLCBjb2xfbnVtOiBjb2xfbnVtLCBwYXlsb2FkOiBrZXkgfSlcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICcgJykgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaW5zZXJ0JywgY29sX251bTogY29sX251bSwgcGF5bG9hZDogJ1xcbicgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2ZvbnQnKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBzZXRNb2RlKCdjaGFyJylcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICd0Jykge1xuICAgICAgICAgIHNldE1vZGUoJ3RleHQnKVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbVsnbCddKSB7XG4gICAgICAgICAgbGV0IG5ld19hbWFyayA9IGFtYXJrICsgMVxuICAgICAgICAgIGlmIChuZXdfYW1hcmsgPiBhY2VsX251bSAtIDEpIG5ld19hbWFyayA9IGFjZWxfbnVtIC0gMVxuICAgICAgICAgIHNldEFtYXJrKG5ld19hbWFyaylcbiAgICAgICAgfVxuICAgICAgICBpZiAoa21bJ2gnXSkge1xuICAgICAgICAgIGxldCBuZXdfYW1hcmsgPSBhbWFyayAtIDFcbiAgICAgICAgICBpZiAobmV3X2FtYXJrIDwgMCkgbmV3X2FtYXJrID0gMFxuICAgICAgICAgIHNldEFtYXJrKG5ld19hbWFyaylcbiAgICAgICAgfVxuICAgICAgICBpZiAoa21bJ2onXSB8fCBrbVsnayddKSB7XG4gICAgICAgICAgbGV0IGxheW91dCA9IFsuLi5BcnJheShhY2VsX251bSldLm1hcCgobiwgaSkgPT4gW1xuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGkgJSBhY29scyxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoaSAvIGFjb2xzKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGxldCBjZWxsID0gbGF5b3V0W2FtYXJrXVxuICAgICAgICAgIGlmIChrbVsnayddKSB7XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGNlbGxbMl0gLSAxXG4gICAgICAgICAgICBpZiAobmV4dCA+PSAwKSB7XG4gICAgICAgICAgICAgIGxldCB1cF9yb3cgPSBsYXlvdXQuZmlsdGVyKGMgPT4gY1syXSA9PT0gbmV4dClcbiAgICAgICAgICAgICAgbGV0IG5ld19hbWFyayA9IHVwX3Jvd1tjZWxsWzFdXVxuICAgICAgICAgICAgICBpZiAobmV3X2FtYXJrID09PSB1bmRlZmluZWQpIHVwX3Jvd1t1cF9yb3cubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa21bJ2onXSkge1xuICAgICAgICAgICAgbGV0IG5leHQgPSBjZWxsWzJdICsgMVxuICAgICAgICAgICAgaWYgKG5leHQgPD0gbGF5b3V0W2xheW91dC5sZW5ndGggLSAxXVsyXSkge1xuICAgICAgICAgICAgICBsZXQgZG5fcm93ID0gbGF5b3V0LmZpbHRlcihjID0+IGNbMl0gPT09IG5leHQpXG4gICAgICAgICAgICAgIGxldCBuZXdfYW1hcmsgPSBkbl9yb3dbY2VsbFsxXV1cbiAgICAgICAgICAgICAgaWYgKG5ld19hbWFyayA9PT0gdW5kZWZpbmVkKSBuZXdfYW1hcmsgPSBkbl9yb3dbZG5fcm93Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIHNldEFtYXJrKG5ld19hbWFya1swXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NoYXInKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgc2V0TW9kZSgnZm9udCcpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmVtZW50ID0gWzAsIDBdXG4gICAgICAgIGlmIChrbS5qKSB7XG4gICAgICAgICAgbW92ZW1lbnRbMV0gKz0gMSAqIHNjYWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttLmspIHtcbiAgICAgICAgICBtb3ZlbWVudFsxXSAtPSAxICogc2NhbGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa20uaCkge1xuICAgICAgICAgIG1vdmVtZW50WzBdIC09IDEgKiBzY2FsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbS5sKSB7XG4gICAgICAgICAgbW92ZW1lbnRbMF0gKz0gMSAqIHNjYWxlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW92ZWQgPSBbY21hcmtbMF0gKyBtb3ZlbWVudFswXSwgY21hcmtbMV0gKyBtb3ZlbWVudFsxXV1cbiAgICAgICAgaWYgKG1vdmVkWzBdIDwgMCkgbW92ZWRbMF0gPSAwXG4gICAgICAgIGlmIChtb3ZlZFswXSA+IGN3IC0gc2NhbGUpIG1vdmVkWzBdID0gY3cgLSBzY2FsZVxuICAgICAgICBpZiAobW92ZWRbMV0gPCAwKSBtb3ZlZFsxXSA9IDBcbiAgICAgICAgaWYgKG1vdmVkWzFdID4gY2ggLSBzY2FsZSkgbW92ZWRbMV0gPSBjaCAtIHNjYWxlXG4gICAgICAgIHNldENtYXJrKG1vdmVkKVxuXG4gICAgICAgIC8vIG1pZ2h0IHdhbnQgdG8gbW92ZSB0aGlzIGludG8gZHJhdyBtYXJrZXIgLSB0aGVyZSBjYW4gYmUgYSBkZWxheVxuICAgICAgICBpZiAoa20uZCkge1xuICAgICAgICAgIGVkaXRDaGFyKCdibGFjaycsIG1vdmVkKVxuICAgICAgICB9IGVsc2UgaWYgKGttLmUpIHtcbiAgICAgICAgICBlZGl0Q2hhcignd2hpdGUnLCBtb3ZlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRDaGFyKGZpbGwsIG1vdmVkKSB7XG4gICAgbGV0IGIgPSBiYXNlX3JlZi5jdXJyZW50XG4gICAgbGV0IGJ4ID0gYi5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGtleSA9IGFtYXJrXG4gICAgbGV0IHNwcml0ZV94ID0ga2V5ICUgYWNvbHNcbiAgICBsZXQgc3ByaXRlX3kgPSBNYXRoLmZsb29yKGtleSAvIGFjb2xzKVxuICAgIGlmIChmaWxsID09PSAnd2hpdGUnKSB7XG4gICAgICBieC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICBieC5maWxsUmVjdChcbiAgICAgICAgc3ByaXRlX3ggKiBiY3cgKyBtb3ZlZFswXSAvIHNjYWxlLFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCArIG1vdmVkWzFdIC8gc2NhbGUsXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgYnguZmlsbFN0eWxlID0gJ2JsYWNrJ1xuICAgICAgYnguZmlsbFJlY3QoXG4gICAgICAgIHNwcml0ZV94ICogYmN3ICsgbW92ZWRbMF0gLyBzY2FsZSxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2ggKyBtb3ZlZFsxXSAvIHNjYWxlLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfVxuXG4gICAgZHJhd0FscGhhYmV0KClcbiAgICBkcmF3Q2hhcigpXG4gICAgZHJhd1RleHQoKVxuICB9XG5cbiAgZnVuY3Rpb24gdGV4dERvd24oZSkge1xuICAgIHNldE1vZGUoJ3RleHQnKVxuXG4gICAgbGV0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGxldCByYXd4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY3dcbiAgICBsZXQgcmF3eSA9IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgbGV0IHJvd3RhcmcgPSBNYXRoLmZsb29yKHJhd3kgLyBjaClcbiAgICBsZXQgY29sdGFyZyA9IE1hdGgucm91bmQocmF3eCAvIGN3KVxuICAgIGxldCBpbmRleFxuICAgIGxldCBpbl9yb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIoZSA9PiBlWzJdID09PSByb3d0YXJnKVxuICAgIGlmIChpbl9yb3cubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmRleCA9IHRzdGF0ZS50ZXh0Lmxlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2hhciA9IGluX3Jvd1tjb2x0YXJnXVxuICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGFyID0gaW5fcm93W2luX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgfVxuICAgICAgaW5kZXggPSBjaGFyWzNdXG4gICAgfVxuICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdzZXRfbWFya2VyJywgcGF5bG9hZDogW2luZGV4LCBpbmRleF0gfSlcbiAgICBzZXRUZXh0Q2xpY2tlZCh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGV4dE1vdmUoZSkge1xuICAgIGlmICh0ZXh0Q2xpY2tlZCkge1xuICAgICAgbGV0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbGV0IHJhd3ggPSBlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjd1xuICAgICAgbGV0IHJhd3kgPSBlLmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgbGV0IHJvd3RhcmcgPSBNYXRoLmZsb29yKHJhd3kgLyBjaClcbiAgICAgIGxldCBjb2x0YXJnID0gTWF0aC5yb3VuZChyYXd4IC8gY3cpXG4gICAgICBsZXQgaW5kZXhcbiAgICAgIGxldCBpbl9yb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIoZSA9PiBlWzJdID09PSByb3d0YXJnKVxuICAgICAgaWYgKGluX3Jvdy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5kZXggPSB0c3RhdGUudGV4dC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjaGFyID0gaW5fcm93W2NvbHRhcmddXG4gICAgICAgIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjaGFyID0gaW5fcm93W2luX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgICAgIGluZGV4ID0gY2hhclszXVxuICAgICAgfVxuICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ3NldF9lbmRfbWFya2VyJywgcGF5bG9hZDogaW5kZXggfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0VXAoZSkge1xuICAgIGxldCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBsZXQgcmF3eCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIGN3XG4gICAgbGV0IHJhd3kgPSBlLmNsaWVudFkgLSByZWN0LnRvcFxuICAgIGxldCByb3d0YXJnID0gTWF0aC5mbG9vcihyYXd5IC8gY2gpXG4gICAgbGV0IGNvbHRhcmcgPSBNYXRoLnJvdW5kKHJhd3ggLyBjdylcbiAgICBsZXQgaW5kZXhcbiAgICBsZXQgaW5fcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKGUgPT4gZVsyXSA9PT0gcm93dGFyZylcbiAgICBpZiAoaW5fcm93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5kZXggPSB0c3RhdGUudGV4dC5sZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNoYXIgPSBpbl9yb3dbY29sdGFyZ11cbiAgICAgIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hhciA9IGluX3Jvd1tpbl9yb3cubGVuZ3RoIC0gMV1cbiAgICAgIH1cbiAgICAgIGluZGV4ID0gY2hhclszXVxuICAgIH1cbiAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnc2V0X2VuZF9tYXJrZXInLCBwYXlsb2FkOiBpbmRleCB9KVxuICAgIHNldFRleHRDbGlja2VkKGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29weUhhbmRsZXIoZSkge1xuICAgIGxldCBzdHJpbmcgPSB0c3RhdGUudGV4dC5tYXAobyA9PiBvWzBdKS5qb2luKCcnKVxuICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi50c3RhdGUubWFya2VyKVxuICAgIGxldCBsYXN0aSA9IE1hdGgubWF4KC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgbGV0IHNlbGVjdCA9IHN0cmluZy5zdWJzdHIoZmlyc3RpLCBsYXN0aSlcbiAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHNlbGVjdClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBmdW5jdGlvbiBjdXRIYW5kbGVyKGUpIHtcbiAgICBsZXQgc3RyaW5nID0gdHN0YXRlLnRleHQubWFwKG8gPT4gb1swXSkuam9pbignJylcbiAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4udHN0YXRlLm1hcmtlcilcbiAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi50c3RhdGUubWFya2VyKVxuICAgIGxldCBzZWxlY3QgPSBzdHJpbmcuc3Vic3RyKGZpcnN0aSwgbGFzdGkpXG4gICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBzZWxlY3QpXG4gICAgdGRpc3BhdGNoKHsgdHlwZTogJ2luc2VydCcsIGNvbF9udW06IGNvbF9udW0sIHBheWxvYWQ6ICcnIH0pXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZnVuY3Rpb24gcGFzdGVIYW5kbGVyKGUpIHtcbiAgICBsZXQgcGFzdGUgPSAoZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YSkuZ2V0RGF0YSgndGV4dCcpXG4gICAgdGRpc3BhdGNoKHsgdHlwZTogJ2luc2VydCcsIGNvbF9udW06IGNvbF9udW0sIHBheWxvYWQ6IHBhc3RlIH0pXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIGNvcHlIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjdXQnLCBjdXRIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHBhc3RlSGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjb3B5JywgY29weUhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY3V0JywgY3V0SGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIHBhc3RlSGFuZGxlcilcbiAgICB9XG4gIH0sIFttb2RlLCBjb2xfbnVtLCB0c3RhdGUsIGFtYXJrLCBjbWFyaywgc2hvd19nYWxsZXJ5XSlcblxuICBsZXQgc2N3ID0gY3cgLyBzY2FsZVxuICBsZXQgc2NoID0gY2ggLyBzY2FsZVxuXG4gIGxldCB0aXRsZSA9ICdGYWNlJ1xuICBsZXQgZGVzY3JpcHRpb24gPVxuICAgICdGYWNlIGxldHMgeW91IGVkaXQgYm90aCB0aGUgdGV4dCBhbmQgdGhlIGZvbnQgaXQgaXMgcmVuZGVyZWQgaW4uJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8dGl0bGU+RmFjZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2ZhY2UuY29uc3RyYWludC5zeXN0ZW1zL2ZhY2UucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9mYWNlLmNvbnN0cmFpbnQuc3lzdGVtc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUb3BzdHJpcFxuICAgICAgICBjdz17c2N3fVxuICAgICAgICBjaD17c2NofVxuICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgIGJhc2U9e3VpX3JlZi5jdXJyZW50fVxuICAgICAgICB1aV9sb2FkZWQ9e3VpX2xvYWRlZH1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAga2V5VHJpZ2dlcj17a2V5VHJpZ2dlcn1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IHNjaCAvIDIsIG1hcmdpbkJvdHRvbTogc2NoIC8gMiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGN3LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Y2FudmFzIHdpZHRoPXsnZm9udCcubGVuZ3RoICogc2N3fSBoZWlnaHQ9e3NjaH0gcmVmPXtmbHJlZn0gLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRNb2RlKCdmb250JylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgcmVmPXthcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG1vZGUgPT09ICdmb250JyA/ICdzb2xpZCAxcHggYmxhY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdkaWZmZXJlbmNlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXthbXJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHdpZHRoPXsnY2hhcicubGVuZ3RoICogc2N3fVxuICAgICAgICAgICAgICBoZWlnaHQ9e2NoIC8gc2NhbGV9XG4gICAgICAgICAgICAgIHJlZj17Y2xyZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17Y3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBtb2RlID09PSAnY2hhcicgPyAnc29saWQgMXB4IGJsYWNrJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlZj17Y21yZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBzY2ggKiAyLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHdpZHRoPXsoJ3RleHQgMTAweDEwMCcubGVuZ3RoICogY3cpIC8gc2NhbGV9XG4gICAgICAgICAgICBoZWlnaHQ9e3NjaH1cbiAgICAgICAgICAgIHJlZj17dGxyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIG91dGxpbmU6IG1vZGUgPT09ICd0ZXh0JyA/ICdzb2xpZCAxcHggYmxhY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlZj17dHJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogLWN3IC8gMixcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXt0ZXh0RG93bn1cbiAgICAgICAgICAgIG9uTW91c2VVcD17dGV4dFVwfVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RleHRNb3ZlfVxuICAgICAgICAgICAgcmVmPXttcmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCb3R0b21zdHJpcFxuICAgICAgICBjdz17YmN3fVxuICAgICAgICBjaD17YmNofVxuICAgICAgICBiYXNlPXt1aV9yZWYuY3VycmVudH1cbiAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICB1aV9sb2FkZWQ9e3VpX2xvYWRlZH1cbiAgICAgICAgaGlnaGxpZ2h0PXtoaWdobGlnaHR9XG4gICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgIGtleVRyaWdnZXI9e2tleVRyaWdnZXJ9XG4gICAgICAvPlxuXG4gICAgICB7c2hvd19nYWxsZXJ5ID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDIyMCwyMjAsMjIwLDAuOCknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2VmZWZlZicsXG4gICAgICAgICAgICAgIG91dGxpbmU6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBiY2ggfX0+XG4gICAgICAgICAgICAgIDxUaXRsZWJ1dHRvblxuICAgICAgICAgICAgICAgIGJhc2U9e3VpX3JlZi5jdXJyZW50fVxuICAgICAgICAgICAgICAgIHVpX2xvYWRlZD17dWlfbG9hZGVkfVxuICAgICAgICAgICAgICAgIGtleVRyaWdnZXI9e2tleVRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgbWF4X3dpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aH1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ2ZvbnQgZ2FsbGVyeTonLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0VzY2FwZScsXG4gICAgICAgICAgICAgICAgICAgIGtleV9sYWJlbDogJ0VzYycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnZXhpdCcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtnYWxsZXJ5X2RhdGEubWFwKChmLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBiY3cgKiAyLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBiY2gsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2ZvbnQtbGlicmFyeS8nICsgZn0gLz5cbiAgICAgICAgICAgICAgICA8VGl0bGVidXR0b25cbiAgICAgICAgICAgICAgICAgIGJhc2U9e3VpX3JlZi5jdXJyZW50fVxuICAgICAgICAgICAgICAgICAgdWlfbG9hZGVkPXt1aV9sb2FkZWR9XG4gICAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyPXtrZXlUcmlnZ2VyfVxuICAgICAgICAgICAgICAgICAgbWF4X3dpZHRoPXthY29scyAqIGN3fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBob3RrZXlfbGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgIGtleV9sYWJlbDogaG90a2V5X2xhYmVsc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/faceoff/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0a9dcc2451a0f8310650.hot-update.js.map