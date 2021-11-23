// Tipos basicos de TS

import { ObjetosLiterales } from "./ObjetosLiterales";

export const TiposBasicos = () => {

    const nombre : string = 'Victor';
    const edad : number = 35;
    const estaActivo : boolean = true;
    
    const poderes : string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        <>
          <h3>Tipos Basicos</h3>  
          { nombre }, { edad }
          <br />
          {/* { poderes.join(',') } */}
          <ObjetosLiterales></ObjetosLiterales>
        </>
    )
}
