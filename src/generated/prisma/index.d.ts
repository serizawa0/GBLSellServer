
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserCategorie
 * 
 */
export type UserCategorie = $Result.DefaultSelection<Prisma.$UserCategoriePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FactureElement
 * 
 */
export type FactureElement = $Result.DefaultSelection<Prisma.$FactureElementPayload>
/**
 * Model Facture
 * 
 */
export type Facture = $Result.DefaultSelection<Prisma.$FacturePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserCategories
 * const userCategories = await prisma.userCategorie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserCategories
   * const userCategories = await prisma.userCategorie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userCategorie`: Exposes CRUD operations for the **UserCategorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCategories
    * const userCategories = await prisma.userCategorie.findMany()
    * ```
    */
  get userCategorie(): Prisma.UserCategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factureElement`: Exposes CRUD operations for the **FactureElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FactureElements
    * const factureElements = await prisma.factureElement.findMany()
    * ```
    */
  get factureElement(): Prisma.FactureElementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facture`: Exposes CRUD operations for the **Facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factures
    * const factures = await prisma.facture.findMany()
    * ```
    */
  get facture(): Prisma.FactureDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserCategorie: 'UserCategorie',
    User: 'User',
    FactureElement: 'FactureElement',
    Facture: 'Facture'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userCategorie" | "user" | "factureElement" | "facture"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserCategorie: {
        payload: Prisma.$UserCategoriePayload<ExtArgs>
        fields: Prisma.UserCategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>
          }
          findFirst: {
            args: Prisma.UserCategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>
          }
          findMany: {
            args: Prisma.UserCategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>[]
          }
          create: {
            args: Prisma.UserCategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>
          }
          createMany: {
            args: Prisma.UserCategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>[]
          }
          delete: {
            args: Prisma.UserCategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>
          }
          update: {
            args: Prisma.UserCategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>
          }
          deleteMany: {
            args: Prisma.UserCategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>[]
          }
          upsert: {
            args: Prisma.UserCategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoriePayload>
          }
          aggregate: {
            args: Prisma.UserCategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCategorie>
          }
          groupBy: {
            args: Prisma.UserCategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCategorieCountArgs<ExtArgs>
            result: $Utils.Optional<UserCategorieCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FactureElement: {
        payload: Prisma.$FactureElementPayload<ExtArgs>
        fields: Prisma.FactureElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactureElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactureElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>
          }
          findFirst: {
            args: Prisma.FactureElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactureElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>
          }
          findMany: {
            args: Prisma.FactureElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>[]
          }
          create: {
            args: Prisma.FactureElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>
          }
          createMany: {
            args: Prisma.FactureElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactureElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>[]
          }
          delete: {
            args: Prisma.FactureElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>
          }
          update: {
            args: Prisma.FactureElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>
          }
          deleteMany: {
            args: Prisma.FactureElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactureElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactureElementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>[]
          }
          upsert: {
            args: Prisma.FactureElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureElementPayload>
          }
          aggregate: {
            args: Prisma.FactureElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactureElement>
          }
          groupBy: {
            args: Prisma.FactureElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactureElementCountArgs<ExtArgs>
            result: $Utils.Optional<FactureElementCountAggregateOutputType> | number
          }
        }
      }
      Facture: {
        payload: Prisma.$FacturePayload<ExtArgs>
        fields: Prisma.FactureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          findFirst: {
            args: Prisma.FactureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          findMany: {
            args: Prisma.FactureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          create: {
            args: Prisma.FactureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          createMany: {
            args: Prisma.FactureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          delete: {
            args: Prisma.FactureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          update: {
            args: Prisma.FactureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          deleteMany: {
            args: Prisma.FactureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          upsert: {
            args: Prisma.FactureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          aggregate: {
            args: Prisma.FactureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacture>
          }
          groupBy: {
            args: Prisma.FactureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactureCountArgs<ExtArgs>
            result: $Utils.Optional<FactureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userCategorie?: UserCategorieOmit
    user?: UserOmit
    factureElement?: FactureElementOmit
    facture?: FactureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCategorieCountOutputType
   */

  export type UserCategorieCountOutputType = {
    users: number
  }

  export type UserCategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserCategorieCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCategorieCountOutputType without action
   */
  export type UserCategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorieCountOutputType
     */
    select?: UserCategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCategorieCountOutputType without action
   */
  export type UserCategorieCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    factures: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factures?: boolean | UserCountOutputTypeCountFacturesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFacturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureWhereInput
  }


  /**
   * Count Type FactureCountOutputType
   */

  export type FactureCountOutputType = {
    elements: number
  }

  export type FactureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | FactureCountOutputTypeCountElementsArgs
  }

  // Custom InputTypes
  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureCountOutputType
     */
    select?: FactureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureElementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserCategorie
   */

  export type AggregateUserCategorie = {
    _count: UserCategorieCountAggregateOutputType | null
    _avg: UserCategorieAvgAggregateOutputType | null
    _sum: UserCategorieSumAggregateOutputType | null
    _min: UserCategorieMinAggregateOutputType | null
    _max: UserCategorieMaxAggregateOutputType | null
  }

  export type UserCategorieAvgAggregateOutputType = {
    idUserCat: number | null
    autorisation: number | null
  }

  export type UserCategorieSumAggregateOutputType = {
    idUserCat: number | null
    autorisation: number | null
  }

  export type UserCategorieMinAggregateOutputType = {
    idUserCat: number | null
    nomCat: string | null
    autorisation: number | null
  }

  export type UserCategorieMaxAggregateOutputType = {
    idUserCat: number | null
    nomCat: string | null
    autorisation: number | null
  }

  export type UserCategorieCountAggregateOutputType = {
    idUserCat: number
    nomCat: number
    autorisation: number
    _all: number
  }


  export type UserCategorieAvgAggregateInputType = {
    idUserCat?: true
    autorisation?: true
  }

  export type UserCategorieSumAggregateInputType = {
    idUserCat?: true
    autorisation?: true
  }

  export type UserCategorieMinAggregateInputType = {
    idUserCat?: true
    nomCat?: true
    autorisation?: true
  }

  export type UserCategorieMaxAggregateInputType = {
    idUserCat?: true
    nomCat?: true
    autorisation?: true
  }

  export type UserCategorieCountAggregateInputType = {
    idUserCat?: true
    nomCat?: true
    autorisation?: true
    _all?: true
  }

  export type UserCategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategorie to aggregate.
     */
    where?: UserCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategorieOrderByWithRelationInput | UserCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCategories
    **/
    _count?: true | UserCategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCategorieMaxAggregateInputType
  }

  export type GetUserCategorieAggregateType<T extends UserCategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCategorie[P]>
      : GetScalarType<T[P], AggregateUserCategorie[P]>
  }




  export type UserCategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategorieWhereInput
    orderBy?: UserCategorieOrderByWithAggregationInput | UserCategorieOrderByWithAggregationInput[]
    by: UserCategorieScalarFieldEnum[] | UserCategorieScalarFieldEnum
    having?: UserCategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCategorieCountAggregateInputType | true
    _avg?: UserCategorieAvgAggregateInputType
    _sum?: UserCategorieSumAggregateInputType
    _min?: UserCategorieMinAggregateInputType
    _max?: UserCategorieMaxAggregateInputType
  }

  export type UserCategorieGroupByOutputType = {
    idUserCat: number
    nomCat: string
    autorisation: number
    _count: UserCategorieCountAggregateOutputType | null
    _avg: UserCategorieAvgAggregateOutputType | null
    _sum: UserCategorieSumAggregateOutputType | null
    _min: UserCategorieMinAggregateOutputType | null
    _max: UserCategorieMaxAggregateOutputType | null
  }

  type GetUserCategorieGroupByPayload<T extends UserCategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCategorieGroupByOutputType[P]>
            : GetScalarType<T[P], UserCategorieGroupByOutputType[P]>
        }
      >
    >


  export type UserCategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUserCat?: boolean
    nomCat?: boolean
    autorisation?: boolean
    users?: boolean | UserCategorie$usersArgs<ExtArgs>
    _count?: boolean | UserCategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCategorie"]>

  export type UserCategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUserCat?: boolean
    nomCat?: boolean
    autorisation?: boolean
  }, ExtArgs["result"]["userCategorie"]>

  export type UserCategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUserCat?: boolean
    nomCat?: boolean
    autorisation?: boolean
  }, ExtArgs["result"]["userCategorie"]>

  export type UserCategorieSelectScalar = {
    idUserCat?: boolean
    nomCat?: boolean
    autorisation?: boolean
  }

  export type UserCategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUserCat" | "nomCat" | "autorisation", ExtArgs["result"]["userCategorie"]>
  export type UserCategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserCategorie$usersArgs<ExtArgs>
    _count?: boolean | UserCategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserCategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserCategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserCategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCategorie"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUserCat: number
      nomCat: string
      autorisation: number
    }, ExtArgs["result"]["userCategorie"]>
    composites: {}
  }

  type UserCategorieGetPayload<S extends boolean | null | undefined | UserCategorieDefaultArgs> = $Result.GetResult<Prisma.$UserCategoriePayload, S>

  type UserCategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCategorieCountAggregateInputType | true
    }

  export interface UserCategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCategorie'], meta: { name: 'UserCategorie' } }
    /**
     * Find zero or one UserCategorie that matches the filter.
     * @param {UserCategorieFindUniqueArgs} args - Arguments to find a UserCategorie
     * @example
     * // Get one UserCategorie
     * const userCategorie = await prisma.userCategorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCategorieFindUniqueArgs>(args: SelectSubset<T, UserCategorieFindUniqueArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCategorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCategorieFindUniqueOrThrowArgs} args - Arguments to find a UserCategorie
     * @example
     * // Get one UserCategorie
     * const userCategorie = await prisma.userCategorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCategorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieFindFirstArgs} args - Arguments to find a UserCategorie
     * @example
     * // Get one UserCategorie
     * const userCategorie = await prisma.userCategorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCategorieFindFirstArgs>(args?: SelectSubset<T, UserCategorieFindFirstArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCategorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieFindFirstOrThrowArgs} args - Arguments to find a UserCategorie
     * @example
     * // Get one UserCategorie
     * const userCategorie = await prisma.userCategorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCategories
     * const userCategories = await prisma.userCategorie.findMany()
     * 
     * // Get first 10 UserCategories
     * const userCategories = await prisma.userCategorie.findMany({ take: 10 })
     * 
     * // Only select the `idUserCat`
     * const userCategorieWithIdUserCatOnly = await prisma.userCategorie.findMany({ select: { idUserCat: true } })
     * 
     */
    findMany<T extends UserCategorieFindManyArgs>(args?: SelectSubset<T, UserCategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCategorie.
     * @param {UserCategorieCreateArgs} args - Arguments to create a UserCategorie.
     * @example
     * // Create one UserCategorie
     * const UserCategorie = await prisma.userCategorie.create({
     *   data: {
     *     // ... data to create a UserCategorie
     *   }
     * })
     * 
     */
    create<T extends UserCategorieCreateArgs>(args: SelectSubset<T, UserCategorieCreateArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCategories.
     * @param {UserCategorieCreateManyArgs} args - Arguments to create many UserCategories.
     * @example
     * // Create many UserCategories
     * const userCategorie = await prisma.userCategorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCategorieCreateManyArgs>(args?: SelectSubset<T, UserCategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCategories and returns the data saved in the database.
     * @param {UserCategorieCreateManyAndReturnArgs} args - Arguments to create many UserCategories.
     * @example
     * // Create many UserCategories
     * const userCategorie = await prisma.userCategorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCategories and only return the `idUserCat`
     * const userCategorieWithIdUserCatOnly = await prisma.userCategorie.createManyAndReturn({
     *   select: { idUserCat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCategorie.
     * @param {UserCategorieDeleteArgs} args - Arguments to delete one UserCategorie.
     * @example
     * // Delete one UserCategorie
     * const UserCategorie = await prisma.userCategorie.delete({
     *   where: {
     *     // ... filter to delete one UserCategorie
     *   }
     * })
     * 
     */
    delete<T extends UserCategorieDeleteArgs>(args: SelectSubset<T, UserCategorieDeleteArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCategorie.
     * @param {UserCategorieUpdateArgs} args - Arguments to update one UserCategorie.
     * @example
     * // Update one UserCategorie
     * const userCategorie = await prisma.userCategorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCategorieUpdateArgs>(args: SelectSubset<T, UserCategorieUpdateArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCategories.
     * @param {UserCategorieDeleteManyArgs} args - Arguments to filter UserCategories to delete.
     * @example
     * // Delete a few UserCategories
     * const { count } = await prisma.userCategorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCategorieDeleteManyArgs>(args?: SelectSubset<T, UserCategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCategories
     * const userCategorie = await prisma.userCategorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCategorieUpdateManyArgs>(args: SelectSubset<T, UserCategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategories and returns the data updated in the database.
     * @param {UserCategorieUpdateManyAndReturnArgs} args - Arguments to update many UserCategories.
     * @example
     * // Update many UserCategories
     * const userCategorie = await prisma.userCategorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCategories and only return the `idUserCat`
     * const userCategorieWithIdUserCatOnly = await prisma.userCategorie.updateManyAndReturn({
     *   select: { idUserCat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCategorie.
     * @param {UserCategorieUpsertArgs} args - Arguments to update or create a UserCategorie.
     * @example
     * // Update or create a UserCategorie
     * const userCategorie = await prisma.userCategorie.upsert({
     *   create: {
     *     // ... data to create a UserCategorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCategorie we want to update
     *   }
     * })
     */
    upsert<T extends UserCategorieUpsertArgs>(args: SelectSubset<T, UserCategorieUpsertArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieCountArgs} args - Arguments to filter UserCategories to count.
     * @example
     * // Count the number of UserCategories
     * const count = await prisma.userCategorie.count({
     *   where: {
     *     // ... the filter for the UserCategories we want to count
     *   }
     * })
    **/
    count<T extends UserCategorieCountArgs>(
      args?: Subset<T, UserCategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCategorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCategorieAggregateArgs>(args: Subset<T, UserCategorieAggregateArgs>): Prisma.PrismaPromise<GetUserCategorieAggregateType<T>>

    /**
     * Group by UserCategorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCategorieGroupByArgs['orderBy'] }
        : { orderBy?: UserCategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCategorie model
   */
  readonly fields: UserCategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCategorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserCategorie$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserCategorie$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCategorie model
   */
  interface UserCategorieFieldRefs {
    readonly idUserCat: FieldRef<"UserCategorie", 'Int'>
    readonly nomCat: FieldRef<"UserCategorie", 'String'>
    readonly autorisation: FieldRef<"UserCategorie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserCategorie findUnique
   */
  export type UserCategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * Filter, which UserCategorie to fetch.
     */
    where: UserCategorieWhereUniqueInput
  }

  /**
   * UserCategorie findUniqueOrThrow
   */
  export type UserCategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * Filter, which UserCategorie to fetch.
     */
    where: UserCategorieWhereUniqueInput
  }

  /**
   * UserCategorie findFirst
   */
  export type UserCategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * Filter, which UserCategorie to fetch.
     */
    where?: UserCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategorieOrderByWithRelationInput | UserCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategorieScalarFieldEnum | UserCategorieScalarFieldEnum[]
  }

  /**
   * UserCategorie findFirstOrThrow
   */
  export type UserCategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * Filter, which UserCategorie to fetch.
     */
    where?: UserCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategorieOrderByWithRelationInput | UserCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategorieScalarFieldEnum | UserCategorieScalarFieldEnum[]
  }

  /**
   * UserCategorie findMany
   */
  export type UserCategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * Filter, which UserCategories to fetch.
     */
    where?: UserCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategorieOrderByWithRelationInput | UserCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCategories.
     */
    cursor?: UserCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    distinct?: UserCategorieScalarFieldEnum | UserCategorieScalarFieldEnum[]
  }

  /**
   * UserCategorie create
   */
  export type UserCategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCategorie.
     */
    data: XOR<UserCategorieCreateInput, UserCategorieUncheckedCreateInput>
  }

  /**
   * UserCategorie createMany
   */
  export type UserCategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCategories.
     */
    data: UserCategorieCreateManyInput | UserCategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategorie createManyAndReturn
   */
  export type UserCategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * The data used to create many UserCategories.
     */
    data: UserCategorieCreateManyInput | UserCategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategorie update
   */
  export type UserCategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCategorie.
     */
    data: XOR<UserCategorieUpdateInput, UserCategorieUncheckedUpdateInput>
    /**
     * Choose, which UserCategorie to update.
     */
    where: UserCategorieWhereUniqueInput
  }

  /**
   * UserCategorie updateMany
   */
  export type UserCategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCategories.
     */
    data: XOR<UserCategorieUpdateManyMutationInput, UserCategorieUncheckedUpdateManyInput>
    /**
     * Filter which UserCategories to update
     */
    where?: UserCategorieWhereInput
    /**
     * Limit how many UserCategories to update.
     */
    limit?: number
  }

  /**
   * UserCategorie updateManyAndReturn
   */
  export type UserCategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * The data used to update UserCategories.
     */
    data: XOR<UserCategorieUpdateManyMutationInput, UserCategorieUncheckedUpdateManyInput>
    /**
     * Filter which UserCategories to update
     */
    where?: UserCategorieWhereInput
    /**
     * Limit how many UserCategories to update.
     */
    limit?: number
  }

  /**
   * UserCategorie upsert
   */
  export type UserCategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCategorie to update in case it exists.
     */
    where: UserCategorieWhereUniqueInput
    /**
     * In case the UserCategorie found by the `where` argument doesn't exist, create a new UserCategorie with this data.
     */
    create: XOR<UserCategorieCreateInput, UserCategorieUncheckedCreateInput>
    /**
     * In case the UserCategorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCategorieUpdateInput, UserCategorieUncheckedUpdateInput>
  }

  /**
   * UserCategorie delete
   */
  export type UserCategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
    /**
     * Filter which UserCategorie to delete.
     */
    where: UserCategorieWhereUniqueInput
  }

  /**
   * UserCategorie deleteMany
   */
  export type UserCategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategories to delete
     */
    where?: UserCategorieWhereInput
    /**
     * Limit how many UserCategories to delete.
     */
    limit?: number
  }

  /**
   * UserCategorie.users
   */
  export type UserCategorie$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserCategorie without action
   */
  export type UserCategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategorie
     */
    select?: UserCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategorie
     */
    omit?: UserCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategorieInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    idUserCat: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    idUserCat: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    idUserCat: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    idUserCat: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    idUserCat: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    idUserCat?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    idUserCat?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    idUserCat?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    idUserCat?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    idUserCat?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    idUserCat: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
    factures?: boolean | User$facturesArgs<ExtArgs>
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "idUserCat", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factures?: boolean | User$facturesArgs<ExtArgs>
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      factures: Prisma.$FacturePayload<ExtArgs>[]
      cat: Prisma.$UserCategoriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      idUserCat: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factures<T extends User$facturesArgs<ExtArgs> = {}>(args?: Subset<T, User$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cat<T extends UserCategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCategorieDefaultArgs<ExtArgs>>): Prisma__UserCategorieClient<$Result.GetResult<Prisma.$UserCategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly idUserCat: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.factures
   */
  export type User$facturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    where?: FactureWhereInput
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    cursor?: FactureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FactureElement
   */

  export type AggregateFactureElement = {
    _count: FactureElementCountAggregateOutputType | null
    _avg: FactureElementAvgAggregateOutputType | null
    _sum: FactureElementSumAggregateOutputType | null
    _min: FactureElementMinAggregateOutputType | null
    _max: FactureElementMaxAggregateOutputType | null
  }

  export type FactureElementAvgAggregateOutputType = {
    id: number | null
    nombre: number | null
    montant: number | null
    factureId: number | null
  }

  export type FactureElementSumAggregateOutputType = {
    id: number | null
    nombre: number | null
    montant: number | null
    factureId: number | null
  }

  export type FactureElementMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    nombre: number | null
    montant: number | null
    factureId: number | null
  }

  export type FactureElementMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    nombre: number | null
    montant: number | null
    factureId: number | null
  }

  export type FactureElementCountAggregateOutputType = {
    id: number
    libelle: number
    nombre: number
    montant: number
    factureId: number
    _all: number
  }


  export type FactureElementAvgAggregateInputType = {
    id?: true
    nombre?: true
    montant?: true
    factureId?: true
  }

  export type FactureElementSumAggregateInputType = {
    id?: true
    nombre?: true
    montant?: true
    factureId?: true
  }

  export type FactureElementMinAggregateInputType = {
    id?: true
    libelle?: true
    nombre?: true
    montant?: true
    factureId?: true
  }

  export type FactureElementMaxAggregateInputType = {
    id?: true
    libelle?: true
    nombre?: true
    montant?: true
    factureId?: true
  }

  export type FactureElementCountAggregateInputType = {
    id?: true
    libelle?: true
    nombre?: true
    montant?: true
    factureId?: true
    _all?: true
  }

  export type FactureElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FactureElement to aggregate.
     */
    where?: FactureElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureElements to fetch.
     */
    orderBy?: FactureElementOrderByWithRelationInput | FactureElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactureElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FactureElements
    **/
    _count?: true | FactureElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactureElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactureElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureElementMaxAggregateInputType
  }

  export type GetFactureElementAggregateType<T extends FactureElementAggregateArgs> = {
        [P in keyof T & keyof AggregateFactureElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactureElement[P]>
      : GetScalarType<T[P], AggregateFactureElement[P]>
  }




  export type FactureElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureElementWhereInput
    orderBy?: FactureElementOrderByWithAggregationInput | FactureElementOrderByWithAggregationInput[]
    by: FactureElementScalarFieldEnum[] | FactureElementScalarFieldEnum
    having?: FactureElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureElementCountAggregateInputType | true
    _avg?: FactureElementAvgAggregateInputType
    _sum?: FactureElementSumAggregateInputType
    _min?: FactureElementMinAggregateInputType
    _max?: FactureElementMaxAggregateInputType
  }

  export type FactureElementGroupByOutputType = {
    id: number
    libelle: string
    nombre: number
    montant: number
    factureId: number
    _count: FactureElementCountAggregateOutputType | null
    _avg: FactureElementAvgAggregateOutputType | null
    _sum: FactureElementSumAggregateOutputType | null
    _min: FactureElementMinAggregateOutputType | null
    _max: FactureElementMaxAggregateOutputType | null
  }

  type GetFactureElementGroupByPayload<T extends FactureElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureElementGroupByOutputType[P]>
            : GetScalarType<T[P], FactureElementGroupByOutputType[P]>
        }
      >
    >


  export type FactureElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    nombre?: boolean
    montant?: boolean
    factureId?: boolean
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factureElement"]>

  export type FactureElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    nombre?: boolean
    montant?: boolean
    factureId?: boolean
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factureElement"]>

  export type FactureElementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    nombre?: boolean
    montant?: boolean
    factureId?: boolean
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factureElement"]>

  export type FactureElementSelectScalar = {
    id?: boolean
    libelle?: boolean
    nombre?: boolean
    montant?: boolean
    factureId?: boolean
  }

  export type FactureElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "nombre" | "montant" | "factureId", ExtArgs["result"]["factureElement"]>
  export type FactureElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }
  export type FactureElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }
  export type FactureElementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | FactureDefaultArgs<ExtArgs>
  }

  export type $FactureElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FactureElement"
    objects: {
      facture: Prisma.$FacturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
      nombre: number
      montant: number
      factureId: number
    }, ExtArgs["result"]["factureElement"]>
    composites: {}
  }

  type FactureElementGetPayload<S extends boolean | null | undefined | FactureElementDefaultArgs> = $Result.GetResult<Prisma.$FactureElementPayload, S>

  type FactureElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactureElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactureElementCountAggregateInputType | true
    }

  export interface FactureElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FactureElement'], meta: { name: 'FactureElement' } }
    /**
     * Find zero or one FactureElement that matches the filter.
     * @param {FactureElementFindUniqueArgs} args - Arguments to find a FactureElement
     * @example
     * // Get one FactureElement
     * const factureElement = await prisma.factureElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactureElementFindUniqueArgs>(args: SelectSubset<T, FactureElementFindUniqueArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FactureElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactureElementFindUniqueOrThrowArgs} args - Arguments to find a FactureElement
     * @example
     * // Get one FactureElement
     * const factureElement = await prisma.factureElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactureElementFindUniqueOrThrowArgs>(args: SelectSubset<T, FactureElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FactureElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementFindFirstArgs} args - Arguments to find a FactureElement
     * @example
     * // Get one FactureElement
     * const factureElement = await prisma.factureElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactureElementFindFirstArgs>(args?: SelectSubset<T, FactureElementFindFirstArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FactureElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementFindFirstOrThrowArgs} args - Arguments to find a FactureElement
     * @example
     * // Get one FactureElement
     * const factureElement = await prisma.factureElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactureElementFindFirstOrThrowArgs>(args?: SelectSubset<T, FactureElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FactureElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FactureElements
     * const factureElements = await prisma.factureElement.findMany()
     * 
     * // Get first 10 FactureElements
     * const factureElements = await prisma.factureElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureElementWithIdOnly = await prisma.factureElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactureElementFindManyArgs>(args?: SelectSubset<T, FactureElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FactureElement.
     * @param {FactureElementCreateArgs} args - Arguments to create a FactureElement.
     * @example
     * // Create one FactureElement
     * const FactureElement = await prisma.factureElement.create({
     *   data: {
     *     // ... data to create a FactureElement
     *   }
     * })
     * 
     */
    create<T extends FactureElementCreateArgs>(args: SelectSubset<T, FactureElementCreateArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FactureElements.
     * @param {FactureElementCreateManyArgs} args - Arguments to create many FactureElements.
     * @example
     * // Create many FactureElements
     * const factureElement = await prisma.factureElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactureElementCreateManyArgs>(args?: SelectSubset<T, FactureElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FactureElements and returns the data saved in the database.
     * @param {FactureElementCreateManyAndReturnArgs} args - Arguments to create many FactureElements.
     * @example
     * // Create many FactureElements
     * const factureElement = await prisma.factureElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FactureElements and only return the `id`
     * const factureElementWithIdOnly = await prisma.factureElement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactureElementCreateManyAndReturnArgs>(args?: SelectSubset<T, FactureElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FactureElement.
     * @param {FactureElementDeleteArgs} args - Arguments to delete one FactureElement.
     * @example
     * // Delete one FactureElement
     * const FactureElement = await prisma.factureElement.delete({
     *   where: {
     *     // ... filter to delete one FactureElement
     *   }
     * })
     * 
     */
    delete<T extends FactureElementDeleteArgs>(args: SelectSubset<T, FactureElementDeleteArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FactureElement.
     * @param {FactureElementUpdateArgs} args - Arguments to update one FactureElement.
     * @example
     * // Update one FactureElement
     * const factureElement = await prisma.factureElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactureElementUpdateArgs>(args: SelectSubset<T, FactureElementUpdateArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FactureElements.
     * @param {FactureElementDeleteManyArgs} args - Arguments to filter FactureElements to delete.
     * @example
     * // Delete a few FactureElements
     * const { count } = await prisma.factureElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactureElementDeleteManyArgs>(args?: SelectSubset<T, FactureElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FactureElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FactureElements
     * const factureElement = await prisma.factureElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactureElementUpdateManyArgs>(args: SelectSubset<T, FactureElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FactureElements and returns the data updated in the database.
     * @param {FactureElementUpdateManyAndReturnArgs} args - Arguments to update many FactureElements.
     * @example
     * // Update many FactureElements
     * const factureElement = await prisma.factureElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FactureElements and only return the `id`
     * const factureElementWithIdOnly = await prisma.factureElement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FactureElementUpdateManyAndReturnArgs>(args: SelectSubset<T, FactureElementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FactureElement.
     * @param {FactureElementUpsertArgs} args - Arguments to update or create a FactureElement.
     * @example
     * // Update or create a FactureElement
     * const factureElement = await prisma.factureElement.upsert({
     *   create: {
     *     // ... data to create a FactureElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FactureElement we want to update
     *   }
     * })
     */
    upsert<T extends FactureElementUpsertArgs>(args: SelectSubset<T, FactureElementUpsertArgs<ExtArgs>>): Prisma__FactureElementClient<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FactureElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementCountArgs} args - Arguments to filter FactureElements to count.
     * @example
     * // Count the number of FactureElements
     * const count = await prisma.factureElement.count({
     *   where: {
     *     // ... the filter for the FactureElements we want to count
     *   }
     * })
    **/
    count<T extends FactureElementCountArgs>(
      args?: Subset<T, FactureElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FactureElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FactureElementAggregateArgs>(args: Subset<T, FactureElementAggregateArgs>): Prisma.PrismaPromise<GetFactureElementAggregateType<T>>

    /**
     * Group by FactureElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FactureElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactureElementGroupByArgs['orderBy'] }
        : { orderBy?: FactureElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FactureElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FactureElement model
   */
  readonly fields: FactureElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FactureElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactureElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facture<T extends FactureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FactureDefaultArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FactureElement model
   */
  interface FactureElementFieldRefs {
    readonly id: FieldRef<"FactureElement", 'Int'>
    readonly libelle: FieldRef<"FactureElement", 'String'>
    readonly nombre: FieldRef<"FactureElement", 'Int'>
    readonly montant: FieldRef<"FactureElement", 'Int'>
    readonly factureId: FieldRef<"FactureElement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FactureElement findUnique
   */
  export type FactureElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * Filter, which FactureElement to fetch.
     */
    where: FactureElementWhereUniqueInput
  }

  /**
   * FactureElement findUniqueOrThrow
   */
  export type FactureElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * Filter, which FactureElement to fetch.
     */
    where: FactureElementWhereUniqueInput
  }

  /**
   * FactureElement findFirst
   */
  export type FactureElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * Filter, which FactureElement to fetch.
     */
    where?: FactureElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureElements to fetch.
     */
    orderBy?: FactureElementOrderByWithRelationInput | FactureElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FactureElements.
     */
    cursor?: FactureElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FactureElements.
     */
    distinct?: FactureElementScalarFieldEnum | FactureElementScalarFieldEnum[]
  }

  /**
   * FactureElement findFirstOrThrow
   */
  export type FactureElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * Filter, which FactureElement to fetch.
     */
    where?: FactureElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureElements to fetch.
     */
    orderBy?: FactureElementOrderByWithRelationInput | FactureElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FactureElements.
     */
    cursor?: FactureElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FactureElements.
     */
    distinct?: FactureElementScalarFieldEnum | FactureElementScalarFieldEnum[]
  }

  /**
   * FactureElement findMany
   */
  export type FactureElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * Filter, which FactureElements to fetch.
     */
    where?: FactureElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureElements to fetch.
     */
    orderBy?: FactureElementOrderByWithRelationInput | FactureElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FactureElements.
     */
    cursor?: FactureElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureElements.
     */
    skip?: number
    distinct?: FactureElementScalarFieldEnum | FactureElementScalarFieldEnum[]
  }

  /**
   * FactureElement create
   */
  export type FactureElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * The data needed to create a FactureElement.
     */
    data: XOR<FactureElementCreateInput, FactureElementUncheckedCreateInput>
  }

  /**
   * FactureElement createMany
   */
  export type FactureElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FactureElements.
     */
    data: FactureElementCreateManyInput | FactureElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FactureElement createManyAndReturn
   */
  export type FactureElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * The data used to create many FactureElements.
     */
    data: FactureElementCreateManyInput | FactureElementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FactureElement update
   */
  export type FactureElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * The data needed to update a FactureElement.
     */
    data: XOR<FactureElementUpdateInput, FactureElementUncheckedUpdateInput>
    /**
     * Choose, which FactureElement to update.
     */
    where: FactureElementWhereUniqueInput
  }

  /**
   * FactureElement updateMany
   */
  export type FactureElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FactureElements.
     */
    data: XOR<FactureElementUpdateManyMutationInput, FactureElementUncheckedUpdateManyInput>
    /**
     * Filter which FactureElements to update
     */
    where?: FactureElementWhereInput
    /**
     * Limit how many FactureElements to update.
     */
    limit?: number
  }

  /**
   * FactureElement updateManyAndReturn
   */
  export type FactureElementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * The data used to update FactureElements.
     */
    data: XOR<FactureElementUpdateManyMutationInput, FactureElementUncheckedUpdateManyInput>
    /**
     * Filter which FactureElements to update
     */
    where?: FactureElementWhereInput
    /**
     * Limit how many FactureElements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FactureElement upsert
   */
  export type FactureElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * The filter to search for the FactureElement to update in case it exists.
     */
    where: FactureElementWhereUniqueInput
    /**
     * In case the FactureElement found by the `where` argument doesn't exist, create a new FactureElement with this data.
     */
    create: XOR<FactureElementCreateInput, FactureElementUncheckedCreateInput>
    /**
     * In case the FactureElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactureElementUpdateInput, FactureElementUncheckedUpdateInput>
  }

  /**
   * FactureElement delete
   */
  export type FactureElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    /**
     * Filter which FactureElement to delete.
     */
    where: FactureElementWhereUniqueInput
  }

  /**
   * FactureElement deleteMany
   */
  export type FactureElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FactureElements to delete
     */
    where?: FactureElementWhereInput
    /**
     * Limit how many FactureElements to delete.
     */
    limit?: number
  }

  /**
   * FactureElement without action
   */
  export type FactureElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
  }


  /**
   * Model Facture
   */

  export type AggregateFacture = {
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  export type FactureAvgAggregateOutputType = {
    id: number | null
    total: number | null
    userId: number | null
  }

  export type FactureSumAggregateOutputType = {
    id: number | null
    total: number | null
    userId: number | null
  }

  export type FactureMinAggregateOutputType = {
    id: number | null
    date: Date | null
    titre: string | null
    total: number | null
    state: string | null
    userId: number | null
  }

  export type FactureMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    titre: string | null
    total: number | null
    state: string | null
    userId: number | null
  }

  export type FactureCountAggregateOutputType = {
    id: number
    date: number
    titre: number
    total: number
    state: number
    userId: number
    _all: number
  }


  export type FactureAvgAggregateInputType = {
    id?: true
    total?: true
    userId?: true
  }

  export type FactureSumAggregateInputType = {
    id?: true
    total?: true
    userId?: true
  }

  export type FactureMinAggregateInputType = {
    id?: true
    date?: true
    titre?: true
    total?: true
    state?: true
    userId?: true
  }

  export type FactureMaxAggregateInputType = {
    id?: true
    date?: true
    titre?: true
    total?: true
    state?: true
    userId?: true
  }

  export type FactureCountAggregateInputType = {
    id?: true
    date?: true
    titre?: true
    total?: true
    state?: true
    userId?: true
    _all?: true
  }

  export type FactureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facture to aggregate.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Factures
    **/
    _count?: true | FactureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureMaxAggregateInputType
  }

  export type GetFactureAggregateType<T extends FactureAggregateArgs> = {
        [P in keyof T & keyof AggregateFacture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacture[P]>
      : GetScalarType<T[P], AggregateFacture[P]>
  }




  export type FactureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureWhereInput
    orderBy?: FactureOrderByWithAggregationInput | FactureOrderByWithAggregationInput[]
    by: FactureScalarFieldEnum[] | FactureScalarFieldEnum
    having?: FactureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureCountAggregateInputType | true
    _avg?: FactureAvgAggregateInputType
    _sum?: FactureSumAggregateInputType
    _min?: FactureMinAggregateInputType
    _max?: FactureMaxAggregateInputType
  }

  export type FactureGroupByOutputType = {
    id: number
    date: Date
    titre: string
    total: number
    state: string
    userId: number
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  type GetFactureGroupByPayload<T extends FactureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureGroupByOutputType[P]>
            : GetScalarType<T[P], FactureGroupByOutputType[P]>
        }
      >
    >


  export type FactureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    titre?: boolean
    total?: boolean
    state?: boolean
    userId?: boolean
    elements?: boolean | Facture$elementsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    titre?: boolean
    total?: boolean
    state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    titre?: boolean
    total?: boolean
    state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectScalar = {
    id?: boolean
    date?: boolean
    titre?: boolean
    total?: boolean
    state?: boolean
    userId?: boolean
  }

  export type FactureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "titre" | "total" | "state" | "userId", ExtArgs["result"]["facture"]>
  export type FactureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | Facture$elementsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FactureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FactureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FacturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facture"
    objects: {
      elements: Prisma.$FactureElementPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      titre: string
      total: number
      state: string
      userId: number
    }, ExtArgs["result"]["facture"]>
    composites: {}
  }

  type FactureGetPayload<S extends boolean | null | undefined | FactureDefaultArgs> = $Result.GetResult<Prisma.$FacturePayload, S>

  type FactureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactureCountAggregateInputType | true
    }

  export interface FactureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facture'], meta: { name: 'Facture' } }
    /**
     * Find zero or one Facture that matches the filter.
     * @param {FactureFindUniqueArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactureFindUniqueArgs>(args: SelectSubset<T, FactureFindUniqueArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactureFindUniqueOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactureFindUniqueOrThrowArgs>(args: SelectSubset<T, FactureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindFirstArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactureFindFirstArgs>(args?: SelectSubset<T, FactureFindFirstArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindFirstOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactureFindFirstOrThrowArgs>(args?: SelectSubset<T, FactureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factures
     * const factures = await prisma.facture.findMany()
     * 
     * // Get first 10 Factures
     * const factures = await prisma.facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureWithIdOnly = await prisma.facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactureFindManyArgs>(args?: SelectSubset<T, FactureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facture.
     * @param {FactureCreateArgs} args - Arguments to create a Facture.
     * @example
     * // Create one Facture
     * const Facture = await prisma.facture.create({
     *   data: {
     *     // ... data to create a Facture
     *   }
     * })
     * 
     */
    create<T extends FactureCreateArgs>(args: SelectSubset<T, FactureCreateArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factures.
     * @param {FactureCreateManyArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactureCreateManyArgs>(args?: SelectSubset<T, FactureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factures and returns the data saved in the database.
     * @param {FactureCreateManyAndReturnArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactureCreateManyAndReturnArgs>(args?: SelectSubset<T, FactureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facture.
     * @param {FactureDeleteArgs} args - Arguments to delete one Facture.
     * @example
     * // Delete one Facture
     * const Facture = await prisma.facture.delete({
     *   where: {
     *     // ... filter to delete one Facture
     *   }
     * })
     * 
     */
    delete<T extends FactureDeleteArgs>(args: SelectSubset<T, FactureDeleteArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facture.
     * @param {FactureUpdateArgs} args - Arguments to update one Facture.
     * @example
     * // Update one Facture
     * const facture = await prisma.facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactureUpdateArgs>(args: SelectSubset<T, FactureUpdateArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factures.
     * @param {FactureDeleteManyArgs} args - Arguments to filter Factures to delete.
     * @example
     * // Delete a few Factures
     * const { count } = await prisma.facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactureDeleteManyArgs>(args?: SelectSubset<T, FactureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactureUpdateManyArgs>(args: SelectSubset<T, FactureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures and returns the data updated in the database.
     * @param {FactureUpdateManyAndReturnArgs} args - Arguments to update many Factures.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FactureUpdateManyAndReturnArgs>(args: SelectSubset<T, FactureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facture.
     * @param {FactureUpsertArgs} args - Arguments to update or create a Facture.
     * @example
     * // Update or create a Facture
     * const facture = await prisma.facture.upsert({
     *   create: {
     *     // ... data to create a Facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facture we want to update
     *   }
     * })
     */
    upsert<T extends FactureUpsertArgs>(args: SelectSubset<T, FactureUpsertArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureCountArgs} args - Arguments to filter Factures to count.
     * @example
     * // Count the number of Factures
     * const count = await prisma.facture.count({
     *   where: {
     *     // ... the filter for the Factures we want to count
     *   }
     * })
    **/
    count<T extends FactureCountArgs>(
      args?: Subset<T, FactureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FactureAggregateArgs>(args: Subset<T, FactureAggregateArgs>): Prisma.PrismaPromise<GetFactureAggregateType<T>>

    /**
     * Group by Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FactureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactureGroupByArgs['orderBy'] }
        : { orderBy?: FactureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FactureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facture model
   */
  readonly fields: FactureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elements<T extends Facture$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Facture$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Facture model
   */
  interface FactureFieldRefs {
    readonly id: FieldRef<"Facture", 'Int'>
    readonly date: FieldRef<"Facture", 'DateTime'>
    readonly titre: FieldRef<"Facture", 'String'>
    readonly total: FieldRef<"Facture", 'Int'>
    readonly state: FieldRef<"Facture", 'String'>
    readonly userId: FieldRef<"Facture", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Facture findUnique
   */
  export type FactureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture findUniqueOrThrow
   */
  export type FactureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture findFirst
   */
  export type FactureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture findFirstOrThrow
   */
  export type FactureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture findMany
   */
  export type FactureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Factures to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture create
   */
  export type FactureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The data needed to create a Facture.
     */
    data: XOR<FactureCreateInput, FactureUncheckedCreateInput>
  }

  /**
   * Facture createMany
   */
  export type FactureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Factures.
     */
    data: FactureCreateManyInput | FactureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facture createManyAndReturn
   */
  export type FactureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * The data used to create many Factures.
     */
    data: FactureCreateManyInput | FactureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facture update
   */
  export type FactureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The data needed to update a Facture.
     */
    data: XOR<FactureUpdateInput, FactureUncheckedUpdateInput>
    /**
     * Choose, which Facture to update.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture updateMany
   */
  export type FactureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Factures.
     */
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyInput>
    /**
     * Filter which Factures to update
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to update.
     */
    limit?: number
  }

  /**
   * Facture updateManyAndReturn
   */
  export type FactureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * The data used to update Factures.
     */
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyInput>
    /**
     * Filter which Factures to update
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facture upsert
   */
  export type FactureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The filter to search for the Facture to update in case it exists.
     */
    where: FactureWhereUniqueInput
    /**
     * In case the Facture found by the `where` argument doesn't exist, create a new Facture with this data.
     */
    create: XOR<FactureCreateInput, FactureUncheckedCreateInput>
    /**
     * In case the Facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactureUpdateInput, FactureUncheckedUpdateInput>
  }

  /**
   * Facture delete
   */
  export type FactureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter which Facture to delete.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture deleteMany
   */
  export type FactureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factures to delete
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to delete.
     */
    limit?: number
  }

  /**
   * Facture.elements
   */
  export type Facture$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureElement
     */
    select?: FactureElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureElement
     */
    omit?: FactureElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureElementInclude<ExtArgs> | null
    where?: FactureElementWhereInput
    orderBy?: FactureElementOrderByWithRelationInput | FactureElementOrderByWithRelationInput[]
    cursor?: FactureElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactureElementScalarFieldEnum | FactureElementScalarFieldEnum[]
  }

  /**
   * Facture without action
   */
  export type FactureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserCategorieScalarFieldEnum: {
    idUserCat: 'idUserCat',
    nomCat: 'nomCat',
    autorisation: 'autorisation'
  };

  export type UserCategorieScalarFieldEnum = (typeof UserCategorieScalarFieldEnum)[keyof typeof UserCategorieScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    idUserCat: 'idUserCat'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FactureElementScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    nombre: 'nombre',
    montant: 'montant',
    factureId: 'factureId'
  };

  export type FactureElementScalarFieldEnum = (typeof FactureElementScalarFieldEnum)[keyof typeof FactureElementScalarFieldEnum]


  export const FactureScalarFieldEnum: {
    id: 'id',
    date: 'date',
    titre: 'titre',
    total: 'total',
    state: 'state',
    userId: 'userId'
  };

  export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserCategorieWhereInput = {
    AND?: UserCategorieWhereInput | UserCategorieWhereInput[]
    OR?: UserCategorieWhereInput[]
    NOT?: UserCategorieWhereInput | UserCategorieWhereInput[]
    idUserCat?: IntFilter<"UserCategorie"> | number
    nomCat?: StringFilter<"UserCategorie"> | string
    autorisation?: IntFilter<"UserCategorie"> | number
    users?: UserListRelationFilter
  }

  export type UserCategorieOrderByWithRelationInput = {
    idUserCat?: SortOrder
    nomCat?: SortOrder
    autorisation?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserCategorieWhereUniqueInput = Prisma.AtLeast<{
    idUserCat?: number
    AND?: UserCategorieWhereInput | UserCategorieWhereInput[]
    OR?: UserCategorieWhereInput[]
    NOT?: UserCategorieWhereInput | UserCategorieWhereInput[]
    nomCat?: StringFilter<"UserCategorie"> | string
    autorisation?: IntFilter<"UserCategorie"> | number
    users?: UserListRelationFilter
  }, "idUserCat">

  export type UserCategorieOrderByWithAggregationInput = {
    idUserCat?: SortOrder
    nomCat?: SortOrder
    autorisation?: SortOrder
    _count?: UserCategorieCountOrderByAggregateInput
    _avg?: UserCategorieAvgOrderByAggregateInput
    _max?: UserCategorieMaxOrderByAggregateInput
    _min?: UserCategorieMinOrderByAggregateInput
    _sum?: UserCategorieSumOrderByAggregateInput
  }

  export type UserCategorieScalarWhereWithAggregatesInput = {
    AND?: UserCategorieScalarWhereWithAggregatesInput | UserCategorieScalarWhereWithAggregatesInput[]
    OR?: UserCategorieScalarWhereWithAggregatesInput[]
    NOT?: UserCategorieScalarWhereWithAggregatesInput | UserCategorieScalarWhereWithAggregatesInput[]
    idUserCat?: IntWithAggregatesFilter<"UserCategorie"> | number
    nomCat?: StringWithAggregatesFilter<"UserCategorie"> | string
    autorisation?: IntWithAggregatesFilter<"UserCategorie"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    idUserCat?: IntFilter<"User"> | number
    factures?: FactureListRelationFilter
    cat?: XOR<UserCategorieScalarRelationFilter, UserCategorieWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
    factures?: FactureOrderByRelationAggregateInput
    cat?: UserCategorieOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    idUserCat?: IntFilter<"User"> | number
    factures?: FactureListRelationFilter
    cat?: XOR<UserCategorieScalarRelationFilter, UserCategorieWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    idUserCat?: IntWithAggregatesFilter<"User"> | number
  }

  export type FactureElementWhereInput = {
    AND?: FactureElementWhereInput | FactureElementWhereInput[]
    OR?: FactureElementWhereInput[]
    NOT?: FactureElementWhereInput | FactureElementWhereInput[]
    id?: IntFilter<"FactureElement"> | number
    libelle?: StringFilter<"FactureElement"> | string
    nombre?: IntFilter<"FactureElement"> | number
    montant?: IntFilter<"FactureElement"> | number
    factureId?: IntFilter<"FactureElement"> | number
    facture?: XOR<FactureScalarRelationFilter, FactureWhereInput>
  }

  export type FactureElementOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
    facture?: FactureOrderByWithRelationInput
  }

  export type FactureElementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FactureElementWhereInput | FactureElementWhereInput[]
    OR?: FactureElementWhereInput[]
    NOT?: FactureElementWhereInput | FactureElementWhereInput[]
    libelle?: StringFilter<"FactureElement"> | string
    nombre?: IntFilter<"FactureElement"> | number
    montant?: IntFilter<"FactureElement"> | number
    factureId?: IntFilter<"FactureElement"> | number
    facture?: XOR<FactureScalarRelationFilter, FactureWhereInput>
  }, "id">

  export type FactureElementOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
    _count?: FactureElementCountOrderByAggregateInput
    _avg?: FactureElementAvgOrderByAggregateInput
    _max?: FactureElementMaxOrderByAggregateInput
    _min?: FactureElementMinOrderByAggregateInput
    _sum?: FactureElementSumOrderByAggregateInput
  }

  export type FactureElementScalarWhereWithAggregatesInput = {
    AND?: FactureElementScalarWhereWithAggregatesInput | FactureElementScalarWhereWithAggregatesInput[]
    OR?: FactureElementScalarWhereWithAggregatesInput[]
    NOT?: FactureElementScalarWhereWithAggregatesInput | FactureElementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FactureElement"> | number
    libelle?: StringWithAggregatesFilter<"FactureElement"> | string
    nombre?: IntWithAggregatesFilter<"FactureElement"> | number
    montant?: IntWithAggregatesFilter<"FactureElement"> | number
    factureId?: IntWithAggregatesFilter<"FactureElement"> | number
  }

  export type FactureWhereInput = {
    AND?: FactureWhereInput | FactureWhereInput[]
    OR?: FactureWhereInput[]
    NOT?: FactureWhereInput | FactureWhereInput[]
    id?: IntFilter<"Facture"> | number
    date?: DateTimeFilter<"Facture"> | Date | string
    titre?: StringFilter<"Facture"> | string
    total?: IntFilter<"Facture"> | number
    state?: StringFilter<"Facture"> | string
    userId?: IntFilter<"Facture"> | number
    elements?: FactureElementListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FactureOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    state?: SortOrder
    userId?: SortOrder
    elements?: FactureElementOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type FactureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FactureWhereInput | FactureWhereInput[]
    OR?: FactureWhereInput[]
    NOT?: FactureWhereInput | FactureWhereInput[]
    date?: DateTimeFilter<"Facture"> | Date | string
    titre?: StringFilter<"Facture"> | string
    total?: IntFilter<"Facture"> | number
    state?: StringFilter<"Facture"> | string
    userId?: IntFilter<"Facture"> | number
    elements?: FactureElementListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FactureOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    state?: SortOrder
    userId?: SortOrder
    _count?: FactureCountOrderByAggregateInput
    _avg?: FactureAvgOrderByAggregateInput
    _max?: FactureMaxOrderByAggregateInput
    _min?: FactureMinOrderByAggregateInput
    _sum?: FactureSumOrderByAggregateInput
  }

  export type FactureScalarWhereWithAggregatesInput = {
    AND?: FactureScalarWhereWithAggregatesInput | FactureScalarWhereWithAggregatesInput[]
    OR?: FactureScalarWhereWithAggregatesInput[]
    NOT?: FactureScalarWhereWithAggregatesInput | FactureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facture"> | number
    date?: DateTimeWithAggregatesFilter<"Facture"> | Date | string
    titre?: StringWithAggregatesFilter<"Facture"> | string
    total?: IntWithAggregatesFilter<"Facture"> | number
    state?: StringWithAggregatesFilter<"Facture"> | string
    userId?: IntWithAggregatesFilter<"Facture"> | number
  }

  export type UserCategorieCreateInput = {
    nomCat: string
    autorisation: number
    users?: UserCreateNestedManyWithoutCatInput
  }

  export type UserCategorieUncheckedCreateInput = {
    idUserCat?: number
    nomCat: string
    autorisation: number
    users?: UserUncheckedCreateNestedManyWithoutCatInput
  }

  export type UserCategorieUpdateInput = {
    nomCat?: StringFieldUpdateOperationsInput | string
    autorisation?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutCatNestedInput
  }

  export type UserCategorieUncheckedUpdateInput = {
    idUserCat?: IntFieldUpdateOperationsInput | number
    nomCat?: StringFieldUpdateOperationsInput | string
    autorisation?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutCatNestedInput
  }

  export type UserCategorieCreateManyInput = {
    idUserCat?: number
    nomCat: string
    autorisation: number
  }

  export type UserCategorieUpdateManyMutationInput = {
    nomCat?: StringFieldUpdateOperationsInput | string
    autorisation?: IntFieldUpdateOperationsInput | number
  }

  export type UserCategorieUncheckedUpdateManyInput = {
    idUserCat?: IntFieldUpdateOperationsInput | number
    nomCat?: StringFieldUpdateOperationsInput | string
    autorisation?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    factures?: FactureCreateNestedManyWithoutUserInput
    cat: UserCategorieCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    factures?: FactureUpdateManyWithoutUserNestedInput
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
  }

  export type FactureElementCreateInput = {
    libelle: string
    nombre: number
    montant: number
    facture: FactureCreateNestedOneWithoutElementsInput
  }

  export type FactureElementUncheckedCreateInput = {
    id?: number
    libelle: string
    nombre: number
    montant: number
    factureId: number
  }

  export type FactureElementUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
    facture?: FactureUpdateOneRequiredWithoutElementsNestedInput
  }

  export type FactureElementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
    factureId?: IntFieldUpdateOperationsInput | number
  }

  export type FactureElementCreateManyInput = {
    id?: number
    libelle: string
    nombre: number
    montant: number
    factureId: number
  }

  export type FactureElementUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
  }

  export type FactureElementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
    factureId?: IntFieldUpdateOperationsInput | number
  }

  export type FactureCreateInput = {
    date: Date | string
    titre: string
    total: number
    state: string
    elements?: FactureElementCreateNestedManyWithoutFactureInput
    user: UserCreateNestedOneWithoutFacturesInput
  }

  export type FactureUncheckedCreateInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    state: string
    userId: number
    elements?: FactureElementUncheckedCreateNestedManyWithoutFactureInput
  }

  export type FactureUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    elements?: FactureElementUpdateManyWithoutFactureNestedInput
    user?: UserUpdateOneRequiredWithoutFacturesNestedInput
  }

  export type FactureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    elements?: FactureElementUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type FactureCreateManyInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    state: string
    userId: number
  }

  export type FactureUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type FactureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCategorieCountOrderByAggregateInput = {
    idUserCat?: SortOrder
    nomCat?: SortOrder
    autorisation?: SortOrder
  }

  export type UserCategorieAvgOrderByAggregateInput = {
    idUserCat?: SortOrder
    autorisation?: SortOrder
  }

  export type UserCategorieMaxOrderByAggregateInput = {
    idUserCat?: SortOrder
    nomCat?: SortOrder
    autorisation?: SortOrder
  }

  export type UserCategorieMinOrderByAggregateInput = {
    idUserCat?: SortOrder
    nomCat?: SortOrder
    autorisation?: SortOrder
  }

  export type UserCategorieSumOrderByAggregateInput = {
    idUserCat?: SortOrder
    autorisation?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FactureListRelationFilter = {
    every?: FactureWhereInput
    some?: FactureWhereInput
    none?: FactureWhereInput
  }

  export type UserCategorieScalarRelationFilter = {
    is?: UserCategorieWhereInput
    isNot?: UserCategorieWhereInput
  }

  export type FactureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    idUserCat?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    idUserCat?: SortOrder
  }

  export type FactureScalarRelationFilter = {
    is?: FactureWhereInput
    isNot?: FactureWhereInput
  }

  export type FactureElementCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
  }

  export type FactureElementAvgOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
  }

  export type FactureElementMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
  }

  export type FactureElementMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
  }

  export type FactureElementSumOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    montant?: SortOrder
    factureId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FactureElementListRelationFilter = {
    every?: FactureElementWhereInput
    some?: FactureElementWhereInput
    none?: FactureElementWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FactureElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactureCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    state?: SortOrder
    userId?: SortOrder
  }

  export type FactureAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type FactureMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    state?: SortOrder
    userId?: SortOrder
  }

  export type FactureMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    state?: SortOrder
    userId?: SortOrder
  }

  export type FactureSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutCatInput = {
    create?: XOR<UserCreateWithoutCatInput, UserUncheckedCreateWithoutCatInput> | UserCreateWithoutCatInput[] | UserUncheckedCreateWithoutCatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCatInput | UserCreateOrConnectWithoutCatInput[]
    createMany?: UserCreateManyCatInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCatInput = {
    create?: XOR<UserCreateWithoutCatInput, UserUncheckedCreateWithoutCatInput> | UserCreateWithoutCatInput[] | UserUncheckedCreateWithoutCatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCatInput | UserCreateOrConnectWithoutCatInput[]
    createMany?: UserCreateManyCatInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutCatNestedInput = {
    create?: XOR<UserCreateWithoutCatInput, UserUncheckedCreateWithoutCatInput> | UserCreateWithoutCatInput[] | UserUncheckedCreateWithoutCatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCatInput | UserCreateOrConnectWithoutCatInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCatInput | UserUpsertWithWhereUniqueWithoutCatInput[]
    createMany?: UserCreateManyCatInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCatInput | UserUpdateWithWhereUniqueWithoutCatInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCatInput | UserUpdateManyWithWhereWithoutCatInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCatNestedInput = {
    create?: XOR<UserCreateWithoutCatInput, UserUncheckedCreateWithoutCatInput> | UserCreateWithoutCatInput[] | UserUncheckedCreateWithoutCatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCatInput | UserCreateOrConnectWithoutCatInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCatInput | UserUpsertWithWhereUniqueWithoutCatInput[]
    createMany?: UserCreateManyCatInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCatInput | UserUpdateWithWhereUniqueWithoutCatInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCatInput | UserUpdateManyWithWhereWithoutCatInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FactureCreateNestedManyWithoutUserInput = {
    create?: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput> | FactureCreateWithoutUserInput[] | FactureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutUserInput | FactureCreateOrConnectWithoutUserInput[]
    createMany?: FactureCreateManyUserInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type UserCategorieCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserCategorieCreateWithoutUsersInput, UserCategorieUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserCategorieCreateOrConnectWithoutUsersInput
    connect?: UserCategorieWhereUniqueInput
  }

  export type FactureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput> | FactureCreateWithoutUserInput[] | FactureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutUserInput | FactureCreateOrConnectWithoutUserInput[]
    createMany?: FactureCreateManyUserInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type FactureUpdateManyWithoutUserNestedInput = {
    create?: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput> | FactureCreateWithoutUserInput[] | FactureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutUserInput | FactureCreateOrConnectWithoutUserInput[]
    upsert?: FactureUpsertWithWhereUniqueWithoutUserInput | FactureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FactureCreateManyUserInputEnvelope
    set?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    disconnect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    delete?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    update?: FactureUpdateWithWhereUniqueWithoutUserInput | FactureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FactureUpdateManyWithWhereWithoutUserInput | FactureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FactureScalarWhereInput | FactureScalarWhereInput[]
  }

  export type UserCategorieUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserCategorieCreateWithoutUsersInput, UserCategorieUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserCategorieCreateOrConnectWithoutUsersInput
    upsert?: UserCategorieUpsertWithoutUsersInput
    connect?: UserCategorieWhereUniqueInput
    update?: XOR<XOR<UserCategorieUpdateToOneWithWhereWithoutUsersInput, UserCategorieUpdateWithoutUsersInput>, UserCategorieUncheckedUpdateWithoutUsersInput>
  }

  export type FactureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput> | FactureCreateWithoutUserInput[] | FactureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutUserInput | FactureCreateOrConnectWithoutUserInput[]
    upsert?: FactureUpsertWithWhereUniqueWithoutUserInput | FactureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FactureCreateManyUserInputEnvelope
    set?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    disconnect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    delete?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    update?: FactureUpdateWithWhereUniqueWithoutUserInput | FactureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FactureUpdateManyWithWhereWithoutUserInput | FactureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FactureScalarWhereInput | FactureScalarWhereInput[]
  }

  export type FactureCreateNestedOneWithoutElementsInput = {
    create?: XOR<FactureCreateWithoutElementsInput, FactureUncheckedCreateWithoutElementsInput>
    connectOrCreate?: FactureCreateOrConnectWithoutElementsInput
    connect?: FactureWhereUniqueInput
  }

  export type FactureUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<FactureCreateWithoutElementsInput, FactureUncheckedCreateWithoutElementsInput>
    connectOrCreate?: FactureCreateOrConnectWithoutElementsInput
    upsert?: FactureUpsertWithoutElementsInput
    connect?: FactureWhereUniqueInput
    update?: XOR<XOR<FactureUpdateToOneWithWhereWithoutElementsInput, FactureUpdateWithoutElementsInput>, FactureUncheckedUpdateWithoutElementsInput>
  }

  export type FactureElementCreateNestedManyWithoutFactureInput = {
    create?: XOR<FactureElementCreateWithoutFactureInput, FactureElementUncheckedCreateWithoutFactureInput> | FactureElementCreateWithoutFactureInput[] | FactureElementUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: FactureElementCreateOrConnectWithoutFactureInput | FactureElementCreateOrConnectWithoutFactureInput[]
    createMany?: FactureElementCreateManyFactureInputEnvelope
    connect?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFacturesInput = {
    create?: XOR<UserCreateWithoutFacturesInput, UserUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacturesInput
    connect?: UserWhereUniqueInput
  }

  export type FactureElementUncheckedCreateNestedManyWithoutFactureInput = {
    create?: XOR<FactureElementCreateWithoutFactureInput, FactureElementUncheckedCreateWithoutFactureInput> | FactureElementCreateWithoutFactureInput[] | FactureElementUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: FactureElementCreateOrConnectWithoutFactureInput | FactureElementCreateOrConnectWithoutFactureInput[]
    createMany?: FactureElementCreateManyFactureInputEnvelope
    connect?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FactureElementUpdateManyWithoutFactureNestedInput = {
    create?: XOR<FactureElementCreateWithoutFactureInput, FactureElementUncheckedCreateWithoutFactureInput> | FactureElementCreateWithoutFactureInput[] | FactureElementUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: FactureElementCreateOrConnectWithoutFactureInput | FactureElementCreateOrConnectWithoutFactureInput[]
    upsert?: FactureElementUpsertWithWhereUniqueWithoutFactureInput | FactureElementUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: FactureElementCreateManyFactureInputEnvelope
    set?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    disconnect?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    delete?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    connect?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    update?: FactureElementUpdateWithWhereUniqueWithoutFactureInput | FactureElementUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: FactureElementUpdateManyWithWhereWithoutFactureInput | FactureElementUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: FactureElementScalarWhereInput | FactureElementScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutFacturesNestedInput = {
    create?: XOR<UserCreateWithoutFacturesInput, UserUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacturesInput
    upsert?: UserUpsertWithoutFacturesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFacturesInput, UserUpdateWithoutFacturesInput>, UserUncheckedUpdateWithoutFacturesInput>
  }

  export type FactureElementUncheckedUpdateManyWithoutFactureNestedInput = {
    create?: XOR<FactureElementCreateWithoutFactureInput, FactureElementUncheckedCreateWithoutFactureInput> | FactureElementCreateWithoutFactureInput[] | FactureElementUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: FactureElementCreateOrConnectWithoutFactureInput | FactureElementCreateOrConnectWithoutFactureInput[]
    upsert?: FactureElementUpsertWithWhereUniqueWithoutFactureInput | FactureElementUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: FactureElementCreateManyFactureInputEnvelope
    set?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    disconnect?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    delete?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    connect?: FactureElementWhereUniqueInput | FactureElementWhereUniqueInput[]
    update?: FactureElementUpdateWithWhereUniqueWithoutFactureInput | FactureElementUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: FactureElementUpdateManyWithWhereWithoutFactureInput | FactureElementUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: FactureElementScalarWhereInput | FactureElementScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateWithoutCatInput = {
    name: string
    email: string
    password: string
    factures?: FactureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCatInput = {
    id?: number
    name: string
    email: string
    password: string
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCatInput, UserUncheckedCreateWithoutCatInput>
  }

  export type UserCreateManyCatInputEnvelope = {
    data: UserCreateManyCatInput | UserCreateManyCatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCatInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCatInput, UserUncheckedUpdateWithoutCatInput>
    create: XOR<UserCreateWithoutCatInput, UserUncheckedCreateWithoutCatInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCatInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCatInput, UserUncheckedUpdateWithoutCatInput>
  }

  export type UserUpdateManyWithWhereWithoutCatInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCatInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    idUserCat?: IntFilter<"User"> | number
  }

  export type FactureCreateWithoutUserInput = {
    date: Date | string
    titre: string
    total: number
    state: string
    elements?: FactureElementCreateNestedManyWithoutFactureInput
  }

  export type FactureUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    state: string
    elements?: FactureElementUncheckedCreateNestedManyWithoutFactureInput
  }

  export type FactureCreateOrConnectWithoutUserInput = {
    where: FactureWhereUniqueInput
    create: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput>
  }

  export type FactureCreateManyUserInputEnvelope = {
    data: FactureCreateManyUserInput | FactureCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCategorieCreateWithoutUsersInput = {
    nomCat: string
    autorisation: number
  }

  export type UserCategorieUncheckedCreateWithoutUsersInput = {
    idUserCat?: number
    nomCat: string
    autorisation: number
  }

  export type UserCategorieCreateOrConnectWithoutUsersInput = {
    where: UserCategorieWhereUniqueInput
    create: XOR<UserCategorieCreateWithoutUsersInput, UserCategorieUncheckedCreateWithoutUsersInput>
  }

  export type FactureUpsertWithWhereUniqueWithoutUserInput = {
    where: FactureWhereUniqueInput
    update: XOR<FactureUpdateWithoutUserInput, FactureUncheckedUpdateWithoutUserInput>
    create: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput>
  }

  export type FactureUpdateWithWhereUniqueWithoutUserInput = {
    where: FactureWhereUniqueInput
    data: XOR<FactureUpdateWithoutUserInput, FactureUncheckedUpdateWithoutUserInput>
  }

  export type FactureUpdateManyWithWhereWithoutUserInput = {
    where: FactureScalarWhereInput
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyWithoutUserInput>
  }

  export type FactureScalarWhereInput = {
    AND?: FactureScalarWhereInput | FactureScalarWhereInput[]
    OR?: FactureScalarWhereInput[]
    NOT?: FactureScalarWhereInput | FactureScalarWhereInput[]
    id?: IntFilter<"Facture"> | number
    date?: DateTimeFilter<"Facture"> | Date | string
    titre?: StringFilter<"Facture"> | string
    total?: IntFilter<"Facture"> | number
    state?: StringFilter<"Facture"> | string
    userId?: IntFilter<"Facture"> | number
  }

  export type UserCategorieUpsertWithoutUsersInput = {
    update: XOR<UserCategorieUpdateWithoutUsersInput, UserCategorieUncheckedUpdateWithoutUsersInput>
    create: XOR<UserCategorieCreateWithoutUsersInput, UserCategorieUncheckedCreateWithoutUsersInput>
    where?: UserCategorieWhereInput
  }

  export type UserCategorieUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserCategorieWhereInput
    data: XOR<UserCategorieUpdateWithoutUsersInput, UserCategorieUncheckedUpdateWithoutUsersInput>
  }

  export type UserCategorieUpdateWithoutUsersInput = {
    nomCat?: StringFieldUpdateOperationsInput | string
    autorisation?: IntFieldUpdateOperationsInput | number
  }

  export type UserCategorieUncheckedUpdateWithoutUsersInput = {
    idUserCat?: IntFieldUpdateOperationsInput | number
    nomCat?: StringFieldUpdateOperationsInput | string
    autorisation?: IntFieldUpdateOperationsInput | number
  }

  export type FactureCreateWithoutElementsInput = {
    date: Date | string
    titre: string
    total: number
    state: string
    user: UserCreateNestedOneWithoutFacturesInput
  }

  export type FactureUncheckedCreateWithoutElementsInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    state: string
    userId: number
  }

  export type FactureCreateOrConnectWithoutElementsInput = {
    where: FactureWhereUniqueInput
    create: XOR<FactureCreateWithoutElementsInput, FactureUncheckedCreateWithoutElementsInput>
  }

  export type FactureUpsertWithoutElementsInput = {
    update: XOR<FactureUpdateWithoutElementsInput, FactureUncheckedUpdateWithoutElementsInput>
    create: XOR<FactureCreateWithoutElementsInput, FactureUncheckedCreateWithoutElementsInput>
    where?: FactureWhereInput
  }

  export type FactureUpdateToOneWithWhereWithoutElementsInput = {
    where?: FactureWhereInput
    data: XOR<FactureUpdateWithoutElementsInput, FactureUncheckedUpdateWithoutElementsInput>
  }

  export type FactureUpdateWithoutElementsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFacturesNestedInput
  }

  export type FactureUncheckedUpdateWithoutElementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FactureElementCreateWithoutFactureInput = {
    libelle: string
    nombre: number
    montant: number
  }

  export type FactureElementUncheckedCreateWithoutFactureInput = {
    id?: number
    libelle: string
    nombre: number
    montant: number
  }

  export type FactureElementCreateOrConnectWithoutFactureInput = {
    where: FactureElementWhereUniqueInput
    create: XOR<FactureElementCreateWithoutFactureInput, FactureElementUncheckedCreateWithoutFactureInput>
  }

  export type FactureElementCreateManyFactureInputEnvelope = {
    data: FactureElementCreateManyFactureInput | FactureElementCreateManyFactureInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFacturesInput = {
    name: string
    email: string
    password: string
    cat: UserCategorieCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutFacturesInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
  }

  export type UserCreateOrConnectWithoutFacturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFacturesInput, UserUncheckedCreateWithoutFacturesInput>
  }

  export type FactureElementUpsertWithWhereUniqueWithoutFactureInput = {
    where: FactureElementWhereUniqueInput
    update: XOR<FactureElementUpdateWithoutFactureInput, FactureElementUncheckedUpdateWithoutFactureInput>
    create: XOR<FactureElementCreateWithoutFactureInput, FactureElementUncheckedCreateWithoutFactureInput>
  }

  export type FactureElementUpdateWithWhereUniqueWithoutFactureInput = {
    where: FactureElementWhereUniqueInput
    data: XOR<FactureElementUpdateWithoutFactureInput, FactureElementUncheckedUpdateWithoutFactureInput>
  }

  export type FactureElementUpdateManyWithWhereWithoutFactureInput = {
    where: FactureElementScalarWhereInput
    data: XOR<FactureElementUpdateManyMutationInput, FactureElementUncheckedUpdateManyWithoutFactureInput>
  }

  export type FactureElementScalarWhereInput = {
    AND?: FactureElementScalarWhereInput | FactureElementScalarWhereInput[]
    OR?: FactureElementScalarWhereInput[]
    NOT?: FactureElementScalarWhereInput | FactureElementScalarWhereInput[]
    id?: IntFilter<"FactureElement"> | number
    libelle?: StringFilter<"FactureElement"> | string
    nombre?: IntFilter<"FactureElement"> | number
    montant?: IntFilter<"FactureElement"> | number
    factureId?: IntFilter<"FactureElement"> | number
  }

  export type UserUpsertWithoutFacturesInput = {
    update: XOR<UserUpdateWithoutFacturesInput, UserUncheckedUpdateWithoutFacturesInput>
    create: XOR<UserCreateWithoutFacturesInput, UserUncheckedCreateWithoutFacturesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFacturesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFacturesInput, UserUncheckedUpdateWithoutFacturesInput>
  }

  export type UserUpdateWithoutFacturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutFacturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyCatInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateWithoutCatInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    factures?: FactureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FactureCreateManyUserInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    state: string
  }

  export type FactureUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    elements?: FactureElementUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    elements?: FactureElementUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type FactureElementCreateManyFactureInput = {
    id?: number
    libelle: string
    nombre: number
    montant: number
  }

  export type FactureElementUpdateWithoutFactureInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
  }

  export type FactureElementUncheckedUpdateWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
  }

  export type FactureElementUncheckedUpdateManyWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    nombre?: IntFieldUpdateOperationsInput | number
    montant?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}