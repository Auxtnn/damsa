import Link from "next/link";

export default function DAMSALogo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 60"
        className="h-6 w-auto"
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c7d2fe" /> {/* indigo-200 */}
            <stop offset="100%" stopColor="#e9d5ff" /> {/* purple-200 */}
          </linearGradient>
        </defs>

        {/* D with A inside */}
        <path
          d="M10 10 L30 10 C45 10 55 20 55 30 C55 40 45 50 30 50 L10 50 L10 10 Z M22 22 L22 38 L26 38 L30 30 L34 38 L38 38 L38 22 L32 22 L30 26 L28 22 L22 22 Z"
          fill="url(#logoGradient)"
        />

        {/* A (separate letter after D) */}
        <path
          d="M65 50 L73 50 L80 30 L87 50 L95 50 L83 10 L75 10 L65 50 Z M76 34 L82 34 L79 24 L76 34 Z"
          fill="url(#logoGradient)"
        />

        {/* M */}
        <path
          d="M105 10 L115 10 L122.5 35 L130 10 L140 10 L140 50 L132 50 L132 25 L125 50 L120 50 L113 25 L113 50 L105 50 L105 10 Z"
          fill="url(#logoGradient)"
        />

        {/* S - now as text */}
        <text
          x="148"
          y="50"
          fontSize="55"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="url(#logoGradient)"
          dominantBaseline="baseline"
        >
          S
        </text>

        {/* A (final letter) */}
        <path
          d="M190 50 L198 50 L205 30 L212 50 L220 50 L208 10 L200 10 L190 50 Z M201 34 L207 34 L204 24 L201 34 Z"
          fill="url(#logoGradient)"
        />
      </svg>
    </Link>
  );
}
