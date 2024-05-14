const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json())

const PersonSchema = new mongoose.Schema({
  StudentId: Number,
  Name: String,
});
const Person = mongoose.model("Person", PersonSchema);

app.get("/", async (req, res) => {
  const getData = await Person.find();
  res.send(getData);
});
app.post("/", async (req, res) => {
  const title = req.body;
  const postedData = new Person(title);
  await postedData.save();
  res.send(postedData);
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const DeletedData = await Person.findByIdAndDelete(id);
  res.send(DeletedData);
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const title = req.body;
  const UptadetData = await Person.findByIdAndUpdate(id, title);
  res.send(UptadetData);
});
mongoose
  .connect("mongodb+srv://meryem:meryem@cluster0.lbuxvjt.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("err"));


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })