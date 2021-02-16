import React from 'react'
import styled from 'styled-components'

import { usePagination } from '@material-ui/lab/Pagination'
import Button from '@material-ui/core/Button'

const PaginationList = styled.ul`
    text-align: center;
`

const PaginationListItem = styled.li`
    list-style: none;
    display: inline-block;
`

export const StyledButton = styled(Button)`
    && {
        line-height: 1;
        color: ${props => props.selected ? '#FFFFFF': '#666666'};

        min-width: 0;
        margin: 0 4px;
        padding: 16px 20px;
        border: 2px solid ${props => props.selected ? '#D83367': '#FFFFFF'};
        background-color: ${props => props.selected ? '#D83367': '#FFFFFF'};
    
        ${props => {
            if (props.disabled) {
                return `
                    background-color: transparent;
                `
            }
        }}

        &:hover {
            color: #fff;
            background-color: #C02A39;
        }
    }
`

export const Pagination = (props) => {
    
    const pagination = usePagination(props)
    
    return (
        <nav>
            <PaginationList>
                {pagination.items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <StyledButton 
                                selected = {selected}
                                data-testid = "btn-page"
                                {...item}
                            >
                                {page}
                            </StyledButton>
                        );
                    } else {
                        children = (
                            <StyledButton type="button" {...item}>
                                {translatePaginationText(type)}
                            </StyledButton>
                        );
                    }

                    return <PaginationListItem key={index}>{children}</PaginationListItem>;
                })}
            </PaginationList>
        </nav>
    )
}

const translationStrings = {
    first: 'primeiro',
    last: 'último',
    previous: 'anterior',
    next: 'próximo'
}

function translatePaginationText(text) {
    return translationStrings[text]
}