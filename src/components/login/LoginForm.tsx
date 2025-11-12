import React, { useState } from 'react';
import { useClaims } from '../../context/ClaimsContext';
import LoginFormStyles from './LoginForm.module.css';
import { usePage } from '../../context/PageContext';
import { Button } from '../button/Button';

const LoginForm: React.FC = () => {
    const [claimNumber, setClaimNumber] = useState('BLD-2023-001');
    const [lastName, setLastName] = useState('Mustermann');
    const [error, setError] = useState('');
    const { validateClaim, setCurrentClaim } = useClaims();
    const { setActivePage } = usePage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!claimNumber || !lastName) {
            setError('Alle Felder müssen ausgefüllt sein');
            return;
        }
        const claimId = validateClaim(claimNumber, lastName);
        if (claimId) {
            setCurrentClaim(claimId);
            setActivePage(1);
            console.log('Login successful, claim ID:', claimId);
        } else {
            setError('Fallnummer oder Nachname nicht gefunden');
        }
    };
    return (
        <div className={LoginFormStyles['login-container']}>
            <h2 className={LoginFormStyles['login-title']}>Schadenfall Status</h2>
            <form onSubmit={handleSubmit}>
                <div className={LoginFormStyles['form-group']}>
                    <label htmlFor='claimNumber' className={LoginFormStyles['form-label']}>
                        Fallnummer
                    </label>
                    <input
                        id='claimNumber'
                        type='text'
                        value={claimNumber}
                        onChange={e => setClaimNumber(e.target.value)}
                        className={LoginFormStyles['form-input']}
                        placeholder='e.g. BLD-2023-001'
                    />
                </div>
                <div className={LoginFormStyles['form-group']}>
                    <label htmlFor='lastName' className={LoginFormStyles['form-label']}>
                        Nachname
                    </label>
                    <input
                        id='lastName'
                        type='text'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className={LoginFormStyles['form-input']}
                        placeholder='e.g. Smith'
                    />
                </div>
                {error && (
                    <div className={LoginFormStyles['error-message']}>
                        <svg
                            className={LoginFormStyles['error-icon']}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M1 21.5L12 2.5L23 21.5H1ZM19.53 19.5L12 6.49L4.47 19.5H19.53ZM11 16.5V18.5H13V16.5H11ZM11 10.5H13V14.5H11V10.5Z'
                            />
                        </svg>

                        <span className={LoginFormStyles['error-text']}>{error}</span>
                    </div>
                )}
                <div className={LoginFormStyles['form-group']}>
                    <Button
                        type='submit'
                        className={`${LoginFormStyles['submit-button']} ${LoginFormStyles['form-input']}`}
                        title='Status abfragen'
                    />
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
