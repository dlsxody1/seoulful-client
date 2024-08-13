'use client';
import { getEventDetail } from '@/entities/event/api/api';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { EventDetail } from '../types';
import { useAtom } from 'jotai';
import { eventDetailAtom } from '../store';

export const useEventDetail = () => {
  const [eventDetailData, setEventDetailData] =
    useAtom<EventDetail>(eventDetailAtom);
  const params = useParams();
  const eventId = params.id;
  useEffect(() => {
    const fetchData = async () => {
      const detailData = await getEventDetail(Number(eventId));
      setEventDetailData(detailData);
    };

    fetchData();
  }, []);

  return { eventDetailData };
};
