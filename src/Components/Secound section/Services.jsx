import React from "react";
import Icon1 from "../../assets/Icons/serv1.png";
import Icon2 from "../../assets/Icons/serv2.png";
import Icon3 from "../../assets/Icons/serv3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeInOut" } },
});

const servData = [
  {
    id: 1,
    title: "Security",
    discription:
      "Our website ensures robust protection of customer data using encryption, secure access protocols, and regular security updates, safeguarding personal information and ensuring a safe, trustworthy shopping experience.",
    Icon: Icon1,
    delay: 0.4,
  },
  {
    id: 2,
    title: "Guarantee",
    discription:
      "Customer data protection is ensured through modern security technologies such as encryption and access control. We are committed to maintaining the confidentiality of personal information and preventing unauthorized access, ensuring a safe and trustworthy shopping experience.",
    Icon: Icon2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    discription:
      "We offer a variety of computer products at competitive prices, ensuring both quality and affordability. Our goal is to provide cost-effective options that deliver excellent performance and reliability for every budget.",
    Icon: Icon3,
    delay: 1,
  },
];

const ServiceCard = React.memo(({ data }) => (
  <motion.div
    key={data.id}
    variants={fadeUp(data.delay)}
    initial="hidden"
    whileInView="show"
    whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
    className="flex flex-col justify-center items-center border-gray-200 bg-white shadow-xl mx-auto p-5 border rounded-lg hover:rounded-3xl max-w-[300px] h-[350px] translate-all duration-500"
  >
    <img src={data.Icon} alt={data.title} className="mb-4 w-[100px]" />
    <div className="space-y-2 text-center">
      <h1 className="font-bold text-2xl">{data.title}</h1>
      <p className="text-black/75 text-center text-sm">{data.discription}</p>
    </div>
  </motion.div>
));

const Services = () => (
  <div>
    <section className="bg-gray-300 py-8 font-Poppins">
      <div className="mx-auto py-14 container">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1,
            scale: 4,
            mixBlendMode: "difference",
          }}
        >
          <motion.h1
            variants={fadeUp(1)}
            initial="hidden"
            whileInView="show"
            className="pb-10 font-bold text-3xl text-center"
          >
            Services
          </motion.h1>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {servData.map((data) => (
              <ServiceCard key={data.id} data={data} />
            ))}
          </div>
        </UpdateFollower>
      </div>
    </section>
  </div>
);

export default Services;
