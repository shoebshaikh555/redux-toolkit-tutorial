<img align="center" alt="React" width="60px" height="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />

<br/>

## Purpose

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

1. To simply the configuration of Redux store.
2. Dependency on additional packages.
3. Eliminate the complex boilerplate code used for Redux.

## Slices

Slice is created using a function called createSlice. The createSlice is a higher order function that accepts a slice name, an initial state, an object of reducers functions, and will automatically generates action creators and action types that corresponds to the reducers and state.

createSlice looks at all the functions that are defined in the reducers field and for every case generates an action creator that uses the name of the reducer as the action type itself.

## useSelector Hook

The useSelector hook is used to read the state that is maintained in th redux store. It accepts a function called as selector selector function as a parameter. The selection function receives the state as an argument and returns the state value.

## useDispatch Hook

The useDispatch hook is used to dispatch the action. This returns a reference to the dispatch function from the redux store.

## extraReducer

All the combined reducers of a store will receive an action when it will get dispatched. Dispatch will then check for the desired action in each reducer based on the action. If there is an Action Type that can be used as a common Action Type across multiple slices then we use extraReducer. When an action is supposed to be handled by one reducer then we use reducers. When an action type is supposed to be handled by multiple reducers then we must use extraReducer. The extraReducer is declared inside the createSlice function. It will accept a parameter called builder. The builder has a method called addCase in which the Action type will be defined.

## createAction

The createAction is a A helper function for defining a Redux action type and creator. The usual way to define an action in Redux is to separately declare an action type constant and an action creator function for constructing actions of that type. The createAction helper combines these two declarations into one. It takes an action type and returns an action creator for that type. The action creator can be called either without arguments or with a payload to be attached to the action. Also, the action creator overrides toString() so that the action type becomes its string representation.

## createAsyncThunk

With redux toolkit in order to create an async action, we make use of the createAsyncThunk function. The function accepts two arguments. The first one being the Action Type and a callback function as the second argument. The callback function will contain the async logic and will return a promise. The createAsyncThunk will dispatch the promise lifecycle actions (pending, fulfilled, rejected) that can be listened using extraReducers. Within each reducer function, we can perform the necessary state transitions. The createAsyncThunk function makes under the hood use of the Redux Thunk library. Redux is applied as a middleware to the store under the hood.
