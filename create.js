// MENGGUNAKAN MONGOOSE
const mongoose = require("mongoose");

// CONNECT KE DATABASE TEMANKU
mongoose.connect("mongodb://localhost:27017/temanku", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MEMBUAT SKEMA
const temanSchema = new mongoose.Schema({
  name: String,
  email: String,
  hp: Number,
});

// MEMBUAT MODEL
const Teman = mongoose.model("Teman", temanSchema);

// CREATE DATA TEMAN
const temanHafidz = new Teman({
  name: "Muhammad Hafidz Alfarizi",
  email: "emailhafidz@gmail.com",
  hp: 081322334455,
});

temanHafidz.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Sukses menambahkan data Hafidz.");
  }
});

// CREATE BANYAK DATA TEMAN
const temanFadhli = new Teman({
  name: "Fadhli Hibatul Haqqi",
  email: "emailfadhli@gmail.com",
  hp: 081322334466,
});

const temanMansyah = new Teman({
  name: "Firmansyah Yanuar",
  email: "emailmansyah@gmail.com",
  hp: 081322334477,
});

Teman.insertMany([temanFadhli, temanMansyah], function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Sukses menambahkan data Fahli dan Mansyah");
  }
});
