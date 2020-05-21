// MENGGUNAKAN MONGOOSE
const mongoose = require("mongoose");

// CONNECT KE DATABASE TEMANKU
mongoose.connect("mongodb://localhost:27017/temanku", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MEMBUAT SKEMA
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
    mongoose.connection.close();
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Sukses menambahkan data Hafidz.");
  }
});
