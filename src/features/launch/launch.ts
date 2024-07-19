import { useSuspenseQuery } from '@apollo/client';
import query from '@/features/launch/launch.query';

export const useLaunch = () => {
  const { data, error } = useSuspenseQuery(query);
  return {
    launches: data.launches,
    error
  };
};