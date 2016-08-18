Template.add_project.events({
    'submit .add_project_form': function() {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var projectDate = event.target.projectDate.value;
        var file = $('#projectImage').get(0).files[0];

        var projectData = {
            name: name,
            description: description,
            type: type,
            client: client,
            projectDate: projectDate
        };

        if (file) {
            fsFile = new FS.File(file);
            projectImage.insert(fsFile, function(err, res) {
                if (!err) {
                    var projectImage = '/cfs/files/pH7Ortfolio/' + res._id;

                    // Insert the data
                    var imageField = {projectImage: projectImage};
                    Projects.insert(projectData + imageField);
                }
            });
        } else {
            Projects.insert(projectData);
        }
    }

    FlashMessages.sendSuccess('Project successfully added!');
    Router.go('/admin/projects');
    
});
