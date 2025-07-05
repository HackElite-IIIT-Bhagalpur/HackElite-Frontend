import React from "react";
import { Link } from "react-router-dom";

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
  "XSS (Cross-Site Scripting)",
  "SQL Injection",
  "OSINT (Open Source Intelligence)",
  "CTF Challenges",
  "Linux Security",
  "Common JavaScript Bugs",
  "Phishing and Social Engineering",
  "Network Sniffing & Spoofing",
  "Cryptography Basics",
  "Reverse Engineering",
  "Digital Forensics",
  "Exploit Development",
  "Secure Code Practices"
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-100 px-6 py-12">
      {/* Gradient Header */}
      <div className="inline-block px-4 py-2 mb-6 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold shadow">
        Cybersecurity & AI Skills
      </div>

      <h1 className="text-4xl font-bold mb-8 text-gray-800">Skills Covered</h1>

      {/* Grid layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Link
            key={index}
            to={`/skill/${index}`}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition hover:scale-105 border-l-4 border-orange-400 hover:border-pink-500"
          >
            <span className="text-orange-500 text-lg mr-2">✔</span>
            <span className="text-gray-700 font-medium">{skill}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
