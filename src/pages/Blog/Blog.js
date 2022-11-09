import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='bg-bg-login-color px-5 lg:px-28 py-20'>

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


            <div className='border border-slate-500 p-2 '>
                <div className='flex justify-between   '>
                    <div className='flex flex-col lg:flex-row gap-2  mb-3'>
                        <p className='text-white  text-2xl font-semibold p-3'>What is JWT, and how does it work?</p>
                    </div>
                </div>

                <div className='bg-nav-color py-3 px-2 text-lg font-thin text-white'>
                    <p> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br />
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;