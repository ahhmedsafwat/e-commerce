import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Products {
  id: number;
  title: string;
  price: number;
  image: { font: string; back: string; dressed: string };
  category: string;
  rating: { rate: string };
  discount: { amout: number; percentage: number };
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
  const postData = async (url: string, newData: Products) => {
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
