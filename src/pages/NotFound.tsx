import { Link } from "react-router-dom";
import { Page } from "../components/ui";
import { useContent } from "../i18n";

const NotFound = () => {
  const { t } = useContent();
  return (
  <Page>
    <section className="page flex min-h-[80vh] flex-col justify-center pt-24">
      <p className="text-ink3">404</p>
      <h1 className="display mt-2 text-[clamp(3rem,10vw,7rem)]">{t.notFound.title}</h1>
      <p className="mt-4 max-w-[44ch] text-ink2">
        {t.notFound.body}
      </p>
      <div className="mt-8">
        <Link to="/" className="btn-primary">
          {t.notFound.home}
        </Link>
      </div>
    </section>
  </Page>
  );
};

export default NotFound;
