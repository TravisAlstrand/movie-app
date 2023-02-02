const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {

  class User extends Model { }

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "A first name is required"
        },
        notEmpty: {
          msg: "Please provide a first name"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "A last name is required"
        },
        notEmpty: {
          msg: "Please provide a last name"
        }
      }
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: {
        msg: "A user has already used this email address"
      },
      validate: {
        notNull: {
          msg: "An email address is required"
        },
        notEmpty: {
          msg: "Please provide an email address"
        },
        isEmail: {
          msg: "Please provide a valid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "A password is required"
        },
        notEmpty: {
          msg: "Please provide a password"
        }
      },
      set(val) {
        const hashedPassword = bcrypt.hashSync(val, 10);
        this.setDataValue('password', hashedPassword);
      }
    }
  }, { sequelize });

  return User;
};