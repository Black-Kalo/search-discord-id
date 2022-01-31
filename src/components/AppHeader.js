import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AppHeader() {
    return (
        <header className="header">
            <h1 className="header__title">
                <FontAwesomeIcon className="header__icon" icon={faSearch} />
                search Discord ID
            </h1>
            <p className="header__subtitle">查詢Discord User/bot id</p>
        </header>
    )
}
