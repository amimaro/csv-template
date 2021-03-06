'use strict'

const mustache = require('mustache')
const fs = require('fs')

module.exports = async function csvTemplate(params) {
  try {
    let template = await readCSV(params.template)
    let result = await render(unescapeQuotes(template), params.data)
    await writeCSV(params.output, result)
    return result
  } catch (err) {
    throw err
  }
}

let readCSV = async function(path) {
  return fs.readFileSync(path).toString('utf8')
}

let writeCSV = async function(path, data) {
  return fs.writeFileSync(path, data)
}

let render = async function(template, data) {
  return mustache.render(template, data)
}

let unescapeQuotes =  function(data) {
  return data.replace(/(\'|\")+\</g, '<').replace(/\>(\'|\")+/g, '>').replace(/(\'\')/g, '\'').replace(/(\"\")/g, '\"')
}
