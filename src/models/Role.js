import mongoose from "mongoose";

export const ROLES = ["administrador", "estandar", "invitado"];

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);