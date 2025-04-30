import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
// export const metadata: Metadata = {
//   title: "Honme",
//   description: "Homepage",
// };

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = () => {
  // await delay(5000);

  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
