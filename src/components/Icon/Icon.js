// Dependencies
import React from 'react';

export default function Icon({
  glyph,
  className,
  width,
  height,
  ariaHidden = true
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden={ariaHidden}
      viewBox={glyph.viewBox}
    >
      <use xlinkHref={`#${glyph.id}`} />
    </svg>
  );
}
