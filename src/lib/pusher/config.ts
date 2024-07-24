import PusherServer from 'pusher'
import PusherClient from 'pusher-js'


export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  useTLS: true,
})


// Singleton pattern since we only beed one instance throughout our client life cycle.
// export const pusherClient = new PusherClient(
//   process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
//   {
//     cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
//     disableStats:true,
//     forceTLS:true,
//   }
// )



