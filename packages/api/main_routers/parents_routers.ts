import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Children } from '../src/models/Chidren.models';
import { Parents } from '../src/models/Parents.model';


type Myrequest = FastifyRequest<{
    Body: {firstName: String,
        lastName:String,
        childrenId: Number,
        location: String,
        schedule:Date,
        price_max:Number,
        additionalFeatures:[String]};
    Params: {id: string}
  }>
  

type MyrequestChildren = FastifyRequest<{
    Body: {Name: String,
        Age:Number};
    Params: {id: string}
  }>

  export const parents_router: FastifyPluginAsync = async (app) => {
    app.get('/', async () => ({ hello: 'api/parents' }));
  
   
    app.post('/', async (request:Myrequest, reply:FastifyReply) => {
        
       
        const { firstName,
            lastName,
            childrenId,
            location,
            schedule,
            price_max,
            additionalFeatures}= request.body
        const parents = new Parents({firstName,
            lastName,
            childrenId,
            location,
            schedule,
            price_max,
            additionalFeatures})
        await parents.save()
        return parents;
    
    });
    app.post('/', async (request:MyrequestChildren, reply:FastifyReply) => {
        
       
        const { Name,
            Age }= request.body
        const children = new Children({Name,
            Age})
        await children.save()
        return children;
    
    });
  //   app.get('/:id/delete', async (request:Myrequest, reply:FastifyReply) => {
  
  //     const {id} = request.params;
  //     await Ingredient.findByIdAndDelete(id)
  //     return {status: 'delete'}
      
  //   });
  };