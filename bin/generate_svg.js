//  getSvg.js
const fs = require('fs')
const path = require('path')

const svgDir = path.resolve(__dirname, '../src/svg')

// 读取单个文件
function readfile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(svgDir, filename), 'utf8', (err, data) => {
      if (err) reject(err)
      resolve({
        [filename.slice(0, filename.lastIndexOf('.'))]: data.replace(/[\r\n]/g, ''),
      })
    })
  })
}

// 读取SVG文件夹下所有svg
function readSvgs() {
  return new Promise((resolve, reject) => {
    fs.readdir(svgDir, (err, files) => {
      if (err) reject(err)
      Promise.all(files.map(filename => {
        if (filename.indexOf('.svg') > -1) {
          return readfile(filename)
        }
        return {}
      }))
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  })
}

// 生成js文件
readSvgs()
  .then(data => {
    const svgFile = `/* eslint-disable */ export default ${JSON.stringify(Object.assign.apply(this, data))}`
    fs.writeFile(path.resolve(__dirname, '../dist/svgIcons.js'), svgFile, err => {
      if (err) throw new Error(err)
    })
  }).catch(err => {
    throw new Error(err)
  })
