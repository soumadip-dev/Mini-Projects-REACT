import Counter from './Pages/Counter';
import Todo from './Pages/Todo';
import Meals from './Pages/Meals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Profiles from './Pages/Profiles';
import ContactForm from './Pages/ContactForm';
import Layout from './components/Layout';
import NotFound from './Pages/NotFound';
import StopWatch from './Pages/StopWatch';

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
