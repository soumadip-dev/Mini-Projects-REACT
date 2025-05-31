import Button from './Components/Button';
import User from './Components/User';

function App() {
  return (
    <>
      {/* <User name="Soumadip" age={23} isStudent={true} /> */}
      <Button label="Click Me" onClick={() => console.log('Clicked')} disabled={false} />
    </>
  );
}

export default App;
