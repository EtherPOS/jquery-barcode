Package.describe({
  summary: "jQuery barcode plugin - a jQuery plugin for generating barcodes"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery-barcode-2.0.2.min.js',
  ], 'client'
  );
});