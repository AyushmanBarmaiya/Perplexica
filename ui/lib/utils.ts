import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getAccessKey, getBackendURL } from './config'

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const formatTimeDifference = (date1: Date, date2: Date): string => {
  const diffInSeconds = Math.floor(
    Math.abs(date2.getTime() - date1.getTime()) / 1000,
  );

  if (diffInSeconds < 60)
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''}`;
  else if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minute${Math.floor(diffInSeconds / 60) !== 1 ? 's' : ''}`;
  else if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hour${Math.floor(diffInSeconds / 3600) !== 1 ? 's' : ''}`;
  else if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 86400)} day${Math.floor(diffInSeconds / 86400) !== 1 ? 's' : ''}`;
  else
    return `${Math.floor(diffInSeconds / 31536000)} year${Math.floor(diffInSeconds / 31536000) !== 1 ? 's' : ''}`;
};

export const clientFetch = async (path: string, payload: any): Promise<any> => {
  let headers = payload.headers;
  const url = `${getBackendURL()}${path}`;
  const secret_token = getAccessKey();

  if (secret_token) {
    if (headers == null) {
      headers = {};
    };

    headers['Authorization'] = `Bearer ${secret_token}`;
    payload.headers = headers;
  };

  return await fetch(url, payload);
};
