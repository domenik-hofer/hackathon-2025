
import { combineClasses } from '../../utils/ClassNameUtil';
import ChatbotStyles from './Chatbot.module.css';



export function Chatbot() {
    const c = combineClasses({ styles: ChatbotStyles });

    return (
        <div className={c('chatbot')}>

        </div>
    );
}
