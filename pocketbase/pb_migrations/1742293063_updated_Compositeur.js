/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812")

  // update collection data
  unmarshal({
    "name": "compositeurs"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812")

  // update collection data
  unmarshal({
    "name": "Compositeur"
  }, collection)

  return app.save(collection)
})
