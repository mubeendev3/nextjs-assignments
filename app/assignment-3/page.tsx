import Products from "../components/Products";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if (!res.ok) {
    throw new Error("Failed To Fetch Data");
  }

  return res.json();
};

export default async function Home() {
  const products = await getData();

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
