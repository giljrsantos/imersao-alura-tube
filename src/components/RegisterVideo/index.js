import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(proposDoForm){
    const [valeus, setValues] = React.useState(proposDoForm.initialValues);
    return {
        valeus,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...valeus,
                [name]: value,
            });
        },
        clearForm: () => {
            setValues({});
        }
    };
}

export default function RegisterVideo(){
    const formCadastro = useForm({
        initialValues: {titulo: "Frost punk", url: "https://youtube..."}
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>

                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.valeus.titulo} 
                                onChange={formCadastro.handleChange} 
                            />
                            <input 
                                placeholder="URL"
                                name="url"
                                value={formCadastro.valeus.url} 
                                onChange={formCadastro.handleChange} 
                            />
                            <button type="submit">
                                Cadastrar
                            </button>

                        </div>
                    </form>
                ): false}
            {/* {formVisivel && (
                <form>
                    <div>

                        <button className="close-modal">
                            X
                        </button>
                        <input placeholder="Titulo do vídio" />
                        <input placeholder="URL" />
                        <button type="submit">
                            Cadastrar
                        </button>

                    </div>
                </form>                
            )} */}
        </StyledRegisterVideo>
    )
}