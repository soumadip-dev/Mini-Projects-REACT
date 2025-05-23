import Counter from './components/Counter';
import Todo from './components/Todo';
import Meals from './components/Meals';
// import CmpA from './compo/cmpA';
// import UnderStandChildren from './components/underStandChildren';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Profiles from './components/Profiles';
import ContactForm from './components/ContactForm';
import Navber from './components/Layout';
import NotFound from './components/NotFound';

const App = () => {
  const name = 'Soumadip Majila';
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navber />}>
            <Route index element={<Landing />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<Todo />} />
            <Route path="meals" element={<Meals />} />
            <Route path="profile" element={<Profiles />} />
            <Route path="form" element={<ContactForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
