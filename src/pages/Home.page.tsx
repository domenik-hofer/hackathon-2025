import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';

export default function HomePage() {
    const c = combineClasses({ styles: HomePageStyles });

    return (
        <>
            <h3 className={c('bold')}>Startseite</h3>
        </>
    );
}