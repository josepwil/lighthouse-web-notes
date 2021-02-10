# Intro to Typescript

### To Do
* [x] What is TypeScript
* [x] TypeScript CLI
* [x] Primitive Types
* [x] Arrays
* [x] Objects
* [x] Functions and Methods
* [x] Duck Typing
* [] Generics


### What is it?
* It is a superset
* We have already seen one superset (SCSS => CSS)
* TS => JS
* Types => changes JS from dynamically to statically typed

### TypeScript CLI
- tsc file.ts (compiles ts file into js file with same name)
- --target es6 (we can specify which version of js we want to compile to)
- --init (creates a tscongig.json file)
- --watch (as soon as we save a file it will try and compile it)

### Primitives 
``` typescript
  let num: number = 7;
  num = 'hello' // type error
  let myBoolOrNum: boolean | number = false;
```

### Arrays 
``` typescript
  const nums: number[] = [1, 2, 3];
```

### Objects
``` typescript
  // creating a new type called user
  interface IUser {
    username: string;
    password: string;
  }

  const userObj: IUser = {
    // id is an optional value
    id?: number;
    username: 'alice',
    password: '1234'
  }

  const users: IUser[] = [];
  users.push(userObj);
```

### Functions
``` typescript
  // to things to type: paramters, return value (after arguments)
  const sayHello = (firstName: string, age?: number): string => {
    return `hello ${firstName}`
  }

  // if there is no return value you can return type void
  const sayHello = (firstName: string, age?: number): void => {
    cosole.log(`hello ${firstName}`)
  }
```

### Promises
``` typescript
  const fnReturningPromise = (firstName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve(firstName)
    })
  }
```

### Object Methods
``` typescript
interface Iwriter {
  penName: string;
  numBooks: number;
  writeBook: (title: string) => boolean;
}

const hovard: IWriter = {
  penName = 'HP Lovecraft',
  numBooks: 2,
  writeBook: (title) => {
    return true
  }
}
```

### callback functions
``` typescript
  const myHOF = (cb: (num: number) => string): void => {
    cb(7)
  };

  myHOF((myNumber: number): string => {
    return 'hello';
  })
```

### duck typing
- not specifying a type so long as they have the same shape they will be interpreted as a type

### as keyword
- avoid using as keyword as it removes all type safety

### Generics
- generic interface 
  - an interface that accepts a type as an argument

``` typescript
  interface IContainer<type> {
    name: string;
    contents: type;
  }

  const numberContainer: IContainer<number> = {
    name: 'Number Container',
    contents: 42
  }
  const stringContainer: IContainer<string> = {
    name: 'String Container',
    contents: 'Hello'
  }
  ```