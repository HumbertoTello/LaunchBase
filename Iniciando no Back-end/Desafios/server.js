const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require("./data")

server.use(express.static('public')) 
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  const info = {
    img_url: 'https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default',
    name: 'Rocketseat',
    description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo',
    technologies_title: 'Tecnologias utilizadas',
    technologies_names: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'React Native'
    ],
    links: [
      { name: "Github", url: "https://github.com/rocketseat"},
      { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
      { name: "Facebook", url: "https://www.facebook.com/rocketseat/"},
    ]
  }
  return res.render("about", { info })
})

server.get("/courses", function (req,res) {
  const info = {
    links: [
      { name: "Github", url: "https://github.com/rocketseat"},
      { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
      { name: "Facebook", url: "https://www.facebook.com/rocketseat/"},
    ]
  }
  return res.render("courses", { cards, info })
})

server.get("/notfound", function (req,res) {
  return res.render("not-found")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen("5000", function() {
  console.log("Server running")
})
