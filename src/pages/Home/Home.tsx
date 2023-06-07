import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { IData } from "../../global/interfaces/data";

import styles from "./home.module.scss";

const Home = () => {
  const [data, setData] = useState<IData[] | null>([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    setData(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {data?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Home;
