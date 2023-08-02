import React, { useEffect, useState } from "react";

function SalesPersonList() {
  const [salesPerson, setSalesPerson] = useState([]);

  const getSalesPerson = async () => {
    const salesPersonUrl = "http://localhost:8090/api/salespeople/";
    try {
      const salesPersonResponse = await fetch(salesPersonUrl);

      if (salesPersonResponse.ok) {
        const salesPersonData = await salesPersonResponse.json();
        setSalesPerson(salesPersonData.salesPerson);
      } else {
        return <div>Cannot get SalesPerson</div>;
      }
    } catch (error) {
      return <div> Cannot get SalesPerson</div>;
    }
  };
  const deleteSalesPerson = async (id) => {
    const deleteUrl = `http://localhost:8090/api/salespeople/${id}`;
    const deleteResponse = await fetch(deleteUrl, {
      method: "DELETE",
    });
    if (deleteResponse.ok) {
      getSalesPerson();
    }
  };
  useEffect(() => {
    getSalesPerson();
    deleteSalesPerson();
  }, []);

    return (
        <div className="container">
           <h1>Sales Person Records</h1>
              <div className="mb-3">
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Employee ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesPerson((customer) => {
                        }).map(salesPerson => {
                            return (
                                <tr key={salesPerson.id}>
                                    <td>{salesPerson.first_name}</td>
                                    <td>{salesPerson.last_name}</td>
                                    <td>{salesPerson.employee_id}</td>
                                    <td><button onClick={() => deleteSalesPerson(salesPerson.id)} type="button" className="btn btn-danger">Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
    );
}
export default SalesPersonList;
