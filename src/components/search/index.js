import React, { useState } from 'react'
import './style.css'
import Autosuggest from 'react-autosuggest'
import { data } from '../../api/data'

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : data['suggestions'].filter(
        suggestion =>
          suggestion.value.toLowerCase().includes(inputValue) ||
          suggestion.data.inn.includes(inputValue)
      )
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

const Search = ({ saved, onSave }) => {
  const [suggestions, setSuggestions] = useState([])
  const [selected, setSelected] = useState('')
  const [value, setValue] = useState('')

  const getSuggestionValue = suggestion => {
    setSelected(suggestion)

    return suggestion.value
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const isSaved =
    saved.findIndex(company => company.value === selected.value) > -1

  return (
    <>
      <div className="tabs__search row">
        <div className="col-xs-12">
          <p>Организация или ИП</p>

          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            focusInputOnSuggestionClick={false}
            inputProps={{
              placeholder: 'Введите название, ИНН или адрес организации',
              value,
              onChange: (e, { newValue }) => setValue(newValue)
            }}
          />
        </div>
      </div>
      {!selected ? (
        <div className="tabs__hint row middle-xs">
          <div className="col-xs-2 fb-a">
            <div className="tabs__hint-icon">+</div>
          </div>
          <div className="col-xs-10">
            <div className="tabs__hint-text">
              Для добавления новой организации <br /> введите ее название, ИНН
              или адрес.
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2-border mt-0">{selected.value}</h2>
            </div>
          </div>
          <div className="row tabs__detail">
            <div className="col-lg-8 tabs__detail-left">
              <p className="font-weight-bold">Юридический адрес</p>
              <p>{selected.data.address.unrestricted_value}</p>

              <p className="font-weight-bold">Генеральный директор</p>
              {selected.data.management.name}
            </div>
            <div className="col-lg-4">
              <div className="tabs__detail-right">
                <p className="tabs__props">
                  <span className="tabs__props-key font-weight-bold">ИНН</span>
                  <span className="tabs__props-value">
                    {selected.data['inn']}
                  </span>
                </p>
                <p className="tabs__props">
                  <span className="tabs__props-key font-weight-bold">КПП</span>
                  <span className="tabs__props-value">
                    {selected.data['kpp']}
                  </span>
                </p>
                <p className="tabs__props">
                  <span className="tabs__props-key font-weight-bold">ОГРН</span>
                  <span className="tabs__props-value">
                    {selected.data['ogrn']}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {!isSaved ? (
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    onSave([...saved, selected])
                  }}
                >
                  Сохранить
                </button>
              ) : (
                <button className="btn btn--done" disabled>
                  <i className="fa fa-check" aria-hidden="true"></i> Сохранено
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Search
