import type { Product } from "@/data/products";
import { ProductArt } from "@/components/ProductArt";

export function ProductImage({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  if (product.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={product.image}
        alt=""
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return <ProductArt art={product.art} className={className} />;
}
