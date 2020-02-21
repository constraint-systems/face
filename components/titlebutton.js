import React, {
  useState,
  useRef,
  createRef,
  useEffect,
  useReducer,
} from 'react'

let base_col = 12
let cw = 8
let ch = 16

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

const Titlebutton = ({ base, content, ui_loaded, keyTrigger, max_width }) => {
  let cref = useRef(null)
  let layout_ref = useRef(null)

  useEffect(() => {
    if (ui_loaded) {
      let c = cref.current
      c.width = max_width

      let layout = layoutText(content, c, cw, ch)

      c.height = layout[layout.length - 1][2] * ch + ch

      let cx = c.getContext('2d')
      let cols = Math.floor(c.width / cw)

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
  }, [ui_loaded])

  return <canvas ref={cref} />
}

export default Titlebutton
