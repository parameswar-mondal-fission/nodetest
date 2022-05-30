module.exports = {
    DEFAULT_USERNAME: process.env.dbusername,
    DEFAULT_PASSWORD: process.env.dbpassword,
    DEFAULT_DATABASE: process.env.database,
    DEFAULT_HOST: process.env.dbhost || "localhost",
    DEFAULT_DBPORT: process.env.dbPort || 27017,
    NODE_ENV: process.env.NODE_ENV || 'local'
};