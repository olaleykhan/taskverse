"use client";

import { useEffect, useState } from 'react';
import PusherClient from 'pusher-js';

import { PusherChannels, PusherEvents } from "./enums";

interface UsePusherProps {
  userId: string;
  channelName:PusherChannels
}

export const usePusher = ({ userId, channelName }: UsePusherProps) => {
  const [pusherClient, setPusherClient] = useState<PusherClient | null>(null);



  useEffect(() => {
    const pusher = new PusherClient(
      process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? "b03b31af465de1c3c74b",
      {
        cluster: "eu",
        disableStats: true,
        forceTLS: true,
        channelAuthorization: {
          endpoint: "/api/pusher/auth",
          transport: "ajax",
          params: {
            user_id: userId,
            channel_name:channelName
          },
          headers: {
            'Content-Type': 'application/json',
          },
        },
      }
    );

    pusher.signin();
    setPusherClient(pusher);

    // Cleanup on unmount
    return () => {
      pusher.disconnect();
    };
  }, [userId, channelName]);

  return pusherClient;
};
