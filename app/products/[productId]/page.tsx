import { notFound } from "next/navigation";

type ProductDetailProps = {
  params: Promise<{
    productId: string;
  }>;
};

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { productId } = await params;

  if (Number(productId) > 1000) {
    notFound()
  }



  return <div>ProductDetail {productId}</div>;
};

export default ProductDetail;
