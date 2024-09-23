import StudentsRegisterDatabaseProxy from "./Databases/Students Register Database.js"

export default class IAServerProxy {
    static async sendFeedback(token, input) {
        if (StudentsRegisterDatabaseProxy.verifyToken(token)) {
            this.showAvatar()
            const feedback = await this.generateFeedback(input)
            const textToSpeech = await this.generateTextToSpeech(feedback)
            console.log(`Feedback generado: ${feedback}`)
            console.log(`Reproduciendo texto a voz: ${textToSpeech}`)
            return feedback
        } else {
            return null
        }
    } 

    static async showAvatar() {
        console.log(`Mostrando avatar.`)
    }

    static async generateFeedback(input) {
        console.log(`Generando feedback para el input: ${input}.`)
        return `Este es el feedback de ${input}`
    }

    static async generateTextToSpeech(feedback) {
        console.log(`Generando texto a voz para el feedback: ${feedback}.`)
        return `Este es el texto a voz de ${feedback}`
    }

    static async evaluateEssay(token, essay) {
        if (StudentsRegisterDatabaseProxy.verifyToken(token)) {        
            console.log(`IA Evaluando ensayo: ${essay}`)
            const sendFeedback = await this.sendFeedback(token, essay)
            return sendFeedback
        } else {
            return null
        }
    }
}