"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong!
            </h2>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-[#EC111A] text-white rounded hover:bg-[#d00f17] transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}