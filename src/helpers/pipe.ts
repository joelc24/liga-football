export type Operator<T, U> = (input: T) => U | Promise<U>;

export async function pipe<T>(input: T): Promise<T>;
export async function pipe<T, A>(input: T, op1: Operator<T, A>): Promise<A>;
export async function pipe<T, A, B>(
  input: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>
): Promise<B>;
export async function pipe<T, A, B, C>(
  input: T,
  op1: Operator<T, A>,
  op2: Operator<A, B>,
  op3: Operator<B, C>
): Promise<C>;
// ... more overloads for more arguments
export async function pipe(
  input: any,
  ...operators: Array<Operator<any, any>>
): Promise<any> {
  return operators.reduce(async (output, f) => f(await output), input);
}
