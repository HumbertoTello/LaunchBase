const { formatPrice, date } = require("../../lib/utils")
const Category = require("../models/Category")
const Product = require("../models/Product")
const File = require("../models/File")

module.exports = {
  create(req, res) {
    // Pegar categorias
    Category.all()
    .then(function(results) {
      const categories = results.rows
      return res.render("products/create.njk", { categories })
    }).catch(function(err) {
      throw new Error(err)
    })

  },
  async post(req, res) {
    // Salvar
    const keys = Object.keys(req.body)

    for (key of keys) {
      if(req.body[key] == "") {
        return res.send("Please, fill all fields")
      }
    }

    if (req.files.length == 0)
      return res.send("Please, send at least one image")

    let results = await Product.create(req.body)
    const productId = results.rows[0].id

    const filesPromise = req.files.map(file => File.create({...file, product_id: productId}))
    await Promise.all(filesPromise)

    return res.redirect(`/products/${productId}/edit`)
  },
  async show (req, res) {

    let results = await Product.find(req.params.id)
    let product = results.rows[0]

    if(!product) return res.send("Product not found!")

    const { day, hour, minutes, month } = date(product.updated_at) //AULA PARADA EM 3:28

    product.published = {
      day: `${day}/${month}`,
      hour: `${hour}h${minutes}`
    }

    product.oldPrice = formatPrice(product.old_price)
    product.price = formatPrice(product.price)

    return res.render("products/show", {product})
  },
  async edit(req, res) {
    let results = await Product.find(req.params.id)
    const product = results.rows[0]

    if(!product) return res.send("Product not found!")

    product.old_price = formatPrice(product.old_price)
    product.price = formatPrice(product.price)

    // get categories
    results = await Category.all()
    const categories = results.rows
    
    // get images
    results = await Product.files(product.id)
    let files = results.rows
    files = files.map(file => ({ // ({}) retorna diretamente o objeto
      ...file,
      src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}` // req.protocol (http ou https) // req.header.host (endereço completo localhost:3000)
    }))

    return res.render("products/edit.njk", { product, categories, files })
  },
  async put(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if(req.body[key] == "" && key != "removed_files") {
        return res.send("Please, fill all fields")
      }
    }

    if (req.files.length != 0) {
      const newFilesPromise = req.files.map(file =>
        File.create({...file, product_id: req.body.id}))
      
      await Promise.all(newFilesPromise)
    }

    if (req.body.removed_files) {
      // 1,2,3 -> [1,2,3,]
      const removedFiles = req.body.removed_files.split(",")
      const lastIndex = removedFiles.length - 1
      removedFiles.splice(lastIndex, 1) // [1,2,3]

      const removedFilesPromise = removedFiles.map(id => File.delete(id))

      await Promise.all(removedFiles)
    }

    req.body.price = req.body.price.replace(/\D/g, "")

    if(req.body.old_price != req.body.price) {
      const oldProduct = await Product.find(req.body.id)

      req.body.old_price = oldProduct.rows[0].price
    }

    await Product.update(req.body)

    return res.redirect(`/products/${req.body.id}`)
  },
  async delete(req, res) {
    await Product.delete(req.body.id)

    return res.redirect("/products/create")
  }
}