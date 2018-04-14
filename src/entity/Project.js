export default class Project {
    static createProject = (projectName) => {
        let createdOn = new Date();
        let id = 'project-' + createdOn.valueOf();
        return {
            id: id,
            name: projectName,
            startedOn: new Date(),
            elapsed: 0,
            activities: []
        };
    }
}