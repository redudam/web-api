/**
 * @module index
 * @author Pavel Fediukovich
 */

'use strict';


const { Op } = require('../../models').Sequelize;
const { task } = require('../../models');

const findAll = () => task.findAll({
    include: [{ all: true, nested: true }]
});

const insert = (data) => {
    return task.build(data).save().catch(err=>{
        console.log(err)
    });
}

module.exports = {
    findAll,
    insert
};
