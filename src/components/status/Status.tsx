import { combineClasses } from '../../utils/ClassNameUtil';
import StatusStyles from './Status.module.css';

export function Status() {
    const c = combineClasses({ styles: StatusStyles });

    return <>
        <div className={c('statusPage')}>
            <div className={c('statuses')}>
                <div className={c('status', 'done')}>
                    <div className={c('status-text')}>
                        Status 1
                    </div>
                     <svg width="24px" height="24px" viewBox="-2 -4 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.57382 7.88591L1.41384 4.77629L0.333984 5.82774L4.57382 10L13.6673 1.05145L12.5988 0L4.57382 7.88591Z" fill="currentColor" /></svg>
                </div>
                <div className={c('status', 'active')}>
                    Status 2
                </div>
                <div className={c('status')}>
                    Status 3
                </div>
                <div className={c('status')}>
                    Status 4
                </div>
                <div className={c('status')}>
                    Status 5
                </div>
            </div>
            <div className={c('content')}>
                <h2>Status 2</h2>
                <h4>Lorem ipsum dolor sit atem</h4>
                <div className={c('text')}>
                    <table>
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Status</th>
                                <th>Reference Nr</th>
                                <th>Payout</th>
                                <th>Value 1</th>
                                <th>Value 2</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="currentColor" /></svg>
                                </td>
                                <td>Done</td>
                                <td>12345</td>
                                <td>€100</td>
                                <td>10</td>
                                <td>20</td>
                                <td>2024-06-01</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" fill="currentColor" /></svg>
                                </td>
                                <td>Active</td>
                                <td>67890</td>
                                <td>€200</td>
                                <td>15</td>
                                <td>25</td>
                                <td>2024-06-02</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>;
}
