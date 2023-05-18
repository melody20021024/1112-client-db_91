import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop2Page_91 from './pages/supabase/Shop2Page_91';
import WomensProductStaticPage_91 from './pages/WomensProductStaticPage_91'

const App_91 = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/static_91"element={<WomensProductStaticPage_91/>}/>
        <Route path="/supa_shop2_91"element={<Shop2Page_91/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App_91;
