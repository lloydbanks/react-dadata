import React, { useState } from 'react'
import './style.css'
import Autosuggest from 'react-autosuggest'
import { data } from '../../api/data'

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : data['suggestions'].filter(suggestion => {
        return (
          // suggestion.value.toLowerCase().slice(0, inputLength) === inputValue
          suggestion.value.toLowerCase().includes(inputValue)
        )
      })
}

const renderSuggestion = suggestion => (
  <div>
    <div className="react-autosuggest__company">{suggestion.value}</div>
    <div className="row react-autosuggest__address">
      <div className="col-lg-3">{suggestion.data.inn}</div>
      <div className="col-lg-9">
        {suggestion.data.address.data.region_with_type}
      </div>
    </div>
  </div>
)

const Tabs = () => {
  const [active, setActive] = useState('new')
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selected, setSelected] = useState(null)

  const getSuggestionValue = suggestion => {
    console.log('getSuggestionValue', suggestion)
    setSelected(suggestion)
    return suggestion.value
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const handleSelect = e => {
    console.log('selected!', suggestions)
  }

  return (
    <>
      <h1>Мои организации</h1>

      <div className="tabs">
        <div className="tabs__header">
          <a
            className={`tabs__title ${active === 'new' &&
              'tabs__title--active'}`}
            onClick={() => setActive('new')}
            href="#"
          >
            Новая организация
          </a>
          <a
            href="#"
            className={`tabs__title ${active === 'saved' &&
              'tabs__title--active'}`}
            onClick={() => setActive('saved')}
          >
            Сохраненные организации <strong>(3)</strong>
          </a>
        </div>
        <div className="tabs__content">
          <div className="tabs__new" hidden={active !== 'new'}>
            <div className="tabs__search">
              <p>Организация или ИП</p>

              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={handleSelect}
                alwaysRenderSuggestions={false}
                focusInputOnSuggestionClick={false}
                inputProps={{
                  placeholder: 'Введите название, ИНН или адрес организации',
                  value,
                  onChange: (e, { newValue }) => setValue(newValue)
                }}
              />
            </div>
            <div className="tabs__hint row middle-xs">
              <div className="tabs__hint-icon">+</div>
              <div className="tabs__hint-text">
                Для добавления новой организации <br /> введите ее название, ИНН
                или адрес.
              </div>
            </div>
          </div>
          <div className="tabs__saved" hidden={active !== 'saved'}>
            <div className="tabs__saved-item">
              <i className="fa fa-address-book-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
