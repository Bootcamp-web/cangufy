import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { conectDB } from './lib/db';
import { main_router } from './main_routers/main_routers';
import { nanny_router } from './main_routers/nanny_routers';
import { parents_router } from './main_routers/parents_routers';


export const main_app: FastifyPluginAsync = async (app) => {
    conectDB();
  
  

    app.register(fastifyCors, {
      origin: (origin, cb) => {
        if (/localhost/.test(origin)) {
          //  Request from localhost will pass
          cb(null, true);
          return;
        }
        // Generate an error on other origins, disabling access
        cb(null, false);
      },
    });
      
    app.register(main_router);
    //app.register(parents_router, { prefix: '/parents' });
    app.register(nanny_router, { prefix: '/nanny' });
    // app.register(children_router,{ prefix: '/children' });
   
};