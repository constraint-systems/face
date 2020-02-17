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
      return { text: text_layout, marker: new_marker }
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
      return { text: text_layout, marker: new_marker }
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

      return { text: state.text, marker: new_marker }
    }
    case 'set_marker': {
      return { text: state.text, marker: action.payload }
    }
    case 'set_end_marker': {
      return { text: state.text, marker: [state.marker[0], action.payload] }
    }
    case 'layout': {
      let text_layout = layoutText(
        action.col_num,
        state.text.map(o => o[0]).join('')
      )
      return { text: text_layout, marker: state.marker }
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
        return { text: state.text, marker: new_marker }
      }
      defaut: throw new Error()
  }
}

let short_text = `CHAPTER 1. Loomings.

Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.`

short_text = `You see people, and you're disconnected from them, they mean nothing to you, but other times you can invest everything in someone you don't even know, silently believe in them, it might be on the underground or in a shop or something. You hope people are doing that with you as well. Some people, even when they're quite young, and they're in difficulty, maybe taking a battering in their life, but they still handle themselves with grace. I hope most people can be like that, hold it together, I wanted this album to be for people in that situation.`

short_text = `Face lets you edit both the text and the font it is rendered in. In text mode you can type and edit text normally. Press escape to enter font mode, where you can select a character to edit. After navigating to a character, press enter to edit the character itself. Any changes to a character are visible immediately. Use the controls listed at the bottom to change zoom level, save the text as an image, and save or load a font. The base font used is a subset of GNU Unifont.`

let initialt = {
  text: layoutText(50, short_text),
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

  let [scale, setScale] = useState(2)
  let [cw, setCw] = useState(8 * 2)
  let [ch, setCh] = useState(16 * 2)
  let [col_num, setColNum] = useState(50)
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
  }

  // init
  useEffect(() => {
    if (
      (cw === 8 && ch === 16 && scale === 1) ||
      (cw === 16 && ch === 32 && scale === 2)
    ) {
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

      let $base = document.createElement('canvas')
      $base.width = acols * cw
      $base.height = arows * ch
      let $basex = $base.getContext('2d')
      $basex.imageSmoothingEnabled = false
      let base_img = document.createElement('img')
      base_img.onload = () => {
        $basex.fillStyle = 'white'
        $basex.fillRect(0, 0, $base.width, $base.height)
        $basex.drawImage(base_img, 0, 0, $base.width, $base.height)
        base_ref.current = $base

        let $ui = document.createElement('canvas')
        $ui.width = (acols * cw) / scale
        $ui.height = (arows * ch) / scale
        let $uix = $ui.getContext('2d')
        $uix.imageSmoothingEnabled = false
        $uix.drawImage(base_img, 0, 0, $ui.width, $ui.height)
        ui_ref.current = $ui

        function getXY(i) {
          return [i % acols, Math.floor(i / acols)]
        }

        let fl = flref.current
        let flx = fl.getContext('2d')
        let fl_content = 'font'
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
        let cl = clref.current
        let clx = cl.getContext('2d')
        let cl_content = 'char'
        clx.globalCompositeOperation = 'source-over'
        clx.fillStyle = '#efefef'
        clx.fillRect(0, 0, fl.width, fl.height)
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
        setCanvasLoaded(true)
      }
      base_img.src = base2
    }
  }, [refresh])

  useEffect(() => {
    setCanvasLoaded(false)
    setRefresh(prev => prev + 1)
  }, [cw, ch, scale])

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
  }, [mode, tstate.text, tstate.marker, amark, col_num])

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
    if (mode === 'font') {
      amx.fillRect(x * cw, y * ch, cw, ch)
    }
  }

  function drawAlphabet() {
    let a = aref.current
    let ax = a.getContext('2d')

    ax.clearRect(0, 0, a.width, a.height)
    ax.drawImage(base_ref.current, 0, 0)
  }

  function drawChar() {
    let cm = cmref.current
    let cmx = cm.getContext('2d')

    cmx.clearRect(0, 0, cm.width, cm.height)
    if (mode === 'char') {
      cmx.fillStyle = 'green'
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

    cx.strokeStyle = '#ddd'
    if (mode === 'char') {
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
    }

    function getXY(i) {
      return [i % acols, Math.floor(i / acols)]
    }
    let [sprite_x, sprite_y] = getXY(amark)
    cx.drawImage(
      base_ref.current,
      sprite_x * cw,
      sprite_y * ch,
      cw,
      ch,
      0,
      0,
      cw * magnify,
      ch * magnify
    )
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

    mx.fillStyle = 'white'
    mx.fillRect(cw / 2, 0, m.width - cw, m.height)

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
        mx.fillStyle = 'red'
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
        mx.fillStyle = 'red'
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

    let char = getLast(tstate.text, Math.max(...tstate.marker))
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
    let tl_content = 'text ' + col_num + 'x' + (char[2] + 1)
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

    tx.clearRect(0, 0, t.width, t.height)

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
        sprite_x * cw,
        sprite_y * ch,
        cw,
        ch,
        x * cw + cw,
        y * ch + ch / 2,
        cw,
        ch
      )
    }
  }

  function keyAction(key, event) {
    let km = km_ref.current

    let shift = event.shiftKey
    let ctrl = event.ctrlKey
    let meta = event.metaKey

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
        link.setAttribute('download', 'test.png')
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
    } else if (ctrl && key === 'd') {
      let link = document.createElement('a')

      let a = aref.current
      let temp = document.createElement('canvas')
      temp.width = a.width
      temp.height = a.height

      let tempx = temp.getContext('2d')
      tempx.drawImage(a, 0, 0)
      tempx.fillStyle = 'white'
      tempx.fillRect(a.width - cw, a.height - ch, cw, ch)

      console.log(temp.toDataURL())

      // temp.toBlob(function(blob) {
      //   link.setAttribute('download', 'font-test.png')
      //   link.setAttribute('href', URL.createObjectURL(blob))
      //   link.dispatchEvent(
      //     new MouseEvent(`click`, {
      //       bubbles: true,
      //       cancelable: true,
      //       view: window,
      //     })
      //   )
      // })
      event.preventDefault()
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

    if (mode === 'text') {
      if (ctrl && key === 'h') {
        let new_col = col_num - 1
        setColNum(new_col)
        tdispatch({ type: 'layout', col_num: new_col })
        event.preventDefault()
      } else if (ctrl && key === 'l') {
        let new_col = col_num + 1
        setColNum(new_col)
        tdispatch({ type: 'layout', col_num: new_col })
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
      bx.clearRect(
        sprite_x * cw + moved[0],
        sprite_y * ch + moved[1],
        scale,
        scale
      )
    } else {
      bx.fillRect(
        sprite_x * cw + moved[0],
        sprite_y * ch + moved[1],
        scale,
        scale
      )
    }

    drawAlphabet()
    drawChar()
    drawText()
  }

  function textDown(e) {
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
  }, [mode, col_num, tstate, amark, cmark])

  let scw = cw / scale
  let sch = ch / scale

  return (
    <div>
      <Head>
        <title>Faceoff</title>
      </Head>

      <Topstrip
        cw={scw}
        ch={sch}
        base={ui_ref.current}
        canvas_loaded={canvas_loaded}
        mode={mode}
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
          <div style={{ position: 'relative' }}>
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
          marginBottom: sch / 2,
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
              position: 'absolute',
              left: -cw / 2,
              top: 0,
            }}
            ref={mref}
          />
          <canvas
            style={{
              position: 'relative',
              outline: mode === 'text' ? 'solid 1px black' : 'none',
            }}
            onMouseDown={textDown}
            onMouseUp={textUp}
            onMouseMove={textMove}
            ref={tref}
          />
        </div>
      </div>

      <Bottomstrip
        cw={scw}
        ch={sch}
        base={ui_ref.current}
        canvas_loaded={canvas_loaded}
        mode={mode}
      />

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
          outline: solid 1px black;
        }
      `}</style>
    </div>
  )
}

export default Home
