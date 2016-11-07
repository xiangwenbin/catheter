<html>
<head>
	<title>{{ htmlWebpackPlugin.options.title }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	{% for (var css in htmlWebpackPlugin.files.css) { %}
  	<link href="{{ htmlWebpackPlugin.files.css[css] }}" rel="stylesheet">
    {% } %}
	<!--<script src="/node_modules/core-js/client/shim.min.js"></script> 
	<script src="/node_modules/zone.js/dist/zone.js"></script> 
	<script src="/node_modules/reflect-metadata/Reflect.js"></script>
	-->
</head>
<body>
	<my-app>Loading...</my-app>
</body>
</html>
