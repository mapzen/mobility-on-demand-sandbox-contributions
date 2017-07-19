export function serializerForAdapter(store, adapter, modelName) {
  var serializer = adapter.serializer;

  if (serializer === undefined) {
    serializer = store.serializerFor(modelName);
  }

  if (serializer === null || serializer === undefined) {
    serializer = {
      extract: function extract(store, type, payload) {
        return payload;
      }
    };
  }

  return serializer;
}