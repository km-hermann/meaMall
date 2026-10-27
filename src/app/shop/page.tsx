import { Suspense } from "react";
import { ShopHome } from "./ShopHome";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-sm">…</div>}>
      <ShopHome />
    </Suspense>
  );
}
