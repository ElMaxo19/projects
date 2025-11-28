/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4149616551")

  // update collection data
  unmarshal({
    "name": "post"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4149616551")

  // update collection data
  unmarshal({
    "name": "pagePosts"
  }, collection)

  return app.save(collection)
})
