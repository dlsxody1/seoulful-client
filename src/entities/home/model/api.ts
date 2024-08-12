import type {
  HomeEventResponseType,
  LimitOffsetType,
  SearchQueryType,
} from '@/features/home';
import { makeSearchQuery } from '@/features/home/model/util';

export const getHomeEvent = async ({
  limit,
  offset,
  isRandom,
  categorySeq,
}: LimitOffsetType & {
  isRandom: boolean;
  categorySeq?: number;
}): Promise<HomeEventResponseType> => {
  const randomNum = Math.floor(Math.random() * 15) + 1;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list?limit=${limit}&offset=${offset}&categorySeq=${isRandom ? randomNum : categorySeq}`
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
}: SearchQueryType & LimitOffsetType): Promise<HomeEventResponseType> => {
  const query = makeSearchQuery({
    eventName,
    startDate,
    categorySeq,
    endDate,
    guSeq,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list/search?limit=${limit}&offset=${offset}&${query}`
  );

  const data = await res.json();

  return data;
};
