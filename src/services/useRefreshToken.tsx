import axios from 'axios';
import { getCookie, setCookie } from './useReactCookie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function useRefreshToken() {
  const router = useRouter();
  const refreshTokens = () => {
    const refreshToken = getCookie('refreshToken'); // 쿠키에서 리프레시 토큰을 가져옵니다.
    const accessToken = localStorage.getItem('accessToken'); // 로컬 스토리지에서 액세스 토큰을 가져옵니다.
    if (refreshToken && accessToken) {
      const formData = new URLSearchParams();
      formData.append('refreshToken', refreshToken);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}api/reissue`, formData.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            // 응답에서 새로운 토큰을 받아 로컬 스토리지와 쿠키에 저장합니다.
            const accessToken = res.headers['authorization'];
            const refreshToken = res.headers['authorization-refresh'];
            localStorage.setItem('accessToken', accessToken);
            setCookie('refreshToken', refreshToken);
            // 재발급 성공 시 59분 후에 다시 토큰을 재발급하도록 setTimeout 설정
            setTimeout(refreshTokens, 59 * 60 * 1000);
          }
        })
        .catch((error) => {
          alert('다시 로그인 해주세요.');
          localStorage.clear();
          setCookie('refreshToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
          router.push('/login');
        });
    }
  };

  useEffect(() => {
    refreshTokens();
  }, []);

  return refreshTokens;
}
