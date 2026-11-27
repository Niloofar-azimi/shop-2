import Container from "@/component/Container";
import Pagination from "@/component/Pagination";
import ProductItem, { IProductList } from "@/component/ProductItem";
import Search from "@/component/Search";

import Link from "next/link";

interface IStoreProps {
  searchParams: Promise<{ page?: string; per_page?: string; title?: string }>;
}

export default async function Store({ searchParams }: IStoreProps) {
  const { page = "1", per_page = "4", title = "" } = await searchParams;

  let data: IProductList | null = null;
  let loadFailed = false;

  try {
    const params = new URLSearchParams({ _page: page, _per_page: per_page });
    if (title) {
      params.set("title_contains", title);
    }

    const response = await fetch(
      `http://localhost:3001/product?${params.toString()}`
    );
    data = (await response.json()) as IProductList;
  } catch {
    loadFailed = true;
  }

  const products = data?.data ?? [];

  return (
    <Container>
      <div className="pt-8">
        <h1 className="mb-6 text-right text-2xl font-bold text-gray-900">
          فروشگاه
        </h1>

        <Search />

        {loadFailed ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center text-gray-500">
            دریافت محصولات با خطا مواجه شد. لطفاً مطمئن شوید سرور دیتابیس
            (json-server) در حال اجراست.
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center text-gray-500">
            محصولی پیدا نشد.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
              <Link
                key={item.id}
                href={`/store/${item.id}`}
                className="block h-full"
              >
                <ProductItem {...item} />
              </Link>
            ))}
          </div>
        )}

        <Pagination pageCount={data?.pages ?? 0} />
      </div>
    </Container>
  );
}
