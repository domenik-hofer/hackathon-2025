import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';
import { Card } from '../components/card/Card';
import { Timeline, TimelineItem } from '../components/timeline/Timeline';
import { DocumentList, Document } from '../components/document/DocumentList';
import { Status } from '../components/status/Status';

export default function HomePage() {
    const c = combineClasses({ styles: HomePageStyles });

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
    ];

    // Beispieldokumente für "Eingereichte Dokumente"
    const documents: Document[] = [
        {
            name: 'Schadensmeldung Formular',
            type: 'PDF',
            uploadDate: '2023-06-15',
        },
        {
            name: 'Fotos vom Schaden',
            type: 'JPG',
            uploadDate: '2023-06-15',
        },
    ];

    return (
        <>
            <div className={c('layout')}>
                <div className={c('timeline')}>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <h5>Bisheriger Verlauf</h5>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Timeline items={timelineItems} />
                        </Card.Body>
                    </Card>
                </div>

                <div className={c('status')}>
                    <Card>
                        <Card.Body>
                            <Status />
                        </Card.Body>
                    </Card>
                </div>
                <div className={c('documents')}>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <h5>Eingereichte Dokumente</h5>
                                </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DocumentList documents={documents} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}
