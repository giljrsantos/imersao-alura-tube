import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

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

const PROJECT_URL = `https://cixzwgvfvyeygomeevrd.supabase.co`;
const PUBLIC_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeHp3Z3ZmdnlleWdvbWVldnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTU3MjMsImV4cCI6MTk4Mzc5MTcyM30.z7zvhyc3r0e3HCfQer-4dzkcCZHxJBbd-gQnhOT6bOI`;
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

console.log("🚀 ~ file: index.js ~ line 27 ~ supabase",)

export default function RegisterVideo(){
    const formCadastro = useForm({
        initialValues: {titulo: "Netdecking Estraga o Magic?", url: "https://www.youtube.com/watch?v=dXihyhYEsEc"}
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        // contrato entre o nosso Front e o BackEnd
                        supabase.from("video").insert({
                            title: formCadastro.valeus.titulo,
                            url: formCadastro.valeus.url,
                            thumb: "https://img.youtube.com/vi/dXihyhYEsEc/hqdefault.jpg",
                            playlist: "jogos",
                        })
                        .then((oqueveio) => {
                            console.log(oqueveio)
                        })
                        .catch((err) => {
                            console.log(err)
                        })

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