![result](https://github.com/zikriramdani/nodejs3/blob/main/screencapture.png)

# Aplikasi Sederhana Node Js Post Article

This project was generated with [`Node Js, Express Js, Bootstrap 4, Sequelize`] version v12.18.2.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Cara menjalankan Aplikasi : 

- Simpan Project di /htdocs (kalau pake xampp)
- import database (db_nodejs3.sql / npx sequelize-cli db:migrate)
- buka folder project, jalankan "npm install" di dalam terminal/cmd
- buka folder project, copykan .env-example, menjadi .env
- isi DB_DATABASE, DB_USERNAME, DB_PASSWORD, sesuaikan dengan settingan database kamu
- di dalam directory project buka terminal, ketikan "npm run dev"
- buka browser, ketikan url "localhost:8080"

# Url API
- localhost:8080/api/v1/article/add ===> createArticle,
- localhost:8080/api/v1/articleList ===> readArticle,
- localhost:8080/api/v1/article/:id ===> updateArticle,
- localhost:8080/api/v1/article/:id ===> deleteArticle