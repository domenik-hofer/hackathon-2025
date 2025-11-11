import AppStyles from './App.module.css';

import { combineClasses } from './utils/ClassNameUtil';
import {useState} from 'react';
import HomePage from './pages/Home.page';
import ExamplePage from './pages/example/Example.page';

export function App() {
    const c = combineClasses({ styles: AppStyles });
    const [activePage, setActivePage] = useState(0);

    return (
        <div className={c('page')}>
            <div className={c('pageHeader')}>
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
                    </div>
                </div>
            </div>
            <div className={c('pageBody')}>
                {activePage === 0 && <HomePage />}
                {activePage === 1 && <ExamplePage />}
            </div>
        </div>
    );
}
