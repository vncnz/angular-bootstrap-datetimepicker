# angular-bootstrap-datetimepicker

A simple AngularJS module with a directive for creating a datetimepicker that looks good in bootstrap .input-group

With this user can change date typing the value in the input box.
Moment.js is used for parsing, formatting and validating the datetime.

![initial](/screenshots/initial.png?raw=true)
![valid](/screenshots/valid.png?raw=true)
![invalid](/screenshots/invalid.png?raw=true)

### USAGE

The module requires Moment.js and, obviously, AngularJS (tested v1.3.14). Also bootstrap css is required (tested 3.3.4).
Import in your project Moment.js (with or without locales), AngularJS, bootstrap.css and vm-bootstrap-datetimepicker.js
When you're done, your setup should look similar to the following:

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<script src="http://momentjs.com/downloads/moment-with-locales.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
		<script src="vm-bootstrap-datetimepicker.js"></script>
		...
	</head>

	<body ng-app="TestApp" ng-controller="AppController">

		...

		<span vm-bootstrap-datetime-input data-label-picker="Datetime" ng-model="date"></span>
		
		<script>
			var testApp = angular.module('TestApp', ['vm-bootstrap-datetimepicker']);
		</script>
	</body>
</html>
```

To create a datetime picker:
* Add the module vm-bootstrap-datetimepicker as a dependency to your app module.
* Add the vm-bootstrap-datetime-input directive to your element and it will be replaced. A model is required.
* Optionally you can import vm-bootstrap-datepicker.css, with minimal validation style

You can set the label on left side specifying the attr data-label-picker on vm-bootstrap-datetime element.
Input has .ng-valid or .ng-invalid and others classes provided by AngularJS validation.

I hope this can be a useful starting point for datepicker of your projects ;)
