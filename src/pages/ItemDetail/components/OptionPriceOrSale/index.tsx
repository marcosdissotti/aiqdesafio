import formatPrice from '@utils/formatPrice';

interface OptionPriceOrSaleInterface {
  price: number;
  saleOriginalPrice: number;
}

const OptionPriceOrSale: React.FC<OptionPriceOrSaleInterface> = ({ price, saleOriginalPrice }) => {
  if (!(price > 0)) return;
  const isSpecialOffer = saleOriginalPrice > 0;

  if (isSpecialOffer) {
    return (
      <p>
        de {formatPrice(saleOriginalPrice)} por <span>{formatPrice(price)}</span>
      </p>
    );
  }

  return <p className='option-price'>{formatPrice(price)}</p>;
};

export default OptionPriceOrSale;
