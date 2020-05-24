import './scss/index.scss'

console.log('working')


async function start() {
  return await Promise.resolve('as')
}
start().then(console.log)