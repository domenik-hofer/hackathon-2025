import AppStyles from './App.module.css';
import { usePage } from './context/PageContext';

import { useState } from 'react';
import { StammdatenCard } from './components/userData/UserData';
import HomePage from './pages/Home.page';
import ExamplePage from './pages/example/Example.page';
import LoginPage from './pages/login/LoginPage';
import { combineClasses } from './utils/ClassNameUtil';
import { Timeline, TimelineItem } from './components/timeline/Timeline';
import { Button } from './components/button/Button';



    // Timeline data für "Bisheriger Verlauf"
    const timelineItems: TimelineItem[] = [
        {
            id: 1,
            title: 'Schadensmeldung eingegangen',
            description: 'Ihre Schadensmeldung wurde erfasst und registriert.',
            date: '15.06.2023',
            time: '09:23 Uhr',
            icon: 'file-text',
        },
        {
            id: 2,
            title: 'Dokumente angefordert',
            description: 'Wir benötigen weitere Unterlagen zur Bearbeitung Ihres Falls.',
            date: '16.06.2023',
            time: '14:30 Uhr',
            icon: 'mail',
        },
        {
            id: 3,
            title: 'Sachbearbeiter zugewiesen',
            description: 'Ihr Fall wurde Herrn Müller zur Bearbeitung übergeben.',
            date: '18.06.2023',
            time: '08:15 Uhr',
            icon: 'user',
        },
        {
            id: 4,
            title: 'Bearbeitung gestartet',
            description: 'Die Prüfung Ihrer Unterlagen hat begonnen.',
            date: '18.06.2023',
            time: '10:45 Uhr',
            icon: 'clipboard-check',
        },
    ];

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
            <Button
                title="Schadenfall Verauf"
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasWithBothOptions'
                aria-controls='offcanvasWithBothOptions'
            />
            <div
                className='offcanvas offcanvas-start'
                data-bs-scroll='true'
                tabIndex={-1}
                id='offcanvasWithBothOptions'
                aria-labelledby='offcanvasWithBothOptionsLabel'
            >
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title' id='offcanvasWithBothOptionsLabel'>
                        Schadenfall Verlauf
                    </h5>
                    <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className='offcanvas-body'>
                                    <div className={c('timeline')}>
                            <Timeline items={timelineItems} />
                </div>
                </div>
            </div>
        </div>
    );
}
