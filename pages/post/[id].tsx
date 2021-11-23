import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { useRouter } from "next/router";

const Post: NextPage = (props) => {
  console.log("[Post]", props, process.env);
  const { pathname, query } = useRouter();
  //   console.log(pathname, query.id);
  return <h3>Post</h3>;
};

// export const getStaticProps: GetStaticProps = async (props) => {
//   console.log("[getStaticProps]", process.cwd());
//   console.log("[getStaticProps]", props);
//   await new Promise((res) => {
//     setTimeout(() => {
//       res(100);
//     }, 500);
//   });
//   return {
//     props: { data: 2 },
//     revalidate: 10,
//     // redirect: {
//     //   destination: "/",
//     //   permanent: false,
//     // },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async (props) => {
//   console.log("[getStaticPaths]", props);

//   const paths = Array.from("a".repeat(10)).map((num, i) => ({
//     params: { id: i.toString() },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps: GetServerSideProps = async (props) => {
  console.log("[getServerSideProps]", process.env.DUMMY);
  // console.log("[getServersSideProps]", props);
  return { props: { data: 3 } };
};
export default Post;
