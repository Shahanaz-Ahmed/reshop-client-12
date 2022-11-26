import React from "react";

const Blog = () => {
  return (
    <div className="py-24">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p className="text-2xl">
            There are four main types of state you need to properly manage in
            your React apps: <br /> <br /> 1.Local state - Local state is most
            often managed in React using the useState hook. <br /> 2.Global
            state - Global state is data we manage across multiple components.
            <br /> 3.Server state - React Query that make managing server state
            much easier. <br />
            4.URL state - URL state to imagine building a blog without being
            able to fetch a post based off of its slug or id that is located in
            the URL!
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p className="text-2xl">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p className="text-2xl">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended.
            <br />
            Unit testing is an important step in the development process,
            because if done correctly, it can help detect early flaws in code
            which may be more difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 py-3"
      >
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p className="text-2xl">
            The three of them are inspired by Redux but each one has a different
            approach: <br /> <br />
            1.Angular has its own library, NgRx, a project for state management
            inspired by Redux and implemented using RxJS. <br />
            2.React uses React Redux, a project maintained by the Redux team.{" "}
            <br />
            3.Vue.js has its own library, called Vuex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
