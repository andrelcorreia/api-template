import { FastifyReply, FastifyRequest } from "fastify";
import { container } from "tsyringe";
import { AppResponse } from "../../../helpers/AppResponse";
import { Users } from "../../../interfaces/users/users";
import { CreateSessionsUseCase } from "./createSessionsUseCase";

export class createSessionsController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    const createSessionsUseCase = container.resolve(CreateSessionsUseCase);
    const { name, password } = request.body as Users;

    const createSessions = await createSessionsUseCase.execute(name, password);

    return reply.send(
      new AppResponse({
        statusCode: 200,
        message: "Login success",
        data: createSessions,
      })
    );
  }
}
