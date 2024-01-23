import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Partition = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Partition Deed" : "ವಿಭಾಗ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          A partition deed is a legal document used to divide and distribute the
          joint ownership of a property among its co-owners. This typically
          occurs when multiple individuals own a property together, and they
          decide to separate their respective shares in a specific and legally
          documented manner.
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              <b className="bold">Division of Property:</b>
              The primary purpose of a partition deed is to specify how a
              property will be divided among its co-owners. It outlines the
              proportion of shares each co-owner will receive after the
              partition.
            </li>
            <li>
              <b className="bold">Details of the Parties:</b> The names,
              addresses, and other identifying information of all co-owners
              involved in the partition are included in the deed.
            </li>
            <li>
              <b className="bold">Consideration:</b>
              Unlike a sale deed, where money is exchanged, a partition deed may
              not involve a monetary consideration. Instead, it specifies the
              share of each co-owner in the property.
            </li>
            <li>
              <b className="bold">Settlement of Disputes:</b>
              Partition deeds are often used to settle disputes among co-owners
              regarding the use, possession, and ownership of the jointly held
              property. By formalizing the partition through a legal document,
              potential conflicts can be resolved.
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
            <summary style={{ cursor: "pointer" }}>Donee or Recipient</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>Donor or Giver</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC</li>
              <li>MR</li>
              <li>Family Tree</li>
              <li>Original letter</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Partition;
