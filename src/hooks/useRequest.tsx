import { useDebugValue, useEffect, useState } from "react";

export default function useRequest(url: string) {
  const [data, setData] = useState();

  async function getUser(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getUser(url);
  }, [url]);

  useDebugValue("Request hook");

  return { data };
}
