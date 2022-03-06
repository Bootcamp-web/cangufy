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
      

        const parent = await Parents.find({ 'email': email })
        const nanny = await Nanny.find({"location":parent[0].location,"additionalFeatures":parent[0].additionalFeatures})
      
        if(!(nanny[0].pricePerHour<=parent[0].price_max)){
           console.log("no")
        }
        const booking = new Booking({
            nannyId:nanny[0]._id,
            parentsId:parent[0]._id,
            dateStart:schedule,
            confirmed:"true"})
        await booking.save()
        
    
        return {
            booking, 
            nanny: nanny[0], 
            parent: parent[0]
        }
    });
  };