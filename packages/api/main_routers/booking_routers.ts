import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Booking } from '../src/models/Booking.models';
import { Children } from '../src/models/Children.models';
import { Nanny } from '../src/models/Nanny.model';
import { Parents } from '../src/models/Parents.model';


type Myrequest = FastifyRequest<{
    Body: {location: String,
        email:String,
        schedule:Date,
        numChildren:Number
        additionalFeatures:[String]};
    Params: {id: string}
  }>
  

  export const booking_router: FastifyPluginAsync = async (app) => {
    app.get('/', async () => ({ hello: 'api/booking' }));
  
   
    app.post('/', async (request:Myrequest, reply:FastifyReply) => {
       
        const { 
            email,
            schedule,}= request.body
        console.log("request",request.body)  

        const parent = await Parents.find({ 'email': email })
        const parentId = parent[0]._id
        console.log(parent)
        console.log("id",parentId)
        const nanny = await Nanny.find({"location":parent[0].location,"additionalFeatures":parent[0].additionalFeatures
        //,"pricePerHour":parent[0].price_max,"
        })
        console.log("nanny",nanny)
      
        if(nanny[0].pricePerHour<=parent[0].price_max){
            const booking = new Booking({
                nannyId:nanny[0]._id,
                parentsId:parent[0]._id,
                dateStart:parent[0].schedule,
                confirmed:"true"
            })
            await booking.save()
        }
    
        return request.body
    });
  };