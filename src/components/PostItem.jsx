import React from 'react';

const PostItem = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [check, setCheck] = React.useState(1)
    const [error, setError] = React.useState({
        name: null,
        email: null,
        phone: null,
        file: null,
        send: null,
    })

    const handleChange = (event) => {
        const elem = event.target
        elem.name === 'name' && setName(elem.value);
        elem.name === 'email' && setEmail(elem.value);
        elem.name === 'phone' && setPhone(elem.value);
    }

    const emailFormat = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    const phoneFormat = /^[\+]{0,1}380([0-9]{9})$/;
  

    const onBlur = (e) => {
        const { name, value } = e.target;

        //    validation NAME INPUT
        if (name === 'name') {
            if (value.length > 60 || value.length < 2) {
                setError(prev => ({ ...prev, name: 'Username should contain 2-60 characters' }));
                return;
            }
            setError(prev => ({ ...prev, name: null }));
            return;
        }
        // validation EMAIL INPUT

        if (name === 'email') {
            if (value.length > 100 || value.length < 2) {
                setError(prev => ({ ...prev, email: 'Min length: 2 - Max length: 100' }));
                return;
            }
            if (!emailFormat.exec(value)) {
                setError(prev => ({
                    ...prev,
                    email: 'Must be a valid email according to RFC2822',
                }));
                return;
            }
            setError(prev => ({ ...prev, email: null }));
            return;
        }
        if (name === 'phone') {
            if (!phoneFormat.exec(value)) {
                setError(prev => ({
                    ...prev,
                    phone: 'Number should start with code of Ukraine +380',
                }));
                return;
            }
    
            setError(prev => ({ ...prev, phone: null }));
            return;
        }
    }
   


return (
    <section className="post">
        <h1>Working with POST request</h1>
        <div className="mini-container">
            <div className="post-inner">
                <form action="">
                    <div className="input-item">
                        <div className="input-block">
                            <input
                                type="text"
                                name={'name'}
                                id="name"
                                placeholder=" "
                                value={name}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            <label htmlFor="name">Your name</label>
                        </div>
                        {error.name && <span className={error.name ? 'error-text' : ''}>{error.name}</span>}
                    </div>
                    <div className="input-item">
                        <div className="input-block">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder=" "
                                value={email}
                                onBlur={onBlur}
                                onChange={handleChange}

                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        {error.email && <span className={error.email ? 'error-text' : ''}>{error.email}</span>}
                    </div>
                    <div className="input-item">
                        <div className="input-block">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder=" "
                                value={phone}
                                onChange={handleChange}
                                onBlur={onBlur} />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        {error.phone ? <span className={error.name ? 'error-text' : ''}>{error.phone}</span> : <span>+38 (XXX) XXX - XX - XX</span>}
                        
                    </div>
                    <div className="radio-item">
                        <p>Select your position</p>
                        <div className="radio-block">
                            <input type="radio" name="radio-1" id="Frontend" />
                            <label htmlFor="Frontend">Frontend developer</label>
                        </div>
                        <div className="radio-block">
                            <input type="radio" name="radio-1" id="Backend" />
                            <label htmlFor="Backend">Backend developer</label>
                        </div>
                        <div className="radio-block">
                            <input type="radio" name="radio-1" id="Designer" />
                            <label htmlFor="Designer">Designer</label>
                        </div>
                        <div className="radio-block">
                            <input type="radio" name="radio-1" id="QA" />
                            <label htmlFor="QA">QA</label>
                        </div>
                    </div>
                    <div className="input-file">
                        <span>Upload</span>
                        <input type="file" name="photo" id="FileAttachment"
                            accept="image/png, image/jpeg" />
                        <textarea name="area" id="fileuploadurl" readOnly placeholder="Upload your photo"></textarea>
                    </div>
                    <button className="yellow-btn" disabled>Sign up</button>
                </form>
            </div>
        </div>
    </section>
);
}

export default PostItem;