import { signImageApi } from '../helpers/AxiosConfig';

const UsuarioList = async (count) => {
    try{
        const { data } = await signImageApi.get("/api/?results=" + count);

        return data;
    }
    catch(error) {
        return {error};
    }
}

export { UsuarioList };