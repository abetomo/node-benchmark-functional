const n = 100
const data = Array.from({ length: 1000 }, (_, i) => i)

console.time('map')
for (let t = 0; t < n; t++) {
  const result = data.map((v) => v * 2)
}
console.timeEnd('map')

console.time('for')
const length = data.length
for (let t = 0; t < n; t++) {
  const result = []
  for (let i = 0; i < length; i++) {
    result.push(data[i] * 2)
  }
}
console.timeEnd('for')
