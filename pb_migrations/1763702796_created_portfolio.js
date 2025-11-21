/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i4b37zlv3s3kvrl",
    "created": "2025-11-21 05:26:36.524Z",
    "updated": "2025-11-21 05:26:36.524Z",
    "name": "portfolio",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hdcrutsc",
        "name": "profile_picture",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i4b37zlv3s3kvrl");

  return dao.deleteCollection(collection);
})
