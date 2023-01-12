import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ContextProvider} from '../contexts/Context';
import {Home} from '../pages/Home';


export function Router() {
    return (
        <BrowserRouter>
            <ContextProvider>
                <Routes>
                    <Route path='/'
                        element={<Home/>}/> {
                        /* <Route path='*' element={<PageNotFound/>}/> */} 
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    );
}
