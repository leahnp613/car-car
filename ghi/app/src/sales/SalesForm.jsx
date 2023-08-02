import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SalesForm() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const [automobile, setAutomobile] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [customer, setCustomer] = useState("");
  const [price, setPrice] = useState("");

    const[automobiles, setAutomobiles] = useState([]);
    const[salesPersons, setSalesPersons] = useState([]);
    const[customers, setCustomers] = useState([]);

    const handleAutomobileChange = (event) => setAutomobile(event.target.value);
    const handleSalesPersonChange = (event) => setSalesPerson(event.target.value);
    const handleCustomerChange = (event) => setCustomer(event.target.value);
    const handlePriceChange = (event) => setPrice(event.target.value);

  const getAll = async () => {
    const automobileUrl = "http://localhost:8090/api/automobiles/";
    const automobilesResponse = await fetch(automobileUrl);


        if (automobilesResponse.ok){
            const autoData = await automobilesResponse.json();
            setAutomobiles(autoData.automobiles)
        }
        const salesPersonsUrl = 'http://localhost:8090/api/salespeople/';

    const SalesPersonsResponse = await fetch(salesPersonsUrl);

        if (SalesPersonsResponse.ok) {
            const salesPersonData = await SalesPersonsResponse.json();
            setSalesPersons(salesPersonData.sales_persons);

        }
        const customersUrl = 'http://localhost:8090/api/customers/';

    const customersResponse = await fetch(customersUrl);

        if (customersResponse.ok) {
            const customerData = await customersResponse.json();
            setCustomers(customerData.customers)
        }
        if (true) {
            setLoad(!load);
        }
    };
    useEffect(() => {
        getAll();
    },[load]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.automobile = automobile;
    data.sales_person = salesPerson;
    data.customer = customer;
    data.price = price;

    const salesUrl = "http://localhost:8090/api/sales/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {
      const newSales = await response.json();

        setAutomobile('');
        setSalesPerson('');
        setCustomer('');
        setPrice('');

      navigate("/sales/");
    }


    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-sales-form">
              <div className="mb-3">
                <select
                  onChange={handleAutomobileChange}
                  required
                  type="text"
                  name="automobile"
                  id="automobile"
                  value={automobile}
                  className="form-control"
                >
                  <option value="">Choose an automobile</option>
                  {automobiles.map((automobiles) => {
                    return (
                      <option key={automobile.vin} value={automobile.vin}>
                        {automobile.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleSalesPersonChange}
                  required
                  type="text"
                  name="sales_person"
                  id="sales_person"
                  value={salesPerson}
                  className="form-control"
                >
                  <option value="">Choose a sales person</option>
                  {salesPersons.map((salesPersons) => {
                    return (
                      <option key={salesPerson.id} value={salesPerson.id}>
                        {salesPerson.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleCustomerChange}
                  required
                  type="text"
                  name="customer"
                  id="customer"
                  value={customer}
                  className="form-control"
                >
                  <option value="">Choose a customer</option>
                  {customers.map((customers) => {
                    return (
                      <option key={customer.id} value={customer.id}>
                        {customer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="Sales Price"
                  required
                  type="text"
                  name="price"
                  id="price"
                  className="form-control"
                  pattern="^\d{1,3}(?:,\d{3})*\.\d{2}$"
                />
                <label htmlFor="price">Sales Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
}
export default SalesForm;
