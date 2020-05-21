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

// UPDATE DATA
Teman.deleteOne(
  { _id: "5ec55f72939ad12d98ff94ce" },
  { name: "Muhammad Hafidz Aja Ternyata" },
  function (error) {
    if (error) {
      mongoose.connection.close();
      console.log(error);
    } else {
      mongoose.connection.close();
      console.log("Delete data berhasil!");
    }
  }
);

// READ DATA
Teman.find(function (error, teman) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    teman.forEach(function (teman) {
      console.log(teman.name);
    });
  }
});
