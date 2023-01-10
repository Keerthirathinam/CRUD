import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from 'axios';


export function Addstudent(){
    return(
        <>
         <div className="container">
            <div className="row mt-3">
                <div className="col-lg-12 text-center">
                    <p>Add Student</p>
                    <Link to="/">
                        <button type="button" name="data_next" id="data_next" className="btn btn-danger">
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                <form>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td><label>First Name</label></td>
                                    <td><input type="text" name="firstname" id="firstname" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label>Last Name</label></td>
                                    <td><input type="text" name="lastname" id="lastname" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label>Email Id</label></td>
                                    <td><input type="email" name="emailid" id="emailid" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label>Phone Number</label></td>
                                    <td><input type="number" name="phoneno" id="phoneno" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label>Password</label></td>
                                    <td><input type="password" name="password" id="password" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        <button type="submit" id="data_submit" name="data_submit" value="submit"
                                        className="btn btn-primary">
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
        </>
    );
}