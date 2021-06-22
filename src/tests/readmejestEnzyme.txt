Jest and Enzyme unit testing:


>>>>>>>>>Differenec between Enzyme and RTL(High Level)>>>>>>>>>>>
1.Enzyme shallow rendering    1.RTL complete rendering
2.Enzyme unit Testing         2.RTL Integration Testing

>>>>>>>>>>>>>>>>>start>>>>>>>>>>>>>>>>>>>>>
Configuaration
1.jest is installed by default with create-react-app
2.install enzyme and enzyme adapter and set configuartion in setupTests.jest
>>>>>>>>>>>>>>>>>End>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>HowtosaveFile>>>>>>>>>>
EX:App.test.jest


>>>>>>>>>>>describe>>>>>>>>>>>>>>
describe is a wrapper test suite that  contains multiple test cases.


>>>>>>>StepsTowriteTestcases>>>>>>>>>>>>>>>>>
1.arrange   2.act   3.assert

>>>>>>>How to if Check Component is Rendered or not>>>>>>>>>>
const wrapper=shallow<App/>
const output=wrapper.find('componentName').exists()
expect(output).toBe(true);


>>>>>>>>>>>>>>>>How to debug? >>>>>>>>>>>>>>
const wrapper=shallow(<App/>)
console.log(wrapper.debug());


>>>>>>>>>SnapshotTesting>>>>>>>>>>>>>>>>>>>>>>>
What is the Use of SnapshotTssting?
1.In order to avois multiple assertions we can go for SnapshotTesting.
2.To check if the component is rendered in a proper structure

>>>>>>>>>>>>>>>Snapshot Testing with Enzyme >>>>>>>>>>>>>
1.write test case
const wrapper=shallow(<App/>)
console.log(wrapper.debug());
expect(wrapper).toMatchSnapshot()

2.run test case, snapshot folder will be created with App.test.js.snap file under the folder

3.Now the   App.test.js.snap file give details regarding testcase name and contains the entire structure of the components we are taking snap shot

4.If the structure in step 3 is  abstract,then install
a)npm install enzyme-to-json
b)Add below data in package.json

"jest":{
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}

>>>>>>>>>>>Mocking using jest and Enzyme?>>>>>>>>>>>>
1.What is Mocking?
  overriding the original implementation is called as Mocking

2.How to mock?
Syntax:
a)jest.mock("mockcomponentname",()=>{
    return mocked data.
})

b)jest.fn() - empty function that returns nothing.Optionally takes mock implementation like below
 Ex: const mockFn=jest.fn(()=>true)
 console.log(mockFn())  //true

Jest.mock()->used to mock modules
jest.fn()->is used to mock functions
jest.spyOn->is used to mock object method.


------------jest.fn()--------------
1.The simplest way to create mock function.This method receive an optional function implementation
2.Works similar to call back function.
3.jest.fn() -is a higher order function.Each mock function has some special properties.
4.mock property is fundamental.This property is an object that has all the mock state information about how function was invoked.This object contains three array properties
     >Calls -this property store the argument used on each call
     >Instances-will contain the this value used on each invocation
     >Results-this is an array that will store how and with which value the function exited each invocation
In the result property,jest stores each result of the function as objects that have two properties:type and value.
type can be either return or throw.
The value property will contain the return value or error throws.

jest provides a set of custom matchers to check expectation about how function is called
>expect(fn).toBeCalled()
>expect(fn).toBeCalledTimes(n)
>expect(fn.toBeCalledWith(arg1,arg2,....))
>expect(fn).lastCalledWith(arg1,arg2,...))













