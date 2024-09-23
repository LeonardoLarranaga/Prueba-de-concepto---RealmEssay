export default class StudentsRegisterDatabaseProxy {

    static async authenticateStudent(credentials) {
        console.log(`Autenticando estudiante con el username: ${credentials.username} y la contraseña ${credentials.password}.`)
        return `TOKEN=${credentials.username}`
    }

    static async registerStudent(credentials) {
        console.log(`Registrando estudiante con el username: ${credentials.username} y la contraseña ${credentials.password}.`)
        return `TOKEN=${credentials.username}`
    }

    static async verifyToken(token) {
        console.log(`Verificando token del estudiante con el token: ${token}.`)
        return true
    }
}