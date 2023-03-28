/* Crie um novo componente chamado Login. Utilize React Router para especificar uma nova rota que renderize este novo componente. Para este componente crie dois campos de formulário para o e-mail e senha, e um botão de submit. Crie também um botão para possibilitar a autenticação via Google. Utilize React Bootstrap para estruturar está página. A estilização fica a seu critério, seja criativo.
Inspire-se: https://cssauthor.com/best-free-bootstrap-login-forms */


import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 import "./Login.css";

export function Login() {

    // ---------- autenticacao login - INICIO ------------------------
    let navigate = useNavigate();

    function autenticar() {
        //capturar as informacoes do form
        //validar os dados de entrada
        //modificar as informacoes no banco de dados
        navigate("/");
    }



    return (

        <div className="login">
    
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={autenticar} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>  
    );
}



// import React from 'react';
// import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

// export function Login() {

//   return (
//     <MDBContainer fluid className="p-3 my-5 h-custom">

//       <MDBRow>

//         <MDBCol col='10' md='6'>
//           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
//         </MDBCol>

//         <MDBCol col='4' md='6'>

//           <div className="d-flex flex-row align-items-center justify-content-center">

//             <p className="lead fw-normal mb-0 me-3">Sign in with</p>

//             <MDBBtn floating size='md' tag='a' className='me-2'>
//               <MDBIcon fab icon='facebook-f' />
//             </MDBBtn>

//             <MDBBtn floating size='md' tag='a'  className='me-2'>
//               <MDBIcon fab icon='twitter' />
//             </MDBBtn>

//             <MDBBtn floating size='md' tag='a'  className='me-2'>
//               <MDBIcon fab icon='linkedin-in' />
//             </MDBBtn>

//           </div>

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">Or</p>
//           </div>

//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//           <div className="d-flex justify-content-between mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <div className='text-center text-md-start mt-4 pt-2'>
//             <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
//             <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
//           </div>

//         </MDBCol>

//       </MDBRow>

//       <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

//         <div className="text-white mb-3 mb-md-0">
//           Copyright © 2020. All rights reserved.
//         </div>

//         <div>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
//             <MDBIcon fab icon='facebook-f' size="md"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
//             <MDBIcon fab icon='twitter' size="md"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
//             <MDBIcon fab icon='google' size="md"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
//             <MDBIcon fab icon='linkedin-in' size="md"/>
//           </MDBBtn>

//         </div>

//       </div>

//     </MDBContainer>
//   );
// }
