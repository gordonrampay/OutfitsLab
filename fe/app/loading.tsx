export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4 bg-white">
      {["S", "W", "O", "T", "T"].map((char, i) => (
        <div key={i} className="loader">
          <svg viewBox="0 0 80 80" className="w-11 h-11">
            <rect x="8" y="8" width="64" height="64" />
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              className="fill-black text-2xl font-bold"
            >
              {char}
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
}