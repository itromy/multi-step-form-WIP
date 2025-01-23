import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <ul>
              <li><Link href="/your-info">Step 1</Link></li>
              <li><Link href="/add-ons">Step 2</Link></li>
              <li><Link href="/select-plan">Step 3</Link></li>
              <li><Link href="/summary">Step 4</Link></li>
          </ul>
      </main>
    </div>
  );
}
