import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Adduser(){

    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:3004/Getuser')
        .then((response)=>response.json())
        .then((json)=>setUserdetails(json));

    },[]);

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers : {"enctype":"multipart/form-data"}};

        // datastring.forEach(function(value,index){
        //     console.log(index+'-'+value);
        // })

        axios.post('http://localhost:3004/Adduser',datastring,config)
             .then(function(response){
                if(response.data.status === 'Created'){
                    alert('Inserted');
                    window.location.reload();
                }
                else if(response.data.status === 'error'){
                    alert('Query error');
                    window.location.reload();
                }
                else{
                    alert('contact admin');
                    window.location.reload();
                }
             })
             .catch(function(error){
                alert(error);
             })

    }

    const deletedata = (id) => {
        
        axios.delete('http://localhost:3004/Deleteuser/'+id)
        .then(function(response){
            if(response.data.status === 'Deleted'){
                alert('Deleted');
                window.location.reload();
            }
            else if(response.data.status === 'error'){
                alert('Query error');
                window.location.reload();
            }
            else{
                alert('contact admin');
                window.location.reload();
            }
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })

    }

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <form onSubmit={handlesubmit}>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td colspan="2">Add user</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td><input type="text" name="username" id="username" placeholder='Username' 
                                    className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" name="password" id="password" placeholder="Password"
                                        className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        
                                        <button type="submit" name="data_submit" id="data_submit" value="submit"
                                         className="btn btn-success">
                                            Add user
                                         </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </form>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userdetails.map((value,index)=>(
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.username}</td>
                                            <td>{value.password}</td>
                                            <td>
                                            <Link to={'/Edituser/'+value.id}>
                                            <button type="button" name="data_send" id="data_send" value="send"
                                            className="btn btn-success">
                                                Edit user
                                            </button>   
                                            </Link>
                                                <button type="button" onClick={()=>deletedata(value.id)} className="btn btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
        </div>
        </>
    )
}