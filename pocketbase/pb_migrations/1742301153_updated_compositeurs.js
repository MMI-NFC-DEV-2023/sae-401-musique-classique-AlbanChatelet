/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3496841684",
    "hidden": false,
    "id": "relation1094643262",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "oeuvres",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812")

  // remove field
  collection.fields.removeById("relation1094643262")

  return app.save(collection)
})
