import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "RoomWala | Terms";
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold py-5">
        {" "}
        Terms and Conditions
      </h1>

      <div className="space-y-5">
        <p className="text-center">
          Welcome to RoomWala. By accessing or using our website, you agree to
          be bound by these Terms and Conditions.
        </p>

        <p>
          <span className="text-[20px] font-semibold">
            1. Acceptance of Terms
          </span>{" "}
          <br />
          By using this site, you confirm that you have read, understood, and
          agreed to these terms. If you do not agree, please do not use our
          services.
        </p>

        <p>
          <span className="text-[20px] font-semibold">2. Changes to Terms</span>{" "}
          <br />
          We may update these terms from time to time. Continued use of the site
          means you accept the revised terms.
        </p>

        <p>
          <span className="text-[20px] font-semibold">3. User Accounts</span>{" "}
          <br />
          If you create an account, you are responsible for maintaining the
          confidentiality of your account information and for all activities
          under your account.
        </p>

        <p>
          <span className="text-[20px] font-semibold">
            4. Use of the Website
          </span>{" "}
          <br />
          You agree to use the website only for lawful purposes and in a way
          that does not infringe the rights of others or restrict their use of
          the site.
        </p>

        <p>
          <span className="text-[20px] font-semibold">
            5. Intellectual Property
          </span>{" "}
          <br />
          All content on this website, including text, graphics, logos, and
          images, is the property of EventNest or its content suppliers and is
          protected by copyright laws.
        </p>
        <p>
          <span className="text-[20px] font-semibold">
            6. Third-Party Links
          </span>{" "}
          <br />
          Our website may contain links to third-party sites. We are not
          responsible for the content or practices of these external websites.
        </p>

        <p>
          <span className="text-[20px] font-semibold">7. Termination</span>{" "}
          <br />
          We reserve the right to suspend or terminate your access to the site
          if you violate these terms.
        </p>

        <p>
          <span className="text-[20px] font-semibold">
            8. Limitation of Liability
          </span>
          <br />
          We are not liable for any direct, indirect, or consequential damages
          resulting from your use of the website.
        </p>

        <p>
          <span className="text-[20px] font-semibold">9. Privacy Policy</span>{" "}
          <br />
          Your use of the website is also governed by our Privacy Policy, which
          can be found here.
        </p>

        <p>
          <span className="text-[20px] font-semibold">10. Governing Law</span>{" "}
          <br />
          These terms are governed by and construed in accordance with the laws
          of Bangladesh, and you agree to submit to the exclusive jurisdiction
          of the courts of Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default Terms;
