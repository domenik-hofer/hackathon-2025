import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';
import { Card } from '../components/card/Card';
import { Timeline, TimelineItem } from '../components/timeline/Timeline';
import { DocumentList, Document } from '../components/document/DocumentList';

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
        {
            name: 'Kostenvoranschlag Handwerker',
            type: 'PDF',
            uploadDate: '2023-06-18',
        },
        {
            name: 'Gutachten Sachverständiger',
            type: 'PDF',
            uploadDate: '2023-06-20',
        },
    ];

    return (
        <>
            <div className={c('layout')}>
                <div className={c('timeline')}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Bisheriger Verlauf</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Timeline items={timelineItems} />
                        </Card.Body>
                    </Card>
                </div>
                <div className={c('documents')}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Eingereichte Dokumente</Card.Title>
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