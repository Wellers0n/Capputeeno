function getProduct() {
  const products =
    typeof window !== 'undefined' && localStorage?.getItem?.('products')
      ? JSON.parse(localStorage?.getItem?.('products'))
      : []

  const total = products
    .map(item => item.count)
    .reduce((prev, current) => prev + current, 0)

  return {total, products}
}

export { getProduct }
