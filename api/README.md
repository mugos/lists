# Products Lists
Group the products in lists that could be added at once to the cart.

# How it Works

## Rules
* Group specific products.
  * Defined by the `Variant`.
  * Store the quantity of the item that compose the list.
* Be categorized.
* Store some custom information.

## Used hooks
This plugin use the following Peperoni events.

### Listening
* `products:deleted` - When a product is deleted. It's used to remove products from lists.
* `products:changed` - When a product is changed. It's used to update and recalculate things in the lists.
* `taxonomies:deleted` - When a taxonomy is deleted. It's used to remove the taxonomy from the lists.

## Emitting
* `order:items:add` - Add an `Variant` to the `Order`

## Commands
// Update coverage report
docker-compose -f ../docker-compose.coverage.yml run --rm coverage yarn run cover
// Run cover with watch
// Running on port 666
docker-compose -f ../docker-compose.coverage.yml up
