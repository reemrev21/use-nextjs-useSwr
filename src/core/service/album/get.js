import { baseUrl } from "../../../../utils/baseUrl";
import useSWR from "swr";
import { getFetcher } from "./fetcher";

const useGetAlbums = () => {
  const { data, error } = useSWR(`${baseUrl}/photos`, getFetcher);

  return {
    photos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useGetAlbums };
