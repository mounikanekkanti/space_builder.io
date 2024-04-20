import * as React from "react";

function HeaderComponent() {
  const statusItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a7ee0eb2348aef320faf934e98877b7c468fa5cd75f5abedcd2a4182c9979d6?apiKey=a938513dc279413eaac5ce0f8c637f66&",
      text: "121 - Ballimore - NYE",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a99c9a6b45a545632ef04775b24bbff1250881aada137ced9541bec5c567d45?apiKey=a938513dc279413eaac5ce0f8c637f66&",
      text: "4G",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cee4e6c5b35acbf40007e5a5eaa48ebe47bcddf78326d523187471bebac4c549?apiKey=a938513dc279413eaac5ce0f8c637f66&",
      text: "Mobility",
    },
  ];

  return (
    <header className="status-bar">
      <div className="status-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07143eb4925f8e1c6ea2ea2e2e8afa021d8d28337ea58078e75b9d4dd5d24250?apiKey=a938513dc279413eaac5ce0f8c637f66&" alt="" className="status-icon" />
        <div className="status-text">
          <img src={statusItems[0].icon} alt="" className="status-icon" />
          <span>{statusItems[0].text}</span>
        </div>
      </div>
      <div className="status-items">
        {statusItems.slice(1).map((item, index) => (
          <div key={index} className="status-item">
            <img src={item.icon} alt="" className="status-icon" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--blackl-000000-dffffff, #000);
          color: var(--whitelffffffd-000000, #fff);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.5px;
          line-height: 143%;
          padding: 6px 8px;
          gap: 12px;
        }

        @media (max-width: 991px) {
          .status-bar {
            flex-wrap: wrap;
          }
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 2px 0;
        }

        .status-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .status-text {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 20px;
        }

        .status-text span {
          font-family: Verizon NHG eDS, -apple-system, Roboto, Helvetica, sans-serif;
          font-feature-settings: "clig" off, "liga" off;
        }

        .status-items {
          display: flex;
          gap: 8px;
          margin: auto 0;
          padding: 0 20px;
        }

        @media (max-width: 991px) {
          .status-items {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </header>
  );
}

export default HeaderComponent;