import mongoose from "mongoose";

async function conn() {
  await mongoose.connect(
    "mongodb://localhost:27017/?readPreference=primary&ssl=false",
    {
      //   useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("MongoDB connection is Successful");
}

export default conn;
