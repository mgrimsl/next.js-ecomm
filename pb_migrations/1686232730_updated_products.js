migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1teuy2ady3qib7q")

  // remove
  collection.schema.removeField("wkkf7bqb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enaybizh",
    "name": "image",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkkf7bqb",
    "name": "image",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("enaybizh")

  return dao.saveCollection(collection)
})
