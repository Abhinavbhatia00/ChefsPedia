import { useEffect, useState } from "react";
import axios from "axios";

export const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }
    const fetchdata = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [url]);

  return { data, error, loading };
};
