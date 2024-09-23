export default class APIGateway {
    constructor(studentServer, teacherServer) {
        this.studentServer = studentServer;
        this.teacherServer = teacherServer;
    }

    async routeRequest(role, action, params) {
        switch (role) {
            case 'teacher':
                return await this.handleTeacherRequest(action, params);
            case 'student':
                return await this.handleStudentRequest(action, params);
            default:
                console.log("Rol no soportado.");
        }
    }

    async handleTeacherRequest(action, params) {
        switch (action) {
            case 'signIn':
                return await this.teacherServer.signIn(params);
            case 'signUp':
                return await this.teacherServer.signUp(params);
            case 'createHomework':
                return await this.teacherServer.createHomeWork(params.homework);
            case 'checkEssays':
                return await this.teacherServer.checkHomeworkEssays(params.homework);
            case 'organizeHomeworks':
                return await this.teacherServer.organizeHomeworks(params.homeworks);
            case 'gradeEssay':
                return await this.teacherServer.gradeEssay(params.essay, params.grade);
            case 'viewChatHistory':
                return await this.teacherServer.getChatHistory();
            default:
                console.log("Acción de profesor no soportada.");
        }
    }

    async handleStudentRequest(action, params) {
        switch (action) {
            case 'signIn':
                return await this.studentServer.signIn(params);
            case 'signUp':
                return await this.studentServer.signUp(params);
            case 'getChatHistory':
                return await this.studentServer.getChatHistory(params.credentials);
            case 'getAIFeedback':
                return await this.studentServer.getAIFeedback(params.input, params.chat);
            case 'saveChat':
                return await this.studentServer.saveChat(params.chat);
            case 'submitEssay':
                return await this.studentServer.submitEssay(params.homework, params.essay);
            default:
                console.log("Acción de estudiante no soportada.");
        }
    }
}