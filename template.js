'use strict';

// Basic template description.
exports.description = 'Create a basic scaffolding for Essential Beauty article.';

// Template-specific notes to be displayed before question prompts.
//exports.notes = 'Automated Project Scaffolding in progress...';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
	init.process({}, [
		// Prompt for these values
		{
			name: 'title',
			message: 'Page Title'
		},
		{
			name: 'description',
			message: 'Meta Description',
			default: 'The best article ever.'
		},
		{
			name: 'keywords',
			message: 'Meta Keywords',
			default: 'comma, separated'
		}
	], function(err, props) {
		// All finished, do something with the properties

		var dir = init.destpath(),
			dirArray = dir.toString().split("/");

		props.name = dirArray[dirArray.length - 1];

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// All done!
		done();
	});
};