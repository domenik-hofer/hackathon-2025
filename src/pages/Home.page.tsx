import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';
import { Card } from '../components/card/Card';
import { Stammdaten} from '../components/userData/UserData';

export default function HomePage() {
    const c = combineClasses({ styles: HomePageStyles });

    return (
        <>
            <div className={c('layout')}>
                <div className={c('timeline')}>
                    <Card>
                        <Card.Body>
                            Timeline
                        </Card.Body>
                    </Card>
                </div>
                <div className={c('timeline')}>
                    <Card>
                        <Card.Body>
                            Timeline
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}