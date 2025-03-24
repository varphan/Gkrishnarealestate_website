"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";
import ImageEnhancementServiceList from "@/components/ImageEnhancementServiceList";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import UpArrowButton from "@/components/UpArrowButton";
import LoadingScreen from "@/components/LoadingScreen";

// Image Enhancement Services Data
const imageEnhancementServices = [
  {
    title: "White Balancing",
    description:
      "Balancing allows objects that are white in person to be rendered white in the photo so the property can be shown in the best light. We also remove yellow or off-white discoloration to create a bright, crisp image.",
    beforeImagePath: "/images/image-enhancer/white-balancing/before.jpg",
    afterImagePath: "/images/image-enhancer/white-balancing/after.jpg",
  },
  {
    title: "Image Sharpening",
    description:
      "An important process in ensuring your photos are top quality with a professional finish. By sharpening the image, it will emphasize texture and improve the overall quality of your photo.",
    beforeImagePath: "/images/image-enhancer/image-sharpner/before.jpg",
    afterImagePath: "/images/image-enhancer/image-sharpner/after.jpg",
  },
  {
    title: "Vertical & Horizontal Straightening",
    description:
      "A great photo is all about composition. An image with a wonky horizon can make a photo look unprofessional, while incorrect vertical lines can make an image look distorted or as if the walls are leaning backwards. Correcting these issues will make for a photo that is pleasing to the eye.",
    beforeImagePath: "/images/image-enhancer/vertical-and-horizontal/before.jpg",
    afterImagePath: "/images/image-enhancer/vertical-and-horizontal/after.jpg",
  },
  {
    title: "Lens Distortion Removal",
    description:
      "When shooting without professional equipment or the incorrect lens, distortion can occur as the lens tries to squeeze as much into the photo frame as possible. As a result, straight lines will be visibly curved. This can be rectified and will ensure the walls are straight.",
    beforeImagePath: "/images/image-enhancer/lens-distortion-removal/before.jpg",
    afterImagePath: "/images/image-enhancer/lens-distortion-removal/after.jpg",
  },
  {
    title: "Brightness & Contrast Adjustment",
    description:
      "A bright photo with the correct contrast is great to look at and more likely to draw a potential buyer’s attention. Adjusting these elements will create depth, making the photo more engaging and inviting to the viewer.",
    beforeImagePath: "/images/image-enhancer/contrast/before.jpg",
    afterImagePath: "/images/image-enhancer/contrast/after.jpg",
  },
  {
    title: "Sky Replacement",
    description:
      "Don’t let a gloomy day ruin your photos. Our professional editing team can replace a sky that is overcast, washed out or overexposed with a beautiful clear, blue sky.",
    beforeImagePath: "/images/image-enhancer/sky-replace/before.jpg",
    afterImagePath: "/images/image-enhancer/sky-replace/after.jpg",
  },
  {
    title: "Lawn Enhancement, Repair or Replace",
    description:
      "A perfect lawn is important when selling a home because it adds to the curb appeal. Repairing a lawn that may be a little brown from a lack of rain or replacing sections can show potential buyers just how great the lawn can be.",
    beforeImagePath: "/images/image-enhancer/lawn-enhancement/before.jpg",
    afterImagePath: "/images/image-enhancer/lawn-enhancement/after.jpg",
  },
  {
    title: "Tone Adjustment",
    description:
      "Tone adjustment is a great tool to add a dramatic effect to an image or a light mood, depending on the type of photo. When it comes to selling property, the correct tone will help an image appear bright and welcoming.",
    beforeImagePath: "/images/image-enhancer/tone-adjustment/before.jpg",
    afterImagePath: "/images/image-enhancer/tone-adjustment/after.jpg",
  },
  {
    title: "TV Screen Replacement",
    description:
      "While TVs have made great advances in their look, a black box is unappealing in a beautiful lounge room, so replacing the blank screen with a beautiful image can really enhance the photo and the mood of the room. It is also a great way to hide any unwanted reflections that may be on the screen, such as a flash or people in the room.",
    beforeImagePath: "/images/image-enhancer/tv-screen-replacement/before.jpg",
    afterImagePath: "/images/image-enhancer/tv-screen-replacement/after.jpg",
  },
  {
    title: "Dust Spot Removal",
    description:
      "Dust can be hard to spot on a lens, especially the small lens of a smartphone. These spots that blur your photo or leave a mark can be removed to help create that perfect photo.",
    beforeImagePath: "/images/image-enhancer/dust-spot-removal/before.jpg",
    afterImagePath: "/images/image-enhancer/dust-spot-removal/after.jpg",
  },
  {
    title: "Flash Reflection Removal",
    description:
      "Sometimes the use of a flash is required to light up a dark room, but as a result can leave dramatic reflections and shadows in the image. This can be corrected to create a drastically more professional looking photo.",
    beforeImagePath: "/images/image-enhancer/flash-reflection/after.jpg",
    afterImagePath: "/images/image-enhancer/flash-reflection/after.jpg",
  },
  {
    title: "Add Fire to Fireplaces",
    description:
      "Show just how cozy and inviting a room can be by adding a warming fire in the fireplace. Adding a fire will grab the viewer’s attention and is likely to evoke feelings of comfort.",
    beforeImagePath: "/images/image-enhancer/fire-replace/before.jpg",
    afterImagePath: "/images/image-enhancer/fire-replace/after.jpg",
  },
  {
    title: "HDR Bracketing with Indoor Window Replacement",
    description:
      "If you shoot bracketed shots, we can edit your images. Bracketing allows bright exteriors and dark interiors to appear as your eye sees them.",
    beforeImagePath: "/images/image-enhancer/hdr-bracketing/before.jpg",
    afterImagePath: "/images/image-enhancer/hdr-bracketing/after.jpg",
  },
  {
    title: "Remove Photographer’s Reflection",
    description:
      "Nobody wants to know what the photographer looks like or what camera you are using. We remove photographer & camera reflections for a streamlined shot.",
    beforeImagePath: "/images/image-enhancer/camara-remove/before.jpg",
    afterImagePath: "/images/image-enhancer/camara-remove/after.jpg",
  },
];
export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [homeFadeIn, setHomeFadeIn] = useState(false);

  const sectionRefs = {};


  useEffect(() => {
    window.scrollTo(0, 0);
    const timer1 = setTimeout(() => {

      setIsLoading(false);
    }, 3000);

    const timer2 = setTimeout(() => {
      setHomeFadeIn(true);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleServiceClick = (serviceTitle) => {
    const section = sectionRefs[serviceTitle]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Home Page Content */}
      <div
        className="bg-gray-100 min-h-screen flex flex-col transition-opacity duration-1000"
        style={{ opacity: homeFadeIn ? 1 : 0 }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <header
          id="home"
          className="relative flex items-center justify-center text-white py-28 px-6 min-h-[600px]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero_image.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full">
            <div className="md:w-1/2 text-left">
              <h1 className="text-5xl font-extrabold leading-tight">
                G Krishna Real Estate Edits
              </h1>
              <p className="text-xl mt-4 max-w-2xl">
                High-quality real estate photo editing services
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <ContactBanner />
            </div>
          </div>
        </header>

        {/* Image Enhancement Services List */}
        <ImageEnhancementServiceList
          title="Image Enhancement Services"
          services={imageEnhancementServices.map((service) => service.title)}
          onServiceClick={handleServiceClick} // Pass the handleServiceClick function
        />

        {/* Before & After Sections */}
        {imageEnhancementServices.map((service, index) => (
          <div key={service.title} ref={sectionRefs[service.title]}>
            <BeforeAfterSection
              title={service.title}
              description={service.description}
              beforeImage={service.beforeImagePath}
              afterImage={service.afterImagePath}
              reverse={index % 2 !== 0}
            />
            {index < imageEnhancementServices.length - 1 && (
              <div className="h-0.5 bg-sky-200 my-8 mx-auto w-3/4"></div>
            )}
          </div>
        ))}

        {/* Up Arrow Button */}
        <UpArrowButton />

        {/* Footer */}
        <Footer />
      </div>

      {/* Loading Screen Overlay */}
      {isLoading && <LoadingScreen />}
    </div>
  );
}
