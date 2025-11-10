import { MouseEventHandler } from 'react';

import { combineClasses } from '../../utils/ClassNameUtil';
import ButtonStyles from './Button.module.css';

export type ButtonProps = {
    title?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export function Button({ title = 'Button', onClick }: ButtonProps) {
    const c = combineClasses({ styles: ButtonStyles });

    return (
        <button className={c('button')} onClick={onClick}>
            <span className={c('flexWrapper')}>{title && <span>{title}</span>}</span>
        </button>
    );
}
