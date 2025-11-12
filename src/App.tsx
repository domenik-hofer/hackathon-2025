import AppStyles from './App.module.css';
import { usePage } from './context/PageContext';

import { useState, useRef, useEffect } from 'react';
import { StammdatenCard } from './components/userData/UserData';
import HomePage from './pages/Home.page';
import ExamplePage from './pages/example/Example.page';
import LoginPage from './pages/login/LoginPage';
import { combineClasses } from './utils/ClassNameUtil';
import claimstrackPng from './assets/icons/claimstrack.png';
import { buildStammdatenFromClaimAndPerson, claimsMeta, persons } from './utils/mockData';

// (timelineItems available from mocks; not used directly in App)
import { Chatbot } from './components/chatbot/Chatbot';

export function App() {
    const { activePage, setActivePage } = usePage();
    const [showStammdaten, setShowStammdaten] = useState(false);
    const stamRef = useRef<HTMLDivElement | null>(null);
    const profileRef = useRef<HTMLDivElement | null>(null);

    const claim = claimsMeta[0];
    const person = claim ? (persons.find(p => p.id === claim.personId) ?? persons[0]) : persons[0];
    const stammdatenBasic = claim && person ? buildStammdatenFromClaimAndPerson(claim, person) : undefined;
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
    const { isLoggedIn, setIsLoggedIn } = usePage();


    return (
        <div className={c('page')}>
            <div className={c('pageHeader')}>
                {activePage !== 0 && (
                    <div className={c('navBar')}>
                        <div className={c('logo')} onClick={() => setActivePage(0)}>
                            <img src={claimstrackPng} alt='Claimstrack Logo' width={32} height={32} />{' '}
                            <b>ClaimsTrack</b>
                        </div>
                        <div
                            className={c('profile')}
                            ref={profileRef}

                        >
                            <div className={c('left')}>
                                <div className={c('avatar')}>
                                    <svg
                                        className='m-page-list-home__items__figure'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 96 96'
                                    >
                                        <g fill='currentColor'>
                                            <path d='M91.23 54.83a1 1 0 0 0-1.12.53c-1.48 3-3.79 6.31-4.87 6.48-.05 0-.07 0-.14-.06-.68-.68-.23-2 .63-4.3a23.25 23.25 0 0 0 1.87-8.37 24.59 24.59 0 0 0-6.51-16 1 1 0 0 0-1.72.85c1.22 6.78-3.73 12.29-6.69 14.9a46.48 46.48 0 0 0 .53-9.56c-.46-9-3.79-16.32-9.63-21.06a1 1 0 0 0-1.62.93 36.88 36.88 0 0 1 .46 6.13L41.11 9A5 5 0 0 0 35 9L5.52 31.61A3.9 3.9 0 0 0 4 34.69a3.85 3.85 0 0 0 3.84 3.87H8v37.3a1 1 0 0 0 1 1h35.17a22.75 22.75 0 0 0 2.26 2.85c5.88 6.21 14.14 8.3 17 8.3a1 1 0 0 0 .57-1.84c-4.1-2.76-6.17-7.73-6.17-14.77a30.93 30.93 0 0 1 4.76-16.47c0 1.69.12 3.9.35 6.18.67 6.73 2.18 10.4 4.68 11.26a2.6 2.6 0 0 0 2.53-.58c1.84-1.71 1.59-6.55 1.23-9.53a12.68 12.68 0 0 1 5.41 10.23c-.17 5.3-1.13 9.68-5.22 13.82a1 1 0 0 0 .71 1.7C84.62 88 92 71.63 92 55.8a1 1 0 0 0-.77-.97zM7 36.36a1.83 1.83 0 0 1-1-1.68 1.88 1.88 0 0 1 .73-1.49l29.53-22.57a3 3 0 0 1 3.63 0l22.36 17.1a17.74 17.74 0 0 1-.91 4l-22.05-16.9a2 2 0 0 0-2.42 0L8.94 36.18a1.78 1.78 0 0 1-1.94.18zm3 1.49l.14-.09 27.94-21.35 22.45 17.17a31.83 31.83 0 0 1-2.73 4.27 22.9 22.9 0 0 0-4 7.52A17.75 17.75 0 0 1 50 35.5a1 1 0 0 0-1.75-.58A18.41 18.41 0 0 0 44 45.42H29.06a1 1 0 0 0-1 1v28.44H10zm20 37V47.42h13.84c-.22 6.54 1.68 13.27 2.95 17.73.4 1.4.83 2.92 1 3.88-2-1.26-3.81-3.55-5.51-7a1 1 0 0 0-1.9.39A23.23 23.23 0 0 0 43 74.86zm44.69 10.88c3.3-4.31 3.94-8.86 4.08-13.22 0-9.13-8-13-8.29-13.16a1 1 0 0 0-1.41 1.08c.61 3.42.93 8.74-.3 9.89a.56.56 0 0 1-.6.13c-2.82-1-3.8-11.44-3.59-18.57a1 1 0 0 0-1.74-.7 31.53 31.53 0 0 0-7 20.22c0 7 2 11.38 4.38 14.06a26.76 26.76 0 0 1-12.32-7.13 19.81 19.81 0 0 1-5.43-12 13.67 13.67 0 0 0 5.09 4.81 1.53 1.53 0 0 0 1.78-.05c1-.82.52-2.49-.62-6.53-1.88-6.63-5.24-18.52-.35-26.45a17.63 17.63 0 0 0 5.36 10 1 1 0 0 0 1.62-.61c.62-3.75 2.3-6.09 4.08-8.56 2.81-3.91 5.72-7.94 4.83-17.42 10.58 11 6 29.3 5.93 29.49a1 1 0 0 0 1.52 1.09c.42-.28 9.35-6.29 9.82-15.28a22 22 0 0 1 4.06 12.22 21.59 21.59 0 0 1-1.74 7.67c-1 2.56-1.78 4.78-.17 6.4a2.1 2.1 0 0 0 1.88.63c1.48-.24 3-2.08 4.27-3.94C88.8 72 83.25 83.83 74.69 85.73z'></path>
                                            <path d='M38.08 37.4a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0-8.09a3 3 0 1 1-3 3 3 3 0 0 1 3-3z'></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className={c('name')}>Gebäude</div>
                            </div>
                            <div className={c('right')}>
                                <div className={c('text')}>Ihr Schadenfall: #1234567/0001</div>
                                {isLoggedIn ? (<a onClick={() => setShowStammdaten(!showStammdaten)}>mehr anzeigen...</a>) : (
                                    <a onClick={() => setIsLoggedIn(true)}>Einloggen für mehr Details</a>
                                ) }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={c('pageBody')}>
                {activePage === 0 && <LoginPage />}
                {activePage === 1 && <HomePage />}
                {activePage === 2 && <ExamplePage />}
            </div>
            {stammdatenBasic && isLoggedIn ? (
                <StammdatenCard className={c('stammdaten', showStammdaten && 'visible')} {...stammdatenBasic} />
            ) : null}

            {activePage != 0 && <Chatbot />}
            <div ref={stamRef}>
                {stammdatenDetailed && isLoggedIn ? (
                    <StammdatenCard className={c('stammdaten', showStammdaten && 'visible')} {...stammdatenDetailed} />
                ) : null}
            </div>

            {/** click-outside: close Stammdaten when user clicks outside of it (and not on the profile button) */}
            {/* hook implemented with useEffect */}
        </div>
    );
}
