import AppStyles from './App.module.css';
import { usePage } from './context/PageContext';

import { combineClasses } from './utils/ClassNameUtil';
import HomePage from './pages/Home.page';
import ExamplePage from './pages/example/Example.page';
import LoginPage from './pages/login/LoginPage';
import { StammdatenCard } from './components/userData/UserData';
import { useState } from 'react';
import { Chatbot } from './components/chatbot/Chatbot';

export function App() {
    const { activePage, setActivePage } = usePage();
    const [showStammdaten, setShowStammdaten] = useState(false);
    const c = combineClasses({ styles: AppStyles });

    return (
        <div className={c('page')}>
            <div className={c('pageHeader')}>
                {activePage !== 0 && (
                    <div className={c('navBar')}>
                        <div className={c('logo')} onClick={() => setActivePage(0)}>
                            Logo
                        </div>
                        <div className={c('profile')} onClick={() => setShowStammdaten(!showStammdaten)}>
                            M
                        </div>
                    </div>
                )}
            </div>
            <div className={c('pageBody')}>
                {activePage === 0 && <LoginPage />}
                {activePage === 1 && <HomePage />}
                {activePage === 2 && <ExamplePage />}
            </div>
            <StammdatenCard
                className={c('stammdaten', showStammdaten && 'visible')}
                name='Max Mustermann'
                fallnummer='2023-1234567'
                schadensart='Wasserschaden'
                schadenstag='10.06.2023'
                kontakt='mail@maxmustermann.de'
            />
            {activePage != 0 && <Chatbot />}
        </div>
    );
}
