export default {
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASS || "password",
  name: process.env.DB_NAME || "mydatabase",
};
