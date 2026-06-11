import bcrypt from "bcrypt";
import User from "../users/user.model";
import generateToken from "../../utils/generateToken";

const loginUser = async (
  username: string,
  password: string
) => {
  const user = await User.findOne({ username });

  if (!user) {
    const error: any = new Error(
      "Invalid username or password"
    );

    error.statusCode = 401;

    throw error;
  }

  const isPasswordCorrect =
    await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    const error: any = new Error(
      "Invalid username or password"
    );

    error.statusCode = 401;

    throw error;
  }

  const token = generateToken(
    user._id.toString(),
    user.role
  );

  return {
    token,

    user: {
      id: user._id,
      username: user.username,
      role: user.role,
    },
  };
};

export default {
  loginUser,
};