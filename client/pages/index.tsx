import React, { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { NextContext, NextFunctionComponent } from 'next'
import { Container, WidgetWrapper, Row, Input, SearchButton } from '../styles'

interface IProps {
  weather?: {
    name: string
    main: {
      humidity: number
      temp: number
    }
    wind: {
      speed: number
    }
  }
  errorMessage?: string
}

const App: NextFunctionComponent<IProps> = ({ weather, errorMessage }) => {
  const [searchText, setSearchText] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    Router.push(`/?city=${searchText}`)
    setSearchText('')
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const renderHeader = () => {
    if (errorMessage) return <span>{errorMessage}</span>
    return <span>{weather && weather.name}</span>
  }

  return (
    <Container>
      <WidgetWrapper>
        <Row style={{ background: '#c3ddff' }}>{renderHeader()}</Row>
        <Row>
          Temperature:{' '}
          <span>
            {weather && Math.round(weather.main.temp - 273.15) + ' C'}
          </span>
        </Row>
        <Row>
          Humidity: <span>{weather && weather.main.humidity}</span>
        </Row>
        <Row>
          Wind: <span>{weather && weather.wind.speed + ' m/s'} </span>
        </Row>
        <Row>
          <form action="/" onSubmit={onSubmit}>
            <Input
              name="city"
              type="text"
              value={searchText}
              onChange={handleInput}
              placeholder="Search a city in Denmark..."
            />
            <SearchButton>Search</SearchButton>
          </form>
        </Row>
      </WidgetWrapper>
    </Container>
  )
}

App.getInitialProps = async ({ query: { city } }: NextContext) => {
  try {
    const { data: weather } = await axios.get(
      `http://localhost:3001/weather/${city || 'copenhagen'}`
    )
    return { weather }
  } catch (error) {
    return { errorMessage: `Could not find the weather for ${city}` }
  }
}

export default App
