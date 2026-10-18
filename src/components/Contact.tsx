import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { DisplayHeading } from "./ui";
import { useContent } from "../i18n";

/*
 * mailto: links do nothing on machines without a mail app configured (common
 * on Windows), so the address copies on click and Gmail is offered as well.
 */
const useCopy = (text: string) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers / insecure contexts: fall back to a hidden textarea.
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
};

const Contact = () => {
  const { profile, t, cvUrl } = useContent();
  const { copied, copy } = useCopy(profile.email);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-rule">
      <div className="page py-24 md:py-36">
        <DisplayHeading id="contact-title" className="section-title">
          {t.nav.contact}
        </DisplayHeading>
        <p className="mt-4 max-w-[48ch] text-ink2">{t.contact.lead}</p>

        <div className="relative mt-10">
          <button
            onClick={copy}
            className="display link-underline group inline-flex max-w-full items-center gap-4 text-left text-[clamp(2.1rem,7.4vw,6.5rem)] leading-[1]"
          >
            <span className="break-all sm:break-normal">{profile.email}</span>
            <span className="hidden shrink-0 text-ink3 transition-colors group-hover:text-ink sm:inline-flex">
              {copied ? (
                <Check className="h-[0.4em] w-[0.4em] text-ok" />
              ) : (
                <Copy className="h-[0.4em] w-[0.4em]" />
              )}
            </span>
          </button>

          <AnimatePresence>
            {copied && (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-9 left-0 inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-[0.85rem] text-bg"
              >
                <Check className="h-3.5 w-3.5" />
                {t.contact.copiedToast}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button onClick={copy} className="btn-primary min-w-[10rem] justify-center">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Mail className="h-4 w-4" /> {t.contact.gmail}
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            {t.contact.mailApp}
          </a>
          {cvUrl && (
            <a href={cvUrl} download className="btn-ghost">
              <Download className="h-4 w-4" /> {t.hero.downloadCv}
            </a>
          )}
          <span className="mx-1 hidden h-6 w-px bg-rule sm:block" aria-hidden />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.github}
            className="grid h-11 w-11 place-items-center rounded-full text-ink2 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.linkedin}
            className="grid h-11 w-11 place-items-center rounded-full text-ink2 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
