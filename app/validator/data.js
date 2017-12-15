import { validateLength, validateFormat } from 'ember-changeset-validations/validators';

export default {
  data_url: [
    validateLength({ min: 1 }),
    validateFormat({ type: 'url' })
  ]
};