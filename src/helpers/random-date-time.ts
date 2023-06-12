//* Generar una fecha aleatoria dentro del rango
export function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
