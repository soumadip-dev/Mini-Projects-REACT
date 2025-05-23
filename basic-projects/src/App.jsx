import Counter from './components/Counter';
import Todo from './components/Todo';
import Meals from './components/Meals';
// import CmpA from './compo/cmpA';
// import UnderStandChildren from './components/underStandChildren';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Profiles from './components/Profiles';
import ContactForm from './components/ContactForm';

const App = () => {
  const name = 'Soumadip Majila';
  return (
    <div>
      {/* <CmpA name={name} /> */}
      {/* <UnderStandChildren>
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
      </UnderStandChildren> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/form" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
