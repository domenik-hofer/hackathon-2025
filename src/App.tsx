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
import claimstrackPng from './assets/icons/claimstrack.png';

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
import { Chatbot } from './components/chatbot/Chatbot';
import { StammdatenCard } from './components/userData/UserData';
import { useState, useRef, useEffect } from 'react';

export function App() {
    const { activePage, setActivePage } = usePage();
    const [showStammdaten, setShowStammdaten] = useState(false);
    const stamRef = useRef<HTMLDivElement | null>(null);
    const profileRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!showStammdaten) return;
            const target = e.target as Node;
            // if click inside stammdaten or on profile button, ignore
            if (stamRef.current && stamRef.current.contains(target)) return;
            if (profileRef.current && profileRef.current.contains(target)) return;
            setShowStammdaten(false);
        }

        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, [showStammdaten]);
    const c = combineClasses({ styles: AppStyles });

    return (
        <div className={c('page')}>
            <div className={c('pageHeader')}>
                {activePage !== 0 && (
                    <div className={c('navBar')}>
                        <div className={c('logo')} onClick={() => setActivePage(0)}>
                            <img src={claimstrackPng} alt='Claimstrack Logo' width={32} height={32} />{' '} <b>ClaimsTrack</b>
                        </div>
                        <div
                            className={c('profile')}
                            ref={profileRef}
                            onClick={() => setShowStammdaten(!showStammdaten)}
                        >
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
                title='Schadenfall Verauf'
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
            {activePage != 0 && <Chatbot />}
            <div ref={stamRef}>
                <StammdatenCard
                    className={c('stammdaten', showStammdaten && 'visible')}
                    name='Max Mustermann'
                    schadensbeschreibung='Leckage in der Küche, verursacht durch defektes Rohr.'
                    fallnummer='2023-1234567'
                    schadensart='Wasserschaden'
                    schadenstag='10.06.2023'
                    kontakt='mail@maxmustermann.de'
                />
            </div>

            {/** click-outside: close Stammdaten when user clicks outside of it (and not on the profile button) */}
            {/* hook implemented with useEffect */}
        </div>
    );
}
