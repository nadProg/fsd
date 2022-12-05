import styles from './Overlay.module.scss';

type OverlayProps = {
  onClick?: () => void;
};

export const Overlay = ({ onClick }: OverlayProps) => <div className={styles.Overlay} onClick={onClick} />;
