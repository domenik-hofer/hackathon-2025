import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';

export default function HomePage() {
    const c = combineClasses({ styles: HomePageStyles });



    return (
        <>
            <div className={c('layout')}>
            </div>
        </>
    );
}