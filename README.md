# learn-react-hooks
In this project we learn how to use various react hooks.

## Reasons to choose react hooks over react classes:
1. **No need for conversion from functional to component class:** In React app there is a need to change functional class with props to component class with the state as the application grows. This process becomes sometimes difficult due to large complex classes. React hooks save us from this scenario as it has the capability to pass state in the functional component.
2. **The significance of “this” becomes less:** “this” keyword always confuses developers with its functionality. We can avoid the use of “this” keyword with React hooks which is beneficial for new developers.
3. No need for binding methods: In React applications we have to bind functions together to make them functional and that makes things confusing. With React hooks, this thing becomes easier as it has inbuilt functions for this.
4. **Logic And UI are decoupled:** Using hooks, logic and UI is easy to distinguish. No need for HOC or render props. Hooks do it beautifully with a small boilerplate and a precise design of the UI and logic. This makes code more reusable.
5. **Related Logic at Same Place:** React Hooks keeps all related logic at one place unlike life cycle methods in classes. We have to differently define things in componentDidMount or componentDidUpdate which makes things confusing when they are filled with many logics.
6. **Helps to share stateful logic between components:** Unlike classes React hooks helps to share the same logic between different components which is not possible with classes as there each component has its own state and sources.

## useState Hook

**What does calling useState do?**
It declares a “state variable”. 

**What do we pass to useState as an argument?** 
The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need.

**What does useState return?** 
It returns a pair of values: the current state and a function that updates it. This is why we write const [email, setEmail] = useState(). This is similar to this.state.email and this.setState in a class, except you get them in a pair.