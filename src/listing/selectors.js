export const createListProps = (listing) => {
  return mergeProps(propsWithoutItems(listing), propsWithItems(listing))
}

const propsWithoutItems = (listing) => (Object
  .keys(listing)
  .filter(key => key !== 'itemsById')
  .reduce((accumulator, target) => ({
    ...accumulator,
    [target]: listing[target]
  }), {}))

const propsWithItems = (listing) => ({items: Object.keys(listing['itemsById']).map((id) => listing['itemsById'][id])})

const mergeProps = (propsWithoutItems, propsWithItems) => (Object.assign({}, propsWithoutItems, propsWithItems))
