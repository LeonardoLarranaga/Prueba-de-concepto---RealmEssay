import APIGateway from "./API Gateway.js";
import StudentServer from './StudentServer.js'
import TeacherServer from './TeacherServer.js'

async function prueba() {
    const student = new StudentServer({
        username: 'student',
        password: 'password'
    })

    const teacher = new TeacherServer({
        username: 'teacher',
        password: 'password'
    })

    const apiGateway = new APIGateway(student, teacher)

    console.log('PRUEBA DE ESTUDIANTE\n\n')

    // Estudiante se registra
    await apiGateway.routeRequest('student', 'signUp', student.credentials)

    // Estudiante inicia sesión
    await apiGateway.routeRequest('student', 'signIn', student.credentials)

    // Estudiante obtiene historial de chats
    await apiGateway.routeRequest('student', 'getChatHistory', student.credentials)

    // Estudiante obtiene feedback de IA
    await apiGateway.routeRequest('student', 'getAIFeedback', {
        input: 'Hola',
        chat: {
            messages: []
        }
    })

    // Estudiante guarda chat
    await apiGateway.routeRequest('student', 'saveChat', {
        token: student.token,
        chat: {
            messages: []
        }
    })

    // Estudiante entrega ensayo
    await apiGateway.routeRequest('student', 'submitEssay', {
        homework: 'IA',
        essay: 'Este es mi ensayo'
    })

    console.log('\n\nPRUEBA DE PROFESOR\n\n')

    // Profesor se registra
    await apiGateway.routeRequest('teacher', 'signUp', teacher.credentials)

    // Profesor inicia sesión
    await apiGateway.routeRequest('teacher', 'signIn', teacher.credentials)

    // Profesor crea tarea
    await apiGateway.routeRequest('teacher', 'createHomework', {
        homework: 'IA'
    })

    // Profesor revisa ensayos
    await apiGateway.routeRequest('teacher', 'checkEssays', {
        homework: 'IA'
    })

    // Profesor organiza tareas
    await apiGateway.routeRequest('teacher', 'organizeHomeworks', {
        homeworks: ['IA']
    })

    // Profesor califica ensayo
    await apiGateway.routeRequest('teacher', 'gradeEssay', {
        essay: 'Este es mi ensayo'
    })

    // Profesor ve historial de chats
    await apiGateway.routeRequest('teacher', 'viewChatHistory')
}

prueba()