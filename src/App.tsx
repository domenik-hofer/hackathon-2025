import AppStyles from './App.module.css';

import { combineClasses } from './utils/ClassNameUtil';
import { useState } from 'react';
import HomePage from './pages/Home.page';
import ExamplePage from './pages/example/Example.page';
import LoginPage from './pages/login/LoginPage';

export function App() {
    const c = combineClasses({ styles: AppStyles });
    const [activePage, setActivePage] = useState(0);

    return (
        <div className={c('page')}>
            <div className={c('pageHeader')}>
                {activePage !== 0 && (
                    <div className={c('navBar')}>
                        <div className={c('logo')} onClick={() => setActivePage(0)}>
                            Logo
                        </div>
                        <div className={c('menu')}>
                            <a className={c('item', activePage === 1 && 'active')} onClick={() => setActivePage(1)}>
                                Fallnummer
                            </a>
                            <a className={c('item', activePage === 2 && 'active')} onClick={() => setActivePage(2)}>
                                Profil
                            </a>
                            <a className={c('item', activePage === 3 && 'active')} onClick={() => setActivePage(3)}>
                                Login
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div className={c('pageBody')}>
                {activePage === 0 && <LoginPage />}
                {activePage === 1 && <HomePage />}
                {activePage === 2 && <ExamplePage />}
            </div>
        </div>
    );
}
