import { useState } from 'react';
import { combineClasses } from '../../utils/ClassNameUtil';
import StatusStyles from './Status.module.css';

type StatusType = 'meldung' | 'pruefung' | 'leistungserbringung' | 'abschluss';

export function Status() {
    const c = combineClasses({ styles: StatusStyles });
    const [activeStatus, setActiveStatus] = useState<StatusType>('pruefung');

    const handleStatusClick = (status: StatusType) => {
        setActiveStatus(status);
    };

    const getStatusContent = () => {
        switch(activeStatus) {
            case 'meldung':
                return {
                    title: 'Meldung',
                    subtitle: 'Schadensmeldung eingegangen',
                    description: 'Ihre Schadensmeldung wurde erfolgreich bei uns eingegangen und registriert.'
                };
            case 'pruefung':
                return {
                    title: 'Prüfung',
                    subtitle: 'Dokumente werden geprüft',
                    description: 'Wir prüfen derzeit Ihre eingereichten Dokumente und den Sachverhalt.'
                };
            case 'leistungserbringung':
                return {
                    title: 'Leistungserbringung',
                    subtitle: 'Bearbeitung der Leistung',
                    description: 'Die Schadenregulierung wird bearbeitet und die Auszahlung vorbereitet.'
                };
            case 'abschluss':
                return {
                    title: 'Abschluss',
                    subtitle: 'Fall abgeschlossen',
                    description: 'Der Schadenfall wurde erfolgreich abgeschlossen.'
                };
            default:
                return {
                    title: 'Status unbekannt',
                    subtitle: '',
                    description: ''
                };
        }
    };

    const statusContent = getStatusContent();

    const getStatusClass = (status: StatusType) => {
        const statusOrder: StatusType[] = ['meldung', 'pruefung', 'leistungserbringung', 'abschluss'];
        const currentIndex = statusOrder.indexOf(activeStatus);
        const statusIndex = statusOrder.indexOf(status);
        
        if (statusIndex < currentIndex) {
            return c('status', 'done');
        } else if (statusIndex === currentIndex) {
            return c('status', 'active');
        } else {
            return c('status');
        }
    };

    return <>
        <div className={c('statusPage')}>
            <div className={c('statuses')}>
                <div className={getStatusClass('meldung')} onClick={() => handleStatusClick('meldung')}>
                    <div className={c('status-text')}>
                        Meldung
                    </div>
                    {getStatusClass('meldung').includes('done') && 
                        <svg width="24px" height="24px" viewBox="-2 -4 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z" fill="currentColor" /></svg>
                    }
                </div>
                <div className={getStatusClass('pruefung')} onClick={() => handleStatusClick('pruefung')}>
                    <div className={c('status-text')}>
                        Prüfung
                    </div>
                    {getStatusClass('pruefung').includes('done') && 
                        <svg width="24px" height="24px" viewBox="-2 -4 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z" fill="currentColor" /></svg>
                    }
                </div>
                <div className={getStatusClass('leistungserbringung')} onClick={() => handleStatusClick('leistungserbringung')}>
                    <div className={c('status-text')}>
                        Leistungserbringung
                    </div>
                    {getStatusClass('leistungserbringung').includes('done') && 
                        <svg width="24px" height="24px" viewBox="-2 -4 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z" fill="currentColor" /></svg>
                    }
                </div>
                <div className={getStatusClass('abschluss')} onClick={() => handleStatusClick('abschluss')}>
                    <div className={c('status-text')}>
                        Abschluss
                    </div>
                    {getStatusClass('abschluss').includes('done') && 
                        <svg width="24px" height="24px" viewBox="-2 -4 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z" fill="currentColor" /></svg>
                    }
                </div>
            </div>
            <div className={c('content')}>
                <h2>{statusContent.title}</h2>
                <h4>{statusContent.subtitle}</h4>
                <div className={c('text')}>
                    <p>{statusContent.description}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Status</th>
                                <th>Referenz Nr.</th>
                                <th>Auszahlung an</th>
                                <th>Forderungsbetrag</th>
                                <th>Auszahlungsbetrag</th>
                                <th>Auszahlungsdatum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="currentColor" /></svg>
                                </td>
                                <td>Ausbezahlt</td>
                                <td>12345678903</td>
                                <td>Beat Schweizer</td>
                                <td>432.50 CHF</td>
                                <td>432.50 CHF</td>
                                <td>25.11.2025</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" fill="currentColor" /></svg>
                                </td>
                                <td>Ausbezahlt</td>
                                <td>12345678901</td>
                                <td>Trocknung Blümli AG</td>
                                <td>1003.35 CHF</td>
                                <td>803.35 CHF</td>
                                <td>20.11.2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>;
}
