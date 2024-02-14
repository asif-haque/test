import React, { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=1&results=1&seed=abc`
        );
        if (!response.ok) {
          throw new Error();
        }
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fn();
  }, []);
  console.log(data);

  return loading === true ? (
    <h1 className="text-center mt-20 font-bold text-5xl">
      Informtion Loading ...
    </h1>
  ) : (
    <div className="mt-[50vh] [transform:translate(0,-50%)]">
      {error && <h1>{error}</h1>}
      {data && <Card {...data[0]} />}
    </div>
  );
}
