import { useState } from 'react';
import { combineClasses } from '../../utils/ClassNameUtil';
import StatusStyles from './Status.module.css';
import { usePage } from '../../context/PageContext';
import { Button } from '../button/Button';

type StatusType = 'meldung' | 'pruefung' | 'leistungserbringung' | 'abschluss';

const stepInfo = {
    meldung: {
        label: 'Meldung',
        tooltip: 'Erfassung und Bestätigung Ihrer Schadensmeldung',
        description: 'Ihre Schadensmeldung wurde erfolgreich bei uns eingegangen und registriert.',
    },
    pruefung: {
        label: 'Prüfung',
        tooltip: 'Prüfung der eingereichten Unterlagen und Ansprüche',
        description: 'Wir prüfen derzeit Ihre eingereichten Dokumente und den Sachverhalt.',
    },
    leistungserbringung: {
        label: 'Leistungserbringung',
        tooltip: 'Abwicklung der Leistungen und Zahlungen',
        description: 'Die Schadenregulierung wird bearbeitet und die Auszahlung vorbereitet.',
    },
    abschluss: {
        label: 'Abschluss',
        tooltip: 'Abschluss des Schadenfalls',
        description: 'Der Schadenfall wurde erfolgreich abgeschlossen.',
    },
};

const steps: StatusType[] = ['meldung', 'pruefung', 'leistungserbringung', 'abschluss'];

export function Status() {
    const c = combineClasses({ styles: StatusStyles });
    const [activeStatus, setActiveStatus] = useState<StatusType>('pruefung');
    const [tooltipVisible, setTooltipVisible] = useState<StatusType | null>(null);
    const { isLoggedIn, setIsLoggedIn } = usePage();

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
        switch (activeStatus) {
            case 'meldung':
                return {
                    title: 'Schadenmeldung eingegangen',
                    subtitle: 'Vielen Dank!',
                    description:
                        'Wir haben Ihre Schadenmeldung erhalten und werden uns sobald als möglich darum kümmern.',
                    detailContent: <></>,
                };
            case 'pruefung':
                return {
                    title: 'Warten auf Dokumente',
                    subtitle: 'Bitte reichen Sie folgende Dokumente ein',
                    description: '',
                    detailContent: (
                        <>
                            <div className={c('document-list')}>
                                <div className='_document-item_1jlxl_49'>
                                    <div className='_document-info_1jlxl_71'>
                                        <div className={c('document-actions')}>
                                            <svg
                                                width='24px'
                                                height='24px'
                                                viewBox='-2 -4 18 18'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z'
                                                    fill='currentColor'
                                                />
                                            </svg>
                                        </div>
                                        <div className='_document-details_1jlxl_85'>
                                            <h3 className='_document-name_1jlxl_97'>Reparaturrechnung</h3>
                                            <div className='_document-meta_1jlxl_113'>
                                                <span className='_document-type_1jlxl_129'>PDF</span>
                                                <span className='_document-date_1jlxl_151'>
                                                    Hochgeladen am 15.10.2025
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='_document-item_1jlxl_49'>
                                    <div className='_document-info_1jlxl_71'>
                                        <div className={c('document-actions')}>?</div>
                                        <div className='_document-details_1jlxl_85'>
                                            <h3 className='_document-name_1jlxl_97'>Bericht Gutachten Formular</h3>
                                            <div className='_document-meta_1jlxl_113'></div>
                                        </div>
                                    </div>
                                    <button className={c('download-button')}>
                                        Hochladen
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            width='24'
                                        >
                                            <path d='M0 0h24v24H0V0z' fill='none'></path>
                                            <path d='M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z'></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    ),
                };
            case 'leistungserbringung':
                return {
                    title: 'Forderungsprüfung und -auszahlung',
                    subtitle: 'Hier sehen Sie eine Übersicht aller Forderungen',
                    description: '*Ihr Selbstbehalt: 200 CHF',
                    detailContent: (
                        <div className={c('detail-content')}>
                            <div className={c('claims-table')}>
                                <div className={c('table-header')}>
                                    <div>STATUS</div>
                                    <div>REFERENZ NR.</div>
                                    <div>AUSZAHLUNG AN</div>
                                    <div>FORDERUNGSBETRAG</div>
                                    <div>AUSZAHLUNGSBETRAG</div>
                                    <div>AUSZAHLUNGSDATUM</div>
                                </div>
                                <div className={c('table-row', 'processing')}>
                                    <div className={c('status-cell')}>
                                        <svg width='16' height='16' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='7' fill='#3B82F6' />
                                            <circle cx='8' cy='8' r='2' fill='white' />
                                        </svg>
                                        In Prüfung
                                    </div>
                                    <div>12345678903</div>
                                    <div>Beat Schweizer</div>
                                    <div>432.50 CHF</div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={c('table-row', 'failed')}>
                                    <div className={c('status-cell')}>
                                        <svg width='16' height='16' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='7' fill='#DC2626' />
                                            <path d='M5 5l6 6M11 5l-6 6' stroke='white' strokeWidth='1.5' fill='none' />
                                        </svg>
                                        Abgelehnt
                                    </div>
                                    <div>12345678902</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={c('table-row', 'completed')}>
                                    <div className={c('status-cell')}>
                                        <svg width='16' height='16' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='7' fill='#10B981' />
                                            <path d='M5 8l2 2 4-4' stroke='white' strokeWidth='1.5' fill='none' />
                                        </svg>
                                        Ausbezahlt
                                    </div>
                                    <div>12345678901</div>
                                    <div>Trocknung Blümli AG</div>
                                    <div>1'003.35 CHF</div>
                                    <div>*803.35 CHF</div>
                                    <div>20.11.2025</div>
                                </div>
                            </div>
                        </div>
                    ),
                };
            case 'abschluss':
                return {
                    title: 'Abgeschlossen',
                    subtitle: 'Hier sehen Sie eine Übersicht aller Forderungen',
                    description: '*Ihr Selbstbehalt: 200 CHF',
                    detailContent: (
                        <div className={c('detail-content')}>
                            <div className={c('claims-table')}>
                                <div className={c('table-header')}>
                                    <div>STATUS</div>
                                    <div>REFERENZ NR.</div>
                                    <div>AUSZAHLUNG AN</div>
                                    <div>FORDERUNGSBETRAG</div>
                                    <div>AUSZAHLUNGSBETRAG</div>
                                    <div>AUSZAHLUNGSDATUM</div>
                                </div>
                                <div className={c('table-row', 'completed')}>
                                    <div className={c('status-cell')}>
                                        <svg width='16' height='16' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='7' fill='#10B981' />
                                            <path d='M5 8l2 2 4-4' stroke='white' strokeWidth='1.5' fill='none' />
                                        </svg>
                                        Ausbezahlt
                                    </div>
                                    <div>12345678903</div>
                                    <div>Beat Schweizer</div>
                                    <div>432.50 CHF</div>
                                    <div>432.50 CHF</div>
                                    <div>25.11.2025</div>
                                </div>
                                <div className={c('table-row', 'failed')}>
                                    <div className={c('status-cell')}>
                                        <svg width='16' height='16' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='7' fill='#DC2626' />
                                            <path d='M5 5l6 6M11 5l-6 6' stroke='white' strokeWidth='1.5' fill='none' />
                                        </svg>
                                        Abgelehnt
                                    </div>
                                    <div>12345678902</div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={c('table-row', 'completed')}>
                                    <div className={c('status-cell')}>
                                        <svg width='16' height='16' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='7' fill='#10B981' />
                                            <path d='M5 8l2 2 4-4' stroke='white' strokeWidth='1.5' fill='none' />
                                        </svg>
                                        Ausbezahlt
                                    </div>
                                    <div>12345678901</div>
                                    <div>Trocknung Blümli AG</div>
                                    <div>1'003.35 CHF</div>
                                    <div>*803.35 CHF</div>
                                    <div>20.11.2025</div>
                                </div>
                            </div>
                        </div>
                    ),
                };
            default:
                return {
                    title: 'Status unbekannt',
                    subtitle: '',
                    description: '',
                    detailContent: null,
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
            return <div className={c('tooltip')}>{stepInfo[status].tooltip}</div>;
        }
        return null;
    };

    const renderCheckIcon = () => (
        <svg width='24px' height='24px' viewBox='-2 -4 18 18' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z'
                fill='currentColor'
            />
        </svg>
    );

    return (
        <>
            <div className={c('statusPage')}>
                <div className={c('statuses')}>
                    {steps.map(step => {
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
                                <div className={c('status-text')}>{stepInfo[step].label}</div>
                                {stepStatus === 'completed' && renderCheckIcon()}
                                {renderTooltip(step)}
                            </div>
                        );
                    })}
                </div>
                <div className={c('content')}>
                    <h2>{statusContent.title}</h2>
                    {isLoggedIn ? (
                        <>
                            <h4>{statusContent.subtitle}</h4>
                            <div className={c('text')}>
                                <p>{statusContent.description}</p>
                                {statusContent.detailContent}
                            </div>
                        </>
                    ) : (
                        <Button style={{margin: 'auto'}} title='Einloggen für mehr Details' onClick={()=> setIsLoggedIn(true)}/>
                    )}
                </div>
            </div>
        </>
    );
}
