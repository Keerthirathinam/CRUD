import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
export function CrudApp(){
    return(
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-3 text-center">
                    <p>Crud Application</p>
                </div>
                <div className="col-lg-6 text-center">
                    <p>Student Details</p>
                </div>
                <div className="col-lg-3 text-center">
                    <Link to="/addemployee">
                    <button type="button" name="data_next" id="data_next" className="btn btn-primary">
                        Add Student
                    </button>
                    </Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email ID</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>          
        </>
    );
}