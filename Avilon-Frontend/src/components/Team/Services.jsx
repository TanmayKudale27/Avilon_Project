import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const services = [
  {
    icon: "bi-activity",
    title: "Nesciunt Mete",
    description:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: "bi-broadcast",
    title: "Eosle Commodi",
    description:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: "bi-easel",
    title: "Ledo Markt",
    description:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: "bi-gem",
    title: "Asperiores Commodit",
    description:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    icon: "bi-calendar4-week",
    title: "Velit Doloremque",
    description:
      "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    icon: "bi-chat-left-text",
    title: "Dolori Architecto",
    description:
      "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold text-dark">Services</h2>
        <div className="border-bottom mx-auto mb-3" style={{ width: "60px", borderWidth: "3px", borderColor: "#00b4b6" }}></div>
        <p className="text-muted mb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="border h-100 p-4 rounded-2 shadow-sm">
                <div className="bg-info text-white rounded mx-auto mb-3 d-flex justify-content-center align-items-center" style={{ width: "48px", height: "48px" }}>
                  <i className={`bi ${service.icon} fs-4`}></i>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
