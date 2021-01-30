const env = process.env;

module.exports = {
  port: env.PORT || 8080,
  nodeEnv : env.NODE_ENV || 'development'

};
