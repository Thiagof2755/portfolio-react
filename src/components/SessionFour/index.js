import React, { useState } from "react";
import styles from "./SessionFour.module.css";
import emailjs from 'emailjs-com';

function SessionFour() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send("service_skm2ojm", "template_1am1r7b", templateParams, "LrOyaofOWY4qDHuvX")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                setShowPopup(true);

                // Esconder o pop-up após 2 segundos (2000 milissegundos)
                setTimeout(() => {
                    setShowPopup(false);
                }, 2000);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contato</h1>

            {showPopup && (
                <div className={styles.popup}>
                    Enviado com sucesso!
                </div>
            )}


            <form className={styles.form} onSubmit={sendEmail} method="post">
                <input
                    name="name"
                    className={styles.input}
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    name="email"
                    className={styles.input}
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    name="message"
                    className={styles.textarea}
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className={styles.button} type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default SessionFour;
