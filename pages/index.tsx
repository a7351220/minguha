import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Minguha 神教</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          {/* <Image src="/icons/drop.webp" alt="drop" width={64} height={64} /> */}
          <h2 className={styles.selectBoxTitle}>為 Minguha 貢獻心臟</h2>
          <p className={styles.selectBoxDescription}>
            進來用你的心臟換取Minguha的證明
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          {/* <Image src="/icons/token.webp" alt="token" width={64} height={64} /> */}
          <h2 className={styles.selectBoxTitle}>得到 Minguha 的愛</h2>
          <p className={styles.selectBoxDescription}>
            用 Minguha 的證明換取更多的愛
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
