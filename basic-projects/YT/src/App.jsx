// import Counter from './components/Counter';
// import Todo from './components/Todo';
// import Meals from './components/Meals';
// import Calculator from './components/Calculator';
// import CmpA from './compo/cmpA';
import UnderStandChildren from './components/underStandChildren';

const App = () => {
  const name = 'Soumadip Majila';
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <CmpA name={name} /> */}
      <UnderStandChildren>
        <div style={{ color: 'green' }}>
          What do you want to post <br />
          <input type="text" />
        </div>
      </UnderStandChildren>

      <UnderStandChildren>
        <div style={{ color: 'red' }}>
          What is your favorite color? <br />
          <input type="color" />
        </div>
      </UnderStandChildren>
    </div>
  );
};

export default App;
