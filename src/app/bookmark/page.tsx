'use client';
import type { BookmarkEvent } from '@/entities/bookmark';
import { Header, ThumbnailItem } from '@/shared';
import { useState } from 'react';

const BookmarkPage = () => {
  const [bookmarkData, setBookmarkData] = useState<BookmarkEvent[]>();
  return (
    <div>
      <Header title={'북마크'} isBackButton />
      <div className="px-[30px] pt-[20px]">
        {/* <ul className="flex flex-wrap gap-[15px]">
          {eventData?.map((data, i) => (
            <ThumbnailItem key={`data-${i}`} data={data} />
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default BookmarkPage;
