import { RoleEnum } from '../enums/RoleEnum';

export function mapRoleEnum(role: string | undefined | null): RoleEnum {

  switch (role) {
    case 'ADMIN':
      return RoleEnum.ADMIN;
    case 'GERENTE':
      return RoleEnum.GERENTE;
    case 'CLIENTE':
      return RoleEnum.CLIENTE;
    default:
      throw new Error('Role inválido');
    }
}

