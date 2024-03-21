import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: { front: string; back: string; dressed: string };
  categories: { gender: string; type: string; fashion: string };
  rating: { rate: number };
  discount: { amount: number; percentage: number };
}

const useFetchData = <T>(url: string) => {
  const {
    isPending,
    error,
    data: fakeData,
  } = useQuery<T>({
    queryKey: ["fake"],
    queryFn: async () => {
      const response = await axios({
        url: url,
        method: "get",
      });
      return response.data;
    },
  });

  return { isPending, error, fakeData };
};

const usePostData = () => {
  const postData = async (url: string, newData: Product) => {
    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      throw new Error("Error posting data");
    }
  };

  return { postData };
};

export { useFetchData, usePostData };
