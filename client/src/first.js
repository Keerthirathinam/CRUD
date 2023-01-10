import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
export function CrudApp(){

    const [employeelist,setEmployeelist] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3004/Employeelist')
    .then((res)=>res.json())
    .then((json)=>setEmployeelist(json));

    },[]);

    return(
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-3 text-center">
                    <p>Crud Application</p>
                </div>
                <div className="col-lg-6 text-center">
                    <p>Employee Details</p>
                </div>
                <div className="col-lg-3 text-center">
                    <Link to="/addemployee">
                    <button type="button" name="data_next" id="data_next" className="btn btn-primary">
                        Add Employee
                    </button>
                    </Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email ID</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            employeelist.map((v,i)=>(
                                <tr>
                                    <td>{v.firstname}</td>
                                    <td>{v.lastname}</td>
                                    <td>{v.emailid}</td>
                                    <td>{v.phoneno}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>          
        </>
    );
}