import { ButtonHTMLAttributes } from 'react';

import { combineClasses } from '../../utils/ClassNameUtil';
import ButtonStyles from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title?: string;
    className?: string;
};

export function Button({ title = 'Button', className, type = 'button', ...rest }: ButtonProps) {
    const c = combineClasses({ styles: ButtonStyles });
    const classes = [c('button'), className].filter(Boolean).join(' ');

    return (
        <button className={classes} type={type} {...rest}>
            <span className={c('flexWrapper')}>{title && <span>{title}</span>}</span>
        </button>
    );
}
