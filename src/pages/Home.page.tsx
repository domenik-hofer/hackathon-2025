import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';
import { Card } from '../components/card/Card';
import {UserData} from '../components/userData/UserData';

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
                <div>
                    <UserData>
            name="Max Mustermann"
  fallnummer="2023-1234567"
  schadensart="Wasserschaden"
  schadenstag="10.06.2023"  // oder new Date(2023,5,10)
  kontakt="mail@maxmustermann.de"
                    </UserData>
                </div>
            </div>
        </>
    );
}