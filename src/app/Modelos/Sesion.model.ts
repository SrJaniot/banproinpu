import { Modulo } from "./ModuloSesion.model"
import { Parametros } from "./ParametrosSesion.model"
// pagina que utulize para crear los modelos rapidamente https://transform.tools/json-to-typescript

export class SesionModel {
  id?: string
  nombre?: string
  apellidos?: string
  celular?: string
  email?: string
  cedula?: string
  estados_personas_id?: string
  token?: string
  esquema_db?: string
  modulos?: Modulo[]
  parametros?: Parametros
  detalles_entidad?: string
}
