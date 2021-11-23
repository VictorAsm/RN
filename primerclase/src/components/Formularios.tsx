
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const { state, email, password, onChange} = useForm({
        email: 'raphiel@test.com',
        password: '123'
    });
    
    return (
        <>
        <h3>Formularios</h3>   
        <input 
            type="text" 
            className="form-control mt-2 mb-2" 
            placeholder="Email"
            value = {email}
            onChange = {({target}) => onChange( target.value ,'email')}
        />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Password"
            value = {password}
            onChange = {({target}) => onChange( target.value ,'password')}
            />

        <code>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </code>
        </>
    )
}
