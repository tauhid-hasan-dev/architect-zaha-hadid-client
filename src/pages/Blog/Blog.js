import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Architecture Blog");

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black px-5 lg:px-28 py-20">
      {/* Blog Post 1 */}
      <div className="border border-slate-500 p-2 mb-10 ">
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row gap-2 mb-3">
            <p className="text-white text-2xl font-semibold p-3">
              The Evolution of Modern Architecture
            </p>
          </div>
        </div>

        <div className="bg-nav-color py-3 px-2 text-lg font-thin text-white">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Modern Architecture"
            className="w-full h-64 object-cover mb-4"
          />
          <p>
            Modern architecture has undergone significant changes over the past
            century, transitioning from traditional, ornate styles to more
            functional and minimalist approaches. This evolution has been driven
            by technological advancements, cultural shifts, and a growing
            emphasis on sustainability.
          </p>
          <br />
          <p>
            Early modernist architects, like Le Corbusier and Ludwig Mies van
            der Rohe, emphasized simplicity, clean lines, and the use of
            industrial materials such as steel and glass. These principles laid
            the foundation for the International Style, which became synonymous
            with modern architecture in the mid-20th century.
          </p>
          <br />
          <p>
            Today, modern architecture continues to evolve, incorporating smart
            technologies, eco-friendly materials, and innovative design
            strategies. Buildings are not only designed for aesthetics but also
            for energy efficiency, reducing carbon footprints, and enhancing the
            quality of life for their occupants. As we look to the future, the
            integration of artificial intelligence and advanced construction
            techniques will undoubtedly shape the next wave of modern
            architecture.
          </p>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="border border-slate-500 p-2 mb-10 ">
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row gap-2 mb-3">
            <p className="text-white text-2xl font-semibold p-3">
              Sustainable Architecture: Principles and Practices
            </p>
          </div>
        </div>

        <div className="bg-nav-color py-3 px-2 text-lg font-thin text-white">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Sustainable Architecture"
            className="w-full h-64 object-cover mb-4"
          />
          <p>
            Sustainable architecture is an approach to building design that aims
            to minimize environmental impact through efficient use of resources,
            energy, and development space. It emphasizes the importance of
            creating buildings that are environmentally responsible and
            resource-efficient throughout their lifecycle—from siting to design,
            construction, operation, maintenance, and eventual deconstruction.
          </p>
          <br />
          <p>
            Key principles of sustainable architecture include the use of
            renewable energy sources, such as solar and wind power, as well as
            the integration of green building materials that are recycled or
            sustainably sourced. Water conservation, waste reduction, and the
            use of passive design strategies to optimize natural lighting and
            ventilation are also critical components.
          </p>
          <br />
          <p>
            As the demand for sustainable buildings grows, architects are
            increasingly adopting practices such as green roofs, rainwater
            harvesting systems, and energy-efficient windows. The use of
            Building Information Modeling (BIM) allows for better planning and
            execution of sustainable design strategies, ensuring that
            sustainability is at the forefront of every project.
          </p>
        </div>
      </div>

      {/* Blog Post 3 */}
      <div className="border border-slate-500 p-2 mb-10 ">
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row gap-2 mb-3">
            <p className="text-white text-2xl font-semibold p-3">
              The Role of Technology in Architectural Design
            </p>
          </div>
        </div>

        <div className="bg-nav-color py-3 px-2 text-lg font-thin text-white">
          <img
            src="https://images.unsplash.com/photo-1629118938047-0f28bbe5af7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXV0b2NhZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Technology in Architecture"
            className="w-full h-64 object-cover mb-4"
          />
          <p>
            Technology has revolutionized the field of architecture, enabling
            architects to push the boundaries of design and construction. From
            the use of CAD (Computer-Aided Design) software to the integration
            of Building Information Modeling (BIM), technology has transformed
            how buildings are conceptualized, designed, and built.
          </p>
          <br />
          <p>
            One of the most significant advancements in recent years is the rise
            of 3D printing in architecture. This technology allows for the
            creation of complex and intricate structures that would be
            impossible or prohibitively expensive to produce using traditional
            construction methods. Additionally, 3D printing can reduce waste,
            lower costs, and speed up the construction process.
          </p>
          <br />
          <p>
            Virtual and augmented reality (VR/AR) are also becoming essential
            tools in architectural design. These technologies allow architects
            and clients to visualize spaces and structures in a fully immersive
            environment, facilitating better decision-making and collaboration.
            As technology continues to advance, its role in architecture will
            only become more integral, driving innovation and efficiency in the
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
