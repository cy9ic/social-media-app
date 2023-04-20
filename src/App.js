import './App.css';

import PR1 from './components/ct/pr_left';
import PRMID from './components/mid/pr_mid';
import PRRIGHT from './components/right/pr_right';

function App() {
  return (
    <>
<div className='flex  '>
<PR1 Name="Harkaran Singh" Place="Chandigarh"/>

<PRMID/>
<PRRIGHT/>
</div>

    </>
    
  );
}

export default App;
