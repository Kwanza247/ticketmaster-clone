import bcrypt from "bcrypt";
import User from "./user.model";

const createUser = async (
  username: string,
  password: string,
  role: string
) => {
  const existingUser = await User.findOne({
    username,
  });

  if (existingUser) {
    const error: any = new Error(
      "Username already exists"
    );

    error.statusCode = 409;

    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
    role: role as "ADMIN" | "USER",
  });

  return user;
};

export default {
  createUser,
};
