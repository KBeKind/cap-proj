import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-8 lg:p-0 lg:pb-10">
        <div className="font-primary">
          <h2 className="text-5xl font-medium text-[#f4ce14] mb-2">
            About Little Lemon
          </h2>
          <h3 className="text-3xl font-medium text-[#495e57] mb-7">Chicago</h3>
          <p className=" text-[#495e57]  font-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            ullam? Animi a repellendus nobis unde ut sunt iusto minus id
            accusamus recusandae natus illo, ullam sint iure deserunt dolor,
            adipisci exercitationem vel at. Magnam excepturi quibusdam, commodi,
            ea suscipit assumenda perspiciatis nihil a harum beatae eligendi
            eius! Sed natus assumenda quae omnis fugiat blanditiis, deleniti
            quos eius. Harum, impedit rem. Facilis cumque aliquid aut repellat,
            quidem ipsa atque, beatae labore reprehenderit quos deleniti totam
            nulla incidunt in soluta sit alias, esse libero magni quaerat!
            Reiciendis totam, sequi temporibus nostrum maiores nulla voluptatem
            voluptates molestiae tempore? Explicabo eum officia praesentium
            tempora?
          </p>
        </div>
        <div className="space-y-3 lg:relative">
          <img
            src="/assets/Mario and Adrian A.jpg"
            alt="Mario and Adrian 1"
            className="rounded-lg lg:absolute w-96 h-64 object-cover left-3 md:hover:scale-105 md:hover:z-10 transition-all duration-300 md:hover:ring-8 md:hover:ring-yellow-500 md:hover:ring-offset-8"
          />
          <img
            src="/assets/Mario and Adrian b.jpg"
            alt="Mario and Adrian 2"
            className="rounded-lg lg:absolute w-96 h-64 object-cover top-[35%] left-[20%] md:hover:scale-105 md:hover:z-10 transition-all duration-300 md:hover:ring-8 md:hover:ring-yellow-500 md:hover:ring-offset-8"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
