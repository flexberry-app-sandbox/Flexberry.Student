import { Serializer as ГруппаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-student-группа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГруппаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
