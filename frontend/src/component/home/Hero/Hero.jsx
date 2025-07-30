import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      image: "images/HeroImg/banner3.png",
      category: "Không cần mặc giống nhau, chỉ cần chung vibe",
      title: "Streetwear Unisex\nDark Graphic Core",
      description:
        "Một khi đã chọn Gangz — là chọn sống thật, chất thật.\nCùng Vietgangz khẳng định cá tính với phong cách unisex đậm chất đường phố.",
    },
    {
      image: "images/HeroImg/banner4.png",
      category: "Style này gọi là: chill mà kill",
      title: "Streetwear Unisex\n(Y2K x Trap Girl vibe)",
      description:
        "Nhạc trap bật nhẹ, hoodie to hơn người, shorts đập trắng – bạn vừa bước ra từ Tokyo hay từ District 1? Outfit này không cần nhiều lời – chỉ cần bạn dám mặc.",
    },
    {
      image: "images/HeroImg/banner5.png",
      category:
        "Đừng cố vừa vặn với thế giới – hãy để thế giới phải mở rộng vì bạn!",
      title: "VIETGANGZ HIPHOP\nSTREETWEAR STYLE",
      description:
        "Thời trang là tuyên ngôn cá tính.🔥 Chọn phong cách “đậm chất mình” cùng Vietgangz!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Variants cho slide animation
  const slideVariants = (direction, distance = 100) => ({
    hidden: {
      x:
        direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? -distance : direction === "down" ? distance : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  return (
    <section className="relative bg-[#f8f8f8] min-h-screen md:h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-0 md:-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 space-y-4 md:space-y-5 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              key={`category-${currentSlide}`}
              variants={slideVariants("up")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="inline-block text-gray-600 text-sm md:text-base tracking-wider uppercase font-medium border-b-2 border-gray-200 pb-1"
            >
              {slides[currentSlide].category}
            </motion.div>

            <motion.div
              key={`title-${currentSlide}`}
              variants={slideVariants("down", 150)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              {slides[currentSlide].title.split("\n").map((line, i) => (
                <div
                  key={i}
                  className="overflow-hidden hover:translate-x-2 transition-all duration-300"
                >
                  {line}
                </div>
              ))}
            </motion.div>

            <motion.div
              key={`desc-${currentSlide}`}
              variants={slideVariants("left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.div>

            <motion.div
              key={`button-${currentSlide}`}
              variants={slideVariants("right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="pt-2 md:pt-4"
            >
              <button
                className="bg-black text-white px-6 md:px-10 py-2.5 md:py-3.5 rounded-none 
                                text-sm md:text-base tracking-wider uppercase font-medium 
                                transition-all duration-300 hover:bg-gray-800
                                focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                onClick={() => {
                  navigate("/directory/all-products");
                }}
              >
                Khám phá ngay
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            key={`image-${currentSlide}`}
            variants={slideVariants("right", 200)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative h-[45vh] md:h-[60vh] lg:h-[75vh] flex items-center justify-center overflow-hidden order-1 lg:order-2"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute h-full w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center w-full absolute bottom-4 md:bottom-8 left-0 px-4 md:px-8 lg:px-12">
          {/* Dots Navigation */}
          <div className="flex space-x-2 md:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 md:h-2 transition-all duration-300 
                                    ${
                                      index === currentSlide
                                        ? "bg-black w-6 md:w-10"
                                        : "bg-gray-300 w-4 md:w-5 hover:bg-gray-400"
                                    }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-sm md:text-base font-medium hover:scale-110 transition-all duration-300">
            <span className="text-black">
              {(currentSlide + 1).toString().padStart(2, "0")}
            </span>
            <span className="text-gray-400">
              /{slides.length.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
