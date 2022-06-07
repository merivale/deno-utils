import { type Either } from "./either.ts"

export const safely = async <T>(cb: () => Promise<T>): Promise<Either<Error, T>> => {
  try {
    return ["right", await cb()]
  } catch (error) {
    return ["left", error]
  }
}
