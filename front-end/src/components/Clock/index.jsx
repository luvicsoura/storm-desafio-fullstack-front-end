import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'

const StyledClock = styled.span`
    color: #FF8700;
    font-size: 24px;
    text-align: right;
    
    min-width: 6.5em;
`

const StyledDate = styled.span`
    font-style: italic;
    font-weight: 400;

    b {
        font-weight: 600;
        text-transform: capitalize;
    }

    &:first-letter {
        text-transform: uppercase;
    }
`

const DateComponent = ({ date }) => {
    
    const year = date.getFullYear()
    const dayOfTheMonth = date.getDate()
    const month = date.toLocaleDateString('pt-BR', {month: 'long'})
    const dayOfTheWeek = date.toLocaleDateString('pt-BR', {weekday: 'long'}).split('-')[0]

    return (
        <StyledDate>
            {dayOfTheWeek}, <b>{dayOfTheMonth}</b> de <b>{month}</b> de <b>{year}</b>
        </StyledDate>
    )
}

export const Clock = ({
    showDate = true
}) => {
    
    const [ currentTime, setCurrentTime ] = useState(new Date())

    useEffect(() => {
        const updateInterval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        
        return () => {
            clearInterval(updateInterval)
        }
    }, [])

    return (
        <Grid
            container
            component = "time"
            alignItems = "center"
        >
            {showDate && (
                <DateComponent date = {currentTime} data-testid = "date" />
            )}
            <StyledClock className = "ff-audiowide" >
                { '// ' + currentTime.toLocaleTimeString('pt-BR') }
            </StyledClock>
        </Grid>
    )
}