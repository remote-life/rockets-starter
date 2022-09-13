import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import './formularioContinue.css';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/




const schema = yup.object().shape({
  cel: yup.string().required("Campo obrigatório!").matches(phoneRegExp, 'Phone number is not valid'),
  dataNasc: yup.date().required("Campo obrigatório!").typeError("invalid format")
})


export const FormularioContinue = ({formData, setFormData, pageForm, setFormPage}) => {
    
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    if(data){
        setFormPage((currPage) => currPage + 1);
        console.log(pageForm);
        console.log(formData);
    }
  }
//flexwrap
    return (


      <div className="formularioContainer">

        <form id='usrform' className="formularioInfosWrap" onSubmit={handleSubmit(submitForm)}> 
            <div className="formsCenter">
                <label htmlFor="" className='labelFormContinue'>Data de Nascimento</label>
                <input className="dataNasc" {...register("dataNasc")} type="data" placeholder='xx/mm/yy' value={formData.dataNasc} onChange={(event) => setFormData({...formData, dataNasc: event.target.value})}/>
                <p>{errors.dataNasc?.message}</p>
            </div>

            <div className="formsCenter">
                <label htmlFor="" className='labelFormContinue'>Número de telefone</label>
                <input className="cel" {...register("cel")} type="tel" placeholder='55 83 98888-8888' value={formData.cel} onChange={(event) => setFormData({...formData, cel: event.target.value})}/>
                <p>{errors.cel?.message}</p>
            </div>

            <label htmlFor="" className='labelFormContinue'>Em que você atua?</label>
            <input className="inputGeneralContinue" type="text" placeholder='o que você é?' />

            <label htmlFor="" className='labelFormContinue'>Quais tecnologias você domina?</label>
            <input className="inputGeneralContinue" type="text" placeholder='Tecnologias'/>

            <label htmlFor="" className='labelFormContinue'>Conte sobre você</label>
            <textarea className="textArea" form='usrform'></textarea>

            <div className="anexarCurriculo">
              <small>Anexe seu currículo</small>
              <button className='btnCurriculo'>Adicionar currículo</button>
            </div>

            <div className="centerBtnContinue">
              <button type="submit" className='btnRegistrar'>Registrar</button>
            </div>
            
        </form>

      </div>
    );
  };