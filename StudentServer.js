import StudentsRegisterDatabaseProxy from './Databases/Students Register Database.js'
import ChatsDatabaseProxy from './Databases/Chats Database.js'
import IAServerProxy from './IA Server.js'
import HomeworkDatabaseProxy from './Databases/Homeworks Database.js'

export default class StudentServer {
    constructor(credentials) {
        this.credentials = credentials
        this.token = null
    }

    async signIn(credentials) {
        const token = await StudentsRegisterDatabaseProxy.authenticateStudent(credentials)
        if (token) {
            this.token = token
            console.log(`El estudiante con el username ${credentials.username} ha iniciado sesión.`)
        } else {
            console.log(`El estudiante con el username ${credentials.username} no ha podido iniciar sesión.`)
        }
    }

    async signUp(credentials) {
        const token = await StudentsRegisterDatabaseProxy.registerStudent(credentials)
        if (token) {
            this.credentials = token
            console.log(`El estudiante con el username ${credentials.username} se ha registrado.`)
        } else {
            console.log(`El estudiante con el username ${credentials.username} no ha podido registrarse.`)
        }
    }

    async getChatHistory(credentials) {
        const chats = await ChatsDatabaseProxy.getChatHistory(credentials)
        if (chats) {
            console.log(`Se ha obtenido el historial de chats.`)
        } else {
            console.log(`No se ha podido obtener el historial de chats.`)
        }
    }

    async getAIFeedback(input, chat) {
        const feedback = await IAServerProxy.sendFeedback(this.token, input)
        console.log(`Añadiendo input ${input} al chat.`)
        chat.messages.push({"id": chat.messages.length, "mensaje": input, "role": "student"})

        if (feedback) {
            console.log(`Se ha obtenido el feedback de la IA.`)
            console.log(`Añadiendo feedback al chat.`)
            chat.messages.push({"id": chat.messages.length, "mensaje": feedback, "role": "IA"})
        }
    }

    async saveChat(chat) {
        const saved = await ChatsDatabaseProxy.saveChat(chat)
        if (saved) {
            console.log(`Se ha guardado el chat.`)
        } else {
            console.log(`No se ha podido guardar el chat.`)
        }
    }

    async submitEssay(homework, essay) {
        console.log(`Enviando ensayo: ${essay}`)
        const submit = await HomeworkDatabaseProxy.saveHomework(this.token, homework, essay)
        if (!submit) {
            console.log(`No se ha podido enviar el ensayo.`)
            return
        }

        console.log(`Ensayo enviado.`)

        const evaluation = await IAServerProxy.evaluateEssay(this.token, essay)
        if (evaluation) {
            console.log(`Se ha evaluado el ensayo.`)
        } else {
            console.log(`No se ha podido evaluar el ensayo.`)
        }
    }
}