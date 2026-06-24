// The five modular components (BUSINESS.md "modular components" table).
// The values per offering live in each offering's markdown front matter.
// This file only holds the component definitions + help text, so the
// /offerings comparison table can render the cross-product.

export interface Component {
  key: string;
  label: string;
  help: string;
}

export const components: Component[] = [
  {
    key: "access",
    label: "Customer Access",
    help: "What level of access you have to the operating system.",
  },
  {
    key: "monitoring",
    label: "Monitoring to You",
    help: "The monitoring we provide and share with you.",
  },
  {
    key: "action",
    label: "Action Authority",
    help: "Who responds to health alerts.",
  },
  {
    key: "response",
    label: "Alert Response Time",
    help: "How long we take to identify and respond to alerts.",
  },
  {
    key: "health",
    label: "Health Responsibility",
    help: "Who is ultimately responsible for the environment's health.",
  },
];

export const dialLabels: Record<string, string> = {
  you: "You run it",
  shared: "Shared",
  we: "We run it",
};