import {
  type KakaoPayload,
  type NaverPayload,
  ProviderTypes,
  UserDTO,
} from '@/features/auth';
import type { UserResponseDTO } from '@/features/auth/model/types';

export const loginUser = async ({ provider }: ProviderTypes) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const redirectUrl = isProduction
    ? process.env.NEXT_PUBLIC_CLIENT_URL
    : process.env.NEXT_PUBLIC_LOCAL_HOST;

  if (provider === 'kakao') {
    const kakaoRestApi = process.env.NEXT_PUBLIC_KAKAO_REST_API;
    const kakaoLogin = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApi}&redirect_uri=${redirectUrl}/auth/kakao/callback&response_type=code&state=kakao`;
    window.location.href = kakaoLogin;
  } else {
    const naverClientID = process.env.NEXT_PUBLIC_NAVER_LOGIN_CLIENT_ID;
    const STATE = process.env.NEXT_PUBLIC_NAVER_STATE;
    const naverLogin = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientID}&state=${STATE}&redirect_uri=${redirectUrl}/auth/naver/callback`;
    window.location.href = naverLogin;
  }
};

export const fetchUserData = async (
  provider: 'kakao' | 'naver',
  body: KakaoPayload | NaverPayload
): Promise<UserDTO> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}auth/login/${provider}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data.data;
};

export const validateToken = async (accessToken: string): Promise<number> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}auth/token/validate`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const { status } = response;

  return status;
};

export const reissueToken = async (refreshToken: string): Promise<UserDTO> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}auth/token/reissue`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  console.log(response, 'reissue res  ponse');
  const { data }: UserResponseDTO = await response.json();

  return data;
};
