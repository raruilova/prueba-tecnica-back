import mongoose from "mongoose";

const connectDB = async () => {

    try {
      const connection = await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
      );
  
      const url = `${connection.connection.host}:${connection.connection.port}`;
      console.log(`MongoDB conectado en ${url}`);
    } catch (error) {
      console.log(`error ${error.message}`);
      process.exit(1); 
    }
  };
  
  export default connectDB;