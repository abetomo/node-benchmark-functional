const n = 1_000_000

console.time('no reassignment IIFE')
for (let t = 0; t < n; t++) {
  const flag = (() => {
    if (t % 2 === 0) {
      return true
    }
    if (t % 7 === 0) {
      return true
    }
    return false
  })()
}
console.timeEnd('no reassignment IIFE')

console.time('no reassignment func call')
const checkValue = (num) => {
  if (num % 2 === 0) {
    return true
  }
  if (num % 7 === 0) {
    return true
  }
  return false
}
for (let t = 0; t < n; t++) {
  const flag = checkValue(t)
}
console.timeEnd('no reassignment func call')

console.time('reassignment')
for (let t = 0; t < n; t++) {
  let flag = false
  if (t % 2 === 0) {
    flag = true
  } else if (t % 7 === 0) {
    flag = true
  }
}
console.timeEnd('reassignment')

// Since it's Boolean, you could just assign it directly without using the ternary operator,
// but I want to benchmark the same processing, so the benchmark uses the ternary operator.
console.time('ternary operator')
for (let t = 0; t < n; t++) {
  const flag = t % 2 === 0 ? true : (t % 7 === 0 ? true : false)
}
console.timeEnd('ternary operator')
