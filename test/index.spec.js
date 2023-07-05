import { crearUsuarioConCorreoYContraseña } from '../src/lib/index';

describe('crearUsuarioConCorreoYContraseña', () => {
  it('Debería ser una función', () => {
    expect(typeof crearUsuarioConCorreoYContraseña).toBe('function');
  });
});
