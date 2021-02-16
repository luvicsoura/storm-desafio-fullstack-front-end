import React from 'react'

import Container from '@material-ui/core/Container'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { DashboardList, DashboardListItem, Pagination, ExpandableSection } from 'components'

export const ListItem = DashboardListItem
export const UsersDashboard = ({
    users = [],
    headers = [],
    totalPages = 1,
    onPaginationChange = () => {},
    ...props
}) => (
    <ExpandableSection>
        <Container
            maxWidth = { false }
            style = {{maxWidth: '1360px'}}
        >
            <DashboardList
                headers = { headers }
            >
                {users.map(
                    createListItem
                )}
            </DashboardList>
            <Pagination
                shape = "rounded"
                count = {totalPages}
                hidePreviousButton = { props.hidePreviousButton }
                hideNextButton = { props.hideNextButton }
                showFirstButton = { props.showFirstButton }
                showLastButton = { props.showLastButton }
                onChange = {onPaginationChange}
            />
        </Container>
    </ExpandableSection>   
)

function createListItem(data, key) {
    return (
        <DashboardListItem
            key = {key}
            style = {{
                backgroundColor: (key % 2) ? '#E9E9E9' : '#F5F5F5'
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