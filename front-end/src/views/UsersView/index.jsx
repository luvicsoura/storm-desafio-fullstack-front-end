import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { UsersService } from 'services'
import { DashboardList, DashboardListItem, Pagination } from 'components'

import {
    BACKEND_URL,
    USERS_PER_PAGE ,
    PAGINATION_SHOW_FIRST,
    PAGINATION_SHOW_LAST,
    PAGINATION_SHOW_PREVIOUS,
    PAGINATION_SHOW_NEXT,
} from 'config'

const DASHBOARD_HEADERS = [
    {
        label: 'Usuário'
    },
    {
        label: 'Email'
    },
    {
        label: 'Data de inclusão',
        style: {
            textAlign: 'center'
        }
    },
    {
        label: 'Data de alteração',
        style: {
            textAlign: 'center'
        }
    },
    {
        label: 'Regras',
        style: {
            textAlign: 'center'
        }
    },
    {
        label: 'Status',
        style: {
            textAlign: 'center'
        }
    }
]

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
`
export class UsersView extends Component{

    state = {
        users: [],
        page: 1,
        totalPages: 1,
        totalItemsCount: 0
    }

    constructor(props) {
        super(props)

        this.userService = new UsersService({baseUrl: BACKEND_URL}, axios)
        this.bindMethods()
    }

    bindMethods() {
        this.transformUserData = this.transformUserData.bind(this)
    }

    componentDidMount() {
        this.getUsers()
    }

    componentDidUpdate(_, prevState) {
        if (prevState.page !== this.state.page) this.getUsers()
    }

    async getUsers() {

        const offset = this.calculateOffsetFromPage(this.state.page)
        const response = await this.userService.getUsers(null, { limit: USERS_PER_PAGE, offset })
        const newUserData = response.data.map(this.transformUserData)
        const totalCount = parseInt(response.headers['x-total-items-count'])

        this.updateUsersData(newUserData, totalCount)
    }

    updateUsersData(newUserData, totalCount) {
        this.setState({
            users: newUserData,
            totalItemsCount: totalCount,
            totalPages: totalCount / USERS_PER_PAGE
        })
    }

    calculateOffsetFromPage(page = 1) {
        return parseInt(page) * USERS_PER_PAGE - USERS_PER_PAGE
    }

    calculatePageNumber(lastItemPosition) {
        
        return Math.ceil(lastItemPosition / USERS_PER_PAGE)
    }

    transformUserData(user) {

        const transformedData = {}
    
        Object.entries(user).forEach(([key, value]) => {

            switch(key) {

                case 'created_date':
                case 'updated_date':
                    
                    transformedData[key] = (new Date(value)).toLocaleDateString('pt-BR')
                    break
                
                case 'status':
                    
                    transformedData[key] = this.mapStatus(value)
                    break

                case 'roles':
                    
                    const stringValue = value.toString()
                    transformedData[key] = (stringValue.length === 1) ? '0' + stringValue : stringValue
                    break

                default:
                    
                    transformedData[key] = value
            }
        })

        return transformedData
    }

    mapStatus(value) {
    
        switch(value) {
            case 'active':
                return 'ativo'
            
            default: 
                return 'inativo'
        }
    }

    createListItem(data, key) {
        return (
            <DashboardListItem
                key = {key}
                style = {{
                    backgroundColor: (key % 2) ? '#F5F5F5' : '#E9E9E9'
                }}
                data = {{
                    user_name: {
                        value: data.user_name,
                        style: {
                            textTransform: 'uppercase'
                        }
                    },
                    email: data.email,
                    created_date: {
                        value: data.created_date,
                        style: {
                            textAlign: 'center'
                        }
                    },
                    updated_date: {
                        value: data.updated_date,
                        style: {
                            textAlign: 'center'
                        }
                    },
                    roles: {
                        value: data.roles,
                        style: {
                            textAlign: 'center'
                        }
                    },
                    status: {
                        value: data.status,
                        style: {
                            color: data.status === 'ativo' ? '#31BA1F' : '#D83367',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }
                    }
                }}
                actions = {[
                    {
                        label: <DeleteIcon />
                    },
                    {
                        label: <EditIcon />
                    }
                ]}
            />
        )
    }

    setPage(page) {
        this.setState({ page })
    }

    render = () => (
        <StyledPage className = "UsersPage">
            <Container
                maxWidth = { false }
                style = {{maxWidth: '1360px'}}
            >
                <DashboardList
                    headers = { DASHBOARD_HEADERS }
                >
                    {this.state.users.map(
                        this.createListItem
                    )}
                </DashboardList>
                <Pagination
                    shape = "rounded"
                    count = {this.state.totalPages}
                    hidePreviousButton = { !PAGINATION_SHOW_PREVIOUS }
                    hideNextButton = { !PAGINATION_SHOW_NEXT }
                    showFirstButton = { PAGINATION_SHOW_FIRST }
                    showLastButton = { PAGINATION_SHOW_LAST }
                    onChange = {(_, page) => this.setPage(page)}
                />
            </Container>
        </StyledPage>
    )
}