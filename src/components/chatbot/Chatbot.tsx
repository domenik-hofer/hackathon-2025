import { combineClasses } from '../../utils/ClassNameUtil';
import ChatbotStyles from './Chatbot.module.css';
import React, { useEffect, useRef, useState } from 'react';

type Msg = { sender: 'user' | 'bot'; text: string };

// Hardcoded demo answers
const REPLIES: Record<string, string> = {
    status:
        'Ihr Schaden ist in Bearbeitung ✅\nAktueller Schritt: Gutachten erstellt. Nächste Aktion: Terminvereinbarung.',
    'etwas zweites':
        'Hier ist etwas Zweites 🤓 — z. B. Hinweis: Bitte laden Sie Fotos und Rechnungen als PDF hoch.',
    'etwas cooles drittes!':
        'Cooles Drittes! 🚀 Wir haben soeben eine SMS mit Ihrem Terminfenster verschickt.',
    default:
        'Das habe ich leider nicht verstanden. Probieren Sie „Status“, „Etwas zweites“ oder „Etwas cooles drittes!“.'
};

export function Chatbot() {
    const c = combineClasses({ styles: ChatbotStyles });
    const [isOpen, setIsOpen] = useState(false);

    // NEW: minimal chat state
    const [history, setHistory] = useState<Msg[]>([]);
    const [input, setInput] = useState('');
    const listRef = useRef<HTMLDivElement>(null);

    // Auto-scroll on new messages
    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }, [history, isOpen]);

    const pushUser = (text: string) =>
        setHistory((h) => [...h, { sender: 'user', text }]);

    const pushBot = (text: string) =>
        setHistory((h) => [...h, { sender: 'bot', text }]);

    // Simulated bot reply
    const replyTo = (text: string) => {
        const key = text.trim().toLowerCase();
        const answer = REPLIES[key] ?? REPLIES.default;
        setTimeout(() => pushBot(answer), 600);
    };

    // Option buttons
    const handleOption = (text: string) => {
        pushUser(text);
        replyTo(text);
    };

    // Send field
    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        const text = input.trim();
        if (!text) return;
        pushUser(text);
        setInput('');
        replyTo(text);
    };

    return (
        <div className={c('chatbot')}>
            <div className={c('button')} onClick={() => setIsOpen(!isOpen)}>
                <div className={c('tooltip')}>Kann ich Ihnen helfen?</div>
                <div className={c('icon')}>
                    {/* SVG unchanged */}
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'> <g filter='url(#filter0_d)'> <path fill-rule='evenodd' clip-rule='evenodd' d='M35 65C51.5685 65 65 51.5685 65 35C65 18.4315 51.5685 5 35 5C18.4315 5 5 18.4315 5 35C5 51.5685 18.4315 65 35 65Z' fill='#4976BA' /> <path d='M64.5 35C64.5 51.2924 51.2924 64.5 35 64.5C18.7076 64.5 5.5 51.2924 5.5 35C5.5 18.7076 18.7076 5.5 35 5.5C51.2924 5.5 64.5 18.7076 64.5 35Z' stroke='white' /> </g> <path fill-rule='evenodd' clip-rule='evenodd' d='M28.3784 16.8198C28.8475 16.6399 29.1841 16.1552 29.1841 15.5863C29.1841 14.862 28.6445 14.2756 27.9754 14.2756C27.3062 14.2756 26.7644 14.8621 26.7667 15.5863C26.7667 16.1557 27.1024 16.6408 27.5726 16.8203V20.3195H28.3784V16.8198ZM20.9442 48.7236C21.6221 48.7236 21.5636 46.4625 21.4791 43.1926L21.4791 43.1926C21.4466 41.938 21.4103 40.5348 21.4103 39.0539C21.4103 37.573 21.4466 36.1699 21.4791 34.9152C21.5636 31.6454 21.6221 29.3843 20.9442 29.3843C20.0063 29.3843 17.5 33.7135 17.5 39.0539C17.5 44.3944 20.0063 48.7236 20.9442 48.7236ZM33.4014 26.2327C33.4629 26.5056 33.3041 26.5848 33.0481 26.47C31.8236 25.9221 29.6305 26.1753 28.5708 26.8795C28.3367 27.0358 28.162 26.9863 28.1779 26.7054C28.3365 23.6828 32.6829 23.1072 33.4014 26.2327ZM47.7681 43.1927V43.1926C47.8008 41.938 47.8374 40.5348 47.8374 39.0539C47.8374 37.573 47.8008 36.1699 47.7681 34.9152V34.9152C47.6829 31.6454 47.6239 29.3843 48.3074 29.3843C49.2531 29.3843 51.7801 33.7135 51.7801 39.0539C51.7801 44.3944 49.2531 48.7236 48.3074 48.7236C47.6239 48.7236 47.6829 46.4625 47.7681 43.1927ZM40.8673 26.6983C40.8851 26.9833 40.7146 27.0379 40.4807 26.8802C39.3609 26.1262 37.1587 26.0251 36.0031 26.5628C35.7474 26.6821 35.5849 26.6033 35.6424 26.3243C36.2826 23.3 40.6611 23.4274 40.8673 26.6983Z' fill='white' /> <path fill-rule='evenodd' clip-rule='evenodd' d='M34.8691 55.976C23.8108 55.976 22.335 35.0522 22.335 29.0213C22.335 22.9904 27.8341 18.1031 34.6232 18.1031C41.4082 18.1031 46.9096 22.9931 46.912 29.0213C46.912 35.0518 45.6843 55.976 34.8691 55.976ZM24.8822 26.9522C24.8822 30.29 29.2089 32.9966 34.5442 32.9966C39.8797 32.9966 44.2086 30.2925 44.2086 26.9522C44.2086 23.6162 39.8794 20.9095 34.5442 20.9095C29.2063 20.9095 24.8822 23.6165 24.8822 26.9522ZM38.202 37.5961C38.5382 37.5961 38.8108 37.3235 38.8108 36.9872C38.8108 36.6509 38.5382 36.3783 38.202 36.3783C37.8657 36.3783 37.5931 36.6509 37.5931 36.9872C37.5931 37.3235 37.8657 37.5961 38.202 37.5961ZM40.4548 36.9872C40.4548 37.3235 40.1822 37.5961 39.8459 37.5961C39.5097 37.5961 39.2371 37.3235 39.2371 36.9872C39.2371 36.6509 39.5097 36.3783 39.8459 36.3783C40.1822 36.3783 40.4548 36.6509 40.4548 36.9872ZM41.4899 37.5961C41.8262 37.5961 42.0988 37.3235 42.0988 36.9872C42.0988 36.6509 41.8262 36.3783 41.4899 36.3783C41.1537 36.3783 40.881 36.6509 40.881 36.9872C40.881 37.3235 41.1537 37.5961 41.4899 37.5961Z' fill='white' /> <defs> <filter id='filter0_d' x='1' y='1' width='68' height='68' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB' > <feFlood flood-opacity='0' result='BackgroundImageFix' /> <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' /> <feOffset /> <feGaussianBlur stdDeviation='2' /> <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' /> <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' /> <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' /> </filter> </defs> </svg>
                </div>
            </div>

            <div className={c('chat', isOpen && 'visible')}>
                <div className={c('messages')} ref={listRef}>
                    {/* Intro message stays as in skeleton */}
                    <div className={c('message')}>
                        <div className={c('bot')}>
                            <img alt='' src='data:image/svg+xml;base64, ...yourBase64...' />
                        </div>
                        <div className={c('bubble')}>
                            <div className={c('text')}>
                                Hallo, ich bin Ada, Ihr virtueller Assistent.
                                <br /><br />
                                Stellen Sie mir eine Frage oder klicken Sie eines dieser Themen:
                            </div>
                            <div className={c('options')}>
                                <div className={c('option')} onClick={() => handleOption('Status')}>Status</div>
                                <div className={c('option')} onClick={() => handleOption('Etwas zweites')}>Etwas zweites</div>
                                <div className={c('option')} onClick={() => handleOption('Etwas cooles drittes!')}>Etwas cooles drittes!</div>
                            </div>
                        </div>
                    </div>

                    {/* Render simulated conversation (replaces single static user message) */}
                    {history.map((m, i) => (
                        <div key={i} className={c('message', m.sender === 'user' && 'user')}>
                            {m.sender === 'bot' && <div className={c('bot')} />}
                            <div className={c('bubble')}>
                                <div className={c('text')}>{m.text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <form className={c('inputArea')} onSubmit={handleSend}>
                    <input
                        className={c('input')}
                        type='text'
                        placeholder='Schreiben Sie eine Nachricht...'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend(e as unknown as React.FormEvent)}
                    />
                    <button className={c('sendButton')} type='submit' disabled={!input.trim()}>
                        <svg height='28' viewBox='0 0 45.7 33.8' width='28'>
                            <path clipRule='evenodd' d='M8.55 25.25l21.67-7.25H11zm2.41-9.47h19.26l-21.67-7.23zm-6 13l4-11.9L5 5l35.7 11.9z'></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}
