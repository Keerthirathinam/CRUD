import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import axios from 'axios';


export default function Edituser(){

    const {id} = useParams();
    const [username,setUSername] = useState('');
    const [password,setPassword] = useState('');

    useEffect(()=>{
        fetch('http://localhost:3004/Getparuser/'+id)
        .then((response)=>response.json())
        .then(function(response){
            setUSername(response[0].username);
            setPassword(response[0].password);
        })
        .catch(function(error){
            alert(error);
        })
    },[])



    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers : {"enctype":"multipart/form-data"}};

        axios.put('http://localhost:3004/Updateuser/'+id+'',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Query error');
                window.location.href="/";
            }
            else if(response.data.status === 'updated'){
                alert('Updated');
                window.location.href="/";
            }
            else{
                alert('Contact admin');
                window.location.href="/";
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
                                    <td colspan="2">Edit user</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td>
                                    <input type="text" name="username" id="username" placeholder='Username' 
                                    className="form-control" value={username} onChange={(e)=>setUSername(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" name="password" id="password" placeholder="Password"
                                        className="form-control" value={password}onChange={(e)=>setPassword(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        
                                        <button type="submit" name="data_submit" id="data_submit" value="submit"
                                         className="btn btn-success">
                                            Update user
                                         </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </form>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
        </div>
        </>
    )
}