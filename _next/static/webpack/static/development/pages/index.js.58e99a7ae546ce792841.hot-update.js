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
var initialt = {
  text: Object(_components_constants__WEBPACK_IMPORTED_MODULE_6__["layoutText"])(20, short_text),
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(20),
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
  }, "html{background:#efefef;line-height:0;}body{padding:0;margin:0;}img{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvZmFjZW9mZi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxMkN5QixBQUc4QixBQUlULEFBSUksVUFITCxJQUlYLEtBUmdCLEFBS2hCLGNBSkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9mYWNlb2ZmL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG4gIGNyZWF0ZVJlZixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGJhc2UsIGJhc2UyLCBsYXlvdXRUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnXG5pbXBvcnQgVG9wc3RyaXAgZnJvbSAnLi4vY29tcG9uZW50cy90b3BzdHJpcCdcbmltcG9ydCBCb3R0b21zdHJpcCBmcm9tICcuLi9jb21wb25lbnRzL2JvdHRvbXN0cmlwJ1xuaW1wb3J0IFRpdGxlYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVidXR0b24nXG5cbmxldCBiY3cgPSA4XG5sZXQgYmNoID0gMTZcblxubGV0IGhvdGtleV9sYWJlbHMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jy5zcGxpdCgnJylcblxuZnVuY3Rpb24gZ2V0TGFzdCh0ZXh0LCBpbmRleCkge1xuICBsZXQgY2hhciA9IHRleHRbaW5kZXhdXG4gIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgbGFzdF9jaGFyID0gdGV4dFtpbmRleCAtIDFdXG4gICAgLy8gaWYgYXQgc3RhcnRcbiAgICBpZiAobGFzdF9jaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXIgPSBbbnVsbCwgMCwgMF1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhciA9IGxhc3RfY2hhci5zbGljZSgpXG4gICAgICBpZiAoY2hhclswXSA9PT0gJ1xcbicpIHtcbiAgICAgICAgY2hhclsxXSA9IDBcbiAgICAgICAgY2hhclsyXSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyWzFdICs9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYXJcbn1cblxuZnVuY3Rpb24gdFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBmdW5jdGlvbiBtYyhuZXd0ZXh0LCBtYXJrKSB7XG4gICAgcmV0dXJuIG1hcmsubWFwKHYgPT4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdiksIG5ld3RleHQubGVuZ3RoKSlcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0Jzoge1xuICAgICAgbGV0IG5ld2tleSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IG5ld19zdHJpbmcgPVxuICAgICAgICB0ZXh0X3N0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCBmaXJzdGkpKSArXG4gICAgICAgIG5ld2tleSArXG4gICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKGxhc3RpKVxuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChhY3Rpb24uY29sX251bSwgbmV3X3N0cmluZylcbiAgICAgIGxldCBuZXdfbWFya2VyID0gW2ZpcnN0aSArIG5ld2tleS5sZW5ndGgsIGZpcnN0aSArIG5ld2tleS5sZW5ndGhdXG4gICAgICByZXR1cm4geyB0ZXh0OiB0ZXh0X2xheW91dCwgbWFya2VyOiBtYyh0ZXh0X2xheW91dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdiYWNrc3BhY2UnOiB7XG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgbmV3X3N0cmluZywgbmV3X21hcmtlclxuICAgICAgaWYgKHN0YXRlLm1hcmtlclswXSA9PT0gc3RhdGUubWFya2VyWzFdKSB7XG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHN0YXRlLm1hcmtlclswXSAtIDEpKSArXG4gICAgICAgICAgdGV4dF9zdHJpbmcuc2xpY2Uoc3RhdGUubWFya2VyWzBdKVxuICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSAtIDEsIHN0YXRlLm1hcmtlclswXSAtIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0aSkpICsgdGV4dF9zdHJpbmcuc2xpY2UobGFzdGkpXG4gICAgICAgIG5ld19tYXJrZXIgPSBbZmlyc3RpLCBmaXJzdGldXG4gICAgICB9XG4gICAgICBsZXQgdGV4dF9sYXlvdXQgPSBsYXlvdXRUZXh0KGFjdGlvbi5jb2xfbnVtLCBuZXdfc3RyaW5nKVxuICAgICAgcmV0dXJuIHsgdGV4dDogdGV4dF9sYXlvdXQsIG1hcmtlcjogbWModGV4dF9sYXlvdXQsIG5ld19tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnaGlnaGxpZ2h0Jzoge1xuICAgICAgbGV0IG5ld19tYXJrZXIgPSBzdGF0ZS5tYXJrZXJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSAhPSAwKSB7XG4gICAgICAgIG5ld19tYXJrZXIgPSBbc3RhdGUubWFya2VyWzBdLCBzdGF0ZS5tYXJrZXJbMV0gKyBhY3Rpb24ucGF5bG9hZFswXV1cbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSAhPSAwKSB7XG4gICAgICAgIGxldCBmaXJzdGkgPSBzdGF0ZS5tYXJrZXJbMV1cbiAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gPCAwKSB7XG4gICAgICAgICAgaWYgKHBvc1syXSA+IDApIHtcbiAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfdXBbcG9zWzFdXVxuICAgICAgICAgICAgaWYgKGNjID09PSB1bmRlZmluZWQpIGNjID0gcm93X3VwW3Jvd191cC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgbmV3X21hcmtlciA9IFtzdGF0ZS5tYXJrZXJbMF0sIGNjWzNdXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICBpZiAocG9zWzJdIDwgc3RhdGUudGV4dFtzdGF0ZS50ZXh0Lmxlbmd0aCAtIDFdWzJdKSB7XG4gICAgICAgICAgICBsZXQgcm93X2Rvd24gPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSArIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICBpZiAoY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjYyA9IHJvd19kb3duW3Jvd19kb3duLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY2NbM10gKz0gMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSwgY2NbM11dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IHRleHQ6IHN0YXRlLnRleHQsIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfbWFya2VyJzoge1xuICAgICAgcmV0dXJuIHsgdGV4dDogc3RhdGUudGV4dCwgbWFya2VyOiBtYyhzdGF0ZS50ZXh0LCBhY3Rpb24ucGF5bG9hZCkgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfZW5kX21hcmtlcic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHN0YXRlLnRleHQsXG4gICAgICAgIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgW3N0YXRlLm1hcmtlclswXSwgYWN0aW9uLnBheWxvYWRdKSxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnbGF5b3V0Jzoge1xuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChcbiAgICAgICAgYWN0aW9uLmNvbF9udW0sXG4gICAgICAgIHN0YXRlLnRleHQubWFwKG8gPT4gb1swXSkuam9pbignJylcbiAgICAgIClcbiAgICAgIHJldHVybiB7IHRleHQ6IHRleHRfbGF5b3V0LCBtYXJrZXI6IG1jKHRleHRfbGF5b3V0LCBzdGF0ZS5tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnbW92ZV9tYXJrZXInOlxuICAgICAge1xuICAgICAgICBsZXQgbmV3X21hcmtlciA9IHN0YXRlLm1hcmtlclxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMF0gIT0gMCkge1xuICAgICAgICAgIG5ld19tYXJrZXIgPSBbXG4gICAgICAgICAgICBzdGF0ZS5tYXJrZXJbMF0gKyBhY3Rpb24ucGF5bG9hZFswXSxcbiAgICAgICAgICAgIHN0YXRlLm1hcmtlclswXSArIGFjdGlvbi5wYXlsb2FkWzBdLFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gIT0gMCkge1xuICAgICAgICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA8IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPiAwKSB7XG4gICAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICAgIGxldCBjYyA9IHJvd191cFtwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSBjYyA9IHJvd191cFtyb3dfdXAubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgbmV3X21hcmtlciA9IFtjY1szXSwgY2NbM11dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPCBzdGF0ZS50ZXh0W3N0YXRlLnRleHQubGVuZ3RoIC0gMV1bMl0pIHtcbiAgICAgICAgICAgICAgbGV0IHJvd19kb3duID0gc3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSBwb3NbMl0gKyAxKVxuICAgICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2MgPSByb3dfZG93bltyb3dfZG93bi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICBjY1szXSArPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19tYXJrZXIgPSBbY2NbM10sIGNjWzNdXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0ZXh0OiBzdGF0ZS50ZXh0LCBtYXJrZXI6IG1jKHN0YXRlLnRleHQsIG5ld19tYXJrZXIpIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1dDogdGhyb3cgbmV3IEVycm9yKClcbiAgfVxufVxuXG5sZXQgc2hvcnRfdGV4dCA9IGBDSEFQVEVSIDEuIExvb21pbmdzLlxuXG5DYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdv4oCUbmV2ZXIgbWluZCBob3cgbG9uZyBwcmVjaXNlbHnigJRoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC5gXG5cbnNob3J0X3RleHQgPSBgWW91IHNlZSBwZW9wbGUsIGFuZCB5b3UncmUgZGlzY29ubmVjdGVkIGZyb20gdGhlbSwgdGhleSBtZWFuIG5vdGhpbmcgdG8geW91LCBidXQgb3RoZXIgdGltZXMgeW91IGNhbiBpbnZlc3QgZXZlcnl0aGluZyBpbiBzb21lb25lIHlvdSBkb24ndCBldmVuIGtub3csIHNpbGVudGx5IGJlbGlldmUgaW4gdGhlbSwgaXQgbWlnaHQgYmUgb24gdGhlIHVuZGVyZ3JvdW5kIG9yIGluIGEgc2hvcCBvciBzb21ldGhpbmcuIFlvdSBob3BlIHBlb3BsZSBhcmUgZG9pbmcgdGhhdCB3aXRoIHlvdSBhcyB3ZWxsLiBTb21lIHBlb3BsZSwgZXZlbiB3aGVuIHRoZXkncmUgcXVpdGUgeW91bmcsIGFuZCB0aGV5J3JlIGluIGRpZmZpY3VsdHksIG1heWJlIHRha2luZyBhIGJhdHRlcmluZyBpbiB0aGVpciBsaWZlLCBidXQgdGhleSBzdGlsbCBoYW5kbGUgdGhlbXNlbHZlcyB3aXRoIGdyYWNlLiBJIGhvcGUgbW9zdCBwZW9wbGUgY2FuIGJlIGxpa2UgdGhhdCwgaG9sZCBpdCB0b2dldGhlciwgSSB3YW50ZWQgdGhpcyBhbGJ1bSB0byBiZSBmb3IgcGVvcGxlIGluIHRoYXQgc2l0dWF0aW9uLmBcblxuc2hvcnRfdGV4dCA9IGBGYWNlIGxldHMgeW91IGVkaXQgYm90aCB0aGUgdGV4dCBhbmQgdGhlIGZvbnQgaXQgaXMgcmVuZGVyZWQgaW4uIEluIHRleHQgbW9kZSB5b3UgY2FuIHR5cGUgYW5kIGVkaXQgdGV4dCBub3JtYWxseS4gUHJlc3MgZXNjYXBlIHRvIGVudGVyIGZvbnQgbW9kZSwgd2hlcmUgeW91IGNhbiBzZWxlY3QgYSBjaGFyYWN0ZXIgdG8gZWRpdC4gQW55IGNoYW5nZXMgdG8gYSBjaGFyYWN0ZXIgYXJlIHZpc2libGUgaW1tZWRpYXRlbHkuXG5cbkFkZGl0aW9uYWwgY29udHJvbHMgYXJlIHNob3duIGF0IHRoZSBib3R0b20uIFlvdSBjYW4gY2hhbmdlIHRoZSB0ZXh0IGFyZWEgYW5kIHNhdmUgaXQgYXMgYW4gaW1hZ2UgaW4gdGV4dCBtb2RlLiBJbiBmb250IG1vZGUsIHlvdSBjYW4gc2F2ZSB0aGUgZm9udCwgbG9hZCBhIGZvbnQgKGZvbnRzIGFyZSBqdXN0IGEgc3ByaXRlIHNoZWV0IGltYWdlKSwgb3IgY2hvb3NlIGEgZm9udCBmcm9tIHRoZSBmb250IGdhbGxlcnkuXG5cblRoZSBiYXNlIGZvbnQgdXNlZCBpcyBhIHN1YnNldCBvZiBHTlUgVW5pZm9udC5gXG5cbmxldCBpbml0aWFsdCA9IHtcbiAgdGV4dDogbGF5b3V0VGV4dCgyMCwgc2hvcnRfdGV4dCksXG4gIG1hcmtlcjogW3Nob3J0X3RleHQubGVuZ3RoLCBzaG9ydF90ZXh0Lmxlbmd0aF0sXG59XG5cbmxldCBhY2VsX251bSA9IDk1XG5sZXQgYWNvbHMgPSAxMlxubGV0IGFyb3dzID0gTWF0aC5jZWlsKGFjZWxfbnVtIC8gYWNvbHMpXG5cbmxldCBtYWduaWZ5ID0gOFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ3RleHQnKVxuXG4gIGxldCBtcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0cmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGFyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGFtcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNtcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IFtjYW52YXNfbG9hZGVkLCBzZXRDYW52YXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBbdWlfbG9hZGVkLCBzZXRVSUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBsZXQgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgyKVxuICBsZXQgW2N3LCBzZXRDd10gPSB1c2VTdGF0ZSg4ICogMilcbiAgbGV0IFtjaCwgc2V0Q2hdID0gdXNlU3RhdGUoMTYgKiAyKVxuICBsZXQgW2NvbF9udW0sIHNldENvbE51bV0gPSB1c2VTdGF0ZSgyMClcbiAgbGV0IFtyb3dfbnVtLCBzZXRSb3dOdW1dID0gdXNlU3RhdGUoMTQpXG5cbiAgbGV0IFthbWFyaywgc2V0QW1hcmtdID0gdXNlU3RhdGUoMClcblxuICBsZXQgW2NtYXJrLCBzZXRDbWFya10gPSB1c2VTdGF0ZShbMCwgMF0pXG5cbiAgbGV0IGJhc2VfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB1aV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcblxuICBsZXQgZmxyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNscmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0bHJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBbdGV4dENsaWNrZWQsIHNldFRleHRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGxldCBbdHN0YXRlLCB0ZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0UmVkdWNlciwgaW5pdGlhbHQpXG5cbiAgbGV0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKDApXG5cbiAgbGV0IFtoaWdobGlnaHQsIHNldEhpZ2hsaWdodF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGxldCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoYmFzZTIpXG5cbiAgbGV0IFtnYWxsZXJ5X2RhdGEsIHNldEdhbGxlcnlEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbc2hvd19nYWxsZXJ5LCBzZXRTaG93R2FsbGVyeV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvbGlicmFyeS5qc29uJylcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgc2V0R2FsbGVyeURhdGEoanNvbilcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYmFzZSA9IGJhc2VfcmVmLmN1cnJlbnRcbiAgICBsZXQgYmFzZXggPSBiYXNlLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgYmFzZV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGJhc2VfaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGJhc2V4LmNsZWFyUmVjdCgwLCAwLCBiYXNlLndpZHRoLCBiYXNlLmhlaWdodClcbiAgICAgIGJhc2V4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIGJhc2V4LmZpbGxSZWN0KDAsIDAsIGJhc2Uud2lkdGgsIGJhc2UuaGVpZ2h0KVxuICAgICAgYmFzZXguZHJhd0ltYWdlKGJhc2VfaW1nLCAwLCAwLCBiYXNlLndpZHRoLCBiYXNlLmhlaWdodClcbiAgICAgIGRyYXdBbHBoYWJldCgpXG4gICAgICBkcmF3VGV4dCgpXG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICAgIGJhc2VfaW1nLnNyYyA9IHNyY1xuICAgIHNldExvYWRlZChzcmMpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRTaXplcygpIHtcbiAgICAvLyB0ZXh0XG4gICAgbGV0IHQgPSB0cmVmLmN1cnJlbnRcbiAgICB0LndpZHRoID0gY3cgKiAoY29sX251bSArIDIpXG4gICAgdC5oZWlnaHQgPSBjaCAqIChyb3dfbnVtICsgMSlcblxuICAgIC8vIHRleHQgbWFya2VyXG4gICAgbGV0IG0gPSBtcmVmLmN1cnJlbnRcbiAgICBtLndpZHRoID0gY3cgKiAoY29sX251bSArIDMpXG4gICAgbS5oZWlnaHQgPSBjaCAqIChyb3dfbnVtICsgMSlcblxuICAgIC8vIGFscGhhYmV0XG4gICAgbGV0IGEgPSBhcmVmLmN1cnJlbnRcbiAgICBhLndpZHRoID0gY3cgKiBhY29sc1xuICAgIGEuaGVpZ2h0ID0gY2ggKiBhcm93c1xuXG4gICAgLy8gYWxwaGFiZXQgbWFya2VyXG4gICAgbGV0IGFtID0gYW1yZWYuY3VycmVudFxuICAgIGFtLndpZHRoID0gY3cgKiBhY29sc1xuICAgIGFtLmhlaWdodCA9IGNoICogYXJvd3NcblxuICAgIC8vIGNoYXJhY3RlclxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgYy53aWR0aCA9IGN3ICogbWFnbmlmeVxuICAgIGMuaGVpZ2h0ID0gY2ggKiBtYWduaWZ5XG5cbiAgICAvLyBjaGFyYWN0ZXIgbWFya2VyXG4gICAgbGV0IGNtID0gY21yZWYuY3VycmVudFxuICAgIGNtLndpZHRoID0gYy53aWR0aFxuICAgIGNtLmhlaWdodCA9IGMuaGVpZ2h0XG4gIH1cblxuICAvLyBpbml0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKGN3ID09PSA4ICYmIGNoID09PSAxNiAmJiBzY2FsZSA9PT0gMSkgfHxcbiAgICAgIChjdyA9PT0gMTYgJiYgY2ggPT09IDMyICYmIHNjYWxlID09PSAyKVxuICAgICkge1xuICAgICAgc2V0U2l6ZXMoKVxuXG4gICAgICBsZXQgJGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgJGJhc2Uud2lkdGggPSBhY29scyAqIChjdyAvIHNjYWxlKVxuICAgICAgJGJhc2UuaGVpZ2h0ID0gYXJvd3MgKiAoY2ggLyBzY2FsZSlcbiAgICAgIGxldCAkYmFzZXggPSAkYmFzZS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAkYmFzZXguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgIGxldCBiYXNlX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICBiYXNlX2ltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICRiYXNleC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgICRiYXNleC5maWxsUmVjdCgwLCAwLCAkYmFzZS53aWR0aCwgJGJhc2UuaGVpZ2h0KVxuICAgICAgICAkYmFzZXguZHJhd0ltYWdlKGJhc2VfaW1nLCAwLCAwLCAkYmFzZS53aWR0aCwgJGJhc2UuaGVpZ2h0KVxuICAgICAgICBiYXNlX3JlZi5jdXJyZW50ID0gJGJhc2VcblxuICAgICAgICBzZXRDYW52YXNMb2FkZWQodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGJhc2VfaW1nLnNyYyA9IGxvYWRlZFxuXG4gICAgICBsZXQgdWlfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgIHVpX2ltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCAkdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICAkdWkud2lkdGggPSAoYWNvbHMgKiBjdykgLyBzY2FsZVxuICAgICAgICAkdWkuaGVpZ2h0ID0gKGFyb3dzICogY2gpIC8gc2NhbGVcbiAgICAgICAgbGV0ICR1aXggPSAkdWkuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAkdWl4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgICR1aXguZHJhd0ltYWdlKHVpX2ltZywgMCwgMCwgJHVpLndpZHRoLCAkdWkuaGVpZ2h0KVxuICAgICAgICB1aV9yZWYuY3VycmVudCA9ICR1aVxuXG4gICAgICAgIHNldFVJTG9hZGVkKHRydWUpXG4gICAgICB9XG4gICAgICB1aV9pbWcuc3JjID0gYmFzZTJcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhbnZhc19sb2FkZWQpIHtcbiAgICAgIHNldFNpemVzKClcbiAgICAgIGRyYXdNYXJrZXIoKVxuICAgICAgZHJhd1RleHQoKVxuICAgICAgZHJhd0FscGhhYmV0KClcbiAgICAgIGRyYXdBbHBoYWJldE1hcmtlcigpXG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICB9LCBbY3csIGNoLCBzY2FsZSwgY2FudmFzX2xvYWRlZF0pXG5cbiAgLy8gaW5pdCBhZnRlciBjYW52YXMgbG9hZGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhbnZhc19sb2FkZWQpIHtcbiAgICAgIGRyYXdNYXJrZXIoKVxuICAgICAgZHJhd1RleHQoKVxuICAgICAgZHJhd0FscGhhYmV0KClcbiAgICAgIGRyYXdBbHBoYWJldE1hcmtlcigpXG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICB9LCBbY2FudmFzX2xvYWRlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FudmFzX2xvYWRlZCkge1xuICAgICAgZHJhd01hcmtlcigpXG4gICAgICBkcmF3QWxwaGFiZXRNYXJrZXIoKVxuICAgIH1cbiAgfSwgW21vZGUsIHRzdGF0ZS50ZXh0LCB0c3RhdGUubWFya2VyLCBhbWFyaywgY29sX251bSwgaGlnaGxpZ2h0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBkcmF3Q2hhcigpXG4gICAgfVxuICB9LCBbbW9kZSwgYW1hcmssIGNtYXJrXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBkcmF3VGV4dCgpXG4gICAgfVxuICB9LCBbdHN0YXRlLnRleHQsIGNvbF9udW1dKVxuXG4gIGZ1bmN0aW9uIGRyYXdBbHBoYWJldE1hcmtlcigpIHtcbiAgICBsZXQgYW0gPSBhbXJlZi5jdXJyZW50XG4gICAgbGV0IGFteCA9IGFtLmdldENvbnRleHQoJzJkJylcblxuICAgIGFteC5jbGVhclJlY3QoMCwgMCwgYW0ud2lkdGgsIGFtLmhlaWdodClcblxuICAgIC8vIGFteC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgLy8gYW14LmZpbGxSZWN0KDAsIDAsIGFtLndpZHRoLCBhbS5oZWlnaHQpXG5cbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgW3gsIHldID0gZ2V0WFkoYW1hcmspXG4gICAgYW14LmZpbGxTdHlsZSA9ICcjZmZmJ1xuICAgIGFteC5saW5lV2lkdGggPSBzY2FsZVxuXG4gICAgbGV0IGZsID0gZmxyZWYuY3VycmVudFxuICAgIGZsLndpZHRoID0gJ2ZvbnQ6LScubGVuZ3RoICogYmN3XG4gICAgbGV0IGZseCA9IGZsLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgZmxfY29udGVudCA9ICdmb250ICdcbiAgICBmbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICAgIGZseC5maWxsU3R5bGUgPSAnI2VmZWZlZidcbiAgICBmbHguZmlsbFJlY3QoMCwgMCwgZmwud2lkdGgsIGZsLmhlaWdodClcbiAgICBmbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlbidcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsX2NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBmbF9jb250ZW50LmNoYXJDb2RlQXQoaSkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IFtzcHJpdGVfeCwgc3ByaXRlX3ldID0gZ2V0WFkoa2V5KVxuICAgICAgZmx4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogKGN3IC8gc2NhbGUpLFxuICAgICAgICBzcHJpdGVfeSAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZSxcbiAgICAgICAgaSAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgMCAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAnZm9udCcpIHtcbiAgICAgIGFteC5maWxsUmVjdCh4ICogY3csIHkgKiBjaCwgY3csIGNoKVxuICAgICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgICAgfVxuICAgICAgbGV0IGtleSA9ICc6Jy5jaGFyQ29kZUF0KDApIC0gMzJcbiAgICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGtleSlcbiAgICAgIGZseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICAoZmxfY29udGVudC5sZW5ndGggLSAxKSAqIGJjdyxcbiAgICAgICAgMCAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2hcbiAgICAgIClcbiAgICAgIGZseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICB4ICogYmN3LFxuICAgICAgICB5ICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaCxcbiAgICAgICAgZmxfY29udGVudC5sZW5ndGggKiBiY3csXG4gICAgICAgIDAgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0FscGhhYmV0KCkge1xuICAgIGxldCBhID0gYXJlZi5jdXJyZW50XG4gICAgbGV0IGF4ID0gYS5nZXRDb250ZXh0KCcyZCcpXG4gICAgYXguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcblxuICAgIGF4LmNsZWFyUmVjdCgwLCAwLCBhLndpZHRoLCBhLmhlaWdodClcbiAgICBheC5kcmF3SW1hZ2UoYmFzZV9yZWYuY3VycmVudCwgMCwgMCwgYS53aWR0aCwgYS5oZWlnaHQpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Q2hhcigpIHtcbiAgICBsZXQgY20gPSBjbXJlZi5jdXJyZW50XG4gICAgbGV0IGNteCA9IGNtLmdldENvbnRleHQoJzJkJylcblxuICAgIGNteC5jbGVhclJlY3QoMCwgMCwgY20ud2lkdGgsIGNtLmhlaWdodClcbiAgICBpZiAobW9kZSA9PT0gJ2NoYXInKSB7XG4gICAgICBjbXguZmlsbFN0eWxlID0gJ21hZ2VudGEnXG4gICAgICBjbXguZmlsbFJlY3QoXG4gICAgICAgIGNtYXJrWzBdICogbWFnbmlmeSxcbiAgICAgICAgY21hcmtbMV0gKiBtYWduaWZ5LFxuICAgICAgICBtYWduaWZ5ICogc2NhbGUsXG4gICAgICAgIG1hZ25pZnkgKiBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjeC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgY3guZmlsbFJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG4gICAgY3guaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcblxuICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgIHJldHVybiBbaSAlIGFjb2xzLCBNYXRoLmZsb29yKGkgLyBhY29scyldXG4gICAgfVxuICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGFtYXJrKVxuICAgIGN4LmRyYXdJbWFnZShcbiAgICAgIGJhc2VfcmVmLmN1cnJlbnQsXG4gICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgIHNwcml0ZV95ICogYmNoLFxuICAgICAgYmN3LFxuICAgICAgYmNoLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjdyAqIG1hZ25pZnksXG4gICAgICBjaCAqIG1hZ25pZnlcbiAgICApXG5cbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgY2wgPSBjbHJlZi5jdXJyZW50XG4gICAgY2wud2lkdGggPSAnY2hhcjp0Jy5sZW5ndGggKiBiY3dcbiAgICBsZXQgY2x4ID0gY2wuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBjbF9jb250ZW50ID0gJ2NoYXIgJ1xuICAgIGNseC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gICAgY2x4LmZpbGxTdHlsZSA9ICcjZWZlZmVmJ1xuICAgIGNseC5maWxsUmVjdCgwLCAwLCBjbC53aWR0aCwgY2wuaGVpZ2h0KVxuICAgIGNseC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGFya2VuJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xfY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGNsX2NvbnRlbnQuY2hhckNvZGVBdChpKSAtIDMyXG4gICAgICBpZiAoa2V5ID09PSAtMjIpIGtleSA9IDk0XG4gICAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShrZXkpXG4gICAgICBjbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIHNwcml0ZV95ICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlLFxuICAgICAgICBpICogKGN3IC8gc2NhbGUpLFxuICAgICAgICAwICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09ICdjaGFyJykge1xuICAgICAgY3guc3Ryb2tlU3R5bGUgPSAnI2RkZCdcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgY2g7IHIgKz0gc2NhbGUpIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjdzsgYyArPSBzY2FsZSkge1xuICAgICAgICAgIGN4LnN0cm9rZVJlY3QoXG4gICAgICAgICAgICBjICogbWFnbmlmeSxcbiAgICAgICAgICAgIHIgKiBtYWduaWZ5LFxuICAgICAgICAgICAgbWFnbmlmeSAqIHNjYWxlLFxuICAgICAgICAgICAgbWFnbmlmeSAqIHNjYWxlXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICAgIH1cbiAgICAgIGxldCBrZXkgPSAnOicuY2hhckNvZGVBdCgwKSAtIDMyXG4gICAgICBsZXQgW2FfeCwgYV95XSA9IGdldFhZKGtleSlcbiAgICAgIGNseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBhX3ggKiBiY3csXG4gICAgICAgIGFfeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIChjbF9jb250ZW50Lmxlbmd0aCAtIDEpICogYmN3LFxuICAgICAgICAwICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaFxuICAgICAgKVxuICAgICAgY2x4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogYmN3LFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIGNsX2NvbnRlbnQubGVuZ3RoICogYmN3LFxuICAgICAgICAwICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdNYXJrZXIoKSB7XG4gICAgbGV0IG0gPSBtcmVmLmN1cnJlbnRcblxuICAgIGxldCBteCA9IG0uZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgbGV0IGNoYXIgPSBnZXRMYXN0KFxuICAgICAgdHN0YXRlLnRleHQsXG4gICAgICBNYXRoLm1heCguLi50c3RhdGUubWFya2VyLCB0c3RhdGUudGV4dC5sZW5ndGggLSAxKVxuICAgIClcblxuICAgIG0ud2lkdGggPSBjdyAqIChjb2xfbnVtICsgMylcbiAgICBtLmhlaWdodCA9IGNoYXJbMl0gKiBjaCArIGNoICsgY2hcbiAgICBteC5jbGVhclJlY3QoMCwgMCwgbS53aWR0aCwgbS5oZWlnaHQpXG5cbiAgICBpZiAobW9kZSAhPSAndGV4dCcgJiYgaGlnaGxpZ2h0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRzdGF0ZS50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGFyID0gdHN0YXRlLnRleHRbaV1cbiAgICAgICAgbGV0IGFrZXlcbiAgICAgICAgaWYgKGFtYXJrID09PSA5NCkge1xuICAgICAgICAgIGFrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMyIC0gMjIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYW1hcmsgKyAzMilcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhclswXSA9PT0gYWtleSkge1xuICAgICAgICAgIG14LmZpbGxTdHlsZSA9ICcjMjIyJ1xuICAgICAgICAgIG14LmZpbGxSZWN0KGNoYXJbMV0gKiBjdyArIGN3ICsgY3cgLyAyLCBjaGFyWzJdICogY2ggKyBjaCAvIDIsIGN3LCBjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAndGV4dCcpIHtcbiAgICAgIGZ1bmN0aW9uIGdldFh5KG1hcmspIHtcbiAgICAgICAgbGV0IGNoYXIgPSBnZXRMYXN0KHRzdGF0ZS50ZXh0LCBtYXJrKVxuICAgICAgICBsZXQgeCA9IGNoYXJbMV1cbiAgICAgICAgbGV0IHkgPSBjaGFyWzJdXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICAgIH1cblxuICAgICAgaWYgKHRzdGF0ZS5tYXJrZXJbMF0gPT09IHRzdGF0ZS5tYXJrZXJbMV0pIHtcbiAgICAgICAgLy8gY3Vyc29yXG4gICAgICAgIGxldCBbeCwgeV0gPSBnZXRYeSh0c3RhdGUubWFya2VyWzBdKVxuICAgICAgICBteC5maWxsU3R5bGUgPSAnZ3JlZW4nXG4gICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgIHggKiBjdyArIGN3ICsgY3cgLyAyIC0gc2NhbGUsXG4gICAgICAgICAgeSAqIGNoICsgY2ggLyAyLFxuICAgICAgICAgIHNjYWxlICogMixcbiAgICAgICAgICBjaFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoaWdobGlnaHRcbiAgICAgICAgbGV0IGZpcnN0aSA9IE1hdGgubWluKC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgICAgIGxldCBsYXN0aSA9IE1hdGgubWF4KC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgICAgIGxldCBbeDAsIHkwXSA9IGdldFh5KGZpcnN0aSlcbiAgICAgICAgbGV0IFt4MSwgeTFdID0gZ2V0WHkobGFzdGkpXG4gICAgICAgIG14LmZpbGxTdHlsZSA9ICdncmVlbidcbiAgICAgICAgLy8gc2FtZSByb3dcbiAgICAgICAgaWYgKHkwID09PSB5MSkge1xuICAgICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgICAgeDAgKiBjdyArIGN3ICsgY3cgLyAyLFxuICAgICAgICAgICAgeTAgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICAgICh4MSAtIHgwKSAqIGN3LFxuICAgICAgICAgICAgY2hcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZmlyc3Rfcm93XG4gICAgICAgICAgbGV0IGZyb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSB5MClcbiAgICAgICAgICBsZXQgbGFzdF9mcm93ID0gZnJvd1tmcm93Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgbXguZmlsbFJlY3QoXG4gICAgICAgICAgICB4MCAqIGN3ICsgY3cgKyBjdyAvIDIsXG4gICAgICAgICAgICB5MCAqIGNoICsgY2ggLyAyLFxuICAgICAgICAgICAgKGxhc3RfZnJvd1sxXSAtIHgwICsgMSkgKiBjdyxcbiAgICAgICAgICAgIGNoXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKHkxIC0geTAgPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0geTAgKyAxOyBpIDwgeTE7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKG8gPT4gb1syXSA9PT0gaSlcbiAgICAgICAgICAgICAgbXguZmlsbFJlY3QoXG4gICAgICAgICAgICAgICAgMCAqIGN3ICsgY3cgKyBjdyAvIDIsXG4gICAgICAgICAgICAgICAgaSAqIGNoICsgY2ggLyAyLFxuICAgICAgICAgICAgICAgIChyb3dbcm93Lmxlbmd0aCAtIDFdWzFdICsgMSkgKiBjdyxcbiAgICAgICAgICAgICAgICBjaFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbGFzdF9yb3dcbiAgICAgICAgICBsZXQgbHJvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHkxKVxuICAgICAgICAgIGxldCBsYXN0X2xyb3cgPSBscm93W2xyb3cubGVuZ3RoIC0gMV1cbiAgICAgICAgICBteC5maWxsUmVjdCgwICogY3cgKyBjdyArIGN3IC8gMiwgeTEgKiBjaCArIGNoIC8gMiwgeDEgKiBjdywgY2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3VGV4dCgpIHtcbiAgICBsZXQgdCA9IHRyZWYuY3VycmVudFxuICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCB0ZXh0ID0gdHN0YXRlLnRleHRcblxuICAgIGxldCBjaGFyID0gZ2V0TGFzdChcbiAgICAgIHRzdGF0ZS50ZXh0LFxuICAgICAgTWF0aC5tYXgoTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlciksIHRzdGF0ZS50ZXh0Lmxlbmd0aClcbiAgICApXG4gICAgdC53aWR0aCA9IGN3ICogKGNvbF9udW0gKyAyKVxuICAgIHQuaGVpZ2h0ID0gY2hhclsyXSAqIGNoICsgY2ggKyBjaFxuXG4gICAgLy8gdGV4dCBsYWJlbFxuICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgIHJldHVybiBbaSAlIGFjb2xzLCBNYXRoLmZsb29yKGkgLyBhY29scyldXG4gICAgfVxuICAgIGxldCB0bCA9IHRscmVmLmN1cnJlbnRcbiAgICBsZXQgdGx4ID0gdGwuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRseC5jbGVhclJlY3QoMCwgMCwgdGwud2lkdGgsIHRsLmhlaWdodClcbiAgICB0bHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICAgIHRseC5maWxsU3R5bGUgPSAnI2VmZWZlZidcbiAgICB0bHguZmlsbFJlY3QoMCwgMCwgdGwud2lkdGgsIHRsLmhlaWdodClcbiAgICB0bHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlbidcbiAgICBsZXQgdGxfY29udGVudCA9ICd0ZXh0OicgKyBjb2xfbnVtICsgJ3gnICsgKGNoYXJbMl0gKyAxKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGxfY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHRsX2NvbnRlbnQuY2hhckNvZGVBdChpKSAtIDMyXG4gICAgICBpZiAoa2V5ID09PSAtMjIpIGtleSA9IDk0XG4gICAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShrZXkpXG4gICAgICB0bHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIHNwcml0ZV95ICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlLFxuICAgICAgICBpICogKGN3IC8gc2NhbGUpLFxuICAgICAgICAwICogKGNoIC8gc2NhbGUpLFxuICAgICAgICBjdyAvIHNjYWxlLFxuICAgICAgICBjaCAvIHNjYWxlXG4gICAgICApXG4gICAgfVxuXG4gICAgdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIHR4LmZpbGxSZWN0KDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KVxuICAgIHR4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGV4dFtpXVxuICAgICAgbGV0IHggPSBpdGVtWzFdXG4gICAgICBsZXQgeSA9IGl0ZW1bMl1cbiAgICAgIGxldCBrZXkgPSBpdGVtWzBdLmNoYXJDb2RlQXQoMCkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IHNwcml0ZV94ID0ga2V5ICUgYWNvbHNcbiAgICAgIGxldCBzcHJpdGVfeSA9IE1hdGguZmxvb3Ioa2V5IC8gYWNvbHMpXG4gICAgICB0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGJhc2VfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogYmN3LFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIHggKiBjdyArIGN3LFxuICAgICAgICB5ICogY2ggKyBjaCAvIDIsXG4gICAgICAgIGN3LFxuICAgICAgICBjaFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleVRyaWdnZXIoa2V5c3RyaW5nKSB7XG4gICAgbGV0IHNoaWZ0ID0gZmFsc2VcbiAgICBsZXQgY3RybCA9IGZhbHNlXG4gICAgbGV0IG1ldGEgPSBmYWxzZVxuXG4gICAgaWYgKGtleXN0cmluZy5pbmRleE9mKCdjdHJsJykgPiAtMSkge1xuICAgICAgY3RybCA9IHRydWVcbiAgICAgIGtleXN0cmluZyA9IGtleXN0cmluZy5zcGxpdCgnKycpWzFdXG4gICAgfVxuXG4gICAga21fcmVmLmN1cnJlbnRba2V5c3RyaW5nXSA9IHRydWVcbiAgICBrZXlBY3Rpb24oa2V5c3RyaW5nLCB7XG4gICAgICBzaGlmdEtleTogc2hpZnQsXG4gICAgICBjdHJsS2V5OiBjdHJsLFxuICAgICAgbWV0YTogbWV0YSxcbiAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHt9LFxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBrbV9yZWYuY3VycmVudFtrZXlzdHJpbmddID0gZmFsc2VcbiAgICB9LCAwKVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZXZlbnQpIHtcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuXG4gICAgbGV0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXlcbiAgICBsZXQgY3RybCA9IGV2ZW50LmN0cmxLZXlcbiAgICBsZXQgbWV0YSA9IGV2ZW50Lm1ldGFLZXlcblxuICAgIC8vIHNob3cgZ2FsbGVyeSBvdmVycmlkZXMgZXZlcnl0aGluZyBlbHNlXG4gICAgaWYgKHNob3dfZ2FsbGVyeSkge1xuICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgc2V0U2hvd0dhbGxlcnkocHJldiA9PiAhcHJldilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG90a2V5X2xhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjaGVja19rZXkgPSBob3RrZXlfbGFiZWxzW2ldXG4gICAgICAgICAgaWYgKGtleSA9PT0gY2hlY2tfa2V5KSB7XG4gICAgICAgICAgICBsZXQgc3JjID0gZ2FsbGVyeV9kYXRhW2hvdGtleV9sYWJlbHMuaW5kZXhPZihrZXkpXVxuICAgICAgICAgICAgc2V0U2hvd0dhbGxlcnkoZmFsc2UpXG4gICAgICAgICAgICBsb2FkSW1hZ2UoJy9mb250LWxpYnJhcnkvJyArIHNyYylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHNpemUgY2hhbmdlIGNhbiBiZSBkb25lIGluIGFueSBtb2RlXG4gICAgaWYgKGN0cmwgJiYga2V5ID09IDEpIHtcbiAgICAgIHNldFNjYWxlKDEpXG4gICAgICBzZXRDdyg4KVxuICAgICAgc2V0Q2goMTYpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PSAyKSB7XG4gICAgICBzZXRTY2FsZSgyKVxuICAgICAgc2V0Q3coMTYpXG4gICAgICBzZXRDaCgzMilcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09ICd2Jykge1xuICAgICAgbG9jYXRpb24uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vY29uc3RyYWludC1zeXN0ZW1zL2ZhY2UnXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09ICd0ZXh0Jykge1xuICAgICAgaWYgKGN0cmwgJiYga2V5ID09PSAnYScpIHtcbiAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ3NldF9tYXJrZXInLCBwYXlsb2FkOiBbMCwgdHN0YXRlLnRleHQubGVuZ3RoXSB9KVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ2gnKSB7XG4gICAgICAgIGxldCBuZXdfY29sID0gY29sX251bSAtIDFcbiAgICAgICAgc2V0Q29sTnVtKG5ld19jb2wpXG4gICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdsYXlvdXQnLCBjb2xfbnVtOiBuZXdfY29sIH0pXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdsJykge1xuICAgICAgICBsZXQgbmV3X2NvbCA9IGNvbF9udW0gKyAxXG4gICAgICAgIHNldENvbE51bShuZXdfY29sKVxuICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbGF5b3V0JywgY29sX251bTogbmV3X2NvbCB9KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAncycpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgICBsZXQgdCA9IHRyZWYuY3VycmVudFxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHRlbXAud2lkdGggPSB0LndpZHRoXG4gICAgICAgIHRlbXAuaGVpZ2h0ID0gdC5oZWlnaHRcblxuICAgICAgICBsZXQgdGVtcHggPSB0ZW1wLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGVtcHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgICAgICB0ZW1weC5maWxsUmVjdCgwLCAwLCB0LndpZHRoLCB0LmhlaWdodClcbiAgICAgICAgdGVtcHguZHJhd0ltYWdlKHQsIDAsIDApXG5cbiAgICAgICAgdGVtcC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAgICdmYWNlLXRleHQtJyArXG4gICAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAgICcucG5nJ1xuICAgICAgICAgIClcblxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdHJsICYmIGtleSA9PSAnbScpIHtcbiAgICAgICAgc2V0SGlnaGxpZ2h0KHByZXYgPT4gIXByZXYpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdnJykge1xuICAgICAgICBzZXRTaG93R2FsbGVyeShwcmV2ID0+ICFwcmV2KVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnZCcpIHtcbiAgICAgICAgLy8gZm9udCBkb3dubG9hZFxuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICAgIC8vIGFsd2F5cyBzYXZlIGZvbnQgYXQgMnhcblxuICAgICAgICBsZXQgYSA9IGFyZWYuY3VycmVudFxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHRlbXAud2lkdGggPSBiY3cgKiBhY29scyAqIDJcbiAgICAgICAgdGVtcC5oZWlnaHQgPSBiY2ggKiBhcm93cyAqIDJcblxuICAgICAgICBsZXQgdGVtcHggPSB0ZW1wLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGVtcHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgICAgdGVtcHguZHJhd0ltYWdlKGEsIDAsIDAsIHRlbXAud2lkdGgsIHRlbXAuaGVpZ2h0KVxuXG4gICAgICAgIHRlbXAudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgICAnZmFjZS1mb250LScgK1xuICAgICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgICAnLnBuZydcbiAgICAgICAgICApXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnZicpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcbiAgICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNoaWZ0ID0gdHJ1ZVxuICAgIGlmICghY3RybCAmJiAhbWV0YSkge1xuICAgICAgaWYgKG1vZGUgPT09ICd0ZXh0Jykge1xuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIHNldE1vZGUoJ2ZvbnQnKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnYmFja3NwYWNlJywgY29sX251bTogY29sX251bSB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbLTEsIDBdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFstMSwgMF0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbKzEsIDBdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFsrMSwgMF0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdoaWdobGlnaHQnLCBwYXlsb2FkOiBbMCwgLTFdIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdtb3ZlX21hcmtlcicsIHBheWxvYWQ6IFswLCAtMV0gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2hpZ2hsaWdodCcsIHBheWxvYWQ6IFswLCArMV0gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ21vdmVfbWFya2VyJywgcGF5bG9hZDogWzAsICsxXSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2luc2VydCcsIGNvbF9udW06IGNvbF9udW0sIHBheWxvYWQ6IGtleSB9KVxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJyAnKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdpbnNlcnQnLCBjb2xfbnVtOiBjb2xfbnVtLCBwYXlsb2FkOiAnXFxuJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnZm9udCcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgIHNldE1vZGUoJ2NoYXInKVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3QnKSB7XG4gICAgICAgICAgc2V0TW9kZSgndGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttWydsJ10pIHtcbiAgICAgICAgICBsZXQgbmV3X2FtYXJrID0gYW1hcmsgKyAxXG4gICAgICAgICAgaWYgKG5ld19hbWFyayA+IGFjZWxfbnVtIC0gMSkgbmV3X2FtYXJrID0gYWNlbF9udW0gLSAxXG4gICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrKVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbVsnaCddKSB7XG4gICAgICAgICAgbGV0IG5ld19hbWFyayA9IGFtYXJrIC0gMVxuICAgICAgICAgIGlmIChuZXdfYW1hcmsgPCAwKSBuZXdfYW1hcmsgPSAwXG4gICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrKVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbVsnaiddIHx8IGttWydrJ10pIHtcbiAgICAgICAgICBsZXQgbGF5b3V0ID0gWy4uLkFycmF5KGFjZWxfbnVtKV0ubWFwKChuLCBpKSA9PiBbXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaSAlIGFjb2xzLFxuICAgICAgICAgICAgTWF0aC5mbG9vcihpIC8gYWNvbHMpLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgbGV0IGNlbGwgPSBsYXlvdXRbYW1hcmtdXG4gICAgICAgICAgaWYgKGttWydrJ10pIHtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gY2VsbFsyXSAtIDFcbiAgICAgICAgICAgIGlmIChuZXh0ID49IDApIHtcbiAgICAgICAgICAgICAgbGV0IHVwX3JvdyA9IGxheW91dC5maWx0ZXIoYyA9PiBjWzJdID09PSBuZXh0KVxuICAgICAgICAgICAgICBsZXQgbmV3X2FtYXJrID0gdXBfcm93W2NlbGxbMV1dXG4gICAgICAgICAgICAgIGlmIChuZXdfYW1hcmsgPT09IHVuZGVmaW5lZCkgdXBfcm93W3VwX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICBzZXRBbWFyayhuZXdfYW1hcmtbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrbVsnaiddKSB7XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGNlbGxbMl0gKyAxXG4gICAgICAgICAgICBpZiAobmV4dCA8PSBsYXlvdXRbbGF5b3V0Lmxlbmd0aCAtIDFdWzJdKSB7XG4gICAgICAgICAgICAgIGxldCBkbl9yb3cgPSBsYXlvdXQuZmlsdGVyKGMgPT4gY1syXSA9PT0gbmV4dClcbiAgICAgICAgICAgICAgbGV0IG5ld19hbWFyayA9IGRuX3Jvd1tjZWxsWzFdXVxuICAgICAgICAgICAgICBpZiAobmV3X2FtYXJrID09PSB1bmRlZmluZWQpIG5ld19hbWFyayA9IGRuX3Jvd1tkbl9yb3cubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgc2V0QW1hcmsobmV3X2FtYXJrWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2hhcicpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBzZXRNb2RlKCdmb250JylcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW92ZW1lbnQgPSBbMCwgMF1cbiAgICAgICAgaWYgKGttLmopIHtcbiAgICAgICAgICBtb3ZlbWVudFsxXSArPSAxICogc2NhbGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa20uaykge1xuICAgICAgICAgIG1vdmVtZW50WzFdIC09IDEgKiBzY2FsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbS5oKSB7XG4gICAgICAgICAgbW92ZW1lbnRbMF0gLT0gMSAqIHNjYWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttLmwpIHtcbiAgICAgICAgICBtb3ZlbWVudFswXSArPSAxICogc2NhbGVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb3ZlZCA9IFtjbWFya1swXSArIG1vdmVtZW50WzBdLCBjbWFya1sxXSArIG1vdmVtZW50WzFdXVxuICAgICAgICBpZiAobW92ZWRbMF0gPCAwKSBtb3ZlZFswXSA9IDBcbiAgICAgICAgaWYgKG1vdmVkWzBdID4gY3cgLSBzY2FsZSkgbW92ZWRbMF0gPSBjdyAtIHNjYWxlXG4gICAgICAgIGlmIChtb3ZlZFsxXSA8IDApIG1vdmVkWzFdID0gMFxuICAgICAgICBpZiAobW92ZWRbMV0gPiBjaCAtIHNjYWxlKSBtb3ZlZFsxXSA9IGNoIC0gc2NhbGVcbiAgICAgICAgc2V0Q21hcmsobW92ZWQpXG5cbiAgICAgICAgLy8gbWlnaHQgd2FudCB0byBtb3ZlIHRoaXMgaW50byBkcmF3IG1hcmtlciAtIHRoZXJlIGNhbiBiZSBhIGRlbGF5XG4gICAgICAgIGlmIChrbS5kKSB7XG4gICAgICAgICAgZWRpdENoYXIoJ2JsYWNrJywgbW92ZWQpXG4gICAgICAgIH0gZWxzZSBpZiAoa20uZSkge1xuICAgICAgICAgIGVkaXRDaGFyKCd3aGl0ZScsIG1vdmVkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdENoYXIoZmlsbCwgbW92ZWQpIHtcbiAgICBsZXQgYiA9IGJhc2VfcmVmLmN1cnJlbnRcbiAgICBsZXQgYnggPSBiLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQga2V5ID0gYW1hcmtcbiAgICBsZXQgc3ByaXRlX3ggPSBrZXkgJSBhY29sc1xuICAgIGxldCBzcHJpdGVfeSA9IE1hdGguZmxvb3Ioa2V5IC8gYWNvbHMpXG4gICAgaWYgKGZpbGwgPT09ICd3aGl0ZScpIHtcbiAgICAgIGJ4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgIGJ4LmZpbGxSZWN0KFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyArIG1vdmVkWzBdIC8gc2NhbGUsXG4gICAgICAgIHNwcml0ZV95ICogYmNoICsgbW92ZWRbMV0gLyBzY2FsZSxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBieC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgICBieC5maWxsUmVjdChcbiAgICAgICAgc3ByaXRlX3ggKiBiY3cgKyBtb3ZlZFswXSAvIHNjYWxlLFxuICAgICAgICBzcHJpdGVfeSAqIGJjaCArIG1vdmVkWzFdIC8gc2NhbGUsXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9XG5cbiAgICBkcmF3QWxwaGFiZXQoKVxuICAgIGRyYXdDaGFyKClcbiAgICBkcmF3VGV4dCgpXG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0RG93bihlKSB7XG4gICAgc2V0TW9kZSgndGV4dCcpXG5cbiAgICBsZXQgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgbGV0IHJhd3ggPSBlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjd1xuICAgIGxldCByYXd5ID0gZS5jbGllbnRZIC0gcmVjdC50b3BcbiAgICBsZXQgcm93dGFyZyA9IE1hdGguZmxvb3IocmF3eSAvIGNoKVxuICAgIGxldCBjb2x0YXJnID0gTWF0aC5yb3VuZChyYXd4IC8gY3cpXG4gICAgbGV0IGluZGV4XG4gICAgbGV0IGluX3JvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihlID0+IGVbMl0gPT09IHJvd3RhcmcpXG4gICAgaWYgKGluX3Jvdy5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZGV4ID0gdHN0YXRlLnRleHQubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjaGFyID0gaW5fcm93W2NvbHRhcmddXG4gICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNoYXIgPSBpbl9yb3dbaW5fcm93Lmxlbmd0aCAtIDFdXG4gICAgICB9XG4gICAgICBpbmRleCA9IGNoYXJbM11cbiAgICB9XG4gICAgdGRpc3BhdGNoKHsgdHlwZTogJ3NldF9tYXJrZXInLCBwYXlsb2FkOiBbaW5kZXgsIGluZGV4XSB9KVxuICAgIHNldFRleHRDbGlja2VkKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0TW92ZShlKSB7XG4gICAgaWYgKHRleHRDbGlja2VkKSB7XG4gICAgICBsZXQgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBsZXQgcmF3eCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIGN3XG4gICAgICBsZXQgcmF3eSA9IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgICBsZXQgcm93dGFyZyA9IE1hdGguZmxvb3IocmF3eSAvIGNoKVxuICAgICAgbGV0IGNvbHRhcmcgPSBNYXRoLnJvdW5kKHJhd3ggLyBjdylcbiAgICAgIGxldCBpbmRleFxuICAgICAgbGV0IGluX3JvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihlID0+IGVbMl0gPT09IHJvd3RhcmcpXG4gICAgICBpZiAoaW5fcm93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmRleCA9IHRzdGF0ZS50ZXh0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoYXIgPSBpbl9yb3dbY29sdGFyZ11cbiAgICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNoYXIgPSBpbl9yb3dbaW5fcm93Lmxlbmd0aCAtIDFdXG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSBjaGFyWzNdXG4gICAgICB9XG4gICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnc2V0X2VuZF9tYXJrZXInLCBwYXlsb2FkOiBpbmRleCB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHRVcChlKSB7XG4gICAgbGV0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGxldCByYXd4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY3dcbiAgICBsZXQgcmF3eSA9IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgbGV0IHJvd3RhcmcgPSBNYXRoLmZsb29yKHJhd3kgLyBjaClcbiAgICBsZXQgY29sdGFyZyA9IE1hdGgucm91bmQocmF3eCAvIGN3KVxuICAgIGxldCBpbmRleFxuICAgIGxldCBpbl9yb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIoZSA9PiBlWzJdID09PSByb3d0YXJnKVxuICAgIGlmIChpbl9yb3cubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmRleCA9IHRzdGF0ZS50ZXh0Lmxlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2hhciA9IGluX3Jvd1tjb2x0YXJnXVxuICAgICAgaWYgKGNoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGFyID0gaW5fcm93W2luX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgfVxuICAgICAgaW5kZXggPSBjaGFyWzNdXG4gICAgfVxuICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdzZXRfZW5kX21hcmtlcicsIHBheWxvYWQ6IGluZGV4IH0pXG4gICAgc2V0VGV4dENsaWNrZWQoZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBjb3B5SGFuZGxlcihlKSB7XG4gICAgbGV0IHN0cmluZyA9IHRzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgbGV0IGZpcnN0aSA9IE1hdGgubWluKC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlcilcbiAgICBsZXQgc2VsZWN0ID0gc3RyaW5nLnN1YnN0cihmaXJzdGksIGxhc3RpKVxuICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0L3BsYWluJywgc2VsZWN0KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGN1dEhhbmRsZXIoZSkge1xuICAgIGxldCBzdHJpbmcgPSB0c3RhdGUudGV4dC5tYXAobyA9PiBvWzBdKS5qb2luKCcnKVxuICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi50c3RhdGUubWFya2VyKVxuICAgIGxldCBsYXN0aSA9IE1hdGgubWF4KC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgbGV0IHNlbGVjdCA9IHN0cmluZy5zdWJzdHIoZmlyc3RpLCBsYXN0aSlcbiAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHNlbGVjdClcbiAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaW5zZXJ0JywgY29sX251bTogY29sX251bSwgcGF5bG9hZDogJycgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBmdW5jdGlvbiBwYXN0ZUhhbmRsZXIoZSkge1xuICAgIGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0JylcbiAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaW5zZXJ0JywgY29sX251bTogY29sX251bSwgcGF5bG9hZDogcGFzdGUgfSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb3B5JywgY29weUhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2N1dCcsIGN1dEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgcGFzdGVIYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvcHknLCBjb3B5SGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjdXQnLCBjdXRIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgcGFzdGVIYW5kbGVyKVxuICAgIH1cbiAgfSwgW21vZGUsIGNvbF9udW0sIHRzdGF0ZSwgYW1hcmssIGNtYXJrLCBzaG93X2dhbGxlcnldKVxuXG4gIGxldCBzY3cgPSBjdyAvIHNjYWxlXG4gIGxldCBzY2ggPSBjaCAvIHNjYWxlXG5cbiAgbGV0IHRpdGxlID0gJ0ZhY2UnXG4gIGxldCBkZXNjcmlwdGlvbiA9XG4gICAgJ0ZhY2UgbGV0cyB5b3UgZWRpdCBib3RoIHRoZSB0ZXh0IGFuZCB0aGUgZm9udCBpdCBpcyByZW5kZXJlZCBpbi4nXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5GYWNlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vZmFjZS5jb25zdHJhaW50LnN5c3RlbXMvZmFjZS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2ZhY2UuY29uc3RyYWludC5zeXN0ZW1zXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRvcHN0cmlwXG4gICAgICAgIGN3PXtzY3d9XG4gICAgICAgIGNoPXtzY2h9XG4gICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgIHVpX2xvYWRlZD17dWlfbG9hZGVkfVxuICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICBrZXlUcmlnZ2VyPXtrZXlUcmlnZ2VyfVxuICAgICAgLz5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogc2NoIC8gMiwgbWFyZ2luQm90dG9tOiBzY2ggLyAyIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogY3csXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXMgd2lkdGg9eydmb250Jy5sZW5ndGggKiBzY3d9IGhlaWdodD17c2NofSByZWY9e2ZscmVmfSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vZGUoJ2ZvbnQnKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2FyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbW9kZSA9PT0gJ2ZvbnQnID8gJ3NvbGlkIDFweCBibGFjaycgOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2FtcmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgd2lkdGg9eydjaGFyJy5sZW5ndGggKiBzY3d9XG4gICAgICAgICAgICAgIGhlaWdodD17Y2ggLyBzY2FsZX1cbiAgICAgICAgICAgICAgcmVmPXtjbHJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgcmVmPXtjcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG1vZGUgPT09ICdjaGFyJyA/ICdzb2xpZCAxcHggYmxhY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtjbXJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IHNjaCAqIDIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgd2lkdGg9eygndGV4dCAxMDB4MTAwJy5sZW5ndGggKiBjdykgLyBzY2FsZX1cbiAgICAgICAgICAgIGhlaWdodD17c2NofVxuICAgICAgICAgICAgcmVmPXt0bHJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogbW9kZSA9PT0gJ3RleHQnID8gJ3NvbGlkIDFweCBibGFjaycgOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXt0cmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnZGlmZmVyZW5jZScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAtY3cgLyAyLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RleHREb3dufVxuICAgICAgICAgICAgb25Nb3VzZVVwPXt0ZXh0VXB9XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGV4dE1vdmV9XG4gICAgICAgICAgICByZWY9e21yZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJvdHRvbXN0cmlwXG4gICAgICAgIGN3PXtiY3d9XG4gICAgICAgIGNoPXtiY2h9XG4gICAgICAgIGJhc2U9e3VpX3JlZi5jdXJyZW50fVxuICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgIHVpX2xvYWRlZD17dWlfbG9hZGVkfVxuICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAga2V5VHJpZ2dlcj17a2V5VHJpZ2dlcn1cbiAgICAgIC8+XG5cbiAgICAgIHtzaG93X2dhbGxlcnkgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjIwLDIyMCwyMjAsMC44KScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZWZlZmVmJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGJjaCB9fT5cbiAgICAgICAgICAgICAgPFRpdGxlYnV0dG9uXG4gICAgICAgICAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgdWlfbG9hZGVkPXt1aV9sb2FkZWR9XG4gICAgICAgICAgICAgICAga2V5VHJpZ2dlcj17a2V5VHJpZ2dlcn1cbiAgICAgICAgICAgICAgICBtYXhfd2lkdGg9e3dpbmRvdy5pbm5lcldpZHRofVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnZm9udCBnYWxsZXJ5OicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnRXNjYXBlJyxcbiAgICAgICAgICAgICAgICAgICAga2V5X2xhYmVsOiAnRXNjJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdleGl0JyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2dhbGxlcnlfZGF0YS5tYXAoKGYsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGJjdyAqIDIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGJjaCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycvZm9udC1saWJyYXJ5LycgKyBmfSAvPlxuICAgICAgICAgICAgICAgIDxUaXRsZWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgICB1aV9sb2FkZWQ9e3VpX2xvYWRlZH1cbiAgICAgICAgICAgICAgICAgIGtleVRyaWdnZXI9e2tleVRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgICBtYXhfd2lkdGg9e2Fjb2xzICogY3d9XG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGhvdGtleV9sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAga2V5X2xhYmVsOiBob3RrZXlfbGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/faceoff/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.58e99a7ae546ce792841.hot-update.js.map