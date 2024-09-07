export type User = {
  id: string;
  name: string;
  email: string;
  rol: 'cuidador' | 'maestro';
  password: string;
  descripcion: string; 
};

export type Criatura = {
  id: string;
  nombre: string;
  tipo: 'Dragón' | 'Fénix' | 'Golem' | 'Grifo' | 'Vampiro';
  nivel: number;
  entrenado: boolean;
};