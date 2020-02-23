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
    cx.fillRect(x * cw, y * ch, text.length * cw, y * ch + ch)
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

let no_highlights = [
  { type: 'button', key: 'ctrl+h', key_label: 'ctrl+h', label: 'columns-1' },
  { type: 'button', key: 'ctrl+l', key_label: 'ctrl+l', label: 'columns+1' },
  { type: 'button', key: 'ctrl+1', key_label: 'ctrl+1', label: 'size/2' },
  {
    type: 'button',
    key: 'ctrl+s',
    key_label: 'ctrl+s',
    label: 'save text as image',
  },
  {
    type: 'button',
    key: 'ctrl+v',
    key_label: 'ctrl+v',
    label: 'view source',
  },
]

let with_highlights = [
  {
    type: 'button',
    key: 'ctrl+m',
    key_label: 'ctrl+m',
    label: 'highlights off',
  },
  { type: 'button', key: 'ctrl+1', key_label: 'ctrl+1', label: 'size/2' },
  { type: 'button', key: 'ctrl+d', key_label: 'ctrl+d', label: 'save font' },
  { type: 'button', key: 'ctrl+f', key_label: 'ctrl+f', label: 'load font' },
  { type: 'button', key: 'ctrl+g', key_label: 'ctrl+g', label: 'font gallery' },
  {
    type: 'button',
    key: 'ctrl+v',
    key_label: 'ctrl+v',
    label: 'view source',
  },
]

const Topstrip = ({
  cw,
  ch,
  base,
  ui_loaded,
  mode,
  highlight,
  scale,
  keyTrigger,
}) => {
  let cref = useRef(null)
  let [active, setActive] = useState(no_highlights)
  let layout_ref = useRef(null)

  useEffect(() => {
    let c = cref.current
    c.width = window.innerWidth

    let layout = layoutText(active, c, cw, ch)

    c.height = layout[layout.length - 1][2] * ch + ch
  }, [])

  useEffect(() => {
    if (mode === 'font' || mode === 'char') {
      let new_active = with_highlights.slice()
      if (!highlight) {
        new_active[0].label = 'highlights on'
      } else {
        new_active[0].label = 'highlights off'
      }
      if (scale == 1) {
        new_active[1].key_label = 'ctrl+2'
        new_active[1].label = 'size*2'
        new_active[1].key = 'ctrl+2'
      } else {
        new_active[1].key_label = 'ctrl+1'
        new_active[1].label = 'size/2'
        new_active[1].key = 'ctrl+1'
      }
      setActive(new_active)
    } else {
      let new_active = no_highlights.slice()
      if (scale == 1) {
        new_active[2].key_label = 'ctrl+2'
        new_active[2].label = 'size*2'
        new_active[2].key = 'ctrl+2'
      } else {
        new_active[2].key_label = 'ctrl+1'
        new_active[2].label = 'size/2'
        new_active[2].key = 'ctrl+1'
      }
      setActive(new_active)
    }
  }, [mode, highlight, scale])

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
        o[6] * bch <= e.clientY - e.target.offsetTop &&
        o[7] * bcw >= e.clientX &&
        o[8] * bch >= e.clientY - e.target.offsetTop
      )
    })
    if (filter.length > 0) {
      keyTrigger(filter[0][4])
    }
  }

  return (
    <canvas
      onClick={checkClick}
      ref={cref}
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
      }}
    />
  )
}

export default Topstrip
