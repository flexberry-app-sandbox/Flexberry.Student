import {
  defineNamespace,
  defineProjections,
  Model as ГруппаMixin
} from '../mixins/regenerated/models/i-i-s-student-группа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГруппаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
