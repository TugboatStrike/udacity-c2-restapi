export const config = {
  "dev": {
    "username": process.env.DB_DEV_USERNAME,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "dialect": process.env.DB_DEV_DIALECT,
    "aws_region": process.env.DB_DEV_AWS_REGION,
    "aws_profile": process.env.DB_DEV_AWS_PROFILE,
    "aws_media_bucket": process.env.DB_DEV_AWS_BUCKET
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": process.env.DB_PROD_USERNAME,
    "password": process.env.DB_PROD_PASSWORD,
    "database": process.env.DB_PROD_DATABASE,
    "host": process.env.DB_PROD_HOST,
    "dialect": process.env.DB_PROD_DIALECT
  }
}
