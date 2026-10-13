import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="text-gradient">About Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-8 space-y-4"
        >
          <p className="text-slate-300 leading-relaxed">
            Backend engineer who builds and operates automation-heavy systems in
            production using Node.js, TypeScript and Python.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I currently own a fleet of 5–6 Playwright-based robots that
            integrate with major Brazilian health insurers' portals to automate
            quoting for insurance brokers. I keep them reliable with structured
            logging, traces and monitoring on AWS (EC2, S3, CloudWatch), and I
            maintain the repositories, project templates (our "Golden Path")
            and deployment workflows around them. I also work with MySQL daily,
            writing queries to support backend operations, and I configure AWS
            IAM policies for the services I run.
          </p>
          <p className="text-slate-300 leading-relaxed">
            What I enjoy most is backend work where you can watch a system run
            and make it better: designing APIs, hardening integrations against
            changing third-party systems, and adding observability so failures
            are found and fixed fast. I work with senior engineers on technical
            decisions.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I lived and studied in Orlando, FL (2017–2019), so I have advanced
            English and am comfortable in US-style team culture. I'm finishing
            an associate's degree in Systems Analysis and Development (December
            2026).
          </p>
          <p className="text-slate-300 leading-relaxed">
            <span className="text-cyan-400 font-medium">Core stack:</span>{" "}
            Node.js · TypeScript · Python · Playwright · REST APIs · AWS (EC2,
            S3, CloudWatch, IAM) · MySQL · Git/GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
