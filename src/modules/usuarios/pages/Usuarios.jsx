import { useEffect, useState } from "react"
import { UsuarioList } from "../../../services/UsuariosServices"

export const Usuarios = () => {
    const [lsusuarios, setlsusuarios] = useState(null)

    useEffect(() => {
        UsuarioList(100).then((data)=> setlsusuarios(data));
    }, [])
    
    //console.log(lsusuarios)
    const RemoverUsuario=(uuid, name, id)=>{
        console.log(uuid + '-' + name + '-' + id);
        const usf = lsusuarios.results.filter((us) => us.login.uuid != uuid)
        setlsusuarios({...lsusuarios, results:usf})
    }

    

  return (
    
    <table className="table table-striped">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Genero</th>
            <th scope="col">Dirección</th>
            <th scope="col">Telefono</th>
            <th scope="col">Foto</th>
        </tr>
        </thead>
        <tbody>
        {
            (lsusuarios) ?
                lsusuarios.results.map((us)=> {
                    const key = (us.id.name? us.id.name:'') + us.id.value
                    
                    return(
                        <tr key={us.login.uuid}>
                        <td>{us.id.value}</td>
                        <td>{us.name.title + ' ' + us.name.first + ' ' + us.name.last }</td>
                        <td>{us.gender}</td>
                        <td>{us.location.city + ', ' + us.location.city}</td>
                        <td>{us.phone}</td>
                        <td><img src={us.picture.thumbnail} alt={us.picture.thumbnail} className="img-thumbnail" /></td>
                        <td> 
                            <button className="btn btn-danger" onClick={ ()=> RemoverUsuario(us.login.uuid, us.id.name, us.id.value)} >
                                Remover
                            </button>
                        </td>
                    </tr>
                    
                )})
            : null
        }
        </tbody>
        
    </table>
  )
}
