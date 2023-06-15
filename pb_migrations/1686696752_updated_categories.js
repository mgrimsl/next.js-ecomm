migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kn1wouc6q3urikc")

  // remove
  collection.schema.removeField("zuzm7zoi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7wspagmx",
    "name": "category",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kn1wouc6q3urikc")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("7wspagmx")

  return dao.saveCollection(collection)
})
