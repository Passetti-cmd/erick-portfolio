// Portuguese versions of the content in profile.ts and projects.ts.
// Keep the two in sync: same order, same ids.
import type {
  Certification,
  EducationItem,
  ExperienceItem,
  Metric,
  SkillGroup,
} from "./profile";
import type { Project } from "./projects";
import { projects as projectsEn } from "./projects";

export const rolePt = "Engenheiro de Software, Backend e Automação";
export const locationPt = "São Paulo, Brasil";
export const summaryPt =
  "Engenheiro backend construindo sistemas de automação resilientes com Node.js, TypeScript e AWS.";

export const metricsPt: Metric[] = [
  { label: "Robôs em produção sob minha responsabilidade", after: 6, unit: "", display: "5–6" },
  { label: "Tempo médio de cotação", before: 7, after: 3, unit: "min", approx: true },
  { label: "Taxa de erro depois das minhas correções", before: 35, after: 8, unit: "%", approx: true },
];

export const aboutPt = [
  "Construo e opero sistemas backend com muita automação, em produção, usando Node.js, TypeScript e Python.",
  "Gosto de problemas em que o sistema do qual dependo muda o tempo todo: portais de terceiros, redes instáveis, seletores que mudam. Minha abordagem é primeiro deixar as falhas visíveis (logs, traces, métricas) e depois torná-las rotina (retries, idempotência, runbooks claros).",
  "Morei e estudei em Orlando, FL (2017–2019), então trabalho com tranquilidade em inglês e em times no estilo americano. Estou terminando o tecnólogo em Análise e Desenvolvimento de Sistemas (dezembro de 2026).",
];

export const skillGroupsPt: SkillGroup[] = [
  { title: "Base", skills: ["Node.js", "TypeScript", "JavaScript", "Python", "SQL", "Playwright"] },
  {
    title: "Backend",
    skills: ["APIs REST", "Express", "FastAPI", "Autenticação JWT", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud e DevOps",
    skills: ["AWS EC2", "AWS S3", "CloudWatch", "IAM", "Docker", "CI/CD", "Git e GitHub", "Logs, traces, métricas"],
  },
  { title: "Dados", skills: ["Pandas", "NumPy", "Pipelines ETL", "Power BI"] },
];

export const experiencePt: ExperienceItem[] = [
  {
    title: "Engenheiro de Software",
    company: "Saúde Bliss",
    start: "mar 2025",
    end: "atual",
    location: "São Paulo, híbrido",
    type: "Tempo integral",
    current: true,
    summary:
      "Engenharia de backend e automação para uma plataforma insurtech usada por corretores de planos de saúde.",
    highlights: [
      "Sou responsável por uma frota de 5–6 robôs Playwright em produção (TypeScript/Node.js) que automatizam cotações nos portais das principais operadoras de saúde do Brasil.",
      "Adicionei observabilidade aos robôs (logs estruturados, traces, métricas no CloudWatch) para detectar e diagnosticar falhas mais rápido.",
      "Refatoro e fortaleço as automações continuamente conforme os portais de terceiros mudam.",
      "Criei repositórios e templates de projeto padronizados (Golden Path) para que novos serviços comecem com uma estrutura consistente.",
      "Opero serviços na AWS (EC2, S3, CloudWatch) e configuro políticas de IAM para controle de acesso.",
      "Escrevo e executo queries MySQL para apoiar as operações de backend e a consistência dos dados.",
      "Fiz o onboarding de três engenheiros seniores nos robôs de cotação e sou consultado nas decisões de arquitetura dos robôs.",
    ],
  },
  {
    title: "Estagiário de Análise de Dados",
    company: "SESI São Paulo",
    start: "jan 2025",
    end: "mar 2025",
    location: "São Paulo, presencial",
    type: "Estágio",
    highlights: [
      "Construí pipelines ETL em SQL e Python que melhoraram a consistência dos dados e a confiabilidade dos relatórios.",
      "Automatizei fluxos de dados recorrentes para reduzir trabalho manual.",
      "Entreguei dashboards em Power BI e traduzi requisitos de negócio em modelos de dados.",
    ],
  },
  {
    title: "Analista de Suporte e Infraestrutura de TI",
    company: "Preçolândia Comercial",
    start: "set 2023",
    end: "ago 2024",
    location: "São Paulo, presencial",
    type: "Tempo integral",
    highlights: [
      "Dei suporte a sistemas ERP, redes e infraestrutura de usuários em um ambiente de varejo.",
      "Automatizei tarefas rotineiras e a organização de dados para agilizar relatórios.",
      "Levantei requisitos com usuários de negócio e os transformei em ajustes técnicos.",
    ],
  },
];

export const educationPt: EducationItem[] = [
  {
    degree: "Tecnólogo",
    field: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade São Judas Tadeu",
    period: "jun 2024 – dez 2026",
    status: "Em andamento",
    note: "Fundamentos de engenharia de software, desenvolvimento backend, bancos de dados e arquitetura de sistemas.",
  },
  {
    degree: "Ensino fundamental",
    field: "Educação básica",
    institution: "Bridgewater Middle School",
    period: "fev 2017 – fev 2019",
    location: "Orlando, FL, EUA",
    note: "Dois anos de escola nos Estados Unidos, onde fiquei fluente em inglês.",
  },
];

export const certificationsPt: Certification[] = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    date: "2025",
    skills: ["Node.js", "SQL", "DevOps", "Cloud"],
  },
  {
    title: "JavaScript e TypeScript Avançado",
    issuer: "Udemy",
    date: "mar 2025",
    skills: ["JavaScript", "TypeScript", "Node.js", "APIs REST"],
  },
  {
    title: "CS50’s Introduction to Artificial Intelligence with Python",
    issuer: "HarvardX",
    date: "dez 2024",
    skills: ["Python", "Machine learning", "Deep learning", "IA"],
  },
  {
    title: "Cientista de Dados: O Curso Completo",
    issuer: "Udemy",
    date: "nov 2024",
    skills: ["Python", "SQL", "Power BI"],
  },
];

type ProjectText = Pick<
  Project,
  "title" | "tagline" | "description" | "kind" | "topics" | "problem" | "solution" | "challenges" | "architecture" | "security" | "takeaway"
>;

const projectTextPt: Record<string, ProjectText> = {
  "secure-task-management-api": {
    title: "Secure Task Management API",
    tagline: "API REST em que cada query fica restrita ao usuário que pediu.",
    description:
      "API RESTful com autenticação JWT e isolamento estrito de dados por usuário: validação de entrada, tratamento de erros centralizado e separação de tenants garantida no nível da query.",
    kind: "Projeto pessoal",
    topics: ["API REST", "Autenticação", "Segurança"],
    problem:
      "Uma API de tarefas precisa de isolamento completo de dados e autenticação segura: cada usuário só pode acessar as próprias tarefas, e essa garantia precisa valer na query, não só na interface.",
    solution:
      "Uma API de gestão de tarefas com autenticação JWT stateless e isolamento por usuário no MongoDB. Ela valida toda entrada, centraliza o tratamento de erros e mantém os tenants separados em todas as queries. O Docker Compose sobe a API e o banco com um comando.",
    challenges: [
      "Emitir, verificar e expirar JWTs com segurança",
      "Garantir o isolamento de dados entre usuários no banco",
      "Validação de requisições com tipagem em TypeScript",
      "Lidar com requisições concorrentes de forma eficiente",
      "Otimização de queries com índices",
      "Tratamento de erros e validação centralizados",
      "Arquitetura de autenticação stateless",
      "Setup multi-container com Docker Compose",
    ],
    architecture: {
      Backend: ["Node.js com TypeScript", "Express.js", "API RESTful", "Autenticação JWT"],
      "Banco de dados": ["MongoDB", "Mongoose ODM", "Isolamento garantido em cada query"],
      DevOps: ["Docker", "Docker Compose", "Setup multi-container"],
    },
    security: [
      "Autenticação com tokens JWT",
      "Hash de senhas com bcryptjs",
      "Tipagem TypeScript de ponta a ponta",
      "Rate limiting",
      "Configuração de CORS",
      "Isolamento completo dos dados de cada usuário",
    ],
    takeaway:
      "Design de API com segurança como padrão: autenticação, isolamento e validação desde o primeiro endpoint, e não adicionados depois.",
  },
  "intelligence-log-extractor": {
    title: "Intelligence Log Extractor",
    tagline: "Extrai datas, valores e nomes de textos bagunçados em cinco idiomas.",
    description:
      "Pipeline de dados com backend em FastAPI que extrai informações estruturadas (datas, valores monetários, nomes) de texto não estruturado, lidando com formatos internacionais de data e moeda, com resultados salvos em PostgreSQL.",
    kind: "Projeto pessoal",
    topics: ["Engenharia de dados", "i18n", "ETL"],
    problem:
      "Extrair dados estruturados de texto livre na mão é lento e sujeito a erro, ainda mais entre idiomas e formatos regionais: 1.500,50 €, $1,500.50 e 1'500.00 CHF são o mesmo tipo de valor escrito de três jeitos.",
    solution:
      "Um backend em FastAPI com dashboard em Streamlit que extrai campos estruturados de arquivos de texto. Suporta português, inglês, alemão, francês e espanhol, formatos internacionais de data e formatos de moeda europeu, americano e suíço, com processamento em background e uma visão de análise ao vivo.",
    challenges: [
      "Detectar formatos de data em vários idiomas (dd/mm/aaaa, aaaa-mm-dd, formatos alemães)",
      "Interpretar formatos de moeda europeu, americano e suíço",
      "Extrair nomes Unicode com acentos",
      "Construir um dashboard de análise interativo",
      "Processar arquivos grandes como jobs em background",
      "Escrever regras de extração sensíveis ao locale",
    ],
    architecture: {
      Backend: ["FastAPI com async/await", "Validação com Pydantic", "Processamento com Pandas", "Tarefas em background"],
      Análise: ["Dashboard em Streamlit", "Gráficos com Plotly", "Métricas ao vivo"],
      "Banco de dados": ["PostgreSQL", "Histórico e acompanhamento de jobs"],
    },
    security: [
      "Validação de entrada com Pydantic",
      "Tratamento de erros e logging",
      "Containerização com Docker",
      "Configuração por variáveis de ambiente",
    ],
    takeaway:
      "Engenharia de dados na parte menos glamourosa: formatos, locales e casos de borda, tratados por regras que dá para testar.",
  },
  "public-tender-radar": {
    title: "Public Tender Radar",
    tagline: "Encontra licitações públicas e calcula o quanto cada uma combina com a empresa.",
    description:
      "Backend de uma plataforma de licitações que ajuda empresas a descobrir editais públicos no Brasil: scraping com Playwright em vários portais, score de aderência baseado em palavras-chave, servido por uma API REST em FastAPI sobre MySQL.",
    kind: "Projeto pessoal",
    topics: ["Web scraping", "Matching", "Multi-tenant"],
    problem:
      "Empresas têm dificuldade para encontrar licitações que combinem com elas. Acompanhar vários portais do governo na mão é lento, sujeito a erro e faz oportunidades relevantes passarem despercebidas.",
    solution:
      "O backend de uma plataforma que descobre licitações e as pontua contra o perfil de cada empresa. Faz scraping de vários portais brasileiros, dá a cada licitação um score de aderência de 0 a 100, suporta português, inglês e alemão, e atende vários usuários por empresa com notificações.",
    challenges: [
      "Matching por palavras-chave entre várias fontes de dados",
      "Um scraper confiável para vários portais com Playwright",
      "Desenhar o score de aderência de 0 a 100",
      "Internacionalização em três idiomas",
      "Manter os dados consistentes entre as fontes de scraping",
      "Lidar com páginas dinâmicas e medidas anti-scraping",
      "Isolamento de dados multi-tenant",
      "Queries rápidas em uma tabela grande de licitações",
    ],
    architecture: {
      Backend: ["FastAPI (Python), async", "SQLAlchemy ORM", "Validação com Pydantic", "Autenticação JWT com bcrypt", "API REST"],
      Scraping: ["Automação de navegador com Playwright", "Extração em vários portais"],
      "Banco de dados": ["MySQL 8", "SQLAlchemy ORM", "Queries indexadas"],
    },
    security: [
      "Autenticação baseada em JWT",
      "Hash de senhas com bcrypt",
      "Validação de entrada com Pydantic",
      "Configuração de CORS",
      "Queries parametrizadas via ORM",
      "Configuração por variáveis de ambiente",
      "Isolamento de dados multi-tenant",
    ],
    takeaway:
      "O mesmo problema que resolvo no trabalho, fazer scraping de portais que nunca foram feitos para isso, aplicado a outro domínio e embrulhado em uma API multi-tenant.",
  },
};

export const projectsPt: Project[] = projectsEn.map((p) => ({
  ...p,
  ...(projectTextPt[p.id] ?? {}),
}));
