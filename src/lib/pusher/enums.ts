export enum PusherEvents {
    SignInSuccess = 'pusher:signin_success',
    Error = 'pusher:error',
    SubscriptionSucceeded = 'pusher:subscription_succeeded',
    SubscriptionError = 'pusher:subscription_error',
    Add = 'add',
    Mark = 'mark',
    Delete = 'delete',
  }
  
  export interface PusherError {
    error: {
      data: {
        code: number;
      };
    };
  }
  
  export enum PusherChannels {
    TodoChannel = 'private-todo-channel',
  }
  