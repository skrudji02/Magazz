const path = require('path');

module.exports = {
  'config': path.resolve('backend/config', 'config.json'),
  'models-path': path.resolve('backend', 'models'),
  'seeders-path': path.resolve('backend', 'seeders'),
  'migrations-path': path.resolve('backend', 'migrations'),
}