import { combineClasses } from '../utils/ClassNameUtil';
import HomePageStyles from './Home.module.css';
import { Card } from '../components/card/Card';
import { Timeline } from '../components/timeline/Timeline';
import { DocumentList, Document } from '../components/document/DocumentList';
import { Status } from '../components/status/Status';

import {
    buildDocumentsFromClaim,
    buildTimelineItemsFromEvents,
    claimEvents,
    claimsMeta,
    mockClaims,
} from '../utils/mockData';
import { usePage } from '../context/PageContext';

export default function HomePage() {
    const c = combineClasses({ styles: HomePageStyles });
    const { isLoggedIn, setIsLoggedIn } = usePage();

    const claim = claimsMeta[0];
    const fallbackClaim = mockClaims[0];
    const fullClaim = claim
        ? mockClaims.find((c) => c.id === claim.id) ?? fallbackClaim
        : fallbackClaim;
    const relevantEvents = claim
        ? claimEvents.filter((evt) => evt.claimId === claim.id)
        : claimEvents;
    const timelineItems = buildTimelineItemsFromEvents(relevantEvents);
    const documents: Document[] = buildDocumentsFromClaim(fullClaim);

    return (
        <>
            <div className={c('layout')}>
                <div className={c('timeline', !isLoggedIn && 'tall')}>
                    <Card>
                        <Card.Body>
                            <Timeline items={timelineItems} showAll={!isLoggedIn} />
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
                {isLoggedIn && (<div className={c('documents')}>
                    <Card>
                        <Card.Body>
                            <DocumentList documents={documents} />
                        </Card.Body>
                    </Card>
                </div>)}
            </div>
        </>
    );
}