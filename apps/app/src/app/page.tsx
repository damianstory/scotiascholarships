"use client";

import CircularTestimonials from "@v1/ui/circular-testimonials";
import type { Testimonial } from "@v1/ui/circular-testimonials";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const recipients: Testimonial[] = [
  {
    quote: "Receiving the Scotiabank myBlueprint STEM Scholarship is both an honour and a stepping stone for my post-secondary endeavours. More than just funding, this scholarship affirms my passion for STEM and recognizes the hard work I've put into robotics projects, hackathons, and community leadership. It also connects me to a wider network of students and professionals who are equally driven to make a difference, which opens up opportunities to learn from mentors and collaborate with like-minded individuals. This recognition strengthens my confidence and motivates me to keep exploring, and creating. Long-term, I aspire to become a robotics engineer, focused on using technology to solve real-world problems, especially in education and healthcare. This award is a reminder that my goals are within reach and that I have support along the way. I'm truly grateful for this opportunity and excited for what's to come.",
    name: "Rishi",
    designation: "Western University",
    theme: "STEM",
    src: "https://i.imgur.com/QlcED5i.png"
  },
  {
    quote: "Receiving the Scotiabank Financial Wellness Scholarship means more than financial support—it's a meaningful encouragement of the hard work and intention I've poured into my education and future planning. One of my goals is to graduate debt-free from university while developing healthy financial habits. This scholarship is a major step toward achieving that goal, easing the financial burden of post-secondary studies and allowing me to focus more on learning, growing, and contributing to my community. With the help of this scholarship, I have gained flexibility, and I am committed to using this support responsibly. I can better prioritize my academics, pursue meaningful part-time work, and manage my budget wisely for any future academic or unexpected expenses. Thank you so much to Scotiabank and myBlueprint for making this possible!",
    name: "Fengxiao (Aki)",
    designation: "Langara College, BC",
    theme: "Financial Wellness",
    src: "https://i.imgur.com/Eq2tj99.jpeg"
  },
  {
    quote: "Thank you, Scotiabank, for selecting me as the recipient of this scholarship. This award means more to me than words can fully express. I jumped up in class and in disbelief once I saw the email. It's not just financial support, it's a powerful vote of confidence in my future. As a student deeply passionate about business, entrepreneurship, and coaching, this scholarship allows me to focus on my studies without the added weight of financial stress. It is going to open doors to resources and opportunities I might not have otherwise had, allowing me to pursue my education with greater clarity, energy, and ambition. It reminds me that my goals whether it's building my soccer business that makes a difference or becoming a leader who inspires others are possible and worth striving for. Receiving this scholarship also motivates me to continue giving back to my community, my school, especially through youth soccer, where I aim to mentor the next generation of leaders on and off the field. This scholarship is not just an investment in my education, it's an investment in my future and in the values I hope to carry forward, resilience, service, and leadership. I am truly honored, and I am committed to making the most of this opportunity. Thank you again, Scotiabank, for believing in me.",
    name: "Gilbert",
    designation: "St Mary's University, NS",
    theme: "Financial Wellness",
    src: "https://i.imgur.com/ggHdHgY.jpeg"
  },
  {
    quote: "Winning this scholarship is an incredible honor that goes far beyond the financial support it provides. This $3750 award is a profound affirmation of my hard work and dedication, and it ignites an even greater passion for my goal of entering the medical field, specifically nursing. This scholarship will significantly ease the financial burden of pursuing post-secondary education, allowing me to focus more intently on my studies and gain invaluable experiences without the added stress. It opens doors to resources and opportunities that will undoubtedly enrich my academic journey. More than just a monetary gift, this award fuels my aspiration to make a tangible difference in people's lives through healthcare. It's a powerful motivation to excel in my nursing studies and ultimately achieve my long-term goal of becoming a compassionate and skilled healthcare professional.",
    name: "Neha",
    designation: "Macewan University, Alberta",
    theme: "Financial Wellness",
    src: "https://i.imgur.com/my22uEF.jpeg"
  },
  {
    quote: "This award will help me achieve a higher academic standing because I will have less financial burden and obligations such as work throughout my studies. The scholarship will allow me to be at a fairer position in relation to my peers, which will give me a higher chance of acceptance to a Master's Program later on. I have always worried about financing my education, so this award means the world to me. Thank you.",
    name: "Azure",
    designation: "McGill, QC",
    theme: "Financial Wellness",
    src: "https://i.imgur.com/hLYcRDx.jpeg"
  },
  {
    quote: "With all of the talented students across our region, I am very humbled to be chosen as the recipient of the Scotiabank STEM Scholarship for Atlantic/Quebec. It is a tremendous honour and a major highlight of my academic career to date. Looking forward, this scholarship provides me increased confidence to seek out opportunities to become an early adopter of emerging technologies and learn how I can embrace them in my business studies and future career aspirations. In ten years, perhaps I will look back at this scholarship as being a pivotal influence that helped lead me to pursue a technology career or become a technology founder. In addition, the financial support provided by this scholarship is very important and appreciated as I work to pay for my undergraduate degree and future post secondary studies. Thank you so much to Scotiabank for supporting me to pursue the next chapter of my life long learning with excitement, curiosity, and confidence.",
    name: "Taryn",
    designation: "University of PEI",
    theme: "STEM",
    src: "https://i.imgur.com/BRgeuiE.jpeg"
  },
  {
    quote: "I live at the intersection of two worlds: my Chinese heritage and Western upbringing, my creativity for art and curiosity for science, and my compassion to listen and voice to speak. I draw strength from my duality—never confined to a single perspective or space. In the same sense, this award supports not just my education, but the mission I have carried throughout: integration heals isolation. From using symbolic play to teach younger dancers to hosting interdisciplinary webinars that connect aspiring young scientists with distinguished professionals, I've seen the impact of science on society at large when we explore beyond traditional boundaries, creating connections between disciplines. This award empowers me to continue bridging disciplines, people, and ideas. The recognition brings motivation to my efforts, as I recognize its value for future generations. As a potential medical student, it lightens the financial pressure of my education and opens doors to many opportunities, such as attending scientific conferences, enriching both my academic and professional journey. Above all, it enables me to grow my knowledge to advance initiatives promoting accessible neuroscience education for all. This award reminds me that connection lies at the core of my journey—that I do not have to choose between my worlds, but can begin to create one where my dualities exist together. That is the future I strive for in the scientific community, and this award helps bring me one step closer.",
    name: "Irene",
    designation: "Tufts University, USA",
    theme: "STEM",
    src: "https://i.imgur.com/BrBdrTR.jpeg"
  },
  {
    quote: "This award extends beyond financial support, as it represents an affirmation of my passion for science. The award ensures that I am able to focus on my studies, as it eases the financial burden that comes with attending the university. Most importantly, this award provides me with internal empowerment as it boosts my confidence in my lifelong dream of being an individual that can improve society through science by means of medicine.",
    name: "Temitope",
    designation: "University of Regina",
    theme: "STEM",
    src: "https://i.imgur.com/dZ6BL15.png"
  },
  {
    quote: "Thank you, Scotiabank, for believing in me and investing in my future. As I pursue my Bachelor of Science in Business Administration at the Haas School of Business at UC Berkeley, this award not only relieves the financial burden of university but also provides immersive opportunities by connecting me with leading mentors, cutting-edge resources and Berkeley's expansive global alumni network. These experiences will empower me to pursue a career in private equity and eventually launch a venture capital fund dedicated to investing in scalable blockchain-based remittance programs. My ultimate goal is to modernize outdated financial systems with blockchain technology that uplifts underserved communities around the world. I am deeply grateful for Scotiabank's confidence in my potential and support of my journey.",
    name: "Justin",
    designation: "Haas School of Business University of California, Berkeley",
    theme: "Diversity",
    src: "https://i.imgur.com/Fxd8lxo.jpeg"
  },
  {
    quote: "Nada chose not to submit a statement, however, we are sure they are very grateful for the opportunity and scholarship.",
    name: "Nada",
    designation: "University of Ottawa",
    theme: "Diversity",
    src: "https://i.imgur.com/Isf9Scy.jpeg"
  },
  {
    quote: "Winning this scholarship would not only ease the financial burden on my family, it would also recognize the path I've walked and the dream I've held onto through difficult times. It would allow me to focus fully on my studies in the pre-veterinary program at UPEI, knowing that others believe in my potential. Most of all, it would help me move closer to becoming the kind of veterinarian I've dreamed of being since I was a child: one who leads with empathy, serves with purpose, and makes a meaningful difference.",
    name: "Leah",
    designation: "University of PEI",
    theme: "Diversity",
    src: "https://i.imgur.com/wN7E7w3.jpeg"
  },
  {
    quote: "This award means more than just financial support to me. As a student who has faced various obstacles in life, this award serves as a reminder that these obstacles have been recognized. It has shown me that I don't have to struggle through life alone, and that people and organizations are willing to help me on my life's journey. Winning this award has empowered me to continue striving for my future in the medical field with more optimism and determination. Along with the boost in morale, this award has allowed me to access resources, networking opportunities, and recognition that I would never have thought was possible. As I pursue my education to fulfill my dream of entering the medical field, this scholarship will alleviate the significant financial pressure that comes with university life, enabling me to focus entirely on my studies. Winning this award has also further solidified my optimistic view of diversity, allowing me to embrace my diversity to a greater extent. This scholarship has significantly helped me improve my overall life, and it truly means a great deal to me. I want to thank the entirety of the myBlueprint x Scotiabank Diversity Scholarship team for choosing me as the recipient of this scholarship.",
    name: "Jorray",
    designation: "University of Saskatchewan",
    theme: "Diversity",
    src: "https://i.imgur.com/hXDMFGT.jpeg"
  },
  {
    quote: "Receiving this generous award has pushed me even further as I continue my journey to SFU in the health sciences program this fall. I hope to pursue this degree and continue to medical school where I can find a specialising that speaks to my heart. I aim to become a compassionate doctor who shines light on the difficulties marginalized groups face in the health care system. This accomplishment reminds me that my efforts and dreams are seen and supported. It lifts a great burden from my shoulders and allows me to fully embrace my time at SFU—partaking into research opportunities, focusing on my studies and extracurriculars, and engaging in meaningful community initiatives—without the constant stress of financial strain. I am beyond grateful to the individuals who made all of this possible. Thank you for investing your time and resources into helping students like me succeed!",
    name: "Layan",
    designation: "Simon Fraser University",
    theme: "Future Women Leaders",
    src: "https://i.imgur.com/azJWF1q.jpeg"
  },
  {
    quote: "This award is incredibly valuable in my academic journey, as it will ease financial constraints especially on my parents, who are my main supporters. I aim to lighten the load off my parents in any way I can, since university can be costly. Additionally, this opportunity will inspire me to concentrate wholeheartedly on my studies, as well as to strive for excellence in all my endeavours: whether that be networking, researching, or starting initiatives. Receiving this award will not only provide a source of encouragement, but also a significant contribution towards my post-secondary path. Necessary resources such as textbooks and class material, skill-building programs and workshops, and largely tuition fees would be directly subsidized. With this support, I can delve deeper into my studies with the freedom to explore new horizons academically. This award is the first step I'm taking as a lifelong learner to create a future in which I can give back to the community that has supported me. Later down the road, I will be able to reflect on this award that has kickstarted my journey, with the hope that I can develop my own scholarship or bursary to invest in aspiring students with bright dreams. I am greatly honoured to receive this award, and I am determined to make the most of it!",
    name: "Angelika",
    designation: "University of Alberta",
    theme: "Future Women Leaders",
    src: "https://i.imgur.com/8DewcZ5.jpeg"
  },
  {
    quote: "Receiving this reward is both a big surprise and a huge honour to me. With this scholarship I will be able to access many art tools and other school related technology. I am incredibly grateful to have received this award and look forward to how it will assist me on my long path as an artist. I will also be able to access tools for my autism and different supports to aid me with this big transition in my life. Moreover, sharing my work with others and making something I can truly be proud of is another thing I am really looking forward to. Thank you for this wonderful opportunity.",
    name: "Kadence",
    designation: "Cambrian College",
    theme: "Future Women Leaders",
    src: "https://i.imgur.com/IPGBjI8.jpeg"
  },
  {
    quote: "Growing up as a young, racialized woman from a low-income household in the Tamil refugee community in Canada, this award is significant in reducing my financial burden to pursue my university education at McMaster University. It will provide direct financial support, helping to cover part of my tuition costs. I am grateful to be selected as the Ontario recipient of the Scotiabank Future Women Leaders Scholarship. This award inspires me to continue pursuing opportunities during my academic and professional journeys moving forward to uplift women and underrepresented voices.",
    name: "Olivia",
    designation: "McMaster University",
    theme: "Future Women Leaders",
    src: "https://i.imgur.com/3lF20XK.jpeg"
  }
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recipients.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recipients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      handlePrevious();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed bg-[#0f172a]" 
      style={{ 
        backgroundImage: 'url(https://i.imgur.com/4uJI3la.jpeg)',
      }}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Dark overlay for consistent text readability */}
      <div className="fixed inset-0 bg-black/20 pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-20 py-10 max-w-7xl relative z-10">
        <header className="text-center mb-4">
          <img 
            src="https://i.imgur.com/DpZBFXW.png" 
            alt="myBlueprint Scotiabank 2025 Scholarships" 
            className="mx-auto mb-6 max-w-full h-auto w-auto max-h-10 md:max-h-12 lg:max-h-14"
          />
          <p className="text-xl md:text-2xl text-white">
            Celebrating the 2025 <span className="text-[#EC111A] font-bold">Scotiabank</span> scholarship recipients 🎉
          </p>
        </header>

        <section 
          className="mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <CircularTestimonials
            testimonials={recipients}
            currentIndex={currentIndex}
            colors={{
              name: "#FFFFFF",
              designation: "#FFFFFF",
              testimony: "#FFFFFF",
              arrowBackground: "#EC111A",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#333333",
            }}
          />
        </section>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mb-9 space-x-6">
          <button
            onClick={handlePrevious}
            className="p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-[#333333]"
            style={{
              backgroundColor: "#EC111A",
              color: "#FFFFFF",
            }}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <div className="flex space-x-2">
            {recipients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8" : "w-2"
                }`}
                style={{
                  backgroundColor: index === currentIndex ? "#EC111A" : "#6b7280",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-[#333333]"
            style={{
              backgroundColor: "#EC111A",
              color: "#FFFFFF",
            }}
            aria-label="Next testimonial"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <footer className="text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-white leading-relaxed">
            Thank you, Scotiabank, for your continued partnership and commitment to empowering 
            the next generation of Canadian leaders. Together, we're making post-secondary 
            education more accessible and helping students achieve their dreams.
          </p>
        </footer>
      </div>
    </main>
  );
}