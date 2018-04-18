'use strict'

const ejs = require('ejs')
const fs = require('fs')

module.exports = async function csvTemplate(params) {
  try {
    let template = await readCSV(params.template)
    let result = await render(template, params.data)
    await writeCSV(params.output, result)
    return true
  } catch (err) {
    console.error(`An error occured: ${err}`)
    return false
  }
}

let readCSV = async function(path) {
  return fs.readFileSync(path).toString('utf8')
}

let writeCSV = async function(path, data) {
  return fs.writeFileSync(path, data)
}

let render = async function(template, data) {
  return ejs.render(template, data)
}