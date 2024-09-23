export default class TeachersRegisterDatabaseProxy {

    static async authenticateTeacher(credentials) {
        console.log(`Autenticando profesor con el username: ${credentials.username} y la contraseña ${credentials.password}.`)
        return `TOKEN=${credentials.username}`
    }

    static async registerTeacher(credentials) {
        console.log(`Registrando profesor con el username: ${credentials.username} y la contraseña ${credentials.password}.`)
        return `TOKEN=${credentials.username}`
    }

    static async verifyToken(token) {
        console.log(`Verificando token del profesor con el token: ${token}.`)
        return true
    }
}