import { useContent } from "../i18n";

const Footer = () => {
  const { profile, t } = useContent();
  return (
  <footer className="border-t border-rule">
    <div className="page flex flex-col gap-2 py-8 text-[0.9rem] text-ink3 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}, {profile.location}
      </p>
      <p>
        {t.footer.built}{" "}
        <a
          href="https://github.com/Passetti-cmd/erick-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-ink2 hover:text-ink"
        >
          {t.footer.source}
        </a>
      </p>
    </div>
  </footer>
  );
};

export default Footer;
