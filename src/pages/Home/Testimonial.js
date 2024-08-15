/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Architect at XYZ Corp",
    image: "https://i.ibb.co/5kDqTK4/person6.jpg",
    testimonial:
      "Working with this team was a great experience. They understood our needs and delivered exceptional results that exceeded our expectations.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager at ABC Inc",
    image: "https://i.ibb.co/5MzQd0n/person1.jpg",
    testimonial:
      "The attention to detail and the quality of work were outstanding. The project was completed on time and within budget. Highly recommended!",
  },
  {
    name: "Michael Johnson",
    role: "CEO at LMN Ltd",
    image: "https://i.ibb.co/R44SN1c/person5.jpg",
    testimonial:
      "Their innovative solutions and creative designs have set our company apart from the competition. We couldn’t be happier with the results.",
  },
];

const Testimonial = ({ name, role, image, testimonial }) => (
  <div className=" bg-slate-800 text-slate-200 p-7 text-center">
    <img
      src={image}
      alt={`${name}'s photo`}
      className="w-24 h-24 rounded-full mx-auto mb-8 "
    />
    <p className="text-slate-300 mb-8">{testimonial}</p>
    <h3 className="text-xl font-semibold text-slate-500">{name}</h3>
    <p className="text-slate-400">{role}</p>
  </div>
);

const TestimonialPage = () => {
  return (
    <div className="hero py-10 lg:py-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-slate-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
