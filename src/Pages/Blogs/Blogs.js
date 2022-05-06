import React from "react";

const Blogs = () => {
  return (
    <div class="container px-4">
      <div class="row gx-5">
        <h3>difference between node js vs javascript</h3>
        <div class="col-12 col-lg-6">
          <h4>JavaScript</h4>
          <p>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </p>
          <p>
            Javascript is a programming language that is used for writing
            scripts on the website.{" "}
          </p>
          <p>Javascript can only be run in the browsers.</p>
          <p> It is basically used on the client-side.</p>
          <p>
            {" "}
            Javascript is capable enough to add HTML and play with the DOM.{" "}
          </p>
          <p>
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox.{" "}
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <h4>Node JS</h4>
          <p>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.{" "}
          </p>
          <p>NodeJS is a Javascript runtime environment.</p>
          <p>
            We can run Javascript outside the browser with the help of NodeJS.
          </p>
          <p>It is mostly used on the server-side.</p>
          <p>Nodejs does not have capability to add HTML tags.</p>
          <p>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.{" "}
          </p>
        </div>
      </div>
      <div class="row gx-5 mt-4">
        <h3>difference between nosql vs sql</h3>
        <div class="col-12 col-lg-6">
          <h4>Sql</h4>
          <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
          <p>These databases have fixed or static or predefined schema</p>
          <p>These databases are not suited for hierarchical data storage.</p>
          <p>These databases are best suited for complex queries</p>
          <p>Vertically Scalable</p>
        </div>
        <div class="col-12 col-lg-6">
          <h4>Nosql</h4>
          <p>Non-relational or distributed database system.</p>
          <p> They have dynamic schema</p>
          <p>These databases are best suited for hierarchical data storage.</p>
          <p>These databases are not so good for complex queries</p>
          <p> Horizontally scalable</p>
        </div>
      </div>
      <div class="row gx-5">
        <h3>what is the purpose of jwt and how does it works</h3>
        <div class="col-12">
          <h4>What Is JWT?</h4>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <h4>How JWT Works</h4>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted
          </p>
          <p>
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz.
          </p>
        </div>
      </div>
      <div class="row gx-5">
        <h3>Why Node.js ?</h3>
        <div class="col">
          <p>
            Node.js is an open source, a server-side script which runs on the
            top of Google’s open-source scripting engine V8. Node.js is fast,
            lightweight and efficient. It uses the asynchronous mode of
            operation, event-driven Input/Output rather than using the
            traditional threads or separate threads for each process. Node.js
            was originally written by Ryan Dahl in the year 2009. It is a
            cross-platform Javascript run-time environment that executes
            Javascript code outside of a browser. Node.js uses javascript for
            creating node applications or we can use any other language that
            ultimately compiles to javascript (like typescript). The javascript
            is written in the same way as we’d use in any client-side
            application. However, we need to set up the node development
            environment.
          </p>
          <p>
            Node.js is the greatest tool for building real-time web
            applications. It provides cross-platform applications which run
            easily on any web. So you basically don’t need anything extra for
            running up a node application. You only need for making one.
            According to the Node.js Survey of users, 43% of Node.js programmers
            claim to use Node.js for enterprise apps. It’s a light, scalable and
            open-source language platform which makes it very easy to build apps
            even at the enterprise level also. Overall it increases the
            efficiency of the development process as it fills the gap between
            frontend and backend applications. It uses the approach of
            non-blocking I/O. In Non-blocking I/O approach, you can initiate a
            request in parallel for user2 without waiting for the response to
            the request for user1. The requests in Node.js can initiate in
            parallel. This non-blocking I/O eliminates the need for
            multi-threading.
          </p>
          <p>
            Npm (Node Package Manager) These are the libraries which are built
            by the awesome community which will solve almost all the generic
            problems related to the Node.js. Npm has packages which are used in
            our apps to make the development process faster and more efficient.
            Node Modules Node.js has a set of built-in modules which can be used
            without any further installation. We can install some custom modules
            from the NPM as per the need of the application. We can also create
            modules of our own and use them by importing it in our apps.
            Basically, the Node module is a block of code which can be used
            again in any node.js component without impacting any other node.js
            component. The modules in node.js work independently without
            impacting the existence of any other functions.
          </p>
          <h4>When should use node JS</h4>
          <p>
            is a command-line tool that can be run as a regular web server and
            lets one run JavaScript programs
          </p>
          <p>utilizes the great V8 JavaScript engine</p>
          <p>
            is very good when you need to do several things at the same time
          </p>
          <p>
            is event-based so all the wonderful Ajax-like stuff can be done on
            the server side
          </p>
          <p>lets us share code between the browser and the backend</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
