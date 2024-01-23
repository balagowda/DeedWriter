import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Sale = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Sale Deed" : "ಕ್ರಯ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          A sale deed is a legal document that transfers the ownership of a The
          sale deed includes important details such as the description of the
          property, the sale consideration (the amount paid for the property),
          details of the buyer and seller, and any other terms and conditions
          agreed upon by both parties.
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              <b className="bold">Property Description:</b> The sale deed
              contains a detailed description of the property being sold,
              including its location, boundaries, and any other relevant
              details.
            </li>
            <li>
              <b className="bold">Details of the Parties:</b> The names,
              addresses, and other identifying information of both the buyer and
              the seller are included in the sale deed.
            </li>
            <li>
              <b className="bold">Sale Consideration:</b> This refers to the
              amount of money or other considerations agreed upon by the parties
              as the sale price for the property.
            </li>
            <li>
              <b className="bold">Mode of Payment:</b> The mode and schedule of
              payment, including any advance payments made, are specified in the
              sale deed.
            </li>
            <li>
              <b className="bold">Signatures and Witnesses:</b> The sale deed is
              signed by both the buyer and the seller. It may also require the
              presence of witnesses, whose signatures attest to the authenticity
              of the transaction.
            </li>
          </ul>
        </div>
        <div className="sale_docs">
        <h4 className="sale_subheader">Required Documents</h4>
        <details>
          <summary style={{cursor:"pointer"}}>Buyer</summary>
          <ul>
            <li>Adhar Card (Any add.Proof)</li>
          </ul>
        </details>
        <details>
          <summary style={{cursor:"pointer"}}>Seller</summary>
          <ul>
            <li>Adhar Card (Any add.Proof)</li>
            <li>RTC (with OLD RTC)</li>
            <li>MR</li>
            <li>RR</li>
            <li>Old Documents (eg. Sale /Partition /Gift /Release Deed)</li>
            <li>5 & 6</li>
            <li>Family Tree</li>
            <li>PAN Card</li>
          </ul>
        </details>
      </div>
      </div>
      
    </div>
  );
};

export default Sale;
