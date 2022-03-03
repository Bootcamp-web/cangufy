import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Children } from '../src/models/Chidren.models';


type Myrequest = FastifyRequest<{
    Body: {Name: String,
        age:Number};
    Params: {id: string}
  }>
  

  export const children_router: FastifyPluginAsync = async (app) => {
    app.get('/', async () => ({ hello: 'api/children' }));
  
   
    app.post('/', async (request:Myrequest, reply:FastifyReply) => {
        
       
        const { Name,
            age }= request.body
        const children = new Children({Name,
            age})
        await children.save()
        return children;
    
    });
  //   app.get('/:id/delete', async (request:Myrequest, reply:FastifyReply) => {
  
  //     const {id} = request.params;
  //     await Ingredient.findByIdAndDelete(id)
  //     return {status: 'delete'}
      
  //   });
  };