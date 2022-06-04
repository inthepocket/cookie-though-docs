import styles from './Hamburger.module.css';

interface Props {
  id: string;
}

const Hamburger = ({ id }: Props) => {
  return (
    <label htmlFor={id} className={styles.wrapper} aria-label="Toggle Menu">
      <div className={styles.hamburger}>
        <span />
        <span />
        <span />
      </div>
    </label>
  );
};

export default Hamburger;
