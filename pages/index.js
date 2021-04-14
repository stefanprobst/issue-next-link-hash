import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Link href="/posts/post">
        <a>Go to example</a>
      </Link>
    </main>
  );
}
