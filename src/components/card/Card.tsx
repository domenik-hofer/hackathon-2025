import { createContext, ReactNode, useContext } from 'react';

import { combineClasses } from '../../utils/ClassNameUtil';
import CardStyles from './Card.module.css';

const c = combineClasses({ styles: CardStyles });
const CardSizeContext = createContext<CardProps['size']>('regular');

export type CardProps = {
    children: ReactNode;
    alignment?: 'left' | 'center' | 'right';
    size?: 'small' | 'regular';
};

export function Card({ children, alignment = 'left', size = 'regular' }: CardProps) {
    return (
        <CardSizeContext.Provider value={size}>
            <div className={c('card', alignment, size)}>{children}</div>
        </CardSizeContext.Provider>
    );
}

export type HeaderProps = {
    children: ReactNode;
};

function Header({ children }: HeaderProps) {
    return <div className={c('header')}>{children}</div>;
}

function Title({ children }: { children: ReactNode }) {
    const size = useContext(CardSizeContext);
    return size === 'small' ? <h4 className={c('title')}>{children}</h4> : <h2 className={c('title')}>{children}</h2>;
}
function Subtitle({ children }: { children: ReactNode }) {
    const size = useContext(CardSizeContext);
    return size === 'small' ? (
        <p className={c('subtitle', 'bold')}>{children}</p>
    ) : (
        <h4 className={c('subtitle')}>{children}</h4>
    );
}

function Body({ children }: { children: ReactNode }) {
    return <div className={c('body')}>{children}</div>;
}

Card.Header = Header;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Body = Body;
