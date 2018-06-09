exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/bid-local';

exports.PORT = process.env.PORT || 5000;
