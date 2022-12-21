import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 lg:px-28 py-20'>

            <div className='border border-slate-500 p-2 mb-10 '>
                <div className='flex justify-between   '>
                    <div className='flex flex-col lg:flex-row gap-2  mb-3'>
                        <p className='text-white  text-2xl font-semibold p-3'>Difference between SQL and NoSQL</p>
                    </div>
                </div>

                <div className='bg-nav-color py-3 px-2 text-lg font-thin text-white'>
                    <p> The five critical differences between SQL vs NoSQL are:
                        <br />
                        - SQL databases are relational, NoSQL databases are non-relational. <br />
                        - SQL databases use structured query language and have a predefined      schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        - SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        - SQL databases are table-based, while NoSQL databases are document,  key-value, graph, or wide-column stores. <br />
                        - SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>

            </div>


            <div className='border border-slate-500 p-2 mb-10 '>
                <div className='flex justify-between   '>
                    <div className='flex flex-col lg:flex-row gap-2  mb-3'>
                        <p className='text-white  text-2xl font-semibold p-3'>What is JWT, and how does it work?</p>
                    </div>
                </div>

                <div className='bg-nav-color py-3 px-2 text-lg font-thin text-white'>
                    <p> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        <br />
                        Once decoded, you will get two JSON strings:<br />

                        - The header and the payload.<br />
                        - The signature.<br />
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.<br />

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br />

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.<br />

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.

                        <br />
                    </p>
                </div>



            </div>

            <div className='border border-slate-500 p-2 mb-10 '>
                <div className='flex justify-between   '>
                    <div className='flex flex-col lg:flex-row gap-2  mb-3'>
                        <p className='text-white  text-2xl font-semibold p-3'>Difference between Nodejs and JavaScript </p>
                    </div>
                </div>

                <div className='bg-nav-color py-3 px-2 text-lg font-thin text-white'>
                    <p>
                        Javascript is a programming language that is used for writing scripts on the website.  <br />
                        - NodeJS is a Javascript runtime environment.<br />
                        - Javascript can only be run in the browsers. <br />
                        - We can run Javascript outside the browser with the help of NodeJS. <br />
                        - Javascript is basically used on the client-side.<br />
                        - Node js is mostly used on the server-side.<br />
                        - Javascript is capable enough to add HTML and play with the DOM. <br />
                        - Nodejs does not have capability to add HTML tags.<br />
                        - Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />
                        - V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                        - Javascript is used in frontend development.<br />
                        - Nodejs is used in server-side development.<br />
                        - Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br />
                        - Nodejs is written in C, C++ and Javascript. <br />
                    </p>
                </div>
            </div>

            <div className='border border-slate-500 p-2 mb-10 '>
                <div className='flex justify-between   '>
                    <div className='flex flex-col lg:flex-row gap-2  mb-3'>
                        <p className='text-white  text-2xl font-semibold p-3'>How does NodeJS handle multiple requests at the same time?</p>
                    </div>
                </div>

                <div className='bg-nav-color py-3 px-2 text-lg font-thin text-white'>
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>

            </div>


        </div>
    );
};

export default Blog;