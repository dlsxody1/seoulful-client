import type {
  HomeEventResponseType,
  LimitOffsetType,
  SearchQueryType,
} from '@/features/home';

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
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list?limit=${limit}&offset=${offset}&categorySeq=${isRandom ? randomNum : categorySeq}`,
    {
      cache: 'force-cache',
    }
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/list/search?limit=${limit}&offset=${offset}&eventName=${eventName}${categorySeq ? `&categorySeq=${categorySeq}` : ''}${startDate ? `&startDate=${startDate}` : ''}${endDate ? `&endDate=${endDate}` : ''}${guSeq ? `&guSeq=${guSeq}` : ''}`
  );

  const data = await res.json();

  return data;
};
