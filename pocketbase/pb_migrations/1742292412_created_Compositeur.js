/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1819170229",
        "max": 0,
        "min": 0,
        "name": "nom",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "select2663700287",
        "maxSelect": 2,
        "name": "nationalite",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "FR",
          "US",
          "UK"
        ]
      },
      {
        "hidden": false,
        "id": "date3467569840",
        "max": "",
        "min": "",
        "name": "date_naissance",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date2274296624",
        "max": "",
        "min": "",
        "name": "date_deces",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_3609505812",
    "indexes": [],
    "listRule": null,
    "name": "Compositeur",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3609505812");

  return app.delete(collection);
})
