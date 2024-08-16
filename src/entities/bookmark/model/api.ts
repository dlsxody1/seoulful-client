import { UserResponseDTO } from '@/features/auth';
import type { BookmarkEvent, BookmarkEventResponse } from './types';

export const getBookmarkList = async (
  userId: string,
  accesToken: string
): Promise<BookmarkEvent[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accesToken}`,
      },
    }
  );

  const { data }: BookmarkEventResponse = await response.json();
  return data;
};

export const addBookmark = async (
  userId: string,
  accessToken: string,
  eventSeq: number
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventSeq: eventSeq,
      }),
      method: 'PUT',
    }
  );

  const { data }: UserResponseDTO = await response.json();

  return data;
};
