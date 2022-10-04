import React from 'react';
import Main from '../Componentes/Main';
import imagenSignup from '../imagenes/signup.png'


export default function Signup(){

    return (
    
<Main>
 <div className='Signup'>
    <img src={imagenSignup} alt='' className='Signup__img'/>
 </div>
</Main>

);
}