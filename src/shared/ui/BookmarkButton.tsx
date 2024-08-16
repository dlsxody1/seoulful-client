'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BookmarkIcon from '/public/assets/bookmark-icon.svg';
import type { BookmarkButtonPropsType } from '../index';
import { addBookmark, removeBookmark } from '@/entities/bookmark';
import type { UserDTO } from '@/features/auth';
import { useAtom } from 'jotai';
import { eventDetailAtom } from '@/features/event/model/store';
import { tokenValidateCheck } from '../model/utils';

export const BookmarkButton = ({
  buttonSize,
  iconSize,
  hasBorder,
}: BookmarkButtonPropsType) => {
  const [isClicked, setIsClicked] = useState(false);
  const [userData, setUserData] = useState<UserDTO>();
  const [{ eventId }] = useAtom(eventDetailAtom);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user);
      setUserData(userObject);
    }
  }, []);

  const handleClick = () => {
    if (userData) {
      const { userId, accessToken: currentToken, refreshToken } = userData;
      const fetched = async () => {
        try {
          const { accessToken } = await tokenValidateCheck({
            userId,
            accessToken: currentToken,
            refreshToken,
            eventId,
          });
          if (!isClicked) {
            await addBookmark(userId, accessToken, eventId);
          } else {
            await removeBookmark(userId, accessToken, eventId);
          }

          setIsClicked((prev) => !prev);
        } catch (err) {
          console.error(err);
        }
      };
      fetched();
    } else {
      alert('Please log in!');
    }
  };

  return (
    <motion.button
      type="button"
      className={`flex justify-center items-center ${buttonSize ?? 'w-[32px] h-[32px]'} bg-black-60 rounded-full ${hasBorder ? 'border-[1.5px] border-black-FFF' : ''}`}
      onClick={handleClick}
      whileTap={{ scale: 0.8 }}
    >
      <BookmarkIcon
        className={`${iconSize ?? 'w-[16px] h-[16px]'} ${isClicked ? 'fill-yellow-10' : 'fill-black-FFF'} pointer-events-none`}
      />
    </motion.button>
  );
};
