import { type Either } from "./either.ts"

export type Maybe<T> = T | undefined

export const fromEither = <T, U>(either: Either<T, U>): Maybe<U> => either[0] === "right" ? either[1] : undefined
