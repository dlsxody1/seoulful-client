'use client';
import { Header, ThumbnailItem } from '@/shared';

const BookmarkPage = () => {
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
