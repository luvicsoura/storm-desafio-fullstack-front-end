export class UsersService {
    
    config = {}

    constructor(config, HTTPClient) {
        
        this.config.baseUrl = config.baseUrl
        this.HTTPClient = HTTPClient
    }

    async getUsers(filter, config) {

        const response = await this.HTTPClient.get(
            `${this.config.baseUrl}/users`,
            {
                params: {
                    limit: config?.limit,
                    offset: config?.offset
                }
            }
        )
        return response
    }
}