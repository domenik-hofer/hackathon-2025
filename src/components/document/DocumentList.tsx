import { combineClasses } from '../../utils/ClassNameUtil';
import DocumentListStyles from './DocumentList.module.css';

const c = combineClasses({ styles: DocumentListStyles });

export interface Document {
    name: string;
    type: string;
    uploadDate: string;
}

export interface DocumentListProps {
    documents: Document[];
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

export function DocumentList({ documents }: DocumentListProps) {
    return (
        <div className={c('document-list')}>
            <div className={c('mainTitle')}>
                <h5>Eingereichte Dokumente</h5>

                <a
                    className={c('allEntriesLink')}
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasWithBothOptions'
                    aria-controls='offcanvasWithBothOptions'
                >
                    Gesamter Verlauf
                </a>
            </div>
            {documents.map((doc, index) => (
                <div 
                    key={index} 
                    className={c('document-item')}
                >
                    <div className={c('document-info')}>
                        <div className={c('document-details')}>
                            <h3 className={c('document-name')}>{doc.name}</h3>
                            <div className={c('document-meta')}>
                                <span className={c('document-type', doc.type.toLowerCase())}>{doc.type}</span>
                                <span className={c('document-date')}>
                                    Hochgeladen am {formatDate(doc.uploadDate)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={c('document-actions')}>
                        <button className={c('download-button')}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}