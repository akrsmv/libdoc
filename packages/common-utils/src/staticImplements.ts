// TSPlayground version: http://www.typescriptlang.org/play/index.html#src=%2F%2F%20gist%20version%3A%0A%2F%2F%20%20%20%20https%3A%2F%2Fgist.githubusercontent.com%2Faleph-naught2tog%2F2f0b395f44e34e40e9958cbd2ff961c7%2Fraw%2Fe56449e5cc85e8ed6af304c6bc2d72475a7ef24f%2FStaticImplementsDemo.ts%0A%0A%2F*%0A%20%20setup%20notes%3A%20needs%20the%20compiler%20option%3A%0A%20%20%20%20%20%20%60%22experimentalDecorators%22%3A%20true%2C%60%20in%20your%20tsconfig%0A%0A%20%20I%20have%20not%20been%20able%20to%20find%20the%20GH(%3F)%20or%20SO%20post%20I%20based%20this%20off%20of%2C%20unfortunately%2C%20%0A%20%20because%20I%20would%20love%20to%20credit%20the%20person%0A*%2F%0A%0A%2F*%0A%20%20this%20is%20a%20decorator%20--%20so%20its%20last%20applied%20argument%20is%20the%20class%20itself%0A%20%20so%20takes%20a%20type%20parameter%20of%20T%0A%20%20and%0A%20%20returns%20a%20function%20whose%20argument%20is%20of%20type%20T%0A%20%20so%2C%20when%20we%20call%20this%20--%20the%20final%20application%20is%20really%20the%20application%0A%20%20%20%20of%20the%20returning%20function%0A%20%20its%20argument%20must%20be%20of%20type%20T%0A%20%20we%20get%20T%20from%20the%20type%20parameter%0A%20%20thus%2C%20the%20argument%20must%20be%20of%20the%20same%20type%20as%20the%20type%20parameter%0A%20%20thus%2C%20whatever%20the%20type%20parameter%20is%20--%20what%20we%20want%20to%20implement%20--%20must%20be%0A%20%20%20%20in%20the%20type%20of%20T%0A*%2F%0Afunction%20StaticImplements%3CT%3E()%20%7B%0A%20%20return%20(_constructor%3A%20T)%20%3D%3E%20%7B%7D%3B%0A%7D%0A%0A%2F*%0A%20%20if%20some%20object%20implements%20Type%3CT%3E%20--%0A%20%20%20%20it%20must%20have%20%60new%20(...)%20%3A%20T%60%0A%20%20only%20classes%2Fprototypes%20can%20have%20%60new%20(...)%60%0A%20%20therefore%2C%20this%20is%20the%20type%20of%20the%20*Class*%20Of%20T%20itself%0A*%2F%0Ainterface%20Type%3CT%3E%20%7B%0A%20%20new%20(...args%3A%20any%5B%5D)%3A%20T%3B%0A%7D%0A%0A%2F%2F%20this%20is%20just%20because%20it%20was%20part%20of%20the%20reason%20I%20looked%20for%20this%0Atype%20Maybe%3CT%3E%20%3D%20T%20%7C%20null%3B%0A%0A%2F*%0A%20%20interface%20A%20extending%20interface%20B%20means%0A%20%20anything%20implementing%20interface%20A%20must%20also%20implement%20B%0A%20%20so%20we%20know%20that%20whatever%20extends%20Type%3CT%3E%20must%20have%20%60new%20(...)%3A%20T%60%0A%20%20so%20since%20the%20interface%20requires%20a%20constructor%20on%20the%20object%20that%20has%20it%0A%20%20and%20classes%2Fprototypes%20are%20just%20objects%0A%20%20we%20stick%20this%20on%20a%20class%2C%20and%20it%20will%20typecheck.%0A*%2F%0Ainterface%20NullGuard%3CT%3E%20extends%20Type%3CT%3E%20%7B%0A%20%20declareNotNull(object%3A%20Maybe%3CT%3E)%3A%20object%20is%20T%3B%0A%7D%0A%0A%2F%2F%20yay%2C%20typechecks!%0A%2F%2F%20I%20*believe*%20the%20%60()%60%20is%20necessary%20for%20it%20to%20capture%20the%20T%0A%2F%2F%20%3CT%3E%20is%20the%20type%20parameter%2C%20we%20call%20it%20with%20()%20to%20capture%20it%0A%2F%2F%20and%20are%20currying%20that%20to%20capture%20then%20the%20class%20itself%20with%20the%20decorator%0A%40StaticImplements%3CNullGuard%3CDog%3E%3E()%0Aclass%20Dog%20%7B%0A%20%20static%20declareNotNull(object%3A%20Maybe%3CDog%3E)%3A%20object%20is%20Dog%20%7B%0A%20%20%20%20return%20(%3CDog%3Eobject).bark%20!%3D%20undefined%3B%0A%20%20%7D%0A%0A%20%20bark()%3A%20String%20%7B%0A%20%20%20%20return%20%22woof%22%3B%0A%20%20%7D%0A%7D%0A%0A%2F*%0A%20%20%2F%2F%20NB%20--%20this%20one%20SHOULD%20error%2C%20because%20we%20are%20showing%20it%0A%20%20%2F%2F%20will%20correctly%20detect%20that%20the%20CLASS%20itself%20does%20not%20have%20that%20method%0A%0A%20%20Argument%20of%20type%20'typeof%20Cat'%20is%20not%20assignable%20to%20parameter%20of%0A%20%20%20%20type%20'NullGuard%3CCat%3E'.%0A%20%20Property%20'declareNotNull'%20is%20missing%20in%20type%20'typeof%20Cat'.%0A*%2F%0A%40StaticImplements%3CNullGuard%3CCat%3E%3E()%0Aclass%20Cat%20%7B%0A%20%20%2F%2F%20note%20the%20LACK%20of%20%60static%60%20on%20this%20--%20hence%20the%20error%0A%20%20declareNotNull(object%3A%20Maybe%3CCat%3E)%3A%20object%20is%20Cat%20%7B%0A%20%20%20%20return%20(%3CCat%3Eobject).meow%20!%3D%20undefined%3B%0A%20%20%7D%0A%0A%20%20meow()%3A%20String%20%7B%0A%20%20%20%20return%20%22meow%22%3B%0A%20%20%7D%0A%7D%0A
/*
  setup notes: needs the compiler option:
      `"experimentalDecorators": true,` in your tsconfig
  I have not been able to find the GH(?) or SO post I based this off of, unfortunately, 
  because I would love to credit the person
*/

/*
  this is a decorator -- so its last applied argument is the class itself
  so takes a type parameter of T
  and
  returns a function whose argument is of type T
  so, when we call this -- the final application is really the application
    of the returning function
  its argument must be of type T
  we get T from the type parameter
  thus, the argument must be of the same type as the type parameter
  thus, whatever the type parameter is -- what we want to implement -- must be
    in the type of T
*/
export function StaticImplements<T>() {
  return (_constructor: T) => {};
}

/*
  if some object implements Type<T> --
    it must have `new (...) : T`
  only classes/prototypes can have `new (...)`
  therefore, this is the type of the *Class* Of T itself
*/
interface Type<T> {
  new (...args: any[]): T;
}

// this is just because it was part of the reason I looked for this
type Maybe<T> = T | null;

/*
  interface A extending interface B means
  anything implementing interface A must also implement B
  so we know that whatever extends Type<T> must have `new (...): T`
  so since the interface requires a constructor on the object that has it
  and classes/prototypes are just objects
  we stick this on a class, and it will typecheck.
*/
interface NullGuard<T> extends Type<T> {
  declareNotNull(object: Maybe<T>): object is T;
}