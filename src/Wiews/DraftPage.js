import Draft from '../LargerBits/Draft';
import Color from '../TinyBits/Color';
import { useState } from 'react';
function DraftPage(){
    const [currentColor, setCurrentColor] = useState('');
   

return (

    <div className="DraftPage">
      <header className="DraftPageHeader">
        <Color setColor={setCurrentColor} />
        <h3>{currentColor}</h3>

      </header>
      <main>
        <Draft color={currentColor}/>
      </main>
    </div>
  );
}
export default DraftPage;