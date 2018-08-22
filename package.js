Package.describe({
  "summary": "CPU Profiler for Meteor (used with Kadira)",
  "version": "1.3.0",
  "git": "https://github.com/meteorhacks/kadira-profiler.git",
  "name": "meteorhacks:kadira-profiler"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], ['client', 'server']);

});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.4-beta.7');
  api.use('http');
  api.use('check');
  api.use('random');
  api.use('meteorhacks:kadira@2.30.4');
  api.imply('meteorhacks:kadira@2.30.4');
  api.use('meteorhacks:kadira-binary-deps@1.6.0');

  api.add_files('lib/server.js', 'server');
  api.add_files('lib/client.js', 'client');
}
