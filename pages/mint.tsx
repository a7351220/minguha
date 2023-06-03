import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { editionDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.button}>
        回到首頁
      </Link>
      <h1 className={styles.h1}>為Minguha貢獻心臟</h1>

      <p className={styles.explain}>
        這是神聖的<b>Minguha</b>，想要為他貢獻你的心臟嗎?
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress={editionDropContractAddress}
        action={(contract) => contract.erc1155.claim(0, 1)}
        onSuccess={() => {
          alert("成功貢獻!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        貢獻你的心臟
      </Web3Button>
    </div>
  );
};

export default Mint;
