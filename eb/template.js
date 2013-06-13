'use strict';

// Basic template description.
exports.description = 'Create a basic scaffolding for Essential Beauty article.';

// Template-specific notes to be displayed before question prompts.
//exports.notes = 'Essential Beauty Article setup...';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
/*
	init.process({}, [
		// Prompt for these values
		//init.prompt('URL of the article')
	], function(err, props) {
		// All finished, do something with the properties

	});
*/
		// Files to copy (and process).
		var files = init.filesToCopy();

		// Actually copy (and process) files.
		init.copyAndProcess(files);

		// All done!
		done();
};