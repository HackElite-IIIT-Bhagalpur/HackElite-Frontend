// src/components/SkillDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const skills = [
  "Fundamentals of AI",
  "Core cybersecurity concepts",
  "Intrusion detection system development and optimization",
  "IoT security techniques",
  "Statistical and deep learning for anomaly detection",
  "Behavior analysis",
  "Adversarial attack countermeasures",
  "Data poisoning mitigation",
  "Model extraction prevention",
  "Advanced adversarial attack countermeasures",
  "Differential privacy techniques",
  "Federated learning",
  "Vulnerability scanning and assessment",
  "Robust defense development",
  "Adversarial training techniques",
  "Supply chain attack prevention",
  "Bug Bounty",
  "XSS",
  "SQL Injection",
  "OSINT",
  "CTF Challenges",
  "Linux Security",
  "Common JS Vulnerabilities"
];

export default function SkillDetails() {
  const { id } = useParams();
  const skill = skills[parseInt(id)];

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 text-black">
      <Link to="/skills" className="text-blue-500 hover:underline text-sm mb-2 block">
        &larr; Back to Skills
      </Link>
      <h2 className="text-3xl font-bold mt-4 mb-6">{skill}</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
        This section provides an overview of <strong>{skill}</strong>. It includes real-world applications, security implications, and practical examples related to this topic. You can enrich this with code samples, attack scenarios, or protection techniques.
      </p>
    </div>
  );
}
