import ProductCard from './ProductCard';

const AvailableProducts = () => {
    return (
        <div className="px-5 mt-6 grid gap-6 auto-fit">
            <ProductCard imgPath="" title="" price="" />
            <ProductCard imgPath="" title="" price="" />
            <ProductCard imgPath="" title="" price="" />
        </div>
    );
};

export default AvailableProducts;