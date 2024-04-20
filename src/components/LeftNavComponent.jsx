import * as React from "react";
import { Link } from "react-router-dom";

function IconButton({ icon, label, to }) {
  return (
    <Link to={to} className="icon-button">
      <div className="icon-container">
        <div className="icon-wrapper">
          <img src={icon} alt="" className="icon" />
        </div>
      </div>
      <div className="label">{label}</div>
    </Link>
  );
}

const iconButtons = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3336b828ecdb9a966ac9a3e93a6a5c6ad0441deecfb9c2da1eddce7fcafe921e?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Markets", to: "/markets" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/944361c0b6a0afcf899271e108a8a57758772daf7f64b167405780fe1cd54507?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Sites" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31c96893d6eb1bf7fd9b358098d558b6f9f8ebfd2e423d54d2c2821dc6d50c35?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Broken Trends" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb7130415deee3c36de7cd5e260c5c0ce3beb831cdd77eb5366a3744f812e692?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Audit & Reports" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cf8004a822049866a0091e09a8895b61dad316110e801e65cc142a9b3963784?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Maps" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4cbf96de3e190a7d676ad575cc5a910347b5c56006e01c95aa25591121422d?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Tasks" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f56d887bcfbfb40932e84e0abbd845a1ba138d446753a3ef483ff6bcde7a4ba?apiKey=a938513dc279413eaac5ce0f8c637f66&", label: "Optimise" },
];

function LeftNavComponent() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
        <Link to ="/">
          <div className="dashboard-button">
            <div className="dashboard-icon-container">
              <div className="dashboard-icon-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d5c1ac017bb5b23f32b6aa72dc378251225a0ad3ba2d96883435d21af76dc27?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  alt="Dashboard icon"
                  className="dashboard-icon" 
                />
              </div>
            </div>
            <div className="dashboard-label">Dashboard</div>
          </div>
          </Link>
          {iconButtons.map((button, index) => (
            <IconButton key={index} icon={button.icon} label={button.label} to={button.to} />
          ))}
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c8eb3c50bd4c0820f93a6f662ae92f3379743d5693f468d549ea3460bc7f4b?apiKey=a938513dc279413eaac5ce0f8c637f66&" alt="" className="logo" />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 68px;
          padding-bottom: 27px;
          background-color: #fff;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dashboard-button {
          display: flex;
          flex-direction: column;
          padding: 0 7px;
        }

        .dashboard-icon-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2px 12px;
        }

        .dashboard-icon-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 0;
        }

        .dashboard-icon {
          width: 20px;
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
        }

        .dashboard-label {
          color: #e00;
          font: 700 11px Verizon NHG eDS, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-align: center;
        }

        .icon-button {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
          padding: 0 7px;
        }

        .icon-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2px 12px;
        }

        .icon-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 0;
        }

        .icon {
          width: 20px;
          height: 20px;
          border-radius: 24px;
          background-color: rgba(255, 255, 255, 0);
        }

        .label {
          color: #000;
          font: 700 11px Verizon NHG eDS, -apple-system, Roboto, Helvetica,
            sans-serif;
          text-align: center;
        }

        .logo {
          width: 24px;
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          align-self: center;
          margin-top: 97px;
        }
      `}</style>
    </>
  );
}

export default LeftNavComponent;