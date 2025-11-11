
import { combineClasses } from '../../utils/ClassNameUtil';
import ChatbotStyles from './Chatbot.module.css';
import {useState} from 'react';



export function Chatbot() {
    const c = combineClasses({ styles: ChatbotStyles });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={c('chatbot')}>
            <div className={c('button')} onClick={() => setIsOpen(!isOpen)}>
                <div className={c('tooltip')}>Kann ich Ihnen helfen?</div>
                <div className={c('icon')}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'>
                        <g filter='url(#filter0_d)'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M35 65C51.5685 65 65 51.5685 65 35C65 18.4315 51.5685 5 35 5C18.4315 5 5 18.4315 5 35C5 51.5685 18.4315 65 35 65Z'
                                fill='#4976BA'
                            />
                            <path
                                d='M64.5 35C64.5 51.2924 51.2924 64.5 35 64.5C18.7076 64.5 5.5 51.2924 5.5 35C5.5 18.7076 18.7076 5.5 35 5.5C51.2924 5.5 64.5 18.7076 64.5 35Z'
                                stroke='white'
                            />
                        </g>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M28.3784 16.8198C28.8475 16.6399 29.1841 16.1552 29.1841 15.5863C29.1841 14.862 28.6445 14.2756 27.9754 14.2756C27.3062 14.2756 26.7644 14.8621 26.7667 15.5863C26.7667 16.1557 27.1024 16.6408 27.5726 16.8203V20.3195H28.3784V16.8198ZM20.9442 48.7236C21.6221 48.7236 21.5636 46.4625 21.4791 43.1926L21.4791 43.1926C21.4466 41.938 21.4103 40.5348 21.4103 39.0539C21.4103 37.573 21.4466 36.1699 21.4791 34.9152C21.5636 31.6454 21.6221 29.3843 20.9442 29.3843C20.0063 29.3843 17.5 33.7135 17.5 39.0539C17.5 44.3944 20.0063 48.7236 20.9442 48.7236ZM33.4014 26.2327C33.4629 26.5056 33.3041 26.5848 33.0481 26.47C31.8236 25.9221 29.6305 26.1753 28.5708 26.8795C28.3367 27.0358 28.162 26.9863 28.1779 26.7054C28.3365 23.6828 32.6829 23.1072 33.4014 26.2327ZM47.7681 43.1927V43.1926C47.8008 41.938 47.8374 40.5348 47.8374 39.0539C47.8374 37.573 47.8008 36.1699 47.7681 34.9152V34.9152C47.6829 31.6454 47.6239 29.3843 48.3074 29.3843C49.2531 29.3843 51.7801 33.7135 51.7801 39.0539C51.7801 44.3944 49.2531 48.7236 48.3074 48.7236C47.6239 48.7236 47.6829 46.4625 47.7681 43.1927ZM40.8673 26.6983C40.8851 26.9833 40.7146 27.0379 40.4807 26.8802C39.3609 26.1262 37.1587 26.0251 36.0031 26.5628C35.7474 26.6821 35.5849 26.6033 35.6424 26.3243C36.2826 23.3 40.6611 23.4274 40.8673 26.6983Z'
                            fill='white'
                        />
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M34.8691 55.976C23.8108 55.976 22.335 35.0522 22.335 29.0213C22.335 22.9904 27.8341 18.1031 34.6232 18.1031C41.4082 18.1031 46.9096 22.9931 46.912 29.0213C46.912 35.0518 45.6843 55.976 34.8691 55.976ZM24.8822 26.9522C24.8822 30.29 29.2089 32.9966 34.5442 32.9966C39.8797 32.9966 44.2086 30.2925 44.2086 26.9522C44.2086 23.6162 39.8794 20.9095 34.5442 20.9095C29.2063 20.9095 24.8822 23.6165 24.8822 26.9522ZM38.202 37.5961C38.5382 37.5961 38.8108 37.3235 38.8108 36.9872C38.8108 36.6509 38.5382 36.3783 38.202 36.3783C37.8657 36.3783 37.5931 36.6509 37.5931 36.9872C37.5931 37.3235 37.8657 37.5961 38.202 37.5961ZM40.4548 36.9872C40.4548 37.3235 40.1822 37.5961 39.8459 37.5961C39.5097 37.5961 39.2371 37.3235 39.2371 36.9872C39.2371 36.6509 39.5097 36.3783 39.8459 36.3783C40.1822 36.3783 40.4548 36.6509 40.4548 36.9872ZM41.4899 37.5961C41.8262 37.5961 42.0988 37.3235 42.0988 36.9872C42.0988 36.6509 41.8262 36.3783 41.4899 36.3783C41.1537 36.3783 40.881 36.6509 40.881 36.9872C40.881 37.3235 41.1537 37.5961 41.4899 37.5961Z'
                            fill='white'
                        />
                        <defs>
                            <filter
                                id='filter0_d'
                                x='1'
                                y='1'
                                width='68'
                                height='68'
                                filterUnits='userSpaceOnUse'
                                color-interpolation-filters='sRGB'
                            >
                                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                                <feColorMatrix
                                    in='SourceAlpha'
                                    type='matrix'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation='2' />
                                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className={c('chat', isOpen && 'visible')}>
                <div className={c('messages')}>
                    <div className={c('message')}>
                        <div className={c('bot')}>
                            <img
                                alt=''
                                src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9ImJvZHlfMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KCjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMTMzMzMzNCAwIDAgMC4xMzMzMzM0IDAgMCkiPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzIDMpIiAgZD0iTTI5NCAxNDdDIDI5NCAxMDYuNDA3MSAyNzkuNjQ4MyA3MS43NTg4NCAyNTAuOTQ0NyA0My4wNTUzMUMgMjIyLjI0MTIgMTQuMzUxNzcgMTg3LjU5MjkgMCAxNDcgMEMgMTA2LjQwNzEgMCA3MS43NTg4NCAxNC4zNTE3NyA0My4wNTUzMSA0My4wNTUzMUMgMTQuMzUxNzcgNzEuNzU4ODQgMCAxMDYuNDA3MSAwIDE0N0MgMCAxODcuNTkyOSAxNC4zNTE3NyAyMjIuMjQxMiA0My4wNTUzMSAyNTAuOTQ0N0MgNzEuNzU4ODQgMjc5LjY0ODMgMTA2LjQwNzEgMjk0IDE0NyAyOTRDIDE4Ny41OTI5IDI5NCAyMjIuMjQxMiAyNzkuNjQ4MyAyNTAuOTQ0NyAyNTAuOTQ0N0MgMjc5LjY0ODMgMjIyLjI0MTIgMjk0IDE4Ny41OTI5IDI5NCAxNDciIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzQ5NzZCQSIgZmlsbC1ydWxlPSJub256ZXJvIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDApIiAgZD0iTTExNS4zMTA5IDQwQyAxMTguODQ0MiA0MCAxMjEuNjkyOSA0My4wOTM3NiAxMjEuNjkyOSA0Ni45MTQ4MUMgMTIxLjY5MjkgNDkuOTE1OTkgMTE5LjkxNTcgNTIuNDczNzEgMTE3LjQzODcgNTMuNDIyNkwxMTcuNDM4NyA1My40MjI2TDExNy40MzcyIDY4LjE3MTI4QyAxMjcuMDk4NCA2My4xMDIwNSAxMzguMzcwMiA2MC4xOTMyNCAxNTAuNDEwNCA2MC4xOTMyNEMgMTg2LjIzNTUgNjAuMTkzMjQgMjE1LjI4MzMgODUuOTkxNDggMjE1LjI5NiAxMTcuNzk0M0MgMjE1LjI5NiAxNDkuNjA5NiAyMDguODEzMyAyNjAgMTUxLjcwODkgMjYwQyA5My4zMjA3IDI2MCA4NS41MjgxMSAxNDkuNjExNiA4NS41MjgxMSAxMTcuNzk0M0MgODUuNTI4MTEgOTguMjc0MDggOTYuNDU2OTkgODEuMDI0NzcgMTEzLjE4MjYgNzAuNjA3MjVMMTEzLjE4MjYgNzAuNjA3MjVMMTEzLjE4MzQgNTMuNDI0NTJDIDExMC43MDEgNTIuNDc3MTggMTA4LjkyODkgNDkuOTE4MSAxMDguOTI4OSA0Ni45MTQ4MUMgMTA4LjkxNjcgNDMuMDkzODkgMTExLjc3NzYgNDAgMTE1LjMxMDkgNDB6TTc4LjE4NTc0IDExOS43MTAxQyA4My4xMzgxMiAxMTkuNzEwMSA4MC42NDY4IDE0Mi41NTAxIDgwLjY0NjggMTcwLjcyNDZDIDgwLjY0NjggMTk4Ljg5OTIgODMuMTM4MTIgMjIxLjczOTEgNzguMTg1NzQgMjIxLjczOTFDIDczLjIzMzM1IDIyMS43MzkxIDYwIDE5OC44OTkyIDYwIDE3MC43MjQ2QyA2MCAxNDIuNTUwMSA3My4yMzMzNSAxMTkuNzEwMSA3OC4xODU3NCAxMTkuNzEwMXpNMjIyLjY2MzkgMTE5LjcxMDFDIDIyNy42NTczIDExOS43MTAxIDI0MSAxNDIuNTUwMSAyNDEgMTcwLjcyNDZDIDI0MSAxOTguODk5MiAyMjcuNjU3MyAyMjEuNzM5MSAyMjIuNjYzOSAyMjEuNzM5MUMgMjE3LjY3MDYgMjIxLjczOTEgMjIwLjE4MjUgMTk4Ljg5OTIgMjIwLjE4MjUgMTcwLjcyNDZDIDIyMC4xODI1IDE0Mi41NTAxIDIxNy42NzA2IDExOS43MTAxIDIyMi42NjM5IDExOS43MTAxek0xNjMuMDI4MSAxNjEuMTkzMkMgMTYxLjA5NTEgMTYxLjE5MzIgMTU5LjUyODEgMTYyLjc2MDIgMTU5LjUyODEgMTY0LjY5MzJDIDE1OS41MjgxIDE2Ni42MjYyIDE2MS4wOTUxIDE2OC4xOTMyIDE2My4wMjgxIDE2OC4xOTMyQyAxNjQuOTYxMSAxNjguMTkzMiAxNjYuNTI4MSAxNjYuNjI2MiAxNjYuNTI4MSAxNjQuNjkzMkMgMTY2LjUyODEgMTYyLjc2MDIgMTY0Ljk2MTEgMTYxLjE5MzIgMTYzLjAyODEgMTYxLjE5MzJ6TTE3My4wMjgxIDE2MS4xOTMyQyAxNzEuMDk1MSAxNjEuMTkzMiAxNjkuNTI4MSAxNjIuNzYwMiAxNjkuNTI4MSAxNjQuNjkzMkMgMTY5LjUyODEgMTY2LjYyNjIgMTcxLjA5NTEgMTY4LjE5MzIgMTczLjAyODEgMTY4LjE5MzJDIDE3NC45NjExIDE2OC4xOTMyIDE3Ni41MjgxIDE2Ni42MjYyIDE3Ni41MjgxIDE2NC42OTMyQyAxNzYuNTI4MSAxNjIuNzYwMiAxNzQuOTYxMSAxNjEuMTkzMiAxNzMuMDI4MSAxNjEuMTkzMnpNMTgzLjAyODEgMTYxLjE5MzJDIDE4MS4wOTUxIDE2MS4xOTMyIDE3OS41MjgxIDE2Mi43NjAyIDE3OS41MjgxIDE2NC42OTMyQyAxNzkuNTI4MSAxNjYuNjI2MiAxODEuMDk1MSAxNjguMTkzMiAxODMuMDI4MSAxNjguMTkzMkMgMTg0Ljk2MTEgMTY4LjE5MzIgMTg2LjUyODEgMTY2LjYyNjIgMTg2LjUyODEgMTY0LjY5MzJDIDE4Ni41MjgxIDE2Mi43NjAyIDE4NC45NjExIDE2MS4xOTMyIDE4My4wMjgxIDE2MS4xOTMyek0xNDkuOTk0MiA3NC45OTk3OUMgMTIxLjgxMDEgNzQuOTk5NzkgOTguOTc4NzEgODcuNDE5MTMgOTguOTc4NzEgMTAyLjcyMzFDIDk4Ljk3ODcxIDExOC4wMzYzIDEyMS44MjM3IDEzMC40NTQzIDE0OS45OTQyIDEzMC40NTQzQyAxNzguMTY2IDEzMC40NTQzIDIwMS4wMjI3IDExOC4wNDc4IDIwMS4wMjI3IDEwMi43MjMxQyAyMDEuMDIyNyA4Ny40MTc3OSAxNzguMTY0NiA3NC45OTk3OSAxNDkuOTk0MiA3NC45OTk3OXpNMTU1Ljc5MTUgMTA0LjYyNzdDIDE1OS4xNzIxIDg4LjY3MjQyIDE4Mi4yOTA3IDg5LjM0NDM1IDE4My4zNzkxIDEwNi42MDA4QyAxODMuNDczMyAxMDguMTA0NiAxODIuNTczMyAxMDguMzkyNSAxODEuMzM4MyAxMDcuNTYwNkMgMTc1LjQyNTQgMTAzLjU4MjUgMTYzLjc5NzkgMTAzLjA0OTEgMTU3LjY5NjIgMTA1Ljg4NjJDIDE1Ni4zNDYyIDEwNi41MTU0IDE1NS40ODggMTA2LjA5OTUgMTU1Ljc5MTUgMTA0LjYyNzd6TTExNi4zNzk5IDEwNi42Mzg0QyAxMTcuMjE3NCA5MC42OTIgMTQwLjE2NjYgODcuNjU1MTUgMTQzLjk2MDEgMTA0LjE0NDJDIDE0NC4yODUgMTA1LjU4NDQgMTQzLjQ0NjcgMTA2LjAwMTggMTQyLjA5NDggMTA1LjM5NjZDIDEzNS42MjkyIDEwMi41MDU4IDEyNC4wNDk4IDEwMy44NDE2IDExOC40NTQ3IDEwNy41NTY4QyAxMTcuMjE4MiAxMDguMzgxMiAxMTYuMjk2MSAxMDguMTIwNCAxMTYuMzc5OSAxMDYuNjM4NHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiAvPgo8L2c+Cjwvc3ZnPg=='
                            />
                        </div>
                        <div className={c('bubble')}>
                            <div className={c('text')}>
                                Hallo, ich bin Ada, Ihr virtueller Assistent.
                                <br />
                                <br />
                                Stellen Sie mir eine Frage oder klicken Sie eines dieser Themen:
                            </div>
                            <div className={c('options')}>
                                <div className={c('option')}>Status</div>
                                <div className={c('option')}>Etwas zweites</div>
                                <div className={c('option')}>Etwas cooles drittes!</div>
                            </div>
                        </div>
                    </div>
                    <div className={c('message', 'user')}>
                        <div className={c('bot')}></div>
                        <div className={c('bubble')}>
                            <div className={c('text')}>Status</div>
                        </div>
                    </div>
                </div>
                <div className={c('inputArea')}>
                    <input className={c('input')} type='text' placeholder='Schreiben Sie eine Nachricht...' />
                    <button className={c('sendButton')}>
                        <svg
                            className='webchat__send-icon webchat--css-peknu-varv44'
                            height='28'
                            viewBox='0 0 45.7 33.8'
                            width='28'
                        >
                            <path
                                clip-rule='evenodd'
                                d='M8.55 25.25l21.67-7.25H11zm2.41-9.47h19.26l-21.67-7.23zm-6 13l4-11.9L5 5l35.7 11.9z'
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
