import React, {
  useState,
  useRef,
  createRef,
  useEffect,
  useReducer,
} from 'react'

let base_col = 12
let bcw = 8
let bch = 16

function layoutText(items, c, cw, ch) {
  let cols = Math.floor(c.width / cw)
  let layout = []
  let x = 0
  let y = 0

  function layoutContent(content) {
    let next = x + content.length
    if (next > cols) {
      x = 0
      y += 1
    }
    layout.push([content, x, y])
    x = x + content.length
  }

  function layoutButton(button) {
    let { key_label, label, key } = button
    let full_length = key_label.length + 0 + label.length
    let next = x + full_length
    if (next > cols) {
      x = 0
      y += 1
    }
    layout.push([
      key_label,
      x + 0.5,
      y,
      true,
      key,
      x,
      y,
      x + key_label.length + 1,
      y + 1,
    ])
    x = x + key_label.length + 1
    layout.push([label, x, y, false, key, x, y, x + label.length + 1, y + 1])
    x = x + label.length + 1
  }

  for (let item of items) {
    if (item.type === 'button') {
      layoutButton(item)
    } else {
      layoutContent(item.content)
    }
  }
  return layout
}

function textWriter(base, cx, cw, ch) {
  return function writeText(text, x, y, invert) {
    cx.globalCompositeOperation = 'source-over'
    cx.fillStyle = '#efefef'
    cx.fillRect(x * cw, 0, text.length * cw, ch)
    cx.globalCompositeOperation = 'darken'
    for (let i = x; i < x + text.length; i++) {
      let item = text[i - x]
      let key = item.charCodeAt(0) - 32
      if (key === -22) key = 1
      let sprite_x = key % base_col
      let sprite_y = Math.floor(key / base_col)
      if (invert) cx.filter = 'invert(1)'
      cx.drawImage(
        base,
        sprite_x * cw,
        sprite_y * ch,
        cw,
        ch,
        i * cw,
        y * ch,
        cw,
        ch
      )
      cx.filter = 'invert(0)'
    }
  }
}

let char_active = [
  { type: 'text', content: 'char mode:' },
  { type: 'button', key: 'h', key_label: 'h', label: 'left' },
  { type: 'button', key: 'j', key_label: 'j', label: 'down' },
  { type: 'button', key: 'k', key_label: 'k', label: 'up' },
  { type: 'button', key: 'l', key_label: 'l', label: 'right' },
  { type: 'button', key: 'd', key_label: 'd', label: 'draw' },
  { type: 'button', key: 'e', key_label: 'e', label: 'erase' },
  { type: 'button', key: 'Escape', key_label: 'esc', label: 'edit font' },
]
let text_active = [
  { type: 'text', content: 'text mode:' },
  { type: 'button', key: 'Escape', key_label: 'esc', label: 'edit font' },
]
let font_active = [
  { type: 'text', content: 'font mode:' },
  { type: 'button', key: 'h', key_label: 'h', label: 'left' },
  { type: 'button', key: 'j', key_label: 'j', label: 'down' },
  { type: 'button', key: 'k', key_label: 'k', label: 'up' },
  { type: 'button', key: 'l', key_label: 'l', label: 'right' },
  { type: 'button', key: 'Enter', key_label: 'enter', label: 'edit char' },
  { type: 'button', key: 't', key_label: 't', label: 'edit text' },
]

let actives = { font: font_active, text: text_active, char: char_active }

const Topstrip = ({ cw, ch, base, ui_loaded, mode, keyTrigger }) => {
  let cref = useRef(null)
  let [active, setActive] = useState(font_active)
  let layout_ref = useRef(null)

  useEffect(() => {
    let c = cref.current
    c.width = window.innerWidth

    let layout = layoutText(active, c, cw, ch)

    c.height = layout[layout.length - 1][2] * ch + ch
  }, [])

  useEffect(() => {
    setActive(actives[mode])
  }, [mode])

  useEffect(() => {
    if (ui_loaded) {
      let c = cref.current

      let layout = layoutText(active, c, cw, ch)

      c.height = layout[layout.length - 1][2] * ch + ch

      let cx = c.getContext('2d')
      let cols = Math.floor(c.width / cw)

      // cx.fillStyle = '#ddd'

      // cx.fillRect(0, 0, c.width, c.height)

      let writeText = textWriter(base, cx, cw, ch)
      layout_ref.current = []
      for (let item of layout) {
        let [text, x, y, clickable] = item
        layout_ref.current.push(item)
        cx.fillStyle = '#222'
        if (clickable) {
          cx.fillRect(x * cw - cw / 2, y * ch, text.length * cw + cw, ch)
        }
        writeText(...item)
      }
    }
  }, [ui_loaded, active])

  function checkClick(e) {
    let groups = layout_ref.current
    let filter = groups.filter(o => {
      return (
        o[5] * bcw <= e.clientX &&
        o[6] * bch <= e.clientY &&
        o[7] * bcw >= e.clientX &&
        o[8] * bch >= e.clientY
      )
    })
    if (filter.length > 0) {
      keyTrigger(filter[0][4])
    }
  }

  return <canvas onClick={checkClick} ref={cref} />
}

export default Topstrip
