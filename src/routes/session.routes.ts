import {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";
import { createSessionsController } from "../modules/sessions/createSessions/createSessionsController";

export default class SessionRouter {
  public prefixRoute = "/sessions";

  createSessionsController: createSessionsController;

  constructor() {
    this.createSessionsController = new createSessionsController();
  }

  routes = (
    fastify: FastifyInstance,
    _options: FastifyPluginOptions,
    done: DoneFuncWithErrOrRes
  ) => {
    fastify.post(`/`, {}, this.createSessionsController.handle);

    done();
  };
}
