//const fs = require('fs')
var convert = require('xml-js');
var xml = require('fs').readFileSync('./sampleXmlFile.xml', 'utf8');
var result = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result); 

const content = result;
require('fs').writeFile('./result.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
})
//To Create server and print the result on html page
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(result);
  res.end();
}).listen(4000);
