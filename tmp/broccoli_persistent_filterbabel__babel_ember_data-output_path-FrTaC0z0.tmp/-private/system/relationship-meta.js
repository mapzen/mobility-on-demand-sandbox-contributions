import { singularize } from 'ember-inflector';
import normalizeModelName from './normalize-model-name';
import { runInDebug } from 'ember-data/-debug';

export function typeForRelationshipMeta(meta) {
  var modelName = void 0;

  modelName = meta.type || meta.key;
  if (meta.kind === 'hasMany') {
    modelName = singularize(normalizeModelName(modelName));
  }
  return modelName;
}

export function relationshipFromMeta(meta) {
  var result = {
    key: meta.key,
    kind: meta.kind,
    type: typeForRelationshipMeta(meta),
    options: meta.options,
    name: meta.name,
    parentType: meta.parentType,
    isRelationship: true
  };

  runInDebug(function () {
    return result.parentType = meta.parentType;
  });

  return result;
}