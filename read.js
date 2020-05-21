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
