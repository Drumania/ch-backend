'use strict';

/**
 * list-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-item.list-item');
