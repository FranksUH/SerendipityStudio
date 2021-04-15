import {Route} from 'react-router-dom';
import React from 'react';
import APP_ROUTES from './routes';
import { OfferedServices } from './Pages/offeredServices/OfferedServices';
import BookingForm from './Pages/bookingPage/BookingForm';
import { MainMenu } from './Pages/mainMenu/MainMenu';

const configRoutes = () => (
    <>
        <Route path={APP_ROUTES.servicesGrid} component={OfferedServices}/>
        <Route path={APP_ROUTES.book} component={BookingForm}/>    
        <Route exact path={APP_ROUTES.homePage}  component={MainMenu} />
    </>    
)
export default configRoutes;