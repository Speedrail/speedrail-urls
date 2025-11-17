import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="mb-8 text-4xl font-bold text-black dark:text-zinc-50">
            Support
          </h1>
          
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            For support, please email{" "}
            <a
              href="mailto:dkny11692@gmail.com"
              className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              dkny11692@gmail.com
            </a>
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block rounded-full border border-solid border-black/[.08] px-5 py-2 text-base font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

