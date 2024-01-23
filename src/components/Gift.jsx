import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Gift = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Gift Deed" : "ದಾನ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          A gift deed is a legal document used to transfer ownership of a
          property, asset, or certain rights from one person (the donor or
          giver) to another (the donee or recipient) without the exchange of
          money. In essence, it represents a voluntary transfer of property as a
          gift.
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              <b className="bold">Voluntary Transfer:</b>
              Unlike a sale deed where the transfer involves a consideration
              (money or something else of value), a gift deed is a voluntary and
              gratuitous transfer. The donor willingly gives up their ownership
              rights without expecting anything in return.
            </li>
            <li>
              <b className="bold">Details of the Parties:</b> It contains the
              names, addresses, and other identifying information of both the
              donor and the donee.
            </li>
            <li>
              <b className="bold">Consideration:</b>
              While there is no monetary consideration involved, the gift deed
              may mention the love, affection, or goodwill that motivates the
              gift.
            </li>
            <li>
              <b className="bold">Tax Implications:</b>
              Depending on the jurisdiction, there may be tax implications for
              both the donor and the donee. In some cases, the recipient may
              need to pay taxes on the value of the gift.
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

export default Gift;
