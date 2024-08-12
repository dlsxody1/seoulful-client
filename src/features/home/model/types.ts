import { MutableRefObject } from 'react';

export interface LimitOffsetType {
  limit: number;
  offset: number;
}

export interface SearchQueryType {
  eventName: string;
  categorySeq: string | null;
  startDate: string | null;
  endDate: string | null;
  guSeq: string | null;
}

export interface HomeEventType {
  eventId: number;
  categorySeq: number;
  eventName: string;
  period: string;
  mainImg: string;
  startDate: Date;
  endDate: Date;
  detailUrl: string;
  guSeq?: number;
  describe?: string;
}

export interface HomeEventResponseType {
  data: HomeEventType[];
  totalCount: number;
}

export interface ObserverType {
  target: MutableRefObject<HTMLDivElement | null>;
  callback: IntersectionObserverCallback;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}
