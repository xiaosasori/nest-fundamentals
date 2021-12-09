<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Migration

- Create: `npx typeorm migration:create -n name_of_migration`
- Generate: `npx typeorm migration:generate -n name_of_migration`
- Run: `npx typeorm migration:run`
- Revert: `npx typeorm migration:revert`
- `build` project -> `generate` migration -> `run` migration

## Providers

### Scope

- `transient` providers are **NOT** shared across consumers. Each consumer that injects a transient provider will receive a new, dedicated instance of that provider.
- `request` scope provides a new instance of the provider exclusively for each incoming request.

### Custom

- Custom providers are useful when:
  - We are creating a custom instance of our provider instead of having Nest instantiate the class for us
  - We want to use a Strategy Pattern in which we can provide an abstract class and interchange the real implementation
  - We need to delay the bootstrap process until one or more asynchronous tasks have completed
- The "useValue" syntax (custom providers) is useful when:
  - We want to bind an external library into the Nest container
  - We want to register & inject a constant value
  - We want to replace a real implementation of a service with a mock object
- Use `@Inject()` as parameter decorator to inject a custom provider into a class
- The `useClass` syntax (custom providers) is useful when we want to **dynamically** determine a class that a token should resolve to
- The `useFactory` syntax (custom providers) is useful when we want to:
  - Create providers dynamically based on other providers
  - Delay the entire bootstrap process until one or more asynchronous tasks have completed (async functions)

## Building Blocks (Exception filters, Pipes, Guards, Interceptors)

- Can be
  - **Globally**-scoped
  - **Controller**-scoped
  - **Method**-scoped
  - **Param**-scoped availale to Pipes only
- `Exception Filters` handle and process unhandled exceptions
- `Pipes`
  - Transform input data to the desired output
  - Evaluate & validate input data
- `Guards` determine whether a given request meets certain conditions
- `Interceptors`
  - Bind extra logic _before_ or _after_ method execution
  - Transform the result returned from a method
  - Depending on specific conditions can completely override a method

## Testing
- Test a specific file `npm run test:watch -- coffees.service`
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
