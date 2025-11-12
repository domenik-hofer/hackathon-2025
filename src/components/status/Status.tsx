import { useState } from 'react';
import { combineClasses } from '../../utils/ClassNameUtil';
import StatusStyles from './Status.module.css';

type StatusType = 'meldung' | 'pruefung' | 'leistungserbringung' | 'abschluss';

const stepInfo = {
    meldung: {
        label: 'Meldung',
        tooltip: 'Erfassung und Bestätigung Ihrer Schadensmeldung',
        description: 'Ihre Schadensmeldung wurde erfolgreich bei uns eingegangen und registriert.'
    },
    pruefung: {
        label: 'Prüfung',
        tooltip: 'Prüfung der eingereichten Unterlagen und Ansprüche',
        description: 'Wir prüfen derzeit Ihre eingereichten Dokumente und den Sachverhalt.'
    },
    leistungserbringung: {
        label: 'Leistungserbringung',
        tooltip: 'Abwicklung der Leistungen und Zahlungen',
        description: 'Die Schadenregulierung wird bearbeitet und die Auszahlung vorbereitet.'
    },
    abschluss: {
        label: 'Abschluss',
        tooltip: 'Abschluss des Schadenfalls',
        description: 'Der Schadenfall wurde erfolgreich abgeschlossen.'
    },
};

const steps: StatusType[] = ['meldung', 'pruefung', 'leistungserbringung', 'abschluss'];

export function Status() {
    const c = combineClasses({ styles: StatusStyles });
    const [activeStatus, setActiveStatus] = useState<StatusType>('pruefung');
    const [tooltipVisible, setTooltipVisible] = useState<StatusType | null>(null);

    const handleStatusClick = (status: StatusType) => {
        setActiveStatus(status);
    };

    const getStepStatus = (step: StatusType) => {
        const stepIndex = steps.indexOf(step);
        const activeIndex = steps.indexOf(activeStatus);
        if (stepIndex < activeIndex) return 'completed';
        if (stepIndex === activeIndex) return 'current';
        return 'upcoming';
    };

    const getStatusContent = () => {
        switch(activeStatus) {
            case 'meldung':
                return {
                    title: 'Meldung',
                    subtitle: 'Ihre Schadensmeldung ist eingegangen',
                    description: 'Wir haben Ihre Schadensmeldung erhalten und werden diese umgehend bearbeiten. Sie erhalten in Kürze weitere Informationen.',
                    detailContent: (
                        <div className={c('detail-content')}>
                            <div className={c('success-box')}>
                                <div className={c('success-icon')}>
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" fill="#10B981"/>
                                        <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                                    </svg>
                                </div>
                                <div className={c('success-content')}>
                                    <h3>Ihre Schadensmeldung wurde erfolgreich übermittelt</h3>
                                    <p>Wir haben Ihre Meldung erhalten und werden diese umgehend bearbeiten.</p>
                                    <div className={c('timestamp')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" fill="none"/>
                                            <path d="M8 4v4l3 3" stroke="currentColor" strokeWidth="1" fill="none"/>
                                        </svg>
                                        Eingangsdatum: 15.06.2023, 09:23
                                    </div>
                                </div>
                            </div>
                            <div className={c('action-section')}>
                                <button className={c('primary-button')}>Dokument hochladen</button>
                            </div>
                        </div>
                    )
                };
            case 'pruefung':
                return {
                    title: 'Prüfung',
                    subtitle: 'Dokumente werden geprüft',
                    description: 'Wir prüfen derzeit Ihre eingereichten Unterlagen und Ansprüche. Die Bearbeitungszeit beträgt in der Regel 2-3 Werktage.',
                    detailContent: (
                        <div className={c('detail-content')}>
                            <div className={c('claims-table')}>
                                <div className={c('table-header')}>
                                    <div>STATUS</div>
                                    <div>REFERENZ NR.</div>
                                    <div>AUSZAHLUNG AN</div>
                                    <div>FORDERUNGSBETRAG</div>
                                    <div>AUSZAHLUNGSBETRAG</div>
                                </div>
                                <div className={c('table-row', 'completed')}>
                                    <div className={c('status-cell')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="7" fill="#10B981"/>
                                            <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none"/>
                                        </svg>
                                        Ausbezahlt
                                    </div>
                                    <div>12345678903</div>
                                    <div>Beat Schweizer</div>
                                    <div>432.50 CHF</div>
                                    <div>432.50 CHF</div>
                                </div>
                                <div className={c('table-row', 'completed')}>
                                    <div className={c('status-cell')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="7" fill="#10B981"/>
                                            <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none"/>
                                        </svg>
                                        Ausbezahlt
                                    </div>
                                    <div>12345678901</div>
                                    <div>Trocknung Blümli AG</div>
                                    <div>1'003.35 CHF</div>
                                    <div>803.35 CHF</div>
                                </div>
                                <div className={c('table-row', 'processing')}>
                                    <div className={c('status-cell')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="7" fill="#3B82F6"/>
                                            <circle cx="8" cy="8" r="2" fill="white"/>
                                        </svg>
                                        In Bearbeitung
                                    </div>
                                    <div>12345678902</div>
                                    <div>Sanitär Müller GmbH</div>
                                    <div>750.00 CHF</div>
                                    <div>-</div>
                                </div>
                            </div>
                            <div className={c('action-section')}>
                                <button className={c('primary-button')}>Rückfrage stellen</button>
                            </div>
                        </div>
                    )
                };
            case 'leistungserbringung':
                return {
                    title: 'Leistungserbringung',
                    subtitle: 'Leistungen werden erbracht',
                    description: 'Ihre Ansprüche wurden geprüft und die entsprechenden Leistungen werden nun erbracht. Hier sehen Sie den aktuellen Stand.',
                    detailContent: (
                        <div className={c('detail-content')}>
                            <div className={c('progress-timeline')}>
                                <div className={c('timeline-item', 'completed')}>
                                    <div className={c('timeline-icon')}>
                                        <svg width="20" height="20" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="8" fill="#10B981"/>
                                            <path d="M6 10l3 3 6-6" stroke="white" strokeWidth="2" fill="none"/>
                                        </svg>
                                    </div>
                                    <div className={c('timeline-content')}>
                                        <h4>Schadensmeldung eingegangen</h4>
                                        <p>Ihre Meldung wurde erfasst und ist in Bearbeitung.</p>
                                        <span className={c('timeline-date')}>15.06.2023</span>
                                    </div>
                                </div>
                                <div className={c('timeline-item', 'completed')}>
                                    <div className={c('timeline-icon')}>
                                        <svg width="20" height="20" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="8" fill="#10B981"/>
                                            <path d="M6 10l3 3 6-6" stroke="white" strokeWidth="2" fill="none"/>
                                        </svg>
                                    </div>
                                    <div className={c('timeline-content')}>
                                        <h4>Schadenprüfung abgeschlossen</h4>
                                        <p>Die Prüfung Ihrer Dokumente wurde abgeschlossen.</p>
                                        <span className={c('timeline-date')}>18.06.2023</span>
                                    </div>
                                </div>
                                <div className={c('timeline-item', 'active')}>
                                    <div className={c('timeline-icon')}>
                                        <svg width="20" height="20" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="8" fill="#3B82F6"/>
                                            <circle cx="10" cy="10" r="3" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className={c('timeline-content')}>
                                        <h4>Handwerker beauftragt</h4>
                                        <p>Der Handwerker wurde beauftragt und wird sich mit Ihnen in Verbindung setzen.</p>
                                        <span className={c('timeline-date')}>20.06.2023</span>
                                    </div>
                                </div>
                                <div className={c('timeline-item')}>
                                    <div className={c('timeline-icon')}>
                                        <div className={c('timeline-circle')}></div>
                                    </div>
                                    <div className={c('timeline-content')}>
                                        <h4>Rechnung eingetroffen</h4>
                                        <p>Wir warten auf den Eingang der Rechnung.</p>
                                    </div>
                                </div>
                                <div className={c('timeline-item')}>
                                    <div className={c('timeline-icon')}>
                                        <div className={c('timeline-circle')}></div>
                                    </div>
                                    <div className={c('timeline-content')}>
                                        <h4>Auszahlung veranlasst</h4>
                                        <p>Die Auszahlung wird nach Eingang der Rechnung veranlasst.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={c('progress-bar-container')}>
                                <div className={c('progress-label')}>Gesamtfortschritt</div>
                                <div className={c('progress-bar')}>
                                    <div className={c('progress-fill')} style={{width: '40%'}}></div>
                                </div>
                                <div className={c('progress-text')}>40%</div>
                            </div>
                        </div>
                    )
                };
            case 'abschluss':
                return {
                    title: 'Abschluss',
                    subtitle: 'Schadenfall erfolgreich abgeschlossen',
                    description: 'Ihr Schadenfall wurde erfolgreich abgeschlossen. Alle Leistungen wurden erbracht und der Fall ist nun geschlossen.',
                    detailContent: (
                        <div className={c('detail-content')}>
                            <div className={c('completion-box')}>
                                <div className={c('completion-icon')}>
                                    <svg width="32" height="32" viewBox="0 0 32 32">
                                        <circle cx="16" cy="16" r="14" fill="#10B981"/>
                                        <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="3" fill="none"/>
                                    </svg>
                                </div>
                                <div className={c('completion-content')}>
                                    <h3>Abgeschlossen</h3>
                                    <h4>Ihr Schadenfall wurde erfolgreich abgeschlossen</h4>
                                    <p>Alle Leistungen wurden erbracht und der Fall ist nun geschlossen.</p>
                                </div>
                            </div>
                            
                            <div className={c('summary-section')}>
                                <h3>Zusammenfassung</h3>
                                <div className={c('summary-grid')}>
                                    <div className={c('summary-item')}>
                                        <span>Schadenfall-Referenz</span>
                                        <strong>S-202306-12345</strong>
                                    </div>
                                    <div className={c('summary-item')}>
                                        <span>Schadendatum</span>
                                        <strong>10.06.2023</strong>
                                    </div>
                                    <div className={c('summary-item')}>
                                        <span>Schadenart</span>
                                        <strong>Wasserschaden</strong>
                                    </div>
                                    <div className={c('summary-item')}>
                                        <span>Gesamtbetrag der Leistungen</span>
                                        <strong>1'235.85 CHF</strong>
                                    </div>
                                    <div className={c('summary-item')}>
                                        <span>Selbstbehalt</span>
                                        <strong>200.00 CHF</strong>
                                    </div>
                                </div>
                            </div>

                            <div className={c('info-box')}>
                                <h4>Hinweis zum Selbstbehalt</h4>
                                <p>Gemäss Ihrer Versicherungspolice wurde ein Selbstbehalt von 200.00 CHF angewendet. Dieser Betrag wurde von der Gesamtleistung abgezogen.</p>
                            </div>

                            <div className={c('sidebar')}>
                                <h3>Bisheriger Verlauf</h3>
                                <div className={c('history-timeline')}>
                                    <div className={c('history-item')}>
                                        <div className={c('history-icon')}></div>
                                        <div>
                                            <strong>Schadensmeldung eingegangen</strong>
                                            <span>15.06.2023, 09:23</span>
                                            <p>Ihre Meldung wurde erfasst und ist in Bearbeitung.</p>
                                        </div>
                                    </div>
                                    <div className={c('history-item')}>
                                        <div className={c('history-icon')}></div>
                                        <div>
                                            <strong>Dokumente angefordert</strong>
                                            <span>16.06.2023, 14:30</span>
                                            <p>Bitte reichen Sie die angeforderten Dokumente ein.</p>
                                        </div>
                                    </div>
                                    <div className={c('history-item')}>
                                        <div className={c('history-icon')}></div>
                                        <div>
                                            <strong>Dokumente erhalten</strong>
                                            <span>18.06.2023, 10:15</span>
                                            <p>Ihre Dokumente wurden erhalten und werden geprüft.</p>
                                        </div>
                                    </div>
                                </div>

                                <h3>Eingereichte Dokumente</h3>
                                <div className={c('documents-list')}>
                                    <div className={c('document-item')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <path d="M3 1h8l2 2v10a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z" fill="#DC2626"/>
                                        </svg>
                                        <div>
                                            <strong>Schadensmeldung.pdf</strong>
                                            <span>15.06.2023</span>
                                        </div>
                                        <button className={c('download-btn')}>Download</button>
                                    </div>
                                    <div className={c('document-item')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <path d="M3 1h8l2 2v10a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z" fill="#DC2626"/>
                                        </svg>
                                        <div>
                                            <strong>Rechnung_Reparatur.pdf</strong>
                                            <span>18.06.2023</span>
                                        </div>
                                        <button className={c('download-btn')}>Download</button>
                                    </div>
                                    <div className={c('document-item')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16">
                                            <rect x="2" y="2" width="12" height="12" fill="#3B82F6"/>
                                        </svg>
                                        <div>
                                            <strong>Schadenfoto.jpg</strong>
                                            <span>18.06.2023</span>
                                        </div>
                                        <button className={c('download-btn')}>Download</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                };
            default:
                return {
                    title: 'Status unbekannt',
                    subtitle: '',
                    description: '',
                    detailContent: null
                };
        }
    };

    const statusContent = getStatusContent();

    const getStatusClass = (status: StatusType) => {
        const stepStatus = getStepStatus(status);
        
        if (stepStatus === 'completed') {
            return c('status', 'done');
        } else if (stepStatus === 'current') {
            return c('status', 'active');
        } else {
            return c('status');
        }
    };

    const renderTooltip = (status: StatusType) => {
        if (tooltipVisible === status) {
            return (
                <div className={c('tooltip')}>
                    {stepInfo[status].tooltip}
                </div>
            );
        }
        return null;
    };

    const renderCheckIcon = () => (
        <svg width="24px" height="24px" viewBox="-2 -4 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z" fill="currentColor" />
        </svg>
    );

    return <>
        <div className={c('statusPage')}>
            <div className={c('statuses')}>
                {steps.map((step) => {
                    const stepStatus = getStepStatus(step);
                    return (
                        <div 
                            key={step}
                            className={getStatusClass(step)} 
                            onClick={() => handleStatusClick(step)}
                            onMouseEnter={() => setTooltipVisible(step)}
                            onMouseLeave={() => setTooltipVisible(null)}
                            style={{ cursor: 'pointer', position: 'relative' }}
                        >
                            <div className={c('status-text')}>
                                {stepInfo[step].label}
                            </div>
                            {stepStatus === 'completed' && renderCheckIcon()}
                            {renderTooltip(step)}
                        </div>
                    );
                })}
            </div>
            <div className={c('content')}>
                <h2>{statusContent.title}</h2>
                <h4>{statusContent.subtitle}</h4>
                <div className={c('text')}>
                    <p>{statusContent.description}</p>
                    {statusContent.detailContent}
                </div>
            </div>
        </div>
    </>;
}
