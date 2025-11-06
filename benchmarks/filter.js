const n = 10_000
const data = Array.from({ length: 1000 }, (_, i) => i)

console.time('filter')
for (let t = 0; t < n; t++) {
  const result = data.filter((v) => v % 2 === 0)
}
console.timeEnd('filter')

console.time('for')
const length = data.length
for (let t = 0; t < n; t++) {
  const result = []
  for (let i = 0; i < length; i++) {
    if (data[i] % 2 === 0) {
      result.push(data[i])
    }
  }
}
console.timeEnd('for')
