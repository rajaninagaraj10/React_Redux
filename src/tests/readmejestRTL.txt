Jest and RTL unit testing:


>>>>>>>>>Differenec between Enzyme and RTL(High Level)>>>>>>>>>>>
1.Enzyme shallow rendering    1.RTL complete rendering
2.Enzyme unit Testing         2.RTL Integration Testing

>>>>>>>>>>>>>>>>>start>>>>>>>>>>>>>>>>>>>>>
Configuaration
1.jest is installed by default with create-react-app
2.@testing-library/React is come by default with create-react-app




>>>>>>>>>>>>>>>Note>>>>>>>>>>>>>>>>.
1.In React Testing Library, you don't need to assign the render result to a variable (wrapper, or etc), and you can simply access the rendered output by calling the screen. The other good thing to know is that React Testing Library automatically cleans up the output for each test, so you don't need to call cleanup on Jest's afterEach or beforeEach function.



>>>>>>>>>>>HowtosaveFile>>>>>>>>>>
EX:App.test.jest


>>>>>>>>>>>describe>>>>>>>>>>>>>>
describe is a wrapper test suite that  contains multiple test cases.


>>>>>>>StepsTowriteTestcases>>>>>>>>>>>>>>>>>
1.arrange   2.act   3.assert

>>>>>>>How to if Check Component is Rendered or not>>>>>>>>>>
import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });


>>>>>>>>>>>>>>>>How to debug? >>>>>>>>>>>>>>
render(<App/>)
screen.debug();


>>>>>>>>>SnapshotTesting>>>>>>>>>>>>>>>>>>>>>>>
What is the Use of SnapshotTssting?
1.In order to avois multiple assertions we can go for SnapshotTesting.
2.To check if the component is rendered in a proper structure

>>>>>>>>>>>>>>>Snapshot Testing with RTL >>>>>>>>>>>>>
Install react-test-renderer package

1.write test case
  it('matches the snapshot', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });

2.run test case, The first time this test is run, there is no snapshot for this component so Jest creates it. You can inspect the contents of the snapshots inside the src/__snapshots__ directory.

3.Now the   App.test.js.snap file give details regarding testcase name and contains the entire structure of the components we are taking snap shot



>>>>>>>>>>>Mocking using jest and RTL?>>>>>>>>>>>>
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















it('check if child component Louie renders', () => {
        const wrapper = shallow(<LouieChat />);
        expect(wrapper.containsMatchingElement(<Louie />)).toEqual(true);
    });