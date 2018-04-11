export default class Project {
    static createProject = (projectName) => {
        let id = 'project-' + Math.floor(Math.random() * 100000);
        return {
            id: id,
            name: projectName,
            startedOn: new Date(),
            elapsed: 0,
            activities: []
        };
    }
}