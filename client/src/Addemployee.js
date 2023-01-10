import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from 'axios';

export function Addemployee(){

    
    const handlesubmit = (e) => {
        e.preventDefault();
        var datastring = new FormData(e.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        /*datastring.forEach(function(v,i){
            console.log(i+'-'+v);
        })*/
        
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var emailid = document.getElementById('emailid').value;
        var phoneno = document.getElementById('phoneno').value;
        var password = document.getElementById('password').value;
        var text_test = /^[A-Za-z]{3}$/;

        if(firstname === '' || firstname === null){
            alert('enter firstname');
            document.getElementById('firstname').focus();
        }
        else if(!text_test.test(firstname)){
            alert('enter firstname not in format');
            document.getElementById('firstname').value = '';
            document.getElementById('firstname').focus();
        }
        else{
            axios.post('http://localhost:3004/AddEmployee',datastring,config)
            .then(function(response){
                if(response.data.status === 'Created'){
                    alert('Inserted');
                    window.location.href="/";
                }
                else if(response.data.status === 'error'){
                    alert('Contact Admin');
                    window.location.reload();
                }
                else{
                    alert('Contact Admin');
                    window.location.href="/";
                }
            })
            .catch(function(error){
                alert(error);
                window.location.reload();
            })
        }
        
    }
    

    /*
    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'enctype': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/Addemployee',datastring,config)
        .then(function(res){
            if(res.data.status ==='Created'){
                alert('Created');
                window.location.reload();
            }
            else{
                alert('Error');
                window.location.reload();
            }
        })
        .catch(function(err){
            alert(err);
            window.location.reload();
        });
        
    }
    */

    return(
    <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-12 text-center">
                    <p>Add Employee</p>
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
                <form onSubmit={handlesubmit}>
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