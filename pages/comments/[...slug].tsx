import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Comments.module.css";

const Comments: NextPage = (props) => {
  console.log("[Comments]", props);
  const { isFallback } = useRouter();
  if (isFallback) return <h3>Fallback</h3>;
  return (
    <div className={styles.big}>
      <p>Comments</p>
      <p>scoped!</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  console.log("Comments [getStaticProps]", props);

  return {
    props: { data: 2 },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async (props) => {
  const paths = Array.from("a".repeat(10)).map((num, i) => ({
    params: { slug: [i.toString(), i.toString()] },
  }));

  return { paths, fallback: true };
};

export default Comments;
