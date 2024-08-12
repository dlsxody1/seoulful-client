import * as qs from 'qs';
import { formatDate, getCategorySeqByName, getGuSeqByName } from '@/shared';
import { SearchQueryType } from './types';

export const makeSearchQuery = ({
  eventName,
  categorySeq,
  startDate,
  endDate,
  guSeq,
}: SearchQueryType) => {
  const params: Partial<SearchQueryType> = {
    ...(eventName && { eventName }),
    ...(categorySeq && {
      categorySeq: getCategorySeqByName(categorySeq).toString(),
    }),
    ...(startDate && { startDate: formatDate(startDate) }),
    ...(endDate && { endDate: formatDate(endDate) }),
    ...(guSeq && { guSeq: getGuSeqByName(guSeq).toString() }),
  };

  const obj = qs.stringify(params);
  return obj;
};
