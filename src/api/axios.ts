import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

/**
 * axios instance
 * TODO: base URL 및 헤더 옵션 추가
 */
const axiosInstance = axios.create({
  // API URL (process.env?)
  baseURL: '',
  // Content-Type 및 cache 처리
  headers: {
    'Content-Type': 'application/json',
    // 'Cahe-Control': 'no-cache',
    // 'Pragma': 'no-cache',
    // 'Expires': '0'
  },
  // 요청 제한 시간
  timeout: 10000,
});

/**
 * axios 요청 인터셉터 (request interceptors)
 * TODO: API 요청 전에 처리해야 할 로직 추가(ex. 인증 정보를 헤더에 추가)
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // token 가져오는 로직(아래는 예시)
    const user = JSON.parse(localStorage.getItem('user') as string);
    const grantType = user?.grantType;
    const token = user?.accessToken;

    // user가 있는 경우 = 로그인한 상태 => 로그인한 뒤 보내는 요청엔 해더에 grantType과 token을 추가해서 요청
    if (user && config.url !== '/refresh') {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `${grantType} ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * axios 응답 인터셉터 (response interceptors)
 * TODO: API 응답 전에 처리해야 할 로직 추가(인증 토근 만료 시 갱신)
 */
axiosInstance.interceptors.response.use(
  async (response: AxiosResponse): Promise<AxiosResponse> => {
    // 만약 서버에서 오류 코드를 만든 경우
    if (response.status === 200) {
      if (response.data.statusCode === 'auth') {
        // 토근 갱신 요청 로직 혹은 에러 핸들링 코드 추가
        return response;
      }
    } else {
    }

    return response;
  },
  (error: AxiosError) => {
    const status = error.response ? error.response.status : null;

    // API 응답이 인증 오류일 경우 처리할 로직 추가
    if (status === 401) {
      // Handle unauthorized access
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }

    console.error(`interceptors error`, error);
    return Promise.reject(error);
  }
);
