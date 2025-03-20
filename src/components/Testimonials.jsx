import React from "react";
import { FaStar } from "react-icons/fa";

const Box = ({ name, role, image, rating, title, review }) => {
  const star = Array.from({ length: rating });
  return (
    <div className="max-h-[50vh] w-full shadow-xl flex flex-col items-center justify-center gap-[20px] text-center px-[10px] md:px-[30px] lg:px-[30px]">
      <div className="w-full h-16 flex items-center">
        <img
          className="h-12 w-12 md:h-16 md:w-16 lg:h-16 lg:w-16 rounded-full object-cover aspect-square"
          src={image}
          alt="testimonial-image"
        />
        <div className="h-full w-full flex flex-col px-[10px] py-1">
          <h1 className="font-semibold text-[20px] md:text-[24px] lg:text-[24px] text-left ">
            {name}
          </h1>
          <div className="w-full h-full flex items-center justify-between">
            <p className="text-[16px] md:text-[18px] lg:text-[15px] text-zinc-600 font-medium">
              {role}
            </p>
            <div className="flex gap-[2px]">
              {star.map((_, i) => (
                <FaStar key={i} className="text-orange-400" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(50vh-64px)] flex flex-col justify-center py-[10px] px-[2px]">
        <h1 className="font-semibold text-[22px] md:text-[25px] lg:text-[25px]">
          {title}
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[16px] mt-[10px]">
          {review}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Leo",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      title: "It was a very good experience",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 2,
      name: "Sophia",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1800&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      title: "Highly recommend their services",
      review:
        "The team delivered beyond expectations. Their attention to detail and commitment to quality were exceptional. I would highly recommend their services to anyone.",
    },
    {
      id: 3,
      name: "Michael",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1840&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      title: "Top-notch quality and support",
      review:
        "Working with this team was a game-changer. Their prompt response and dedication ensured a smooth experience throughout the project. I'll definitely work with them again!",
    },
  ];

  return (
    <div className="min-h-[80vh] w-full text-center flex flex-col mt-[20px] py-[20px] px-[5px]">
      <h1 className="text-[23px] md:text-[38px] lg:text-[38px] font-semibold capitalize">
        What our clients say about us
      </h1>

      <div className="animate-fadeIn w-full min-h-[50vh] md:min-h-[50vh] lg:min-h-[50vh]  flex flex-col md:flex-row lg:flex-row items-center justify-between px-[10px] gap-[20px] md:gap-[10px] lg:gap-[10px] py-[10px] mt-[30px] md:mt-[70px] lg:mt-[70px]">
        {testimonialsData.map(
          ({ name, role, image, rating, title, review }, index) => (
            <Box
              key={index}
              name={name}
              role={role}
              image={image}
              rating={rating}
              title={title}
              review={review}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
