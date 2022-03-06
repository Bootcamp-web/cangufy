import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Nanny } from '../src/models/Nanny.model';



type Myrequest = FastifyRequest<{
    Body: {firstName: String,
        lastName:String,
        minAge:Number,
        maxAge:Number,
        email:string,
        location:String
        pricePerHour:Number,
        additionalFeatures:[String]};
    Params: {id: string}
  }>
  

  export const nanny_router: FastifyPluginAsync = async (app) => {
    app.get('/', async () => ({ hello: 'api/nanny' }));
  
   
    app.post('/', async (request:Myrequest, reply:FastifyReply) => {
        
       
        const { firstName,
            lastName,
            minAge,
            maxAge,
            email,
            location,
            pricePerHour,
            additionalFeatures}= request.body
        const parents = new Nanny({firstName,
            lastName,
            minAge,
            maxAge,
            email,
            location,
            pricePerHour,
            additionalFeatures})
        await parents.save()
        return parents;
    
    });
  
  //   app.get('/:id/delete', async (request:Myrequest, reply:FastifyReply) => {
  
  //     const {id} = request.params;
  //     await Ingredient.findByIdAndDelete(id)
  //     return {status: 'delete'}
      
  //   });
  };