import React, {
  useState,
  useRef,
  createRef,
  useEffect,
  useReducer,
} from 'react'
import Head from 'next/head'
import { base, base2, layoutText } from '../components/constants'
import Topstrip from '../components/topstrip'
import Bottomstrip from '../components/bottomstrip'
import Titlebutton from '../components/titlebutton'

let bcw = 8
let bch = 16

let hotkey_labels = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')

function getLast(text, index) {
  let char = text[index]
  if (char === undefined) {
    let last_char = text[index - 1]
    // if at start
    if (last_char === undefined) {
      char = [null, 0, 0]
    } else {
      char = last_char.slice()
      if (char[0] === '\n') {
        char[1] = 0
        char[2] += 1
      } else {
        char[1] += 1
      }
    }
  }
  return char
}

function tReducer(state, action) {
  function mc(newtext, mark) {
    return mark.map(v => Math.min(Math.max(0, v), newtext.length))
  }
  switch (action.type) {
    case 'insert': {
      let newkey = action.payload
      let text_string = state.text.map(o => o[0]).join('')
      let firsti = Math.min(...state.marker)
      let lasti = Math.max(...state.marker)
      let new_string =
        text_string.slice(0, Math.max(0, firsti)) +
        newkey +
        text_string.slice(lasti)
      let text_layout = layoutText(action.col_num, new_string)
      let new_marker = [firsti + newkey.length, firsti + newkey.length]
      return { text: text_layout, marker: mc(text_layout, new_marker) }
    }
    case 'backspace': {
      let text_string = state.text.map(o => o[0]).join('')
      let new_string, new_marker
      if (state.marker[0] === state.marker[1]) {
        new_string =
          text_string.slice(0, Math.max(0, state.marker[0] - 1)) +
          text_string.slice(state.marker[0])
        new_marker = [state.marker[0] - 1, state.marker[0] - 1]
      } else {
        let firsti = Math.min(...state.marker)
        let lasti = Math.max(...state.marker)
        new_string =
          text_string.slice(0, Math.max(0, firsti)) + text_string.slice(lasti)
        new_marker = [firsti, firsti]
      }
      let text_layout = layoutText(action.col_num, new_string)
      return { text: text_layout, marker: mc(text_layout, new_marker) }
    }
    case 'highlight': {
      let new_marker = state.marker
      if (action.payload[0] != 0) {
        new_marker = [state.marker[0], state.marker[1] + action.payload[0]]
      }
      if (action.payload[1] != 0) {
        let firsti = state.marker[1]
        let pos = getLast(state.text, firsti)
        if (action.payload[1] < 0) {
          if (pos[2] > 0) {
            let row_up = state.text.filter(o => o[2] === pos[2] - 1)
            let cc = row_up[pos[1]]
            if (cc === undefined) cc = row_up[row_up.length - 1]
            new_marker = [state.marker[0], cc[3]]
          }
        } else if (action.payload[1] > 0) {
          if (pos[2] < state.text[state.text.length - 1][2]) {
            let row_down = state.text.filter(o => o[2] === pos[2] + 1)
            let cc = row_down[pos[1]]
            if (cc === undefined) {
              cc = row_down[row_down.length - 1]
              if (cc[3] === state.text.length - 1) {
                cc[3] += 1
              }
            }
            new_marker = [state.marker[0], cc[3]]
          }
        }
      }

      return { text: state.text, marker: mc(state.text, new_marker) }
    }
    case 'set_marker': {
      return { text: state.text, marker: mc(state.text, action.payload) }
    }
    case 'set_end_marker': {
      return {
        text: state.text,
        marker: mc(state.text, [state.marker[0], action.payload]),
      }
    }
    case 'layout': {
      let text_layout = layoutText(
        action.col_num,
        state.text.map(o => o[0]).join('')
      )
      return { text: text_layout, marker: mc(text_layout, state.marker) }
    }
    case 'move_marker':
      {
        let new_marker = state.marker
        if (action.payload[0] != 0) {
          new_marker = [
            state.marker[0] + action.payload[0],
            state.marker[0] + action.payload[0],
          ]
        }
        if (action.payload[1] != 0) {
          let firsti = Math.min(...state.marker)
          let pos = getLast(state.text, firsti)
          if (action.payload[1] < 0) {
            if (pos[2] > 0) {
              let row_up = state.text.filter(o => o[2] === pos[2] - 1)
              let cc = row_up[pos[1]]
              if (cc === undefined) cc = row_up[row_up.length - 1]
              new_marker = [cc[3], cc[3]]
            }
          } else if (action.payload[1] > 0) {
            if (pos[2] < state.text[state.text.length - 1][2]) {
              let row_down = state.text.filter(o => o[2] === pos[2] + 1)
              let cc = row_down[pos[1]]
              if (cc === undefined) {
                cc = row_down[row_down.length - 1]
                if (cc[3] === state.text.length - 1) {
                  cc[3] += 1
                }
              }
              new_marker = [cc[3], cc[3]]
            }
          }
        }
        return { text: state.text, marker: mc(state.text, new_marker) }
      }
      defaut: throw new Error()
  }
}

let short_text = `CHAPTER 1. Loomings.

Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.`

short_text = `You see people, and you're disconnected from them, they mean nothing to you, but other times you can invest everything in someone you don't even know, silently believe in them, it might be on the underground or in a shop or something. You hope people are doing that with you as well. Some people, even when they're quite young, and they're in difficulty, maybe taking a battering in their life, but they still handle themselves with grace. I hope most people can be like that, hold it together, I wanted this album to be for people in that situation.`

short_text = `Face lets you edit both the text and the font it is rendered in. In text mode you can type and edit text normally. Press escape to enter font mode, where you can select a character to edit. Any changes to a character are visible immediately.

Additional controls are shown at the bottom. You can change the text area and save it as an image in text mode. In font mode, you can save the font, load a font (fonts are just a sprite sheet image), or choose a font from the font gallery.

The base font used is a subset of GNU Unifont.`

let initialt = {
  text: layoutText(40, short_text),
  marker: [short_text.length, short_text.length],
}

let acel_num = 95
let acols = 12
let arows = Math.ceil(acel_num / acols)

let magnify = 8

const Home = () => {
  let [mode, setMode] = useState('text')

  let mref = useRef(null)
  let tref = useRef(null)

  let aref = useRef(null)
  let amref = useRef(null)

  let cref = useRef(null)
  let cmref = useRef(null)

  let [canvas_loaded, setCanvasLoaded] = useState(false)
  let [ui_loaded, setUILoaded] = useState(false)

  let [scale, setScale] = useState(2)
  let [cw, setCw] = useState(8 * 2)
  let [ch, setCh] = useState(16 * 2)
  let [col_num, setColNum] = useState(40)
  let [row_num, setRowNum] = useState(14)

  let [amark, setAmark] = useState(0)

  let [cmark, setCmark] = useState([0, 0])

  let base_ref = useRef(null)
  let ui_ref = useRef(null)
  let km_ref = useRef({})

  let flref = useRef(null)
  let clref = useRef(null)
  let tlref = useRef(null)

  let [textClicked, setTextClicked] = useState(false)

  let [tstate, tdispatch] = useReducer(tReducer, initialt)

  let [refresh, setRefresh] = useState(0)

  let [highlight, setHighlight] = useState(true)

  let [loaded, setLoaded] = useState(base2)

  let [gallery_data, setGalleryData] = useState(null)
  let [show_gallery, setShowGallery] = useState(false)

  useEffect(() => {
    fetch('/library.json')
      .then(data => data.json())
      .then(json => {
        setGalleryData(json)
      })
  }, [])

  function loadImage(src) {
    let base = base_ref.current
    let basex = base.getContext('2d')
    let base_img = document.createElement('img')
    base_img.onload = () => {
      basex.clearRect(0, 0, base.width, base.height)
      basex.fillStyle = 'white'
      basex.fillRect(0, 0, base.width, base.height)
      basex.drawImage(base_img, 0, 0, base.width, base.height)
      drawAlphabet()
      drawText()
      drawChar()
    }
    base_img.src = src
    setLoaded(src)
  }

  function setSizes() {
    // text
    let t = tref.current
    t.width = cw * (col_num + 2)
    t.height = ch * (row_num + 1)

    // text marker
    let m = mref.current
    m.width = cw * (col_num + 3)
    m.height = ch * (row_num + 1)

    // alphabet
    let a = aref.current
    a.width = cw * acols
    a.height = ch * arows

    // alphabet marker
    let am = amref.current
    am.width = cw * acols
    am.height = ch * arows

    // character
    let c = cref.current
    c.width = cw * magnify
    c.height = ch * magnify

    // character marker
    let cm = cmref.current
    cm.width = c.width
    cm.height = c.height
  }

  // init
  useEffect(() => {
    if (
      (cw === 8 && ch === 16 && scale === 1) ||
      (cw === 16 && ch === 32 && scale === 2)
    ) {
      setSizes()

      let $base = document.createElement('canvas')
      $base.width = acols * (cw / scale)
      $base.height = arows * (ch / scale)
      let $basex = $base.getContext('2d')
      $basex.imageSmoothingEnabled = false
      let base_img = document.createElement('img')
      base_img.onload = () => {
        $basex.fillStyle = 'white'
        $basex.fillRect(0, 0, $base.width, $base.height)
        $basex.drawImage(base_img, 0, 0, $base.width, $base.height)
        base_ref.current = $base

        setCanvasLoaded(true)
      }
      base_img.src = loaded

      let ui_img = document.createElement('img')
      ui_img.onload = () => {
        let $ui = document.createElement('canvas')
        $ui.width = (acols * cw) / scale
        $ui.height = (arows * ch) / scale
        let $uix = $ui.getContext('2d')
        $uix.imageSmoothingEnabled = false
        $uix.drawImage(ui_img, 0, 0, $ui.width, $ui.height)
        ui_ref.current = $ui

        setUILoaded(true)
      }
      ui_img.src = base2
    }
  }, [])

  useEffect(() => {
    if (canvas_loaded) {
      setSizes()
      drawMarker()
      drawText()
      drawAlphabet()
      drawAlphabetMarker()
      drawChar()
    }
  }, [cw, ch, scale, canvas_loaded])

  // init after canvas loaded
  useEffect(() => {
    if (canvas_loaded) {
      drawMarker()
      drawText()
      drawAlphabet()
      drawAlphabetMarker()
      drawChar()
    }
  }, [canvas_loaded])

  useEffect(() => {
    if (canvas_loaded) {
      drawMarker()
      drawAlphabetMarker()
    }
  }, [mode, tstate.text, tstate.marker, amark, col_num, highlight])

  useEffect(() => {
    if (canvas_loaded) {
      drawChar()
    }
  }, [mode, amark, cmark])

  useEffect(() => {
    if (canvas_loaded) {
      drawText()
    }
  }, [tstate.text, col_num])

  function drawAlphabetMarker() {
    let am = amref.current
    let amx = am.getContext('2d')

    amx.clearRect(0, 0, am.width, am.height)

    // amx.fillStyle = 'black'
    // amx.fillRect(0, 0, am.width, am.height)

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)]
    }
    let [x, y] = getXY(amark)
    amx.fillStyle = '#fff'
    amx.lineWidth = scale

    let fl = flref.current
    fl.width = 'font:-'.length * bcw
    let flx = fl.getContext('2d')
    let fl_content = 'font '
    flx.globalCompositeOperation = 'source-over'
    flx.fillStyle = '#efefef'
    flx.fillRect(0, 0, fl.width, fl.height)
    flx.globalCompositeOperation = 'darken'
    for (let i = 0; i < fl_content.length; i++) {
      let key = fl_content.charCodeAt(i) - 32
      if (key === -22) key = 94
      let [sprite_x, sprite_y] = getXY(key)
      flx.drawImage(
        ui_ref.current,
        sprite_x * (cw / scale),
        sprite_y * (ch / scale),
        cw / scale,
        ch / scale,
        i * (cw / scale),
        0 * (ch / scale),
        cw / scale,
        ch / scale
      )
    }

    if (mode === 'font') {
      amx.fillRect(x * cw, y * ch, cw, ch)
      function getXY(i) {
        return [i % acols, Math.floor(i / acols)]
      }
      let key = ':'.charCodeAt(0) - 32
      let [sprite_x, sprite_y] = getXY(key)
      flx.drawImage(
        ui_ref.current,
        sprite_x * bcw,
        sprite_y * bch,
        bcw,
        bch,
        (fl_content.length - 1) * bcw,
        0 * bch,
        bcw,
        bch
      )
      flx.drawImage(
        ui_ref.current,
        x * bcw,
        y * bch,
        bcw,
        bch,
        fl_content.length * bcw,
        0 * bch,
        bcw,
        bch
      )
    }
  }

  function drawAlphabet() {
    let a = aref.current
    let ax = a.getContext('2d')
    ax.imageSmoothingEnabled = false

    ax.clearRect(0, 0, a.width, a.height)
    ax.drawImage(base_ref.current, 0, 0, a.width, a.height)
  }

  function drawChar() {
    let cm = cmref.current
    let cmx = cm.getContext('2d')

    cmx.clearRect(0, 0, cm.width, cm.height)
    if (mode === 'char') {
      cmx.fillStyle = 'magenta'
      cmx.fillRect(
        cmark[0] * magnify,
        cmark[1] * magnify,
        magnify * scale,
        magnify * scale
      )
    }

    let c = cref.current
    let cx = c.getContext('2d')

    cx.fillStyle = 'white'
    cx.fillRect(0, 0, c.width, c.height)
    cx.imageSmoothingEnabled = false

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)]
    }
    let [sprite_x, sprite_y] = getXY(amark)
    cx.drawImage(
      base_ref.current,
      sprite_x * bcw,
      sprite_y * bch,
      bcw,
      bch,
      0,
      0,
      cw * magnify,
      ch * magnify
    )

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)]
    }
    let cl = clref.current
    cl.width = 'char:t'.length * bcw
    let clx = cl.getContext('2d')
    let cl_content = 'char '
    clx.globalCompositeOperation = 'source-over'
    clx.fillStyle = '#efefef'
    clx.fillRect(0, 0, cl.width, cl.height)
    clx.globalCompositeOperation = 'darken'
    for (let i = 0; i < cl_content.length; i++) {
      let key = cl_content.charCodeAt(i) - 32
      if (key === -22) key = 94
      let [sprite_x, sprite_y] = getXY(key)
      clx.drawImage(
        ui_ref.current,
        sprite_x * (cw / scale),
        sprite_y * (ch / scale),
        cw / scale,
        ch / scale,
        i * (cw / scale),
        0 * (ch / scale),
        cw / scale,
        ch / scale
      )
    }

    if (mode === 'char') {
      cx.strokeStyle = '#ddd'
      for (let r = 0; r < ch; r += scale) {
        for (let c = 0; c < cw; c += scale) {
          cx.strokeRect(
            c * magnify,
            r * magnify,
            magnify * scale,
            magnify * scale
          )
        }
      }

      function getXY(i) {
        return [i % acols, Math.floor(i / acols)]
      }
      let key = ':'.charCodeAt(0) - 32
      let [a_x, a_y] = getXY(key)
      clx.drawImage(
        ui_ref.current,
        a_x * bcw,
        a_y * bch,
        bcw,
        bch,
        (cl_content.length - 1) * bcw,
        0 * bch,
        bcw,
        bch
      )
      clx.drawImage(
        ui_ref.current,
        sprite_x * bcw,
        sprite_y * bch,
        bcw,
        bch,
        cl_content.length * bcw,
        0 * bch,
        bcw,
        bch
      )
    }
  }

  function drawMarker() {
    let m = mref.current

    let mx = m.getContext('2d')

    let char = getLast(
      tstate.text,
      Math.max(...tstate.marker, tstate.text.length - 1)
    )

    m.width = cw * (col_num + 3)
    m.height = char[2] * ch + ch + ch
    mx.clearRect(0, 0, m.width, m.height)

    if (mode != 'text' && highlight) {
      for (let i = 0; i < tstate.text.length; i++) {
        let char = tstate.text[i]
        let akey
        if (amark === 94) {
          akey = String.fromCharCode(32 - 22)
        } else {
          akey = String.fromCharCode(amark + 32)
        }
        if (char[0] === akey) {
          mx.fillStyle = '#222'
          mx.fillRect(char[1] * cw + cw + cw / 2, char[2] * ch + ch / 2, cw, ch)
        }
      }
    }

    if (mode === 'text') {
      function getXy(mark) {
        let char = getLast(tstate.text, mark)
        let x = char[1]
        let y = char[2]
        return [x, y]
      }

      if (tstate.marker[0] === tstate.marker[1]) {
        // cursor
        let [x, y] = getXy(tstate.marker[0])
        mx.fillStyle = 'green'
        mx.fillRect(
          x * cw + cw + cw / 2 - scale,
          y * ch + ch / 2,
          scale * 2,
          ch
        )
      } else {
        // highlight
        let firsti = Math.min(...tstate.marker)
        let lasti = Math.max(...tstate.marker)
        let [x0, y0] = getXy(firsti)
        let [x1, y1] = getXy(lasti)
        mx.fillStyle = 'green'
        // same row
        if (y0 === y1) {
          mx.fillRect(
            x0 * cw + cw + cw / 2,
            y0 * ch + ch / 2,
            (x1 - x0) * cw,
            ch
          )
        } else {
          // first_row
          let frow = tstate.text.filter(o => o[2] === y0)
          let last_frow = frow[frow.length - 1]
          mx.fillRect(
            x0 * cw + cw + cw / 2,
            y0 * ch + ch / 2,
            (last_frow[1] - x0 + 1) * cw,
            ch
          )

          if (y1 - y0 > 1) {
            for (let i = y0 + 1; i < y1; i++) {
              let row = tstate.text.filter(o => o[2] === i)
              mx.fillRect(
                0 * cw + cw + cw / 2,
                i * ch + ch / 2,
                (row[row.length - 1][1] + 1) * cw,
                ch
              )
            }
          }

          // last_row
          let lrow = tstate.text.filter(o => o[2] === y1)
          let last_lrow = lrow[lrow.length - 1]
          mx.fillRect(0 * cw + cw + cw / 2, y1 * ch + ch / 2, x1 * cw, ch)
        }
      }
    }
  }

  function drawText() {
    let t = tref.current
    let tx = t.getContext('2d')
    let text = tstate.text

    let char = getLast(
      tstate.text,
      Math.max(Math.max(...tstate.marker), tstate.text.length)
    )
    t.width = cw * (col_num + 2)
    t.height = char[2] * ch + ch + ch

    // text label
    function getXY(i) {
      return [i % acols, Math.floor(i / acols)]
    }
    let tl = tlref.current
    let tlx = tl.getContext('2d')
    tlx.clearRect(0, 0, tl.width, tl.height)
    tlx.globalCompositeOperation = 'source-over'
    tlx.fillStyle = '#efefef'
    tlx.fillRect(0, 0, tl.width, tl.height)
    tlx.globalCompositeOperation = 'darken'
    let tl_content = 'text:' + col_num + 'x' + (char[2] + 1)
    for (let i = 0; i < tl_content.length; i++) {
      let key = tl_content.charCodeAt(i) - 32
      if (key === -22) key = 94
      let [sprite_x, sprite_y] = getXY(key)
      tlx.drawImage(
        ui_ref.current,
        sprite_x * (cw / scale),
        sprite_y * (ch / scale),
        cw / scale,
        ch / scale,
        i * (cw / scale),
        0 * (ch / scale),
        cw / scale,
        ch / scale
      )
    }

    tx.fillStyle = 'white'
    tx.fillRect(0, 0, t.width, t.height)
    tx.imageSmoothingEnabled = false

    for (let i = 0; i < text.length; i++) {
      let item = text[i]
      let x = item[1]
      let y = item[2]
      let key = item[0].charCodeAt(0) - 32
      if (key === -22) key = 94
      let sprite_x = key % acols
      let sprite_y = Math.floor(key / acols)
      tx.drawImage(
        base_ref.current,
        sprite_x * bcw,
        sprite_y * bch,
        bcw,
        bch,
        x * cw + cw,
        y * ch + ch / 2,
        cw,
        ch
      )
    }
  }

  function keyTrigger(keystring) {
    let shift = false
    let ctrl = false
    let meta = false

    if (keystring.indexOf('ctrl') > -1) {
      ctrl = true
      keystring = keystring.split('+')[1]
    }

    km_ref.current[keystring] = true
    keyAction(keystring, {
      shiftKey: shift,
      ctrlKey: ctrl,
      meta: meta,
      preventDefault: function() {},
    })
    setTimeout(() => {
      km_ref.current[keystring] = false
    }, 0)
  }

  function keyAction(key, event) {
    let km = km_ref.current

    let shift = event.shiftKey
    let ctrl = event.ctrlKey
    let meta = event.metaKey

    // show gallery overrides everything else
    if (show_gallery) {
      if (key === 'Escape') {
        setShowGallery(prev => !prev)
      } else {
        for (let i = 0; i < hotkey_labels.length; i++) {
          let check_key = hotkey_labels[i]
          if (key === check_key) {
            let src = gallery_data[hotkey_labels.indexOf(key)]
            setShowGallery(false)
            loadImage('/font-library/' + src)
          }
        }
      }
      return
    }

    // size change can be done in any mode
    if (ctrl && key == 1) {
      setScale(1)
      setCw(8)
      setCh(16)
      event.preventDefault()
    } else if (ctrl && key == 2) {
      setScale(2)
      setCw(16)
      setCh(32)
      event.preventDefault()
    } else if (ctrl && key == 'v') {
      location.href = 'https://github.com/constraint-systems/face'
      event.preventDefault()
    }

    if (mode === 'text') {
      if (ctrl && key === 'a') {
        tdispatch({ type: 'set_marker', payload: [0, tstate.text.length] })
      } else if (ctrl && key === 'h') {
        let new_col = col_num - 1
        setColNum(new_col)
        tdispatch({ type: 'layout', col_num: new_col })
        event.preventDefault()
      } else if (ctrl && key === 'l') {
        let new_col = col_num + 1
        setColNum(new_col)
        tdispatch({ type: 'layout', col_num: new_col })
        event.preventDefault()
      } else if (ctrl && key === 's') {
        let link = document.createElement('a')

        let t = tref.current
        let temp = document.createElement('canvas')
        temp.width = t.width
        temp.height = t.height

        let tempx = temp.getContext('2d')
        tempx.fillStyle = 'white'
        tempx.fillRect(0, 0, t.width, t.height)
        tempx.drawImage(t, 0, 0)

        temp.toBlob(function(blob) {
          link.setAttribute(
            'download',
            'face-text-' +
              new Date()
                .toISOString()
                .slice(0, -4)
                .replace(/-/g, '')
                .replace(/:/g, '')
                .replace(/_/g, '')
                .replace(/\./g, '') +
              'Z' +
              '.png'
          )

          link.setAttribute('href', URL.createObjectURL(blob))
          link.dispatchEvent(
            new MouseEvent(`click`, {
              bubbles: true,
              cancelable: true,
              view: window,
            })
          )
        })
        event.preventDefault()
      }
    } else {
      if (ctrl && key == 'm') {
        setHighlight(prev => !prev)
        event.preventDefault()
      } else if (ctrl && key === 'g') {
        setShowGallery(prev => !prev)
        event.preventDefault()
      } else if (ctrl && key === 'd') {
        // font download
        let link = document.createElement('a')

        // always save font at 2x

        let a = aref.current
        let temp = document.createElement('canvas')
        temp.width = bcw * acols * 2
        temp.height = bch * arows * 2

        let tempx = temp.getContext('2d')
        tempx.imageSmoothingEnabled = false
        tempx.drawImage(a, 0, 0, temp.width, temp.height)

        temp.toBlob(function(blob) {
          link.setAttribute(
            'download',
            'face-font-' +
              new Date()
                .toISOString()
                .slice(0, -4)
                .replace(/-/g, '')
                .replace(/:/g, '')
                .replace(/_/g, '')
                .replace(/\./g, '') +
              'Z' +
              '.png'
          )
          link.setAttribute('href', URL.createObjectURL(blob))
          link.dispatchEvent(
            new MouseEvent(`click`, {
              bubbles: true,
              cancelable: true,
              view: window,
            })
          )
        })
      } else if (ctrl && key === 'f') {
        let input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        )
        function handleChange(e) {
          for (let item of this.files) {
            if (item.type.indexOf('image') < 0) {
              continue
            }
            let src = URL.createObjectURL(item)
            loadImage(src)
          }
          this.removeEventListener('change', handleChange)
        }
        input.addEventListener('change', handleChange)
        event.preventDefault()
      }
    }

    // shift = true
    if (!ctrl && !meta) {
      if (mode === 'text') {
        if (key === 'Escape') {
          setMode('font')
        } else if (key === 'Backspace') {
          tdispatch({ type: 'backspace', col_num: col_num })
        } else if (key === 'ArrowLeft') {
          if (shift) {
            tdispatch({ type: 'highlight', payload: [-1, 0] })
          } else {
            tdispatch({ type: 'move_marker', payload: [-1, 0] })
          }
        } else if (key === 'ArrowRight') {
          if (shift) {
            tdispatch({ type: 'highlight', payload: [+1, 0] })
          } else {
            tdispatch({ type: 'move_marker', payload: [+1, 0] })
          }
        } else if (key === 'ArrowUp') {
          if (shift) {
            tdispatch({ type: 'highlight', payload: [0, -1] })
          } else {
            tdispatch({ type: 'move_marker', payload: [0, -1] })
          }
        } else if (key === 'ArrowDown') {
          if (shift) {
            tdispatch({ type: 'highlight', payload: [0, +1] })
          } else {
            tdispatch({ type: 'move_marker', payload: [0, +1] })
          }
        } else {
          if (key.length === 1) {
            tdispatch({ type: 'insert', col_num: col_num, payload: key })
            if (key === ' ') event.preventDefault()
          } else if (key === 'Enter') {
            tdispatch({ type: 'insert', col_num: col_num, payload: '\n' })
          }
        }
      } else if (mode === 'font') {
        if (key === 'Enter') {
          setMode('char')
        } else if (key === 't') {
          setMode('text')
        }
        if (km['l']) {
          let new_amark = amark + 1
          if (new_amark > acel_num - 1) new_amark = acel_num - 1
          setAmark(new_amark)
        }
        if (km['h']) {
          let new_amark = amark - 1
          if (new_amark < 0) new_amark = 0
          setAmark(new_amark)
        }
        if (km['j'] || km['k']) {
          let layout = [...Array(acel_num)].map((n, i) => [
            i,
            i % acols,
            Math.floor(i / acols),
          ])
          let cell = layout[amark]
          if (km['k']) {
            let next = cell[2] - 1
            if (next >= 0) {
              let up_row = layout.filter(c => c[2] === next)
              let new_amark = up_row[cell[1]]
              if (new_amark === undefined) up_row[up_row.length - 1]
              setAmark(new_amark[0])
            }
          }
          if (km['j']) {
            let next = cell[2] + 1
            if (next <= layout[layout.length - 1][2]) {
              let dn_row = layout.filter(c => c[2] === next)
              let new_amark = dn_row[cell[1]]
              if (new_amark === undefined) new_amark = dn_row[dn_row.length - 1]
              setAmark(new_amark[0])
            }
          }
        }
      } else if (mode === 'char') {
        if (key === 'Escape') {
          setMode('font')
        }
        let movement = [0, 0]
        if (km.j) {
          movement[1] += 1 * scale
        }
        if (km.k) {
          movement[1] -= 1 * scale
        }
        if (km.h) {
          movement[0] -= 1 * scale
        }
        if (km.l) {
          movement[0] += 1 * scale
        }

        let moved = [cmark[0] + movement[0], cmark[1] + movement[1]]
        if (moved[0] < 0) moved[0] = 0
        if (moved[0] > cw - scale) moved[0] = cw - scale
        if (moved[1] < 0) moved[1] = 0
        if (moved[1] > ch - scale) moved[1] = ch - scale
        setCmark(moved)

        // might want to move this into draw marker - there can be a delay
        if (km.d) {
          editChar('black', moved)
        } else if (km.e) {
          editChar('white', moved)
        }
      }
    }
  }

  function editChar(fill, moved) {
    let b = base_ref.current
    let bx = b.getContext('2d')
    let key = amark
    let sprite_x = key % acols
    let sprite_y = Math.floor(key / acols)
    if (fill === 'white') {
      bx.fillStyle = 'white'
      bx.fillRect(
        sprite_x * bcw + moved[0] / scale,
        sprite_y * bch + moved[1] / scale,
        1,
        1
      )
    } else {
      bx.fillStyle = 'black'
      bx.fillRect(
        sprite_x * bcw + moved[0] / scale,
        sprite_y * bch + moved[1] / scale,
        1,
        1
      )
    }

    drawAlphabet()
    drawChar()
    drawText()
  }

  function textDown(e) {
    setMode('text')

    let rect = e.target.getBoundingClientRect()
    let rawx = e.clientX - rect.left - cw
    let rawy = e.clientY - rect.top
    let rowtarg = Math.floor(rawy / ch)
    let coltarg = Math.round(rawx / cw)
    let index
    let in_row = tstate.text.filter(e => e[2] === rowtarg)
    if (in_row.length === 0) {
      index = tstate.text.length
    } else {
      let char = in_row[coltarg]
      if (char === undefined) {
        char = in_row[in_row.length - 1]
      }
      index = char[3]
    }
    tdispatch({ type: 'set_marker', payload: [index, index] })
    setTextClicked(true)
  }

  function textMove(e) {
    if (textClicked) {
      let rect = e.target.getBoundingClientRect()
      let rawx = e.clientX - rect.left - cw
      let rawy = e.clientY - rect.top
      let rowtarg = Math.floor(rawy / ch)
      let coltarg = Math.round(rawx / cw)
      let index
      let in_row = tstate.text.filter(e => e[2] === rowtarg)
      if (in_row.length === 0) {
        index = tstate.text.length
      } else {
        let char = in_row[coltarg]
        if (char === undefined) {
          char = in_row[in_row.length - 1]
        }
        index = char[3]
      }
      tdispatch({ type: 'set_end_marker', payload: index })
    }
  }

  function textUp(e) {
    let rect = e.target.getBoundingClientRect()
    let rawx = e.clientX - rect.left - cw
    let rawy = e.clientY - rect.top
    let rowtarg = Math.floor(rawy / ch)
    let coltarg = Math.round(rawx / cw)
    let index
    let in_row = tstate.text.filter(e => e[2] === rowtarg)
    if (in_row.length === 0) {
      index = tstate.text.length
    } else {
      let char = in_row[coltarg]
      if (char === undefined) {
        char = in_row[in_row.length - 1]
      }
      index = char[3]
    }
    tdispatch({ type: 'set_end_marker', payload: index })
    setTextClicked(false)
  }

  function copyHandler(e) {
    let string = tstate.text.map(o => o[0]).join('')
    let firsti = Math.min(...tstate.marker)
    let lasti = Math.max(...tstate.marker)
    let select = string.substr(firsti, lasti)
    e.clipboardData.setData('text/plain', select)
    event.preventDefault()
  }

  function cutHandler(e) {
    let string = tstate.text.map(o => o[0]).join('')
    let firsti = Math.min(...tstate.marker)
    let lasti = Math.max(...tstate.marker)
    let select = string.substr(firsti, lasti)
    e.clipboardData.setData('text/plain', select)
    tdispatch({ type: 'insert', col_num: col_num, payload: '' })
    event.preventDefault()
  }

  function pasteHandler(e) {
    let paste = (event.clipboardData || window.clipboardData).getData('text')
    tdispatch({ type: 'insert', col_num: col_num, payload: paste })
    event.preventDefault()
  }

  function downHandler(e) {
    km_ref.current[e.key] = true
    keyAction(e.key, e)
  }
  function upHandler(e) {
    km_ref.current[e.key] = false
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    window.addEventListener('copy', copyHandler)
    window.addEventListener('cut', cutHandler)
    window.addEventListener('paste', pasteHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
      window.removeEventListener('copy', copyHandler)
      window.removeEventListener('cut', cutHandler)
      window.removeEventListener('paste', pasteHandler)
    }
  }, [mode, col_num, tstate, amark, cmark, show_gallery])

  let scw = cw / scale
  let sch = ch / scale

  let title = 'Face'
  let description =
    'Face lets you edit both the text and the font it is rendered in.'

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>Face</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://face.constraint.systems/face.png"
        />
        <meta property="og:url" content="https://face.constraint.systems" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Topstrip
        cw={scw}
        ch={sch}
        scale={scale}
        base={ui_ref.current}
        ui_loaded={ui_loaded}
        mode={mode}
        keyTrigger={keyTrigger}
      />

      <div
        style={{ display: 'flex', marginTop: sch / 2, marginBottom: sch / 2 }}
      >
        <div
          style={{
            position: 'relative',
            marginRight: cw,
          }}
        >
          <canvas width={'font'.length * scw} height={sch} ref={flref} />
          <div
            onMouseDown={() => {
              setMode('font')
            }}
            style={{ position: 'relative' }}
          >
            <canvas
              ref={aref}
              style={{
                position: 'relative',
                outline: mode === 'font' ? 'solid 1px black' : 'none',
              }}
            />
            <canvas
              style={{
                position: 'absolute',
                mixBlendMode: 'difference',
                left: 0,
                top: 0,
              }}
              ref={amref}
            />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <canvas
              width={'char'.length * scw}
              height={ch / scale}
              ref={clref}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <canvas
              ref={cref}
              style={{
                position: 'relative',
                outline: mode === 'char' ? 'solid 1px black' : 'none',
              }}
            />
            <canvas
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
              }}
              ref={cmref}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          marginBottom: sch * 2,
        }}
      >
        <div style={{ position: 'relative' }}>
          <canvas
            width={('text 100x100'.length * cw) / scale}
            height={sch}
            ref={tlref}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <canvas
            style={{
              position: 'relative',
              outline: mode === 'text' ? 'solid 1px black' : 'none',
            }}
            ref={tref}
          />
          <canvas
            style={{
              mixBlendMode: 'difference',
              position: 'absolute',
              left: -cw / 2,
              top: 0,
            }}
            onMouseDown={textDown}
            onMouseUp={textUp}
            onMouseMove={textMove}
            ref={mref}
          />
        </div>
      </div>

      <Bottomstrip
        cw={bcw}
        ch={bch}
        base={ui_ref.current}
        scale={scale}
        ui_loaded={ui_loaded}
        highlight={highlight}
        mode={mode}
        keyTrigger={keyTrigger}
      />

      {show_gallery ? (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'auto',
            background: 'rgba(220,220,220,0.8)',
          }}
        >
          <div
            style={{
              background: '#efefef',
              outline: 'solid 1px black',
              overflow: 'hidden',
            }}
          >
            <div style={{ marginBottom: bch }}>
              <Titlebutton
                base={ui_ref.current}
                ui_loaded={ui_loaded}
                keyTrigger={keyTrigger}
                max_width={window.innerWidth}
                content={[
                  {
                    type: 'text',
                    content: 'font gallery:',
                  },
                  {
                    type: 'button',
                    key: 'Escape',
                    key_label: 'Esc',
                    label: 'exit',
                  },
                ]}
              />
            </div>
            {gallery_data.map((f, i) => (
              <div
                style={{
                  float: 'left',
                  marginRight: bcw * 2,
                  marginBottom: bch,
                }}
              >
                <img src={'/font-library/' + f} />
                <Titlebutton
                  base={ui_ref.current}
                  ui_loaded={ui_loaded}
                  keyTrigger={keyTrigger}
                  max_width={acols * cw}
                  content={[
                    {
                      type: 'button',
                      key: hotkey_labels[i],
                      key_label: hotkey_labels[i],
                      label: f,
                    },
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <style global jsx>{`
        html {
          background: #efefef;
          line-height: 0;
        }
        body {
          padding: 0;
          margin: 0;
        }
        img {
          display: block;
        }
      `}</style>
    </div>
  )
}

export default Home
