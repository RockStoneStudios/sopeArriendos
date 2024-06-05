import nodemailer from 'nodemailer';
import {getPublicFilePath} from './pathConfig.js';

export async function sendEmail(userEmail){

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user : process.env.AUTH_EMAIL,
            pass : process.env.AUTH_PASSWORD
        }
    });
    
    
 

    const mailOptions = {
        from : process.env.AUTH_EMAIL,
        to : userEmail,
        subject : "Bienvenido AlquilaFacil.com",
        html : `
        <h1 style="color: blue;">Te damos la Bienvenida</h1>
        <h2>AlquilaFacil.com</h2>
        <p>Nos complace que nos visites. En AlquilaFacil.com, nos dedicamos a facilitarte la búsqueda de tu nuevo hogar. Ya sea que estés interesado en alquilar o comprar una casa, apartamento o lote, estamos aquí para ayudarte. Nuestro enfoque principal es el hermoso municipio de Sopetrán, pero también abarcamos toda la región del occidente medio antioqueño.

        Imagina despertar cada día en el lugar de tus sueños, rodeado de la belleza y tranquilidad que esta maravillosa zona tiene para ofrecer. En AlquilaFacil.com, nos esforzamos por ofrecerte las mejores opciones inmobiliarias, con un proceso sencillo y transparente para que tu experiencia sea lo más placentera posible.
        
        Déjanos ser parte de tu viaje hacia encontrar el hogar perfecto. Explora nuestras ofertas, descubre tu próximo hogar y siente la emoción de un nuevo comienzo con AlquilaFacil.com. Estamos aquí para ti en cada paso del camino.</p>
        
         <h3>Lee nuestras Politicas de Arrendamiento</h3>
        `,
        
        attachments: [{
            filename: 'Bienvenida.pdf',
            path: getPublicFilePath('Bienvenida.pdf'),
            contentType: 'application/pdf'
        }]
    }
    try{
        await transporter.sendMail(mailOptions);
        console.log('Verificacion de Email enviada');
     }catch(error){
        console.log("Email no fue enviado",error);
     }
}



