import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const teamMembers = [
  {
    name: "Walter White",
    role: "Web Development",
    img: "src/assets/team-1.jpg",
    desc:
      "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Jhinson",
    role: "Marketing",
    img: "src/assets/team-2.jpg",
    desc:
      "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "William Anderson",
    role: "Content",
    img: "src/assets/team-3.jpg",
    desc:
      "Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="team section py-5">
      <div className="container section-title mb-4">
        <h2 className="text-center mb-2">Team</h2>
        <div className="section-underline mx-auto"></div>
        <p className="text-center text-muted mt-3">
          <h6>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h6>
        </p>
      </div>
      <div className="container">
        <div className="row">
          {teamMembers.map((member, idx) => (
            <div
              className="col-lg-4 col-md-6 d-flex mb-4"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <div className="member w-100 bg-white rounded shadow-sm p-3">
                <img
                  src={member.img}
                  className="img-fluid rounded mb-3"
                  alt={member.name}
                  style={{ width: "100%", objectFit: "cover", height: "320px" }}
                />
                <div className="member-content">
                  <h4>{member.name}</h4>
                  <span className="text-muted">{member.role}</span>
                  <p>{member.desc}</p>
                  <div className="social mt-2">
                    <a href={member.social.twitter} className="me-2 text-dark">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href={member.social.facebook} className="me-2 text-dark">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.social.instagram} className="me-2 text-dark">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={member.social.linkedin} className="text-dark">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
