import React from "react";
import { useFormik } from "formik";
// import ValidationRules from "./ValidationRules";
import ContactService from "../../services/ContactService";
import { toast } from "react-toastify";
import {Helmet} from "react-helmet"


export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    // validationSchema: ValidationRules,
    onSubmit: (contact) => {
      let contactService = new ContactService();
      contactService.send(contact).then((result) => toast.success(result.data.message));
    // console.log(contact);
    },
  });

  return (
    <div>      <Helmet>
    <title>ULUDAĞ ÇORAP - İletişim</title>
  </Helmet>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1620254753811!6m8!1m7!1sQ8MEiPRsHwaj0934XRFxHQ!2m2!1d41.02990062631284!2d28.9045327963736!3f257.2!4f-6.189999999999998!5f0.4000000000000002"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <span>Bilgi</span>
                  <h2>Bizimle iletişime geçin</h2>
                  <p>
                    Şikayetiniz, önerileriniz için ve tüm sorularınız için
                    yazabilirsiniz.
                  </p>
                </div>
                <ul>
                  <li>
                    <h4>İstanbul/Bayrampaşa</h4>
                    <p>
                      Terazidere, Korkmaz Sk. No:1, 34035 Bayrampaşa/İstanbul{" "}
                      <br />
                      <a className="tel" href="tel:(90) 533 304 7567">
                        +90 533 304 7567
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.errors.firstName).toString()}
                        placeholder="Ad"
                      />
                      {formik.errors.lastName &&
                        formik.touched.lastName && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.firstName}
                          </div>
                        )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.errors.lastName).toString()}
                        placeholder="Soyad"
                      />
                      {formik.errors.lastName &&
                        formik.touched.lastName && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.lastName}
                          </div>
                        )}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.errors.email).toString()}
                        placeholder="Email"
                      />
                      {formik.errors.email &&
                        formik.touched.email && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.email}
                          </div>
                        )}
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        id="message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.errors.message).toString()}
                        placeholder="Mesaj"
                      />
                      {formik.errors.message &&
                        formik.touched.message && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.message}
                          </div>
                        )}
                      <button type="submit" className="site-btn">
                        Mesajı Gönder
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
