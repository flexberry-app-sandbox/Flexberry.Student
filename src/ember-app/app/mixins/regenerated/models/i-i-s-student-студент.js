import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  среднийБалл: DS.attr('decimal'),
  фамилия: DS.attr('string'),
  группа: DS.belongsTo('i-i-s-student-группа', { inverse: 'студент', async: false })
});

export let ValidationRules = {
  среднийБалл: {
    descriptionKey: 'models.i-i-s-student-студент.validations.среднийБалл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-student-студент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группа: {
    descriptionKey: 'models.i-i-s-student-студент.validations.группа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтудентE', 'i-i-s-student-студент', {
    фамилия: attr('Фамилия', { index: 0 }),
    среднийБалл: attr('Средний балл', { index: 1 })
  });
};
