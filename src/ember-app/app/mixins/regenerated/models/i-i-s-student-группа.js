import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  студент: DS.hasMany('i-i-s-student-студент', { inverse: 'группа', async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-student-группа.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  студент: {
    descriptionKey: 'models.i-i-s-student-группа.validations.студент.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГруппаE', 'i-i-s-student-группа', {
    название: attr('Название', { index: 0 }),
    студент: hasMany('i-i-s-student-студент', 'Студент', {
      фамилия: attr('Фамилия', { index: 0 }),
      среднийБалл: attr('Средний балл', { index: 1 })
    })
  });

  modelClass.defineProjection('ГруппаL', 'i-i-s-student-группа', {
    название: attr('Название', { index: 0 })
  });
};
