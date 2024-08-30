import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recepti from './pages/Recepti';
import Omeni from './pages/Omeni';
import Kontakt from './pages/Kontakt';
import Login from './pages/Login';
import ReceptiAdmin from './pages/ReceptiAdmin';
import { supabase } from './util/createClient';
import Recept from './pages/Recept';
import Registration from './components/Registration';





const App = () => {
  const location = useLocation();
    const [user,setUser] = useState();

    useEffect(() => {
        const session = supabase.auth.getSession();
        setUser(session?.user ?? null);
        const {data: authListener} = supabase.auth.onAuthStateChange((e, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

  const hideHeaderFooter = location.pathname === '/admin';


 
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recepti/" element={<Recepti />} />
        <Route path="/o-meni" element={<Omeni />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/registration" element={<Registration/>}/>
        <Route path="/recepti/:nazivRecepta" element={<Recept/>}/>
         {user ? (
          <Route path="/recepti/admin" element={<ReceptiAdmin />} />
        ) : (
          <Route path="/recepti/admin" element={<Navigate to="/login" />} />
        )}

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
