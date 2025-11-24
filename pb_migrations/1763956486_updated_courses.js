/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2761716383",
    "max": 0,
    "min": 0,
    "name": "instructor",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2761716383",
    "max": 0,
    "min": 0,
    "name": "instractor",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
