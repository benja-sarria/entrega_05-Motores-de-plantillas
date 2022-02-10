const { Products } = require("../utils/productMethods");

const productsInstance = (req, res, next) => {
    const products = new Products("products.json");

    req.products = products;
    next();
};

module.exports = productsInstance;
