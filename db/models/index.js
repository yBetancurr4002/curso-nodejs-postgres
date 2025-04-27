const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');
const { UserSchema, User } = require('./user.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
