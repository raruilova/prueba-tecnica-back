import Role from "../models/Role.js";
import User from "../models/User.js";
import {
  ADMIN_EMAIL,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
} from "../config/config.js";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "administrador" }).save(),
      new Role({ name: "estandar" }).save(),
      new Role({ name: "invitado" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  const userFound = await User.findOne({ email: ADMIN_EMAIL });
  console.log(userFound);
  if (userFound) return;

  const roles = await Role.find({
    name: { $in: ["administrador", "estandar"] },
  });

  const newUser = await User.create({
    username: ADMIN_USERNAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    roles: roles.map((role) => role._id),
  });

  console.log(`new user created: ${newUser.email}`);
};

createRoles();
createAdmin();
