var config = require('orbs-grunt-config');

module.exports = function (grunt) {
  'use strict';

  // TODO: Allow orbs-grunt-config to manage loading grunt tasks
  // Currently, all grunt task dependencies must be listed in this project's package.json
  // and the contents must be passed to loadTasks  
  config.loadTasks(grunt, require('./package.json'));
  config.initConfig(grunt);
  // Only files that match the pattern will be instrumented
  config.initBlanket(require('blanket'), '/orbs/lib/');
  config.registerTasks(grunt);

};
