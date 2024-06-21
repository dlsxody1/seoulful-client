import Home from '/public/assets/home-icon.svg';
import Location from '/public/assets/location-icon.svg';
import Bookmark from '/public/assets/bookmark-icon.svg';
import User from '/public/assets/user-icon.svg';

export const GNB_CONTENT = [
  {
    ariaLabel: '홈',
    icon: Home,
    link: '/home',
  },
  {
    ariaLabel: '내 주위 행사',
    icon: Location,
    link: '/map',
  },
  {
    ariaLabel: '북마크',
    icon: Bookmark,
    link: '/favorite',
  },
  {
    ariaLabel: '마이페이지',
    icon: User,
    link: '/mypage',
  },
];
