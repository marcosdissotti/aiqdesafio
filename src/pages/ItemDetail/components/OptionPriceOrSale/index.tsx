import formatPrice from '@utils/formatPrice';

interface OptionPriceOrSaleInterface {
  price: number;
  saleOriginalPrice: number;
  optionIsRequired: boolean;
}

const OptionPriceOrSale: React.FC<OptionPriceOrSaleInterface> = ({ price, saleOriginalPrice, optionIsRequired }) => {
  if (!(price > 0)) return;
  const isSpecialOffer = saleOriginalPrice > 0;

  if (isSpecialOffer) {
    return (
      <p>
        de {formatPrice(saleOriginalPrice)} por <span>{formatPrice(price)}</span>
      </p>
    );
  }

  return (
    <p className='option-price'>
      {!optionIsRequired && `+`}
      {formatPrice(price)}
    </p>
  );
};

export default OptionPriceOrSale;
