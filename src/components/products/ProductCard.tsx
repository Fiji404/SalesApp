import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
    title: string;
    imgPath: string;
    price: string;
}

const ProductCard = ({ title, imgPath, price }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <h2>{price || <Skeleton style={{ padding: '.5rem 0' }} />}</h2>
            {imgPath ? (
                <img className="h-20" alt="" />
            ) : (
                <Skeleton style={{ minHeight: '100px' }} />
            )}
            <p>{price || <Skeleton />}</p>
        </div>
    );
};

export default ProductCard;
