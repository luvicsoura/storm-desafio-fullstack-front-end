import { UsersService } from './UsersService'
import axios from 'axios'

function setUpService() {

    const serviceConfig = {
        baseUrl: process.env.REACT_APP_BACKEND_URL
    }
    const userService = new UsersService(serviceConfig, axios)

    return userService
}

describe('UserService', function () {

    it(
        'Deve conseguir retornar dados de usuários',
        async function () {

            const userService = setUpService()

            const response = await userService.getUsers()

            expect(response).toHaveProperty('status', 200)
            expect(response).toHaveProperty('data')
            expect(response.data).not.toHaveLength(0)
        }
    )

    it(
        'Deve conseguir retornar somente 5 usuários',
        async function () {

            const userService = setUpService()
            const requestConfig = { limit: 5 }

            const response = await userService.getUsers({}, requestConfig)

            expect(response).toHaveProperty('status', 200)
            expect(response.data).toHaveLength(5)
        }
    )
})