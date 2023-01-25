import React from 'react';
import './App.css';
import Result from '../Result/Result';
import Form from '../Form/Form';

function App() {
    const initListUnsorted = [{
        name: 'Sein',
        mod: +1,
        result: 20
    }, {
        name: 'Alvin',
        mod: +3,
        result: 19
    }, {
        name: 'Goratio',
        mod: +2,
        result: 9
    }];
    const [isResult, setIsResult] = React.useState(true);

    function compare(a, b) {
        if (a.result < b.result) {
            return -1;
        }
        if (a.result > b.result) {
            return 1;
        }
        return 0;
    }

    let sortedArr = [...initListUnsorted].sort(compare);

    return (
        <div className="root">
            {isResult ? <Result
                list={sortedArr}
            /> : <Form/>}
        </div>
    );
}

export default App;
