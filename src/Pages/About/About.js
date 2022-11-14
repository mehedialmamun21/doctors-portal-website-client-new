import React from "react";
const About = () => {
  return (
    <section>

      <div className="px-5 py-5 h-screen bg-gray-100">
        <div>
          <p className="font-bold mb-5 text-primary text-lg">About Us</p>
          <p className="">In the last few years we have been proudly witnessing the astounding pace of progress in health care delivery system in the private sector in Bangladesh. Our doctors have made remarkable achievements in almost all specialties of medical science. Diagnostic facilities are getting latest technological advents. Patient-related services are becoming professional and patient-friendly. <br />
            "Doctors BD" Specialized Hospital has been established with the spirit and dedication focused on comprehensive medical care and management services. Multidisciplinary medical professionals have assembled with their expertise and experience on the common platform of Labaid Specialized Hospital to make it a complete and world-class healthcare service provider. Our patients will no more have to worry about where to go for best possible treatment.</p>
        </div>

        <div>
          <p className="font-bold my-5 text-primary text-lg">Our Location</p>
          <p> <span className="font-semibold">Address:</span> House- 06, Road-04, Dinajpur, Bangladesh.</p>
          <p> <span className="font-semibold">Hours:</span> Open 24 hours</p>
        </div>

        <div>
          <p className="font-bold text-primary my-5 text-lg">What Makes Us Special</p>
          <ul>
            <li>i. LASER TECHNOLOGY</li>
            <li>ii. PAINLESS INJECTION</li>
            <li>iii. 3D DENTAL SCANNER</li>
            <li>iv. DENTAL IMPLANT</li>
            <li>v. DIGITAL SMILE DESIGN</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default About;
