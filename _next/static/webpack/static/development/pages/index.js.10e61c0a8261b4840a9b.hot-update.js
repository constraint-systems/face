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
              console.log('move down');

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
    console.log(text);

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
      lineNumber: 1176
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177
    },
    __self: this
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179
    },
    __self: this
  }, "Face"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,shrink-to-fit=no",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://face.constraint.systems/face.png",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://face.constraint.systems",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195
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
      lineNumber: 1198
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
      lineNumber: 1208
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
      lineNumber: 1211
    },
    __self: this
  }, __jsx("canvas", {
    width: 'font'.length * scw,
    height: sch,
    ref: flref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217
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
      lineNumber: 1218
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
      lineNumber: 1224
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
      lineNumber: 1231
    },
    __self: this
  }))), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243
    },
    __self: this
  }, __jsx("canvas", {
    width: 'char'.length * scw,
    height: ch / scale,
    ref: clref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1244
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250
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
      lineNumber: 1251
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
      lineNumber: 1258
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
      lineNumber: 1270
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276
    },
    __self: this
  }, __jsx("canvas", {
    width: 'text 100x100'.length * cw / scale,
    height: sch,
    ref: tlref,
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1277
    },
    __self: this
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1283
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
      lineNumber: 1284
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
      lineNumber: 1291
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
      lineNumber: 1306
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
      lineNumber: 1318
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
      lineNumber: 1329
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: bch
    },
    className: "jsx-3625601830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1336
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
      lineNumber: 1337
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
        lineNumber: 1357
      },
      __self: this
    }, __jsx("img", {
      src: '/font-library/' + f,
      className: "jsx-3625601830",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1364
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
        lineNumber: 1365
      },
      __self: this
    }));
  }))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3625601830",
    __self: this
  }, "html{background:#efefef;line-height:0;}body{padding:0;margin:0;}img{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvZmFjZW9mZi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3MkN5QixBQUc4QixBQUlULEFBSUksVUFITCxJQUlYLEtBUmdCLEFBS2hCLGNBSkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9mYWNlb2ZmL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG4gIGNyZWF0ZVJlZixcbiAgdXNlRWZmZWN0LFxuICB1c2VSZWR1Y2VyLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGJhc2UsIGJhc2UyLCBsYXlvdXRUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnXG5pbXBvcnQgVG9wc3RyaXAgZnJvbSAnLi4vY29tcG9uZW50cy90b3BzdHJpcCdcbmltcG9ydCBCb3R0b21zdHJpcCBmcm9tICcuLi9jb21wb25lbnRzL2JvdHRvbXN0cmlwJ1xuaW1wb3J0IFRpdGxlYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVidXR0b24nXG5cbmxldCBiY3cgPSA4XG5sZXQgYmNoID0gMTZcblxubGV0IGhvdGtleV9sYWJlbHMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jy5zcGxpdCgnJylcblxuZnVuY3Rpb24gZ2V0TGFzdCh0ZXh0LCBpbmRleCkge1xuICBsZXQgY2hhciA9IHRleHRbaW5kZXhdXG4gIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgbGFzdF9jaGFyID0gdGV4dFtpbmRleCAtIDFdXG4gICAgLy8gaWYgYXQgc3RhcnRcbiAgICBpZiAobGFzdF9jaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoYXIgPSBbbnVsbCwgMCwgMF1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhciA9IGxhc3RfY2hhci5zbGljZSgpXG4gICAgICBpZiAoY2hhclswXSA9PT0gJ1xcbicpIHtcbiAgICAgICAgY2hhclsxXSA9IDBcbiAgICAgICAgY2hhclsyXSArPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyWzFdICs9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYXJcbn1cblxuZnVuY3Rpb24gdFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBmdW5jdGlvbiBtYyhuZXd0ZXh0LCBtYXJrKSB7XG4gICAgcmV0dXJuIG1hcmsubWFwKHYgPT4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdiksIG5ld3RleHQubGVuZ3RoKSlcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0Jzoge1xuICAgICAgbGV0IG5ld2tleSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4uc3RhdGUubWFya2VyKVxuICAgICAgbGV0IG5ld19zdHJpbmcgPVxuICAgICAgICB0ZXh0X3N0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCBmaXJzdGkpKSArXG4gICAgICAgIG5ld2tleSArXG4gICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKGxhc3RpKVxuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChhY3Rpb24uY29sX251bSwgbmV3X3N0cmluZylcbiAgICAgIGxldCBuZXdfbWFya2VyID0gW2ZpcnN0aSArIG5ld2tleS5sZW5ndGgsIGZpcnN0aSArIG5ld2tleS5sZW5ndGhdXG4gICAgICByZXR1cm4geyB0ZXh0OiB0ZXh0X2xheW91dCwgbWFya2VyOiBtYyh0ZXh0X2xheW91dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdiYWNrc3BhY2UnOiB7XG4gICAgICBsZXQgdGV4dF9zdHJpbmcgPSBzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgICBsZXQgbmV3X3N0cmluZywgbmV3X21hcmtlclxuICAgICAgaWYgKHN0YXRlLm1hcmtlclswXSA9PT0gc3RhdGUubWFya2VyWzFdKSB7XG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHN0YXRlLm1hcmtlclswXSAtIDEpKSArXG4gICAgICAgICAgdGV4dF9zdHJpbmcuc2xpY2Uoc3RhdGUubWFya2VyWzBdKVxuICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSAtIDEsIHN0YXRlLm1hcmtlclswXSAtIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4uc3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgIG5ld19zdHJpbmcgPVxuICAgICAgICAgIHRleHRfc3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0aSkpICsgdGV4dF9zdHJpbmcuc2xpY2UobGFzdGkpXG4gICAgICAgIG5ld19tYXJrZXIgPSBbZmlyc3RpLCBmaXJzdGldXG4gICAgICB9XG4gICAgICBsZXQgdGV4dF9sYXlvdXQgPSBsYXlvdXRUZXh0KGFjdGlvbi5jb2xfbnVtLCBuZXdfc3RyaW5nKVxuICAgICAgcmV0dXJuIHsgdGV4dDogdGV4dF9sYXlvdXQsIG1hcmtlcjogbWModGV4dF9sYXlvdXQsIG5ld19tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnaGlnaGxpZ2h0Jzoge1xuICAgICAgbGV0IG5ld19tYXJrZXIgPSBzdGF0ZS5tYXJrZXJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSAhPSAwKSB7XG4gICAgICAgIG5ld19tYXJrZXIgPSBbc3RhdGUubWFya2VyWzBdLCBzdGF0ZS5tYXJrZXJbMV0gKyBhY3Rpb24ucGF5bG9hZFswXV1cbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSAhPSAwKSB7XG4gICAgICAgIGxldCBmaXJzdGkgPSBzdGF0ZS5tYXJrZXJbMV1cbiAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gPCAwKSB7XG4gICAgICAgICAgaWYgKHBvc1syXSA+IDApIHtcbiAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfdXBbcG9zWzFdXVxuICAgICAgICAgICAgaWYgKGNjID09PSB1bmRlZmluZWQpIGNjID0gcm93X3VwW3Jvd191cC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgbmV3X21hcmtlciA9IFtzdGF0ZS5tYXJrZXJbMF0sIGNjWzNdXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICBpZiAocG9zWzJdIDwgc3RhdGUudGV4dFtzdGF0ZS50ZXh0Lmxlbmd0aCAtIDFdWzJdKSB7XG4gICAgICAgICAgICBsZXQgcm93X2Rvd24gPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSArIDEpXG4gICAgICAgICAgICBsZXQgY2MgPSByb3dfZG93bltwb3NbMV1dXG4gICAgICAgICAgICBpZiAoY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjYyA9IHJvd19kb3duW3Jvd19kb3duLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIGlmIChjY1szXSA9PT0gc3RhdGUudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY2NbM10gKz0gMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdfbWFya2VyID0gW3N0YXRlLm1hcmtlclswXSwgY2NbM11dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IHRleHQ6IHN0YXRlLnRleHQsIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgbmV3X21hcmtlcikgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfbWFya2VyJzoge1xuICAgICAgcmV0dXJuIHsgdGV4dDogc3RhdGUudGV4dCwgbWFya2VyOiBtYyhzdGF0ZS50ZXh0LCBhY3Rpb24ucGF5bG9hZCkgfVxuICAgIH1cbiAgICBjYXNlICdzZXRfZW5kX21hcmtlcic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHN0YXRlLnRleHQsXG4gICAgICAgIG1hcmtlcjogbWMoc3RhdGUudGV4dCwgW3N0YXRlLm1hcmtlclswXSwgYWN0aW9uLnBheWxvYWRdKSxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnbGF5b3V0Jzoge1xuICAgICAgbGV0IHRleHRfbGF5b3V0ID0gbGF5b3V0VGV4dChcbiAgICAgICAgYWN0aW9uLmNvbF9udW0sXG4gICAgICAgIHN0YXRlLnRleHQubWFwKG8gPT4gb1swXSkuam9pbignJylcbiAgICAgIClcbiAgICAgIHJldHVybiB7IHRleHQ6IHRleHRfbGF5b3V0LCBtYXJrZXI6IG1jKHRleHRfbGF5b3V0LCBzdGF0ZS5tYXJrZXIpIH1cbiAgICB9XG4gICAgY2FzZSAnbW92ZV9tYXJrZXInOlxuICAgICAge1xuICAgICAgICBsZXQgbmV3X21hcmtlciA9IHN0YXRlLm1hcmtlclxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMF0gIT0gMCkge1xuICAgICAgICAgIG5ld19tYXJrZXIgPSBbXG4gICAgICAgICAgICBzdGF0ZS5tYXJrZXJbMF0gKyBhY3Rpb24ucGF5bG9hZFswXSxcbiAgICAgICAgICAgIHN0YXRlLm1hcmtlclswXSArIGFjdGlvbi5wYXlsb2FkWzBdLFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMV0gIT0gMCkge1xuICAgICAgICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi5zdGF0ZS5tYXJrZXIpXG4gICAgICAgICAgbGV0IHBvcyA9IGdldExhc3Qoc3RhdGUudGV4dCwgZmlyc3RpKVxuICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA8IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPiAwKSB7XG4gICAgICAgICAgICAgIGxldCByb3dfdXAgPSBzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IHBvc1syXSAtIDEpXG4gICAgICAgICAgICAgIGxldCBjYyA9IHJvd191cFtwb3NbMV1dXG4gICAgICAgICAgICAgIGlmIChjYyA9PT0gdW5kZWZpbmVkKSBjYyA9IHJvd191cFtyb3dfdXAubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgbmV3X21hcmtlciA9IFtjY1szXSwgY2NbM11dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZFsxXSA+IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NbMl0gPCBzdGF0ZS50ZXh0W3N0YXRlLnRleHQubGVuZ3RoIC0gMV1bMl0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmUgZG93bicpXG4gICAgICAgICAgICAgIGxldCByb3dfZG93biA9IHN0YXRlLnRleHQuZmlsdGVyKG8gPT4gb1syXSA9PT0gcG9zWzJdICsgMSlcbiAgICAgICAgICAgICAgbGV0IGNjID0gcm93X2Rvd25bcG9zWzFdXVxuICAgICAgICAgICAgICBpZiAoY2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNjID0gcm93X2Rvd25bcm93X2Rvd24ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBpZiAoY2NbM10gPT09IHN0YXRlLnRleHQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgY2NbM10gKz0gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXdfbWFya2VyID0gW2NjWzNdLCBjY1szXV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGV4dDogc3RhdGUudGV4dCwgbWFya2VyOiBtYyhzdGF0ZS50ZXh0LCBuZXdfbWFya2VyKSB9XG4gICAgICB9XG4gICAgICBkZWZhdXQ6IHRocm93IG5ldyBFcnJvcigpXG4gIH1cbn1cblxubGV0IHNob3J0X3RleHQgPSBgQ0hBUFRFUiAxLiBMb29taW5ncy5cblxuQ2FsbCBtZSBJc2htYWVsLiBTb21lIHllYXJzIGFnb+KAlG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx54oCUaGF2aW5nIGxpdHRsZSBvciBubyBtb25leSBpbiBteSBwdXJzZSwgYW5kIG5vdGhpbmcgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiBzaG9yZSwgSSB0aG91Z2h0IEkgd291bGQgc2FpbCBhYm91dCBhIGxpdHRsZSBhbmQgc2VlIHRoZSB3YXRlcnkgcGFydCBvZiB0aGUgd29ybGQuYFxuXG5zaG9ydF90ZXh0ID0gYFlvdSBzZWUgcGVvcGxlLCBhbmQgeW91J3JlIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZW0sIHRoZXkgbWVhbiBub3RoaW5nIHRvIHlvdSwgYnV0IG90aGVyIHRpbWVzIHlvdSBjYW4gaW52ZXN0IGV2ZXJ5dGhpbmcgaW4gc29tZW9uZSB5b3UgZG9uJ3QgZXZlbiBrbm93LCBzaWxlbnRseSBiZWxpZXZlIGluIHRoZW0sIGl0IG1pZ2h0IGJlIG9uIHRoZSB1bmRlcmdyb3VuZCBvciBpbiBhIHNob3Agb3Igc29tZXRoaW5nLiBZb3UgaG9wZSBwZW9wbGUgYXJlIGRvaW5nIHRoYXQgd2l0aCB5b3UgYXMgd2VsbC4gU29tZSBwZW9wbGUsIGV2ZW4gd2hlbiB0aGV5J3JlIHF1aXRlIHlvdW5nLCBhbmQgdGhleSdyZSBpbiBkaWZmaWN1bHR5LCBtYXliZSB0YWtpbmcgYSBiYXR0ZXJpbmcgaW4gdGhlaXIgbGlmZSwgYnV0IHRoZXkgc3RpbGwgaGFuZGxlIHRoZW1zZWx2ZXMgd2l0aCBncmFjZS4gSSBob3BlIG1vc3QgcGVvcGxlIGNhbiBiZSBsaWtlIHRoYXQsIGhvbGQgaXQgdG9nZXRoZXIsIEkgd2FudGVkIHRoaXMgYWxidW0gdG8gYmUgZm9yIHBlb3BsZSBpbiB0aGF0IHNpdHVhdGlvbi5gXG5cbnNob3J0X3RleHQgPSBgRmFjZSBsZXRzIHlvdSBlZGl0IGJvdGggdGhlIHRleHQgYW5kIHRoZSBmb250IGl0IGlzIHJlbmRlcmVkIGluLiBJbiB0ZXh0IG1vZGUgeW91IGNhbiB0eXBlIGFuZCBlZGl0IHRleHQgbm9ybWFsbHkuIFByZXNzIGVzY2FwZSB0byBlbnRlciBmb250IG1vZGUsIHdoZXJlIHlvdSBjYW4gc2VsZWN0IGEgY2hhcmFjdGVyIHRvIGVkaXQuIEFueSBjaGFuZ2VzIHRvIGEgY2hhcmFjdGVyIGFyZSB2aXNpYmxlIGltbWVkaWF0ZWx5LlxuXG5BZGRpdGlvbmFsIGNvbnRyb2xzIGFyZSBzaG93biBhdCB0aGUgYm90dG9tLiBZb3UgY2FuIGNoYW5nZSB0aGUgdGV4dCBhcmVhIGFuZCBzYXZlIGl0IGFzIGFuIGltYWdlIGluIHRleHQgbW9kZS4gSW4gZm9udCBtb2RlLCB5b3UgY2FuIHNhdmUgdGhlIGZvbnQsIGxvYWQgYSBmb250IChmb250cyBhcmUganVzdCBhIHNwcml0ZSBzaGVldCBpbWFnZSksIG9yIGNob29zZSBhIGZvbnQgZnJvbSB0aGUgZm9udCBnYWxsZXJ5LlxuXG5UaGUgYmFzZSBmb250IHVzZWQgaXMgYSBzdWJzZXQgb2YgR05VIFVuaWZvbnQuYFxuXG5sZXQgaW5pdGlhbHQgPSB7XG4gIHRleHQ6IGxheW91dFRleHQoMjAsIHNob3J0X3RleHQpLFxuICBtYXJrZXI6IFtzaG9ydF90ZXh0Lmxlbmd0aCwgc2hvcnRfdGV4dC5sZW5ndGhdLFxufVxuXG5sZXQgYWNlbF9udW0gPSA5NVxubGV0IGFjb2xzID0gMTJcbmxldCBhcm93cyA9IE1hdGguY2VpbChhY2VsX251bSAvIGFjb2xzKVxuXG5sZXQgbWFnbmlmeSA9IDhcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgbGV0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCd0ZXh0JylcblxuICBsZXQgbXJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBhcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBhbXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBbY2FudmFzX2xvYWRlZCwgc2V0Q2FudmFzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3VpX2xvYWRlZCwgc2V0VUlMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgbGV0IFtzY2FsZSwgc2V0U2NhbGVdID0gdXNlU3RhdGUoMilcbiAgbGV0IFtjdywgc2V0Q3ddID0gdXNlU3RhdGUoOCAqIDIpXG4gIGxldCBbY2gsIHNldENoXSA9IHVzZVN0YXRlKDE2ICogMilcbiAgbGV0IFtjb2xfbnVtLCBzZXRDb2xOdW1dID0gdXNlU3RhdGUoMjApXG4gIGxldCBbcm93X251bSwgc2V0Um93TnVtXSA9IHVzZVN0YXRlKDE0KVxuXG4gIGxldCBbYW1hcmssIHNldEFtYXJrXSA9IHVzZVN0YXRlKDApXG5cbiAgbGV0IFtjbWFyaywgc2V0Q21hcmtdID0gdXNlU3RhdGUoWzAsIDBdKVxuXG4gIGxldCBiYXNlX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdWlfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG5cbiAgbGV0IGZscmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdGxyZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgW3RleHRDbGlja2VkLCBzZXRUZXh0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBsZXQgW3RzdGF0ZSwgdGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodFJlZHVjZXIsIGluaXRpYWx0KVxuXG4gIGxldCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZSgwKVxuXG4gIGxldCBbaGlnaGxpZ2h0LCBzZXRIaWdobGlnaHRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBsZXQgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGJhc2UyKVxuXG4gIGxldCBbZ2FsbGVyeV9kYXRhLCBzZXRHYWxsZXJ5RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW3Nob3dfZ2FsbGVyeSwgc2V0U2hvd0dhbGxlcnldID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL2xpYnJhcnkuanNvbicpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHNldEdhbGxlcnlEYXRhKGpzb24pXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGJhc2UgPSBiYXNlX3JlZi5jdXJyZW50XG4gICAgbGV0IGJhc2V4ID0gYmFzZS5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGJhc2VfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBiYXNlX2ltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBiYXNleC5jbGVhclJlY3QoMCwgMCwgYmFzZS53aWR0aCwgYmFzZS5oZWlnaHQpXG4gICAgICBiYXNleC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICBiYXNleC5maWxsUmVjdCgwLCAwLCBiYXNlLndpZHRoLCBiYXNlLmhlaWdodClcbiAgICAgIGJhc2V4LmRyYXdJbWFnZShiYXNlX2ltZywgMCwgMCwgYmFzZS53aWR0aCwgYmFzZS5oZWlnaHQpXG4gICAgICBkcmF3QWxwaGFiZXQoKVxuICAgICAgZHJhd1RleHQoKVxuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgICBiYXNlX2ltZy5zcmMgPSBzcmNcbiAgICBzZXRMb2FkZWQoc3JjKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZXMoKSB7XG4gICAgLy8gdGV4dFxuICAgIGxldCB0ID0gdHJlZi5jdXJyZW50XG4gICAgdC53aWR0aCA9IGN3ICogKGNvbF9udW0gKyAyKVxuICAgIHQuaGVpZ2h0ID0gY2ggKiAocm93X251bSArIDEpXG5cbiAgICAvLyB0ZXh0IG1hcmtlclxuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG4gICAgbS53aWR0aCA9IGN3ICogKGNvbF9udW0gKyAzKVxuICAgIG0uaGVpZ2h0ID0gY2ggKiAocm93X251bSArIDEpXG5cbiAgICAvLyBhbHBoYWJldFxuICAgIGxldCBhID0gYXJlZi5jdXJyZW50XG4gICAgYS53aWR0aCA9IGN3ICogYWNvbHNcbiAgICBhLmhlaWdodCA9IGNoICogYXJvd3NcblxuICAgIC8vIGFscGhhYmV0IG1hcmtlclxuICAgIGxldCBhbSA9IGFtcmVmLmN1cnJlbnRcbiAgICBhbS53aWR0aCA9IGN3ICogYWNvbHNcbiAgICBhbS5oZWlnaHQgPSBjaCAqIGFyb3dzXG5cbiAgICAvLyBjaGFyYWN0ZXJcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGMud2lkdGggPSBjdyAqIG1hZ25pZnlcbiAgICBjLmhlaWdodCA9IGNoICogbWFnbmlmeVxuXG4gICAgLy8gY2hhcmFjdGVyIG1hcmtlclxuICAgIGxldCBjbSA9IGNtcmVmLmN1cnJlbnRcbiAgICBjbS53aWR0aCA9IGMud2lkdGhcbiAgICBjbS5oZWlnaHQgPSBjLmhlaWdodFxuICB9XG5cbiAgLy8gaW5pdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIChjdyA9PT0gOCAmJiBjaCA9PT0gMTYgJiYgc2NhbGUgPT09IDEpIHx8XG4gICAgICAoY3cgPT09IDE2ICYmIGNoID09PSAzMiAmJiBzY2FsZSA9PT0gMilcbiAgICApIHtcbiAgICAgIHNldFNpemVzKClcblxuICAgICAgbGV0ICRiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICRiYXNlLndpZHRoID0gYWNvbHMgKiAoY3cgLyBzY2FsZSlcbiAgICAgICRiYXNlLmhlaWdodCA9IGFyb3dzICogKGNoIC8gc2NhbGUpXG4gICAgICBsZXQgJGJhc2V4ID0gJGJhc2UuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgJGJhc2V4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgICBsZXQgYmFzZV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgYmFzZV9pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAkYmFzZXguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgICAgICAkYmFzZXguZmlsbFJlY3QoMCwgMCwgJGJhc2Uud2lkdGgsICRiYXNlLmhlaWdodClcbiAgICAgICAgJGJhc2V4LmRyYXdJbWFnZShiYXNlX2ltZywgMCwgMCwgJGJhc2Uud2lkdGgsICRiYXNlLmhlaWdodClcbiAgICAgICAgYmFzZV9yZWYuY3VycmVudCA9ICRiYXNlXG5cbiAgICAgICAgc2V0Q2FudmFzTG9hZGVkKHRydWUpXG4gICAgICB9XG4gICAgICBiYXNlX2ltZy5zcmMgPSBsb2FkZWRcblxuICAgICAgbGV0IHVpX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICB1aV9pbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgJHVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgJHVpLndpZHRoID0gKGFjb2xzICogY3cpIC8gc2NhbGVcbiAgICAgICAgJHVpLmhlaWdodCA9IChhcm93cyAqIGNoKSAvIHNjYWxlXG4gICAgICAgIGxldCAkdWl4ID0gJHVpLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgJHVpeC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgICAkdWl4LmRyYXdJbWFnZSh1aV9pbWcsIDAsIDAsICR1aS53aWR0aCwgJHVpLmhlaWdodClcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQgPSAkdWlcblxuICAgICAgICBzZXRVSUxvYWRlZCh0cnVlKVxuICAgICAgfVxuICAgICAgdWlfaW1nLnNyYyA9IGJhc2UyXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBzZXRTaXplcygpXG4gICAgICBkcmF3TWFya2VyKClcbiAgICAgIGRyYXdUZXh0KClcbiAgICAgIGRyYXdBbHBoYWJldCgpXG4gICAgICBkcmF3QWxwaGFiZXRNYXJrZXIoKVxuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgfSwgW2N3LCBjaCwgc2NhbGUsIGNhbnZhc19sb2FkZWRdKVxuXG4gIC8vIGluaXQgYWZ0ZXIgY2FudmFzIGxvYWRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW52YXNfbG9hZGVkKSB7XG4gICAgICBkcmF3TWFya2VyKClcbiAgICAgIGRyYXdUZXh0KClcbiAgICAgIGRyYXdBbHBoYWJldCgpXG4gICAgICBkcmF3QWxwaGFiZXRNYXJrZXIoKVxuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgfSwgW2NhbnZhc19sb2FkZWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhbnZhc19sb2FkZWQpIHtcbiAgICAgIGRyYXdNYXJrZXIoKVxuICAgICAgZHJhd0FscGhhYmV0TWFya2VyKClcbiAgICB9XG4gIH0sIFttb2RlLCB0c3RhdGUudGV4dCwgdHN0YXRlLm1hcmtlciwgYW1hcmssIGNvbF9udW0sIGhpZ2hsaWdodF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FudmFzX2xvYWRlZCkge1xuICAgICAgZHJhd0NoYXIoKVxuICAgIH1cbiAgfSwgW21vZGUsIGFtYXJrLCBjbWFya10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FudmFzX2xvYWRlZCkge1xuICAgICAgZHJhd1RleHQoKVxuICAgIH1cbiAgfSwgW3RzdGF0ZS50ZXh0LCBjb2xfbnVtXSlcblxuICBmdW5jdGlvbiBkcmF3QWxwaGFiZXRNYXJrZXIoKSB7XG4gICAgbGV0IGFtID0gYW1yZWYuY3VycmVudFxuICAgIGxldCBhbXggPSBhbS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBhbXguY2xlYXJSZWN0KDAsIDAsIGFtLndpZHRoLCBhbS5oZWlnaHQpXG5cbiAgICAvLyBhbXguZmlsbFN0eWxlID0gJ2JsYWNrJ1xuICAgIC8vIGFteC5maWxsUmVjdCgwLCAwLCBhbS53aWR0aCwgYW0uaGVpZ2h0KVxuXG4gICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICB9XG4gICAgbGV0IFt4LCB5XSA9IGdldFhZKGFtYXJrKVxuICAgIGFteC5maWxsU3R5bGUgPSAnI2ZmZidcbiAgICBhbXgubGluZVdpZHRoID0gc2NhbGVcblxuICAgIGxldCBmbCA9IGZscmVmLmN1cnJlbnRcbiAgICBmbC53aWR0aCA9ICdmb250Oi0nLmxlbmd0aCAqIGJjd1xuICAgIGxldCBmbHggPSBmbC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGZsX2NvbnRlbnQgPSAnZm9udCAnXG4gICAgZmx4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3ZlcidcbiAgICBmbHguZmlsbFN0eWxlID0gJyNlZmVmZWYnXG4gICAgZmx4LmZpbGxSZWN0KDAsIDAsIGZsLndpZHRoLCBmbC5oZWlnaHQpXG4gICAgZmx4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkYXJrZW4nXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbF9jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gZmxfY29udGVudC5jaGFyQ29kZUF0KGkpIC0gMzJcbiAgICAgIGlmIChrZXkgPT09IC0yMikga2V5ID0gOTRcbiAgICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGtleSlcbiAgICAgIGZseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgc3ByaXRlX3kgKiAoY2ggLyBzY2FsZSksXG4gICAgICAgIGN3IC8gc2NhbGUsXG4gICAgICAgIGNoIC8gc2NhbGUsXG4gICAgICAgIGkgKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIDAgKiAoY2ggLyBzY2FsZSksXG4gICAgICAgIGN3IC8gc2NhbGUsXG4gICAgICAgIGNoIC8gc2NhbGVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ2ZvbnQnKSB7XG4gICAgICBhbXguZmlsbFJlY3QoeCAqIGN3LCB5ICogY2gsIGN3LCBjaClcbiAgICAgIGZ1bmN0aW9uIGdldFhZKGkpIHtcbiAgICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICAgIH1cbiAgICAgIGxldCBrZXkgPSAnOicuY2hhckNvZGVBdCgwKSAtIDMyXG4gICAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShrZXkpXG4gICAgICBmbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiBiY3csXG4gICAgICAgIHNwcml0ZV95ICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaCxcbiAgICAgICAgKGZsX2NvbnRlbnQubGVuZ3RoIC0gMSkgKiBiY3csXG4gICAgICAgIDAgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoXG4gICAgICApXG4gICAgICBmbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgeCAqIGJjdyxcbiAgICAgICAgeSAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2gsXG4gICAgICAgIGZsX2NvbnRlbnQubGVuZ3RoICogYmN3LFxuICAgICAgICAwICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdBbHBoYWJldCgpIHtcbiAgICBsZXQgYSA9IGFyZWYuY3VycmVudFxuICAgIGxldCBheCA9IGEuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGF4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICBheC5jbGVhclJlY3QoMCwgMCwgYS53aWR0aCwgYS5oZWlnaHQpXG4gICAgYXguZHJhd0ltYWdlKGJhc2VfcmVmLmN1cnJlbnQsIDAsIDAsIGEud2lkdGgsIGEuaGVpZ2h0KVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0NoYXIoKSB7XG4gICAgbGV0IGNtID0gY21yZWYuY3VycmVudFxuICAgIGxldCBjbXggPSBjbS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjbXguY2xlYXJSZWN0KDAsIDAsIGNtLndpZHRoLCBjbS5oZWlnaHQpXG4gICAgaWYgKG1vZGUgPT09ICdjaGFyJykge1xuICAgICAgY214LmZpbGxTdHlsZSA9ICdtYWdlbnRhJ1xuICAgICAgY214LmZpbGxSZWN0KFxuICAgICAgICBjbWFya1swXSAqIG1hZ25pZnksXG4gICAgICAgIGNtYXJrWzFdICogbWFnbmlmeSxcbiAgICAgICAgbWFnbmlmeSAqIHNjYWxlLFxuICAgICAgICBtYWduaWZ5ICogc2NhbGVcbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY3guZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGN4LmZpbGxSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgIGN4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG5cbiAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICByZXR1cm4gW2kgJSBhY29scywgTWF0aC5mbG9vcihpIC8gYWNvbHMpXVxuICAgIH1cbiAgICBsZXQgW3Nwcml0ZV94LCBzcHJpdGVfeV0gPSBnZXRYWShhbWFyaylcbiAgICBjeC5kcmF3SW1hZ2UoXG4gICAgICBiYXNlX3JlZi5jdXJyZW50LFxuICAgICAgc3ByaXRlX3ggKiBiY3csXG4gICAgICBzcHJpdGVfeSAqIGJjaCxcbiAgICAgIGJjdyxcbiAgICAgIGJjaCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY3cgKiBtYWduaWZ5LFxuICAgICAgY2ggKiBtYWduaWZ5XG4gICAgKVxuXG4gICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICB9XG4gICAgbGV0IGNsID0gY2xyZWYuY3VycmVudFxuICAgIGNsLndpZHRoID0gJ2NoYXI6dCcubGVuZ3RoICogYmN3XG4gICAgbGV0IGNseCA9IGNsLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgY2xfY29udGVudCA9ICdjaGFyICdcbiAgICBjbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICAgIGNseC5maWxsU3R5bGUgPSAnI2VmZWZlZidcbiAgICBjbHguZmlsbFJlY3QoMCwgMCwgY2wud2lkdGgsIGNsLmhlaWdodClcbiAgICBjbHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlbidcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsX2NvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBjbF9jb250ZW50LmNoYXJDb2RlQXQoaSkgLSAzMlxuICAgICAgaWYgKGtleSA9PT0gLTIyKSBrZXkgPSA5NFxuICAgICAgbGV0IFtzcHJpdGVfeCwgc3ByaXRlX3ldID0gZ2V0WFkoa2V5KVxuICAgICAgY2x4LmRyYXdJbWFnZShcbiAgICAgICAgdWlfcmVmLmN1cnJlbnQsXG4gICAgICAgIHNwcml0ZV94ICogKGN3IC8gc2NhbGUpLFxuICAgICAgICBzcHJpdGVfeSAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZSxcbiAgICAgICAgaSAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgMCAqIChjaCAvIHNjYWxlKSxcbiAgICAgICAgY3cgLyBzY2FsZSxcbiAgICAgICAgY2ggLyBzY2FsZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAnY2hhcicpIHtcbiAgICAgIGN4LnN0cm9rZVN0eWxlID0gJyNkZGQnXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IGNoOyByICs9IHNjYWxlKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY3c7IGMgKz0gc2NhbGUpIHtcbiAgICAgICAgICBjeC5zdHJva2VSZWN0KFxuICAgICAgICAgICAgYyAqIG1hZ25pZnksXG4gICAgICAgICAgICByICogbWFnbmlmeSxcbiAgICAgICAgICAgIG1hZ25pZnkgKiBzY2FsZSxcbiAgICAgICAgICAgIG1hZ25pZnkgKiBzY2FsZVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRYWShpKSB7XG4gICAgICAgIHJldHVybiBbaSAlIGFjb2xzLCBNYXRoLmZsb29yKGkgLyBhY29scyldXG4gICAgICB9XG4gICAgICBsZXQga2V5ID0gJzonLmNoYXJDb2RlQXQoMCkgLSAzMlxuICAgICAgbGV0IFthX3gsIGFfeV0gPSBnZXRYWShrZXkpXG4gICAgICBjbHguZHJhd0ltYWdlKFxuICAgICAgICB1aV9yZWYuY3VycmVudCxcbiAgICAgICAgYV94ICogYmN3LFxuICAgICAgICBhX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICAoY2xfY29udGVudC5sZW5ndGggLSAxKSAqIGJjdyxcbiAgICAgICAgMCAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2hcbiAgICAgIClcbiAgICAgIGNseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2gsXG4gICAgICAgIGJjdyxcbiAgICAgICAgYmNoLFxuICAgICAgICBjbF9jb250ZW50Lmxlbmd0aCAqIGJjdyxcbiAgICAgICAgMCAqIGJjaCxcbiAgICAgICAgYmN3LFxuICAgICAgICBiY2hcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3TWFya2VyKCkge1xuICAgIGxldCBtID0gbXJlZi5jdXJyZW50XG5cbiAgICBsZXQgbXggPSBtLmdldENvbnRleHQoJzJkJylcblxuICAgIGxldCBjaGFyID0gZ2V0TGFzdChcbiAgICAgIHRzdGF0ZS50ZXh0LFxuICAgICAgTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlciwgdHN0YXRlLnRleHQubGVuZ3RoIC0gMSlcbiAgICApXG5cbiAgICBtLndpZHRoID0gY3cgKiAoY29sX251bSArIDMpXG4gICAgbS5oZWlnaHQgPSBjaGFyWzJdICogY2ggKyBjaCArIGNoXG4gICAgbXguY2xlYXJSZWN0KDAsIDAsIG0ud2lkdGgsIG0uaGVpZ2h0KVxuXG4gICAgaWYgKG1vZGUgIT0gJ3RleHQnICYmIGhpZ2hsaWdodCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0c3RhdGUudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hhciA9IHRzdGF0ZS50ZXh0W2ldXG4gICAgICAgIGxldCBha2V5XG4gICAgICAgIGlmIChhbWFyayA9PT0gOTQpIHtcbiAgICAgICAgICBha2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMiAtIDIyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFtYXJrICsgMzIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJbMF0gPT09IGFrZXkpIHtcbiAgICAgICAgICBteC5maWxsU3R5bGUgPSAnIzIyMidcbiAgICAgICAgICBteC5maWxsUmVjdChjaGFyWzFdICogY3cgKyBjdyArIGN3IC8gMiwgY2hhclsyXSAqIGNoICsgY2ggLyAyLCBjdywgY2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ3RleHQnKSB7XG4gICAgICBmdW5jdGlvbiBnZXRYeShtYXJrKSB7XG4gICAgICAgIGxldCBjaGFyID0gZ2V0TGFzdCh0c3RhdGUudGV4dCwgbWFyaylcbiAgICAgICAgbGV0IHggPSBjaGFyWzFdXG4gICAgICAgIGxldCB5ID0gY2hhclsyXVxuICAgICAgICByZXR1cm4gW3gsIHldXG4gICAgICB9XG5cbiAgICAgIGlmICh0c3RhdGUubWFya2VyWzBdID09PSB0c3RhdGUubWFya2VyWzFdKSB7XG4gICAgICAgIC8vIGN1cnNvclxuICAgICAgICBsZXQgW3gsIHldID0gZ2V0WHkodHN0YXRlLm1hcmtlclswXSlcbiAgICAgICAgbXguZmlsbFN0eWxlID0gJ2dyZWVuJ1xuICAgICAgICBteC5maWxsUmVjdChcbiAgICAgICAgICB4ICogY3cgKyBjdyArIGN3IC8gMiAtIHNjYWxlLFxuICAgICAgICAgIHkgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICBzY2FsZSAqIDIsXG4gICAgICAgICAgY2hcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaGlnaGxpZ2h0XG4gICAgICAgIGxldCBmaXJzdGkgPSBNYXRoLm1pbiguLi50c3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi50c3RhdGUubWFya2VyKVxuICAgICAgICBsZXQgW3gwLCB5MF0gPSBnZXRYeShmaXJzdGkpXG4gICAgICAgIGxldCBbeDEsIHkxXSA9IGdldFh5KGxhc3RpKVxuICAgICAgICBteC5maWxsU3R5bGUgPSAnZ3JlZW4nXG4gICAgICAgIC8vIHNhbWUgcm93XG4gICAgICAgIGlmICh5MCA9PT0geTEpIHtcbiAgICAgICAgICBteC5maWxsUmVjdChcbiAgICAgICAgICAgIHgwICogY3cgKyBjdyArIGN3IC8gMixcbiAgICAgICAgICAgIHkwICogY2ggKyBjaCAvIDIsXG4gICAgICAgICAgICAoeDEgLSB4MCkgKiBjdyxcbiAgICAgICAgICAgIGNoXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZpcnN0X3Jvd1xuICAgICAgICAgIGxldCBmcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKG8gPT4gb1syXSA9PT0geTApXG4gICAgICAgICAgbGV0IGxhc3RfZnJvdyA9IGZyb3dbZnJvdy5sZW5ndGggLSAxXVxuICAgICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgICAgeDAgKiBjdyArIGN3ICsgY3cgLyAyLFxuICAgICAgICAgICAgeTAgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICAgIChsYXN0X2Zyb3dbMV0gLSB4MCArIDEpICogY3csXG4gICAgICAgICAgICBjaFxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmICh5MSAtIHkwID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHkwICsgMTsgaSA8IHkxOyBpKyspIHtcbiAgICAgICAgICAgICAgbGV0IHJvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihvID0+IG9bMl0gPT09IGkpXG4gICAgICAgICAgICAgIG14LmZpbGxSZWN0KFxuICAgICAgICAgICAgICAgIDAgKiBjdyArIGN3ICsgY3cgLyAyLFxuICAgICAgICAgICAgICAgIGkgKiBjaCArIGNoIC8gMixcbiAgICAgICAgICAgICAgICAocm93W3Jvdy5sZW5ndGggLSAxXVsxXSArIDEpICogY3csXG4gICAgICAgICAgICAgICAgY2hcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxhc3Rfcm93XG4gICAgICAgICAgbGV0IGxyb3cgPSB0c3RhdGUudGV4dC5maWx0ZXIobyA9PiBvWzJdID09PSB5MSlcbiAgICAgICAgICBsZXQgbGFzdF9scm93ID0gbHJvd1tscm93Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgbXguZmlsbFJlY3QoMCAqIGN3ICsgY3cgKyBjdyAvIDIsIHkxICogY2ggKyBjaCAvIDIsIHgxICogY3csIGNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RleHQoKSB7XG4gICAgbGV0IHQgPSB0cmVmLmN1cnJlbnRcbiAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgdGV4dCA9IHRzdGF0ZS50ZXh0XG5cbiAgICBjb25zb2xlLmxvZyh0ZXh0KVxuXG4gICAgbGV0IGNoYXIgPSBnZXRMYXN0KFxuICAgICAgdHN0YXRlLnRleHQsXG4gICAgICBNYXRoLm1heChNYXRoLm1heCguLi50c3RhdGUubWFya2VyKSwgdHN0YXRlLnRleHQubGVuZ3RoKVxuICAgIClcbiAgICB0LndpZHRoID0gY3cgKiAoY29sX251bSArIDIpXG4gICAgdC5oZWlnaHQgPSBjaGFyWzJdICogY2ggKyBjaCArIGNoXG5cbiAgICAvLyB0ZXh0IGxhYmVsXG4gICAgZnVuY3Rpb24gZ2V0WFkoaSkge1xuICAgICAgcmV0dXJuIFtpICUgYWNvbHMsIE1hdGguZmxvb3IoaSAvIGFjb2xzKV1cbiAgICB9XG4gICAgbGV0IHRsID0gdGxyZWYuY3VycmVudFxuICAgIGxldCB0bHggPSB0bC5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGx4LmNsZWFyUmVjdCgwLCAwLCB0bC53aWR0aCwgdGwuaGVpZ2h0KVxuICAgIHRseC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gICAgdGx4LmZpbGxTdHlsZSA9ICcjZWZlZmVmJ1xuICAgIHRseC5maWxsUmVjdCgwLCAwLCB0bC53aWR0aCwgdGwuaGVpZ2h0KVxuICAgIHRseC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGFya2VuJ1xuICAgIGxldCB0bF9jb250ZW50ID0gJ3RleHQ6JyArIGNvbF9udW0gKyAneCcgKyAoY2hhclsyXSArIDEpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bF9jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gdGxfY29udGVudC5jaGFyQ29kZUF0KGkpIC0gMzJcbiAgICAgIGlmIChrZXkgPT09IC0yMikga2V5ID0gOTRcbiAgICAgIGxldCBbc3ByaXRlX3gsIHNwcml0ZV95XSA9IGdldFhZKGtleSlcbiAgICAgIHRseC5kcmF3SW1hZ2UoXG4gICAgICAgIHVpX3JlZi5jdXJyZW50LFxuICAgICAgICBzcHJpdGVfeCAqIChjdyAvIHNjYWxlKSxcbiAgICAgICAgc3ByaXRlX3kgKiAoY2ggLyBzY2FsZSksXG4gICAgICAgIGN3IC8gc2NhbGUsXG4gICAgICAgIGNoIC8gc2NhbGUsXG4gICAgICAgIGkgKiAoY3cgLyBzY2FsZSksXG4gICAgICAgIDAgKiAoY2ggLyBzY2FsZSksXG4gICAgICAgIGN3IC8gc2NhbGUsXG4gICAgICAgIGNoIC8gc2NhbGVcbiAgICAgIClcbiAgICB9XG5cbiAgICB0eC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgdHguZmlsbFJlY3QoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpXG4gICAgdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB0ZXh0W2ldXG4gICAgICBsZXQgeCA9IGl0ZW1bMV1cbiAgICAgIGxldCB5ID0gaXRlbVsyXVxuICAgICAgbGV0IGtleSA9IGl0ZW1bMF0uY2hhckNvZGVBdCgwKSAtIDMyXG4gICAgICBpZiAoa2V5ID09PSAtMjIpIGtleSA9IDk0XG4gICAgICBsZXQgc3ByaXRlX3ggPSBrZXkgJSBhY29sc1xuICAgICAgbGV0IHNwcml0ZV95ID0gTWF0aC5mbG9vcihrZXkgLyBhY29scylcbiAgICAgIHR4LmRyYXdJbWFnZShcbiAgICAgICAgYmFzZV9yZWYuY3VycmVudCxcbiAgICAgICAgc3ByaXRlX3ggKiBiY3csXG4gICAgICAgIHNwcml0ZV95ICogYmNoLFxuICAgICAgICBiY3csXG4gICAgICAgIGJjaCxcbiAgICAgICAgeCAqIGN3ICsgY3csXG4gICAgICAgIHkgKiBjaCArIGNoIC8gMixcbiAgICAgICAgY3csXG4gICAgICAgIGNoXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5VHJpZ2dlcihrZXlzdHJpbmcpIHtcbiAgICBsZXQgc2hpZnQgPSBmYWxzZVxuICAgIGxldCBjdHJsID0gZmFsc2VcbiAgICBsZXQgbWV0YSA9IGZhbHNlXG5cbiAgICBpZiAoa2V5c3RyaW5nLmluZGV4T2YoJ2N0cmwnKSA+IC0xKSB7XG4gICAgICBjdHJsID0gdHJ1ZVxuICAgICAga2V5c3RyaW5nID0ga2V5c3RyaW5nLnNwbGl0KCcrJylbMV1cbiAgICB9XG5cbiAgICBrbV9yZWYuY3VycmVudFtrZXlzdHJpbmddID0gdHJ1ZVxuICAgIGtleUFjdGlvbihrZXlzdHJpbmcsIHtcbiAgICAgIHNoaWZ0S2V5OiBzaGlmdCxcbiAgICAgIGN0cmxLZXk6IGN0cmwsXG4gICAgICBtZXRhOiBtZXRhLFxuICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge30sXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGttX3JlZi5jdXJyZW50W2tleXN0cmluZ10gPSBmYWxzZVxuICAgIH0sIDApXG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBldmVudCkge1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBsZXQgc2hpZnQgPSBldmVudC5zaGlmdEtleVxuICAgIGxldCBjdHJsID0gZXZlbnQuY3RybEtleVxuICAgIGxldCBtZXRhID0gZXZlbnQubWV0YUtleVxuXG4gICAgLy8gc2hvdyBnYWxsZXJ5IG92ZXJyaWRlcyBldmVyeXRoaW5nIGVsc2VcbiAgICBpZiAoc2hvd19nYWxsZXJ5KSB7XG4gICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBzZXRTaG93R2FsbGVyeShwcmV2ID0+ICFwcmV2KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3RrZXlfbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGNoZWNrX2tleSA9IGhvdGtleV9sYWJlbHNbaV1cbiAgICAgICAgICBpZiAoa2V5ID09PSBjaGVja19rZXkpIHtcbiAgICAgICAgICAgIGxldCBzcmMgPSBnYWxsZXJ5X2RhdGFbaG90a2V5X2xhYmVscy5pbmRleE9mKGtleSldXG4gICAgICAgICAgICBzZXRTaG93R2FsbGVyeShmYWxzZSlcbiAgICAgICAgICAgIGxvYWRJbWFnZSgnL2ZvbnQtbGlicmFyeS8nICsgc3JjKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gc2l6ZSBjaGFuZ2UgY2FuIGJlIGRvbmUgaW4gYW55IG1vZGVcbiAgICBpZiAoY3RybCAmJiBrZXkgPT0gMSkge1xuICAgICAgc2V0U2NhbGUoMSlcbiAgICAgIHNldEN3KDgpXG4gICAgICBzZXRDaCgxNilcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09IDIpIHtcbiAgICAgIHNldFNjYWxlKDIpXG4gICAgICBzZXRDdygxNilcbiAgICAgIHNldENoKDMyKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT0gJ3YnKSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb25zdHJhaW50LXN5c3RlbXMvZmFjZSdcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAoY3RybCAmJiBrZXkgPT09ICdhJykge1xuICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnc2V0X21hcmtlcicsIHBheWxvYWQ6IFswLCB0c3RhdGUudGV4dC5sZW5ndGhdIH0pXG4gICAgICB9IGVsc2UgaWYgKGN0cmwgJiYga2V5ID09PSAnaCcpIHtcbiAgICAgICAgbGV0IG5ld19jb2wgPSBjb2xfbnVtIC0gMVxuICAgICAgICBzZXRDb2xOdW0obmV3X2NvbClcbiAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2xheW91dCcsIGNvbF9udW06IG5ld19jb2wgfSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ2wnKSB7XG4gICAgICAgIGxldCBuZXdfY29sID0gY29sX251bSArIDFcbiAgICAgICAgc2V0Q29sTnVtKG5ld19jb2wpXG4gICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdsYXlvdXQnLCBjb2xfbnVtOiBuZXdfY29sIH0pXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdzJykge1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICAgIGxldCB0ID0gdHJlZi5jdXJyZW50XG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgdGVtcC53aWR0aCA9IHQud2lkdGhcbiAgICAgICAgdGVtcC5oZWlnaHQgPSB0LmhlaWdodFxuXG4gICAgICAgIGxldCB0ZW1weCA9IHRlbXAuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0ZW1weC5maWxsU3R5bGUgPSAnd2hpdGUnXG4gICAgICAgIHRlbXB4LmZpbGxSZWN0KDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KVxuICAgICAgICB0ZW1weC5kcmF3SW1hZ2UodCwgMCwgMClcblxuICAgICAgICB0ZW1wLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgICAgJ2ZhY2UtdGV4dC0nICtcbiAgICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICAgJ1onICtcbiAgICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN0cmwgJiYga2V5ID09ICdtJykge1xuICAgICAgICBzZXRIaWdobGlnaHQocHJldiA9PiAhcHJldilcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIGlmIChjdHJsICYmIGtleSA9PT0gJ2cnKSB7XG4gICAgICAgIHNldFNob3dHYWxsZXJ5KHByZXYgPT4gIXByZXYpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdkJykge1xuICAgICAgICAvLyBmb250IGRvd25sb2FkXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgICAgLy8gYWx3YXlzIHNhdmUgZm9udCBhdCAyeFxuXG4gICAgICAgIGxldCBhID0gYXJlZi5jdXJyZW50XG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgdGVtcC53aWR0aCA9IGJjdyAqIGFjb2xzICogMlxuICAgICAgICB0ZW1wLmhlaWdodCA9IGJjaCAqIGFyb3dzICogMlxuXG4gICAgICAgIGxldCB0ZW1weCA9IHRlbXAuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0ZW1weC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgICB0ZW1weC5kcmF3SW1hZ2UoYSwgMCwgMCwgdGVtcC53aWR0aCwgdGVtcC5oZWlnaHQpXG5cbiAgICAgICAgdGVtcC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAgICdmYWNlLWZvbnQtJyArXG4gICAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAgICcucG5nJ1xuICAgICAgICAgIClcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoY3RybCAmJiBrZXkgPT09ICdmJykge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKVxuICAgICAgICAgICAgbG9hZEltYWdlKHNyYylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2hpZnQgPSB0cnVlXG4gICAgaWYgKCFjdHJsICYmICFtZXRhKSB7XG4gICAgICBpZiAobW9kZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgc2V0TW9kZSgnZm9udCcpXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdiYWNrc3BhY2UnLCBjb2xfbnVtOiBjb2xfbnVtIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2hpZ2hsaWdodCcsIHBheWxvYWQ6IFstMSwgMF0gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ21vdmVfbWFya2VyJywgcGF5bG9hZDogWy0xLCAwXSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2hpZ2hsaWdodCcsIHBheWxvYWQ6IFsrMSwgMF0gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ21vdmVfbWFya2VyJywgcGF5bG9hZDogWysxLCAwXSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2hpZ2hsaWdodCcsIHBheWxvYWQ6IFswLCAtMV0gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ21vdmVfbWFya2VyJywgcGF5bG9hZDogWzAsIC0xXSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaGlnaGxpZ2h0JywgcGF5bG9hZDogWzAsICsxXSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnbW92ZV9tYXJrZXInLCBwYXlsb2FkOiBbMCwgKzFdIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnaW5zZXJ0JywgY29sX251bTogY29sX251bSwgcGF5bG9hZDoga2V5IH0pXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnICcpIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGRpc3BhdGNoKHsgdHlwZTogJ2luc2VydCcsIGNvbF9udW06IGNvbF9udW0sIHBheWxvYWQ6ICdcXG4nIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdmb250Jykge1xuICAgICAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgc2V0TW9kZSgnY2hhcicpXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndCcpIHtcbiAgICAgICAgICBzZXRNb2RlKCd0ZXh0JylcbiAgICAgICAgfVxuICAgICAgICBpZiAoa21bJ2wnXSkge1xuICAgICAgICAgIGxldCBuZXdfYW1hcmsgPSBhbWFyayArIDFcbiAgICAgICAgICBpZiAobmV3X2FtYXJrID4gYWNlbF9udW0gLSAxKSBuZXdfYW1hcmsgPSBhY2VsX251bSAtIDFcbiAgICAgICAgICBzZXRBbWFyayhuZXdfYW1hcmspXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttWydoJ10pIHtcbiAgICAgICAgICBsZXQgbmV3X2FtYXJrID0gYW1hcmsgLSAxXG4gICAgICAgICAgaWYgKG5ld19hbWFyayA8IDApIG5ld19hbWFyayA9IDBcbiAgICAgICAgICBzZXRBbWFyayhuZXdfYW1hcmspXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttWydqJ10gfHwga21bJ2snXSkge1xuICAgICAgICAgIGxldCBsYXlvdXQgPSBbLi4uQXJyYXkoYWNlbF9udW0pXS5tYXAoKG4sIGkpID0+IFtcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBpICUgYWNvbHMsXG4gICAgICAgICAgICBNYXRoLmZsb29yKGkgLyBhY29scyksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBsZXQgY2VsbCA9IGxheW91dFthbWFya11cbiAgICAgICAgICBpZiAoa21bJ2snXSkge1xuICAgICAgICAgICAgbGV0IG5leHQgPSBjZWxsWzJdIC0gMVxuICAgICAgICAgICAgaWYgKG5leHQgPj0gMCkge1xuICAgICAgICAgICAgICBsZXQgdXBfcm93ID0gbGF5b3V0LmZpbHRlcihjID0+IGNbMl0gPT09IG5leHQpXG4gICAgICAgICAgICAgIGxldCBuZXdfYW1hcmsgPSB1cF9yb3dbY2VsbFsxXV1cbiAgICAgICAgICAgICAgaWYgKG5ld19hbWFyayA9PT0gdW5kZWZpbmVkKSB1cF9yb3dbdXBfcm93Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIHNldEFtYXJrKG5ld19hbWFya1swXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGttWydqJ10pIHtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gY2VsbFsyXSArIDFcbiAgICAgICAgICAgIGlmIChuZXh0IDw9IGxheW91dFtsYXlvdXQubGVuZ3RoIC0gMV1bMl0pIHtcbiAgICAgICAgICAgICAgbGV0IGRuX3JvdyA9IGxheW91dC5maWx0ZXIoYyA9PiBjWzJdID09PSBuZXh0KVxuICAgICAgICAgICAgICBsZXQgbmV3X2FtYXJrID0gZG5fcm93W2NlbGxbMV1dXG4gICAgICAgICAgICAgIGlmIChuZXdfYW1hcmsgPT09IHVuZGVmaW5lZCkgbmV3X2FtYXJrID0gZG5fcm93W2RuX3Jvdy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICBzZXRBbWFyayhuZXdfYW1hcmtbMF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjaGFyJykge1xuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIHNldE1vZGUoJ2ZvbnQnKVxuICAgICAgICB9XG4gICAgICAgIGxldCBtb3ZlbWVudCA9IFswLCAwXVxuICAgICAgICBpZiAoa20uaikge1xuICAgICAgICAgIG1vdmVtZW50WzFdICs9IDEgKiBzY2FsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrbS5rKSB7XG4gICAgICAgICAgbW92ZW1lbnRbMV0gLT0gMSAqIHNjYWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGttLmgpIHtcbiAgICAgICAgICBtb3ZlbWVudFswXSAtPSAxICogc2NhbGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa20ubCkge1xuICAgICAgICAgIG1vdmVtZW50WzBdICs9IDEgKiBzY2FsZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vdmVkID0gW2NtYXJrWzBdICsgbW92ZW1lbnRbMF0sIGNtYXJrWzFdICsgbW92ZW1lbnRbMV1dXG4gICAgICAgIGlmIChtb3ZlZFswXSA8IDApIG1vdmVkWzBdID0gMFxuICAgICAgICBpZiAobW92ZWRbMF0gPiBjdyAtIHNjYWxlKSBtb3ZlZFswXSA9IGN3IC0gc2NhbGVcbiAgICAgICAgaWYgKG1vdmVkWzFdIDwgMCkgbW92ZWRbMV0gPSAwXG4gICAgICAgIGlmIChtb3ZlZFsxXSA+IGNoIC0gc2NhbGUpIG1vdmVkWzFdID0gY2ggLSBzY2FsZVxuICAgICAgICBzZXRDbWFyayhtb3ZlZClcblxuICAgICAgICAvLyBtaWdodCB3YW50IHRvIG1vdmUgdGhpcyBpbnRvIGRyYXcgbWFya2VyIC0gdGhlcmUgY2FuIGJlIGEgZGVsYXlcbiAgICAgICAgaWYgKGttLmQpIHtcbiAgICAgICAgICBlZGl0Q2hhcignYmxhY2snLCBtb3ZlZClcbiAgICAgICAgfSBlbHNlIGlmIChrbS5lKSB7XG4gICAgICAgICAgZWRpdENoYXIoJ3doaXRlJywgbW92ZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0Q2hhcihmaWxsLCBtb3ZlZCkge1xuICAgIGxldCBiID0gYmFzZV9yZWYuY3VycmVudFxuICAgIGxldCBieCA9IGIuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBrZXkgPSBhbWFya1xuICAgIGxldCBzcHJpdGVfeCA9IGtleSAlIGFjb2xzXG4gICAgbGV0IHNwcml0ZV95ID0gTWF0aC5mbG9vcihrZXkgLyBhY29scylcbiAgICBpZiAoZmlsbCA9PT0gJ3doaXRlJykge1xuICAgICAgYnguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgICAgYnguZmlsbFJlY3QoXG4gICAgICAgIHNwcml0ZV94ICogYmN3ICsgbW92ZWRbMF0gLyBzY2FsZSxcbiAgICAgICAgc3ByaXRlX3kgKiBiY2ggKyBtb3ZlZFsxXSAvIHNjYWxlLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ4LmZpbGxTdHlsZSA9ICdibGFjaydcbiAgICAgIGJ4LmZpbGxSZWN0KFxuICAgICAgICBzcHJpdGVfeCAqIGJjdyArIG1vdmVkWzBdIC8gc2NhbGUsXG4gICAgICAgIHNwcml0ZV95ICogYmNoICsgbW92ZWRbMV0gLyBzY2FsZSxcbiAgICAgICAgMSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH1cblxuICAgIGRyYXdBbHBoYWJldCgpXG4gICAgZHJhd0NoYXIoKVxuICAgIGRyYXdUZXh0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHREb3duKGUpIHtcbiAgICBzZXRNb2RlKCd0ZXh0JylcblxuICAgIGxldCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBsZXQgcmF3eCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIGN3XG4gICAgbGV0IHJhd3kgPSBlLmNsaWVudFkgLSByZWN0LnRvcFxuICAgIGxldCByb3d0YXJnID0gTWF0aC5mbG9vcihyYXd5IC8gY2gpXG4gICAgbGV0IGNvbHRhcmcgPSBNYXRoLnJvdW5kKHJhd3ggLyBjdylcbiAgICBsZXQgaW5kZXhcbiAgICBsZXQgaW5fcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKGUgPT4gZVsyXSA9PT0gcm93dGFyZylcbiAgICBpZiAoaW5fcm93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5kZXggPSB0c3RhdGUudGV4dC5sZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNoYXIgPSBpbl9yb3dbY29sdGFyZ11cbiAgICAgIGlmIChjaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hhciA9IGluX3Jvd1tpbl9yb3cubGVuZ3RoIC0gMV1cbiAgICAgIH1cbiAgICAgIGluZGV4ID0gY2hhclszXVxuICAgIH1cbiAgICB0ZGlzcGF0Y2goeyB0eXBlOiAnc2V0X21hcmtlcicsIHBheWxvYWQ6IFtpbmRleCwgaW5kZXhdIH0pXG4gICAgc2V0VGV4dENsaWNrZWQodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHRNb3ZlKGUpIHtcbiAgICBpZiAodGV4dENsaWNrZWQpIHtcbiAgICAgIGxldCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGxldCByYXd4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY3dcbiAgICAgIGxldCByYXd5ID0gZS5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgIGxldCByb3d0YXJnID0gTWF0aC5mbG9vcihyYXd5IC8gY2gpXG4gICAgICBsZXQgY29sdGFyZyA9IE1hdGgucm91bmQocmF3eCAvIGN3KVxuICAgICAgbGV0IGluZGV4XG4gICAgICBsZXQgaW5fcm93ID0gdHN0YXRlLnRleHQuZmlsdGVyKGUgPT4gZVsyXSA9PT0gcm93dGFyZylcbiAgICAgIGlmIChpbl9yb3cubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZGV4ID0gdHN0YXRlLnRleHQubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY2hhciA9IGluX3Jvd1tjb2x0YXJnXVxuICAgICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2hhciA9IGluX3Jvd1tpbl9yb3cubGVuZ3RoIC0gMV1cbiAgICAgICAgfVxuICAgICAgICBpbmRleCA9IGNoYXJbM11cbiAgICAgIH1cbiAgICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdzZXRfZW5kX21hcmtlcicsIHBheWxvYWQ6IGluZGV4IH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGV4dFVwKGUpIHtcbiAgICBsZXQgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgbGV0IHJhd3ggPSBlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjd1xuICAgIGxldCByYXd5ID0gZS5jbGllbnRZIC0gcmVjdC50b3BcbiAgICBsZXQgcm93dGFyZyA9IE1hdGguZmxvb3IocmF3eSAvIGNoKVxuICAgIGxldCBjb2x0YXJnID0gTWF0aC5yb3VuZChyYXd4IC8gY3cpXG4gICAgbGV0IGluZGV4XG4gICAgbGV0IGluX3JvdyA9IHRzdGF0ZS50ZXh0LmZpbHRlcihlID0+IGVbMl0gPT09IHJvd3RhcmcpXG4gICAgaWYgKGluX3Jvdy5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZGV4ID0gdHN0YXRlLnRleHQubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjaGFyID0gaW5fcm93W2NvbHRhcmddXG4gICAgICBpZiAoY2hhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNoYXIgPSBpbl9yb3dbaW5fcm93Lmxlbmd0aCAtIDFdXG4gICAgICB9XG4gICAgICBpbmRleCA9IGNoYXJbM11cbiAgICB9XG4gICAgdGRpc3BhdGNoKHsgdHlwZTogJ3NldF9lbmRfbWFya2VyJywgcGF5bG9hZDogaW5kZXggfSlcbiAgICBzZXRUZXh0Q2xpY2tlZChmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlIYW5kbGVyKGUpIHtcbiAgICBsZXQgc3RyaW5nID0gdHN0YXRlLnRleHQubWFwKG8gPT4gb1swXSkuam9pbignJylcbiAgICBsZXQgZmlyc3RpID0gTWF0aC5taW4oLi4udHN0YXRlLm1hcmtlcilcbiAgICBsZXQgbGFzdGkgPSBNYXRoLm1heCguLi50c3RhdGUubWFya2VyKVxuICAgIGxldCBzZWxlY3QgPSBzdHJpbmcuc3Vic3RyKGZpcnN0aSwgbGFzdGkpXG4gICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBzZWxlY3QpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZnVuY3Rpb24gY3V0SGFuZGxlcihlKSB7XG4gICAgbGV0IHN0cmluZyA9IHRzdGF0ZS50ZXh0Lm1hcChvID0+IG9bMF0pLmpvaW4oJycpXG4gICAgbGV0IGZpcnN0aSA9IE1hdGgubWluKC4uLnRzdGF0ZS5tYXJrZXIpXG4gICAgbGV0IGxhc3RpID0gTWF0aC5tYXgoLi4udHN0YXRlLm1hcmtlcilcbiAgICBsZXQgc2VsZWN0ID0gc3RyaW5nLnN1YnN0cihmaXJzdGksIGxhc3RpKVxuICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0L3BsYWluJywgc2VsZWN0KVxuICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdpbnNlcnQnLCBjb2xfbnVtOiBjb2xfbnVtLCBwYXlsb2FkOiAnJyB9KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhc3RlSGFuZGxlcihlKSB7XG4gICAgbGV0IHBhc3RlID0gKGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKVxuICAgIHRkaXNwYXRjaCh7IHR5cGU6ICdpbnNlcnQnLCBjb2xfbnVtOiBjb2xfbnVtLCBwYXlsb2FkOiBwYXN0ZSB9KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gZmFsc2VcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvcHknLCBjb3B5SGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY3V0JywgY3V0SGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBwYXN0ZUhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29weScsIGNvcHlIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2N1dCcsIGN1dEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBwYXN0ZUhhbmRsZXIpXG4gICAgfVxuICB9LCBbbW9kZSwgY29sX251bSwgdHN0YXRlLCBhbWFyaywgY21hcmssIHNob3dfZ2FsbGVyeV0pXG5cbiAgbGV0IHNjdyA9IGN3IC8gc2NhbGVcbiAgbGV0IHNjaCA9IGNoIC8gc2NhbGVcblxuICBsZXQgdGl0bGUgPSAnRmFjZSdcbiAgbGV0IGRlc2NyaXB0aW9uID1cbiAgICAnRmFjZSBsZXRzIHlvdSBlZGl0IGJvdGggdGhlIHRleHQgYW5kIHRoZSBmb250IGl0IGlzIHJlbmRlcmVkIGluLidcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPHRpdGxlPkZhY2U8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSxzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9mYWNlLmNvbnN0cmFpbnQuc3lzdGVtcy9mYWNlLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZmFjZS5jb25zdHJhaW50LnN5c3RlbXNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VG9wc3RyaXBcbiAgICAgICAgY3c9e3Njd31cbiAgICAgICAgY2g9e3NjaH1cbiAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICBiYXNlPXt1aV9yZWYuY3VycmVudH1cbiAgICAgICAgdWlfbG9hZGVkPXt1aV9sb2FkZWR9XG4gICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgIGtleVRyaWdnZXI9e2tleVRyaWdnZXJ9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiBzY2ggLyAyLCBtYXJnaW5Cb3R0b206IHNjaCAvIDIgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBjdyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGNhbnZhcyB3aWR0aD17J2ZvbnQnLmxlbmd0aCAqIHNjd30gaGVpZ2h0PXtzY2h9IHJlZj17ZmxyZWZ9IC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kZSgnZm9udCcpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17YXJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBtb2RlID09PSAnZm9udCcgPyAnc29saWQgMXB4IGJsYWNrJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnZGlmZmVyZW5jZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlZj17YW1yZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICB3aWR0aD17J2NoYXInLmxlbmd0aCAqIHNjd31cbiAgICAgICAgICAgICAgaGVpZ2h0PXtjaCAvIHNjYWxlfVxuICAgICAgICAgICAgICByZWY9e2NscmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2NyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbW9kZSA9PT0gJ2NoYXInID8gJ3NvbGlkIDFweCBibGFjaycgOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2NtcmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogc2NoICogMixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICB3aWR0aD17KCd0ZXh0IDEwMHgxMDAnLmxlbmd0aCAqIGN3KSAvIHNjYWxlfVxuICAgICAgICAgICAgaGVpZ2h0PXtzY2h9XG4gICAgICAgICAgICByZWY9e3RscmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBvdXRsaW5lOiBtb2RlID09PSAndGV4dCcgPyAnc29saWQgMXB4IGJsYWNrJyA6ICdub25lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWY9e3RyZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdkaWZmZXJlbmNlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IC1jdyAvIDIsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17dGV4dERvd259XG4gICAgICAgICAgICBvbk1vdXNlVXA9e3RleHRVcH1cbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0ZXh0TW92ZX1cbiAgICAgICAgICAgIHJlZj17bXJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Qm90dG9tc3RyaXBcbiAgICAgICAgY3c9e2Jjd31cbiAgICAgICAgY2g9e2JjaH1cbiAgICAgICAgYmFzZT17dWlfcmVmLmN1cnJlbnR9XG4gICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgdWlfbG9hZGVkPXt1aV9sb2FkZWR9XG4gICAgICAgIGhpZ2hsaWdodD17aGlnaGxpZ2h0fVxuICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICBrZXlUcmlnZ2VyPXtrZXlUcmlnZ2VyfVxuICAgICAgLz5cblxuICAgICAge3Nob3dfZ2FsbGVyeSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyMjAsMjIwLDIyMCwwLjgpJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlZmVmZWYnLFxuICAgICAgICAgICAgICBvdXRsaW5lOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogYmNoIH19PlxuICAgICAgICAgICAgICA8VGl0bGVidXR0b25cbiAgICAgICAgICAgICAgICBiYXNlPXt1aV9yZWYuY3VycmVudH1cbiAgICAgICAgICAgICAgICB1aV9sb2FkZWQ9e3VpX2xvYWRlZH1cbiAgICAgICAgICAgICAgICBrZXlUcmlnZ2VyPXtrZXlUcmlnZ2VyfVxuICAgICAgICAgICAgICAgIG1heF93aWR0aD17d2luZG93LmlubmVyV2lkdGh9XG4gICAgICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdmb250IGdhbGxlcnk6JyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdFc2NhcGUnLFxuICAgICAgICAgICAgICAgICAgICBrZXlfbGFiZWw6ICdFc2MnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2V4aXQnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Z2FsbGVyeV9kYXRhLm1hcCgoZiwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogYmN3ICogMixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogYmNoLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9mb250LWxpYnJhcnkvJyArIGZ9IC8+XG4gICAgICAgICAgICAgICAgPFRpdGxlYnV0dG9uXG4gICAgICAgICAgICAgICAgICBiYXNlPXt1aV9yZWYuY3VycmVudH1cbiAgICAgICAgICAgICAgICAgIHVpX2xvYWRlZD17dWlfbG9hZGVkfVxuICAgICAgICAgICAgICAgICAga2V5VHJpZ2dlcj17a2V5VHJpZ2dlcn1cbiAgICAgICAgICAgICAgICAgIG1heF93aWR0aD17YWNvbHMgKiBjd31cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTogaG90a2V5X2xhYmVsc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICBrZXlfbGFiZWw6IGhvdGtleV9sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/faceoff/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.10e61c0a8261b4840a9b.hot-update.js.map