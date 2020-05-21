// MENGGUNAKAN MONGOOSE
const mongoose = require("mongoose");

// CONNECT KE DATABASE TEMANKU
mongoose.connect("mongodb://localhost:27017/temanku", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MEMBUAT SKEMA TEMAN
const temanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama teman harus diisi!"],
  },
  email: String,
  hp: {
    type: Number,
    min: 10000,
  },
});

// MEMBUAT MODEL TEMAN
const Teman = mongoose.model("Teman", temanSchema);

// MEMBUAT SKEMA MAKANAN
const makananSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama makanan harus diisi!"],
  },
  harga: {
    type: Number,
    min: 10000,
    max: 100000,
  },
  disukaioleh: temanSchema,
});

// MEMBUAT MODEL MAKANAN
const Makanan = mongoose.model("Makanan", makananSchema);

// CREATE DATA TEMAN
const temanPrima = new Teman({
  name: "Muhammad Rizki Prima",
  email: "emailprima@gmail.com",
  hp: 081322334499,
});

temanPrima.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Sukses menambahkan data Prima.");
  }
});

// CREATE DATA MAKANAN
const makanan = new Makanan({
  name: "Bakso",
  harga: 15000,
  disukaioleh: temanPrima,
});

makanan.save(function (error) {
  if (error) {
    mongoose.connection.close();
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Sukses menambahkan bakso dan disukai oleh Prima!");
  }
});
