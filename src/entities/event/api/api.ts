import type {
  EventDetail,
  EventDetailResponse,
} from '@/features/event/model/types';

export const getEventDetail = async (eventId: number): Promise<EventDetail> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/detail/${eventId}`
  );

  const { data }: EventDetailResponse = await response.json();

  return data;
};
