migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1teuy2ady3qib7q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjdkuyx8",
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
  const collection = dao.findCollectionByNameOrId("1teuy2ady3qib7q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjdkuyx8",
    "name": "catagory",
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
})
