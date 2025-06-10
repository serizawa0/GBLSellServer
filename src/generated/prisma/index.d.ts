
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
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model PrivateMessage
 * 
 */
export type PrivateMessage = $Result.DefaultSelection<Prisma.$PrivateMessagePayload>
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
 * Model ItemSolaire
 * 
 */
export type ItemSolaire = $Result.DefaultSelection<Prisma.$ItemSolairePayload>
/**
 * Model Pack
 * 
 */
export type Pack = $Result.DefaultSelection<Prisma.$PackPayload>
/**
 * Model FileGroup
 * 
 */
export type FileGroup = $Result.DefaultSelection<Prisma.$FileGroupPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>

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
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateMessage`: Exposes CRUD operations for the **PrivateMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateMessages
    * const privateMessages = await prisma.privateMessage.findMany()
    * ```
    */
  get privateMessage(): Prisma.PrivateMessageDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.itemSolaire`: Exposes CRUD operations for the **ItemSolaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemSolaires
    * const itemSolaires = await prisma.itemSolaire.findMany()
    * ```
    */
  get itemSolaire(): Prisma.ItemSolaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pack`: Exposes CRUD operations for the **Pack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packs
    * const packs = await prisma.pack.findMany()
    * ```
    */
  get pack(): Prisma.PackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileGroup`: Exposes CRUD operations for the **FileGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileGroups
    * const fileGroups = await prisma.fileGroup.findMany()
    * ```
    */
  get fileGroup(): Prisma.FileGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;
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
    Group: 'Group',
    PrivateMessage: 'PrivateMessage',
    FactureElement: 'FactureElement',
    Facture: 'Facture',
    ItemSolaire: 'ItemSolaire',
    Pack: 'Pack',
    FileGroup: 'FileGroup',
    File: 'File'
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
      modelProps: "userCategorie" | "user" | "group" | "privateMessage" | "factureElement" | "facture" | "itemSolaire" | "pack" | "fileGroup" | "file"
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
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      PrivateMessage: {
        payload: Prisma.$PrivateMessagePayload<ExtArgs>
        fields: Prisma.PrivateMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findFirst: {
            args: Prisma.PrivateMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findMany: {
            args: Prisma.PrivateMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          create: {
            args: Prisma.PrivateMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          createMany: {
            args: Prisma.PrivateMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          delete: {
            args: Prisma.PrivateMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          update: {
            args: Prisma.PrivateMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          deleteMany: {
            args: Prisma.PrivateMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          upsert: {
            args: Prisma.PrivateMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          aggregate: {
            args: Prisma.PrivateMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateMessage>
          }
          groupBy: {
            args: Prisma.PrivateMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageCountAggregateOutputType> | number
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
      ItemSolaire: {
        payload: Prisma.$ItemSolairePayload<ExtArgs>
        fields: Prisma.ItemSolaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemSolaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemSolaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>
          }
          findFirst: {
            args: Prisma.ItemSolaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemSolaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>
          }
          findMany: {
            args: Prisma.ItemSolaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>[]
          }
          create: {
            args: Prisma.ItemSolaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>
          }
          createMany: {
            args: Prisma.ItemSolaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemSolaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>[]
          }
          delete: {
            args: Prisma.ItemSolaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>
          }
          update: {
            args: Prisma.ItemSolaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>
          }
          deleteMany: {
            args: Prisma.ItemSolaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemSolaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemSolaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>[]
          }
          upsert: {
            args: Prisma.ItemSolaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSolairePayload>
          }
          aggregate: {
            args: Prisma.ItemSolaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemSolaire>
          }
          groupBy: {
            args: Prisma.ItemSolaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemSolaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemSolaireCountArgs<ExtArgs>
            result: $Utils.Optional<ItemSolaireCountAggregateOutputType> | number
          }
        }
      }
      Pack: {
        payload: Prisma.$PackPayload<ExtArgs>
        fields: Prisma.PackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findFirst: {
            args: Prisma.PackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findMany: {
            args: Prisma.PackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          create: {
            args: Prisma.PackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          createMany: {
            args: Prisma.PackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          delete: {
            args: Prisma.PackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          update: {
            args: Prisma.PackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          deleteMany: {
            args: Prisma.PackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          upsert: {
            args: Prisma.PackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          aggregate: {
            args: Prisma.PackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePack>
          }
          groupBy: {
            args: Prisma.PackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackCountArgs<ExtArgs>
            result: $Utils.Optional<PackCountAggregateOutputType> | number
          }
        }
      }
      FileGroup: {
        payload: Prisma.$FileGroupPayload<ExtArgs>
        fields: Prisma.FileGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>
          }
          findFirst: {
            args: Prisma.FileGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>
          }
          findMany: {
            args: Prisma.FileGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>[]
          }
          create: {
            args: Prisma.FileGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>
          }
          createMany: {
            args: Prisma.FileGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>[]
          }
          delete: {
            args: Prisma.FileGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>
          }
          update: {
            args: Prisma.FileGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>
          }
          deleteMany: {
            args: Prisma.FileGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>[]
          }
          upsert: {
            args: Prisma.FileGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileGroupPayload>
          }
          aggregate: {
            args: Prisma.FileGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileGroup>
          }
          groupBy: {
            args: Prisma.FileGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileGroupCountArgs<ExtArgs>
            result: $Utils.Optional<FileGroupCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
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
    group?: GroupOmit
    privateMessage?: PrivateMessageOmit
    factureElement?: FactureElementOmit
    facture?: FactureOmit
    itemSolaire?: ItemSolaireOmit
    pack?: PackOmit
    fileGroup?: FileGroupOmit
    file?: FileOmit
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
    messagesSent: number
    messagesReceived: number
    groups: number
    createdGroups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factures?: boolean | UserCountOutputTypeCountFacturesArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    createdGroups?: boolean | UserCountOutputTypeCountCreatedGroupsArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
   * Count Type FileGroupCountOutputType
   */

  export type FileGroupCountOutputType = {
    files: number
  }

  export type FileGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | FileGroupCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * FileGroupCountOutputType without action
   */
  export type FileGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroupCountOutputType
     */
    select?: FileGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileGroupCountOutputType without action
   */
  export type FileGroupCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
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
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    idUserCat: number | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    idUserCat: number
    avatar: number
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
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    idUserCat?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    idUserCat?: true
    avatar?: true
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
    avatar: string | null
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
    avatar?: boolean
    factures?: boolean | User$facturesArgs<ExtArgs>
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
    avatar?: boolean
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
    avatar?: boolean
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    idUserCat?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "idUserCat" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factures?: boolean | User$facturesArgs<ExtArgs>
    cat?: boolean | UserCategorieDefaultArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
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
      messagesSent: Prisma.$PrivateMessagePayload<ExtArgs>[]
      messagesReceived: Prisma.$PrivateMessagePayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      createdGroups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      idUserCat: number
      avatar: string | null
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
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdGroups<T extends User$createdGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly avatar: FieldRef<"User", 'String'>
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
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.createdGroups
   */
  export type User$createdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
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
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    creatorId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    creatorId: number | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    creatorId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    creatorId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    users?: boolean | Group$usersArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    creatorId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "creatorId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Group$usersArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      creatorId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly creatorId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model PrivateMessage
   */

  export type AggregatePrivateMessage = {
    _count: PrivateMessageCountAggregateOutputType | null
    _avg: PrivateMessageAvgAggregateOutputType | null
    _sum: PrivateMessageSumAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  export type PrivateMessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type PrivateMessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type PrivateMessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    senderId: number | null
    receiverId: number | null
  }

  export type PrivateMessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    senderId: number | null
    receiverId: number | null
  }

  export type PrivateMessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type PrivateMessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type PrivateMessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type PrivateMessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type PrivateMessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type PrivateMessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type PrivateMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessage to aggregate.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateMessages
    **/
    _count?: true | PrivateMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type GetPrivateMessageAggregateType<T extends PrivateMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateMessage[P]>
      : GetScalarType<T[P], AggregatePrivateMessage[P]>
  }




  export type PrivateMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithAggregationInput | PrivateMessageOrderByWithAggregationInput[]
    by: PrivateMessageScalarFieldEnum[] | PrivateMessageScalarFieldEnum
    having?: PrivateMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateMessageCountAggregateInputType | true
    _avg?: PrivateMessageAvgAggregateInputType
    _sum?: PrivateMessageSumAggregateInputType
    _min?: PrivateMessageMinAggregateInputType
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type PrivateMessageGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    senderId: number
    receiverId: number
    _count: PrivateMessageCountAggregateOutputType | null
    _avg: PrivateMessageAvgAggregateOutputType | null
    _sum: PrivateMessageSumAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  type GetPrivateMessageGroupByPayload<T extends PrivateMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
        }
      >
    >


  export type PrivateMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type PrivateMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "senderId" | "receiverId", ExtArgs["result"]["privateMessage"]>
  export type PrivateMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrivateMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      senderId: number
      receiverId: number
    }, ExtArgs["result"]["privateMessage"]>
    composites: {}
  }

  type PrivateMessageGetPayload<S extends boolean | null | undefined | PrivateMessageDefaultArgs> = $Result.GetResult<Prisma.$PrivateMessagePayload, S>

  type PrivateMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateMessageCountAggregateInputType | true
    }

  export interface PrivateMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateMessage'], meta: { name: 'PrivateMessage' } }
    /**
     * Find zero or one PrivateMessage that matches the filter.
     * @param {PrivateMessageFindUniqueArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateMessageFindUniqueArgs>(args: SelectSubset<T, PrivateMessageFindUniqueArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateMessageFindUniqueOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateMessageFindFirstArgs>(args?: SelectSubset<T, PrivateMessageFindFirstArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany()
     * 
     * // Get first 10 PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateMessageFindManyArgs>(args?: SelectSubset<T, PrivateMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateMessage.
     * @param {PrivateMessageCreateArgs} args - Arguments to create a PrivateMessage.
     * @example
     * // Create one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.create({
     *   data: {
     *     // ... data to create a PrivateMessage
     *   }
     * })
     * 
     */
    create<T extends PrivateMessageCreateArgs>(args: SelectSubset<T, PrivateMessageCreateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateMessages.
     * @param {PrivateMessageCreateManyArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateMessageCreateManyArgs>(args?: SelectSubset<T, PrivateMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateMessages and returns the data saved in the database.
     * @param {PrivateMessageCreateManyAndReturnArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateMessages and only return the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateMessage.
     * @param {PrivateMessageDeleteArgs} args - Arguments to delete one PrivateMessage.
     * @example
     * // Delete one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.delete({
     *   where: {
     *     // ... filter to delete one PrivateMessage
     *   }
     * })
     * 
     */
    delete<T extends PrivateMessageDeleteArgs>(args: SelectSubset<T, PrivateMessageDeleteArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateMessage.
     * @param {PrivateMessageUpdateArgs} args - Arguments to update one PrivateMessage.
     * @example
     * // Update one PrivateMessage
     * const privateMessage = await prisma.privateMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateMessageUpdateArgs>(args: SelectSubset<T, PrivateMessageUpdateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateMessages.
     * @param {PrivateMessageDeleteManyArgs} args - Arguments to filter PrivateMessages to delete.
     * @example
     * // Delete a few PrivateMessages
     * const { count } = await prisma.privateMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateMessageDeleteManyArgs>(args?: SelectSubset<T, PrivateMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateMessageUpdateManyArgs>(args: SelectSubset<T, PrivateMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages and returns the data updated in the database.
     * @param {PrivateMessageUpdateManyAndReturnArgs} args - Arguments to update many PrivateMessages.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateMessages and only return the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivateMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateMessage.
     * @param {PrivateMessageUpsertArgs} args - Arguments to update or create a PrivateMessage.
     * @example
     * // Update or create a PrivateMessage
     * const privateMessage = await prisma.privateMessage.upsert({
     *   create: {
     *     // ... data to create a PrivateMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateMessage we want to update
     *   }
     * })
     */
    upsert<T extends PrivateMessageUpsertArgs>(args: SelectSubset<T, PrivateMessageUpsertArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageCountArgs} args - Arguments to filter PrivateMessages to count.
     * @example
     * // Count the number of PrivateMessages
     * const count = await prisma.privateMessage.count({
     *   where: {
     *     // ... the filter for the PrivateMessages we want to count
     *   }
     * })
    **/
    count<T extends PrivateMessageCountArgs>(
      args?: Subset<T, PrivateMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateMessageAggregateArgs>(args: Subset<T, PrivateMessageAggregateArgs>): Prisma.PrismaPromise<GetPrivateMessageAggregateType<T>>

    /**
     * Group by PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageGroupByArgs} args - Group by arguments.
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
      T extends PrivateMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateMessageGroupByArgs['orderBy'] }
        : { orderBy?: PrivateMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateMessage model
   */
  readonly fields: PrivateMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrivateMessage model
   */
  interface PrivateMessageFieldRefs {
    readonly id: FieldRef<"PrivateMessage", 'Int'>
    readonly content: FieldRef<"PrivateMessage", 'String'>
    readonly createdAt: FieldRef<"PrivateMessage", 'DateTime'>
    readonly senderId: FieldRef<"PrivateMessage", 'Int'>
    readonly receiverId: FieldRef<"PrivateMessage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrivateMessage findUnique
   */
  export type PrivateMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findUniqueOrThrow
   */
  export type PrivateMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findFirst
   */
  export type PrivateMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findFirstOrThrow
   */
  export type PrivateMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findMany
   */
  export type PrivateMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessages to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage create
   */
  export type PrivateMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateMessage.
     */
    data: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
  }

  /**
   * PrivateMessage createMany
   */
  export type PrivateMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateMessage createManyAndReturn
   */
  export type PrivateMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateMessage update
   */
  export type PrivateMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateMessage.
     */
    data: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
    /**
     * Choose, which PrivateMessage to update.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage updateMany
   */
  export type PrivateMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
  }

  /**
   * PrivateMessage updateManyAndReturn
   */
  export type PrivateMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateMessage upsert
   */
  export type PrivateMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateMessage to update in case it exists.
     */
    where: PrivateMessageWhereUniqueInput
    /**
     * In case the PrivateMessage found by the `where` argument doesn't exist, create a new PrivateMessage with this data.
     */
    create: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
    /**
     * In case the PrivateMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
  }

  /**
   * PrivateMessage delete
   */
  export type PrivateMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter which PrivateMessage to delete.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage deleteMany
   */
  export type PrivateMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessages to delete
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to delete.
     */
    limit?: number
  }

  /**
   * PrivateMessage without action
   */
  export type PrivateMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
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
    categorie: string | null
    state: string | null
    userId: number | null
  }

  export type FactureMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    titre: string | null
    total: number | null
    categorie: string | null
    state: string | null
    userId: number | null
  }

  export type FactureCountAggregateOutputType = {
    id: number
    date: number
    titre: number
    total: number
    categorie: number
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
    categorie?: true
    state?: true
    userId?: true
  }

  export type FactureMaxAggregateInputType = {
    id?: true
    date?: true
    titre?: true
    total?: true
    categorie?: true
    state?: true
    userId?: true
  }

  export type FactureCountAggregateInputType = {
    id?: true
    date?: true
    titre?: true
    total?: true
    categorie?: true
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
    categorie: string
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
    categorie?: boolean
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
    categorie?: boolean
    state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    titre?: boolean
    total?: boolean
    categorie?: boolean
    state?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectScalar = {
    id?: boolean
    date?: boolean
    titre?: boolean
    total?: boolean
    categorie?: boolean
    state?: boolean
    userId?: boolean
  }

  export type FactureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "titre" | "total" | "categorie" | "state" | "userId", ExtArgs["result"]["facture"]>
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
      categorie: string
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
    readonly categorie: FieldRef<"Facture", 'String'>
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
   * Model ItemSolaire
   */

  export type AggregateItemSolaire = {
    _count: ItemSolaireCountAggregateOutputType | null
    _avg: ItemSolaireAvgAggregateOutputType | null
    _sum: ItemSolaireSumAggregateOutputType | null
    _min: ItemSolaireMinAggregateOutputType | null
    _max: ItemSolaireMaxAggregateOutputType | null
  }

  export type ItemSolaireAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemSolaireSumAggregateOutputType = {
    id: number | null
  }

  export type ItemSolaireMinAggregateOutputType = {
    id: number | null
    intitule: string | null
    image: string | null
  }

  export type ItemSolaireMaxAggregateOutputType = {
    id: number | null
    intitule: string | null
    image: string | null
  }

  export type ItemSolaireCountAggregateOutputType = {
    id: number
    intitule: number
    image: number
    _all: number
  }


  export type ItemSolaireAvgAggregateInputType = {
    id?: true
  }

  export type ItemSolaireSumAggregateInputType = {
    id?: true
  }

  export type ItemSolaireMinAggregateInputType = {
    id?: true
    intitule?: true
    image?: true
  }

  export type ItemSolaireMaxAggregateInputType = {
    id?: true
    intitule?: true
    image?: true
  }

  export type ItemSolaireCountAggregateInputType = {
    id?: true
    intitule?: true
    image?: true
    _all?: true
  }

  export type ItemSolaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSolaire to aggregate.
     */
    where?: ItemSolaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSolaires to fetch.
     */
    orderBy?: ItemSolaireOrderByWithRelationInput | ItemSolaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemSolaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSolaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSolaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemSolaires
    **/
    _count?: true | ItemSolaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemSolaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSolaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemSolaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemSolaireMaxAggregateInputType
  }

  export type GetItemSolaireAggregateType<T extends ItemSolaireAggregateArgs> = {
        [P in keyof T & keyof AggregateItemSolaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemSolaire[P]>
      : GetScalarType<T[P], AggregateItemSolaire[P]>
  }




  export type ItemSolaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemSolaireWhereInput
    orderBy?: ItemSolaireOrderByWithAggregationInput | ItemSolaireOrderByWithAggregationInput[]
    by: ItemSolaireScalarFieldEnum[] | ItemSolaireScalarFieldEnum
    having?: ItemSolaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemSolaireCountAggregateInputType | true
    _avg?: ItemSolaireAvgAggregateInputType
    _sum?: ItemSolaireSumAggregateInputType
    _min?: ItemSolaireMinAggregateInputType
    _max?: ItemSolaireMaxAggregateInputType
  }

  export type ItemSolaireGroupByOutputType = {
    id: number
    intitule: string
    image: string
    _count: ItemSolaireCountAggregateOutputType | null
    _avg: ItemSolaireAvgAggregateOutputType | null
    _sum: ItemSolaireSumAggregateOutputType | null
    _min: ItemSolaireMinAggregateOutputType | null
    _max: ItemSolaireMaxAggregateOutputType | null
  }

  type GetItemSolaireGroupByPayload<T extends ItemSolaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemSolaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemSolaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemSolaireGroupByOutputType[P]>
            : GetScalarType<T[P], ItemSolaireGroupByOutputType[P]>
        }
      >
    >


  export type ItemSolaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intitule?: boolean
    image?: boolean
  }, ExtArgs["result"]["itemSolaire"]>

  export type ItemSolaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intitule?: boolean
    image?: boolean
  }, ExtArgs["result"]["itemSolaire"]>

  export type ItemSolaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intitule?: boolean
    image?: boolean
  }, ExtArgs["result"]["itemSolaire"]>

  export type ItemSolaireSelectScalar = {
    id?: boolean
    intitule?: boolean
    image?: boolean
  }

  export type ItemSolaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intitule" | "image", ExtArgs["result"]["itemSolaire"]>

  export type $ItemSolairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemSolaire"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      intitule: string
      image: string
    }, ExtArgs["result"]["itemSolaire"]>
    composites: {}
  }

  type ItemSolaireGetPayload<S extends boolean | null | undefined | ItemSolaireDefaultArgs> = $Result.GetResult<Prisma.$ItemSolairePayload, S>

  type ItemSolaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemSolaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemSolaireCountAggregateInputType | true
    }

  export interface ItemSolaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemSolaire'], meta: { name: 'ItemSolaire' } }
    /**
     * Find zero or one ItemSolaire that matches the filter.
     * @param {ItemSolaireFindUniqueArgs} args - Arguments to find a ItemSolaire
     * @example
     * // Get one ItemSolaire
     * const itemSolaire = await prisma.itemSolaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemSolaireFindUniqueArgs>(args: SelectSubset<T, ItemSolaireFindUniqueArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemSolaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemSolaireFindUniqueOrThrowArgs} args - Arguments to find a ItemSolaire
     * @example
     * // Get one ItemSolaire
     * const itemSolaire = await prisma.itemSolaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemSolaireFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemSolaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSolaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireFindFirstArgs} args - Arguments to find a ItemSolaire
     * @example
     * // Get one ItemSolaire
     * const itemSolaire = await prisma.itemSolaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemSolaireFindFirstArgs>(args?: SelectSubset<T, ItemSolaireFindFirstArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSolaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireFindFirstOrThrowArgs} args - Arguments to find a ItemSolaire
     * @example
     * // Get one ItemSolaire
     * const itemSolaire = await prisma.itemSolaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemSolaireFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemSolaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemSolaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemSolaires
     * const itemSolaires = await prisma.itemSolaire.findMany()
     * 
     * // Get first 10 ItemSolaires
     * const itemSolaires = await prisma.itemSolaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemSolaireWithIdOnly = await prisma.itemSolaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemSolaireFindManyArgs>(args?: SelectSubset<T, ItemSolaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemSolaire.
     * @param {ItemSolaireCreateArgs} args - Arguments to create a ItemSolaire.
     * @example
     * // Create one ItemSolaire
     * const ItemSolaire = await prisma.itemSolaire.create({
     *   data: {
     *     // ... data to create a ItemSolaire
     *   }
     * })
     * 
     */
    create<T extends ItemSolaireCreateArgs>(args: SelectSubset<T, ItemSolaireCreateArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemSolaires.
     * @param {ItemSolaireCreateManyArgs} args - Arguments to create many ItemSolaires.
     * @example
     * // Create many ItemSolaires
     * const itemSolaire = await prisma.itemSolaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemSolaireCreateManyArgs>(args?: SelectSubset<T, ItemSolaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemSolaires and returns the data saved in the database.
     * @param {ItemSolaireCreateManyAndReturnArgs} args - Arguments to create many ItemSolaires.
     * @example
     * // Create many ItemSolaires
     * const itemSolaire = await prisma.itemSolaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemSolaires and only return the `id`
     * const itemSolaireWithIdOnly = await prisma.itemSolaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemSolaireCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemSolaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemSolaire.
     * @param {ItemSolaireDeleteArgs} args - Arguments to delete one ItemSolaire.
     * @example
     * // Delete one ItemSolaire
     * const ItemSolaire = await prisma.itemSolaire.delete({
     *   where: {
     *     // ... filter to delete one ItemSolaire
     *   }
     * })
     * 
     */
    delete<T extends ItemSolaireDeleteArgs>(args: SelectSubset<T, ItemSolaireDeleteArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemSolaire.
     * @param {ItemSolaireUpdateArgs} args - Arguments to update one ItemSolaire.
     * @example
     * // Update one ItemSolaire
     * const itemSolaire = await prisma.itemSolaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemSolaireUpdateArgs>(args: SelectSubset<T, ItemSolaireUpdateArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemSolaires.
     * @param {ItemSolaireDeleteManyArgs} args - Arguments to filter ItemSolaires to delete.
     * @example
     * // Delete a few ItemSolaires
     * const { count } = await prisma.itemSolaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemSolaireDeleteManyArgs>(args?: SelectSubset<T, ItemSolaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSolaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemSolaires
     * const itemSolaire = await prisma.itemSolaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemSolaireUpdateManyArgs>(args: SelectSubset<T, ItemSolaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSolaires and returns the data updated in the database.
     * @param {ItemSolaireUpdateManyAndReturnArgs} args - Arguments to update many ItemSolaires.
     * @example
     * // Update many ItemSolaires
     * const itemSolaire = await prisma.itemSolaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemSolaires and only return the `id`
     * const itemSolaireWithIdOnly = await prisma.itemSolaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemSolaireUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemSolaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemSolaire.
     * @param {ItemSolaireUpsertArgs} args - Arguments to update or create a ItemSolaire.
     * @example
     * // Update or create a ItemSolaire
     * const itemSolaire = await prisma.itemSolaire.upsert({
     *   create: {
     *     // ... data to create a ItemSolaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemSolaire we want to update
     *   }
     * })
     */
    upsert<T extends ItemSolaireUpsertArgs>(args: SelectSubset<T, ItemSolaireUpsertArgs<ExtArgs>>): Prisma__ItemSolaireClient<$Result.GetResult<Prisma.$ItemSolairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemSolaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireCountArgs} args - Arguments to filter ItemSolaires to count.
     * @example
     * // Count the number of ItemSolaires
     * const count = await prisma.itemSolaire.count({
     *   where: {
     *     // ... the filter for the ItemSolaires we want to count
     *   }
     * })
    **/
    count<T extends ItemSolaireCountArgs>(
      args?: Subset<T, ItemSolaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemSolaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemSolaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemSolaireAggregateArgs>(args: Subset<T, ItemSolaireAggregateArgs>): Prisma.PrismaPromise<GetItemSolaireAggregateType<T>>

    /**
     * Group by ItemSolaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemSolaireGroupByArgs} args - Group by arguments.
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
      T extends ItemSolaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemSolaireGroupByArgs['orderBy'] }
        : { orderBy?: ItemSolaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemSolaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemSolaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemSolaire model
   */
  readonly fields: ItemSolaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemSolaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemSolaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ItemSolaire model
   */
  interface ItemSolaireFieldRefs {
    readonly id: FieldRef<"ItemSolaire", 'Int'>
    readonly intitule: FieldRef<"ItemSolaire", 'String'>
    readonly image: FieldRef<"ItemSolaire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemSolaire findUnique
   */
  export type ItemSolaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * Filter, which ItemSolaire to fetch.
     */
    where: ItemSolaireWhereUniqueInput
  }

  /**
   * ItemSolaire findUniqueOrThrow
   */
  export type ItemSolaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * Filter, which ItemSolaire to fetch.
     */
    where: ItemSolaireWhereUniqueInput
  }

  /**
   * ItemSolaire findFirst
   */
  export type ItemSolaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * Filter, which ItemSolaire to fetch.
     */
    where?: ItemSolaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSolaires to fetch.
     */
    orderBy?: ItemSolaireOrderByWithRelationInput | ItemSolaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSolaires.
     */
    cursor?: ItemSolaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSolaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSolaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSolaires.
     */
    distinct?: ItemSolaireScalarFieldEnum | ItemSolaireScalarFieldEnum[]
  }

  /**
   * ItemSolaire findFirstOrThrow
   */
  export type ItemSolaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * Filter, which ItemSolaire to fetch.
     */
    where?: ItemSolaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSolaires to fetch.
     */
    orderBy?: ItemSolaireOrderByWithRelationInput | ItemSolaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSolaires.
     */
    cursor?: ItemSolaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSolaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSolaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSolaires.
     */
    distinct?: ItemSolaireScalarFieldEnum | ItemSolaireScalarFieldEnum[]
  }

  /**
   * ItemSolaire findMany
   */
  export type ItemSolaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * Filter, which ItemSolaires to fetch.
     */
    where?: ItemSolaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSolaires to fetch.
     */
    orderBy?: ItemSolaireOrderByWithRelationInput | ItemSolaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemSolaires.
     */
    cursor?: ItemSolaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSolaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSolaires.
     */
    skip?: number
    distinct?: ItemSolaireScalarFieldEnum | ItemSolaireScalarFieldEnum[]
  }

  /**
   * ItemSolaire create
   */
  export type ItemSolaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * The data needed to create a ItemSolaire.
     */
    data: XOR<ItemSolaireCreateInput, ItemSolaireUncheckedCreateInput>
  }

  /**
   * ItemSolaire createMany
   */
  export type ItemSolaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemSolaires.
     */
    data: ItemSolaireCreateManyInput | ItemSolaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemSolaire createManyAndReturn
   */
  export type ItemSolaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * The data used to create many ItemSolaires.
     */
    data: ItemSolaireCreateManyInput | ItemSolaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemSolaire update
   */
  export type ItemSolaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * The data needed to update a ItemSolaire.
     */
    data: XOR<ItemSolaireUpdateInput, ItemSolaireUncheckedUpdateInput>
    /**
     * Choose, which ItemSolaire to update.
     */
    where: ItemSolaireWhereUniqueInput
  }

  /**
   * ItemSolaire updateMany
   */
  export type ItemSolaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemSolaires.
     */
    data: XOR<ItemSolaireUpdateManyMutationInput, ItemSolaireUncheckedUpdateManyInput>
    /**
     * Filter which ItemSolaires to update
     */
    where?: ItemSolaireWhereInput
    /**
     * Limit how many ItemSolaires to update.
     */
    limit?: number
  }

  /**
   * ItemSolaire updateManyAndReturn
   */
  export type ItemSolaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * The data used to update ItemSolaires.
     */
    data: XOR<ItemSolaireUpdateManyMutationInput, ItemSolaireUncheckedUpdateManyInput>
    /**
     * Filter which ItemSolaires to update
     */
    where?: ItemSolaireWhereInput
    /**
     * Limit how many ItemSolaires to update.
     */
    limit?: number
  }

  /**
   * ItemSolaire upsert
   */
  export type ItemSolaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * The filter to search for the ItemSolaire to update in case it exists.
     */
    where: ItemSolaireWhereUniqueInput
    /**
     * In case the ItemSolaire found by the `where` argument doesn't exist, create a new ItemSolaire with this data.
     */
    create: XOR<ItemSolaireCreateInput, ItemSolaireUncheckedCreateInput>
    /**
     * In case the ItemSolaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemSolaireUpdateInput, ItemSolaireUncheckedUpdateInput>
  }

  /**
   * ItemSolaire delete
   */
  export type ItemSolaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
    /**
     * Filter which ItemSolaire to delete.
     */
    where: ItemSolaireWhereUniqueInput
  }

  /**
   * ItemSolaire deleteMany
   */
  export type ItemSolaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSolaires to delete
     */
    where?: ItemSolaireWhereInput
    /**
     * Limit how many ItemSolaires to delete.
     */
    limit?: number
  }

  /**
   * ItemSolaire without action
   */
  export type ItemSolaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSolaire
     */
    select?: ItemSolaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSolaire
     */
    omit?: ItemSolaireOmit<ExtArgs> | null
  }


  /**
   * Model Pack
   */

  export type AggregatePack = {
    _count: PackCountAggregateOutputType | null
    _avg: PackAvgAggregateOutputType | null
    _sum: PackSumAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  export type PackAvgAggregateOutputType = {
    id: number | null
  }

  export type PackSumAggregateOutputType = {
    id: number | null
  }

  export type PackMinAggregateOutputType = {
    id: number | null
    intitule: string | null
  }

  export type PackMaxAggregateOutputType = {
    id: number | null
    intitule: string | null
  }

  export type PackCountAggregateOutputType = {
    id: number
    intitule: number
    _all: number
  }


  export type PackAvgAggregateInputType = {
    id?: true
  }

  export type PackSumAggregateInputType = {
    id?: true
  }

  export type PackMinAggregateInputType = {
    id?: true
    intitule?: true
  }

  export type PackMaxAggregateInputType = {
    id?: true
    intitule?: true
  }

  export type PackCountAggregateInputType = {
    id?: true
    intitule?: true
    _all?: true
  }

  export type PackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pack to aggregate.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packs
    **/
    _count?: true | PackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackMaxAggregateInputType
  }

  export type GetPackAggregateType<T extends PackAggregateArgs> = {
        [P in keyof T & keyof AggregatePack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePack[P]>
      : GetScalarType<T[P], AggregatePack[P]>
  }




  export type PackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
    orderBy?: PackOrderByWithAggregationInput | PackOrderByWithAggregationInput[]
    by: PackScalarFieldEnum[] | PackScalarFieldEnum
    having?: PackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackCountAggregateInputType | true
    _avg?: PackAvgAggregateInputType
    _sum?: PackSumAggregateInputType
    _min?: PackMinAggregateInputType
    _max?: PackMaxAggregateInputType
  }

  export type PackGroupByOutputType = {
    id: number
    intitule: string
    _count: PackCountAggregateOutputType | null
    _avg: PackAvgAggregateOutputType | null
    _sum: PackSumAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  type GetPackGroupByPayload<T extends PackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackGroupByOutputType[P]>
            : GetScalarType<T[P], PackGroupByOutputType[P]>
        }
      >
    >


  export type PackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intitule?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intitule?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intitule?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectScalar = {
    id?: boolean
    intitule?: boolean
  }

  export type PackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intitule", ExtArgs["result"]["pack"]>

  export type $PackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pack"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      intitule: string
    }, ExtArgs["result"]["pack"]>
    composites: {}
  }

  type PackGetPayload<S extends boolean | null | undefined | PackDefaultArgs> = $Result.GetResult<Prisma.$PackPayload, S>

  type PackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackCountAggregateInputType | true
    }

  export interface PackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pack'], meta: { name: 'Pack' } }
    /**
     * Find zero or one Pack that matches the filter.
     * @param {PackFindUniqueArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackFindUniqueArgs>(args: SelectSubset<T, PackFindUniqueArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackFindUniqueOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackFindUniqueOrThrowArgs>(args: SelectSubset<T, PackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackFindFirstArgs>(args?: SelectSubset<T, PackFindFirstArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackFindFirstOrThrowArgs>(args?: SelectSubset<T, PackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packs
     * const packs = await prisma.pack.findMany()
     * 
     * // Get first 10 Packs
     * const packs = await prisma.pack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packWithIdOnly = await prisma.pack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackFindManyArgs>(args?: SelectSubset<T, PackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pack.
     * @param {PackCreateArgs} args - Arguments to create a Pack.
     * @example
     * // Create one Pack
     * const Pack = await prisma.pack.create({
     *   data: {
     *     // ... data to create a Pack
     *   }
     * })
     * 
     */
    create<T extends PackCreateArgs>(args: SelectSubset<T, PackCreateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packs.
     * @param {PackCreateManyArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackCreateManyArgs>(args?: SelectSubset<T, PackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packs and returns the data saved in the database.
     * @param {PackCreateManyAndReturnArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackCreateManyAndReturnArgs>(args?: SelectSubset<T, PackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pack.
     * @param {PackDeleteArgs} args - Arguments to delete one Pack.
     * @example
     * // Delete one Pack
     * const Pack = await prisma.pack.delete({
     *   where: {
     *     // ... filter to delete one Pack
     *   }
     * })
     * 
     */
    delete<T extends PackDeleteArgs>(args: SelectSubset<T, PackDeleteArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pack.
     * @param {PackUpdateArgs} args - Arguments to update one Pack.
     * @example
     * // Update one Pack
     * const pack = await prisma.pack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackUpdateArgs>(args: SelectSubset<T, PackUpdateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packs.
     * @param {PackDeleteManyArgs} args - Arguments to filter Packs to delete.
     * @example
     * // Delete a few Packs
     * const { count } = await prisma.pack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackDeleteManyArgs>(args?: SelectSubset<T, PackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackUpdateManyArgs>(args: SelectSubset<T, PackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs and returns the data updated in the database.
     * @param {PackUpdateManyAndReturnArgs} args - Arguments to update many Packs.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackUpdateManyAndReturnArgs>(args: SelectSubset<T, PackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pack.
     * @param {PackUpsertArgs} args - Arguments to update or create a Pack.
     * @example
     * // Update or create a Pack
     * const pack = await prisma.pack.upsert({
     *   create: {
     *     // ... data to create a Pack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pack we want to update
     *   }
     * })
     */
    upsert<T extends PackUpsertArgs>(args: SelectSubset<T, PackUpsertArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackCountArgs} args - Arguments to filter Packs to count.
     * @example
     * // Count the number of Packs
     * const count = await prisma.pack.count({
     *   where: {
     *     // ... the filter for the Packs we want to count
     *   }
     * })
    **/
    count<T extends PackCountArgs>(
      args?: Subset<T, PackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackAggregateArgs>(args: Subset<T, PackAggregateArgs>): Prisma.PrismaPromise<GetPackAggregateType<T>>

    /**
     * Group by Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackGroupByArgs} args - Group by arguments.
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
      T extends PackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackGroupByArgs['orderBy'] }
        : { orderBy?: PackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pack model
   */
  readonly fields: PackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Pack model
   */
  interface PackFieldRefs {
    readonly id: FieldRef<"Pack", 'Int'>
    readonly intitule: FieldRef<"Pack", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pack findUnique
   */
  export type PackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findUniqueOrThrow
   */
  export type PackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findFirst
   */
  export type PackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findFirstOrThrow
   */
  export type PackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findMany
   */
  export type PackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack create
   */
  export type PackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data needed to create a Pack.
     */
    data: XOR<PackCreateInput, PackUncheckedCreateInput>
  }

  /**
   * Pack createMany
   */
  export type PackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack createManyAndReturn
   */
  export type PackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack update
   */
  export type PackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data needed to update a Pack.
     */
    data: XOR<PackUpdateInput, PackUncheckedUpdateInput>
    /**
     * Choose, which Pack to update.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack updateMany
   */
  export type PackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Pack updateManyAndReturn
   */
  export type PackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Pack upsert
   */
  export type PackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The filter to search for the Pack to update in case it exists.
     */
    where: PackWhereUniqueInput
    /**
     * In case the Pack found by the `where` argument doesn't exist, create a new Pack with this data.
     */
    create: XOR<PackCreateInput, PackUncheckedCreateInput>
    /**
     * In case the Pack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackUpdateInput, PackUncheckedUpdateInput>
  }

  /**
   * Pack delete
   */
  export type PackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Filter which Pack to delete.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack deleteMany
   */
  export type PackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to delete
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to delete.
     */
    limit?: number
  }

  /**
   * Pack without action
   */
  export type PackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
  }


  /**
   * Model FileGroup
   */

  export type AggregateFileGroup = {
    _count: FileGroupCountAggregateOutputType | null
    _avg: FileGroupAvgAggregateOutputType | null
    _sum: FileGroupSumAggregateOutputType | null
    _min: FileGroupMinAggregateOutputType | null
    _max: FileGroupMaxAggregateOutputType | null
  }

  export type FileGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type FileGroupSumAggregateOutputType = {
    id: number | null
  }

  export type FileGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type FileGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type FileGroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type FileGroupAvgAggregateInputType = {
    id?: true
  }

  export type FileGroupSumAggregateInputType = {
    id?: true
  }

  export type FileGroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type FileGroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type FileGroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type FileGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileGroup to aggregate.
     */
    where?: FileGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileGroups to fetch.
     */
    orderBy?: FileGroupOrderByWithRelationInput | FileGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileGroups
    **/
    _count?: true | FileGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileGroupMaxAggregateInputType
  }

  export type GetFileGroupAggregateType<T extends FileGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateFileGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileGroup[P]>
      : GetScalarType<T[P], AggregateFileGroup[P]>
  }




  export type FileGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileGroupWhereInput
    orderBy?: FileGroupOrderByWithAggregationInput | FileGroupOrderByWithAggregationInput[]
    by: FileGroupScalarFieldEnum[] | FileGroupScalarFieldEnum
    having?: FileGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileGroupCountAggregateInputType | true
    _avg?: FileGroupAvgAggregateInputType
    _sum?: FileGroupSumAggregateInputType
    _min?: FileGroupMinAggregateInputType
    _max?: FileGroupMaxAggregateInputType
  }

  export type FileGroupGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: FileGroupCountAggregateOutputType | null
    _avg: FileGroupAvgAggregateOutputType | null
    _sum: FileGroupSumAggregateOutputType | null
    _min: FileGroupMinAggregateOutputType | null
    _max: FileGroupMaxAggregateOutputType | null
  }

  type GetFileGroupGroupByPayload<T extends FileGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupGroupByOutputType[P]>
        }
      >
    >


  export type FileGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    files?: boolean | FileGroup$filesArgs<ExtArgs>
    _count?: boolean | FileGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileGroup"]>

  export type FileGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fileGroup"]>

  export type FileGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fileGroup"]>

  export type FileGroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type FileGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["fileGroup"]>
  export type FileGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | FileGroup$filesArgs<ExtArgs>
    _count?: boolean | FileGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FileGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileGroup"
    objects: {
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["fileGroup"]>
    composites: {}
  }

  type FileGroupGetPayload<S extends boolean | null | undefined | FileGroupDefaultArgs> = $Result.GetResult<Prisma.$FileGroupPayload, S>

  type FileGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileGroupCountAggregateInputType | true
    }

  export interface FileGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileGroup'], meta: { name: 'FileGroup' } }
    /**
     * Find zero or one FileGroup that matches the filter.
     * @param {FileGroupFindUniqueArgs} args - Arguments to find a FileGroup
     * @example
     * // Get one FileGroup
     * const fileGroup = await prisma.fileGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileGroupFindUniqueArgs>(args: SelectSubset<T, FileGroupFindUniqueArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileGroupFindUniqueOrThrowArgs} args - Arguments to find a FileGroup
     * @example
     * // Get one FileGroup
     * const fileGroup = await prisma.fileGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, FileGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupFindFirstArgs} args - Arguments to find a FileGroup
     * @example
     * // Get one FileGroup
     * const fileGroup = await prisma.fileGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileGroupFindFirstArgs>(args?: SelectSubset<T, FileGroupFindFirstArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupFindFirstOrThrowArgs} args - Arguments to find a FileGroup
     * @example
     * // Get one FileGroup
     * const fileGroup = await prisma.fileGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, FileGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileGroups
     * const fileGroups = await prisma.fileGroup.findMany()
     * 
     * // Get first 10 FileGroups
     * const fileGroups = await prisma.fileGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileGroupWithIdOnly = await prisma.fileGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileGroupFindManyArgs>(args?: SelectSubset<T, FileGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileGroup.
     * @param {FileGroupCreateArgs} args - Arguments to create a FileGroup.
     * @example
     * // Create one FileGroup
     * const FileGroup = await prisma.fileGroup.create({
     *   data: {
     *     // ... data to create a FileGroup
     *   }
     * })
     * 
     */
    create<T extends FileGroupCreateArgs>(args: SelectSubset<T, FileGroupCreateArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileGroups.
     * @param {FileGroupCreateManyArgs} args - Arguments to create many FileGroups.
     * @example
     * // Create many FileGroups
     * const fileGroup = await prisma.fileGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileGroupCreateManyArgs>(args?: SelectSubset<T, FileGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileGroups and returns the data saved in the database.
     * @param {FileGroupCreateManyAndReturnArgs} args - Arguments to create many FileGroups.
     * @example
     * // Create many FileGroups
     * const fileGroup = await prisma.fileGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileGroups and only return the `id`
     * const fileGroupWithIdOnly = await prisma.fileGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, FileGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileGroup.
     * @param {FileGroupDeleteArgs} args - Arguments to delete one FileGroup.
     * @example
     * // Delete one FileGroup
     * const FileGroup = await prisma.fileGroup.delete({
     *   where: {
     *     // ... filter to delete one FileGroup
     *   }
     * })
     * 
     */
    delete<T extends FileGroupDeleteArgs>(args: SelectSubset<T, FileGroupDeleteArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileGroup.
     * @param {FileGroupUpdateArgs} args - Arguments to update one FileGroup.
     * @example
     * // Update one FileGroup
     * const fileGroup = await prisma.fileGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileGroupUpdateArgs>(args: SelectSubset<T, FileGroupUpdateArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileGroups.
     * @param {FileGroupDeleteManyArgs} args - Arguments to filter FileGroups to delete.
     * @example
     * // Delete a few FileGroups
     * const { count } = await prisma.fileGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileGroupDeleteManyArgs>(args?: SelectSubset<T, FileGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileGroups
     * const fileGroup = await prisma.fileGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileGroupUpdateManyArgs>(args: SelectSubset<T, FileGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileGroups and returns the data updated in the database.
     * @param {FileGroupUpdateManyAndReturnArgs} args - Arguments to update many FileGroups.
     * @example
     * // Update many FileGroups
     * const fileGroup = await prisma.fileGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileGroups and only return the `id`
     * const fileGroupWithIdOnly = await prisma.fileGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, FileGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileGroup.
     * @param {FileGroupUpsertArgs} args - Arguments to update or create a FileGroup.
     * @example
     * // Update or create a FileGroup
     * const fileGroup = await prisma.fileGroup.upsert({
     *   create: {
     *     // ... data to create a FileGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileGroup we want to update
     *   }
     * })
     */
    upsert<T extends FileGroupUpsertArgs>(args: SelectSubset<T, FileGroupUpsertArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupCountArgs} args - Arguments to filter FileGroups to count.
     * @example
     * // Count the number of FileGroups
     * const count = await prisma.fileGroup.count({
     *   where: {
     *     // ... the filter for the FileGroups we want to count
     *   }
     * })
    **/
    count<T extends FileGroupCountArgs>(
      args?: Subset<T, FileGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileGroupAggregateArgs>(args: Subset<T, FileGroupAggregateArgs>): Prisma.PrismaPromise<GetFileGroupAggregateType<T>>

    /**
     * Group by FileGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupGroupByArgs} args - Group by arguments.
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
      T extends FileGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileGroup model
   */
  readonly fields: FileGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends FileGroup$filesArgs<ExtArgs> = {}>(args?: Subset<T, FileGroup$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FileGroup model
   */
  interface FileGroupFieldRefs {
    readonly id: FieldRef<"FileGroup", 'Int'>
    readonly name: FieldRef<"FileGroup", 'String'>
    readonly createdAt: FieldRef<"FileGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileGroup findUnique
   */
  export type FileGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * Filter, which FileGroup to fetch.
     */
    where: FileGroupWhereUniqueInput
  }

  /**
   * FileGroup findUniqueOrThrow
   */
  export type FileGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * Filter, which FileGroup to fetch.
     */
    where: FileGroupWhereUniqueInput
  }

  /**
   * FileGroup findFirst
   */
  export type FileGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * Filter, which FileGroup to fetch.
     */
    where?: FileGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileGroups to fetch.
     */
    orderBy?: FileGroupOrderByWithRelationInput | FileGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileGroups.
     */
    cursor?: FileGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileGroups.
     */
    distinct?: FileGroupScalarFieldEnum | FileGroupScalarFieldEnum[]
  }

  /**
   * FileGroup findFirstOrThrow
   */
  export type FileGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * Filter, which FileGroup to fetch.
     */
    where?: FileGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileGroups to fetch.
     */
    orderBy?: FileGroupOrderByWithRelationInput | FileGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileGroups.
     */
    cursor?: FileGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileGroups.
     */
    distinct?: FileGroupScalarFieldEnum | FileGroupScalarFieldEnum[]
  }

  /**
   * FileGroup findMany
   */
  export type FileGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * Filter, which FileGroups to fetch.
     */
    where?: FileGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileGroups to fetch.
     */
    orderBy?: FileGroupOrderByWithRelationInput | FileGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileGroups.
     */
    cursor?: FileGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileGroups.
     */
    skip?: number
    distinct?: FileGroupScalarFieldEnum | FileGroupScalarFieldEnum[]
  }

  /**
   * FileGroup create
   */
  export type FileGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a FileGroup.
     */
    data: XOR<FileGroupCreateInput, FileGroupUncheckedCreateInput>
  }

  /**
   * FileGroup createMany
   */
  export type FileGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileGroups.
     */
    data: FileGroupCreateManyInput | FileGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileGroup createManyAndReturn
   */
  export type FileGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * The data used to create many FileGroups.
     */
    data: FileGroupCreateManyInput | FileGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileGroup update
   */
  export type FileGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a FileGroup.
     */
    data: XOR<FileGroupUpdateInput, FileGroupUncheckedUpdateInput>
    /**
     * Choose, which FileGroup to update.
     */
    where: FileGroupWhereUniqueInput
  }

  /**
   * FileGroup updateMany
   */
  export type FileGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileGroups.
     */
    data: XOR<FileGroupUpdateManyMutationInput, FileGroupUncheckedUpdateManyInput>
    /**
     * Filter which FileGroups to update
     */
    where?: FileGroupWhereInput
    /**
     * Limit how many FileGroups to update.
     */
    limit?: number
  }

  /**
   * FileGroup updateManyAndReturn
   */
  export type FileGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * The data used to update FileGroups.
     */
    data: XOR<FileGroupUpdateManyMutationInput, FileGroupUncheckedUpdateManyInput>
    /**
     * Filter which FileGroups to update
     */
    where?: FileGroupWhereInput
    /**
     * Limit how many FileGroups to update.
     */
    limit?: number
  }

  /**
   * FileGroup upsert
   */
  export type FileGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the FileGroup to update in case it exists.
     */
    where: FileGroupWhereUniqueInput
    /**
     * In case the FileGroup found by the `where` argument doesn't exist, create a new FileGroup with this data.
     */
    create: XOR<FileGroupCreateInput, FileGroupUncheckedCreateInput>
    /**
     * In case the FileGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileGroupUpdateInput, FileGroupUncheckedUpdateInput>
  }

  /**
   * FileGroup delete
   */
  export type FileGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
    /**
     * Filter which FileGroup to delete.
     */
    where: FileGroupWhereUniqueInput
  }

  /**
   * FileGroup deleteMany
   */
  export type FileGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileGroups to delete
     */
    where?: FileGroupWhereInput
    /**
     * Limit how many FileGroups to delete.
     */
    limit?: number
  }

  /**
   * FileGroup.files
   */
  export type FileGroup$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * FileGroup without action
   */
  export type FileGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileGroup
     */
    select?: FileGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileGroup
     */
    omit?: FileGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileGroupInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    size: number | null
    groupId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    size: number | null
    groupId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    name: string | null
    mimeType: string | null
    size: number | null
    data: Uint8Array | null
    createdAt: Date | null
    groupId: number | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    mimeType: string | null
    size: number | null
    data: Uint8Array | null
    createdAt: Date | null
    groupId: number | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    name: number
    mimeType: number
    size: number
    data: number
    createdAt: number
    groupId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    size?: true
    groupId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    size?: true
    groupId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    size?: true
    data?: true
    createdAt?: true
    groupId?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    size?: true
    data?: true
    createdAt?: true
    groupId?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    size?: true
    data?: true
    createdAt?: true
    groupId?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt: Date
    groupId: number
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
    groupId?: boolean
    group?: boolean | FileGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
    groupId?: boolean
    group?: boolean | FileGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
    groupId?: boolean
    group?: boolean | FileGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    data?: boolean
    createdAt?: boolean
    groupId?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mimeType" | "size" | "data" | "createdAt" | "groupId", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | FileGroupDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | FileGroupDefaultArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | FileGroupDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      group: Prisma.$FileGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      mimeType: string
      size: number
      data: Uint8Array
      createdAt: Date
      groupId: number
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends FileGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileGroupDefaultArgs<ExtArgs>>): Prisma__FileGroupClient<$Result.GetResult<Prisma.$FileGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly name: FieldRef<"File", 'String'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly data: FieldRef<"File", 'Bytes'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly groupId: FieldRef<"File", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
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
    idUserCat: 'idUserCat',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creatorId: 'creatorId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const PrivateMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type PrivateMessageScalarFieldEnum = (typeof PrivateMessageScalarFieldEnum)[keyof typeof PrivateMessageScalarFieldEnum]


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
    categorie: 'categorie',
    state: 'state',
    userId: 'userId'
  };

  export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum]


  export const ItemSolaireScalarFieldEnum: {
    id: 'id',
    intitule: 'intitule',
    image: 'image'
  };

  export type ItemSolaireScalarFieldEnum = (typeof ItemSolaireScalarFieldEnum)[keyof typeof ItemSolaireScalarFieldEnum]


  export const PackScalarFieldEnum: {
    id: 'id',
    intitule: 'intitule'
  };

  export type PackScalarFieldEnum = (typeof PackScalarFieldEnum)[keyof typeof PackScalarFieldEnum]


  export const FileGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type FileGroupScalarFieldEnum = (typeof FileGroupScalarFieldEnum)[keyof typeof FileGroupScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mimeType: 'mimeType',
    size: 'size',
    data: 'data',
    createdAt: 'createdAt',
    groupId: 'groupId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


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
    avatar?: StringNullableFilter<"User"> | string | null
    factures?: FactureListRelationFilter
    cat?: XOR<UserCategorieScalarRelationFilter, UserCategorieWhereInput>
    messagesSent?: PrivateMessageListRelationFilter
    messagesReceived?: PrivateMessageListRelationFilter
    groups?: GroupListRelationFilter
    createdGroups?: GroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
    avatar?: SortOrderInput | SortOrder
    factures?: FactureOrderByRelationAggregateInput
    cat?: UserCategorieOrderByWithRelationInput
    messagesSent?: PrivateMessageOrderByRelationAggregateInput
    messagesReceived?: PrivateMessageOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    createdGroups?: GroupOrderByRelationAggregateInput
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
    avatar?: StringNullableFilter<"User"> | string | null
    factures?: FactureListRelationFilter
    cat?: XOR<UserCategorieScalarRelationFilter, UserCategorieWhereInput>
    messagesSent?: PrivateMessageListRelationFilter
    messagesReceived?: PrivateMessageListRelationFilter
    groups?: GroupListRelationFilter
    createdGroups?: GroupListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
    avatar?: SortOrderInput | SortOrder
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
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    creatorId?: IntFilter<"Group"> | number
    users?: UserListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    users?: UserOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    creatorId?: IntFilter<"Group"> | number
    users?: UserListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    creatorId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type PrivateMessageWhereInput = {
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    id?: IntFilter<"PrivateMessage"> | number
    content?: StringFilter<"PrivateMessage"> | string
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    senderId?: IntFilter<"PrivateMessage"> | number
    receiverId?: IntFilter<"PrivateMessage"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrivateMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type PrivateMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    content?: StringFilter<"PrivateMessage"> | string
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    senderId?: IntFilter<"PrivateMessage"> | number
    receiverId?: IntFilter<"PrivateMessage"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PrivateMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: PrivateMessageCountOrderByAggregateInput
    _avg?: PrivateMessageAvgOrderByAggregateInput
    _max?: PrivateMessageMaxOrderByAggregateInput
    _min?: PrivateMessageMinOrderByAggregateInput
    _sum?: PrivateMessageSumOrderByAggregateInput
  }

  export type PrivateMessageScalarWhereWithAggregatesInput = {
    AND?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    OR?: PrivateMessageScalarWhereWithAggregatesInput[]
    NOT?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrivateMessage"> | number
    content?: StringWithAggregatesFilter<"PrivateMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PrivateMessage"> | Date | string
    senderId?: IntWithAggregatesFilter<"PrivateMessage"> | number
    receiverId?: IntWithAggregatesFilter<"PrivateMessage"> | number
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
    categorie?: StringFilter<"Facture"> | string
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
    categorie?: SortOrder
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
    categorie?: StringFilter<"Facture"> | string
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
    categorie?: SortOrder
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
    categorie?: StringWithAggregatesFilter<"Facture"> | string
    state?: StringWithAggregatesFilter<"Facture"> | string
    userId?: IntWithAggregatesFilter<"Facture"> | number
  }

  export type ItemSolaireWhereInput = {
    AND?: ItemSolaireWhereInput | ItemSolaireWhereInput[]
    OR?: ItemSolaireWhereInput[]
    NOT?: ItemSolaireWhereInput | ItemSolaireWhereInput[]
    id?: IntFilter<"ItemSolaire"> | number
    intitule?: StringFilter<"ItemSolaire"> | string
    image?: StringFilter<"ItemSolaire"> | string
  }

  export type ItemSolaireOrderByWithRelationInput = {
    id?: SortOrder
    intitule?: SortOrder
    image?: SortOrder
  }

  export type ItemSolaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemSolaireWhereInput | ItemSolaireWhereInput[]
    OR?: ItemSolaireWhereInput[]
    NOT?: ItemSolaireWhereInput | ItemSolaireWhereInput[]
    intitule?: StringFilter<"ItemSolaire"> | string
    image?: StringFilter<"ItemSolaire"> | string
  }, "id">

  export type ItemSolaireOrderByWithAggregationInput = {
    id?: SortOrder
    intitule?: SortOrder
    image?: SortOrder
    _count?: ItemSolaireCountOrderByAggregateInput
    _avg?: ItemSolaireAvgOrderByAggregateInput
    _max?: ItemSolaireMaxOrderByAggregateInput
    _min?: ItemSolaireMinOrderByAggregateInput
    _sum?: ItemSolaireSumOrderByAggregateInput
  }

  export type ItemSolaireScalarWhereWithAggregatesInput = {
    AND?: ItemSolaireScalarWhereWithAggregatesInput | ItemSolaireScalarWhereWithAggregatesInput[]
    OR?: ItemSolaireScalarWhereWithAggregatesInput[]
    NOT?: ItemSolaireScalarWhereWithAggregatesInput | ItemSolaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemSolaire"> | number
    intitule?: StringWithAggregatesFilter<"ItemSolaire"> | string
    image?: StringWithAggregatesFilter<"ItemSolaire"> | string
  }

  export type PackWhereInput = {
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    id?: IntFilter<"Pack"> | number
    intitule?: StringFilter<"Pack"> | string
  }

  export type PackOrderByWithRelationInput = {
    id?: SortOrder
    intitule?: SortOrder
  }

  export type PackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    intitule?: StringFilter<"Pack"> | string
  }, "id">

  export type PackOrderByWithAggregationInput = {
    id?: SortOrder
    intitule?: SortOrder
    _count?: PackCountOrderByAggregateInput
    _avg?: PackAvgOrderByAggregateInput
    _max?: PackMaxOrderByAggregateInput
    _min?: PackMinOrderByAggregateInput
    _sum?: PackSumOrderByAggregateInput
  }

  export type PackScalarWhereWithAggregatesInput = {
    AND?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    OR?: PackScalarWhereWithAggregatesInput[]
    NOT?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pack"> | number
    intitule?: StringWithAggregatesFilter<"Pack"> | string
  }

  export type FileGroupWhereInput = {
    AND?: FileGroupWhereInput | FileGroupWhereInput[]
    OR?: FileGroupWhereInput[]
    NOT?: FileGroupWhereInput | FileGroupWhereInput[]
    id?: IntFilter<"FileGroup"> | number
    name?: StringFilter<"FileGroup"> | string
    createdAt?: DateTimeFilter<"FileGroup"> | Date | string
    files?: FileListRelationFilter
  }

  export type FileGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    files?: FileOrderByRelationAggregateInput
  }

  export type FileGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileGroupWhereInput | FileGroupWhereInput[]
    OR?: FileGroupWhereInput[]
    NOT?: FileGroupWhereInput | FileGroupWhereInput[]
    name?: StringFilter<"FileGroup"> | string
    createdAt?: DateTimeFilter<"FileGroup"> | Date | string
    files?: FileListRelationFilter
  }, "id">

  export type FileGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: FileGroupCountOrderByAggregateInput
    _avg?: FileGroupAvgOrderByAggregateInput
    _max?: FileGroupMaxOrderByAggregateInput
    _min?: FileGroupMinOrderByAggregateInput
    _sum?: FileGroupSumOrderByAggregateInput
  }

  export type FileGroupScalarWhereWithAggregatesInput = {
    AND?: FileGroupScalarWhereWithAggregatesInput | FileGroupScalarWhereWithAggregatesInput[]
    OR?: FileGroupScalarWhereWithAggregatesInput[]
    NOT?: FileGroupScalarWhereWithAggregatesInput | FileGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FileGroup"> | number
    name?: StringWithAggregatesFilter<"FileGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileGroup"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    name?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    data?: BytesFilter<"File"> | Uint8Array
    createdAt?: DateTimeFilter<"File"> | Date | string
    groupId?: IntFilter<"File"> | number
    group?: XOR<FileGroupScalarRelationFilter, FileGroupWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
    group?: FileGroupOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    name?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    data?: BytesFilter<"File"> | Uint8Array
    createdAt?: DateTimeFilter<"File"> | Date | string
    groupId?: IntFilter<"File"> | number
    group?: XOR<FileGroupScalarRelationFilter, FileGroupWhereInput>
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    name?: StringWithAggregatesFilter<"File"> | string
    mimeType?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    data?: BytesWithAggregatesFilter<"File"> | Uint8Array
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    groupId?: IntWithAggregatesFilter<"File"> | number
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
    avatar?: string | null
    factures?: FactureCreateNestedManyWithoutUserInput
    cat: UserCategorieCreateNestedOneWithoutUsersInput
    messagesSent?: PrivateMessageCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageCreateNestedManyWithoutReceiverInput
    groups?: GroupCreateNestedManyWithoutUsersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUpdateManyWithoutUserNestedInput
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
    messagesSent?: PrivateMessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    groups?: GroupUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutGroupsInput
    creator: UserCreateNestedOneWithoutCreatedGroupsInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    creatorId: number
    users?: UserUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutGroupsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    creatorId: number
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageCreateInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type PrivateMessageUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    receiverId: number
  }

  export type PrivateMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type PrivateMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    receiverId: number
  }

  export type PrivateMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
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
    categorie: string
    state: string
    elements?: FactureElementCreateNestedManyWithoutFactureInput
    user: UserCreateNestedOneWithoutFacturesInput
  }

  export type FactureUncheckedCreateInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    categorie: string
    state: string
    userId: number
    elements?: FactureElementUncheckedCreateNestedManyWithoutFactureInput
  }

  export type FactureUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    elements?: FactureElementUpdateManyWithoutFactureNestedInput
    user?: UserUpdateOneRequiredWithoutFacturesNestedInput
  }

  export type FactureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    elements?: FactureElementUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type FactureCreateManyInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    categorie: string
    state: string
    userId: number
  }

  export type FactureUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type FactureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemSolaireCreateInput = {
    intitule: string
    image: string
  }

  export type ItemSolaireUncheckedCreateInput = {
    id?: number
    intitule: string
    image: string
  }

  export type ItemSolaireUpdateInput = {
    intitule?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSolaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    intitule?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSolaireCreateManyInput = {
    id?: number
    intitule: string
    image: string
  }

  export type ItemSolaireUpdateManyMutationInput = {
    intitule?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ItemSolaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    intitule?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type PackCreateInput = {
    intitule: string
  }

  export type PackUncheckedCreateInput = {
    id?: number
    intitule: string
  }

  export type PackUpdateInput = {
    intitule?: StringFieldUpdateOperationsInput | string
  }

  export type PackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    intitule?: StringFieldUpdateOperationsInput | string
  }

  export type PackCreateManyInput = {
    id?: number
    intitule: string
  }

  export type PackUpdateManyMutationInput = {
    intitule?: StringFieldUpdateOperationsInput | string
  }

  export type PackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    intitule?: StringFieldUpdateOperationsInput | string
  }

  export type FileGroupCreateInput = {
    name: string
    createdAt?: Date | string
    files?: FileCreateNestedManyWithoutGroupInput
  }

  export type FileGroupUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    files?: FileUncheckedCreateNestedManyWithoutGroupInput
  }

  export type FileGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUpdateManyWithoutGroupNestedInput
  }

  export type FileGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type FileGroupCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type FileGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt?: Date | string
    group: FileGroupCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt?: Date | string
    groupId: number
  }

  export type FileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: FileGroupUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type FileCreateManyInput = {
    id?: number
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt?: Date | string
    groupId: number
  }

  export type FileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type PrivateMessageListRelationFilter = {
    every?: PrivateMessageWhereInput
    some?: PrivateMessageWhereInput
    none?: PrivateMessageWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FactureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
    avatar?: SortOrder
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
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    idUserCat?: SortOrder
    avatar?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    idUserCat?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
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

  export type PrivateMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type PrivateMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type PrivateMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type PrivateMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type PrivateMessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
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

  export type FactureElementListRelationFilter = {
    every?: FactureElementWhereInput
    some?: FactureElementWhereInput
    none?: FactureElementWhereInput
  }

  export type FactureElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactureCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    categorie?: SortOrder
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
    categorie?: SortOrder
    state?: SortOrder
    userId?: SortOrder
  }

  export type FactureMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    titre?: SortOrder
    total?: SortOrder
    categorie?: SortOrder
    state?: SortOrder
    userId?: SortOrder
  }

  export type FactureSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type ItemSolaireCountOrderByAggregateInput = {
    id?: SortOrder
    intitule?: SortOrder
    image?: SortOrder
  }

  export type ItemSolaireAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemSolaireMaxOrderByAggregateInput = {
    id?: SortOrder
    intitule?: SortOrder
    image?: SortOrder
  }

  export type ItemSolaireMinOrderByAggregateInput = {
    id?: SortOrder
    intitule?: SortOrder
    image?: SortOrder
  }

  export type ItemSolaireSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PackCountOrderByAggregateInput = {
    id?: SortOrder
    intitule?: SortOrder
  }

  export type PackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PackMaxOrderByAggregateInput = {
    id?: SortOrder
    intitule?: SortOrder
  }

  export type PackMinOrderByAggregateInput = {
    id?: SortOrder
    intitule?: SortOrder
  }

  export type PackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FileGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FileGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FileGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FileGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type FileGroupScalarRelationFilter = {
    is?: FileGroupWhereInput
    isNot?: FileGroupWhereInput
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    groupId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    groupId?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    groupId?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type PrivateMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type FactureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FactureCreateWithoutUserInput, FactureUncheckedCreateWithoutUserInput> | FactureCreateWithoutUserInput[] | FactureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutUserInput | FactureCreateOrConnectWithoutUserInput[]
    createMany?: FactureCreateManyUserInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type PrivateMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutSenderInput | PrivateMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutSenderInput | PrivateMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutSenderInput | PrivateMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput | PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput | PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutReceiverInput | PrivateMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUsersInput | GroupUpsertWithWhereUniqueWithoutUsersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUsersInput | GroupUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUsersInput | GroupUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput | GroupUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCreatorInput | GroupUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput | GroupUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
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

  export type PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutSenderInput | PrivateMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutSenderInput | PrivateMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutSenderInput | PrivateMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput | PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput | PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutReceiverInput | PrivateMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput> | GroupCreateWithoutUsersInput[] | GroupUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput | GroupCreateOrConnectWithoutUsersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUsersInput | GroupUpsertWithWhereUniqueWithoutUsersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUsersInput | GroupUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUsersInput | GroupUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput | GroupUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCreatorInput | GroupUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput | GroupUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedGroupsInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput | UserUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupsInput | UserUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupsInput | UserUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    upsert?: UserUpsertWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedGroupsInput, UserUpdateWithoutCreatedGroupsInput>, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type UserUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput | UserUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupsInput | UserUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupsInput | UserUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
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

  export type FileCreateNestedManyWithoutGroupInput = {
    create?: XOR<FileCreateWithoutGroupInput, FileUncheckedCreateWithoutGroupInput> | FileCreateWithoutGroupInput[] | FileUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGroupInput | FileCreateOrConnectWithoutGroupInput[]
    createMany?: FileCreateManyGroupInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<FileCreateWithoutGroupInput, FileUncheckedCreateWithoutGroupInput> | FileCreateWithoutGroupInput[] | FileUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGroupInput | FileCreateOrConnectWithoutGroupInput[]
    createMany?: FileCreateManyGroupInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FileCreateWithoutGroupInput, FileUncheckedCreateWithoutGroupInput> | FileCreateWithoutGroupInput[] | FileUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGroupInput | FileCreateOrConnectWithoutGroupInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutGroupInput | FileUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FileCreateManyGroupInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutGroupInput | FileUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FileUpdateManyWithWhereWithoutGroupInput | FileUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FileCreateWithoutGroupInput, FileUncheckedCreateWithoutGroupInput> | FileCreateWithoutGroupInput[] | FileUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FileCreateOrConnectWithoutGroupInput | FileCreateOrConnectWithoutGroupInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutGroupInput | FileUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FileCreateManyGroupInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutGroupInput | FileUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FileUpdateManyWithWhereWithoutGroupInput | FileUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FileGroupCreateNestedOneWithoutFilesInput = {
    create?: XOR<FileGroupCreateWithoutFilesInput, FileGroupUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FileGroupCreateOrConnectWithoutFilesInput
    connect?: FileGroupWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type FileGroupUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<FileGroupCreateWithoutFilesInput, FileGroupUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FileGroupCreateOrConnectWithoutFilesInput
    upsert?: FileGroupUpsertWithoutFilesInput
    connect?: FileGroupWhereUniqueInput
    update?: XOR<XOR<FileGroupUpdateToOneWithWhereWithoutFilesInput, FileGroupUpdateWithoutFilesInput>, FileGroupUncheckedUpdateWithoutFilesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type UserCreateWithoutCatInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    factures?: FactureCreateNestedManyWithoutUserInput
    messagesSent?: PrivateMessageCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageCreateNestedManyWithoutReceiverInput
    groups?: GroupCreateNestedManyWithoutUsersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCatInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
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
    avatar?: StringNullableFilter<"User"> | string | null
  }

  export type FactureCreateWithoutUserInput = {
    date: Date | string
    titre: string
    total: number
    categorie: string
    state: string
    elements?: FactureElementCreateNestedManyWithoutFactureInput
  }

  export type FactureUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    categorie: string
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

  export type PrivateMessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type PrivateMessageUncheckedCreateWithoutSenderInput = {
    id?: number
    content: string
    createdAt?: Date | string
    receiverId: number
  }

  export type PrivateMessageCreateOrConnectWithoutSenderInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput>
  }

  export type PrivateMessageCreateManySenderInputEnvelope = {
    data: PrivateMessageCreateManySenderInput | PrivateMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageCreateWithoutReceiverInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type PrivateMessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
  }

  export type PrivateMessageCreateOrConnectWithoutReceiverInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput>
  }

  export type PrivateMessageCreateManyReceiverInputEnvelope = {
    data: PrivateMessageCreateManyReceiverInput | PrivateMessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutUsersInput = {
    name: string
    creator: UserCreateNestedOneWithoutCreatedGroupsInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    creatorId: number
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type GroupCreateWithoutCreatorInput = {
    name: string
    users?: UserCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput>
  }

  export type GroupCreateManyCreatorInputEnvelope = {
    data: GroupCreateManyCreatorInput | GroupCreateManyCreatorInput[]
    skipDuplicates?: boolean
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
    categorie?: StringFilter<"Facture"> | string
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

  export type PrivateMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutSenderInput, PrivateMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutSenderInput, PrivateMessageUncheckedUpdateWithoutSenderInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutSenderInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type PrivateMessageScalarWhereInput = {
    AND?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    OR?: PrivateMessageScalarWhereInput[]
    NOT?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    id?: IntFilter<"PrivateMessage"> | number
    content?: StringFilter<"PrivateMessage"> | string
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    senderId?: IntFilter<"PrivateMessage"> | number
    receiverId?: IntFilter<"PrivateMessage"> | number
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutReceiverInput, PrivateMessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutReceiverInput, PrivateMessageUncheckedUpdateWithoutReceiverInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutReceiverInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutUsersInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutUsersInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateManyWithWhereWithoutUsersInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutUsersInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    creatorId?: IntFilter<"Group"> | number
  }

  export type GroupUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCreatorInput, GroupUncheckedUpdateWithoutCreatorInput>
    create: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCreatorInput, GroupUncheckedUpdateWithoutCreatorInput>
  }

  export type GroupUpdateManyWithWhereWithoutCreatorInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCreatorInput>
  }

  export type UserCreateWithoutGroupsInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    factures?: FactureCreateNestedManyWithoutUserInput
    cat: UserCategorieCreateNestedOneWithoutUsersInput
    messagesSent?: PrivateMessageCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageCreateNestedManyWithoutReceiverInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type UserCreateWithoutCreatedGroupsInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    factures?: FactureCreateNestedManyWithoutUserInput
    cat: UserCategorieCreateNestedOneWithoutUsersInput
    messagesSent?: PrivateMessageCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageCreateNestedManyWithoutReceiverInput
    groups?: GroupCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedGroupsInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutCreatedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutGroupsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupsInput>
  }

  export type UserUpsertWithoutCreatedGroupsInput = {
    update: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type UserUpdateWithoutCreatedGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUpdateManyWithoutUserNestedInput
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
    messagesSent?: PrivateMessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    groups?: GroupUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutMessagesSentInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    factures?: FactureCreateNestedManyWithoutUserInput
    cat: UserCategorieCreateNestedOneWithoutUsersInput
    messagesReceived?: PrivateMessageCreateNestedManyWithoutReceiverInput
    groups?: GroupCreateNestedManyWithoutUsersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
    messagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    factures?: FactureCreateNestedManyWithoutUserInput
    cat: UserCategorieCreateNestedOneWithoutUsersInput
    messagesSent?: PrivateMessageCreateNestedManyWithoutSenderInput
    groups?: GroupCreateNestedManyWithoutUsersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
    factures?: FactureUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUpdateManyWithoutUserNestedInput
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
    messagesReceived?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    groups?: GroupUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
    messagesReceived?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUpdateManyWithoutUserNestedInput
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
    messagesSent?: PrivateMessageUpdateManyWithoutSenderNestedInput
    groups?: GroupUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type FactureCreateWithoutElementsInput = {
    date: Date | string
    titre: string
    total: number
    categorie: string
    state: string
    user: UserCreateNestedOneWithoutFacturesInput
  }

  export type FactureUncheckedCreateWithoutElementsInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    categorie: string
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
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFacturesNestedInput
  }

  export type FactureUncheckedUpdateWithoutElementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
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
    avatar?: string | null
    cat: UserCategorieCreateNestedOneWithoutUsersInput
    messagesSent?: PrivateMessageCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageCreateNestedManyWithoutReceiverInput
    groups?: GroupCreateNestedManyWithoutUsersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFacturesInput = {
    id?: number
    name: string
    email: string
    password: string
    idUserCat: number
    avatar?: string | null
    messagesSent?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    groups?: GroupUncheckedCreateNestedManyWithoutUsersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
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
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
    messagesSent?: PrivateMessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    groups?: GroupUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutFacturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type FileCreateWithoutGroupInput = {
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt?: Date | string
  }

  export type FileUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt?: Date | string
  }

  export type FileCreateOrConnectWithoutGroupInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutGroupInput, FileUncheckedCreateWithoutGroupInput>
  }

  export type FileCreateManyGroupInputEnvelope = {
    data: FileCreateManyGroupInput | FileCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type FileUpsertWithWhereUniqueWithoutGroupInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutGroupInput, FileUncheckedUpdateWithoutGroupInput>
    create: XOR<FileCreateWithoutGroupInput, FileUncheckedCreateWithoutGroupInput>
  }

  export type FileUpdateWithWhereUniqueWithoutGroupInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutGroupInput, FileUncheckedUpdateWithoutGroupInput>
  }

  export type FileUpdateManyWithWhereWithoutGroupInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutGroupInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    name?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    data?: BytesFilter<"File"> | Uint8Array
    createdAt?: DateTimeFilter<"File"> | Date | string
    groupId?: IntFilter<"File"> | number
  }

  export type FileGroupCreateWithoutFilesInput = {
    name: string
    createdAt?: Date | string
  }

  export type FileGroupUncheckedCreateWithoutFilesInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type FileGroupCreateOrConnectWithoutFilesInput = {
    where: FileGroupWhereUniqueInput
    create: XOR<FileGroupCreateWithoutFilesInput, FileGroupUncheckedCreateWithoutFilesInput>
  }

  export type FileGroupUpsertWithoutFilesInput = {
    update: XOR<FileGroupUpdateWithoutFilesInput, FileGroupUncheckedUpdateWithoutFilesInput>
    create: XOR<FileGroupCreateWithoutFilesInput, FileGroupUncheckedCreateWithoutFilesInput>
    where?: FileGroupWhereInput
  }

  export type FileGroupUpdateToOneWithWhereWithoutFilesInput = {
    where?: FileGroupWhereInput
    data: XOR<FileGroupUpdateWithoutFilesInput, FileGroupUncheckedUpdateWithoutFilesInput>
  }

  export type FileGroupUpdateWithoutFilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileGroupUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCatInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
  }

  export type UserUpdateWithoutCatInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUpdateManyWithoutUserNestedInput
    messagesSent?: PrivateMessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    groups?: GroupUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    groups?: GroupUncheckedUpdateManyWithoutUsersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FactureCreateManyUserInput = {
    id?: number
    date: Date | string
    titre: string
    total: number
    categorie: string
    state: string
  }

  export type PrivateMessageCreateManySenderInput = {
    id?: number
    content: string
    createdAt?: Date | string
    receiverId: number
  }

  export type PrivateMessageCreateManyReceiverInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
  }

  export type GroupCreateManyCreatorInput = {
    id?: number
    name: string
  }

  export type FactureUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    elements?: FactureElementUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    elements?: FactureElementUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    titre?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateMessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUpdateManyWithoutUserNestedInput
    cat?: UserCategorieUpdateOneRequiredWithoutUsersNestedInput
    messagesSent?: PrivateMessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    factures?: FactureUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idUserCat?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type FileCreateManyGroupInput = {
    id?: number
    name: string
    mimeType: string
    size: number
    data: Uint8Array
    createdAt?: Date | string
  }

  export type FileUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    data?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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