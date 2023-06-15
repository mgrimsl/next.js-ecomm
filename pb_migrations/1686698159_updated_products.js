migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1teuy2ady3qib7q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "umn7aaxh",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zd6esnec",
    "name": "raitingCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1teuy2ady3qib7q")

  // remove
  collection.schema.removeField("umn7aaxh")

  // remove
  collection.schema.removeField("zd6esnec")

  return dao.saveCollection(collection)
})
