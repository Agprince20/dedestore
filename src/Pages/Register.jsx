import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBFile,
  MDBBadge 
}
from 'mdb-react-ui-kit';
import avatar from "../Assets/avatar.jpg";
import Header from '../component/Header';

export default function Register() {
    // Capturing the User DP Upload
    const [file, setFile] = useState(avatar);
    const [fileErr, setFileErr] = useState("");

    // Function to handle imageUpload
    const handleFileUpload = (e) => {
        let image = e.target.files[0];
        if(image.type === "image/jpeg" || image.type === "image/jpg" || image.type === "image/png") {
            if(image.size >= 3*1024*1024) {
                setFileErr("Image size is too large");
            } else {
                setFile(URL.createObjectURL(image));
                setFileErr("");
            }
        } else {
            setFileErr("File type is not supported");
        }
    }

    // Capturing Form Data
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone,setphone] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [Username,setusername] = useState("")
    const [Userrole,setuserrole] = useState("")
    // console.log(firstname);

  return (
    <>
        <Header/>
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='7' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <div className="d-flex flex-row align-items-center mb-4 gap-2">
                                <MDBIcon fas icon="user me-3" size='lg'/>
                                <MDBInput label='Firstname' id='form1' type='text' className='w-100' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
                                <MDBInput label='Lastname' id='form1' type='text' className='w-100' value={lastname} onChange={(e)=> setLastname(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4 gap-2 wrap">
                                <MDBIcon fas icon="envelope me-3" size='lg'/>
                                <MDBInput label=' Email Address' id='form2' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <MDBInput label=' Phone Number' id='form2' type='tel' value={phone} onChange={(e) => setphone(e.target.value)}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
<MDBInput label='Repeat your password' id='form4' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4 gap-3">
                                <MDBIcon fas icon="user me-3" size='lg'/>
                                <MDBInput label='Username' id='form1' type='text' className='w-100' value={Username} onChange={(e) => setusername(e.target.value)}/>
                                <select class="form-select" aria-label="Default select example" value={Userrole} onChange={(e) => setuserrole(e.target.value)}>
                                    <option selected>Select Your Role</option>
                                    <option value="user">User</option>
                                    <option value="vendor">Vender</option>
                                </select>
                            </div>

                        <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

                        </MDBCol>
                            <MDBCol md='10' lg='4' className='order-1 order-lg-2 d-flex flex-column'>
                                <MDBBadge className='mx-2' color='danger' light>
                                    {fileErr}
                                </MDBBadge>
                                <MDBCardImage src={file} className='rounded' fluid/>
                                <MDBFile label='Upload Profile Picture' id='customFile' onChange={handleFileUpload} />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    </>
  );
}