import type { HomeEventResponseType, SearchQueryType } from '@/features/home';
import type { HomeQueryType } from '@/features/home/model/types';
import { makeHomeQuery, makeSearchQuery } from '@/features/home/model/util';

export const getHomeEvent = async ({
  limit,
  offset,
  isRandom,
  categorySeq,
}: HomeQueryType): Promise<HomeEventResponseType> => {
  const randomNum = Math.floor(Math.random() * 15) + 1;
  const query = makeHomeQuery({
    limit,
    offset,
    isRandom: true,
    categorySeq: isRandom ? randomNum : categorySeq,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list?${query}`
  );
  const data = await res.json();
  return data;
};

export const getSearchResult = async ({
  limit,
  offset,
  eventName,
  startDate,
  endDate,
  categorySeq,
  guSeq,
}: SearchQueryType): Promise<HomeEventResponseType> => {
  const query = makeSearchQuery({
    limit,
    offset,
    eventName,
    startDate,
    categorySeq,
    endDate,
    guSeq,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list/search?${query}`
  );

  const data = await res.json();

  return data;
};
