import { pusherServer } from "@/lib/pusher";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const users = [
  { id: 'user1', user_info: { name: 'Adamu Musa' } },
  { id: 'user2', user_info: { name: 'Bola Adeyemi' } },
  { id: 'user3', user_info: { name: 'Chinwe Okoro' } },
  { id: 'user4', user_info: { name: 'Damilola Fashola' } },
  { id: 'user5', user_info: { name: 'Emeka Nwosu' } },
  { id: 'user6', user_info: { name: 'Fatima Abdullahi' } },
  { id: 'user7', user_info: { name: 'Gbenga Falana' } },
  { id: 'user8', user_info: { name: 'Halima Balarabe' } },
  { id: 'user9', user_info: { name: 'Ifeanyi Eze' } },
  { id: 'user10', user_info: { name: 'Jide Oladipo' } },
  { id: 'lekan_dev', user_info: { name: 'Olalekan Abdulfatah' } },
  { id: 'peace', user_info: { name: 'Peace Eyibio' } },
  { id: 'john_doe', user_info: { name: 'John Doe' } }, // Default user
];


export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const params = new URLSearchParams(bodyText);
    const socket_id = params.get('socket_id');
    const channel_name = params.get('channel_name');
    const user_id = params.get('user_id');

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
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
