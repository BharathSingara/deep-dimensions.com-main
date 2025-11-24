import { Brain, Database, Globe, Shield } from "lucide-react";

export const services = {
    ai: {
        title: "AI Services",
        icon: Brain,
        color: "brand-primary",
        hero: {
            headline: "Deploy Custom AI Agents That Work 24/7 Without Fatigue",
            subheadline: "From concept to production in weeks. We build secure, scalable AI systems that automate workflows, engage customers, and unlock new efficiencies.",
        },
        valueProps: [
            { title: "Operational Efficiency", desc: "Automate repetitive tasks to free up your human talent." },
            { title: "24/7 Availability", desc: "Deploy intelligent agents that never sleep." },
            { title: "Data-Driven Precision", desc: "Leverage machine learning for better decision making." },
            { title: "Security by Design", desc: "Enterprise-grade data protection baked in." },
        ],
        kpis: [
            { label: "Manual Work Reduced", value: "70%" },
            { label: "Support Capacity", value: "3x" },
            { label: "Response Time", value: "<2s" },
            { label: "Cost Savings", value: "40%" },
        ],
        features: [
            { title: "Intelligent Agents", desc: "Custom LLM fine-tuning and autonomous workflows." },
            { title: "Conversational AI", desc: "Natural voice interfaces for support and internal tools." },
            { title: "Enterprise Integration", desc: "Seamless API connections to CRM and ERP systems." },
        ],
        process: [
            { title: "Discover", desc: "We audit workflows to find high-impact AI opportunities." },
            { title: "Design", desc: "We architect the solution with the right models." },
            { title: "Build", desc: "We develop a functional MVP in 2-6 weeks." },
            { title: "Scale", desc: "We monitor performance and retrain models." },
        ],
        subServices: [
            {
                title: "Custom AI Agents & Copilots",
                desc: "Purpose-built AI agents that understand your specific business logic. Whether it’s a legal research assistant or a coding copilot, our agents act as force multipliers.",
            },
            {
                title: "Voice AI & Assistants",
                desc: "Sophisticated voice AI systems that handle complex phone conversations, conduct interviews, or control industrial machinery with human-like responsiveness.",
            },
            {
                title: "AI for Content & Lead Gen",
                desc: "Generate hyper-personalized content at scale. From SEO-optimized blog posts to 1:1 cold outreach emails that actually get replies.",
            },
            {
                title: "Rapid AI Implementation",
                desc: "Validate an AI idea fast. We scope a tight MVP, use pre-built accelerators, and deploy a working solution in 2-6 weeks.",
            },
        ],
    },
    data: {
        title: "Data Consulting",
        icon: Database,
        color: "brand-secondary",
        hero: {
            headline: "Turn Your Data Swamp into a Strategic Goldmine",
            subheadline: "Stop struggling with siloed spreadsheets. We architect modern data warehouses and BI systems that deliver the truth—instantly.",
        },
        valueProps: [
            { title: "Single Source of Truth", desc: "Eliminate conflicting reports by unifying all data." },
            { title: "Real-Time Visibility", desc: "Live dashboards that show what's happening now." },
            { title: "Scalable Infrastructure", desc: "Built on Snowflake, BigQuery, and Databricks." },
            { title: "Data Quality Assurance", desc: "Automated testing pipelines ensure accuracy." },
        ],
        kpis: [
            { label: "Reporting Speed", value: "90%" },
            { label: "Data Accuracy", value: "100%" },
            { label: "Customer View", value: "360°" },
            { label: "Downtime", value: "Zero" },
        ],
        features: [
            { title: "Modern Data Stack", desc: "Cloud warehousing and robust ELT pipelines." },
            { title: "Advanced Analytics", desc: "Predictive modeling and interactive dashboards." },
            { title: "Data Governance", desc: "Cataloging, lineage, and role-based access control." },
        ],
        process: [
            { title: "Audit", desc: "We map your landscape and identify bottlenecks." },
            { title: "Architect", desc: "We design a scalable schema and tech stack." },
            { title: "Transform", desc: "We clean, model, and aggregate the data." },
            { title: "Visualize", desc: "We build dashboards that answer key questions." },
        ],
        subServices: [
            {
                title: "Data Warehousing & ETL",
                desc: "Centralize data into a modern cloud warehouse. We build robust pipelines to ensure your data is fresh, accurate, and ready for analysis.",
            },
            {
                title: "BI & Analytics",
                desc: "Turn complex datasets into intuitive, interactive dashboards. We design visualizations that highlight trends and opportunities instantly.",
            },
            {
                title: "Unstructured Data Processing",
                desc: "Unlock insights from documents, PDFs, and images using AI and NLP. Turn 'dark data' into a structured database.",
            },
            {
                title: "Data Strategy & Governance",
                desc: "Define a data strategy that aligns with business goals. We establish stewardship roles and security policies for compliance.",
            },
        ],
    },
    web: {
        title: "Web Development",
        icon: Globe,
        color: "brand-accent",
        hero: {
            headline: "High-Performance Web Experiences That Convert",
            subheadline: "From lightning-fast landing pages to complex web applications. We combine aesthetic excellence with deep technical engineering.",
        },
        valueProps: [
            { title: "Blazing Fast Speed", desc: "Obsessive optimization for Core Web Vitals." },
            { title: "Mobile-First Architecture", desc: "Perfect function on any device." },
            { title: "SEO Baked In", desc: "Technical SEO is the foundation of our code." },
            { title: "Scalable Backend", desc: "Built to handle traffic spikes without crashing." },
        ],
        kpis: [
            { label: "Google PageSpeed", value: "95+" },
            { label: "Conversion Uplift", value: "40%" },
            { label: "Uptime", value: "99.9%" },
            { label: "Accessibility", value: "100%" },
        ],
        features: [
            { title: "Modern Frontend", desc: "React, Next.js, and Tailwind CSS for app-like feel." },
            { title: "Headless CMS", desc: "Decoupled content for ultimate flexibility." },
            { title: "Performance Engineering", desc: "Edge caching and image optimization." },
        ],
        process: [
            { title: "Discovery", desc: "We understand your brand, audience, and goals." },
            { title: "Design", desc: "High-fidelity mockups and interactive prototypes." },
            { title: "Develop", desc: "Clean, semantic code with automated testing." },
            { title: "Launch", desc: "We handle DNS, SSL, and server configuration." },
        ],
        subServices: [
            {
                title: "Express Websites",
                desc: "Launch fast with custom-designed, high-performance sites in as little as 2 weeks. No templates, just clean code and stunning design.",
            },
            {
                title: "E-commerce Development",
                desc: "Digital storefronts that convert. We engineer shopping experiences on Shopify or custom stacks that are fast and frictionless.",
            },
            {
                title: "Performance Optimization",
                desc: "Deep-dive audits and refactoring to make your existing site fly. We optimize images, code, and caching for speed.",
            },
            {
                title: "Custom Web Apps",
                desc: "Powerful software in the browser. SaaS platforms, portals, and dashboards built with modern frameworks like React.",
            },
        ],
    },
    cyber: {
        title: "Cybersecurity",
        icon: Shield,
        color: "brand-gold",
        hero: {
            headline: "Secure Your Digital Future. Protect Your Brand.",
            subheadline: "From vulnerability assessments to 24/7 managed defense. We build resilient security postures that protect your assets.",
        },
        valueProps: [
            { title: "Proactive Defense", desc: "Find and fix vulnerabilities before attackers do." },
            { title: "Compliance Readiness", desc: "Prepare for SOC2, ISO 27001, HIPAA audits." },
            { title: "Business Continuity", desc: "Robust incident response plans." },
            { title: "DevSecOps", desc: "Security integrated into your development pipeline." },
        ],
        kpis: [
            { label: "Critical Vulns", value: "Zero" },
            { label: "Response Time", value: "<1 Hr" },
            { label: "Audit Pass Rate", value: "100%" },
            { label: "Monitoring", value: "24/7" },
        ],
        features: [
            { title: "Offensive Security", desc: "Penetration testing and Red Teaming." },
            { title: "Defensive Security", desc: "Cloud security posture and endpoint protection." },
            { title: "Governance & Risk", desc: "vCISO services and third-party risk management." },
        ],
        process: [
            { title: "Assess", desc: "Scan environment and map risks." },
            { title: "Harden", desc: "Fix vulnerabilities and configure baselines." },
            { title: "Monitor", desc: "24/7 surveillance for suspicious activity." },
            { title: "Respond", desc: "Rapid containment and neutralization of threats." },
        ],
        subServices: [
            {
                title: "Vulnerability Assessments",
                desc: "Ethical hackers simulate attacks to identify weak points in your apps and network. We find complex flaws that tools miss.",
            },
            {
                title: "Data Protection",
                desc: "Simplify compliance with GDPR, HIPAA, and SOC2. We implement encryption and access governance controls.",
            },
            {
                title: "Incident Response",
                desc: "Create and test plans so you know what to do when a breach happens. Minimize damage and downtime.",
            },
            {
                title: "Managed Security",
                desc: "Your 24/7 security team. We monitor your cloud and endpoints, filtering noise and neutralizing threats.",
            },
        ],
    },
};
