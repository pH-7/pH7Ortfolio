Template.add_project.events({
    'submit .add_project_form': function() {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var projectDate = event.target.projectDate.value;
        var file = $('#projectImage').get(0).files[0];

        // Create default project data object
        var projectData = {
            name: name,
            description: description,
            type: type,
            client: client,
            projectDate: projectDate
        };

        if (file) {
            var fsFile = new FS.File(file);
            ProjectImages.insert(fsFile, function(err, res) {
                if (!err) {
                    var projectImage = '/cfs/files/pH7Ortfolio/' + res._id;

                    // Insert the data
                    projectData.projectImage = projectImage;
                    Projects.insert(projectData);
                }
            });
        } else {
            Projects.insert(projectData);
        }

        FlashMessages.sendSuccess('Project successfully added!');
        Router.go('/admin/projects');

        return false;
    }
});


Template.edit_project.events({
    'submit .edit_project_form': function() {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var projectDate = event.target.projectDate.value;
        var file = $('#projectImage').get(0).files[0];

        if (file) {
            var fsFile = new FS.File(file);
            ProjectImages.insert(fsFile, function(err, res) {
                if (!err) {
                    var projectImage = '/cfs/files/pH7Ortfolio/' + res._id;

                    // Update the data
                    Projects.update({
                        _id: this._id
                    }, {
                        $set:{
                            name: name,
                            description: description,
                            type: type,
                            client: client,
                            projectDate: projectDate,
                            projectImage: projectImage
                        }
                    });
                }
            });
        } else {
            Projects.update({
                _id: this._id
            }, {
                $set:{
                    name: name,
                    description: description,
                    type: type,
                    client: client,
                    projectDate: projectDate
                }
            });
        }

        FlashMessages.sendSuccess('Project successfully added!');
        Router.go('/admin/projects');

        return false;
    }
});

Template.list_projects.events({
    'click .delete_project': function(event) {
        if (confirm('Do you really want to delete "' + this.title + '" project?')) {
            Projects.remove(this._id);
            FlashMessages.sendSuccess('Project successfully deleted!');

            return false;
        }
    }
});
