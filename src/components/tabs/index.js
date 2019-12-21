import React, { useState } from 'react'
import './style.css'
import Search from '../search'

const Tabs = () => {
  const [active, setActive] = useState('new')

  return (
    <>
      <h1>Мои организации</h1>

      <div className="tabs">
        <div className="tabs__header">
          <a
            className={`tabs__title ${active === 'new' &&
              'tabs__title--active'}`}
            onClick={() => setActive('new')}
            href="#new"
          >
            Новая организация
          </a>

          <a
            href="#saved"
            className={`tabs__title ${active === 'saved' &&
              'tabs__title--active'}`}
            onClick={() => setActive('saved')}
          >
            Сохраненные организации <strong>(3)</strong>
          </a>
        </div>

        <div className="tabs__content">
          <div className="tabs__new" hidden={active !== 'new'}>
            <Search />
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
