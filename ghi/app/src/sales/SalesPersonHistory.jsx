import React, { useEffect, useState } from "react";

function SalesPersonHistory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [sales, setSales] = useState([]);

  const handleSearchChange = (event) => setSearch(event.target.value);

    const handleSearch = () => {
        setFilter(sales.filter(sale => !search || sale.salesperson.first_name.includes(search)));
    }

  const fetchsalesPersonData = async (id) => {
    const salespersonUrl = `http://localhost:8090/api/salespeople${id}/`;
    try {
      const response = await fetch(salespersonUrl);
      if (response.ok) {
        const data = await response.json();
        return data.salesperson;
      } else {
        return alert("Cannot get sales person data");
      }
    } catch (error) {
      return alert("Cannot get sales person data");
    }
  };

  const fetchData = async () => {
    const salesurl = "http://localhost:8090/api/sales/";
    try {
      const salesresponse = await fetch(salesurl);
      if (salesresponse.ok) {
        const data = await salesresponse.json();
        setSales(data.sales);
        setFilter(data.sales);
      } else {
        return alert("Cannot get sales data");
      }
    } catch (error) {
      return alert("Cannot get sales data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSalespersonDataForSales = async () => {
      const updatedSales = await Promise.all(
        sales.map(async (sale) => {
          if (sale.salesperson_id) {
            const salesperson = await fetchsalesPersonData(sale.salesperson_id);
            return { ...sale, salesperson };
          }
          return sale;
        })
      );
      setSales(updatedSales);
    };

    if (sales.length > 0) {
      fetchSalespersonDataForSales();
    }
  }, [sales]);

  return (
    <div className="container">
      <h1>Sales Records</h1>
      <div className="mb-3">
        <input
          onChange={(event) => {
            handleSearchChange(event);
            handleSearch();
          }}
          required
          type="search"
          id="sales-search-input"
          placeholder="Search by First Name"
          className="form-select"
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name}
                  {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name}
                  {sale.customer.last_name}
                </td>
                <td>{sale.vin}</td>
                <td>{sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SalesPersonHistory;
