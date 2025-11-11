import AppStyles from './App.module.css';
import { usePage } from './context/PageContext';

import { useState, useRef, useEffect } from 'react';
import { StammdatenCard } from './components/userData/UserData';
import HomePage from './pages/Home.page';
import ExamplePage from './pages/example/Example.page';
import LoginPage from './pages/login/LoginPage';
import { combineClasses } from './utils/ClassNameUtil';
import claimstrackPng from './assets/icons/claimstrack.png';
import {
    buildStammdatenFromClaimAndPerson,
    claimsMeta,
    persons,
} from './utils/mockData';

// (timelineItems available from mocks; not used directly in App)
import { Chatbot } from './components/chatbot/Chatbot';

export function App() {
    const { activePage, setActivePage } = usePage();
    const [showStammdaten, setShowStammdaten] = useState(false);
    const stamRef = useRef<HTMLDivElement | null>(null);
    const profileRef = useRef<HTMLDivElement | null>(null);

    const claim = claimsMeta[0];
    const person = claim
        ? persons.find((p) => p.id === claim.personId) ?? persons[0]
        : persons[0];
    const stammdatenBasic =
        claim && person
            ? buildStammdatenFromClaimAndPerson(claim, person)
            : undefined;
    const stammdatenDetailed =
        claim && person
            ? buildStammdatenFromClaimAndPerson(claim, person, {
                  includeDescription: true,
              })
            : undefined;

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
            {stammdatenBasic ? (
                <StammdatenCard
                    className={c('stammdaten', showStammdaten && 'visible')}
                    {...stammdatenBasic}
                />
            ) : null}

            {activePage != 0 && <Chatbot />}
            <div ref={stamRef}>
                {stammdatenDetailed ? (
                    <StammdatenCard
                        className={c('stammdaten', showStammdaten && 'visible')}
                        {...stammdatenDetailed}
                    />
                ) : null}
            </div>

            {/** click-outside: close Stammdaten when user clicks outside of it (and not on the profile button) */}
            {/* hook implemented with useEffect */}
        </div>
    );
}
