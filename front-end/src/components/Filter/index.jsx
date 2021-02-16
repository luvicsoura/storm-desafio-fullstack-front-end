import React from 'react'
import styled from 'styled-components'

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'


const Title = styled(Typography)`
    && {
        color: #D83367;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        
        margin-left: 16px;
    }
`

const StyledAccordion = styled(Accordion)`
    && {
        box-shadow: none;
        background-color: transparent;
        border-bottom: 2px solid #E9E9E9;

        &:before {
            content: none;
            display: none;
        }
    }
`

const StyledSummary = styled(AccordionSummary)`
    && {
        color: #999999;

        padding: 12px 0;

        svg {
            font-size: 20px;
        }
    }
`

export const Filter = ({
    Icon,
    title
}) => (
    <StyledAccordion
        square = { true }
    >
        <StyledSummary
            expandIcon={<ArrowDropDownIcon />}
        >
            {!!Icon && (<Icon/>)}
            <Title>{ title }</Title>
        </StyledSummary>
        <AccordionDetails>
            Work in progress...
        </AccordionDetails>
    </StyledAccordion>
)