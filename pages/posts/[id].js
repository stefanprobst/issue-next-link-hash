import Link from "next/link";

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "post" } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: {} };
}

export default function PostPage() {
  /**
   * Using next/link for hash links because of:
   * https://github.com/vercel/next.js/issues/16746#issuecomment-789970857
   */
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Link href="#hash">
        <a>Go to hash</a>
      </Link>
      <Link href={{ hash: "hash" }}>
        <a>Go to hash</a>
      </Link>
      <div id="hash" style={{ marginTop: "100vh" }}>
        Hash
      </div>
    </main>
  );
}
