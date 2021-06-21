import { useEffect, useState } from "react";
const axios = require("axios");

const useFetchData = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const ac = new AbortController();
    const fetchDataFromServer = async () => {
      try {
        const res = axios.get(url);
        const serverResponse = await res;
        setResponse(serverResponse);
      } catch (error) {
        setError(error);
      }
    };
    fetchDataFromServer();
    return () => ac.abort();
  }, [url]);
  return { response, error };
};

export default useFetchData;
