import React, { useState } from 'react';
import { useClaims } from '../../context/ClaimsContext';
import LoginFormStyles from './LoginForm.module.css';
import { usePage } from '../../context/PageContext';

const LoginForm: React.FC = () => {
    const [claimNumber, setClaimNumber] = useState('BLD-2023-001');
    const [lastName, setLastName] = useState('Smith');
    const [error, setError] = useState('');
    const { validateClaim, setCurrentClaim } = useClaims();
    const { setActivePage } = usePage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!claimNumber || !lastName) {
            setError('Please enter both claim number and last name');
            return;
        }
        const claimId = validateClaim(claimNumber, lastName);
        if (claimId) {
            setCurrentClaim(claimId);
            setActivePage(1)
            console.log('Login successful, claim ID:', claimId);
        } else {
            setError('Invalid claim number or last name');
        }
    };
    return (
        <div className={LoginFormStyles['login-container']}>
            <h2 className={LoginFormStyles['login-title']}>Check Your Claim Status</h2>
            <form onSubmit={handleSubmit}>
                <div className={LoginFormStyles['form-group']}>
                    <label htmlFor='claimNumber' className={LoginFormStyles['form-label']}>
                        Claim Number
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
                        Last Name
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
                        <p className={LoginFormStyles['error-icon']}>⚠️</p>
                        <span className={LoginFormStyles['error-text']}>{error}</span>
                    </div>
                )}
                <div className={LoginFormStyles['form-group']}>
                  <button type='submit' className={`${LoginFormStyles['submit-button']} ${LoginFormStyles['form-input']}`}>
                    Check Status
                  </button>
                </div>
            </form>
            <p className={LoginFormStyles['login-info']}>
                Enter your claim number and last name to check the status of your building insurance claim.
            </p>
        </div>
    );
};
export default LoginForm;