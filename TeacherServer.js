import TeachersRegisterDatabaseProxy from "./Databases/Teachers Register Database.js"
import HomeworkDatabaseProxy from "./Databases/Homeworks Database.js"
import ChatsDatabaseProxy from "./Databases/Chats Database.js"

export default class TeacherServer {
    constructor(credentials) {
        this.credentials = credentials
        this.token = null
    }

    async signIn(credentials) {
        const token = await TeachersRegisterDatabaseProxy.authenticateTeacher(credentials)
        if (token) {
            this.token = token
            console.log(`El profesor con el username ${credentials.username} ha iniciado sesión.`)
        } else {
            console.log(`El profesor con el username ${credentials.username} no ha podido iniciar sesión.`)
        }
    }

    async signUp(credentials) {
        const token = await TeachersRegisterDatabaseProxy.registerTeacher(credentials)
        if (token) {
            this.credentials = token
            console.log(`El profesor con el username ${credentials.username} se ha registrado.`)
        } else {
            console.log(`El profesor con el username ${credentials.username} no ha podido registrarse.`)
        }
    }

    async createHomeWork(homework) {
        const created = await HomeworkDatabaseProxy.createHomework(this.token, homework)
        if (created) {
            console.log(`Tarea creada.`)
        } else {
            console.log(`No se ha podido crear la tarea.`)
        }
    }

    async checkHomeworkEssays(homework) {
        const essays = await HomeworkDatabaseProxy.getHomeworkEssays(this.token, homework)
        if (essays) {
            console.log(`Se han obtenido los ensayos ${essays} de la tarea ${homework}.`)
        } else {
            console.log(`No se han podido obtener los ensayos de la tarea.`)
        }
    }

    async organizeHomeworks(homeworks) {
        const organized = await HomeworkDatabaseProxy.organizeHomeworks(this.token, homeworks)
        if (organized) {
            console.log(`Tareas organizadas.`)
        } else {
            console.log(`No se han podido organizar las tareas.`)
        }
    }

    async gradeEssay(essay) {
        const suggestedGrade = await HomeworkDatabaseProxy.getHomeworkSuggestedGrade(this.token, essay)
        if (suggestedGrade) {
            console.log(`Nota de ensayo ${essay} obtenida.`)
        } else {
            console.log(`No se ha podido calificar el ensayo.`)
        }
    }

    async getChatHistory() {
        const chats = await ChatsDatabaseProxy.getChatHistoryAsTeacher(this.token)
        if (chats) {
            console.log(`Se ha obtenido el historial de chats como profesor. ${chats}`)
        } else {
            console.log(`No se ha podido obtener el historial de chats como profesor.`)
        }
    }
}