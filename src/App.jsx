import "./App.css";
import { Header, Sidebar, Footer,Onheader } from "./Components";
import { MainContextProvider, useMainContext ,AuthContextProvider,useAuthContext} from "./core/modules";
import MainRoutes from './route'
import { useNavigate, Link,useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css';






function App() {
 
  return (
    <MainContextProvider>
      <AuthContextProvider>
      <MainRender />  
      </AuthContextProvider>            
    </MainContextProvider>
  );
}

const MainRender = () => {
  const { className } = useMainContext();
  const location = useLocation()
 // const { currentUser } = useAuthContext();
  return (
     <div className="">

      {location.pathname.includes('/auth') ?   <Onheader />:<Sidebar />}
         {/* {currentUser ? 
            (
              <Sidebar/>
             )
           : ( 
              <Onheader/> 
             )
           } */}
            
     
          
        <ToastContainer />      
        <main className={ location.pathname.includes('/auth') ? "" : "content"}>
        <Header />
        <MainRoutes/>
        {location.pathname.includes('/auth') ?   "":  <Footer/>}
        
        
        </main>
    </div>
  
  );
};

export default App;
