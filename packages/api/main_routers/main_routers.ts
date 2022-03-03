import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';


type Myrequest = FastifyRequest<{
    Body: {name: string, quantity: string};
    Params: {id: string}
  }>
  

export const main_router: FastifyPluginAsync = async (app) => {
  app.get('/', async () => ({ hello: 'api/back' }));

};