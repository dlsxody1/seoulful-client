export interface BookmarkEvent {
  eventId: number;
  categorySeq: number;
  eventName: string;
  period: string;
  mainImg: string;
  startDate: Date;
  endDate: Date;
  detailUrl: string;
}

export interface BookmarkEventResponse {
  data: BookmarkEvent[];
  totalCount: number;
}

export interface BookmarkAddedResponse {
  data: {
    bookmarkList: number[];
  };
}
