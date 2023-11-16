/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0sywd52is3rz1jb",
    "created": "2023-11-16 20:55:44.313Z",
    "updated": "2023-11-16 20:55:44.313Z",
    "name": "Student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kf6evlsu",
        "name": "Student_Number",
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
        "id": "adtes0dk",
        "name": "Student_Email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("0sywd52is3rz1jb");

  return dao.deleteCollection(collection);
})
