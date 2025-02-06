"use client"; // Important for client-side components

import { useRouter } from "next/navigation";
import styles from '../styles/BackButton.module.css';

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={styles.backButton}>
      ← Back to News
    </button>
  );
};

export default BackButton;