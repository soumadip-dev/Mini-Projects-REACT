import Counter from './components/Counter';
import Todo from './components/Todo';
import Meals from './components/Meals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Profiles from './components/Profiles';
import ContactForm from './components/ContactForm';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import StopWatch from './components/StopWatch';

const App = () => {
  const name = 'Soumadip Majila';
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<Todo />} />
            <Route path="meals" element={<Meals />} />
            <Route path="profile" element={<Profiles />} />
            <Route path="form" element={<ContactForm />} />
            <Route path="watch" element={<StopWatch />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
