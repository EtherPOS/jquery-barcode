Package.describe({
  summary: "jQuery barcode plugin - a jQuery plugin for generating barcodes",
  // Version number.
  version: "2.0.3",
  // Optional.  Default is package directory name.
  name: "steeve:jquery-barcode",
  // Optional github URL to your source repository.
  git: "https://github.com/EtherPOS/jquery-barcode.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.addFiles([
    'lib/jquery-barcode-2.0.2.min.js',
  ], 'client'
  );
});