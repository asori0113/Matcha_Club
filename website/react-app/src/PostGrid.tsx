import { useState, useEffect } from "react";
import "./style.css";
import {PostCard} from "./components/PostCard";
import type { CSSProperties } from "react";

function PostGrid() {
  interface PostInfo {
    id: number;
    author: string;
    width: number;
    height: number;
    imageUrl: string;
    imageDownloadUrl: string;
  }

  const [imageList, setImageList] = useState<PostInfo[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("https://picsum.photos/v2/list?limit=50") 
      const data: PostInfo[] = await res.json()

      const portraits = data.filter((img) => img.height > img.width).slice(0, 6)
      const landscapes = data.filter((img) => img.width >= img.height).slice(0, 6)

      setImageList([...portraits, ...landscapes])
    }

    fetchImages()
  }, [])

  const COLUMN_WIDTH = 250;   // must match gridTemplateColumns
  const ROW_SIZE = 10;        // grid-auto-rows (px)
  const GAP = 10;             // matches `gap: "10px"`

  const styles: Record<string, CSSProperties> = {
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, ${COLUMN_WIDTH}px)`,
      gridAutoRows: `${ROW_SIZE}px`,
      gap: `${GAP}px`,
      padding: "20px",
      justifyContent: "center",
    },
  };

  const renderedImages = imageList.map((image) => (
    <PostCard
      key={image.id}
      src={image.imageDownloadUrl}
      size={"large"}
      width={image.width}
      height={image.height}

      columnWidth={COLUMN_WIDTH}
      rowSize={ROW_SIZE}
      rowGap={GAP}
    />
  ));

  return (
    <section className="grid-container" style={styles.grid}>
      {renderedImages}
    </section>
  );
}

export default PostGrid;
