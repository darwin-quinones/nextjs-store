

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  console.log('Hello world from home page')

  return (
    <main className={styles.main}>
      <h1>Hello world!! </h1>
    </main>
  );
}
