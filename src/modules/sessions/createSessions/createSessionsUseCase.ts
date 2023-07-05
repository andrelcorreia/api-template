import { AppResponse } from "../../../helpers/AppResponse";
import { injectable, inject } from "tsyringe";
import { Users } from "../../../interfaces/users/users";
import { AppError } from "../../../helpers/AppError";

// @injectable()
export class CreateSessionsUseCase {
  // constructor(
  //   @inject('')
  // ) {}
  async execute(name: string, password: string): Promise<Users> {
    if (name != "admin") {
      throw new AppError({
        statusCode: 500,
        message: "User name incorrect",
      });
    }

    if (password != "1234") {
      throw new AppError({
        statusCode: 500,
        message: "User password incorrect",
      });
    }

    const users = {
      name: "admin",
      password: "1234",
    };

    return users;
  }
}
