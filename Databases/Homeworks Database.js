import StudentsRegisterDatabaseProxy from './Students Register Database.js'
import TeachersRegisterDatabaseProxy from './Teachers Register Database.js'

export default class HomeworkDatabaseProxy {
    static async saveHomework(token, homework, essay) {
        if (StudentsRegisterDatabaseProxy.verifyToken(token)) {
            console.log(`Guardando ensayo ${essay} en tarea: ${homework}`)
            return true
        } else {
            return false
        }
    }

    static async createHomework(token, homework) {
        if (TeachersRegisterDatabaseProxy.verifyToken(token)) {
            console.log(`Creando tarea: ${homework}`)
            return true
        } else {
            return false
        }
    }

    static async getHomeworkEssays(token, homework) {
        if (TeachersRegisterDatabaseProxy.verifyToken(token)) {
            console.log(`Obteniendo ensayos de la tarea: ${homework}`)
            return [] // Array de ensayos
        } else {
            return false
        }
    }

    static async organizeHomeworks(token, homeworks) {
        if (TeachersRegisterDatabaseProxy.verifyToken(token)) {
            console.log(`Organizando tareas: ${homeworks}`)
            return true
        } else {
            return false
        }
    }

    static async getHomeworkSuggestedGrade(token, homework) {
        if (TeachersRegisterDatabaseProxy.verifyToken(token)) {
            console.log(`Obteniendo nota sugerida para la tarea: ${homework}`)
            return 100
        } else {
            return null
        }
    }
}