import { combineClasses } from '../../utils/ClassNameUtil';
import IconStyles from './Icon.module.css';

const c = combineClasses({ styles: IconStyles });

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Icon({ name, size = 'medium', className }: IconProps) {
  const getIconPath = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'file-text': '/src/assets/icons/list.svg',
      'mail': '/src/assets/icons/mail.svg',
      'user': '/src/assets/icons/home.svg', // Using home as placeholder for user
      'clipboard-check': '/src/assets/icons/check.svg',
      'calendar': '/src/assets/icons/calendar.svg',
      'warning': '/src/assets/icons/warning.svg',
      'download': '/src/assets/icons/download.svg',
      'edit': '/src/assets/icons/edit.svg',
      'delete': '/src/assets/icons/delete.svg',
      'close': '/src/assets/icons/close.svg',
      'add': '/src/assets/icons/add.svg',
      'chevron_down': '/src/assets/icons/chevron_down.svg',
      'chevron_up': '/src/assets/icons/chevron_up.svg',
      'chevron_left': '/src/assets/icons/chevron_left.svg',
      'chevron_right': '/src/assets/icons/chevron_right.svg',
      'arrow_right': '/src/assets/icons/arrow_right.svg',
      'filter_off': '/src/assets/icons/filter_off.svg',
    };
    return iconMap[iconName] || '/src/assets/icons/list.svg'; // Fallback to list icon
  };

  return (
    <img 
      src={getIconPath(name)} 
      alt={name} 
      className={c('icon', size, className)} 
    />
  );
}