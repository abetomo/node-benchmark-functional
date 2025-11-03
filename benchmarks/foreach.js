const n = 100
const data = Array.from({ length: 1000 }, (_, i) => i)

console.time('forEach')
for (let t = 0; t < n; t++) {
  data.forEach((v) => {
    v
    // do nothing
  })
}
console.timeEnd('forEach')

console.time('for-of')
for (let t = 0; t < n; t++) {
  for (const v of data) {
    v
    // do nothing
  }
}
console.timeEnd('for-of')

console.time('for-in')
for (let t = 0; t < n; t++) {
  for (const i in data) {
    data[i]
    // do nothing
  }
}
console.timeEnd('for-in')

console.time('for')
const length = data.length
for (let t = 0; t < n; t++) {
  for (let i = 0; i < length; i++) {
    data[i]
    // do nothing
  }
}
console.timeEnd('for')
