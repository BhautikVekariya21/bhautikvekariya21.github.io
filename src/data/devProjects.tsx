import aqi from "../assets/dev/aqi.png"
import ai_interview from "../assets/dev/ai_interview.png"

interface DevProjects {
    title :string,
    subtitle : string,
    year : string,
    imgURL : string,
    desc : string,
    link : string,
    gitlink : string,
    techStack:string[],
}

const devProject:DevProjects[] = [
    {
        title: "AQI Prediction MLOps Pipeline",
        subtitle : "Machine Learning & MLOps",
        year : "2025", 
        imgURL :  aqi, 
        desc : "Built a production-grade REST API for real-time Air Quality Index predictions across 29 Indian cities using XGBoost. Optimized model memory footprint by 70% for free-tier cloud deployment, reduced batch response times from 30s to under 3s with ThreadPoolExecutor, and established validation pipelines using MLflow and DVC.", 
        link : "https://aqi-predictor.lovable.app/",
        gitlink : "https://github.com/BhautikVekariya21/aqi-prediction-mlops",
        techStack: ['XGBoost', 'FastAPI', 'Docker', 'MLflow', 'DVC'],
    },
    {
        title: "AI Interview System",
        subtitle : "Full-Stack AI & Cloud Infrastructure",
        year : "2025",
        imgURL : ai_interview,
        desc : "An end-to-end AI mock-interview platform with resume parsing, role-aware question generation, and voice-enabled flows (TTS/ASR). Architected a 10-module FastAPI backend with Cassandra persistence, semantic resume retrieval using ChromaDB, and deployed the microservices stack on Kubernetes (EKS) with Kafka event streaming.", 
        link : "https://github.com/BhautikVekariya21/ai-interview",
        gitlink : "https://github.com/BhautikVekariya21/ai-interview",
        techStack: ['FastAPI', 'React', 'LLMs', 'Cassandra', 'Docker', 'Kubernetes', 'ChromaDB', 'Kafka'],
    }
]
export default devProject; 
