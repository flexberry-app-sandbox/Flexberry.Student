import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-student-группа-l');
  this.route('i-i-s-student-группа-e',
  { path: 'i-i-s-student-группа-e/:id' });
  this.route('i-i-s-student-группа-e.new',
  { path: 'i-i-s-student-группа-e/new' });
});

export default Router;
