import ExamplePageStyles from './Example.module.css';
import axios from 'axios';
import { combineClasses } from '../../utils/ClassNameUtil';
import { Button } from '../../components/button/Button';
import { useState } from 'react';

type CatFact = {
    fact: string;
    length: number;
};

export default function ExamplePage() {
    const c = combineClasses({ styles: ExamplePageStyles });
    const [catFact, setCatFact] = useState<CatFact>();

    async function getCatFact() {
        const response = await axios.get('https://catfact.ninja/fact');
        setCatFact(response.data);
    }

    return (
        <>
            <h3 className={c('bold')}> Example-Page </h3>
            <Button title='Get a Cat-Fact!' onClick={getCatFact} />
            {catFact && <div className={c('fact')}>{catFact.fact}</div>}
        </>
    );
}
