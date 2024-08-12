import { useEffect } from 'react';
import { locationAtom } from '../store';
import { useSetAtom } from 'jotai';
import { getGeoCode, NaverMapTypes } from '../..';

export const useChangeLocation = ({ map }: NaverMapTypes) => {
  const setLocation = useSetAtom(locationAtom);
  useEffect(() => {
    if (!map) return;
    const listener = map.addListener('idle', () => {
      const newLatitude = map.getCenter().y;
      const newLongitude = map.getCenter().x;
      const fetchAddress = async () => {
        const data = await getGeoCode(newLatitude, newLongitude);
        setLocation({
          latitude: newLatitude,
          longitude: newLongitude,
          address: data.documents[1]?.address_name || '',
        });
      };
      fetchAddress();
    });

    return () => {
      naver.maps.Event.removeListener(listener);
    };
  }, []);
};
