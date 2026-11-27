import Container from "@/component/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col items-center gap-6 py-16 text-center sm:py-24">
        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-600">
          Welcome to Niloo-Shop
        </span>

        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Simple shop for your everyday style
        </h1>

        <p className="max-w-xl text-gray-500">
          Browse the store, add what you like to your cart and apply a
          discount code before checkout.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/store"
            className="rounded-full bg-sky-500 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-sky-600"
          >
            Visit Store
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
          >
            View Cart
          </Link>
        </div>
      </section>
    </Container>
  );
}
