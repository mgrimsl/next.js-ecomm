migrate((db) => {
  const collection = new Collection({
    "id": "kn1wouc6q3urikc",
    "created": "2023-06-13 22:51:28.947Z",
    "updated": "2023-06-13 22:51:28.947Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zuzm7zoi",
        "name": "category",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "1teuy2ady3qib7q",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("kn1wouc6q3urikc");

  return dao.deleteCollection(collection);
})
