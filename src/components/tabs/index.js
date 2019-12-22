import React, { useState } from 'react'
import './style.css'
import Search from '../search'

const Tabs = () => {
  const [active, setActive] = useState('new')
  const [saved, save] = useState([])
  const [opened, open] = useState([])

  const toggleTab = (e, tab) => {
    e.preventDefault()

    setActive(tab)
  }

  const toggleCompany = (e, inn) => {
    e.preventDefault()

    if (opened.includes(inn)) {
      open(opened.filter(item => item !== inn))
    } else {
      open(items => [...items, inn])
    }
  }

  const remove = (e, value) => {
    e.preventDefault()

    save(saved.filter(item => item.value !== value))
  }

  return (
    <>
      <h1>Мои организации</h1>

      <div className="tabs">
        <div className="tabs__header">
          <a
            className={`tabs__title ${
              active === 'new' ? 'tabs__title--active' : ''
            }`}
            onClick={e => toggleTab(e, 'new')}
            href="#new"
          >
            Новая организация
          </a>

          <a
            href="#saved"
            className={`tabs__title ${
              active === 'saved' ? 'tabs__title--active' : ''
            }`}
            onClick={e => toggleTab(e, 'saved')}
          >
            Сохраненные организации{' '}
            {!!saved.length && <strong>({saved.length})</strong>}
          </a>
        </div>

        <div className="tabs__content">
          <div className="tabs__new" hidden={active !== 'new'}>
            <Search saved={saved} onSave={save} />
          </div>

          <div className="tabs__saved" hidden={active !== 'saved'}>
            {saved.map(company => {
              const isOpen = opened.includes(company.data.inn)
              const btnText = !isOpen ? 'подробнее' : 'скрыть'

              return (
                <div className="tabs__saved-item row" key={company.data.inn}>
                  <div className="col-xs-10">
                    <h2>{company.value}</h2>
                    <p className="tabs__props">
                      <span className="tabs__props-key">ИНН</span>
                      <span className="tabs__props-value">
                        {company.data.inn}
                      </span>
                    </p>
                    <div className="tabs__saved-toggle" hidden={!isOpen}>
                      {company.data.kpp && (
                        <p className="tabs__props">
                          <span className="tabs__props-key">КПП</span>
                          <span className="tabs__props-value">
                            {company.data.kpp}
                          </span>
                        </p>
                      )}
                      {company.data.ogrn && (
                        <p className="tabs__props">
                          <span className="tabs__props-key">ОГРН</span>
                          <span className="tabs__props-value">
                            {company.data.ogrn}
                          </span>
                        </p>
                      )}
                      {company.data.address && (
                        <p className="tabs__props">
                          <span className="tabs__props-key">
                            Юридический адрес
                          </span>
                          <span className="tabs__props-value">
                            {company.data.address.unrestricted_value}
                          </span>
                        </p>
                      )}
                      {company.data.management && (
                        <p className="tabs__props">
                          <span className="tabs__props-key">
                            Генеральный директор
                          </span>
                          <span className="tabs__props-value">
                            {company.data.management.name}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`col-xs-2 end-xs tabs__actions ${
                      isOpen ? 'tabs__actions--open' : ''
                    }`}
                  >
                    <p className={`tabs__actions-delete`}>
                      <a href="#delete" onClick={e => remove(e, company.value)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                      </a>
                    </p>
                    <p className="mt-0">
                      <a
                        href="#toggle"
                        className="tabs__saved-detail"
                        onClick={e => toggleCompany(e, company.data.inn)}
                      >
                        {btnText}
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </a>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
