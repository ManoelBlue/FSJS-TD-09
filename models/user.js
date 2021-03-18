'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please add a name."
                },
                notEmpty: {
                    msg: 'Please add a name.'
                }
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please add a name."
                },
                notEmpty: {
                    msg: 'Please add a name.'
                }
            }
        },
        emailAddress: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please add a name."
                },
                notEmpty: {
                    msg: 'Please add a name.'
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please add a name."
                },
                notEmpty: {
                    msg: 'Please add a name.'
                }
            }
        }
    }, { sequelize });

    User.associate = (models) => {
        User.hasMany(models.Course, { foreignKey: 'userId' });
    };

    return User;
};