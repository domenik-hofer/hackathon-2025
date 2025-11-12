import { combineClasses } from '../../utils/ClassNameUtil';
import TimelineStyles from './Timeline.module.css';
import {usePage} from '../../context/PageContext';

const c = combineClasses({ styles: TimelineStyles });

export interface TimelineItem {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    icon: string;
}

export interface TimelineProps {
    items: TimelineItem[];
    showAll?: boolean;
}

export function Timeline({ items, showAll = false }: TimelineProps) {
    const maxVisible = showAll ? items.length : 3;
    const { isLoggedIn, setIsLoggedIn } = usePage();

    // Parse dates in either 'YYYY-MM-DD' or 'DD.MM.YYYY' and optional time like 'HH:mm' or 'HH:mm Uhr'
    const toTimestamp = (dateStr: string, timeStr: string): number => {
        if (!dateStr) return 0;
        let year = 0,
            month = 0,
            day = 0;
        if (dateStr.includes('-')) {
            // YYYY-MM-DD
            const [y, m, d] = dateStr.split('-');
            year = parseInt(y, 10);
            month = parseInt(m, 10);
            day = parseInt(d, 10);
        } else if (dateStr.includes('.')) {
            // DD.MM.YYYY
            const [d, m, y] = dateStr.split('.');
            day = parseInt(d, 10);
            month = parseInt(m, 10);
            year = parseInt(y, 10);
        }
        // Extract HH:mm if present; strip non-digits/colon (e.g., remove ' Uhr')
        const cleanTime = (timeStr || '').replace(/[^0-9:]/g, '');
        let hours = 0,
            minutes = 0;
        if (cleanTime) {
            const [h, min] = cleanTime.split(':');
            hours = parseInt(h || '0', 10) || 0;
            minutes = parseInt(min || '0', 10) || 0;
        }
        if (!year || !month || !day) return 0;
        const dt = new Date(year, month - 1, day, hours, minutes, 0, 0);
        const ts = dt.getTime();
        return isNaN(ts) ? 0 : ts;
    };

    // Sort descending (newest first) without mutating input
    const sorted = [...items].sort((a, b) => {
        const tb = toTimestamp(b.date, b.time);
        const ta = toTimestamp(a.date, a.time);
        if (tb !== ta) return ta - tb;
        // tie-breaker: higher id first
        return a.id - b.id;
    });

    return (
        <div className={c('timeline')}>
            <div className={c('mainTitle')}>
                <h5>Bisheriger Verlauf</h5>

                {isLoggedIn && (<a
                    className={c('allEntriesLink')}
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasWithBothOptions'
                    aria-controls='offcanvasWithBothOptions'
                >
                    Gesamter Verlauf
                </a>)}
            </div>

            {sorted.map((item, index) => (
                <>
                    {index < maxVisible && (
                        <div key={item.id} className={c('timelineItem', 'small')}>
                            <div className={c('iconContainer')}>
                                <div className={c('icon')}></div>
                                {index < sorted.length - sorted.length + (maxVisible - 1) && (
                                    <div className={c('connectorWrapper')}>

                                        <div className={c('connector')} />
                                    </div>
                                )}
                            </div>
                            <div className={c('content')}>
                                <div className={c('header')}>
                                    <h3 className={c('title')}>{item.title}</h3>
                                    <div className={c('datetime')}>
                                        <span className={c('date')}>{item.date}</span>
                                        <span className={c('time')}>{item.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
            <div
                className='offcanvas offcanvas-start'
                data-bs-scroll='true'
                tabIndex={-1}
                id='offcanvasWithBothOptions'
                aria-labelledby='offcanvasWithBothOptionsLabel'
            >
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title' id='offcanvasWithBothOptionsLabel'>
                        Schadenfall Verlauf
                    </h5>
                    <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className='offcanvas-body'>
                    <div className={c('timeline')}>
                        {sorted.map((item, index) => (
                            <div key={item.id} className={c('timelineItem')}>
                                <div className={c('iconContainer')}>
                                    <div className={c('icon')}>
                                        <svg
                                            width='24px'
                                            height='24px'
                                            viewBox='-2 -4 18 18'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z'
                                                fill='white'
                                            />
                                        </svg>
                                    </div>
                                    {index < sorted.length - 1 && (
                                        <div className={c('connectorWrapper')}>

                                            <div className={c('connector')} />
                                        </div>
                                    )}
                                </div>
                                <div className={c('content')}>
                                    <div className={c('header')}>
                                        <h3 className={c('title')}>{item.title}</h3>
                                        <div className={c('datetime')}>
                                            <span className={c('date')}>{item.date}</span>
                                            <span className={c('time')}>{item.time}</span>
                                        </div>
                                    </div>
                                    <p className={c('description')}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
