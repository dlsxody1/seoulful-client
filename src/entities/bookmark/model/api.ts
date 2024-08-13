import { UserResponseDTO } from '@/features/auth';
import type { BookmarkEvent, BookmarkEventResponse } from './types';

export const getBookmarkList = async (
  userId: string,
  token: string
): Promise<BookmarkEvent[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { data }: BookmarkEventResponse = await response.json();
  return data;
};

export const addBookmark = async (
  userId: string,
  token: string,
  eventSeq: number
) => {
  const bookmarkBody = JSON.stringify({
    eventSeq,
  });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}bookmark/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: bookmarkBody,
      method: 'PUT',
    }
  );

  const { data }: UserResponseDTO = await response.json();
  return data;
};
