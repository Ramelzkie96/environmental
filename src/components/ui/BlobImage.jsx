import { Leaf } from "lucide-react";

export default function BlobImage({ src, alt = "" }) {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      {/* Clip path definition. objectBoundingBox = coordinates from 0 to 1 */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="about-blob" clipPathUnits="objectBoundingBox">
            <path
              d="M0.53,0
                 C0.68,0 0.80,0.10 0.90,0.25
                 C1.0,0.38 1.0,0.55 0.95,0.68
                 C0.88,0.88 0.65,1 0.42,1
                 C0.25,1 0.08,0.95 0.02,0.80
                 C-0.04,0.66 0.06,0.55 0.15,0.45
                 C0.28,0.30 0.38,0.15 0.53,0 Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Pale green circle behind the photo */}
      <div
        aria-hidden="true"
        className="absolute top-[6%] -left-[4%] size-[55%] rounded-full bg-brand-light"
      />

      {/* Green accent curve, bottom right */}
      <svg
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden="true"
        className="absolute right-[-4%] bottom-[-8%] w-[75%]"
      >
        <path
          d="M10 285 C140 310 330 240 392 70"
          stroke="var(--color-brand)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M40 262 C160 296 300 230 360 120"
          stroke="var(--color-brand-light)"
          strokeWidth="26"
          strokeLinecap="round"
        />
      </svg>

      {/* The photo, clipped to the blob */}
      <img
        src={src}
        alt={alt}
        className="relative aspect-[6/5] w-full object-cover"
        style={{ clipPath: "url(#about-blob)" }}
      />

      {/* Floating leaves */}
      <Leaf
        aria-hidden="true"
        className="absolute top-[2%] right-[4%] size-14 rotate-12 fill-brand/90 text-brand"
      />
      <Leaf
        aria-hidden="true"
        className="absolute top-[14%] right-[-2%] size-12 -rotate-45 fill-brand/70 text-brand"
      />
    </div>
  );
}