import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import ServiceHistory from "./service/ServiceHistory";
import TechnicianForm from "./service/TechnicianForm";
import CustomerForm from "./sales/CustomerForm";
import ModelList from "./inventory/ModelList";
import ModelForm from "./inventory/ModelForm";
import ManufacturerForm from "./inventory/ManufacturerForm";
import ManufacturerList from "./inventory/ManufacturerList";
import AutomobileForm from "./inventory/AutomobileForm";
import AutomobileList from "./inventory/AutomobileList";
import SalesForm from "./sales/SalesForm";
import SalesList from "./sales/SalesList";
import SalesPersonForm from "./sales/SalesPersonForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturer">
            <Route index element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="/models">
            <Route index element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="/automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="/automobiles/new" element={<AutomobileForm />} />
          </Route>
          <Route path="/sales">
            <Route index element={<SalesList />} />
            <Route path="/sales/new" element={<SalesForm />} />
          </Route>
          <Route path="/customers/new" element={<CustomerForm />} />
          <Route path="/sales_persons/new" element={<SalesPersonForm />} />
          <Route path="/services" />
          <Route index element={<AppointmentList />} />
          <Route path="/new" element={<AppointmentForm />} />
          <Route path="/history" element={<ServiceHistory />}>
            <Route path="/history/technician/new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
