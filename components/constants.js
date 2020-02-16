export function layoutText(cols, text_string) {
  let array = []
  let x = 0
  let y = 0
  let lines = text_string.split('\n')
  let line_words = lines.map((l, i) => {
    let unbroke_words = l.split(' ')
    let words = []
    for (let i = 0; i < unbroke_words.length; i++) {
      let word = unbroke_words[i]
      if (word.length < cols) {
        words.push(word)
      } else {
        let broken = word.match(/.{1,cols}/g)
        words.push(...broken)
      }
    }
    return words.map(w => w.split(''))
  })
  let i = 0
  for (let l = 0; l < line_words.length; l++) {
    let line = line_words[l]
    for (let w = 0; w < line.length; w++) {
      let word = line[w]
      if (x + word.length > cols) {
        x = 0
        y++
      }
      for (let c = 0; c < word.length; c++) {
        array.push([word[c], x, y, i])
        x++
        i++
      }
      if (w !== line.length - 1) {
        array.push([' ', x, y, i])
        x++
        i++
      }
    }
    if (l !== line_words.length - 1) {
      array.push(['\n', x, y, i])
      x = 0
      y++
      i++
    }
  }

  return array
}

export let base =
  'data:image/png;base64,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'
