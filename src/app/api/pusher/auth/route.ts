import { pusherServer } from "@/lib/pusher";
import { NextResponse } from 'next/server';
import { UserChannelData } from 'pusher';

export const dynamic = 'force-dynamic';

// Sample user data
const users = [
  { id: 'user1', user_info: { name: 'User One' } },
  { id: 'user2', user_info: { name: 'User Two' } },
  { id: 'user3', user_info: { name: 'User Three' } },
  { id: 'user4', user_info: { name: 'User Four' } },
  { id: 'user5', user_info: { name: 'User Five' } },
  { id: 'user6', user_info: { name: 'User Six' } },
  { id: 'user7', user_info: { name: 'User Seven' } },
  { id: 'user8', user_info: { name: 'User Eight' } },
  { id: 'user9', user_info: { name: 'User Nine' } },
  { id: 'user10', user_info: { name: 'User Ten' } },
  { id: 'lekan_dev', user_info: { name: 'Olalekab Abdulfatah' } },
  { id: 'john_doe', user_info: { name: 'John Doe' } }, // Default user
];

export async function POST(request: Request) {
  console.log("pusher is authing");
  try {
    const bodyText = await request.text();
    const params = new URLSearchParams(bodyText);
    const socket_id = params.get('socket_id');
    const channel_name = params.get('channel_name');
    const user_id = params.get('user_id');

    console.log('SOCKET ID', socket_id, 'CHANNEL NAME', channel_name, 'USER ID', user_id);

    if (!socket_id || !channel_name || !user_id) {
      return NextResponse.json({ error: 'Invalid request body, socket_id, channel_name and user_id are required' }, { status: 400 });
    }

    // Find user by user_id or default to John Doe
    const user = users.find(user => user.id === user_id) || users.find(user => user.id === 'john_doe');

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const authResponse = pusherServer.authorizeChannel(socket_id, channel_name, {
      user_id: user.id,
      user_info: user.user_info,
    });

    return NextResponse.json(authResponse);
  } catch (error) {
    console.error('Error in Pusher authorization:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
