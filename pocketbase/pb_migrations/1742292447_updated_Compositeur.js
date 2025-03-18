/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3813727755",
    "maxSelect": 3,
    "name": "instruments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "violon",
      "trompette",
      "flute"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3813727755",
    "maxSelect": 1,
    "name": "instruments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "violon",
      "trompette",
      "flute"
    ]
  }))

  return app.save(collection)
})
