module.exports = function override(config, env) {
    // Add your custom configuration here
    config.resolve.fallback = {
      "fs": false,
      "http": false,
      "path": false
    };
  
    return config;
  };