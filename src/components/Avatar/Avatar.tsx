import styles from './Avatar.module.css';

interface AvatarProps {
    imageUrl: string;
    altText: string;
  }

export default function Avatar({imageUrl, altText}: AvatarProps) {
    return (
        <div className={styles['avatar-container']}>
        <img src={imageUrl} alt={altText} className={styles['avatar-image']} />
      </div>
    )
}