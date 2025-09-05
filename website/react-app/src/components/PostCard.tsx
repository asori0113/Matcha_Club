
import type { CSSProperties } from "react";
import {useRef} from "react"

interface PostCardProps {
  src: string;
  size: "small" | "medium" | "large";
  width: number;         // intrinsic image width (from API)
  height: number;        // intrinsic image height (from API)
  columnWidth: number;   // from grid
  rowSize: number;       // from grid
  rowGap: number;        // from grid
}

export function PostCard({
  src,
  size,
  width,
  height,
  columnWidth,
  rowSize,
  rowGap,
}: PostCardProps) {

  const hoverRef = useRef<HTMLDivElement>(null)

  const showOverlay = () => {
    if (hoverRef.current) {
      hoverRef.current.style.opacity = "1";
      hoverRef.current.style.pointerEvents = "auto";
    }
  };

  const hideOverlay = () => {
    if (hoverRef.current) {
      hoverRef.current.style.opacity = "0";
      hoverRef.current.style.pointerEvents = "none";
    }
  };
  // Height the image would have when rendered at columnWidth
  const projectedHeight = Math.round((height / width) * columnWidth);

  // Masonry span formula (accounts for gap between rows)
  const rawSpan = Math.ceil((projectedHeight + rowGap) / (rowSize + rowGap));

  // Keep your size presets as *caps* so small/medium/large still mean something
  const maxSpansBySize = {
    small: 26,
    medium: 35,
    large: 45,
  };

  // Clamp instead of modulo so tall items don’t shrink unpredictably
  const itemSpan = Math.max(1, Math.min(rawSpan, maxSpansBySize[size]));

  const style: Record<string, CSSProperties> = {
    card: {
      borderRadius: "15px",
      overflow: "hidden",
      backgroundColor: "grey",
      position: "relative",
      gridRowEnd: `span ${itemSpan}`, // <-- dynamic span here
    },
    img: {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "inherit",
    },
    saveButton: {
      display: "inline",

    },

    hover: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      
      zIndex: "9999",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      transition: "opacity 0.3s ease-in-out",
      opacity: "0",
    }
  };

  return (
    <div 
      style={style.card} 
      onMouseEnter={showOverlay} 
      onMouseLeave={hideOverlay}>
        
      <div ref={hoverRef} style={style.hover}>
        <div style={style.saveButton}><button>Save</button></div>
      </div>
      
      <img src={src} style={style.img} loading="lazy" />
    </div>
  );
}

