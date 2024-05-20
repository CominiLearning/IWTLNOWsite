import "./DiscordSection.scss";
import { ReactComponent as Discord } from "../../assets/svg/discord.svg";

export default function DiscordSection() {
  
  function handleDiscordRedirect() {
    window.open("https://discord.gg/ksGg9ACb")
  }

  return (
    <div className="discord_section">
      <div className="discord_section__header">
        <div className="discord_section__header__title">
          Got an Idea? Ask Away!
        </div>
        <div className="discord_section__header__subtitle">
          Do you have any special feature requests? Any one thing you would
          really like us to add? Please let us know on our Discord Channel!
        </div>
      </div>
      <div className="discord_section__discord_button">
        <button onClick={handleDiscordRedirect}>
          <Discord></Discord> Request on Discord
        </button>
      </div>
    </div>
  );
}
