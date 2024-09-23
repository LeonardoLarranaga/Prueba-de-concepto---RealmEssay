import StudentsRegisterDatabaseProxy from "./Students Register Database.js"
import TeachersRegisterDatabaseProxy from "./Teachers Register Database.js"

export default class ChatsDatabaseProxy {
   static async getChatHistory(credentials) {
        if (StudentsRegisterDatabaseProxy.verifyToken(credentials)) {
            return [{"id": 1, "titulo": "Ensayo de IA", messages: [{"id": 0, "mensaje": "Ayuda con mi ensayo", "role": "student"}]}] // Array de chats
        } else {
            return null
        }
    }

    static getChatHistoryAsTeacher(credentials) {
        if (TeachersRegisterDatabaseProxy.verifyToken(credentials)) {
            return [{"id": 1, "titulo": "Ensayo de IA", messages: [{"id": 0, "mensaje": "Ayuda con mi ensayo", "role": "student"}]}] // Array de chats
        } else {
            return null
        }
    }

    static async saveChat(chat) {
        if (StudentsRegisterDatabaseProxy.verifyToken(chat.token)) {
            console.log(`Guardando chat: ${chat}`)
            return true
        } else {
            return false
        }
    }
}