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
  const params: Partial<SearchQueryType> = {};

  if (eventName) {
    params.eventName = eventName;
  }

  if (categorySeq) {
    params.categorySeq = getCategorySeqByName(categorySeq).toString();
  }
  if (startDate) {
    params.startDate = formatDate(startDate);
  }
  if (endDate) {
    params.endDate = formatDate(endDate);
  }
  if (guSeq) {
    params.guSeq = getGuSeqByName(guSeq).toString();
  }

  const obj = qs.stringify(params);
  return obj;
};
