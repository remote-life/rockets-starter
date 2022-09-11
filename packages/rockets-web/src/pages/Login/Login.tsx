import { HeaderCadastro } from "../../components/HeaderCadastro/headerCadastro";
import { MenuLateral } from "../../components/MenuLateral/menuLateral";
import vetorGit from '../../assets/imgs/Vectorgithub.svg';
import vetorGoogle from '../../assets/imgs/Vectorgoogle.svg';
import vetorLinkedin from '../../assets/imgs/Vectorlinkedin.svg';

import './login.css';

export const Login = () => {
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

                    <form className="formularioInfos">

                        <label htmlFor="">Email</label>
                        <input className="inputGeneral" placeholder="Email" type="email"/>

                        <label htmlFor="">Senha</label>
                        <input className="inputGeneral" placeholder="Senha" type="password"/>

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