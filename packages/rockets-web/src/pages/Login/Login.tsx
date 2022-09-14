import { HeaderCadastro } from "../../components/HeaderCadastro/headerCadastro";
import { MenuLateral } from "../../components/MenuLateral/menuLateral";
import vetorGit from '../../assets/imgs/Vectorgithub.svg';
import vetorGoogle from '../../assets/imgs/Vectorgoogle.svg';
import vetorLinkedin from '../../assets/imgs/Vectorlinkedin.svg';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import './login.css';


const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Campo obrigatório!").matches(emailRegExp, 'email is not valid'),
    password: yup.string().min(8).max(15).required("Campo obrigatório!"),
});


export const Login = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        
    }


    return (
        <div className='containerLogin'>
            <HeaderCadastro />
            <div className="contentLogin">
                <MenuLateral />
                <div className="formCenter">
                    <div className="facaSeuCadastro">

                        <h1 className='cadastroTitle'>Faça seu login</h1>
                        <div className="redesSociais">
                            <div className="blocoRedes">
                                <img src={vetorGit} alt="Git" />
                                <small className='smallRedes'>Github</small>
                            </div>
                            <div className="blocoRedes">
                                <img src={vetorGoogle} alt="Google" />
                                <small className='smallRedes'>Google</small>
                            </div>
                            <div className="blocoRedes">
                                <img src={vetorLinkedin} alt="LinkedIn" />
                                <small className='smallRedes'>LinkedIn</small>
                            </div>
                        </div>

                    </div>

                    <div className="separar">

                        <div className='line'></div>
                        <small className='smallOu'>ou</small>
                        <div className='line'></div>

                    </div>

                    <form className="formularioInfos" onSubmit={handleSubmit(submitForm)}>

                        <label htmlFor="">Email</label>
                        <input className="inputGeneral" {...register("email")} placeholder="Email" type="email"/>
                            <p>{errors.email?.message}</p>

                        <label htmlFor="">Senha</label>
                        <input className="inputGeneral" {...register("password")} placeholder="Senha" type="password"/>
                        <p>{errors.password?.message}</p>

                        <button type="submit" className='btnContinuar'>Continuar</button>
                        <div className='centerSmall'>
                            <small>Não possui conta? <span>Faça seu cadastro</span></small>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};