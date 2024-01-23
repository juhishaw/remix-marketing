import ReactParticles from "react-tsparticles";
import { options } from "../assets/particleConfig";

export default function ParticlesSection() {
  return (
    <>
      <ReactParticles width="100%" height="100%" options={options} />
    </>
  );
}