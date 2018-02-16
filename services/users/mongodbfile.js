module.exports = {
    development: process.env.DATABASE_URL, // export DATABASE_URL="mongodb://127.0.0.1:27017/users_dev"
    test: process.env.DATABASE_TEST_URL // export DATABASE_TEST_URL="mongodb://127.0.0.1:27017/users_test"
}