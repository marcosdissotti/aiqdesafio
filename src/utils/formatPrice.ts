export default function formatPrice(price: number) {
  if (price === undefined) return;
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return formattedPrice;
}
