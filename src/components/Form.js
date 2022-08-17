import React, {useState} from 'react';

const Form = ({newLocation}) => {
    const [city, setcity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        setcity('');
        if(city === '') {
            alert('Please enter a city');
        }
        else {
            newLocation(city);
        }
    }

    return (
        <div className="container">
            <form onSubmit = {onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" value={city} onChange={(e) => setcity(e.target.value)} />
                    <button className="btn btn-primary input-group-text" type='submit'>Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;

