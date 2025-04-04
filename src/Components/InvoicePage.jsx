import React from "react";
import "./InvoicePage.css";

const InvoicePage = () => {
  return (
    <div>
      {/* Invoice Card */}
      <main className="invoice-container">
        <div className="invoice-card">
          <button className="close-button">✖</button>
          <h2>YOUR INVOICE</h2>
          <table className="invoice-table">
            <tbody>
              <tr>
                <td>Venue Charge</td>
                <td>₹85,000/-</td>
              </tr>
              <tr>
                <td>Decoration Charge</td>
                <td>₹1,23,000/-</td>
              </tr>
              <tr>
                <td>Comfort Zone Charge</td>
                <td>₹6,500/-</td>
              </tr>
              <tr>
                <td>People Per Head</td>
                <td>300 × 70 = ₹21,000/-</td>
              </tr>
              <tr>
                <td>Service Charge</td>
                <td>₹15,000/-</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>₹4,200/-</td>
              </tr>
              <tr>
                <td>Portal Charge</td>
                <td>₹700/-</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th>₹2,55,000/-</th>
              </tr>
            </tfoot>
          </table>
          <button className="pay-now-button">Pay Now</button>
        </div>
      </main>
    </div>
  );
};

export default InvoicePage;
