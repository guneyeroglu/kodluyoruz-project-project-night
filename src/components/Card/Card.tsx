import { IData } from "../../global/interfaces/data";
import styles from "./card.module.scss";

interface IProps {
  data: IData | null;
}

const Card = (props: IProps) => {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__image}>
        <img src={data?.image} alt={data?.name} />
      </div>
      <div className={styles.wrapper__info}>
        <span className={styles.title}>{data?.name}</span>
        <span
          className={`${styles.subtitle} ${
            data?.status === "Alive" ? styles.alive : styles.dead
          }`}
        >
          {data?.status}
        </span>
      </div>
    </div>
  );
};

export default Card;
