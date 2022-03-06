import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Children } from '../src/models/Children.models';
import { Parents } from '../src/models/Parents.model';


type Myrequest = FastifyRequest<{
    Body: {firstName: String,
        lastName:String,
        children: [Object],
        location: String,
        schedule:Date,
        price_max:Number,
        numChildren:Number
        additionalFeatures:[String]};
    Params: {id: string}
  }>
  

type MyrequestChildren = FastifyRequest<{
    Body: {name: String,
        age:Number,
        parentId:Number};
    Params: {id: string}
  }>

  export const parents_router: FastifyPluginAsync = async (app) => {
    app.get('/', async () => ({ hello: 'api/parents' }));
  
   
    app.post('/', async (request:Myrequest, reply:FastifyReply) => {
       
        const { firstName,
            lastName,
            children,
            location,
            schedule,
            price_max,
            numChildren,
            additionalFeatures}= request.body
        const parents = new Parents({firstName,
            lastName,
            location,
            schedule,
            price_max,
            numChildren,
            additionalFeatures})
        await parents.save()
        console.log("parentsifd",parents._id)
        const parentId= parents._id
        children.forEach(async ({name, age,parentId}: any) => {
            const child = new Children({name, age,parentId})
            console.log("child dentro de post parents",child)
            await child.save()
        })
    
        return parents;
    
    });
    // app.post('/', async (request:MyrequestChildren, reply:FastifyReply) => {
        
       
    //     const { Name,
    //         Age }= request.body
    //     const children = new Children({Name,
    //         Age})
    //     await children.save()
    //     return children;
    
    // });
  //   app.get('/:id/delete', async (request:Myrequest, reply:FastifyReply) => {
  
  //     const {id} = request.params;
  //     await Ingredient.findByIdAndDelete(id)
  //     return {status: 'delete'}
      
  //   });
  };