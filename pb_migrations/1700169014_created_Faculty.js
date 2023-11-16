/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "szhevyupf1x4eh6",
    "created": "2023-11-16 21:10:14.643Z",
    "updated": "2023-11-16 21:10:14.643Z",
    "name": "Faculty",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ynad6oio",
        "name": "Faculty_Type",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b19biymr",
        "name": "Programme",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8y5888ue",
        "name": "Student",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "0sywd52is3rz1jb",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("szhevyupf1x4eh6");

  return dao.deleteCollection(collection);
})
