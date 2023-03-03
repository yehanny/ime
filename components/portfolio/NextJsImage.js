import * as React from "react";
import Image from "next/legacy/image";

export default function NextJsImage(image, offset, rect) {
  const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
  const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));

  return (
    <div style={{ position: "relative", width, height }}>
      <Image fill alt="" src={image} loading="eager" draggable={false} sizes={typeof window !== "undefined" ? `${Math.ceil((width / window.innerWidth) * 100)}vw` : `${width}px`} />
    </div>
  );
}
