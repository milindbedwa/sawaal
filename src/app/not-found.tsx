import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page flex min-h-dvh flex-col items-center justify-center text-center">
      <p className="t-eyebrow">404</p>
      <h1 className="font-display t-display mt-3 text-balance">This question does not exist yet.</h1>
      <Link href="/" className="btn btn-primary mt-8">
        Back to today
      </Link>
    </div>
  );
}
