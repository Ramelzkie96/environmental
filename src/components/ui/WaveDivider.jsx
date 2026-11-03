export default function WaveDivider() {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 w-full md:h-44"
    >
      <path
        d="M0 120 C200 60 380 70 560 110 C760 155 960 150 1140 100 C1260 68 1360 60 1440 80 L1440 220 L0 220 Z"
        fill="var(--color-brand-light)"
        opacity="0.55"
      />
      <path
        d="M0 160 C180 120 360 130 540 160 C760 198 980 190 1200 140 C1300 118 1380 116 1440 130 L1440 220 L0 220 Z"
        fill="var(--color-brand-light)"
        opacity="0.9"
      />
      <path
        d="M0 195 C240 170 460 180 700 200 C940 220 1200 190 1440 175 L1440 220 L0 220 Z"
        fill="#bfe3c4"
        opacity="0.8"
      />
    </svg>
  );
}