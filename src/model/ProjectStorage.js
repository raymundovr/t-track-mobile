import { AsyncStorage } from 'react-native';

export default class ProjectStorage {

    static createProject = async (project) => {
        try {
            await AsyncStorage.setItem(project.id, JSON.stringify(project));
            return true;            
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    static getProject = async (projectId) => {
        try {
            const project = await AsyncStorage.getItem(projectId);
            if(project)
                return project;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    static getAllProjects = async () => {
        try {
            let keys = await AsyncStorage.getAllKeys();
            if (keys) {
                let projects = await AsyncStorage.multiGet(keys);                
                return projects;            
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    static updateProject = (projectId, delta) => {
        try {
            AsyncStorage.mergeItem(projectId, JSON.stringify(delta));
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    static deleteProject = (projectId) => {
        try {
            AsyncStorage.removeItem(projectId);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}