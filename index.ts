// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  private nombre: string;
  private edad: number;
  private DNI: number;
  private sexo: string;
  constructor(n: string, e: number, dni: number, sx: string) {
    this.nombre = n;
    this.edad = e;
    this.DNI = dni;
    this.sexo = sx;
  }
  private get VerNombre(): string {
    return this.nombre;
  }
  private get VerEdad(): number {
    return this.edad;
  }
  private get VerDNI(): number {
    return this.DNI;
  }
  private get VerSexo(): string {
    return this.sexo;
  }
  private AñoNacimiento(AñoAct: number): number {
    return AñoAct - this.edad;
  }
}
