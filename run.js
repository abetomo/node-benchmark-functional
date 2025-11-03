const path = require('node:path')
const { execFileSync } = require('node:child_process')
const { readdirSync } = require('node:fs')

const benchmarkDir = path.join(__dirname, 'benchmarks')
for (const name of readdirSync(benchmarkDir)) {
  const file = path.join(benchmarkDir, name)
  console.log(`=== ${name} ===`)
  console.log(execFileSync('node', [file], { encoding: 'utf8' }))
}
