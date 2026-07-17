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
        title: "AI Interview Platform",
        subtitle : "Hyper-Realistic AI Mock-Interview Experience",
        year : "2025",
        imgURL : ai_interview,
        desc : "Built an end-to-end AI mock-interview platform that parses resumes, generates role-aware questions, and runs voice-enabled interviews with rubric-based evaluation. Features include the AI Confidence Pulse (live filler-word and pacing analytics), a Resume Proof Map that cross-references resume claims against interview evidence, anti-cheat proctoring, and a PDF scorecard with a 0–100 Interview Readiness Score. Powered by multi-provider LLM/ASR/TTS orchestration with automatic fallback, and deployed on a GitOps-driven, cloud-native AWS stack.",
        link : "https://github.com/BhautikVekariya21/ai-interview",
        gitlink : "https://github.com/BhautikVekariya21/ai-interview",
        techStack: ['React', 'TypeScript', 'Tailwind', 'FastAPI', 'MySQL', 'Docker', 'Kubernetes', 'AWS'],
    }
]
export default devProject; 
