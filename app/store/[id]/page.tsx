import Container from '@/component/Container'
import AddToCart from '@/component/AddToCart'
import { IProductItemProps } from '@/component/ProductItem'
import { formatNumberWithCommas } from '@/Utils/Number'

interface IProductProps {
    params: Promise<{ id: string }>
}

async function Product({ params }: IProductProps) {

    const { id } = await params

    let data: IProductItemProps | null = null
    try {
        const response = await fetch(`http://localhost:3001/product/${id}`)
        if (response.ok) {
            data = await response.json() as IProductItemProps
        }
    } catch {
        data = null
    }

    if (!data) {
        return (
            <Container>
                <div className="py-20 text-center">
                    <h1 className="text-xl font-bold text-gray-900">محصول پیدا نشد</h1>
                    <p className="mt-2 text-gray-500">محصول مورد نظر وجود ندارد.</p>
                </div>
            </Container>
        )
    }

  return (
    <Container>
        <div className="my-8 grid gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
            <div className="overflow-hidden rounded-2xl bg-gray-50">
                <img
                    src={data.image}
                    alt={data.title}
                    className="h-full max-h-[420px] w-full object-contain p-6"
                />
            </div>

            <div className="text-right rtl">
                <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>
                <p className="mt-4 leading-7 text-gray-500">{data.description}</p>
                <p className="mt-6 text-2xl font-bold text-sky-600">
                    {formatNumberWithCommas(data.price ?? 0)}$
                </p>
                <div className="mt-6">
                    <AddToCart id={id} />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Product
